/**
 * 인사말 검색 DTO
 */
export const GreetingSearch: import("yup").ObjectSchema<{
    grt_cn: string;
    ssaw_bgng_mm: number;
    ssaw_end_mm: number;
    use_yn: number;
}, import("yup").AnyObject, {
    grt_cn: undefined;
    ssaw_bgng_mm: undefined;
    ssaw_end_mm: undefined;
    use_yn: undefined;
}, "">;
/**
 * 인사말 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const GreetingList: import("yup").ObjectSchema<{
    grt_cn: string;
    ssaw_bgng_mm: number;
    ssaw_end_mm: number;
    id: number;
    crt_dt: Date;
}, import("yup").AnyObject, {
    grt_cn: undefined;
    ssaw_bgng_mm: undefined;
    ssaw_end_mm: undefined;
    id: undefined;
    crt_dt: undefined;
}, "">;
/** 인사말 상세 DTO */
export const GreetingDetail: import("yup").ObjectSchema<{
    grt_cn: string;
    ssaw_bgng_mm: number;
    ssaw_end_mm: number;
    id: number;
    crt_dt: Date;
}, import("yup").AnyObject, {
    grt_cn: undefined;
    ssaw_bgng_mm: undefined;
    ssaw_end_mm: undefined;
    id: undefined;
    crt_dt: undefined;
}, "">;
/**
 * 인사말 등록 DTO
 * @property {number} use_yn - 사용여부
 */
export const GreetingCreate: import("yup").ObjectSchema<{
    grt_cn: string;
    ssaw_bgng_mm: number;
    ssaw_end_mm: number;
    use_yn: number;
}, import("yup").AnyObject, {
    grt_cn: undefined;
    ssaw_bgng_mm: undefined;
    ssaw_end_mm: undefined;
    use_yn: undefined;
}, "">;
/** 인사말 검색 요청 DTO */
export const GreetingSearchReq: import("yup").ObjectSchema<{
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
/** 인사말 검색 결과 DTO */
export const GreetingSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            id: number;
            crt_dt: Date;
            grt_cn: string;
            ssaw_bgng_mm: number;
            ssaw_end_mm: number;
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
/** 인사말 상세조회 결과 DTO */
export const GreetingDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        id: number;
        crt_dt: Date;
        grt_cn: string;
        ssaw_bgng_mm: number;
        ssaw_end_mm: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=greeting.d.ts.map