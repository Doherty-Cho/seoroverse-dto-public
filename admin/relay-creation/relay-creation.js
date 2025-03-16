require('../../common/yup_locale')

const { object, number, string, date, boolean } = require('yup')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { SuccessObjectRes } = require('../../common/response')

/**
 * @typedef 릴레이 창작전 공통 항목
 * @property {string | null | undefined} nckn_nm - 작성자 닉네임
 */
const CommonBase = object({
  nckn_nm: string().label('작성자 닉네임').nullable(),
})

/**
 * @typedef 창작물 검색 DTO
 * @property {number} id - 창작물 아이디
 * @property {string} pst_cn - 창작물 내용
 * @property {Date} crt_dt - 창작물 작성일시
 */
const CreationSearch = CommonBase.shape({
  /** 창작물 아이디 */
  id: number().label('창작물 아이디').nullable(),
  /** 창작물 내용 */
  pst_cn: string().label('내용').nullable(),
  /** 작성 일시 */
  crt_dt: date().label('작성일시').required(),
})

/**
 * @typedef 창작물 리스트 DTO
 * @property {number} id - 아이디
 * @property {number} rly_ctex_id - 주제 아이디
 * @property {number | null | undefined} up_pst_id - 상위 게시물 아이디
 * @property {number} wrtr_id - 작성자 아이디
 * @property {string} pst_cn - 게시물 내용
 * @property {boolean} dclr_yn - 신고여부
 * @property {Date} crt_dt - 창작물/댓글 작성일시
 * @property {number} inq_cnt - 조회수
 * @property {number} cmnt_cnt - 댓글수
 */
const CreationList = CommonBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 주제 아이디 */
  rly_ctex_id: number().label('주제아이디').required(),
  /** 상위 게시물 아이디 */
  up_pst_id: number().label('상위 게시물 아이디').nullable(),
  /** 작성자 아이디 */
  wrtr_id: number().label('작성자 ID').nullable(),
  /** 게시물 내용 */
  pst_cn: string().label('내용').max(4000).required(),
  /** 신고여부 */
  dclr_yn: boolean().label('신고여부').required().default(false),
  /** 작성 일시 */
  crt_dt: date().label('생성일시').required(),
  /** 조회수 */
  inq_cnt: number().label('조회수').required().default(0),
  /** 댓글 수 */
  cmnt_cnt: number().label('댓글수').required().default(0),
})

/**
 * @typedef 창작물 상세 DTO
 */
const CreationDetail = CreationList

/**
 * @typedef 댓글 검색 DTO
 * @property {number} id - 댓글 아이디
 * @property {string} pst_cn - 댓글 내용
 * @property {Date} crt_dt - 댓글 작성일시
 */
const CommentSearch = CommonBase.shape({
  /** 댓글 아이디 */
  id: number().label('댓글 ID').nullable(),
  /** 댓글 내용 */
  pst_cn: string().label('댓글 내용').nullable(),
  /** 작성 일시 */
  crt_dt: date().label('생성일시').required(),
})

/**
 * @typedef 댓글 리스트 DTO
 * @property {number} id - 아이디
 * @property {number} rly_ctex_id - 주제 아이디
 * @property {number | null | undefined} up_pst_id - 창작물 아이디
 * @property {number} wrtr_id - 댓글 작성자 아이디
 * @property {string} pst_cn - 댓글 내용
 * @property {boolean} dclr_yn - 신고여부
 * @property {Date} crt_dt - 댓글 작성일시
 * @property {string | null | undefined} up_pst_nckn_nm - 창작물 작성자 닉네임
 */
const CommentList = CommonBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 주제 아이디 */
  rly_ctex_id: number().label('주제아이디').required(),
  /** 창작물 아이디 */
  up_pst_id: number().label('상위 게시물 아이디').nullable(),
  /** 댓글 작성자 아이디 */
  wrtr_id: number().label('작성자 ID').nullable(),
  /** 댓글 내용 */
  pst_cn: string().label('내용').max(4000).required(),
  /** 신고여부 */
  dclr_yn: boolean().label('신고여부').required().default(false),
  /** 작성 일시 */
  crt_dt: date().label('작성 일시').required(),
  /** 창작물 작성자 닉네임 */
  up_pst_nckn_nm: string().label('창작물 작성자 닉네임').max(50).nullable(),
})

/**
 * @typedef 댓글 상세 DTO
 */
const CommentDetail = CommentList

/** 신고 검색 DTO */
/**
 * @typedef 신고 검색 DTO
 * @property {number} id - 창작물 아이디
 * @property {string} pst_cn - 창작물 내용
 * @property {Date} crt_dt - 신고 일시
 */
const ReportSearch = CommonBase.shape({
  /** 창작물 아이디 */
  id: number().label('게시물 ID').nullable(),
  /** 창작물 내용 */
  pst_cn: string().label('내용').nullable(),
  /** 신고 일시 */
  crt_dt: date().label('신고일시').required(),
})

/**
 * @typedef 신고 리스트 DTO
 * @property {number} id - 아이디
 * @property {number} dcl_id - 신고자 아이디
 * @property {string | null | undefined} dcl_nckn_nm - 신고자 닉네임
 * @property {number} dclr_trgt_id - 신고대상 아이디
 * @property {number} dclr_cmnt_id - 신고댓글아이디
 * @property {string} dclr_rsn_cd - 신고사유코드
 * @property {string} pst_cn - 창작물/댓글 내용
 * @property {boolean} warn_yn - 경고여부
 * @property {boolean} cmnt_warn_yn - 경고이력 여부
 * @property {Date} crt_dt - 댓글 작성일시
 */
