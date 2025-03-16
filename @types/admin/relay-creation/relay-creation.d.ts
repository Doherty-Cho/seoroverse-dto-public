/**
 * 창작전 공통 항목
 */
export type 릴레이 = {
    /**
     * - 작성자 닉네임
     */
    nckn_nm: string | null | undefined;
};
/**
 * 검색 DTO
 */
export type 창작물 = {
    /**
     * - 창작물 아이디
     */
    id: number;
    /**
     * - 창작물 내용
     */
    pst_cn: string;
    /**
     * - 창작물 작성일시
     */
    crt_dt: Date;
};
/**
 * 검색 DTO
 */
export type 댓글 = {
    /**
     * - 댓글 아이디
     */
    id: number;
    /**
     * - 댓글 내용
     */
    pst_cn: string;
    /**
     * - 댓글 작성일시
     */
    crt_dt: Date;
};
/**
 * 검색 DTO
 */
export type 신고 = {
    /**
     * - 창작물 아이디
     */
    id: number;
    /**
     * - 창작물 내용
     */
    pst_cn: string;
    /**
     * - 신고 일시
     */
    crt_dt: Date;
};
/**
 * 주제 등록 DTO
 */
export type 창작전 = {
    /**
     * - 주제
     */
    pst_cn: string;
    /**
     * - 게시시작일
     */
    pstg_bgng_dt: Date;
    /**
     * - 게시종료일
     */
    pstg_end_dt: Date;
    /**
     * - 작성자 아이디
     */
    wrtr_id: number;
    /**
     * - 노출여부
     */
    expsr_yn: boolean;
};
/**
 * 상세조회 결과 DTO
 */
export type 주제 = any;
/**
 * @typedef 창작물 검색 DTO
 * @property {number} id - 창작물 아이디
 * @property {string} pst_cn - 창작물 내용
 * @property {Date} crt_dt - 창작물 작성일시
 */
export const CreationSearch: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number | null | undefined;
    pst_cn: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    pst_cn: undefined;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 창작물 리스트 DTO
 * @property {number} id - 아이디
 * @property {number} rly_ctex_id - 주제 아이디
 * @property {number | null | undefined} up_pst_id - 상위 게시물 아이디
 * @property {number} wrtr_id - 작성자 아이디
 * @property {string} pst_cn - 게시물 내용
 * @property {boolean} dclr_yn - 신고여부
 * @property {Date} crt_dt - 창작물/댓글 작성일시
 * @property {number} inq_cnt - 조회수
 * @property {number} cmnt_cnt - 댓글수
 */
export const CreationList: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number;
    rly_ctex_id: number;
    up_pst_id: number | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
    dclr_yn: NonNullable<boolean | undefined>;
    crt_dt: Date;
    inq_cnt: number;
    cmnt_cnt: number;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    rly_ctex_id: undefined;
    up_pst_id: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
    dclr_yn: false;
    crt_dt: undefined;
    inq_cnt: 0;
    cmnt_cnt: 0;
}, "">;
/**
 * @typedef 창작물 상세 DTO
 */
export const CreationDetail: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number;
    rly_ctex_id: number;
    up_pst_id: number | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
    dclr_yn: NonNullable<boolean | undefined>;
    crt_dt: Date;
    inq_cnt: number;
    cmnt_cnt: number;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    rly_ctex_id: undefined;
    up_pst_id: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
    dclr_yn: false;
    crt_dt: undefined;
    inq_cnt: 0;
    cmnt_cnt: 0;
}, "">;
/**
 * @typedef 창작물 검색 요청 DTO
 */
