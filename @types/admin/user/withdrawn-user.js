"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { REG_TYPE } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
/**
 * @typedef 탈퇴회원 검색
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {number} id - 회원번호(id)
 * @property {string} eml_addr - 아이디(이메일)
 * @property {Date} crt_dt - 탈퇴 전환일
 */
const WithdrawnUserSearch = object({
    /** 가입유형(등록유형) */
    reg_type_cd: string().label('가입유형').oneOf(Object.values(REG_TYPE)),
    /** 회원번호(id) */
    id: number().label('회원번호'),
    /** 아이디(이메일) */
    eml_addr: string().label('아이디'),
    /** 탈퇴전환일 */
    crt_dt: date().label('탈퇴 전환일'),
});
/**
 * @typedef 탈퇴회원 목록 DTO
 * @property {number} id - 회원번호(id)
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {Date} crt_dt - 탈퇴 전환일
 * @property {string} eml_addr - 아이디(이메일)
 * @property {string} nckn_nm - 아바타 닉네임
 * @property {Date} del_prnmnt_dt - 정보삭제 예정일
 */
const WithdrawnUserList = object({
    /** 회원번호(id) */
    id: number().label('회원번호').required(),
    /** 가입유형(등록유형) */
    reg_type_cd: string().label('가입유형').oneOf(Object.values(REG_TYPE)).required(),
    /** 탈퇴전환일 */
    crt_dt: date().label('탈퇴 전환일').required(),
    /** 아이디(이메일) */
    eml_addr: string().label('아이디'),
    /** 아바타 닉네임 */
    nckn_nm: string().label('아비타 닉네임'),
    /** 정보삭제 예정일 */
    del_prnmnt_dt: date().label('정보삭제 예정일').required(),
});
/**
 * @typedef 탈퇴회원 상세정보 DTO
 * @property {string} otsd_acnt_key - 외부 계정 키
 * @property {string} mbl_telno - 휴대폰번호
 * @property {boolean} mrkt_rcptn_agre_yn - 마케팅 수신동의 여부
 * @property {boolean} lib_acnt_itw_yn - 도서관 계정 연동 여부
 * @property {string} itw_lib_acnt - 연동된 도서관 계정
 * @property {number} bkmny_amt - 책머니
 */
const WithdrawnUserDetail = WithdrawnUserList.shape({
    /** 외부 계정 키 */
    otsd_acnt_key: string().label('외부 계정 키').nullable(),
    /** 휴대폰 번호 */
    mbl_telno: string().label('휴대폰번호').required(),
    /** 마케팅 수신동의 여부 */
    mrkt_rcptn_agre_yn: boolean().label('마케팅 수신동의 여부').required().default(false),
    /** 도서관 계정 연동 여부 */
    lib_acnt_itw_yn: boolean().label('도서관 계정 연동 여부').required().default(false),
    /** 연동된 도서관 계정 */
    itw_lib_acnt: string().label('연동된 도서관 계정').nullable(),
    /** 책머니 */
    bkmny_amt: number().label('책머니').required().default(0),
});
/**
 * @typedef 탈퇴회원 검색 요청 DTO
 */
const WithdrawnUserSearchReq = SearchListReq(WithdrawnUserSearch);
/**
 * @typedef 탈퇴회원 검색 결과 응답 DTO
 */
const WithdrawnUserSearchRes = SuccessListRes(WithdrawnUserList);
/**
 * @typedef 탈퇴회원 상세조회 결과 응답 DTO
 */
const WithdrawnUserDetailRes = SuccessObjectRes(WithdrawnUserDetail);
module.exports = {
    WithdrawnUserSearch,
    WithdrawnUserList,
    WithdrawnUserSearchReq,
    WithdrawnUserSearchRes,
    WithdrawnUserDetail,
    WithdrawnUserDetailRes,
};
//# sourceMappingURL=withdrawn-user.js.map