const { object, number, string, date } = require('yup')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { SuccessObjectRes } = require('../../common/response')

/**
 * 약관 공통 항목
 * @property {string} trms_ttl - 약관제목명
 * @property {number} esntl_yn - 필수여부
 * @property {Date} enfc_bgng_dt - 시행시작일시
 * @property {number} updt_trms_agre_need_yn - 갱신약관동의필요여부
 */
const PolicyBase = object({
  /** 약관 제목 */
  trms_ttl: string().label('약관제목명').max(100).required(),
  /** 필수여부 */
  esntl_yn: number().label('필수여부').required().integer().oneOf([0, 1]),
  /** 시행일시 */
  enfc_bgng_dt: date().label('시행시작일시').required(),
  /** 갱신약관동의필요여부 */
  updt_trms_agre_need_yn: number()
    .label('갱신약관동의필요여부')
    .required()
    .integer()
    .oneOf([0, 1])
    .default(0),
})

/**
 * 약관 등록 DTO
 * @property {string} trms_cn - 약관내용
 */
const PolicyCreate = PolicyBase.shape({
  /** 약관내용 */
  trms_cn: string().label('약관 내용').required(),
})

/**
 * 약관 검색 DTO
 * @property {Date} crt_dt - 작성일시
 */
const PolicySearch = PolicyCreate.shape({
  /** 작성일시 */
  crt_dt: date().label('작성일시'),
})

/**
 * 약관 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
const PolicyList = PolicyBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/**
 * 약관 상세 DTO
 * @property {string} trms_cn - 약관내용
 * @property {Date} mdfcn_dt - 수정일시
 */
const PolicyDetail = PolicyList.shape({
  /** 약관내용 */
  trms_cn: string().label('약관 내용').required(),
  /** 수정일시 */
  mdfcn_dt: date().label('수정일시').required(),
})

/** 약관 검색 요청 DTO */
const PolicySearchReq = SearchListReq(PolicySearch)

/** 약관 검색 결과 DTO */
const PolicySearchRes = SuccessListRes(PolicyList)

/** 약관 상세조회 결과 DTO */
const PolicyDetailRes = SuccessObjectRes(PolicyDetail)

module.exports = {
  PolicySearch,
  PolicyList,
  PolicyDetail,
  PolicyCreate,
  PolicySearchReq,
  PolicySearchRes,
  PolicyDetailRes,
}
