/** 주제 상세조회 결과 DTO */
export const RelayCreationSubjectDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        pstg_bgng_dt?: Date | null | undefined;
        pstg_end_dt?: Date | null | undefined;
        id: number;
        crt_dt: Date;
        pst_cn: string;
        cmnt_cnt: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/** 창작물 검색 요청 DTO */
export const RelayCreationSearchReq: import("yup").ObjectSchema<{
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
/** 창작물 검색 결과 DTO */
export const RelayCreationSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            wrtr_id?: number | null | undefined;
            nckn_nm?: string | null | undefined;
            up_pst_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            pst_cn: string;
            rly_ctex_id: number;
            dclr_yn: NonNullable<boolean | undefined>;
            prfl_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
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
 * 창작물 등록 DTO
 */
export const RelayCreationCreate: import("yup").ObjectSchema<{
    rly_ctex_id: number;
    up_pst_id: number | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
}, import("yup").AnyObject, {
    rly_ctex_id: undefined;
    up_pst_id: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
}, "">;
/**
 * 댓글 등록 DTO
 *  @property {number} up_pst_id - 상위 게시물 아이디
 */
export const RelayCommentCreate: import("yup").ObjectSchema<{
    rly_ctex_id: number;
    up_pst_id: number;
    wrtr_id: number | null | undefined;
    pst_cn: string;
}, import("yup").AnyObject, {
    rly_ctex_id: undefined;
    up_pst_id: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
}, "">;
/**
 * 신고 등록 DTO
 * @property {number} dclr_cmnt_id - 창작물/댓글 아이디
 * @property {string} dclr_rsn_cd - 신고사유코드
 */
export const ReportCreate: import("yup").ObjectSchema<{
    dclr_cmnt_id: number;
    dclr_rsn_cd: string;
}, import("yup").AnyObject, {
    dclr_cmnt_id: undefined;
    dclr_rsn_cd: undefined;
}, "">;
/** 댓글 검색 결과 DTO */
export const RelayCommentListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        comment?: {
            wrtr_id?: number | null | undefined;
            nckn_nm?: string | null | undefined;
            up_pst_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            pst_cn: string;
            rly_ctex_id: number;
            dclr_yn: NonNullable<boolean | undefined>;
            prfl_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
        }[] | undefined;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=relay-creation.d.ts.map