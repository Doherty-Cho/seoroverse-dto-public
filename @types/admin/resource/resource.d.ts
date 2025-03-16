/**
 * 메타버스자원 상세정보 DTO
 * @property {number} id - id
 * @property {date} crt_dt - 등록일시
 * @property {date} mdfcn_dt - 수정일시
 */
export const ResourceDetail: import("yup").ObjectSchema<{
    rsrc_type_cd: string;
    rsrc_nmg_artcl_nm: string | null | undefined;
    rsrc_nm: string;
    skn_id: number | null | undefined;
    os_se_cd: string;
    dwnld_addr: string | null | undefined;
    orgnl_file_nm: string | null | undefined;
    file_type_nm: string | null | undefined;
    file_sz: number | null | undefined;
    id: number;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    rsrc_type_cd: undefined;
    rsrc_nmg_artcl_nm: undefined;
    rsrc_nm: undefined;
    skn_id: undefined;
    os_se_cd: undefined;
    dwnld_addr: undefined;
    orgnl_file_nm: undefined;
    file_type_nm: undefined;
    file_sz: undefined;
    id: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
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
export const ResourceCreate: import("yup").ObjectSchema<{
    rsrc_type_cd: string;
    rsrc_nmg_artcl_nm: string | null | undefined;
    rsrc_nm: string;
    skn_id: number | null | undefined;
    os_se_cd: string;
    dwnld_addr: string | null | undefined;
    orgnl_file_nm: string | null | undefined;
    file_type_nm: string | null | undefined;
    file_sz: number | null | undefined;
}, import("yup").AnyObject, {
    rsrc_type_cd: undefined;
    rsrc_nmg_artcl_nm: undefined;
    rsrc_nm: undefined;
    skn_id: undefined;
    os_se_cd: undefined;
    dwnld_addr: undefined;
    orgnl_file_nm: undefined;
    file_type_nm: undefined;
    file_sz: undefined;
}, "">;
/**
 * 메타버스자원 등록 및 상세조회 결과 DTO
 */
export const ResourceDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        file_sz?: number | null | undefined;
        rsrc_nmg_artcl_nm?: string | null | undefined;
        skn_id?: number | null | undefined;
        dwnld_addr?: string | null | undefined;
        orgnl_file_nm?: string | null | undefined;
        file_type_nm?: string | null | undefined;
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
        rsrc_type_cd: string;
        rsrc_nm: string;
        os_se_cd: string;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * 메타버스자원 상세조회
 * @property {string} rsrc_type_cd - 자원유형코드 (RSRC_TYPE_CD). 필수항목
 * @property {string} os_se_cd - OS구분코드 (MBL_DEVICE_TYPE_CD - A:안드로이드, I:IOS). 필수항목
 * @property {number} skn_id - 스킨아이디. 값이 없으면 0으로 설정해야 함. 필수항목.
 */
export const ResourceDetailReq: import("yup").ObjectSchema<{
    rsrc_type_cd: string;
    os_se_cd: string;
    skn_id: number;
}, import("yup").AnyObject, {
    rsrc_type_cd: undefined;
    os_se_cd: undefined;
    skn_id: undefined;
}, "">;
/**
 * 메타버스자원 삭제 DTO
 * @property {string} rsrc_type_cd - 자원유형코드 (RSRC_TYPE_CD)
 * @property {string} os_se_cd - OS구분코드 (MBL_DEVICE_TYPE_CD - A:안드로이드, I:IOS)
 * @property {number} skn_id - 스킨아이디
 */
export const ResourceDelete: import("yup").ObjectSchema<{
    rsrc_type_cd: string;
    os_se_cd: string;
    skn_id: number | null | undefined;
}, import("yup").AnyObject, {
    rsrc_type_cd: undefined;
    os_se_cd: undefined;
    skn_id: undefined;
}, "">;
//# sourceMappingURL=resource.d.ts.map