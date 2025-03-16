/**
 * 약관 검색 DTO
 * @property {Date} crt_dt - 작성일시
 */
export const PolicySearch: import("yup").ObjectSchema<{
    trms_ttl: string;
    esntl_yn: number;
    enfc_bgng_dt: Date;
    updt_trms_agre_need_yn: number;
    trms_cn: string;
    crt_dt: Date | undefined;
}, import("yup").AnyObject, {
    trms_ttl: undefined;
    esntl_yn: undefined;
    enfc_bgng_dt: undefined;
    updt_trms_agre_need_yn: 0;
    trms_cn: undefined;
    crt_dt: undefined;
}, "">;
/**
 * 약관 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const PolicyList: import("yup").ObjectSchema<{
    trms_ttl: string;
    esntl_yn: number;
    enfc_bgng_dt: Date;
    updt_trms_agre_need_yn: number;
    id: number;
    crt_dt: Date;
}, import("yup").AnyObject, {
    trms_ttl: undefined;
    esntl_yn: undefined;
    enfc_bgng_dt: undefined;
    updt_trms_agre_need_yn: 0;
    id: undefined;
    crt_dt: undefined;
}, "">;
/**
 * 약관 상세 DTO
 * @property {string} trms_cn - 약관내용
 * @property {Date} mdfcn_dt - 수정일시
 */
export const PolicyDetail: import("yup").ObjectSchema<{
    trms_ttl: string;
    esntl_yn: number;
    enfc_bgng_dt: Date;
    updt_trms_agre_need_yn: number;
    id: number;
    crt_dt: Date;
    trms_cn: string;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    trms_ttl: undefined;
    esntl_yn: undefined;
    enfc_bgng_dt: undefined;
    updt_trms_agre_need_yn: 0;
    id: undefined;
    crt_dt: undefined;
    trms_cn: undefined;
    mdfcn_dt: undefined;
}, "">;
/**
 * 약관 등록 DTO
 * @property {string} trms_cn - 약관내용
 */
export const PolicyCreate: import("yup").ObjectSchema<{
    trms_ttl: string;
    esntl_yn: number;
    enfc_bgng_dt: Date;
    updt_trms_agre_need_yn: number;
    trms_cn: string;
}, import("yup").AnyObject, {
    trms_ttl: undefined;
    esntl_yn: undefined;
    enfc_bgng_dt: undefined;
    updt_trms_agre_need_yn: 0;
    trms_cn: undefined;
}, "">;
/** 약관 검색 요청 DTO */
export const PolicySearchReq: import("yup").ObjectSchema<{
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
/** 약관 검색 결과 DTO */
export const PolicySearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            id: number;
            crt_dt: Date;
            trms_ttl: string;
            esntl_yn: number;
            enfc_bgng_dt: Date;
            updt_trms_agre_need_yn: number;
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
/** 약관 상세조회 결과 DTO */
export const PolicyDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
        trms_ttl: string;
        esntl_yn: number;
        enfc_bgng_dt: Date;
        updt_trms_agre_need_yn: number;
        trms_cn: string;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=policy.d.ts.map