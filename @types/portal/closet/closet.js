"use strict";
require('../../common/yup_locale');
const { object, number, string, date } = require('yup');
const { SuccessObjectRes } = require('../../common/response');
/**
 * @typedef 옷장 공통 항목
 * @property {number} avtr_rprs_img_file_id - 아바타 대표 이미지 파일아이디. Required.
 * @property {number} prfl_img_file_id - 프로필 이미지 파일아이디. Required.
 * @property {string} avtr_stts_msg_cn - 아바타상태메시지
 * @property {string} user_wer_item_cn - 사용자착용품목
 * @property {string} user_pss_item_cn - 사용자소지품목
 */
const ClosetCreate = object({
    /** 아바타 대표 이미지 파일아이디 */
    avtr_rprs_img_file_id: number().label('아바타대표이미지파일아이디').required(),
    /** 프로필 이미지 파일아이디 */
    prfl_img_file_id: number().label('프로필이미지파일아이디').required(),
    /** 아바타상태메시지 */
    avtr_stts_msg_cn: string().label('상태메시지').max(4000).nullable(),
    /** 사용자착용품목 */
    user_wer_item_cn: object().label('착용아이템').nullable(),
    /** 사용자소지품목 */
    user_pss_item_cn: object().label('소지아이템').nullable(),
});
/**
 * 옷장 수정 DTO
 */
const ClosetUpdate = ClosetCreate;
/**
 * 옷장 상세 DTO
 * @property {number} id - 아이디
 * @property {string} user_id - 사용자ID
 * @property {number} avtr_rprs_img_file_id - 아바타 대표 이미지 파일아이디. Required.
 * @property {number} prfl_img_file_id - 프로필 이미지 파일아이디. Required.
 * @property {string} avtr_stts_msg_cn - 아바타상태메시지
 * @property {string} user_wer_item_cn - 사용자착용품목
 * @property {string} user_pss_item_cn - 사용자소지품목
 * @property {Date} crt_dt - 작성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const ClosetDetail = ClosetCreate.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 공지유형코드 */
    user_id: string().label('사용자ID').required(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/** 옷장 상세조회 결과 DTO */
const ClosetDetailRes = SuccessObjectRes(ClosetDetail);
module.exports = {
    ClosetDetail,
    ClosetCreate,
    ClosetUpdate,
    ClosetDetailRes,
};
//# sourceMappingURL=closet.js.map