const ReportList = CommonBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 신고자 아이디 */
  dcl_id: number().label('아이디').required(),
  /** 신고자 닉네임 */
  dcl_nckn_nm: string().label('신고자 작성자 닉네임').max(50).nullable(),
  /** 신고대상 아이디 */
  dclr_trgt_id: number().label('신고 대상 아이디').required(),
  /** 신고댓글아이디 */
  dclr_cmnt_id: number().label('신고 댓글 아이디').nullable(),
  /** 신고사유코드 그룹코드: DCLR_RSN_CD */
  dclr_rsn_cd: string().label('신고 사유 코드').required(),
  /** (신고된)창작물/댓글 내용 */
  pst_cn: string().label('내용').nullable(),
  /** 경고여부 */
  warn_yn: boolean().label('경고여부').required().default(false),
  /** 창작물/댓글 경고이력 여부 */
  cmnt_warn_yn: boolean().label('창작물/댓글 경고여부').required().default(false),
  /** 작성 일시 */
  crt_dt: date().label('생성일시').required(),
})

/**
 * @typedef 신고 상세 DTO
 * @property {number} acml_dclr_nmtm - 작성자 경고 누적수
 * @property {number} dcl_cnt - 신고수
 * @property {Date} crt_dt - 창작물 작성 일시
 */
const ReportDetail = ReportList.shape({
  /** 작성자 경고 누적수 */
  acml_dclr_nmtm: number().label('작성자 경고 누적수').required().default(0),
  /** 신고 수 */
  dcl_cnt: number().label('신고수').required().default(0),
  /** 창작물 작성 일시 */
  cmnt_crt_dt: date().label('창작물 작성 일시').required(),
})

/**
 * @typedef 창작전 주제 등록 DTO
 * @property {string} pst_cn - 주제
 * @property {Date} pstg_bgng_dt - 게시시작일
 * @property {Date} pstg_end_dt - 게시종료일
 * @property {number} wrtr_id - 작성자 아이디
 * @property {boolean} expsr_yn - 노출여부
 */
const SubjectCreate = object({
  /** 주제 */
  pst_cn: string().label('주제').max(1000).required().default(''),
  /** 게시시작일 */
  pstg_bgng_dt: date()
    .label('작성 가능 시작일시')
    .required()
    .default(
      (() => {
        const d = new Date()
        d.setDate(d.getDate() + 1)
        d.setHours(0, 0, 0, 0)
        return d
      })()
    ),
  /** 게시종료일 */
  pstg_end_dt: date()
    .label('작성 가능 마감일시')
    .required()
    .default(
      (() => {
        const d = new Date()
        d.setMonth(d.getMonth + 1)
        d.setHours(0, 0, 0, 0)
        return d
      })()
    ),
  /** 작성자 아이디 */
  wrtr_id: number().label('작성자 ID').nullable(),
  /** 노출여부 */
  expsr_yn: boolean().label('진행 여부').required().default(true),
})

/**
 * @typedef 창작전 주제 상세 DTO
 * @property {number} id - 아이디
 * @property {Date} cmnt_cnt - 댓글 수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const SubjectDetail = SubjectCreate.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 댓글 수 */
  cmnt_cnt: number().label('창작물 수').required().default(0),
  /** 관리자 로그인 아이디 */
  lgn_id: string().label('작성자 로그인 아이디').nullable(),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
  /** 수정일시 */
  mdfcn_dt: date().label('수정일시').required(),
})

/**
 * @typedef 창작물 검색 요청 DTO
 */
const CreationSearchReq = SearchListReq(CreationSearch)

/**
 * @typedef 창작물 검색 결과 DTO
 */
const CreationSearchRes = SuccessListRes(CreationList)

/**
 * @typedef 창작물 상세조회 결과 DTO
 */
const CreationDetailRes = SuccessObjectRes(CreationDetail)

/**
 * @typedef 댓글 검색 요청 DTO
 */
const CommentSearchReq = SearchListReq(CommentSearch)

/**
 * @typedef 댓글 검색 결과 DTO
 */
const CommentSearchRes = SuccessListRes(CommentList)

/**
 * @typedef 댓글 상세조회 결과 DTO
 */
const CommentDetailRes = SuccessObjectRes(CommentDetail)

/**
 * @typedef 신고 검색 요청 DTO
 */
const ReportSearchReq = SearchListReq(ReportSearch)

/**
 * @typedef 신고 검색 결과 DTO
 */
const ReportSearchRes = SuccessListRes(ReportList)

/**
 * @typedef 신고 상세조회 결과 DTO
 */
const ReportDetailRes = SuccessObjectRes(ReportDetail)

/**
 * @typedef 주제 상세조회 결과 DTO
 */
const SubjectDetailRes = SuccessObjectRes(SubjectDetail)

module.exports = {
  CreationSearch,
  CreationList,
  CreationDetail,
  CreationSearchReq,
  CreationSearchRes,
  CreationDetailRes,
  CommentSearch,
  CommentList,
  CommentDetail,
  CommentSearchReq,
  CommentSearchRes,
  CommentDetailRes,
  ReportSearch,
  ReportList,
  ReportDetail,
  ReportSearchReq,
  ReportSearchRes,
  ReportDetailRes,
  SubjectCreate,
  SubjectDetailRes,
}
