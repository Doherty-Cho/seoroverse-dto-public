"use strict";
require('../../common/yup_locale');
const { object, number, string, date } = require('yup');
const { FileInfo } = require('../../common/file');
const { SuccessListRes } = require('../../common/response');
/**
 * 콘텐츠 상세정보
 *
 * @property {number} id - 콘텐츠 아이디. Required.
 * @property {number} spce_id - 공간아이디. Required.
 * @property {string} conts_se_cd - 콘텐츠구분코드. Required.
 * @property {number} conts_seq - 콘텐츠순서. Required.
 * @property {string} conts_ttl - 콘텐츠제목. Required.
 * @property {number} file_id - 파일아이디. Required.
 * @property {date} crt_dt - 생성일시. Required.
 * @property {date} mdfcn_dt - 수정일시. Required.
 */
const ContentList = object({
    /** 콘텐츠아이디 */
    id: number().label('콘텐츠아이디').required(),
    /** 공간아이디 */
    spce_id: number().label('공간아이디').required(),
    /** 콘텐츠구분코드 */
    conts_se_cd: string().label('콘텐츠구분코드').required(),
    /** 콘텐츠순서 */
    conts_seq: number().label('콘텐츠순서').required(),
    /** 콘텐츠제목 */
    conts_ttl: string().label('콘텐츠제목').required(),
    /** 파일정보 */
    file: FileInfo.label('파일정보').required(),
    /** 생성일시 */
    crt_dt: date().label('생성일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/**
 * 콘텐츠 생성 DTO
 *
 * @property {string} conts_se_cd - 콘텐츠구분코드. Required.
 * @property {number} conts_seq - 콘텐츠순서. Required.
 * @property {string} conts_ttl - 콘텐츠제목. Required.
 * @property {number} file_id - 파일아이디. Required.
 */
const ContentCreate = object({
    /** 콘텐츠구분코드 */
    conts_se_cd: string().label('콘텐츠구분코드').required(),
    /** 콘텐츠순서 */
    conts_seq: number().label('콘텐츠순서').required(),
    /** 콘텐츠제목 */
    conts_ttl: string().label('콘텐츠제목').required(),
    /** 파일아이디 */
    file_id: number().label('파일아이디').required(),
});
/**
 * 콘텐츠 수정 DTO
 */
const ContentUpdate = ContentCreate;
/** 콘텐츠 목록조회 결과 DTO */
const ContentListRes = SuccessListRes(ContentList);
module.exports = {
    ContentList,
    ContentListRes,
    ContentCreate,
    ContentUpdate,
};
//# sourceMappingURL=content.js.map