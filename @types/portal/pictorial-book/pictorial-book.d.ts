/**
 * 도감 검색 요청 DTO
 */
export const PictorialBookSearchReq: import("yup").ObjectSchema<{
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
 * 도감 검색 결과 DTO
 */
export const PictorialBookSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            ptrb_knd_nm?: string | null | undefined;
            ptrb_src_nm?: string | null | undefined;
            id: number;
            crt_dt: Date;
            wissy_yn: NonNullable<boolean | undefined>;
            ctgry_nm: string;
            ptrb_cn: string;
            collect_yn: NonNullable<boolean | undefined>;
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
 * 도감 채집 히스토리 등록 요청 DTO
 * @property {number} ptrb_id - 도감아이디
 */
export const PictorialBookHistoryCreateReq: import("yup").ObjectSchema<{
    ptrb_id: number;
}, import("yup").AnyObject, {
    ptrb_id: undefined;
}, "">;
/**
 * 도감 채집 히스토리 등록 DTO
 * @property {number} user_id - 사용자 아이디
 * @property {boolean} wissy_yn - 명언여부
 * @property {number} ptrb_id - 도감 아이디
 */
export const PictorialBookHistoryCreate: import("yup").ObjectSchema<{
    ptrb_id: number;
    user_id: number;
    wissy_yn: NonNullable<boolean | undefined>;
}, import("yup").AnyObject, {
    ptrb_id: undefined;
    user_id: undefined;
    wissy_yn: undefined;
}, "">;
//# sourceMappingURL=pictorial-book.d.ts.map