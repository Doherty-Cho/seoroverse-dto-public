/** 학교 목록 검색 요청 DTO */
export const SchoolListReq: import("yup").ObjectSchema<{
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
/** 학교 목록 검색 결과 DTO */
export const SchoolListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            school_id?: number | null | undefined;
            school_scr?: number | null | undefined;
            id: number;
            crt_dt: Date;
            school_nm: string;
            school_address: string;
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
 * 학교 점수 검색 요청 DTO
 */
export const SchoolSearchReq: import("yup").ObjectSchema<{
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
 * 학교 점수 검색 결과 DTO
 */
export const SchoolSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            school_address?: string | null | undefined;
            rank: number;
            school_nm: string;
            school_id: number;
            school_scr: number;
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
 * 학교 점수 등록 DTO
 * @property {number} school_id - 학교 아이디
 * @property {number} school_scr - 점수
 */
export const SchoolScoreCreate: import("yup").ObjectSchema<{
    school_id: number;
    school_scr: number;
}, import("yup").AnyObject, {
    school_id: undefined;
    school_scr: undefined;
}, "">;
//# sourceMappingURL=school.d.ts.map