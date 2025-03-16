"use strict";
require('../../common/yup_locale');
const { string, object, number, date } = require('yup');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
/**
 * 학교 점수 공통 항목
 * @property {number} school_id - 학교 아이디
 * @property {string} school_nm - 학교 이름
 * @property {string} school_address - 학교 주소
 * @property {number} school_scr - 점수
 */
const School = object({
    /** 학교 아이디 */
    school_id: number().label('학교 아이디').nullable(),
    /** 학교 이름 */
    school_nm: string().label('학교 이름').nullable(),
    /** 학교 주소 */
    school_address: string().label('학교 주소').nullable(),
    /** 점수 */
    school_scr: number().label('점수').nullable(),
});
/** 학교 목록 검색 DTO */
const SchoolSearchList = School;
/**
 * 학교 목록 DTO
 * @property {number} school_id - 아이디
 * @property {string} school_nm - 학교 이름
 * @property {string} school_address - 학교 주소
 * @property {Date} crt_dt - 작성일시
 */
const SchoolList = School.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 학교 이름 */
    school_nm: string().label('학교 이름').required(),
    /** 학교 주소 */
    school_address: string().label('학교 주소').required(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * 학교 랭킹 검색 DTO
 * @property {string} date - 조회 월
 */
const SchoolSearch = object({
    /** 작성일시 */
    date: string().label('조회 월').max(50).nullable(),
});
/**
 * 학교 랭킹 목록 DTO
 * @property {number} rank - 순위
 * @property {number} school_id - 학교 아이디
 * @property {string} school_nm - 학교 이름
 * @property {number} school_scr - 점수
 */
const SchoolScoreList = School.shape({
    /** 순위 */
    rank: number().label('순위').required(),
    /** 학교 아이디 */
    school_id: number().label('학교 아이디').required(),
    /** 학교 이름 */
    school_nm: string().label('학교 이름').required(),
    /** 점수 */
    school_scr: number().label('점수').required(),
});
/**
 * 학교 점수 등록 DTO
 * @property {number} school_id - 학교 아이디
 * @property {number} school_scr - 점수
 */
const SchoolScoreCreate = object({
    /** 학교 아이디 */
    school_id: number().label('학교 아이디').required(),
    /** 점수 */
    school_scr: number().label('점수').required(),
});
/** 학교 목록 검색 요청 DTO */
const SchoolListReq = SearchListReq(SchoolSearchList);
/** 학교 목록 검색 결과 DTO */
const SchoolListRes = SuccessListRes(SchoolList);
/**
 * 학교 점수 검색 요청 DTO
 */
const SchoolSearchReq = SearchListReq(SchoolSearch);
/**
 * 학교 점수 검색 결과 DTO
 */
const SchoolSearchRes = SuccessListRes(SchoolScoreList);
module.exports = {
    SchoolListReq,
    SchoolListRes,
    SchoolSearchReq,
    SchoolSearchRes,
    SchoolScoreCreate,
};
//# sourceMappingURL=school.js.map