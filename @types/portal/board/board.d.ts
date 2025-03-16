/** 게시물 검색 DTO */
export const BoardSearch: import("yup").ObjectSchema<{
    pst_se_cd: string;
    rgn_lib_id: number | null | undefined;
    pst_ttl: string;
    wrtr_id: number | null | undefined;
}, import("yup").AnyObject, {
    pst_se_cd: undefined;
    rgn_lib_id: undefined;
    pst_ttl: undefined;
    wrtr_id: undefined;
}, "">;
/**
 * 게시물 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const BoardList: import("yup").ObjectSchema<{
    pst_se_cd: string;
    rgn_lib_id: number | null | undefined;
    pst_ttl: string;
    wrtr_id: number | null | undefined;
    id: number;
    crt_dt: Date;
}, import("yup").AnyObject, {
    pst_se_cd: undefined;
    rgn_lib_id: undefined;
    pst_ttl: undefined;
    wrtr_id: undefined;
    id: undefined;
    crt_dt: undefined;
}, "">;
/** 게시글 상세 DTO
 * @property {string} pst_cn - 게시글 내용
 */
export const BoardDetail: import("yup").ObjectSchema<{
    pst_se_cd: string;
    rgn_lib_id: number | null | undefined;
    pst_ttl: string;
    wrtr_id: number | null | undefined;
    id: number;
    crt_dt: Date;
    pst_cn: string;
}, import("yup").AnyObject, {
    pst_se_cd: undefined;
    rgn_lib_id: undefined;
    pst_ttl: undefined;
    wrtr_id: undefined;
    id: undefined;
    crt_dt: undefined;
    pst_cn: undefined;
}, "">;
/**
 * 게시물 등록
 * @property {string} pst_se_cd - 게시물구분
 * @property {string} pst_cn - 게시물내용
 */
export const BoardCreate: import("yup").ObjectSchema<{
    pst_se_cd: string | null | undefined;
    rgn_lib_id: number | null | undefined;
    pst_ttl: string;
    wrtr_id: number | null | undefined;
    pst_cn: string;
}, import("yup").AnyObject, {
    pst_se_cd: undefined;
    rgn_lib_id: undefined;
    pst_ttl: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
}, "">;
/** 게시물 수정 DTO */
export const BoardUpdate: import("yup").ObjectSchema<{
    pst_se_cd: string | null | undefined;
    rgn_lib_id: number | null | undefined;
    pst_ttl: string;
    wrtr_id: number | null | undefined;
    pst_cn: string;
}, import("yup").AnyObject, {
    pst_se_cd: undefined;
    rgn_lib_id: undefined;
    pst_ttl: undefined;
    wrtr_id: undefined;
    pst_cn: undefined;
}, "">;
/** 게시글 검색 요청 DTO */
export const BoardSearchReq: import("yup").ObjectSchema<{
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
/** 게시글 검색 결과 DTO */
export const BoardSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            wrtr_id?: number | null | undefined;
            rgn_lib_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            pst_ttl: string;
            pst_se_cd: string;
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
/** 게시글 상세조회 결과 DTO */
export const BoardDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        wrtr_id?: number | null | undefined;
        rgn_lib_id?: number | null | undefined;
        id: number;
        crt_dt: Date;
        pst_ttl: string;
        pst_cn: string;
        pst_se_cd: string;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=board.d.ts.map