"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { FileInfo: file } = require('../../common/file');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes, SuccessObjectRes } = require('../../common/response');
/**
 * 독서 동아리 검색 DTO
 *
 * @property {string} spce_ttl - 동아리실 이름
 * @property {string} nckn_nm - Host nickname.
 */
const ReadingClubSearch = object({
    /** 동아리실 이름 */
    spce_ttl: string().label('동아리실 이름'),
    /** 호스트 닉네임 */
    nckn_nm: string().label('호스트 닉네임'),
});
/**
 * 독서 동아리 상세정보
 *
 * @property {number} id - 독서 동아리 아이디
 * @property {string} spce_skn_id - 동아리실 스킨 아이디
 * @property {string} spce_ttl - 동아리실 이름
 * @property {number} ownr_id - 소유자(호스트) 아이디
 * @property {string} nckn_nm - 소유자(호스트) 닉네임
 * @property {number} cntn_lmt_cnt - 접속제한수
 * @property {number} prtpnt_cnt - 참여인원수(소유자 제외)
 * @property {boolean} ownr_cntn_yn - 소유자(호스트)접속여부
 * @property {boolean} my_spce_yn - 내 공간 여부
 * @property {FileInfo} rprs_img_file - 대표이미지파일
 * @property {boolean} sctr_yn - 비밀방 여부. Required.
 * @property {string} sctr_pswd - 비밀방 비밀번호. Required if sctr_yn is true.
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const ReadingClubList = object({
    /** 독서동아리아이디 */
    id: number().label('독서동아리아이디').required(),
    /** 동아리실 스킨 아이디 */
    spce_skn_id: number().label('동아리실 스킨 아이디').required(),
    /** 동아리실 이름 */
    spce_ttl: string().label('동아리실 이름').required(),
    /** 소유자 아이디 */
    ownr_id: number().label('소유자 아이디').required(),
    /** 소유자 닉네임 */
    nckn_nm: string().label('소유자 닉네임').required(),
    /** 접속제한수 */
    cntn_lmt_cnt: number().label('접속제한수').required(),
    /** 참여인원수 */
    prtpnt_cnt: number().label('참여인원수').required(),
    /** 소유자 접속 여부 */
    ownr_cntn_yn: boolean().label('소유자접속여부').required(),
    /** 내 공간 여부 */
    my_spce_yn: boolean().label('내 공간 여부').required(),
    /** 대표이미지파일 */
    rprs_img_file: file.label('대표이미지파일').required(),
    /** 비밀방 여부 */
    sctr_yn: boolean().label('비밀방 여부').required().default(false),
    /** 비밀방 비밀번호 */
    sctr_pswd: string().label('비밀방 비밀번호').nullable(),
    /** 생성일시 */
    crt_dt: date().label('생성일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/**
 * 독서 동아리 상세정보
 *
 * @extends ReadingClubList
 * @property {string} spce_expln - 동아리 설명
 * @property {Date} vald_term_dt - 유효기간일자
 */
const ReadingClubDetail = ReadingClubList.shape({
    /** 동아리 설명 */
    spce_expln: string().label('동아리 설명').required(),
    /** 유효기간일시 */
    vald_term_dt: date().label('유효기간일자').required(),
});
/**
 * 독서 동아리 생성 DTO
 *
 * @property {string} spce_skn_id - 동아리실 스킨 아이디. Required.
 * @property {string} spce_ttl - 동아리실 이름. Max length 100 characters. Required.
 * @property {string} spce_expln - 동아리실 설명. Max length 1000 characters. Required.
 * @property {number} ownr_id - 소유자 아이디. Required.
 * @property {number} rprs_img_file_id - 대표 이미지 파일아이디. Optional.
 * @property {boolean} sctr_yn - 비밀방 여부. Required.
 * @property {string} sctr_pswd - 비밀방 비밀번호. Required if sctr_yn is true.
 */
const ReadingClubCreate = object({
    /** 동아리실 스킨 아이디 */
    spce_skn_id: number().label('동아리실 스킨 아이디').required(),
    /** 동아리실 이름 */
    spce_ttl: string().label('동아리실 이름').max(100).required(),
    /** 동아리실 설명 */
    spce_expln: string().label('동아리 설명').max(1000).required(),
    /** 대표 이미지 파일아이디 */
    rprs_img_file_id: number().label('대표 이미지 파일아이디').nullable(),
    /** 비밀방 여부 */
    sctr_yn: boolean().label('비밀방 여부').required().default(false),
    /** 비밀방 비밀번호 */
    sctr_pswd: string()
        .label('비밀방 비밀번호')
        .when('sctr_yn', {
        is: true,
        then: (schema) => schema.required(),
        otherwise: (schema) => schema.notRequired(),
    }),
});
/**
 * 독서 동아리 비밀번호 확인 DTO
 *
 * @property {string} password - 동아리 비밀번호
 */
const ReadingClubPassword = object({
    /** 비밀번호 */
    password: string().label('비밀번호').max(20).required(),
});
/**
 * 독서 동아리 수정 DTO
 */
const ReadingClubUpdate = ReadingClubCreate;
/** 독서 동아리컨텐츠 목록조회 요청 DTO */
const ReadingClubSearchReq = SearchListReq(ReadingClubSearch);
/** 독서 동아리컨텐츠 목록조회 결과 DTO */
const ReadingClubSearchRes = SuccessListRes(ReadingClubList);
/** 독서 동아리컨텐츠 상세조회 결과 DTO */
const ReadingClubDetailRes = SuccessObjectRes(ReadingClubDetail);
module.exports = {
    ReadingClubSearch,
    ReadingClubSearchReq,
    ReadingClubList,
    ReadingClubSearchRes,
    ReadingClubDetail,
    ReadingClubDetailRes,
    ReadingClubCreate,
    ReadingClubUpdate,
    ReadingClubPassword,
};
//# sourceMappingURL=club.js.map