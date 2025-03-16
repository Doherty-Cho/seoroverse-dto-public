"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { RGN } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
/**
 * 교환권 공통 항목
 * @property {string} exgtk_nm - 교환권명
 * @property {string} rgn_cd - 지역코드
 * @property {number} exgtk_tnocs - 교환권총건수
 * @property {number} exgtk_img_file_id - 교환권이미지파일아이디
 * @property {boolean} expsr_yn - 노출여부
 * @property {number} prchs_amt - 구매금액
 * @property {Date} vld_prd_bgng_dt - 유효기간시작일시
 * @property {Date} vld_prd_end_dt - 유효기간종료일시
 */
const CouponManagementBase = object({
    /** 교환권명 */
    exgtk_nm: string().label('교환권 이름').max(100).required(),
    /** 지역코드 */
    rgn_cd: string().label('사용 지역').required().oneOf(Object.values(RGN)).default(RGN.JEONJU),
    /** 교환권총건수 */
    exgtk_tnocs: number().label('교환권 갯수').required().positive(),
    /** 노출여부 */
    expsr_yn: boolean().label('노출여부').required(),
    /** 구매금액 */
    prchs_amt: number().label('교환권 금액').required().min(0),
    /** 유효기간시작일시 */
    vld_prd_bgng_dt: date().label('사용기한 시작일시').required(),
    /** 유효기간종료일시 */
    vld_prd_end_dt: date().label('사용기한 종료일시').required(),
});
/**
 * 교환권 등록 DTO
 * @property {string | null | undefined} exgtk_issu_cn - 교환권발급내용
 * @property {number | null | undefined} exgtk_img_file_id - 교환권이미지파일아이디
 */
const CouponManagementCreate = CouponManagementBase.shape({
    /** 교환권발급내용 */
    exgtk_issu_cn: string().label('교환권 설명').nullable(),
    /** 교환권이미지파일아이디 */
    exgtk_img_file_id: number().label('교환권이미지파일아이디').nullable(),
});
/**
 * 교환권 수정 DTO
 */
const CouponManagementUpdate = CouponManagementCreate;
/**
 * 교환권 검색 DTO
 * @property {number} id
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
const CouponManagementSearch = CouponManagementCreate.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 작성자 로그인 아이디 */
    lgn_id: string().label('작성자 로그인 아이디').nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * 교환권 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} reg_dt - 등록일시
 * @property {number} pay_cnt - 지급건수
 * @property {number} use_cnt - 사용건수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
const CouponManagementList = CouponManagementBase.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 등록일시 */
    reg_dt: date().label('등록일시').required(),
    /** 지급건수 */
    pay_cnt: number().label('지급건수').required(),
    /** 사용건수 */
    use_cnt: number().label('사용건수').required(),
    /** 작성자 로그인 아이디 */
    lgn_id: string().label('작성자 로그인 아이디').nullable(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/** 교환권 상세 DTO
 * @property {string | null | undefined} exgtk_issu_cn - 교환권발급내용
 * @property {number | null | undefined} exgtk_img_file_id - 교환권이미지파일아이디
 * @property {FileBase | null | undefined} img_file - 이미지 파일
 */
const CouponManagementDetail = CouponManagementList.shape({
    /** 교환권발급내용 */
    exgtk_issu_cn: string().label('교환권발급내용').nullable(),
    /** 교환권이미지파일아이디 */
    exgtk_img_file_id: number().label('교환권이미지파일아이디').nullable(),
    /** 이미지 파일 */
    img_file: file.nullable(),
});
/**
 * 교환권 검색 요청 DTO
 */
const CouponManagementSearchReq = SearchListReq(CouponManagementSearch);
/**
 * 교환권 검색 결과 DTO
 */
const CouponManagementSearchRes = SuccessListRes(CouponManagementList);
/**
 * 교환권 상세조회 결과 DTO
 */
const CouponManagementDetailRes = SuccessObjectRes(CouponManagementDetail);
module.exports = {
    CouponManagementSearch,
    CouponManagementList,
    CouponManagementDetail,
    CouponManagementCreate,
    CouponManagementUpdate,
    CouponManagementSearchReq,
    CouponManagementSearchRes,
    CouponManagementDetailRes,
};
//# sourceMappingURL=coupon.js.map