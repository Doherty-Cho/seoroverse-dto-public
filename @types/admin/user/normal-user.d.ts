/**
 * 검색 DTO
 */
export type 일반회원 = {
    /**
     * - 가입유형(REG_TYPE)
     */
    reg_type_cd: string;
    /**
     * - 회원번호
     */
    id: number;
    /**
     * - 아이디(이메일)
     */
    eml_addr: string;
    /**
     * - 가입날짜
     */
    crt_dt: Date;
};
/**
 * 상세조회 요청 DTO
 */
export type 책머니 = {
    /**
     * - 회원번호
     */
    user_id: number;
    /**
     * - 책머니
     */
    bkmny_amt: number;
};
/**
 * @typedef 일반회원 검색 DTO
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {number} id - 회원번호
 * @property {string} eml_addr - 아이디(이메일)
 * @property {Date} crt_dt - 가입날짜
 */
export const NormalUserSearch: import("yup").ObjectSchema<{
    reg_type_cd: string | undefined;
    id: number | undefined;
    eml_addr: string | undefined;
    crt_dt: Date | undefined;
}, import("yup").AnyObject, {
    reg_type_cd: undefined;
    id: undefined;
    eml_addr: undefined;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 일반회원 목록 DTO
 * @property {number} id - 회원번호(id)
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {Date} crt_dt - 가입날짜
 * @property {string} eml_addr - 아이디(이메일)
 * @property {string} nckn_nm - 아바타 닉네임
 * @property {number} bkmny_amt - 책머니
 */
export const NormalUserList: import("yup").ObjectSchema<{
    id: number;
    reg_type_cd: string;
    crt_dt: Date;
    eml_addr: string | undefined;
    nckn_nm: string | undefined;
    bkmny_amt: number;
}, import("yup").AnyObject, {
    id: undefined;
    reg_type_cd: undefined;
    crt_dt: undefined;
    eml_addr: undefined;
    nckn_nm: undefined;
    bkmny_amt: 0;
}, "">;
/**
 * @typedef 일반회원 검색 요청 DTO
 */
export const NormalUserSearchReq: import("yup").ObjectSchema<{
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
 * @typedef 일반회원 검색 결과 응답 DTO
 */
export const NormalUserSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            nckn_nm?: string | undefined;
            eml_addr?: string | undefined;
            id: number;
            crt_dt: Date;
            reg_type_cd: string;
            bkmny_amt: number;
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
 * @typedef 일반회원 상세정보 DTO
 * @property {string} otsd_acnt_key - 외부 계정 키
 * @property {Date} last_cntn_dt - 최종 접속일
 * @property {string} mbl_telno - 휴대폰번호
 * @property {boolean} mrkt_rcptn_agre_yn - 마케팅 수신동의 여부
 * @property {boolean} lib_acnt_itw_yn - 도서관 계정 연동 여부
 * @property {string} itw_lib_acnt - 연동된 도서관 계정
 * @property {string} pet_nckn_nm - 펫 닉네임
 * @property {string} group_room_nm - 독서 동아리실 이름
 * @property {boolean} edu_fnsh_yn - 도서관 이용교육 수료 여부
 * @property {number} relay_crtv_rpt_cnt - 릴레이 창작전 신고 횟수
 */
export const NormalUserDetail: import("yup").ObjectSchema<{
    id: number;
    reg_type_cd: string;
    crt_dt: Date;
    eml_addr: string | undefined;
    nckn_nm: string | undefined;
    bkmny_amt: number;
    otsd_acnt_key: string | null | undefined;
    last_cntn_dt: Date;
    mbl_telno: string;
    mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
    lib_acnt_itw_yn: NonNullable<boolean | undefined>;
    itw_lib_acnt: string | null | undefined;
    pet_nckn_nm: string | null | undefined;
    group_room_nm: string | null | undefined;
    edu_fnsh_yn: NonNullable<boolean | undefined>;
    acml_dclr_nmtm: number;
}, import("yup").AnyObject, {
    id: undefined;
    reg_type_cd: undefined;
    crt_dt: undefined;
    eml_addr: undefined;
    nckn_nm: undefined;
    bkmny_amt: 0;
    otsd_acnt_key: undefined;
    last_cntn_dt: undefined;
    mbl_telno: undefined;
    mrkt_rcptn_agre_yn: false;
    lib_acnt_itw_yn: false;
    itw_lib_acnt: undefined;
    pet_nckn_nm: undefined;
    group_room_nm: undefined;
    edu_fnsh_yn: false;
    acml_dclr_nmtm: 0;
}, "">;
/**
 * @typedef 일반회원 상세조회 결과 응답 DTO
 */
export const NormalUserDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        nckn_nm?: string | undefined;
        eml_addr?: string | undefined;
        otsd_acnt_key?: string | null | undefined;
        itw_lib_acnt?: string | null | undefined;
        pet_nckn_nm?: string | null | undefined;
        group_room_nm?: string | null | undefined;
        id: number;
        crt_dt: Date;
        acml_dclr_nmtm: number;
        reg_type_cd: string;
        bkmny_amt: number;
        last_cntn_dt: Date;
        mbl_telno: string;
        mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
        lib_acnt_itw_yn: NonNullable<boolean | undefined>;
        edu_fnsh_yn: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 책머니 상세조회 요청 DTO
 * @property {number} user_id - 회원번호
 * @property {number} bkmny_amt - 책머니
 */
export const BookMoneyDetail: import("yup").ObjectSchema<{
    user_id: number;
    bkmny_amt: number;
}, import("yup").AnyObject, {
    user_id: undefined;
    bkmny_amt: 0;
}, "">;
/**
 * @typedef 책머니 상세조회 결과 응답 DTO
 */
export const BookMoneyDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        bkmny_amt: number;
        user_id: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 책머니 수정 요청 DTO
 * @property {string} chg_type - 변경구분(INC, DEC)
 * @property {number} chg_amt - 변경금액
 * @property {number} hof_id - 명예의전당 아이디
 */
export const BookMoneyUpdate: import("yup").ObjectSchema<{
    chg_type: string;
    chg_amt: number;
    hof_id: number | null | undefined;
}, import("yup").AnyObject, {
    chg_type: undefined;
    chg_amt: undefined;
    hof_id: undefined;
}, "">;
/**
 * @typedef 책머니 수정 결과 응답 DTO
 */
export const BookMoneyUpdateRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        bkmny_amt: number;
        user_id: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=normal-user.d.ts.map