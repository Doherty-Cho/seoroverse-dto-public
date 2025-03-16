const { object, number, string, date, array } = require('yup')
const { SearchListReq } = require('../../common/request')
const { SuccessListRes } = require('../../common/response')
const { SuccessObjectRes } = require('../../common/response')
const { FileBase: file } = require('../../common/file')

/**
 * 도서관 공통 항목
 * @property {number} spce_kep_id - 공간지기 아이디
 * @property {string} rgn_cd - 지역코드
 * @property {string} lib_type_cd - 도서관유형코드
 */
const LibraryBase = object({
  /** 공간지기 아이디 */
  spce_kep_id: number().label('공간지기 아이디').nullable(),
  /** 지역코드 */
  rgn_cd: string().label('지역코드').max(1).required(),
  /** 도서관유형코드 */
  lib_type_cd: string().label('도서관유형코드').max(1).required(),
})

/**
 * 도서관 검색 DTO
 * @property {Date} crt_dt - 작성일시
 */
const LibrarySearch = LibraryBase.shape({
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
})

/**
 * 도서관 목록 DTO
 * @property {number} id - 아이디
 * @property {string} lib_nm - 도서관명
 * @property {string} spce_otln_cn - 도서관 소개 텍스트
 * @property {Date} crt_dt - 작성일시
 * @property {string} lib_addr - 도서관 주소
 * @property {string} oper_info_cn - 운영정보 내용
 * @property {string} lib_telno - 도서관 전화번호
 * @property {string} site_url_addr - 사이트 URL 주소
 * @property {number} rprs_img_file_id - 대표 이미지 파일 아이디
 * @property {FileBase} rprs_img_file - 대표이미지
 * @property {string} lib_expln - 도서관 설명
 * @property {number} spce_id - 공간아이디
 */
const LibraryList = LibraryBase.shape({
  /** 아이디 */
  id: number().label('아이디').required(),
  /** 도서관명 */
  lib_nm: string().label('도서관명').max(20).required(),
  /** 도서관 소개 텍스트 */
  spce_otln_cn: string().label('개요내용'),
  /** 작성일시 */
  crt_dt: date().label('작성일시').required(),
  /** 도서관 주소 */
  lib_addr: string().label('도서관 주소').nullable(),
  /** 운영정보 내용 */
  oper_info_cn: string().label('운영정보 내용').nullable(),
  /** 도서관 전화번호 */
  lib_telno: string().label('도서관 전화번호').nullable(),
  /** 사이트 URL 주소 */
  site_url_addr: string().label('사이트 URL 주소').nullable(),
  /** 대표 이미지 파일 아이디 */
  rprs_img_file_id: number().label('대표 이미지 파일 아이디').nullable(),
  /** 대표이미지 */
  rprs_img_file: file.nullable(),
  /** 도서관 설명 */
  lib_expln: string().label('도서관 설명').nullable(),
  /** 공간아이디 */
  spce_id: number().label('공간아이디').nullable(),
})

/**
 * 도서관 상세 DTO
 * @property {Array<FileBase>} img_files - 상세 이미지 리스트
 */
const LibraryDetail = LibraryList.shape({
  /** 상세 이미지 리스트 */
  img_files: array(
    file
      .shape({
        indct_seq: number().integer().nullable(),
      })
      .nullable()
  ).nullable(),
})

/**
 * 도서관 검색 요청 DTO
 */
const LibrarySearchReq = SearchListReq(LibrarySearch)

/**
 * 도서관 검색 결과 DTO
 */
const LibrarySearchRes = SuccessListRes(LibraryList)

/**
 *  도서관 상세조회 결과 DTO
 */
const LibraryDetailRes = SuccessObjectRes(LibraryDetail)

module.exports = {
  LibrarySearch,
  LibraryList,
  LibraryDetail,
  LibrarySearchReq,
  LibrarySearchRes,
  LibraryDetailRes,
}
