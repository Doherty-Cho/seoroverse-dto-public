require('../../common/yup_locale')

const { object, number, string, date, boolean, array } = require('yup')
const { NOTICE_TYPE } = require('../../common/code')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { SuccessObjectRes } = require('../../common/response')

/** 공지사항 공통 항목 */
const SampleBase = object({
  /** 공지유형코드 */
  ntc_type_cd: string().label('공지유형코드').required().oneOf(Object.values(NOTICE_TYPE)),
  /** 공지제목 */
  ntc_nm: string().label('공지사항 제목').max(200).required(),
  /** 노출여부 */
  expsr_yn: boolean().label('노출 설정').required().default(true),
  /** 게시일시 */
  pstg_bgng_dt: date().label('노출예약 일시').nullable(),
  /** HTML사용여부 */
  html_use_yn: boolean().label('HTML사용여부').required().default(false),
  /** 관리자아이디 */
  mngr_id: number().label('작성자 ID').nullable(),
})

/** 공지사항 등록 DTO */
const SampleCreate = SampleBase.shape({
  /** 공지내용 */
  ntc_cn: string().label('공지사항 내용').max(4000).required(),
  /** 첨부파일아이디 */
  atch_file_id: number().label('첨부파일 아이디').nullable().default(0),
})

/** 공지사항 수정 DTO */
const SampleUpdate = SampleCreate

/** 공지사항 검색 DTO */
const SampleSearch = SampleCreate.shape({
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/** 공지사항 목록 dto */
const SampleList = SampleBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/** 공지사항 상세 dto */
const SampleDetail = SampleList.shape({
  /** 공지내용 */
  ntc_cn: string().label('공지사항 내용').max(4000).required(),
  /** 파일 URL */
  file_url_addr: string().label('파일 URL').nullable(),
  /** 파일명 */
  file_nm: string().label('파일명').nullable(),
  /** 파일크기 */
  file_sz: number().label('파일크기').integer().nullable(),
  /** 수정일시 */
  mdfcn_dt: date().label('수정일시').required(),
  /** 조회수 */
  inq_cnt: number().label('조회수').required().default(0),
  /** 다음 공지사항 id */
  next_id: number().nullable(),
  /** 이전 공지사항 id */
  prev_id: number().nullable(),
})

/** 공지사항 검색 요청 DTO */
const SampleSearchReq = SearchListReq(SampleSearch)

/** 공지사항 검색 결과 DTO */
const SampleSearchRes = SuccessListRes(SampleList)

/** 공지사항 상세조회 결과 DTO */
const SampleDetailRes = SuccessObjectRes(SampleDetail)

module.exports = {
  SampleSearch,
  SampleList,
  SampleDetail,
  SampleCreate,
  SampleUpdate,
  SampleSearchReq,
  SampleSearchRes,
  SampleDetailRes,
}
