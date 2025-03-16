/**
 * 검색 DTO
 */
export type 관리자 = {
    /**
     * - 권한 등급
     */
    lvl_cd: string;
    /**
     * - 아이디
     */
    lgn_id: string;
    /**
     * - 관리자번호(id)
     */
    id: number;
    /**
     * - 등록날짜
     */
    crt_dt: Date;
};
/**
 * 닉네임 수정 요청 DTO
 */
export type 마이페이지 = {
    /**
     * - 관리자명
     */
    mngr_nm: string;
};
/**
 * @typedef 관리자 검색 DTO
 * @property {string} lvl_cd - 권한 등급
 * @property {string} lgn_id - 아이디
 * @property {number} id - 관리자번호(id)
 * @property {Date} crt_dt - 등록날짜
 */
export const ManagerSearch: import("yup").ObjectSchema<{
    lvl_cd: string | undefined;
    rgn_cd: string | undefined;
    lgn_id: string | undefined;
    id: number | undefined;
    crt_dt: Date | undefined;
}, import("yup").AnyObject, {
    lvl_cd: undefined;
    rgn_cd: undefined;
    lgn_id: undefined;
    id: undefined;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 관리자 목록 DTO
 * @property {number} id - 관리자번호(id)
 * @property {string} rgn_cd - 지역 구분(RGN)
 * @property {string} lvl_cd - 권한 등급(MNGR_LVL)
 * @property {string} lgn_id - 아이디
 * @property {number} bkmny_amt - 관리자
 * @property {string} mngr_nm - 관리자 이름
 * @property {string} prm_ip_addr - 관리자 IP
 * @property {Date} crt_dt - 등록날짜
 * @property {boolean} use_yn - 사용 여부
 */
export const ManagerList: import("yup").ObjectSchema<{
    id: number;
    rgn_cd: string;
    lvl_cd: string;
    lgn_id: string;
    mngr_nm: string | undefined;
    prm_ip_addr: string | undefined;
    crt_dt: Date;
    use_yn: NonNullable<boolean | undefined>;
}, import("yup").AnyObject, {
    id: undefined;
    rgn_cd: undefined;
    lvl_cd: undefined;
    lgn_id: undefined;
    mngr_nm: undefined;
    prm_ip_addr: undefined;
    crt_dt: undefined;
    use_yn: undefined;
}, "">;
/**
 * @typedef 관리자 검색 요청 DTO
 */
export const ManagerSearchReq: import("yup").ObjectSchema<{
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
 * @typedef 관리자 검색 결과 응답 DTO
 */
export const ManagerSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            mngr_nm?: string | undefined;
            prm_ip_addr?: string | undefined;
            id: number;
            lgn_id: string;
            crt_dt: Date;
            rgn_cd: string;
            lvl_cd: string;
            use_yn: NonNullable<boolean | undefined>;
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
 * @typedef 관리자 상세정보 DTO
 */
export const ManagerDetail: import("yup").ObjectSchema<{
    id: number;
    rgn_cd: string;
    lvl_cd: string;
    lgn_id: string;
    mngr_nm: string | undefined;
    prm_ip_addr: string | undefined;
    crt_dt: Date;
    use_yn: NonNullable<boolean | undefined>;
}, import("yup").AnyObject, {
    id: undefined;
    rgn_cd: undefined;
    lvl_cd: undefined;
    lgn_id: undefined;
    mngr_nm: undefined;
    prm_ip_addr: undefined;
    crt_dt: undefined;
    use_yn: undefined;
}, "">;
/**
 * @typedef 관리자 상세조회 결과 응답 DTO
 */
export const ManagerDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        mngr_nm?: string | undefined;
        prm_ip_addr?: string | undefined;
        id: number;
        lgn_id: string;
        crt_dt: Date;
        rgn_cd: string;
        lvl_cd: string;
        use_yn: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 관리자 등록 요청 DTO
 * @property {string} lvl_cd - 권한 등급
 * @property {string} encpt_pswd - 비밀번호
 */
export const ManagerCreate: import("yup").ObjectSchema<{
    use_yn: NonNullable<boolean | undefined>;
    prm_ip_addr: string;
    mngr_nm: string;
    lvl_cd: string;
    encpt_pswd: string;
}, import("yup").AnyObject, {
    use_yn: undefined;
    prm_ip_addr: undefined;
    mngr_nm: undefined;
    lvl_cd: undefined;
    encpt_pswd: undefined;
}, "">;
/**
 * @typedef 관리자 등록 결과 응답 DTO
 */
export const ManagerCreateRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        mngr_nm?: string | undefined;
        prm_ip_addr?: string | undefined;
        id: number;
        lgn_id: string;
        crt_dt: Date;
        rgn_cd: string;
        lvl_cd: string;
        use_yn: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 관리자 수정 요청 DTO
 * @property {boolean} use_yn - 사용 여부
 * @property {string} prm_ip_addr - 관리자 IP
 * @property {string} mngr_nm - 관리자 이름
 */
export const ManagerUpdate: import("yup").ObjectSchema<{
    use_yn: NonNullable<boolean | undefined>;
    prm_ip_addr: string;
    mngr_nm: string;
}, import("yup").AnyObject, {
    use_yn: undefined;
    prm_ip_addr: undefined;
    mngr_nm: undefined;
}, "">;
/**
 * @typedef 관리자 수정 결과 응답 DTO
 */
export const ManagerUpdateRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        mngr_nm?: string | undefined;
        prm_ip_addr?: string | undefined;
        id: number;
        lgn_id: string;
        crt_dt: Date;
        rgn_cd: string;
        lvl_cd: string;
        use_yn: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 관리자 비밀번호 변경 요청 DTO
 * @property {string} new_password - 새 비밀번호
 */
export const ManagerPasswordUpdate: import("yup").ObjectSchema<{
    new_password: string;
}, import("yup").AnyObject, {
    new_password: undefined;
}, "">;
/**
 * @typedef 마이페이지 닉네임 수정 요청 DTO
 * @property {string} mngr_nm - 관리자명
 */
export const ManagerNameUpdate: import("yup").ObjectSchema<{
    mngr_nm: string;
}, import("yup").AnyObject, {
    mngr_nm: undefined;
}, "">;
//# sourceMappingURL=manager.d.ts.map