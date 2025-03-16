const { object, number, string } = require('yup')
const { SuccessObjectRes } = require('../../common/response')

/** 사용자 공통 항목 */
const AccountBase = object({
  id: number().label('유저 아이디').required(),
  mbl_telno: string().label('모바일전화번호').max(11).required(),
  reg_type_cd: string().label('계정 등록유형코드').max(1).required(),
  eml_addr: string().label('이메일').max(320).required(),
  mobile_verified_token: string()
    .label('비밀번호 재설정 인증 토큰')
    .default(null)
    .required()
    .nullable(),
})

/** 계정 찾기 결과 (계정 조회) 결과 DTO */
const AccountRes = SuccessObjectRes(AccountBase)

module.exports = {
  AccountBase,
  AccountRes,
}
