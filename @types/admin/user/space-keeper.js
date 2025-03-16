"use strict";
require('../../common/yup_locale');
const { object, number, string, date } = require('yup');
const { RGN, LIB_TYPE } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
/**
 * @typedef 공간지기 검색 DTO
 * @property {string} rgn_cd - 지역
 * @property {string} lib_type_cd - 공간 유형
 * @property {string} lib_nm - 공간 이름
 * @property {string} id - 회원번호
 */
const SpaceKeeperSearch = object({
    /** 지역 */
    rgn_cd: string().label('지역').oneOf(Object.values(RGN)),
    /** 공간유형 */
    lib_type_cd: string().label('공간 유형').oneOf(Object.values(LIB_TYPE)),
    /** 공간이름 */
    lib_nm: string().label('공간 이름'),
    /** 회원번호 */
    id: string().label('회원번호'),
});
/**
 * @typedef 공간지기 목록 DTO
 * @property {number} id - 회원번호(id)
 * @property {string} rgn_cd - 지역
 * @property {string} lib_type_cd - 공간 유형
 * @property {string} lib_nm - 공간 이름
 * @property {string} eml_addr - 아이디(이메일)
 * @property {string} nckn_nm - 담당자 이름
 */
const SpaceKeeperList = object({
    /** 회원번호(id) */
    id: number().label('회원번호').required(),
    /** 지역 */
    rgn_cd: string().label('지역').oneOf(Object.values(RGN)).required(),
    /** 공간유형 */
    lib_type_cd: string().label('공간 유형').oneOf(Object.values(LIB_TYPE)).required(),
    /** 공간이름 */
    lib_nm: string().label('공간 이름').required(),
    /** 아이디(이메일) */
    eml_addr: string().label('아이디').required(),
    /** 담당자 이름 */
    nckn_nm: string().label('담당자 이름').required(),
});
/**
 * @typedef 공간지기 상세정보 DTO
 * @property {string} mbl_telno - 담당자 번호(전화번호)
 * @property {number} pst_cnt - 등록한 게시물 수
 * @property {date} last_cntn_dt - 최종 접속일
 */
const SpaceKeeperDetail = SpaceKeeperList.shape({
    /** 담당자 번호(전화번호) */
    mbl_telno: string().label('담당자 번호').nullable(),
    /** 등록한 게시물 수 */
    pst_cnt: number().label('등록한 게시물 수').required(),
    /** 최종 접속일 */
    last_cntn_dt: date().label('최종 접속일').required(),
});
/**
 * @typedef 공간지기 비밀번호 변경 DTO
 * @property {string} new_password - 새 비밀번호
 */
const SpaceKeeperPasswordUpdate = object({
    /** 새 비밀번호 */
    new_password: string().label('새 비밀번호').required(),
});
/**
 * @typedef 공간지기 검색 요청 DTO
 */
const SpaceKeeperSearchReq = SearchListReq(SpaceKeeperSearch);
/**
 * @typedef 공간지기 검색 결과 응답 DTO
 */
const SpaceKeeperSearchRes = SuccessListRes(SpaceKeeperList);
/**
 * @typedef 공간지기 상세조회 결과 응답 DTO
 */
const SpaceKeeperDetailRes = SuccessObjectRes(SpaceKeeperDetail);
module.exports = {
    SpaceKeeperSearch,
    SpaceKeeperList,
    SpaceKeeperSearchReq,
    SpaceKeeperSearchRes,
    SpaceKeeperDetail,
    SpaceKeeperDetailRes,
    SpaceKeeperPasswordUpdate,
};
//# sourceMappingURL=space-keeper.js.map