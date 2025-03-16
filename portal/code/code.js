const { object, number, string, array } = require('yup')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')

/**
 * 공통코드 등록 DTO
 * @property {string} group_cd 그룹코드
 */
const CodeSearch = object({
  /** 사용여부 */
  group_cd: array().of(string().required()),
})

/**
 * 공통코드 목록 DTO
 * @property {string} group_cd 그룹코드
 * @property {string} group_nm 그룹명
 * @property {ArraySchema} list 코드목록
 */
const CodeList = object({
  /** 그룹코드 */
  group_cd: string().label('그룹코드').required(),
  /** 그룹명 */
  group_nm: string().label('그룹명').nullable(),
  /** 코드목록 */
  list: array().of(
    object({
      /** 코드 */
      cd: string().label('코드').required(),
      /** 코드명 */
      cd_nm: string().label('코드명').required(),
      /** 표시순서 */
      indct_seq: number().label('표시순서').required().integer().min(0),
    })
  ),
})

/**
 * 공통코드 검색 요청 DTO
 */
const CodeSearchReq = SearchListReq(CodeSearch)

/**
 * 공통코드 검색 결과 DTO
 */
const CodeSearchRes = SuccessListRes(CodeList)

module.exports = {
  CodeSearch,
  CodeList,
  CodeSearchReq,
  CodeSearchRes,
}