export const CreationSearchReq: import("yup").ObjectSchema<{
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
 * @typedef 창작물 검색 결과 DTO
 */
export const CreationSearchRes: import("yup").ObjectSchema<{
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
            inq_cnt: number;
            pst_cn: string;
            rly_ctex_id: number;
            dclr_yn: NonNullable<boolean | undefined>;
            cmnt_cnt: number;
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
 * @typedef 창작물 상세조회 결과 DTO
 */
export const CreationDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        wrtr_id?: number | null | undefined;
        nckn_nm?: string | null | undefined;
        up_pst_id?: number | null | undefined;
        id: number;
        crt_dt: Date;
        inq_cnt: number;
        pst_cn: string;
        rly_ctex_id: number;
        dclr_yn: NonNullable<boolean | undefined>;
        cmnt_cnt: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 댓글 검색 DTO
 * @property {number} id - 댓글 아이디
 * @property {string} pst_cn - 댓글 내용
 * @property {Date} crt_dt - 댓글 작성일시
 */
export const CommentSearch: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number | null | undefined;
    pst_cn: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    pst_cn: undefined;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 댓글 리스트 DTO
 * @property {number} id - 아이디
 * @property {number} rly_ctex_id - 주제 아이디
 * @property {number | null | undefined} up_pst_id - 창작물 아이디
 * @property {number} wrtr_id - 댓글 작성자 아이디
 * @property {string} pst_cn - 댓글 내용
 * @property {boolean} dclr_yn - 신고여부
 * @property {Date} crt_dt - 댓글 작성일시
 * @property {string | null | undefined} up_pst_nckn_nm - 창작물 작성자 닉네임
 */
export const CommentList: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number;
    rly_ctex_id: number;
    up_pst_id: number | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
    dclr_yn: NonNullable<boolean | undefined>;
    crt_dt: Date;
    up_pst_nckn_nm: string | null | undefined;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    rly_ctex_id: undefined;
    up_pst_id: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
    dclr_yn: false;
    crt_dt: undefined;
    up_pst_nckn_nm: undefined;
}, "">;
/**
 * @typedef 댓글 상세 DTO
 */
export const CommentDetail: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number;
    rly_ctex_id: number;
    up_pst_id: number | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
    dclr_yn: NonNullable<boolean | undefined>;
    crt_dt: Date;
    up_pst_nckn_nm: string | null | undefined;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    rly_ctex_id: undefined;
    up_pst_id: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
    dclr_yn: false;
    crt_dt: undefined;
    up_pst_nckn_nm: undefined;
}, "">;
/**
 * @typedef 댓글 검색 요청 DTO
 */
