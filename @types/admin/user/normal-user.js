"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { REG_TYPE } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
/**
 * @typedef 일반회원 검색 DTO
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {number} id - 회원번호
 * @property {string} eml_addr - 아이디(이메일)
 * @property {Date} crt_dt - 가입날짜
 */
const NormalUserSearch = object({
    /** 가입유형(등록유형) */
    reg_type_cd: string().label('가입유형').oneOf(Object.values(REG_TYPE)),
    /** 회원번호(id) */
    id: number().label('회원번호'),
    /** 아이디(이메일) */
    eml_addr: string().label('아이디'),
    /** 가입날짜 */
    crt_dt: date().label('가입날짜'),
});
/**
 * @typedef 일반회원 목록 DTO
 * @property {number} id - 회원번호(id)
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {Date} crt_dt - 가입날짜
 * @property {string} eml_addr - 아이디(이메일)
 * @property {string} nckn_nm - 아바타 닉네임
 * @property {number} bkmny_amt - 책머니
 */
const NormalUserList = object({
    /** 회원번호(id) */
    id: number().label('회원번호').required(),
    /** 가입유형(등록유형) */
    reg_type_cd: string().label('가입유형').oneOf(Object.values(REG_TYPE)).required(),
    /** 가입날짜 */
    crt_dt: date().label('가입날짜').required(),
    /** 아이디(이메일) */
    eml_addr: string().label('아이디'),
    /** 아바타 닉네임 */
    nckn_nm: string().label('아비타 닉네임'),
    /** 책머니 */
    bkmny_amt: number().label('책머니').required().default(0),
});
/**
 * @typedef 일반회원 상세정보 DTO
 * @property {string} otsd_acnt_key - 외부 계정 키
 * @property {Date} last_cntn_dt - 최종 접속일
 * @property {string} mbl_telno - 휴대폰번호
 * @property {boolean} mrkt_rcptn_agre_yn - 마케팅 수신동의 여부
 * @property {boolean} lib_acnt_itw_yn - 도서관 계정 연동 여부
 * @property {string} itw_lib_acnt - 연동된 도서관 계정
 * @property {string} pet_nckn_nm - 펫 닉네임
 * @property {string} group_room_nm - 독서 동아리실 이름
 * @property {boolean} edu_fnsh_yn - 도서관 이용교육 수료 여부
 * @property {number} relay_crtv_rpt_cnt - 릴레이 창작전 신고 횟수
 */
const NormalUserDetail = NormalUserList.shape({
    /** 외부 계정 키 */
    otsd_acnt_key: string().label('외부 계정 키').nullable(),
    /** 최종 접속일 */
    last_cntn_dt: date().label('최종 접속일').required(),
    /** 휴대폰 번호 */
    mbl_telno: string().label('휴대폰번호').required(),
    /** 마케팅 수신동의 여부 */
    mrkt_rcptn_agre_yn: boolean().label('마케팅 수신동의 여부').required().default(false),
    /** 도서관 계정 연동 여부 */
    lib_acnt_itw_yn: boolean().label('도서관 계정 연동 여부').required().default(false),
    /** 연동된 도서관 계정 */
    itw_lib_acnt: string().label('연동된 도서관 계정').nullable(),
    /** 펫 닉네임 */
    pet_nckn_nm: string().label('펫 닉네임').nullable(),
    /** 독서 동아리실 이름 */
    group_room_nm: string().label('독서 동아리실 이름').nullable(),
    /** 도서관 이용교육 수료(여부) */
    edu_fnsh_yn: boolean().label('도서관 이용교육 수료').required().default(false),
    /** 릴레이 창작전 신고 횟수 */
    acml_dclr_nmtm: number().label('릴레이 창작전 신고 횟수').required().default(0),
});
/**
 * @typedef 책머니 상세조회 요청 DTO
 * @property {number} user_id - 회원번호
 * @property {number} bkmny_amt - 책머니
 */
const BookMoneyDetail = object({
    user_id: number().label('회원번호').required(),
    bkmny_amt: number().label('책머니').required().default(0),
});
/**
 * @typedef 책머니 수정 요청 DTO
 * @property {string} chg_type - 변경구분(INC, DEC)
 * @property {number} chg_amt - 변경금액
 * @property {number} hof_id - 명예의전당 아이디
 */
const BookMoneyUpdate = object({
    /** 변경구분 (INC, DEC) */
    chg_type: string().label('변경구분').required().oneOf(['INC', 'DEC']),
    /** 변경금액 */
    chg_amt: number().label('변경금액').positive().required(),
    /** 명예의전당 아이디 */
    hof_id: number().label('명예의전당 아이디').nullable(),
});
/**
 * @typedef 일반회원 검색 요청 DTO
 */
const NormalUserSearchReq = SearchListReq(NormalUserSearch);
/**
 * @typedef 일반회원 검색 결과 응답 DTO
 */
const NormalUserSearchRes = SuccessListRes(NormalUserList);
/**
 * @typedef 일반회원 상세조회 결과 응답 DTO
 */
const NormalUserDetailRes = SuccessObjectRes(NormalUserDetail);
/**
 * @typedef 책머니 상세조회 결과 응답 DTO
 */
const BookMoneyDetailRes = SuccessObjectRes(BookMoneyDetail);
/**
 * @typedef 책머니 수정 결과 응답 DTO
 */
const BookMoneyUpdateRes = SuccessObjectRes(BookMoneyDetail);
module.exports = {
    NormalUserSearch,
    NormalUserList,
    NormalUserSearchReq,
    NormalUserSearchRes,
    NormalUserDetail,
    NormalUserDetailRes,
    BookMoneyDetail,
    BookMoneyDetailRes,
    BookMoneyUpdate,
    BookMoneyUpdateRes,
};
//# sourceMappingURL=normal-user.js.map