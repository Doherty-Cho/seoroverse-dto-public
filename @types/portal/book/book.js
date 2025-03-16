"use strict";
require('../../common/yup_locale');
const { object, string, number, date, boolean } = require('yup');
const { BOOK_PSTN_CD } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
/**
 * 도서 검색 DTO
 *
 * @property {string} book_ttl - 책제목 (required)
 * @property {string} athr_nm - 작가명 (required)
 */
const BookSearch = object({
    /** 책제목 */
    book_ttl: string().label('책제목').required(),
    /** 작가명 */
    athr_nm: string().label('작가명').required(),
});
/**
 * 도서 목록 DTO
 * @property {string} book_ttl - 책제목 (required)
 * @property {string|null} athr_nm - 작가명 (optional)
 * @property {string|null} pblco_nm - 출판사명 (optional)
 * @property {string|null} book_rpt_cn - 책 소개 (optional)
 * @property {string|null} img_file_url_addr - 표지이미지URL (optional)
 */
const BookSearchList = object({
    /** 책제목 */
    book_ttl: string().label('책제목').required(),
    /** 작가명 */
    athr_nm: string().label('작가명').nullable(),
    /** 출판사명 */
    pblco_nm: string().label('출판사명').nullable(),
    /** 책 소개 */
    book_rpt_cn: string().label('책 소개').nullable(),
    /** 표지이미지URL */
    img_file_url_addr: string().label('커버이미지URL').nullable(),
});
/**
 * 도서 등록 DTO
 *
 * @property {string} bksf_pstn_cd - 위치 (BOOK_PSTN_CD, required)
 * @property {string} book_ttl - 책제목 (required)
 * @property {string|null} athr_nm - 작가명 (optional)
 * @property {string|null} pblco_nm - 출판사명 (optional)
 * @property {string|null} book_rpt_cn - 책 소개 (optional)
 * @property {string|null} img_file_url_addr - 표지이미지URL (optional)
 * @property {boolean} expsr_yn - 띠지 노출여부 (required)
 * @property {string} bbnd_colr_cd - 띠지색상코드 (required. default '1')
 * @property {string|null} bbnd_indct_cn - 띠지표시내용 (nullable)
 */
const BookCreate = object({
    /** 위치 */
    bksf_pstn_cd: string().label('위치').oneOf(Object.values(BOOK_PSTN_CD)).required(),
    /** 책제목 */
    book_ttl: string().label('책제목').required(),
    /** 작가명 */
    athr_nm: string().label('작가명').nullable(),
    /** 출판사명 */
    pblco_nm: string().label('출판사명').nullable(),
    /** 책 소개 */
    book_rpt_cn: string().label('책 소개').nullable(),
    /** 표지이미지URL */
    img_file_url_addr: string().label('커버이미지URL').nullable(),
    /** 띠지 노출여부 */
    expsr_yn: boolean().label('띠지노출여부').required(),
    /** 띠지색상코드 */
    bbnd_colr_cd: string().label('띠지색상코드').required().default('1'),
    /** 띠지표시내용 */
    bbnd_indct_cn: string().label('띠지표시내용').nullable(),
});
/**
 * 도서 등록 DTO
 *
 * @property {string} rprs_img_file_id - 대표이미지파일아이디. 표지이미지가 변경되지 않는 경우 원래 값을 그대로 전달해야 하고, 표지이미지가 변경되는 경우 0을 전달.
 * @property {string} img_file_url_addr - 표지이미지URL. 표지이미지를 변경하는 경우에만 값을 전달해야 함. 변경하지 않을 경우 null. (optional)
 */
const BookUpdate = BookCreate.shape({
    /** 대표이미지파일아이디 */
    rprs_img_file_id: number().label('대표이미지파일아이디').nullable(),
});
/**
 * @description 도서 목록 DTO
 *
 * @property {number} id - 아이디
 * @property {number} spce_id - 공간아이디
 * @property {boolean} expsr_yn - 띠지 노출여부
 * @property {string} bbnd_colr_cd - 띠지색상코드
 * @property {string|null} bbnd_indct_cn - 띠지표시내용
 * @property {FileBase|null} rprs_img_file - 표지이미지파일
 * @property {Date} crt_dt - 등록일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const BookList = object({
    /** 위치 */
    bksf_pstn_cd: string().label('위치').oneOf(Object.values(BOOK_PSTN_CD)).required(),
    /** 책제목 */
    book_ttl: string().label('책제목').required(),
    /** 작가명 */
    athr_nm: string().label('작가명').nullable(),
    /** 출판사명 */
    pblco_nm: string().label('출판사명').nullable(),
    /** 책 소개 */
    book_rpt_cn: string().label('책 소개').nullable(),
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 공간아이디 */
    spce_id: number().label('공간아이디').required(),
    /** 띠지 노출여부 */
    expsr_yn: boolean().label('띠지노출여부').required(),
    /** 띠지색상코드 */
    bbnd_colr_cd: string().label('띠지색상코드').required().default('1'),
    /** 띠지표시내용 */
    bbnd_indct_cn: string().label('띠지표시내용').nullable(),
    /** 표지이미지파일 */
    rprs_img_file: file.label('표지이미지파일').nullable(),
    /** 등록일시 */
    crt_dt: date().label('등록일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
    //
});
/**
 * 서재 꾸미기 정보 수정 DTO
 * @property {object} spce_bsc_stng_cn - 공간 기본 설정 내용(꾸미기 정보)
 */
const BookshelfDecorationUpdate = object({
    /** 공간기본설정내용 */
    spce_bsc_stng_cn: object().label('공간기본설정내용').nullable(),
});
/** 도서 검색 요청 DTO */
const BookSearchReq = SearchListReq(BookSearch);
/** 도서 검색 결과 응답 DTO */
const BookSearchRes = SuccessListRes(BookSearchList);
/** 서가 도서 목록 응답 DTO */
const BookListRes = SuccessListRes(BookList);
module.exports = {
    BookSearch,
    BookSearchReq,
    BookSearchRes,
    BookList,
    BookListRes,
    BookCreate,
    BookUpdate,
    BookshelfDecorationUpdate,
};
//# sourceMappingURL=book.js.map