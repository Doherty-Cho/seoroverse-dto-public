const { object, number, string, boolean, array } = require('yup')
const { REG_TYPE } = require('../../common/code')
const { DeviceAgent } = require('./auth')
const { nckn_nm } = require('../../common/field')

const RegistrationBase = object({
  mbl_telno: string().label('모바일전화번호').max(11).required(),
  nckn_nm: nckn_nm,
  reg_type_cd: string().label('가입유형').oneOf(Object.values(REG_TYPE)).required(),
  policy_agreements: array()
    .label('약관별 동의여부')
    .of(
      object({
        plcy_id: number().label('정책아이디').required(),
        agre_yn: boolean().label('동의여부').required(),
      })
    )
    .required(),
  mobile_verified_token: string().label('회원가입 인증 토큰').required(),
  agent: DeviceAgent.label('기기 정보'),
})

const EmailRegistrationReq = RegistrationBase.shape({
  reg_type_cd: string().label('가입유형').oneOf([REG_TYPE.LOCAL]).required(),
  eml_addr: string().label('이메일주소').max(320).required(),
  password: string().label('비밀번호').required().min(1),
})

const SocialRegistrationReq = RegistrationBase.shape({
  reg_type_cd: string()
    .label('가입유형')
    .oneOf([REG_TYPE.APPLE, REG_TYPE.KAKAO, REG_TYPE.GOOGLE, REG_TYPE.NAVER])
    .required(),
  social_token: string().label('소셜 액세스 토큰').required(),
})

const LibraryRegistrationReq = RegistrationBase.shape({
  reg_type_cd: string().label('가입유형').oneOf([REG_TYPE.IKSAN, REG_TYPE.JEONJU]).required(),
  lib_acnt_nm: string().label('도서관계정명').max(100).required(),
  lib_key_no: string().label('도서관계정키번호').max(200).required(),
})

module.exports = {
  EmailRegistrationReq,
  SocialRegistrationReq,
  LibraryRegistrationReq,
}
