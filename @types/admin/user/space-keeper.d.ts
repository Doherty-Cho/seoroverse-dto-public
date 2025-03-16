/**
 * 검색 DTO
 */
export type 공간지기 = {
    /**
     * - 지역
     */
    rgn_cd: string;
    /**
     * - 공간 유형
     */
    lib_type_cd: string;
    /**
     * - 공간 이름
     */
    lib_nm: string;
    /**
     * - 회원번호
     */
    id: string;
};
/**
 * @typedef 공간지기 검색 DTO
 * @property {string} rgn_cd - 지역
 * @property {string} lib_type_cd - 공간 유형
 * @property {string} lib_nm - 공간 이름
 * @property {string} id - 회원번호
 */
export const SpaceKeeperSearch: import("yup").ObjectSchema<{
    rgn_cd: string | undefined;
    lib_type_cd: string | undefined;
    lib_nm: string | undefined;
    id: string | undefined;
}, import("yup").AnyObject, {
    rgn_cd: undefined;
    lib_type_cd: undefined;
    lib_nm: undefined;
    id: undefined;
}, "">;
/**
 * @typedef 공간지기 목록 DTO
 * @property {number} id - 회원번호(id)
 * @property {string} rgn_cd - 지역
 * @property {string} lib_type_cd - 공간 유형
 * @property {string} lib_nm - 공간 이름
 * @property {string} eml_addr - 아이디(이메일)
 * @property {string} nckn_nm - 담당자 이름
 */
export const SpaceKeeperList: import("yup").ObjectSchema<{
    id: number;
    rgn_cd: string;
    lib_type_cd: string;
    lib_nm: string;
    eml_addr: string;
    nckn_nm: string;
}, import("yup").AnyObject, {
    id: undefined;
    rgn_cd: undefined;
    lib_type_cd: undefined;
    lib_nm: undefined;
    eml_addr: undefined;
    nckn_nm: undefined;
}, "">;
/**
 * @typedef 공간지기 검색 요청 DTO
 */
export const SpaceKeeperSearchReq: import("yup").ObjectSchema<{
    filters: {} | null | undefined;
    search: {} | null | undefined;
    from: number;
    size: number;
    sort: any[] | undefined;
}, import("yup").AnyObject, {
    filters: undefined;
    search: undefined;
    from: 0;
    size: 1;
    sort: undefined;
}, "">;
/**
 * @typedef 공간지기 검색 결과 응답 DTO
 */
export const SpaceKeeperSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            id: number;
            nckn_nm: string;
            eml_addr: string;
            rgn_cd: string;
            lib_type_cd: string;
            lib_nm: string;
        }[];
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: {
        total: undefined;
        count: undefined;
        rows: undefined;
    };
}, "">;
/**
 * @typedef 공간지기 상세정보 DTO
 * @property {string} mbl_telno - 담당자 번호(전화번호)
 * @property {number} pst_cnt - 등록한 게시물 수
 * @property {date} last_cntn_dt - 최종 접속일
 */
export const SpaceKeeperDetail: import("yup").ObjectSchema<{
    id: number;
    rgn_cd: string;
    lib_type_cd: string;
    lib_nm: string;
    eml_addr: string;
    nckn_nm: string;
    mbl_telno: string | null | undefined;
    pst_cnt: number;
    last_cntn_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    rgn_cd: undefined;
    lib_type_cd: undefined;
    lib_nm: undefined;
    eml_addr: undefined;
    nckn_nm: undefined;
    mbl_telno: undefined;
    pst_cnt: undefined;
    last_cntn_dt: undefined;
}, "">;
/**
 * @typedef 공간지기 상세조회 결과 응답 DTO
 */
export const SpaceKeeperDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        mbl_telno?: string | null | undefined;
        id: number;
        nckn_nm: string;
        eml_addr: string;
        last_cntn_dt: Date;
        rgn_cd: string;
        lib_type_cd: string;
        lib_nm: string;
        pst_cnt: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 공간지기 비밀번호 변경 DTO
 * @property {string} new_password - 새 비밀번호
 */
export const SpaceKeeperPasswordUpdate: import("yup").ObjectSchema<{
    new_password: string;
}, import("yup").AnyObject, {
    new_password: undefined;
}, "">;
//# sourceMappingURL=space-keeper.d.ts.map