const { object, number, string, date, array } = require('yup')
const { SuccessObjectRes } = require('../../common/response')
const { REG_TYPE } = require('../../common/code')
const { nckn_nm } = require('../../common/field')
const { MAX_REPORTED_CNT } = require('../../common/const')
const { UserSocialAccountReq } = require('../user/user')

const DeviceAgent = object({
  fcm_token: string().nullable(),
  platform: object({
    os: string().required(),
    device_id: string().required(),
    app_version: string().required(),
    device_model: string().required(),
  }),
  os: string().required(),
  sdk_version: string().required(),
})

/**
 * @description 포탈 로그인 요청
 * @property {string} email - 이메일
 * @property {string} password - 비밀번호
 * @property {ObjectSchema} agent - agent
 */
const PortalLoginRequest = object({
  /** login id */
  email: string().label('이메일').required().min(1),
  /** password */
  password: string().label('비밀번호').required().min(1),
  /** agent */
  agent: DeviceAgent,
})

/**
 * @description 포탈 로그인 결과
 * @property {ObjectSchema} user - 사용자 정보
 * @property {string} token - 인증토큰
 */
const PortalLoginResult = object({
  user: object({
    /** 사용자 id */
    id: number().integer().required(),
    /** 닉네임 */
    nckn_nm: nckn_nm,
    /** 비밀번호 변경일시 */
    pswd_chg_dt: date().nullable(),
    /** email list */
    emails: array(
      object({
        /** email id */
        id: number().integer().required(),
        /** email */
        eml_addr: string().email().required(),
        /** 등록유형 */
        reg_type_cd: string().required().oneOf(Object.values(REG_TYPE)),
      })
    ),
  }).required(),
  current_reported_cnt: number().label('현재 누적 신고 횟수').default(0).required().min(0),
  max_reported_cnt: number().label('최대 누적 신고 횟수').default(MAX_REPORTED_CNT).required(),

  /** 인증토큰 */
  token: string().required(),
})

/** 포탈 게스트 로그인 결과 */
const PortalGuestLoginResult = PortalLoginResult.shape({ user: object().nullable().default(null) })

/** 포탈 소셜 계정 정보 조회 요청값 */
const PortalSocialLoginRequest = UserSocialAccountReq.shape({ agent: DeviceAgent })

/**
 * @description 포탈 로그아웃 결과
 * @property {ObjectSchema} user - 사용자 정보
 */
const PortalLogoutResult = object({
  user: object().nullable().default(null),
})

/**
 * @description 포탈 로그인 결과 응답
 * request uri: `/portal/auth/login`
 */
const PortalLoginResponse = SuccessObjectRes(PortalLoginResult)

/**
 * @description 포탈 게스트 로그인 결과 응답
 * request uri: `/auth/guest-login`
 */
const PortalGuestLoginResponse = SuccessObjectRes(PortalGuestLoginResult)

/**
 * @description 포탈 로그아웃 결과 응답
 * request uri: `/portal/auth/logout`
 */
const PortalLogoutResponse = SuccessObjectRes(PortalLogoutResult)

module.exports = {
  DeviceAgent,

  PortalLoginRequest,
  PortalLoginResult,
  PortalLoginResponse,
  PortalGuestLoginResponse,
  PortalLogoutResult,
  PortalLogoutResponse,
  PortalSocialLoginRequest,
}
