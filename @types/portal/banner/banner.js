"use strict";
const { object, number, string, date } = require('yup');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
/**
 * 배너 공통 항목
 * @property {string} bnr_pstn_cd - 배너위치코드
 * @property {string} bnr_ttl - 배너제목
 * @property {number} indct_seq_no - 표시순서
 */
const BannerBase = object({
    /** 배너위치코드 */
    bnr_pstn_cd: string().label('배너위치코드').required(),
    /** 배너제목 */
    bnr_ttl: string().label('배너제목').max(100).nullable(),
    /** 표시 순서 */
    indct_seq_no: number().label('표시순서').nullable().default(0),
});
/** 배너 검색 DTO */
const BannerSearch = BannerBase;
/**
 * 배너 목록 DTO
 * @property {number} id - 아이디
 * @property {string} lnkg_url_addr - 연결URL주소
 * @property {Date} crt_dt - 작성일시
 * @property {number} file_id - 파일 아이디
 * @property {FileBase} file - 파일
 */
const BannerList = BannerBase.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 연결URL주소 */
    lnkg_url_addr: string().label('배너제목').max(320).nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
    /** 파일 아이디 */
    file_id: number().label('파일 아이디').nullable(),
    /** 파일 */
    file: file.nullable(),
});
/** 배너 검색 요청 DTO */
const BannerSearchReq = SearchListReq(BannerSearch);
/** 배너 검색 결과 DTO */
const BannerSearchRes = SuccessListRes(BannerList);
module.exports = {
    BannerSearch,
    BannerList,
    BannerSearchReq,
    BannerSearchRes,
};
//# sourceMappingURL=banner.js.map