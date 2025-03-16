require('../../common/yup_locale')

const { string, object, number, boolean, date } = require('yup')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')

/**
 * 도감 검색 DTO
 * @property {number} id - 아이디
 * @property {boolean} wissy_yn - 명언여부
 * @property {Date} crt_dt - 작성일시
 */
const PictorialBookSearch = object({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 명언여부 */
  wissy_yn: boolean().label('명언여부').required(),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/**
 * 도감 목록 DTO
 * @property {string} ctgry_nm - 카테고리명
 * @property {string} ptrb_knd_nm - 도감종류명
 * @property {string} ptrb_src_nm - 도감출처명
 * @property {string} ptrb_cn - 도감내용
 * @property {boolean} collect_yn - 채집여부
 */
const PictorialBookList = PictorialBookSearch.shape({
  /** 카테고리명 */
  ctgry_nm: string().label('카테고리명').max(50).required(),
  /** 도감종류명 */
  ptrb_knd_nm: string().label('도감종류명').max(50).nullable(),
  /** 도감출처명 */
  ptrb_src_nm: string().label('도감출처명').max(50).nullable(),
  /** 도감내용 */
  ptrb_cn: string().label('도감내용').required(),
  /** 채집여부 */
  collect_yn: boolean().label('채집여부').required().default(false),
})

/**
 * 도감 채집 히스토리 등록 요청 DTO
 * @property {number} ptrb_id - 도감아이디
 */
const PictorialBookHistoryCreateReq = object({
  /** 도감 아이디 */
  ptrb_id: number().label('도감 아이디').required(),
})

/**
 * 도감 채집 히스토리 등록 DTO
 * @property {number} user_id - 사용자 아이디
 * @property {boolean} wissy_yn - 명언여부
 * @property {number} ptrb_id - 도감 아이디
 */
const PictorialBookHistoryCreate = PictorialBookHistoryCreateReq.shape({
  /** 사용자 아이디 */
  user_id: number().label('사용자 아이디').required(),
  /** 명언여부 */
  wissy_yn: boolean().label('명언여부').required(),
})

/**
 * 도감 검색 요청 DTO
 */
const PictorialBookSearchReq = SearchListReq(PictorialBookSearch)

/**
 * 도감 검색 결과 DTO
 */
const PictorialBookSearchRes = SuccessListRes(PictorialBookList)

module.exports = {
  PictorialBookSearchReq,
  PictorialBookSearchRes,
  PictorialBookHistoryCreateReq,
  PictorialBookHistoryCreate,
}
