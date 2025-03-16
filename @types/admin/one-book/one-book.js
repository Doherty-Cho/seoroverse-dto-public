"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
/**
 * @typedef 한권의책 공통 항목
 * @property {string} crtr_yr - 기준연도
 * @property {string} book_ttl - 책제목
 * @property {string} athr_nm - 작가명
 * @property {string | null | undefined} pblco_nm - 출판사명
 * @property {boolean} expsr_yn - 노출여부
 */
const OneBookManagementBase = object({
    /** 기준연도 */
    crtr_yr: string().label('책 년도').required().max(4).default(new Date().getFullYear().toString()),
    /** 책제목 */
    book_ttl: string().label('책 제목').required().max(50),
    /** 작가명 */
    athr_nm: string().label('책 저자').required().max(20),
    /** 출판사명 */
    pblco_nm: string().label('출판사').nullable().max(50),
    /** 노출여부 */
    expsr_yn: boolean().label('노출여부').required().default(0),
});
/**
 * @typedef 한권의책 등록 DTO
 * @property {string} book_rpt_cn - 책 소개
 * @property {number | null | undefined} intv_vdo_file_id - 인터뷰동영상파일아이디
 * @property {number} rprs_img_file_id - 대표이미지파일아이디
 * @property {date} reg_dt - 등록일시
 * @property {Date} crt_dt - 작성일시
 */
const OneBookManagementCreate = OneBookManagementBase.shape({
    /** 책 소개 */
    book_rpt_cn: string().label('책 소개').max(4000).required(),
    /** 인터뷰동영상파일아이디 */
    intv_vdo_file_id: number().label('작가와의 인터뷰(동영상)').notRequired(),
    /** 대표이미지파일아이디 */
    rprs_img_file_id: number().label('책 표지 이미지').required(),
    /** 등록일시 */
    reg_dt: date().label('등록일시').nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').nullable(),
});
/** @typedef 한권의책 수정 DTO */
const OneBookManagementUpdate = OneBookManagementCreate;
/**
 * @typedef 한권의책 검색 DTO
 * @property {string} crtr_yr - 기준연도
 * @property {string} book_ttl - 책제목
 * @property {string} athr_nm - 작가명
 * @property {string} pblco_nm - 출판사명
 * @property {string} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
const OneBookManagementSearch = OneBookManagementBase.shape({
    /** 기준연도 */
    crtr_yr: string()
        .label('기준연도')
        .required()
        .max(4)
        .default(new Date().getFullYear().toString()),
    /** 책제목 */
    book_ttl: string().label('책제목').required().max(50),
    /** 작가명 */
    athr_nm: string().label('작가명').required().max(20),
    /** 출판사명 */
    pblco_nm: string().label('출판사명').nullable().max(50),
    /** 작성자 로그인 아이디 */
    lgn_id: string().label('작성자 로그인 아이디').nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').nullable(),
});
/**
 * @typedef 한권의책 목록 DTO
 * @property {number} id - 아이디
 * @property {number} mngr_id - 아이디
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
const OneBookManagementList = OneBookManagementBase.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 관리자 아이디 */
    mngr_id: number().label('관리자 아이디').required(),
    /** 관리자 로그인 아이디 */
    lgn_id: string().label('작성자 로그인 아이디').nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * @typedef 한권의책 상세 DTO
 * @property {string} book_rpt_cn - 책 소개
 * @property {number | null | undefined} intv_vdo_file_id - 인터뷰동영상파일아이디
 * @property {number} rprs_img_file_id - 대표이미지파일아이디
 * @property {FileBase | null | undefined} intv_vdo_file - 인터뷰동영상파일
 * @property {FileBase} rprs_img_file - 대표이미지파일
 */
const OneBookManagementDetail = OneBookManagementList.shape({
    /** 책 소개 */
    book_rpt_cn: string().label('책 소개').required(),
    /** 인터뷰동영상파일아이디 */
    intv_vdo_file_id: number().label('인터뷰동영상파일아이디').nullable(),
    /** 대표이미지파일아이디 */
    rprs_img_file_id: number().label('대표이미지파일아이디').required(),
    /** 인터뷰동영상파일 */
    intv_vdo_file: file.label('인터뷰동영상파일').nullable(),
    /** 대표이미지파일 */
    rprs_img_file: file.label('대표이미지파일').required(),
});
/** @typedef 한권의책 검색 요청 DTO */
const OneBookManagementSearchReq = SearchListReq(OneBookManagementSearch);
/** @typedef 한권의책 검색 결과 DTO */
const OneBookManagementSearchRes = SuccessListRes(OneBookManagementList);
/** @typedef 한권의책 상세조회 결과 DTO */
const OneBookManagementDetailRes = SuccessObjectRes(OneBookManagementDetail);
module.exports = {
    OneBookManagementCreate,
    OneBookManagementUpdate,
    OneBookManagementSearchReq,
    OneBookManagementSearchRes,
    OneBookManagementDetailRes,
};
//# sourceMappingURL=one-book.js.map