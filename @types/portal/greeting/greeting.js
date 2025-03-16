"use strict";
const { object, number, string, date } = require('yup');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
/**
 * 인사말 공통 항목
 * @property {string} grt_cn - 인사말내용
 * @property {number} ssaw_bgng_mm - 계절시작월
 * @property {number} ssaw_end_mm - 계절종료월
 */
const GreetingBase = object({
    /** 인사말내용 */
    grt_cn: string().label('인사말내용').required(),
    /** 계절시작월 */
    ssaw_bgng_mm: number().label('계절시작월').max(12).required(),
    /** 계절종료월 */
    ssaw_end_mm: number().label('계절종료월').max(12).required(),
});
/**
 * 인사말 등록 DTO
 * @property {number} use_yn - 사용여부
 */
const GreetingCreate = GreetingBase.shape({
    /** 사용여부 */
    use_yn: number().label('사용여부').required().integer().oneOf([0, 1]),
});
/**
 * 인사말 검색 DTO
 */
const GreetingSearch = GreetingCreate;
/**
 * 인사말 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
const GreetingList = GreetingBase.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/** 인사말 상세 DTO */
const GreetingDetail = GreetingList;
/** 인사말 검색 요청 DTO */
const GreetingSearchReq = SearchListReq(GreetingSearch);
/** 인사말 검색 결과 DTO */
const GreetingSearchRes = SuccessListRes(GreetingList);
/** 인사말 상세조회 결과 DTO */
const GreetingDetailRes = SuccessObjectRes(GreetingDetail);
module.exports = {
    GreetingSearch,
    GreetingList,
    GreetingDetail,
    GreetingCreate,
    GreetingSearchReq,
    GreetingSearchRes,
    GreetingDetailRes,
};
//# sourceMappingURL=greeting.js.map