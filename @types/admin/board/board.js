"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
/**
 * @typedef 게시물 공통 항목
 * @property {string} pst_ttl - 게시물제목
 * @property {boolean | undefined} expsr_yn - 노출여부
 * @property {Date | null | undefined} pstg_bgng_dt - 게시일시
 * @property {number | null | undefined} mngr_id - 관리자아이디
 */
const BoardManagementBase = object({
    /** 게시물제목 */
    pst_ttl: string().label('게시물 제목').max(100).required(),
    /** 노출여부 */
    expsr_yn: boolean().label('노출 설정').required().default(false),
    /** 게시일시 */
    pstg_bgng_dt: date().label('노출예약 일시').nullable(),
    /** 작성자 아이디 */
    wrtr_id: number().label('작성자 ID').nullable(),
});
/**
 * @typedef 게시물 등록 DTO
 * @property {string} pst_cn - 게시물내용
 */
const BoardManagementCreate = BoardManagementBase.shape({
    /** 게시물내용 */
    pst_cn: string().label('게시물 내용').max(1000).required(),
});
/** @typedef 게시물 수정 DTO */
const BoardManagementUpdate = BoardManagementCreate;
/**
 * @typedef 게시물 검색 DTO
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
const BoardManagementSearch = BoardManagementCreate.shape({
    /** 작성자 로그인 아이디 */
    lgn_id: string().label('작성자 로그인 아이디').nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * @typedef 게시물 목록 DTO
 * @property {number} id - 아이디
 * @property {number} inq_cnt - 조회수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
const BoardManagementList = BoardManagementBase.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 조회수 */
    inq_cnt: number().label('아이디').default(0),
    /** 작성자 로그인 아이디 */
    lgn_id: string().label('작성자 로그인 아이디').nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * @typedef 게시물 상세 DTO
 * @property {string} pst_cn - 게시물 내용
 * @property {Date} mdfcn_dt - 수정 일시
 */
const BoardManagementDetail = BoardManagementList.shape({
    /** 게시물 내용 */
    pst_cn: string().label('게시물 내용').max(1000).required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/** @typedef 게시물 검색 요청 DTO */
const BoardManagementSearchReq = SearchListReq(BoardManagementSearch);
/** @typedef 게시물 검색 결과 DTO */
const BoardManagementSearchRes = SuccessListRes(BoardManagementList);
/** @typedef 게시물 상세조회 결과 DTO */
const BoardManagementDetailRes = SuccessObjectRes(BoardManagementDetail);
module.exports = {
    BoardManagementSearch,
    BoardManagementList,
    BoardManagementDetail,
    BoardManagementCreate,
    BoardManagementUpdate,
    BoardManagementSearchReq,
    BoardManagementSearchRes,
    BoardManagementDetailRes,
};
//# sourceMappingURL=board.js.map