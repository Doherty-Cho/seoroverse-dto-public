/**
 * 공통 항목
 */
export type 게시물 = {
    /**
     * - 게시물제목
     */
    pst_ttl: string;
    /**
     * - 노출여부
     */
    expsr_yn: boolean | undefined;
    /**
     * - 게시일시
     */
    pstg_bgng_dt: Date | null | undefined;
    /**
     * - 관리자아이디
     */
    mngr_id: number | null | undefined;
};
/**
 * @typedef 게시물 검색 DTO
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const BoardManagementSearch: import("yup").ObjectSchema<{
    pst_ttl: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
    lgn_id: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    pst_ttl: undefined;
    expsr_yn: false;
    pstg_bgng_dt: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
    lgn_id: undefined;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 게시물 목록 DTO
 * @property {number} id - 아이디
 * @property {number} inq_cnt - 조회수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const BoardManagementList: import("yup").ObjectSchema<{
    pst_ttl: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    wrtr_id: number | null | undefined;
    id: number;
    inq_cnt: number;
    lgn_id: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    pst_ttl: undefined;
    expsr_yn: false;
    pstg_bgng_dt: undefined;
    wrtr_id: undefined;
    id: undefined;
    inq_cnt: 0;
    lgn_id: undefined;
    crt_dt: undefined;
}, "">;
/**
 * @typedef 게시물 상세 DTO
 * @property {string} pst_cn - 게시물 내용
 * @property {Date} mdfcn_dt - 수정 일시
 */
export const BoardManagementDetail: import("yup").ObjectSchema<{
    pst_ttl: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    wrtr_id: number | null | undefined;
    id: number;
    inq_cnt: number;
    lgn_id: string | null | undefined;
    crt_dt: Date;
    pst_cn: string;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    pst_ttl: undefined;
    expsr_yn: false;
    pstg_bgng_dt: undefined;
    wrtr_id: undefined;
    id: undefined;
    inq_cnt: 0;
    lgn_id: undefined;
    crt_dt: undefined;
    pst_cn: undefined;
    mdfcn_dt: undefined;
}, "">;
/**
 * @typedef 게시물 등록 DTO
 * @property {string} pst_cn - 게시물내용
 */
export const BoardManagementCreate: import("yup").ObjectSchema<{
    pst_ttl: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
}, import("yup").AnyObject, {
    pst_ttl: undefined;
    expsr_yn: false;
    pstg_bgng_dt: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
}, "">;
/** @typedef 게시물 수정 DTO */
export const BoardManagementUpdate: import("yup").ObjectSchema<{
    pst_ttl: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    wrtr_id: number | null | undefined;
    pst_cn: string;
}, import("yup").AnyObject, {
    pst_ttl: undefined;
    expsr_yn: false;
    pstg_bgng_dt: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
}, "">;
/** @typedef 게시물 검색 요청 DTO */
export const BoardManagementSearchReq: import("yup").ObjectSchema<{
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
/** @typedef 게시물 검색 결과 DTO */
export const BoardManagementSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            pstg_bgng_dt?: Date | null | undefined;
            lgn_id?: string | null | undefined;
            wrtr_id?: number | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            inq_cnt: number;
            pst_ttl: string;
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
/** @typedef 게시물 상세조회 결과 DTO */
export const BoardManagementDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        pstg_bgng_dt?: Date | null | undefined;
        lgn_id?: string | null | undefined;
        wrtr_id?: number | null | undefined;
        id: number;
        expsr_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        inq_cnt: number;
        mdfcn_dt: Date;
        pst_ttl: string;
        pst_cn: string;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=board.d.ts.map