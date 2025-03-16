/**
 * 옷장 정보
 */
export type Closet = {
    /**
     * 옷장id - 필수
     */
    id: number;
    /**
     * 펫 이미지 - 선택사항
     */
    pet_img_file: FileBase;
    /**
     * 착용아이템 - 선택사항
     */
    user_wer_item_cn: Object;
    /**
     * 소지아이템 - 선택사항
     */
    user_pss_item_cn: Object[];
};
/**
 * 이메일 정보
 */
export type Email = {
    /**
     * - The email ID.
     */
    id: number;
    /**
     * - The email address.
     */
    eml_addr: string;
    /**
     * - The registration type code.
     */
    reg_type_cd: string;
};
/**
 * 회원(사용자) 검색
 * @property {string} reg_type_cd 가입유형(REG_TYPE)
 * @property {number} id 회원번호(id)
 * @property {string} eml_addr 이메일
 * @property {string} nckn_nm 닉네임
 * @property {date} crt_dt 가입날짜
 */
export const UserSearch: import("yup").ObjectSchema<{
    reg_type_cd: string | undefined;
    id: number | undefined;
    eml_addr: string | undefined;
    nckn_nm: string;
    crt_dt: Date | undefined;
}, import("yup").AnyObject, {
    reg_type_cd: undefined;
    id: undefined;
    eml_addr: undefined;
    nckn_nm: undefined;
    crt_dt: undefined;
}, "">;
/**
 * 회원(사용자) 검색 요청 DTO
 */
export const UserSearchReq: import("yup").ObjectSchema<{
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
 * 회원(사용자) 검색 결과 DTO
 */
export const UserSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            last_cntn_dt?: Date | null | undefined;
            pet_nckn_nm?: string | null | undefined;
            avtr_stts_msg_cn?: string | null | undefined;
            clt_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            nckn_nm: string;
            acml_dclr_nmtm: number;
            eml_addr: string;
            bkmny_amt: number;
            mbl_telno: string;
            edu_fnsh_yn: NonNullable<boolean | undefined>;
            bsc_reg_type_cd: string;
            avtr_rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            };
            prfl_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            };
            ntfc_rcptn_yn: NonNullable<boolean | undefined>;
            spce_kep_yn: NonNullable<boolean | undefined>;
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
 * 사용자 상세 DTO
 * @property {Email[]} emails 이메일 목록
 * @property {Closet} closet 옷장정보
 */
export const UserDetail: import("yup").ObjectSchema<{
    id: number;
    mbl_telno: string;
    bsc_reg_type_cd: string;
    nckn_nm: string;
    pet_nckn_nm: string | null | undefined;
    avtr_stts_msg_cn: string | null | undefined;
    avtr_rprs_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    };
    prfl_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    };
    eml_addr: string;
    clt_id: number | null | undefined;
    bkmny_amt: number;
    ntfc_rcptn_yn: NonNullable<boolean | undefined>;
    acml_dclr_nmtm: number;
    spce_kep_yn: NonNullable<boolean | undefined>;
    edu_fnsh_yn: NonNullable<boolean | undefined>;
    last_cntn_dt: Date | null | undefined;
    crt_dt: Date;
    mdfcn_dt: Date;
    emails: {
        id: number;
        reg_type_cd: string;
        eml_addr: string;
    }[];
    closet: {
        id: number;
        pet_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        user_wer_item_cn: {} | null;
        user_pss_item_cn: {} | null;
    };
    bksf_spce_id: number | null | undefined;
}, import("yup").AnyObject, {
    id: undefined;
    mbl_telno: undefined;
    bsc_reg_type_cd: undefined;
    nckn_nm: undefined;
    pet_nckn_nm: undefined;
    avtr_stts_msg_cn: undefined;
    avtr_rprs_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
    prfl_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
    eml_addr: undefined;
    clt_id: undefined;
    bkmny_amt: undefined;
    ntfc_rcptn_yn: false;
    acml_dclr_nmtm: undefined;
    spce_kep_yn: false;
    edu_fnsh_yn: false;
    last_cntn_dt: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
    emails: undefined;
    closet: {
        id: undefined;
        pet_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        user_wer_item_cn: {};
        user_pss_item_cn: {};
    };
    bksf_spce_id: undefined;
}, "">;
/**
 * 약관 상세조회 결과 DTO
 */
export const UserDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        last_cntn_dt?: Date | null | undefined;
        pet_nckn_nm?: string | null | undefined;
        avtr_stts_msg_cn?: string | null | undefined;
        clt_id?: number | null | undefined;
        bksf_spce_id?: number | null | undefined;
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
        nckn_nm: string;
        acml_dclr_nmtm: number;
        eml_addr: string;
        bkmny_amt: number;
        mbl_telno: string;
        edu_fnsh_yn: NonNullable<boolean | undefined>;
        bsc_reg_type_cd: string;
        avtr_rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        };
        prfl_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        };
        ntfc_rcptn_yn: NonNullable<boolean | undefined>;
        spce_kep_yn: NonNullable<boolean | undefined>;
        emails: {
            id: number;
            reg_type_cd: string;
            eml_addr: string;
        }[];
        closet: {
            id: number;
            pet_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            user_wer_item_cn: {} | null;
            user_pss_item_cn: {} | null;
        };
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * 닉네임 수정 DTO
 * @property {string} nckn_nm 닉네임
 * @property {string|null} pet_nckn_nm 펫 닉네임
 */
export const UserProfileUpdate: import("yup").ObjectSchema<{
    nckn_nm: string;
    pet_nckn_nm: string | null | undefined;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    pet_nckn_nm: undefined;
}, "">;
/**
 * 닉네임 정보조회 결과 DTO
 */
export const UserNicknameRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        id: number;
        nckn_nm: string;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/** 소셜 계정 정보 조회 요청값 */
export const UserSocialAccountReq: import("yup").ObjectSchema<{
    social_token: string;
    reg_type_cd: string;
}, import("yup").AnyObject, {
    social_token: undefined;
    reg_type_cd: undefined;
}, "">;
/**
 * 도서관이용교육수료 결과 DTO
 * @property {number} user_id 회원번호
 * @property {number} bkmny_amt 책머니금액
 * @property {boolean} edu_fnsh_yn 도서관 이용교육 수료 여부
 */
export const TrainingResult: import("yup").ObjectSchema<{
    user_id: number;
    bkmny_amt: number;
    edu_fnsh_yn: NonNullable<boolean | undefined>;
}, import("yup").AnyObject, {
    user_id: undefined;
    bkmny_amt: undefined;
    edu_fnsh_yn: false;
}, "">;
/**
 * 도서관이용교육 수료결과 응답 DTO
 */
export const TrainingResultRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        bkmny_amt: number;
        edu_fnsh_yn: NonNullable<boolean | undefined>;
        user_id: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=user.d.ts.map