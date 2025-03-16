"use strict";
require('../../common/yup_locale');
const { object, number, string, date } = require('yup');
const { RSRC_TYPE, OS_TYPE } = require('../../common/code');
const { SuccessObjectRes } = require('../../common/response');
/**
 * 메타버스자원 등록 DTO
 * @property {string} rsrc_type_cd - 자원유형코드 (RSRC_TYPE_CD)
 * @property {string} rsrc_nmg_artcl_nm - 자원관리항목명
 * @property {string} rsrc_nm - 자원명
 * @property {number} skn_id - 스킨아이디
 * @property {string} os_se_cd - OS구분코드 (MBL_DEVICE_TYPE_CD - A:안드로이드, I:IOS)
 * @property {string} dwnld_addr - 다운로드주소
 * @property {string} orgnl_file_nm - 원본파일명
 * @property {string} file_type_nm - 파일유형명
 * @property {number} file_sz - 파일크기
 */
const ResourceCreate = object({
    /** 자원유형코드 */
    rsrc_type_cd: string().label('자원유형코드').required().oneOf(Object.values(RSRC_TYPE)),
    /** 자원관리항목명 */
    rsrc_nmg_artcl_nm: string().label('자원관리항목명').max(100).nullable(),
    /** 자원명 */
    rsrc_nm: string().label('자원명').max(100).required(),
    /** 스킨아이디 */
    skn_id: number().label('스킨아이디').nullable(),
    /* OS구분 */
    os_se_cd: string().label('OS구분').max(1).required().oneOf(Object.values(OS_TYPE)),
    /** 다운로드주소 */
    dwnld_addr: string().label('다운로드주소').max(320).nullable(),
    /** 원본파일명 */
    orgnl_file_nm: string().label('원본파일명').max(200).nullable(),
    /** 파일유형명 */
    file_type_nm: string().label('파일유형명').max(40).nullable(),
    /** 파일크기 */
    file_sz: number().label('파일크기').nullable(),
});
/**
 * 메타버스자원 상세정보 DTO
 * @property {number} id - id
 * @property {date} crt_dt - 등록일시
 * @property {date} mdfcn_dt - 수정일시
 */
const ResourceDetail = ResourceCreate.shape({
    /** id */
    id: number().label('아이디').required(),
    /** 등록일시 */
    crt_dt: date().label('등록일시').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/**
 * 메타버스자원 상세조회
 * @property {string} rsrc_type_cd - 자원유형코드 (RSRC_TYPE_CD). 필수항목
 * @property {string} os_se_cd - OS구분코드 (MBL_DEVICE_TYPE_CD - A:안드로이드, I:IOS). 필수항목
 * @property {number} skn_id - 스킨아이디. 값이 없으면 0으로 설정해야 함. 필수항목.
 */
const ResourceDetailReq = object({
    /** 자원유형코드 */
    rsrc_type_cd: string().label('자원유형코드').required().oneOf(Object.values(RSRC_TYPE)),
    /* OS구분 */
    os_se_cd: string().label('OS구분').max(1).required().oneOf(Object.values(OS_TYPE)),
    /** 스킨아이디. 값이 없으면 0으로 설정해야 함 */
    skn_id: number().label('스킨아이디').required(),
});
/**
 * 메타버스자원 삭제 DTO
 * @property {string} rsrc_type_cd - 자원유형코드 (RSRC_TYPE_CD)
 * @property {string} os_se_cd - OS구분코드 (MBL_DEVICE_TYPE_CD - A:안드로이드, I:IOS)
 * @property {number} skn_id - 스킨아이디
 */
const ResourceDelete = object({
    /** 자원유형코드 */
    rsrc_type_cd: string().label('자원유형코드').required().oneOf(Object.values(RSRC_TYPE)),
    /* OS구분 */
    os_se_cd: string().label('OS구분').max(1).required().oneOf(Object.values(OS_TYPE)),
    /** 스킨아이디 */
    skn_id: number().label('스킨아이디').nullable(),
});
/**
 * 메타버스자원 등록 및 상세조회 결과 DTO
 */
const ResourceDetailRes = SuccessObjectRes(ResourceDetail);
module.exports = {
    ResourceDetail,
    ResourceCreate,
    ResourceDetailRes,
    ResourceDetailReq,
    ResourceDelete,
};
//# sourceMappingURL=resource.js.map