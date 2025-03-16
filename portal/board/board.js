require('../../common/yup_locale')

const { object, number, string, date } = require('yup')
const { PST_SE_CD } = require('../../common/code')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { SuccessObjectRes } = require('../../common/response')

/**
 * 게시물 공통 항목
 * @property {string} pst_se_cd - 게시물구분
 * @property {number | null | undefined} rgn_lib_id - 지역도서관 아이디
 * @property {string} pst_ttl - 공지유형코드
 * @property {number | null | undefined} mngr_id - 공간지기아이디
 */
const BoardBase = object({
  /** 게시물구분코드: PST_SE_CD */
  pst_se_cd: string().label('게시물구분코드').required().oneOf(Object.values(PST_SE_CD)),
  /** 지역도서관 아이디 */
  rgn_lib_id: number().label('지역도서관 아이디').nullable(),
  /** 게시물제목 */
  pst_ttl: string().label('게시물 제목').max(200).required(),
  /** 작성자 아이디 */
  wrtr_id: number().label('작성자 ID').nullable(),
})

/**
 * 게시물 등록
 * @property {string} pst_se_cd - 게시물구분
 * @property {string} pst_cn - 게시물내용
 */
const BoardCreate = BoardBase.shape({
  /** 게시물구분코드: PST_SE_CD */
  pst_se_cd: string().label('게시물구분코드').nullable().oneOf(Object.values(PST_SE_CD)),
  /** 게시물내용 */
  pst_cn: string().label('게시글 내용').max(4000).required(),
})

/** 게시물 수정 DTO */
const BoardUpdate = BoardCreate

/** 게시물 검색 DTO */
const BoardSearch = BoardBase

/**
 * 게시물 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
const BoardList = BoardBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/** 게시글 상세 DTO
 * @property {string} pst_cn - 게시글 내용
 */
const BoardDetail = BoardList.shape({
  /** 게시글 내용 */
  pst_cn: string().label('게시글 내용').max(4000).required(),
})

/** 게시글 검색 요청 DTO */
const BoardSearchReq = SearchListReq(BoardSearch)

/** 게시글 검색 결과 DTO */
const BoardSearchRes = SuccessListRes(BoardList)

/** 게시글 상세조회 결과 DTO */
const BoardDetailRes = SuccessObjectRes(BoardDetail)

module.exports = {
  BoardSearch,
  BoardList,
  BoardDetail,
  BoardCreate,
  BoardUpdate,
  BoardSearchReq,
  BoardSearchRes,
  BoardDetailRes,
}
