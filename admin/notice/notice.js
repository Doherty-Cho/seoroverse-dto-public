require('../../common/yup_locale')

const { object, number, string, date, boolean } = require('yup')
const { NOTICE_TYPE } = require('../../common/code')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { SuccessObjectRes } = require('../../common/response')

/**
 * 공지사항 공통 항목
 * @property {string} ntc_type_cd - 공지유형코드
 * @property {string} ntc_nm - 공지제목
 * @property {boolean | undefined} expsr_yn - 노출여부
 * @property {Date | null | undefined} pstg_bgng_dt - 게시일시
 * @property {boolean | undefined} html_use_yn - HTML사용여부
 * @property {number | null | undefined} mngr_id - 관리자아이디
 */
const NoticeBase = object({
  /** 공지유형코드 */
  ntc_type_cd: string()
    .label('공지유형코드')
    .required()
    .oneOf(Object.values(NOTICE_TYPE))
    .default(NOTICE_TYPE.NOTICE),
  /** 공지제목 */
  ntc_nm: string().label('공지사항 제목').max(100).default('').required(),
  /** 노출여부 */
  expsr_yn: boolean().label('노출 설정').required().default(true),
  /** 게시일시 */
  pstg_bgng_dt: date().label('노출예약 일시').nullable(),
  /** HTML사용여부 */
  html_use_yn: boolean().label('HTML사용여부').required().default(false),
  /** 관리자아이디 */
  mngr_id: number().label('작성자 ID').nullable(),
})

//  NoticeDetail: ObjectSchema<{
//     ntc_type_cd: string;
//     ntc_nm: string;
//     expsr_yn: NonNullable<boolean | undefined>;
//     pstg_bgng_dt: Date | null | undefined;
//     html_use_yn: NonNullable<boolean | undefined>;
//     mngr_id: number | null | undefined;
//     id: number;
//     inq_cnt: number;
//     lgn_id: string | null | undefined;
//     ntc_cn: string;
//     crt_dt: Date;
//     file_url_addr: string | null | undefined;
//     file_nm: string | null | undefined;
//     file_sz: number | null | undefined;
//     mdfcn_dt: Date;
//     next_id: number | null | undefined;
//     prev_id: number | null | undefined;
// }, AnyObject, {

/**
 * 공지사항 등록 DTO
 * @property {string} ntc_cn - 공지내용
 * @property {number | null} atch_file_id - 첨부파일아이디
 */
const NoticeCreate = NoticeBase.shape({
  /** 공지내용 */
  ntc_cn: string().label('공지사항 내용').max(1000).default('').required(),
  /** 첨부파일아이디 */
  atch_file_id: number().label('첨부파일 아이디').nullable().default(0),
})

/**
 * 공지사항 수정 DTO
 */
const NoticeUpdate = NoticeCreate

/**
 * 공지사항 검색 DTO
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
const NoticeSearch = NoticeCreate.shape({
  /** 작성자 로그인 아이디 */
  lgn_id: string().label('작성자 로그인 아이디').nullable(),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/**
 * 공지사항 목록 DTO
 * @property {number} id - 아이디
 * @property {number} inq_cnt - 조회수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {string | undefined} ntc_cn - 공지내용
 * @property {Date} crt_dt - 작성일시
 */
const NoticeList = NoticeBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 조회수 */
  inq_cnt: number().label('조회수').default(0),
  /** 작성자 로그인 아이디 */
  lgn_id: string().label('작성자 로그인 아이디').nullable(),
  /** 공지내용 */
  ntc_cn: string().label('공지사항 내용'),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/** 공지사항 상세 DTO
 * @property {string} ntc_cn - 공지내용
 * @property {string | null | undefined} file_url_addr - 파일 URL
 * @property {string | null | undefined} file_nm - 파일명
 * @property {number | null | undefined} file_sz - 파일크기
 * @property {Date} mdfcn_dt - 수정일시
 * @property {number} inq_cnt - 조회수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {number | null | undefined} next_id - 다음 공지사항 id
 * @property {number | null | undefined} prev_id - 이전 공지사항 id
 */
const NoticeDetail = NoticeList.shape({
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
  /** 작성자 로그인 아이디 */
  lgn_id: string().label('작성자 로그인 아이디').nullable(),
  /** 다음 공지사항 id */
  next_id: number().nullable(),
  /** 이전 공지사항 id */
  prev_id: number().nullable(),
})

/**
 * 공지사항 검색 요청 DTO
 */
const NoticeSearchReq = SearchListReq(NoticeSearch)

/**
 * 공지사항 검색 결과 DTO
 */
const NoticeSearchRes = SuccessListRes(NoticeList)

/**
 * 공지사항 상세조회 결과 DTO
 */
const NoticeDetailRes = SuccessObjectRes(NoticeDetail)

module.exports = {
  NoticeSearch,
  NoticeList,
  NoticeDetail,
  NoticeCreate,
  NoticeUpdate,
  NoticeSearchReq,
  NoticeSearchRes,
  NoticeDetailRes,
}
