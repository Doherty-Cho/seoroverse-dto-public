"use strict";
require('../../common/yup_locale');
const { object, number, string } = require('yup');
const { EXHB_SQRE_CD, EXHB_CONTS_TYPE_CD } = require('../../common/code');
const { SuccessObjectRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
/**
 * 전시 콘텐츠 공통 항목
 * @property {number} id - 아이디
 * @property {string} exhb_sqre_cd - 전시광장코드
 * @property {string} exhb_conts_type_cd - 전시콘텐츠유형코드
 * @property {string} conts_ttl - 콘텐츠제목
 * @property {string} conts_file_id - 콘텐츠파일아이디
 * @property {FileBase} conts_file - 콘텐츠파일
 * @property {number} vdo_spd - 동영상속도
 * @property {string | null | undefined} vdo_url_addr - 동영상URL
 * @property {Date} thmb_file_id - 썸네일파일아이디
 * @property {FileBase} thmb_file - 썸네일파일
 * @property {Date} crt_dt - 생성일시
 */
const ExhibitionBase = object({
    /** 전시광장코드 */
    exhb_sqre_cd: string().label('전시광장코드').required().oneOf(Object.values(EXHB_SQRE_CD)),
    /** 전시콘텐츠유형코드 */
    exhb_conts_type_cd: string()
        .label('전시콘텐츠유형코드')
        .required()
        .oneOf(Object.values(EXHB_CONTS_TYPE_CD)),
    /** 콘텐츠제목 */
    conts_ttl: string().label('콘텐츠 제목').max(20).required().default(''),
    /** 콘텐츠파일아이디 */
    conts_file_id: number().label('콘텐츠 파일 ID').nullable(),
    /** 동영상속도 */
    vdo_spd: number().label('동영상 속도').nullable().default(0),
    /** 동영상 URL */
    vdo_url_addr: string()
        .label('동영상 URL')
        .max(320)
        .nullable()
        .when('exhb_conts_type_cd', {
        is: EXHB_CONTS_TYPE_CD.WEB_VIEW,
        then: (schema) => schema.required(),
        otherwise: (schema) => schema.nullable(),
    })
        .default(''),
    /** 썸네일 파일 아이디 */
    thmb_file_id: number().label('썸네일 파일 ID').nullable(),
});
/**
 * 전시 콘텐츠 상세 DTO
 * @property {number} id - 아이디
 * @property {FileBase} conts_file - 콘텐츠파일
 * @property {FileBase} thmb_file - 썸네일파일
 */
const ExhibitionDetail = ExhibitionBase.shape({
    /** 아이디 */
    id: number().label('아이디').nullable(),
    /** 콘텐츠파일 */
    conts_file: file.label('콘텐츠 파일').nullable(),
    /** 썸네일 파일 */
    thmb_file: file.label('썸네일 파일').nullable(),
});
/**
 * 도서관 상세 DTO
 * @property {ExhibitionBase} exhibition - 광장
 * @property {ExhibitionBase} jeonju - 전주
 * @property {ExhibitionBase} iksan - 익산
 */
const ExhibitionDetails = object({
    /** 광장 */
    exhibition: ExhibitionDetail.nullable(),
    /** 전주 */
    jeonju: ExhibitionDetail.nullable(),
    /** 익산 */
    iksan: ExhibitionDetail.nullable(),
});
/**
 * 전시 등록 DTO
 * @property {ExhibitionBase} exhibition - 광장
 * @property {ExhibitionBase} jeonju - 전주
 * @property {ExhibitionBase} iksan - 익산
 */
const ExhibitionCreate = object({
    /** 광장 */
    exhibition: ExhibitionBase.nullable(),
    /** 전주 */
    jeonju: ExhibitionBase.nullable(),
    /** 익산 */
    iksan: ExhibitionBase.nullable(),
});
/**
 *  전시광장 상세조회 결과 DTO
 */
const ExhibitionDetailRes = SuccessObjectRes(ExhibitionDetails);
module.exports = {
    ExhibitionBase,
    ExhibitionDetail,
    ExhibitionCreate,
    ExhibitionDetailRes,
};
//# sourceMappingURL=exhibition.js.map