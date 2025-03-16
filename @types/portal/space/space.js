"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { SPCE_TYPE, SPCE_STTS_CD } = require('../../common/code');
const { FileInfo: file } = require('../../common/file');
const { SuccessObjectRes } = require('../../common/response');
/**
 * 공간 상세조회 DTO
 * @property {number} id - 아이디. Required.
 * @property {number} spce_creatr_id - 공간생성자. Optional.
 * @property {string} nckn_nm - 공간생성자 닉네임. Optional.
 * @property {number} spce_type_id - 공간유형아이디. Required.
 * @property {number} spce_skn_id - 공간스킨아이디. Required.
 * @property {string} spce_ttl - 공간제목. Required.
 * @property {string} spce_expln - 공간설명. Required.
 * @property {object} spce_bsc_stng_cn - 공간기본설정내용. Optional.
 * @property {number} cntn_lmt_cnt - 접속제한수. Required.
 * @property {boolean} chnl_extd_psblty_yn - 채널확장가능여부. Required.
 * @property {boolean} voc_chitt_psblty_yn - 음성채팅가능여부. Required.
 * @property {boolean} scrn_use_yn - 화면사용여부. Required.
 * @property {FileInfo} rprs_img_file - 대표이미지파일. Optional.
 * @property {boolean} sctr_yn - 비밀방여부. Required.
 * @property {string} sctr_pswd - 비밀방비밀번호. Optional.
 * @property {string} spce_stts_cd - 공간상태. Optional.
 * @property {date} crt_dt - 생성일시. Required.
 * @property {date} mdfcn_dt - 수정일시. Required.
 * @property {number} rgn_lib_id - 아이디. Optional.
 * @property {string} rgn_lib_rgn_cd - 지역코드 Optional
 * @property {string} rgn_lib_type_cd - 도서관유형코드 Optional
 */
const SpaceDetail = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 공간생성자(소유자) */
    spce_creatr_id: number().label('공간생성자').nullable(),
    /** 공간생성자 닉네임 */
    nckn_nm: string().label('닉네임').nullable(),
    /** 공간유형아이디 */
    spce_type_id: number().label('공간유형아이디').oneOf(Object.values(SPCE_TYPE)).required(),
    /** 공간스킨아이디 */
    spce_skn_id: number().label('공간스킨아이디').required(),
    /** 공간제목 */
    spce_ttl: string().label('공간제목').required(),
    /** 공간설명 */
    spce_expln: string().label('공간설명').required(),
    /** 공간기본설정내용 */
    spce_bsc_stng_cn: object().label('공간기본설정내용').nullable(),
    /** 접속제한수 */
    cntn_lmt_cnt: number().label('접속제한수').required(),
    /** 채널확장가능여부 */
    chnl_extd_psblty_yn: boolean().label('채널확장가능여부').required(),
    /** 음성채팅가능여부 */
    voc_chitt_psblty_yn: boolean().label('음성채팅가능여부').required(),
    /** 화면사용여부 */
    scrn_use_yn: boolean().label('화면사용여부').required(),
    /** 대표이미지파일 */
    rprs_img_file: file.label('대표이미지파일').nullable(),
    /** 비밀방여부 */
    sctr_yn: boolean().label('비밀방여부').required(),
    /** 비밀방비밀번호 */
    sctr_pswd: string().label('비밀방비밀번호').nullable(),
    /** 공간상태 */
    spce_stts_cd: string().label('공간상태').oneOf(Object.values(SPCE_STTS_CD)).nullable(),
    /** 생성일시 */
    crt_dt: date().label('생성일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
    /** 지역도서관아이디 */
    rgn_lib_id: number().label('지역도서관아이디').nullable(),
    /** 지역코드 */
    rgn_lib_rgn_cd: string().label('지역도서관지역코드').max(1).nullable(),
    /** 도서관유형코드 */
    rgn_lib_type_cd: string().label('도서관유형코드').max(1).nullable(),
});
/** 공간 상세조회 결과 DTO */
const SpaceDetailRes = SuccessObjectRes(SpaceDetail);
module.exports = {
    SpaceDetail,
    SpaceDetailRes,
};
//# sourceMappingURL=space.js.map