export const CommentSearchReq: import("yup").ObjectSchema<{
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
 * @typedef 댓글 검색 결과 DTO
 */
export const CommentSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            wrtr_id?: number | null | undefined;
            nckn_nm?: string | null | undefined;
            up_pst_id?: number | null | undefined;
            up_pst_nckn_nm?: string | null | undefined;
            id: number;
            crt_dt: Date;
            pst_cn: string;
            rly_ctex_id: number;
            dclr_yn: NonNullable<boolean | undefined>;
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
 * @typedef 댓글 상세조회 결과 DTO
 */
export const CommentDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        wrtr_id?: number | null | undefined;
        nckn_nm?: string | null | undefined;
        up_pst_id?: number | null | undefined;
        up_pst_nckn_nm?: string | null | undefined;
        id: number;
        crt_dt: Date;
        pst_cn: string;
        rly_ctex_id: number;
        dclr_yn: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/** 신고 검색 DTO */
/**
 * @typedef 신고 검색 DTO
 * @property {number} id - 창작물 아이디
 * @property {string} pst_cn - 창작물 내용
 * @property {Date} crt_dt - 신고 일시
 */
export const ReportSearch: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number | null | undefined;
    pst_cn: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    pst_cn: undefined;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 신고 리스트 DTO
 * @property {number} id - 아이디
 * @property {number} dcl_id - 신고자 아이디
 * @property {string | null | undefined} dcl_nckn_nm - 신고자 닉네임
 * @property {number} dclr_trgt_id - 신고대상 아이디
 * @property {number} dclr_cmnt_id - 신고댓글아이디
 * @property {string} dclr_rsn_cd - 신고사유코드
 * @property {string} pst_cn - 창작물/댓글 내용
 * @property {boolean} warn_yn - 경고여부
 * @property {boolean} cmnt_warn_yn - 경고이력 여부
 * @property {Date} crt_dt - 댓글 작성일시
 */
export const ReportList: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number;
    dcl_id: number;
    dcl_nckn_nm: string | null | undefined;
    dclr_trgt_id: number;
    dclr_cmnt_id: number | null | undefined;
    dclr_rsn_cd: string;
    pst_cn: string | null | undefined;
    warn_yn: NonNullable<boolean | undefined>;
    cmnt_warn_yn: NonNullable<boolean | undefined>;
    crt_dt: Date;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    dcl_id: undefined;
    dcl_nckn_nm: undefined;
    dclr_trgt_id: undefined;
    dclr_cmnt_id: undefined;
    dclr_rsn_cd: undefined;
    pst_cn: undefined;
    warn_yn: false;
    cmnt_warn_yn: false;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 신고 상세 DTO
 * @property {number} acml_dclr_nmtm - 작성자 경고 누적수
 * @property {number} dcl_cnt - 신고수
 * @property {Date} crt_dt - 창작물 작성 일시
 */
export const ReportDetail: import("yup").ObjectSchema<{
    nckn_nm: string | null | undefined;
    id: number;
    dcl_id: number;
    dcl_nckn_nm: string | null | undefined;
    dclr_trgt_id: number;
    dclr_cmnt_id: number | null | undefined;
    dclr_rsn_cd: string;
    pst_cn: string | null | undefined;
    warn_yn: NonNullable<boolean | undefined>;
    cmnt_warn_yn: NonNullable<boolean | undefined>;
    crt_dt: Date;
    acml_dclr_nmtm: number;
    dcl_cnt: number;
    cmnt_crt_dt: Date;
}, import("yup").AnyObject, {
    nckn_nm: undefined;
    id: undefined;
    dcl_id: undefined;
    dcl_nckn_nm: undefined;
    dclr_trgt_id: undefined;
    dclr_cmnt_id: undefined;
    dclr_rsn_cd: undefined;
    pst_cn: undefined;
    warn_yn: false;
    cmnt_warn_yn: false;
    crt_dt: undefined;
    acml_dclr_nmtm: 0;
    dcl_cnt: 0;
    cmnt_crt_dt: undefined;
}, "">;
/**
 * @typedef 신고 검색 요청 DTO
 */
export const ReportSearchReq: import("yup").ObjectSchema<{
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
 * @typedef 신고 검색 결과 DTO
 */
export const ReportSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            pst_cn?: string | null | undefined;
            nckn_nm?: string | null | undefined;
            dcl_nckn_nm?: string | null | undefined;
            dclr_cmnt_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            dcl_id: number;
            dclr_trgt_id: number;
            dclr_rsn_cd: string;
            warn_yn: NonNullable<boolean | undefined>;
            cmnt_warn_yn: NonNullable<boolean | undefined>;
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
 * @typedef 신고 상세조회 결과 DTO
 */
export const ReportDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        pst_cn?: string | null | undefined;
        nckn_nm?: string | null | undefined;
        dcl_nckn_nm?: string | null | undefined;
        dclr_cmnt_id?: number | null | undefined;
        id: number;
        crt_dt: Date;
        dcl_id: number;
        dclr_trgt_id: number;
        dclr_rsn_cd: string;
        warn_yn: NonNullable<boolean | undefined>;
        cmnt_warn_yn: NonNullable<boolean | undefined>;
        acml_dclr_nmtm: number;
        dcl_cnt: number;
        cmnt_crt_dt: Date;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @typedef 창작전 주제 등록 DTO
 * @property {string} pst_cn - 주제
 * @property {Date} pstg_bgng_dt - 게시시작일
 * @property {Date} pstg_end_dt - 게시종료일
 * @property {number} wrtr_id - 작성자 아이디
 * @property {boolean} expsr_yn - 노출여부
 */
export const SubjectCreate: import("yup").ObjectSchema<{
    pst_cn: string;
    pstg_bgng_dt: Date;
    pstg_end_dt: Date;
    wrtr_id: number | null | undefined;
    expsr_yn: NonNullable<boolean | undefined>;
}, import("yup").AnyObject, {
    pst_cn: "";
    pstg_bgng_dt: Date;
    pstg_end_dt: Date;
    wrtr_id: undefined;
    expsr_yn: true;
}, "">;
/**
 * @typedef 주제 상세조회 결과 DTO
 */
export const SubjectDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        lgn_id?: string | null | undefined;
        wrtr_id?: number | null | undefined;
        id: number;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date;
        crt_dt: Date;
        mdfcn_dt: Date;
        pst_cn: string;
        cmnt_cnt: number;
        pstg_end_dt: Date;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=relay-creation.d.ts.map