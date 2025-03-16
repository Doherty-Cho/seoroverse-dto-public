"use strict";
const { object, number, string, date, array, boolean } = require('yup');
const { SuccessObjectRes } = require('./response');
/**
 * 파일 공통 항목
 * @property {number} id - 파일id
 * @property {string} orgnl_file_nm - 원본파일명
 * @property {string} file_url_addr - 파일URL주소
 * @property {string} thmb_url_addr - 썸네일URL주소
 */
const FileBase = object({
    id: number().integer().required(),
    orgnl_file_nm: string().required(),
    file_url_addr: string().required(),
    thmb_url_addr: string().nullable(),
});
/**
 * @description 파일 정보
 * @property {number} file_sz - 파일크기
 */
const FileInfo = FileBase.shape({
    file_sz: number().integer().required(),
});
/**
 * @descrption 파일 상세정보 DTO
 * @property {number} id - 파일id
 * @property {string} file_url_addr - 파일URL주소
 * @property {string} thmb_url_addr - 썸네일URL주소
 * @property {string} orgnl_file_nm - 원본파일명
 * @property {string} file_type_nm - 파일유형
 * @property {number} file_sz - 파일크기
 * @property {boolean} encd_yn - 인코딩여부
 * @property {string} vdo_encd_err_log_cn - 동영상인코딩오류로그
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
const FileDetail = object({
    /** 파일id */
    id: number().integer().required(),
    /** 파일URL */
    file_url_addr: string().required(),
    /** 썸네일URL */
    thmb_url_addr: string().nullable(),
    /** 원본파일명 */
    orgnl_file_nm: string().required(),
    /** 파일유형 */
    file_type_nm: string().required(),
    /** 파일크기 */
    file_sz: number().integer().required(),
    /** 인코딩여부 */
    encd_yn: boolean().required().default(false),
    /** 동영상인코딩오류로그 */
    vdo_encd_err_log_cn: string().nullable(),
    /** 생성일시 */
    crt_dt: date().required(),
    /** 수정일시 */
    mdfcn_dt: date().required(),
});
/**
 * @description 파일 등록 결과
 */
const FileCreateResult = object({
    file: FileInfo.required(),
});
/**
 * @description 복수파일 등록 결과
 */
const FileMultipleCreateResult = object({
    files: array().of(FileInfo.required()),
});
/**
 * @description 파일 상세조회 결과
 */
const FileGetResult = object({
    file: FileDetail.required(),
});
/**
 * @description 파일 등록 결과 DTO
 */
const FileCreateResponse = SuccessObjectRes(FileCreateResult);
/**
 * @description 복수 파일 등록 결과 DTO
 */
const FileMultipleCreateResponse = SuccessObjectRes(FileMultipleCreateResult);
/**
 * @description 파일 상세조회 결과 DTO
 */
const FileGetResponse = SuccessObjectRes(FileGetResult);
module.exports = {
    FileBase,
    FileInfo,
    FileDetail,
    FileCreateResponse,
    FileMultipleCreateResponse,
    FileGetResponse,
};
//# sourceMappingURL=file.js.map