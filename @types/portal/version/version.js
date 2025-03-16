"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { MBL_DEVICE_TYPE } = require('../../common/code');
const { SuccessObjectRes } = require('../../common/response');
/**
 * 프로그램 버전조회 요청 DTO
 *
 * @property {string} mbl_device_type_cd - 모바일디바이스유형코드. Required.
 */
const ProgramVersionReq = object({
    /** 모바일디바이스유형코드 */
    mbl_device_type_cd: string()
        .label('모바일디바이스유형코드')
        .oneOf(Object.values(MBL_DEVICE_TYPE))
        .required(),
});
/**
 * 프로그램 버전 정보 DTO
 *
 * @property {number} id - 아이디. Required.
 * @property {string} mbl_device_type_cd - 모바일디바이스유형코드. Required.
 * @property {string} env_nm - 환경명. Required.
 * @property {boolean} updt_yn - 갱신여부. Required.
 * @property {string} ver_idnty_no - 버전확인번호. Optional.
 * @property {string} ver_cn - 버전내용. Optional.
 * @property {string} dwnld_url_addr - 다운로드URL주소. Optional.
 * @property {string} lnkg_page_url_addr - 연결페이지URL주소. Optional.
 * @property {string} orgnl_file_nm - 원본파일명. Optional.
 * @property {string} file_type_nm - 파일유형명. Optional.
 * @property {number} file_sz - 파일크기. Optional.
 * @property {date} crltn_dt - 배포일시. Optional.
 * @property {number} mngr_id - 관리자아이디. Optional.
 * @property {date} crt_dt - 생성일시. Required.
 * @property {date} mdfcn_dt - 수정일시. Required.
 */
const ProgramVersion = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    // spce_type_id: number().label('공간유형아이디').oneOf(Object.values(SPCE_TYPE)).required(),
    /** 모바일디바이스유형코드 */
    mbl_device_type_cd: string()
        .label('모바일디바이스유형코드')
        .oneOf(Object.values(MBL_DEVICE_TYPE))
        .required(),
    /** 환경명 */
    env_nm: string().label('환경명').required(),
    /** 갱신여부 */
    updt_yn: boolean().label('갱신여부').required(),
    /** 버전확인번호 */
    ver_idnty_no: string().label('버전확인번호').nullable(),
    /** 버전내용 */
    ver_cn: string().label('버전내용').nullable(),
    /** 다운로드URL주소 */
    dwnld_url_addr: string().label('다운로드URL주소').nullable(),
    /** 연결페이지URL주소 */
    lnkg_page_url_addr: string().label('연결페이지URL주소').nullable(),
    /** 원본파일명 */
    orgnl_file_nm: string().label('원본파일명').nullable(),
    /** 파일유형명 */
    file_type_nm: string().label('파일유형명').nullable(),
    /** 파일크기 */
    file_sz: number().label('파일크기').nullable(),
    /** 배포일시 */
    crltn_dt: date().label('배포일시').nullable(),
    /** 관리자아이디 */
    mngr_id: number().label('관리자아이디').nullable(),
    /** 생성일시 */
    crt_dt: date().label('생성일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/** 공간 상세조회 결과 DTO */
const ProgramVersionRes = SuccessObjectRes(ProgramVersion);
module.exports = {
    ProgramVersionReq,
    ProgramVersion,
    ProgramVersionRes,
};
//# sourceMappingURL=version.js.map