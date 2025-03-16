/**
 * 교환권 검색 DTO
 * @property {number} id
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const CouponManagementSearch: import("yup").ObjectSchema<{
    exgtk_nm: string;
    rgn_cd: string;
    exgtk_tnocs: number;
    expsr_yn: NonNullable<boolean | undefined>;
    prchs_amt: number;
    vld_prd_bgng_dt: Date;
    vld_prd_end_dt: Date;
    exgtk_issu_cn: string | null | undefined;
    exgtk_img_file_id: number | null | undefined;
    id: number;
    lgn_id: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    exgtk_nm: undefined;
    rgn_cd: string;
    exgtk_tnocs: undefined;
    expsr_yn: undefined;
    prchs_amt: undefined;
    vld_prd_bgng_dt: undefined;
    vld_prd_end_dt: undefined;
    exgtk_issu_cn: undefined;
    exgtk_img_file_id: undefined;
    id: undefined;
    lgn_id: undefined;
    crt_dt: undefined;
}, "">;
/**
 * 교환권 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} reg_dt - 등록일시
 * @property {number} pay_cnt - 지급건수
 * @property {number} use_cnt - 사용건수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const CouponManagementList: import("yup").ObjectSchema<{
    exgtk_nm: string;
    rgn_cd: string;
    exgtk_tnocs: number;
    expsr_yn: NonNullable<boolean | undefined>;
    prchs_amt: number;
    vld_prd_bgng_dt: Date;
    vld_prd_end_dt: Date;
    id: number;
    reg_dt: Date;
    pay_cnt: number;
    use_cnt: number;
    lgn_id: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    exgtk_nm: undefined;
    rgn_cd: string;
    exgtk_tnocs: undefined;
    expsr_yn: undefined;
    prchs_amt: undefined;
    vld_prd_bgng_dt: undefined;
    vld_prd_end_dt: undefined;
    id: undefined;
    reg_dt: undefined;
    pay_cnt: undefined;
    use_cnt: undefined;
    lgn_id: undefined;
    crt_dt: undefined;
}, "">;
/** 교환권 상세 DTO
 * @property {string | null | undefined} exgtk_issu_cn - 교환권발급내용
 * @property {number | null | undefined} exgtk_img_file_id - 교환권이미지파일아이디
 * @property {FileBase | null | undefined} img_file - 이미지 파일
 */
export const CouponManagementDetail: import("yup").ObjectSchema<{
    exgtk_nm: string;
    rgn_cd: string;
    exgtk_tnocs: number;
    expsr_yn: NonNullable<boolean | undefined>;
    prchs_amt: number;
    vld_prd_bgng_dt: Date;
    vld_prd_end_dt: Date;
    id: number;
    reg_dt: Date;
    pay_cnt: number;
    use_cnt: number;
    lgn_id: string | null | undefined;
    crt_dt: Date;
    exgtk_issu_cn: string | null | undefined;
    exgtk_img_file_id: number | null | undefined;
    img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
}, import("yup").AnyObject, {
    exgtk_nm: undefined;
    rgn_cd: string;
    exgtk_tnocs: undefined;
    expsr_yn: undefined;
    prchs_amt: undefined;
    vld_prd_bgng_dt: undefined;
    vld_prd_end_dt: undefined;
    id: undefined;
    reg_dt: undefined;
    pay_cnt: undefined;
    use_cnt: undefined;
    lgn_id: undefined;
    crt_dt: undefined;
    exgtk_issu_cn: undefined;
    exgtk_img_file_id: undefined;
    img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
}, "">;
/**
 * 교환권 등록 DTO
 * @property {string | null | undefined} exgtk_issu_cn - 교환권발급내용
 * @property {number | null | undefined} exgtk_img_file_id - 교환권이미지파일아이디
 */
export const CouponManagementCreate: import("yup").ObjectSchema<{
    exgtk_nm: string;
    rgn_cd: string;
    exgtk_tnocs: number;
    expsr_yn: NonNullable<boolean | undefined>;
    prchs_amt: number;
    vld_prd_bgng_dt: Date;
    vld_prd_end_dt: Date;
    exgtk_issu_cn: string | null | undefined;
    exgtk_img_file_id: number | null | undefined;
}, import("yup").AnyObject, {
    exgtk_nm: undefined;
    rgn_cd: string;
    exgtk_tnocs: undefined;
    expsr_yn: undefined;
    prchs_amt: undefined;
    vld_prd_bgng_dt: undefined;
    vld_prd_end_dt: undefined;
    exgtk_issu_cn: undefined;
    exgtk_img_file_id: undefined;
}, "">;
/**
 * 교환권 수정 DTO
 */
export const CouponManagementUpdate: import("yup").ObjectSchema<{
    exgtk_nm: string;
    rgn_cd: string;
    exgtk_tnocs: number;
    expsr_yn: NonNullable<boolean | undefined>;
    prchs_amt: number;
    vld_prd_bgng_dt: Date;
    vld_prd_end_dt: Date;
    exgtk_issu_cn: string | null | undefined;
    exgtk_img_file_id: number | null | undefined;
}, import("yup").AnyObject, {
    exgtk_nm: undefined;
    rgn_cd: string;
    exgtk_tnocs: undefined;
    expsr_yn: undefined;
    prchs_amt: undefined;
    vld_prd_bgng_dt: undefined;
    vld_prd_end_dt: undefined;
    exgtk_issu_cn: undefined;
    exgtk_img_file_id: undefined;
}, "">;
/**
 * 교환권 검색 요청 DTO
 */
export const CouponManagementSearchReq: import("yup").ObjectSchema<{
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
 * 교환권 검색 결과 DTO
 */
export const CouponManagementSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            lgn_id?: string | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            rgn_cd: string;
            exgtk_nm: string;
            exgtk_tnocs: number;
            prchs_amt: number;
            vld_prd_bgng_dt: Date;
            vld_prd_end_dt: Date;
            reg_dt: Date;
            pay_cnt: number;
            use_cnt: number;
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
 * 교환권 상세조회 결과 DTO
 */
export const CouponManagementDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        lgn_id?: string | null | undefined;
        exgtk_issu_cn?: string | null | undefined;
        exgtk_img_file_id?: number | null | undefined;
        id: number;
        expsr_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        rgn_cd: string;
        exgtk_nm: string;
        exgtk_tnocs: number;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        reg_dt: Date;
        pay_cnt: number;
        use_cnt: number;
        img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=coupon.d.ts.map