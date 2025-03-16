const { object, number, string, boolean, array } = require('yup')
const { SuccessObjectRes } = require('../../common/response')

/**
 * @description 로그인 결과
 */
const AdminLoginResult = object({
  /** 비밀번호 변경 필요 여부 */
  require_password_update: boolean().required(),
  /** 인증토큰 */
  token: string().required(),
  /** 메뉴목록 */
  menus: array().of(
    object({
      /** 메뉴 ID */
      id: number().integer().required(),
      /** 메뉴명 */
      menu_nm: string().required(),
      /** 개인정보 포함 여부 */
      prvc_incl_yn: boolean().required(),
      /** 메뉴 route */
      prgrm_path_nm: string().required(),
    })
  ),
})

/**
 * @description 휴대폰 인증코드 전송 요청
 */
const SendMobileCodeRequest = object({
  /** 휴대전화번호 */
  mobile: string().required().min(11).max(12),
  type: string().required().min(1).max(1),
})
const SendMobileCodeResponseult = object({
  /* empty */
})

/**
 * @description 휴대폰 인증코드 확인 요청
 */
const ConfirmMobileCodeRequest = object({
  /** 휴대전화번호 */
  mobile: string().required().min(11).max(12),
  code: string().required().min(4).max(6),
})

/**
 * @description 휴대폰 인증코드 확인 결과
 */
const ConfirmMobileCodeResult = object({
  /** 휴대전화번호 */
  mobile: string().required().min(11).max(12),

  /** 인증성공 여부 */
  is_success: boolean().required(),

  /** 가입여부 */
  is_joined: boolean().when('is_success', {
    is: true,
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.nullable(),
  }),

  /** email 계정 등록 여부 */
  has_email_account: boolean().when('is_success', {
    is: true,
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.nullable(),
  }),

  /** 해쉬값 */
  hash: string().when('is_success', {
    is: true,
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.nullable(),
  }),

  /** 인증 실패 사유 */
  reason: string().when('is_success', {
    is: false,
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.nullable(),
  }),
})

/**
 * @description 로그인 결과
 * request uri: `/admin/auth/login`
 */
const AdminLoginResponse = SuccessObjectRes(AdminLoginResult)

/**
 * @description 휴대폰 인증코드 전송 결과
 * request uri: `/admin/auth/send-mobile-code`
 */
const SendMobileCodeResponse = SuccessObjectRes(SendMobileCodeResponseult)

/**
 * @description 휴대폰 인증코드 확인 결과
 * request uri: `/admin/auth/confirm-mobile-code`
 */
const ConfirmMobileCodeResponse = SuccessObjectRes(ConfirmMobileCodeResult)

module.exports = {
  AdminLoginResponse,

  SendMobileCodeRequest,
  SendMobileCodeResponse,

  ConfirmMobileCodeRequest,
  ConfirmMobileCodeResponse,
}
