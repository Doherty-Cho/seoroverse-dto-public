"use strict";
const { object, number, string, date } = require('yup');
const { SuccessListRes, SuccessObjectRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
const { RGN } = require('../../common/code');
/**
 * 교환권 상세 DTO
 * @property {number} id - 아이디
 * @property {Date} reg_dt - 등록일자
 * @property {string} exgtk_issu_no - 교환권발급번호
 * @property {number} user_id - 사용자아이디
 * @property {number} exgtk_rprs_id - 교환권대표아이디
 * @property {Date} crt_dt - 교환권생성일
 * @property {Date} use_dt - 사용일시
 * @property {string} rgn_cd - 지역코드
 * @property {string} exgtk_nm - 교환권명
 * @property {number} prchs_amt - 구매금액
 * @property {Date} vld_prd_bgng_dt - 유효기간시작일시
 * @property {Date} vld_prd_end_dt - 유효기간종료일시
 * @property {string} exgtk_issu_cn - 교환권발급내용
 * @property {number} exgtk_img_file_id - 교환권이미지파일아이디
 * @property {FileBase} img_file - 대표이미지
 */
const CouponDetail = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 등록일자 */
    reg_dt: date().label('등록일자').required(),
    /** 교환권발급번호 */
    exgtk_issu_no: string().label('교환권발급번호').max(20).required(),
    /** 사용자아이디 */
    user_id: number().label('사용자아이디').required(),
    /** 교환권대표아이디 */
    exgtk_rprs_id: number().label('교환권대표아이디').required(),
    /** 교환권생성일 */
    crt_dt: date().label('교환권생성일').required(),
    /** 사용일시 */
    use_dt: date().label('사용일시').nullable(),
    /** 지역코드 */
    rgn_cd: string().label('지역코드').max(1).required(),
    /** 교환권명 */
    exgtk_nm: string().label('교환권명').max(100).required(),
    /** 구매금액 */
    prchs_amt: number().label('구매금액').required(),
    /** 유효기간시작일시 */
    vld_prd_bgng_dt: date().label('유효기간시작일시').required(),
    /** 유효기간종료일시 */
    vld_prd_end_dt: date().label('유효기간종료일시').required(),
    /** 교환권발급내용 */
    exgtk_issu_cn: string().label('교환권발급내용'),
    /** 교환권이미지파일아이디 */
    exgtk_img_file_id: number().label('교환권이미지파일아이디').nullable(),
    /** 대표이미지 */
    img_file: file.nullable(),
}).nullable();
/**
 * Represents the details of a coupon.
 * @property {number} id - The unique identifier of the coupon.
 * @property {string} exgtk_nm - The name of the coupon.
 * @property {string|null} exgtk_issu_cn - The description of the coupon.
 * @property {string} rgn_cd - The region code associated with the coupon.
 * @property {number} exgtk_tnocs - The total number of coupons.
 * @property {number} remain_cnt - The remaining number of coupons.
 * @property {number} prchs_amt - The purchase amount required for the coupon.
 * @property {Date} vld_prd_bgng_dt - The start date of the coupon's validity period.
 * @property {Date} vld_prd_end_dt - The end date of the coupon's validity period.
 * @property {number|null} exgtk_img_file_id - The identifier of the coupon's image file.
 * @property {File|null} img_file - The coupon's image file.
 */
const CouponList = object({
    /** 쿠폰아이디 */
    id: number().label('쿠폰아이디').integer().required(),
    /** 교환권명 */
    exgtk_nm: string().label('교환권명').max(50).required(),
    /** 쿠폰설명 */
    exgtk_issu_cn: string().label().nullable(),
    /** 지역코드 */
    rgn_cd: string().label('지역코드').required().oneOf(Object.values(RGN)).default(RGN.JEONJU),
    /** 교환권총건수 */
    exgtk_tnocs: number().label('교환권총건수').required(),
    /** 남은건수 */
    remain_cnt: number().label('남은건수').required(),
    /** 구매금액 */
    prchs_amt: number().label('구매금액').required(),
    /** 유효기간시작일시 */
    vld_prd_bgng_dt: date().label('유효기간시작일시').required(),
    /** 유효기간종료일시 */
    vld_prd_end_dt: date().label('유효기간종료일시').required(),
    /** 교환권이미지파일아이디 */
    exgtk_img_file_id: number('교환권이미지파일아이디').label().nullable(),
    /** 이미지파일 */
    img_file: file.nullable(),
});
/**
 * 구입가능 실물교환권 목록조회 결과 DTO
 */
const CouponListRes = SuccessListRes(CouponList);
/** 교환권 상세조회 결과 DTO */
const CouponDetailRes = SuccessObjectRes(CouponDetail);
module.exports = {
    CouponDetail,
    CouponDetailRes,
    CouponListRes,
};
//# sourceMappingURL=coupon.js.map