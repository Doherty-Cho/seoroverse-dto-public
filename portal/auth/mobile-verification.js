const { object, string, boolean } = require('yup')
const { SuccessObjectRes } = require('../../common/response')
const { AccountBase } = require('../user/account')

/** 휴대폰 인증코드 전송 요청 */
const SendMobileCodeRequest = object({
  mobile: string().label('휴대전화번호').required().min(11).max(12),
  type: string().label('인증사유코드').required().min(1).max(1),
})

/** 휴대폰 인증코드 확인 요청 */
const ConfirmMobileCodeRequest = SendMobileCodeRequest.shape({
  code: string().label('인증코드').required()
})

/** 휴대폰 인증코드 확인 결과 공통 항목 */
const ConfirmMobileCodeResultBase = object({
  is_success: boolean().label('인증성공 여부').required(),
  reason: string()
    .label('인증 실패 사유')
    .when('is_success', {
      is: false,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.nullable(),
    })
    .default(null),
})

/** 휴대폰 인증코드 확인 결과 (회원가입 하는 경우) */
const ConfirmRegistrationMobileCodeResult = ConfirmMobileCodeResultBase.shape({
  result: object({
    mobile_verified_token: string().label('회원가입 인증 토큰').default(null).required().nullable(),
  })
    .label('인증 결과 값')
    .when('is_success', {
      is: true,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.default(null).required().nullable(),
    }),
})

/** 휴대폰 인증코드 확인 결과 (계정 찾기 하는 경우) */
const ConfirmFindAccountMobileCodeResult = ConfirmMobileCodeResultBase.shape({
  result: AccountBase.label('인증 결과 값').when('is_success', {
    is: true,
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.default(null).required().nullable(),
  }),
})

/**
 * @description 휴대폰 인증코드 확인 결과 DTO (회원가입 하는 경우)
 * request uri: `/auth/confirm-mobile-code`
 */
const ConfirmRegistrationMobileCodeResponse = SuccessObjectRes(ConfirmRegistrationMobileCodeResult)

/**
 * @description 휴대폰 인증코드 확인 결과 DTO (계정 찾기 하는 경우)
 * request uri: `/auth/confirm-mobile-code`
 */
const ConfirmFindAccountMobileCodeResponse = SuccessObjectRes(ConfirmFindAccountMobileCodeResult)

module.exports = {
  SendMobileCodeRequest,

  ConfirmMobileCodeRequest,
  ConfirmRegistrationMobileCodeResponse,
  ConfirmFindAccountMobileCodeResponse,
}
