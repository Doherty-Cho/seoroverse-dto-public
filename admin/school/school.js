require('../../common/yup_locale')

const { object, number, string, date } = require('yup')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { SuccessObjectRes } = require('../../common/response')

/**
 * 학교정보 공통 항목
 * @property {string} school_nm - 학교이름
 * @property {string} school_address - 학교 주소
 */
const SchoolManagementBase = object({
  /** 학교 이름 */
  school_nm: string().label('학교 이름').max(100).required(),
  /** 학교 주소 */
  school_address: string().label('학교 주소').max(200).required(),
})

/**
 * 학교 정보 등록 DTO
 * @property {string | null | undefined} school_nm - 학교 이름
 * @property {string | null | undefined} school_address - 학교 주소
 */
const SchoolManagementCreate = SchoolManagementBase.shape({
  /** 학교 이름 */
  school_nm: string().label('학교 이름').nullable(),
  /** 학교 주소 */
  school_address: string().label('학교 주소').nullable(),
})

/**
 * 학교 정보 수정 DTO
 */
const SchoolManagementUpdate = SchoolManagementCreate

/**
 * 학교 정보 검색 DTO
 * @property {number} id
 * @property {string | null | undefined} school_nm - 학교 이름
 * @property {string | null | undefined} school_address - 학교 주소
 */
const SchoolManagementSearch = SchoolManagementCreate.shape({
  /** 아이디 */
  id: number().label('아이디').nullable(),
  /** 학교 이름 */
  school_nm: string().label('학교 이름').nullable(),
  /** 학교 주소 */
  school_address: string().label('학교 주소').nullable(),
})

/**
 * 학교 정보 목록 DTO
 * @property {number} id - 아이디
 * @property {string} school_nm - 학교 이름
 * @property {string} school_address - 학교 주소
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const SchoolManagementList = SchoolManagementBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 학교 이름 */
  school_nm: string().label('학교 이름').required(),
  /** 학교 주소 */
  school_address: string().label('학교 주소').required(),
  /** 생성일시 */
  crt_dt: date().label('작성일시').required(),
  /** 수정일시 */
  mdfcn_dt: date().label('작성일시').required(),
})

/** 학교 정보 상세 DTO
 * @property {string} school_nm - 학교 이름
 * @property {string} school_address - 학교 주소
 */
const SchoolManagementDetail = SchoolManagementList.shape({
  /** 학교 이름 */
  school_nm: string().label('학교 이름').required(),
  /** 학교 주소 */
  school_address: string().label('학교 주소').required(),
})

/**
 * 학교 정보 검색 요청 DTO
 */
const SchoolManagementSearchReq = SearchListReq(SchoolManagementSearch)

/**
 * 학교 정보 검색 결과 DTO
 */
const SchoolManagementSearchRes = SuccessListRes(SchoolManagementList)

/**
 * 학교 정보 상세조회 결과 DTO
 */
const SchoolManagementDetailRes = SuccessObjectRes(SchoolManagementDetail)

module.exports = {
  SchoolManagementSearch,
  SchoolManagementList,
  SchoolManagementDetail,
  SchoolManagementCreate,
  SchoolManagementUpdate,
  SchoolManagementSearchReq,
  SchoolManagementSearchRes,
  SchoolManagementDetailRes,
}
