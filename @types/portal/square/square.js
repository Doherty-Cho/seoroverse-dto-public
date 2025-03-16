"use strict";
require('../../common/yup_locale');
const { object, number, string, date } = require('yup');
const { EXHB_SQRE_CD, EXHB_CONTS_TYPE_CD } = require('../../common/code');
const { FileInfo: file } = require('../../common/file');
const { SuccessListRes, SuccessObjectRes } = require('../../common/response');
/**
 * 광장 상세조회 DTO
 * @property {number} id - 아이디
 * @property {string} exhb_sqre_cd - 전시광장코드(EXHB_SQRE_CD)
 * @property {string} exhb_conts_type_cd - 전시콘텐츠유형코드(EXHB_CONTS_TYPE_CD)
 * @property {string} conts_ttl - 콘텐츠제목
 * @property {FileInfo} conts_file - 콘텐츠파일
 * @property {number} vdo_spd - 동영상속도
 * @property {string} vdo_url_addr - 동영상URL주소
 * @property {FileInfo} thmb_file - 썸네일파일
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const SquareDetail = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 전시광장코드 */
    exhb_sqre_cd: string().label('전시광장코드').required().oneOf(Object.values(EXHB_SQRE_CD)),
    /** 전시콘텐츠유형코드 */
    exhb_conts_type_cd: string()
        .label('전시콘텐츠유형코드')
        .required()
        .oneOf(Object.values(EXHB_CONTS_TYPE_CD)),
    /** 콘텐츠제목 */
    conts_ttl: string().label('콘텐츠제목').nullable(),
    /** 콘텐츠파일 */
    conts_file: file.label('콘텐츠파일').nullable(),
    /** 동영상속도 */
    vdo_spd: number().label('동영상속도').required().default(0),
    /** 동영상URL주소 */
    vdo_url_addr: string().label('동영상URL주소').nullable(),
    /** 썸네일파일 */
    thmb_file: file.label('썸네일파일').nullable(),
    /** 생성일시 */
    crt_dt: date().label('생성일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/** 광장컨텐츠 목록조회 결과 DTO */
const SquareListRes = SuccessListRes(SquareDetail);
/** 광장컨텐츠 상세조회 결과 DTO */
const SquareDetailRes = SuccessObjectRes(SquareDetail);
module.exports = {
    SquareDetail,
    SquareDetailRes,
    SquareListRes,
};
//# sourceMappingURL=square.js.map