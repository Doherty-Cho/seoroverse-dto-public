/**
 * 교환권 상세 DTO
 * @property {number} id - 아이디
 * @property {Date} reg_dt - 등록일자
 * @property {string} exgtk_issu_no - 교환권발급번호
 * @property {number} user_id - 사용자아이디
 * @property {number} exgtk_rprs_id - 교환권대표아이디
 * @property {Date} crt_dt - 교환권생성일
 * @property {Date} use_dt - 사용일시
 * @property {string} rgn_cd - 지역코드
 * @property {string} exgtk_nm - 교환권명
 * @property {number} prchs_amt - 구매금액
 * @property {Date} vld_prd_bgng_dt - 유효기간시작일시
 * @property {Date} vld_prd_end_dt - 유효기간종료일시
 * @property {string} exgtk_issu_cn - 교환권발급내용
 * @property {number} exgtk_img_file_id - 교환권이미지파일아이디
 * @property {FileBase} img_file - 대표이미지
 */
export const CouponDetail: import("yup").ObjectSchema<{
    id: number;
    reg_dt: Date;
    exgtk_issu_no: string;
    user_id: number;
    exgtk_rprs_id: number;
    crt_dt: Date;
    use_dt: Date | null | undefined;
    rgn_cd: string;
    exgtk_nm: string;
    prchs_amt: number;
    vld_prd_bgng_dt: Date;
    vld_prd_end_dt: Date;
    exgtk_issu_cn: string | undefined;
    exgtk_img_file_id: number | null | undefined;
    img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
} | null, import("yup").AnyObject, {
    id: undefined;
    reg_dt: undefined;
    exgtk_issu_no: undefined;
    user_id: undefined;
    exgtk_rprs_id: undefined;
    crt_dt: undefined;
    use_dt: undefined;
    rgn_cd: undefined;
    exgtk_nm: undefined;
    prchs_amt: undefined;
    vld_prd_bgng_dt: undefined;
    vld_prd_end_dt: undefined;
    exgtk_issu_cn: undefined;
    exgtk_img_file_id: undefined;
    img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
}, "">;
/** 교환권 상세조회 결과 DTO */
export const CouponDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        exgtk_issu_cn?: string | undefined;
        exgtk_img_file_id?: number | null | undefined;
        use_dt?: Date | null | undefined;
        id: number;
        crt_dt: Date;
        user_id: number;
        rgn_cd: string;
        exgtk_nm: string;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        reg_dt: Date;
        img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        exgtk_issu_no: string;
        exgtk_rprs_id: number;
    } | null;
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * 구입가능 실물교환권 목록조회 결과 DTO
 */
export const CouponListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            exgtk_issu_cn?: string | null | undefined;
            exgtk_img_file_id?: number | null | undefined;
            id: number;
            rgn_cd: string;
            exgtk_nm: string;
            exgtk_tnocs: number;
            prchs_amt: number;
            vld_prd_bgng_dt: Date;
            vld_prd_end_dt: Date;
            img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            remain_cnt: number;
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
//# sourceMappingURL=coupon.d.ts.map