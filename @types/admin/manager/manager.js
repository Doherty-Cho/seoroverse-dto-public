"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { MNGR_LVL, RGN } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
/**
 * @typedef 관리자 검색 DTO
 * @property {string} lvl_cd - 권한 등급
 * @property {string} lgn_id - 아이디
 * @property {number} id - 관리자번호(id)
 * @property {Date} crt_dt - 등록날짜
 */
const ManagerSearch = object({
    /** 권한 등급 */
    lvl_cd: string().label('권한 등급'),
    /** 지역 구분 */
    rgn_cd: string().label('지역 구분'),
    /** 아이디 */
    lgn_id: string().label('아이디'),
    /** 관리자번호(id) */
    id: number().label('관리자번호'),
    /** 등록날짜 */
    crt_dt: date().label('등록날짜'),
});
/**
 * @typedef 관리자 목록 DTO
 * @property {number} id - 관리자번호(id)
 * @property {string} rgn_cd - 지역 구분(RGN)
 * @property {string} lvl_cd - 권한 등급(MNGR_LVL)
 * @property {string} lgn_id - 아이디
 * @property {number} bkmny_amt - 관리자
 * @property {string} mngr_nm - 관리자 이름
 * @property {string} prm_ip_addr - 관리자 IP
 * @property {Date} crt_dt - 등록날짜
 * @property {boolean} use_yn - 사용 여부
 */
const ManagerList = object({
    /** 관리자번호(id) */
    id: number().label('관리자번호').required(),
    /** 지역 구분 */
    rgn_cd: string().label('지역 구분').oneOf(Object.values(RGN)).required(),
    /** 권한 등급 */
    lvl_cd: string().label('권한 등급').oneOf(Object.values(MNGR_LVL)).required(),
    /** 아이디 */
    lgn_id: string().label('아이디').required(),
    /** 관리자 이름 */
    mngr_nm: string().label('관리자 이름'),
    /** 관리자 IP */
    prm_ip_addr: string().label('관리자 IP'),
    /** 등록날짜 */
    crt_dt: date().label('등록날짜').required(),
    /** 사용 여부 */
    use_yn: boolean().label('사용 여부').required(),
});
/**
 * @typedef 관리자 상세정보 DTO
 */
const ManagerDetail = ManagerList;
/**
 * @typedef 관리자 수정 요청 DTO
 * @property {boolean} use_yn - 사용 여부
 * @property {string} prm_ip_addr - 관리자 IP
 * @property {string} mngr_nm - 관리자 이름
 */
const ManagerUpdate = object({
    /** 사용 여부 */
    use_yn: boolean().label('사용 여부').required(),
    /** 관리자 IP */
    prm_ip_addr: string().label('관리자 IP').required(),
    /** 관리자 이름 */
    mngr_nm: string().label('관리자 이름').required(),
});
/**
 * @typedef 관리자 등록 요청 DTO
 * @property {string} lvl_cd - 권한 등급
 * @property {string} encpt_pswd - 비밀번호
 */
const ManagerCreate = ManagerUpdate.shape({
    /** 권한 등급 */
    lvl_cd: string().label('권한 등급').oneOf(Object.values(MNGR_LVL)).required(),
    /** 비밀번호 */
    encpt_pswd: string().label('비밀번호').required(),
});
/**
 * @typedef 관리자 비밀번호 변경 요청 DTO
 * @property {string} new_password - 새 비밀번호
 */
const ManagerPasswordUpdate = object({
    new_password: string().label('새 비밀번호').required(),
});
/**
 * @typedef 마이페이지 닉네임 수정 요청 DTO
 * @property {string} mngr_nm - 관리자명
 */
const ManagerNameUpdate = object({
    mngr_nm: string().label('닉네임').max(20).required(),
});
/**
 * @typedef 관리자 검색 요청 DTO
 */
const ManagerSearchReq = SearchListReq(ManagerSearch);
/**
 * @typedef 관리자 검색 결과 응답 DTO
 */
const ManagerSearchRes = SuccessListRes(ManagerList);
/**
 * @typedef 관리자 상세조회 결과 응답 DTO
 */
const ManagerDetailRes = SuccessObjectRes(ManagerDetail);
/**
 * @typedef 관리자 수정 결과 응답 DTO
 */
const ManagerUpdateRes = SuccessObjectRes(ManagerDetail);
/**
 * @typedef 관리자 등록 결과 응답 DTO
 */
const ManagerCreateRes = SuccessObjectRes(ManagerDetail);
module.exports = {
    ManagerSearch,
    ManagerList,
    ManagerSearchReq,
    ManagerSearchRes,
    ManagerDetail,
    ManagerDetailRes,
    ManagerCreate,
    ManagerCreateRes,
    ManagerUpdate,
    ManagerUpdateRes,
    ManagerPasswordUpdate,
    ManagerNameUpdate,
};
//# sourceMappingURL=manager.js.map