/**
 * 검색
 */
export type 탈퇴회원 = {
    /**
     * - 가입유형(REG_TYPE)
     */
    reg_type_cd: string;
    /**
     * - 회원번호(id)
     */
    id: number;
    /**
     * - 아이디(이메일)
     */
    eml_addr: string;
    /**
     * - 탈퇴 전환일
     */
    crt_dt: Date;
};
/**
 * @typedef 탈퇴회원 검색
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {number} id - 회원번호(id)
 * @property {string} eml_addr - 아이디(이메일)
 * @property {Date} crt_dt - 탈퇴 전환일
 */
export const WithdrawnUserSearch: import("yup").ObjectSchema<{
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
 * @typedef 탈퇴회원 목록 DTO
 * @property {number} id - 회원번호(id)
 * @property {string} reg_type_cd - 가입유형(REG_TYPE)
 * @property {Date} crt_dt - 탈퇴 전환일
 * @property {string} eml_addr - 아이디(이메일)
 * @property {string} nckn_nm - 아바타 닉네임
 * @property {Date} del_prnmnt_dt - 정보삭제 예정일
 */
export const WithdrawnUserList: import("yup").ObjectSchema<{
    id: number;
    reg_type_cd: string;
    crt_dt: Date;
    eml_addr: string | undefined;
    nckn_nm: string | undefined;
    del_prnmnt_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    reg_type_cd: undefined;
    crt_dt: undefined;
    eml_addr: undefined;
    nckn_nm: undefined;
    del_prnmnt_dt: undefined;
}, "">;
/**
 * @typedef 탈퇴회원 검색 요청 DTO
 */
export const WithdrawnUserSearchReq: import("yup").ObjectSchema<{
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
 * @typedef 탈퇴회원 검색 결과 응답 DTO
 */
export const WithdrawnUserSearchRes: import("yup").ObjectSchema<{
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
            del_prnmnt_dt: Date;
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
 * @typedef 탈퇴회원 상세정보 DTO
 * @property {string} otsd_acnt_key - 외부 계정 키
 * @property {string} mbl_telno - 휴대폰번호
 * @property {boolean} mrkt_rcptn_agre_yn - 마케팅 수신동의 여부
 * @property {boolean} lib_acnt_itw_yn - 도서관 계정 연동 여부
 * @property {string} itw_lib_acnt - 연동된 도서관 계정
 * @property {number} bkmny_amt - 책머니
 */
export const WithdrawnUserDetail: import("yup").ObjectSchema<{
    id: number;
    reg_type_cd: string;
    crt_dt: Date;
    eml_addr: string | undefined;
    nckn_nm: string | undefined;
    del_prnmnt_dt: Date;
    otsd_acnt_key: string | null | undefined;
    mbl_telno: string;
    mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
    lib_acnt_itw_yn: NonNullable<boolean | undefined>;
    itw_lib_acnt: string | null | undefined;
    bkmny_amt: number;
}, import("yup").AnyObject, {
    id: undefined;
    reg_type_cd: undefined;
    crt_dt: undefined;
    eml_addr: undefined;
    nckn_nm: undefined;
    del_prnmnt_dt: undefined;
    otsd_acnt_key: undefined;
    mbl_telno: undefined;
    mrkt_rcptn_agre_yn: false;
    lib_acnt_itw_yn: false;
    itw_lib_acnt: undefined;
    bkmny_amt: 0;
}, "">;
/**
 * @typedef 탈퇴회원 상세조회 결과 응답 DTO
 */
export const WithdrawnUserDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        nckn_nm?: string | undefined;
        eml_addr?: string | undefined;
        otsd_acnt_key?: string | null | undefined;
        itw_lib_acnt?: string | null | undefined;
        id: number;
        crt_dt: Date;
        reg_type_cd: string;
        bkmny_amt: number;
        mbl_telno: string;
        mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
        lib_acnt_itw_yn: NonNullable<boolean | undefined>;
        del_prnmnt_dt: Date;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=withdrawn-user.d.ts.map