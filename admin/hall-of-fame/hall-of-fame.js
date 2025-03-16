require('../../common/yup_locale')

const { string, object, number, date, boolean } = require('yup')
const { REG_TYPE, HOF_SE_CD, HOF_DTL_SE_CD } = require('../../common/code')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { nckn_nm: nickNm } = require('../../common/field')

/**
 * @typedef 명예의 전당 공통 항목
 * @property {string} crtr_ym - 기준연월
 * @property {string} hof_se_cd - 명예의전당구분코드
 * @property {string} hof_dtl_se_cd - 명예의전당상세구분코드
 */
const HallOfFameManagement = object({
  /** 기준연월 */
  crtr_ym: string().label('기준연월').required().max(7),
  /** 명예의전당구분코드 : 공통코드 HOF_SE_CD */
  hof_se_cd: string().label('명예의전당구분코드').required().oneOf(Object.values(HOF_SE_CD)),
  /** 명예의전당상세구분코드 : 공통코드 HOF_DTL_SE_CD */
  hof_dtl_se_cd: string()
    .label('명예의전당상세구분코드')
    .required()
    .oneOf(Object.values(HOF_DTL_SE_CD)),
})

/**
 * @typedef 명예의전당 검색 DTO
 */
const HallOfFameManagementSearch = HallOfFameManagement

/**
 * 명예의 전당 조회 결과 DTO
 * @property {number} id - 아이디
 * @property {number} rank - 랭킹
 * @property {number} user_id - 사용자아이디
 * @property {boolean} cmpn_give_yn - 보상지급여부
 * @property {number} whol_scr - 전체점수
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {Date} crt_dt - 가입날짜
 * @property {string} eml_addr - 아이디(이메일)
 * @property {string} nckn_nm - 아바타 닉네임
 * @property {number} bkmny_amt - 책머니
 */
const HallOfFameManagementList = HallOfFameManagement.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 랭킹 */
  rank: number().label('랭킹').required(),
  /** 사용자아이디 */
  user_id: number().label('사용자아이디').required(),
  /** 보상지급여부 */
  cmpn_give_yn: boolean().label('보상지급여부').required(),
  /** 전체점수 */
  whol_scr: number().label('전체점수').required(),
  /** 가입유형(등록유형) */
  reg_type_cd: string().label('가입유형').oneOf(Object.values(REG_TYPE)).required(),
  /** 가입날짜 */
  crt_dt: date().label('가입날짜').required(),
  /** 아이디(이메일) */
  eml_addr: string().label('아이디').required(),
  /** 아바타 닉네임 */
  nckn_nm: nickNm,
  /** 책머니 */
  bkmny_amt: number().label('책머니').required().default(0),
})

/**
 * @typedef 명예의전당 검색 요청 DTO
 */
const HallOfFameManagementSearchReq = SearchListReq(HallOfFameManagementSearch)

/**
 * @typedef 명예의전당 검색 결과 DTO
 */
const HallOfFameManagementSearchRes = SuccessListRes(HallOfFameManagementList)

module.exports = {
  HallOfFameManagementSearchReq,
  HallOfFameManagementSearchRes,
}
