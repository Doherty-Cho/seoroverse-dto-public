/**
 * 프로그램 버전조회 요청 DTO
 *
 * @property {string} mbl_device_type_cd - 모바일디바이스유형코드. Required.
 */
export const ProgramVersionReq: import("yup").ObjectSchema<{
    mbl_device_type_cd: string;
}, import("yup").AnyObject, {
    mbl_device_type_cd: undefined;
}, "">;
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
export const ProgramVersion: import("yup").ObjectSchema<{
    id: number;
    mbl_device_type_cd: string;
    env_nm: string;
    updt_yn: NonNullable<boolean | undefined>;
    ver_idnty_no: string | null | undefined;
    ver_cn: string | null | undefined;
    dwnld_url_addr: string | null | undefined;
    lnkg_page_url_addr: string | null | undefined;
    orgnl_file_nm: string | null | undefined;
    file_type_nm: string | null | undefined;
    file_sz: number | null | undefined;
    crltn_dt: Date | null | undefined;
    mngr_id: number | null | undefined;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    mbl_device_type_cd: undefined;
    env_nm: undefined;
    updt_yn: undefined;
    ver_idnty_no: undefined;
    ver_cn: undefined;
    dwnld_url_addr: undefined;
    lnkg_page_url_addr: undefined;
    orgnl_file_nm: undefined;
    file_type_nm: undefined;
    file_sz: undefined;
    crltn_dt: undefined;
    mngr_id: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/** 공간 상세조회 결과 DTO */
export const ProgramVersionRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        mngr_id?: number | null | undefined;
        file_sz?: number | null | undefined;
        orgnl_file_nm?: string | null | undefined;
        file_type_nm?: string | null | undefined;
        ver_idnty_no?: string | null | undefined;
        ver_cn?: string | null | undefined;
        dwnld_url_addr?: string | null | undefined;
        lnkg_page_url_addr?: string | null | undefined;
        crltn_dt?: Date | null | undefined;
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
        mbl_device_type_cd: string;
        env_nm: string;
        updt_yn: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=version.d.ts.map