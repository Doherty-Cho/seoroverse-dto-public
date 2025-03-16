/**
 * 학교 정보 검색 DTO
 * @property {number} id
 * @property {string | null | undefined} school_nm - 학교 이름
 * @property {string | null | undefined} school_address - 학교 주소
 */
export const SchoolManagementSearch: import("yup").ObjectSchema<{
    school_nm: string | null | undefined;
    school_address: string | null | undefined;
    id: number | null | undefined;
}, import("yup").AnyObject, {
    school_nm: undefined;
    school_address: undefined;
    id: undefined;
}, "">;
/**
 * 학교 정보 목록 DTO
 * @property {number} id - 아이디
 * @property {string} school_nm - 학교 이름
 * @property {string} school_address - 학교 주소
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
export const SchoolManagementList: import("yup").ObjectSchema<{
    school_nm: string;
    school_address: string;
    id: number;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    school_nm: undefined;
    school_address: undefined;
    id: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/** 학교 정보 상세 DTO
 * @property {string} school_nm - 학교 이름
 * @property {string} school_address - 학교 주소
 */
export const SchoolManagementDetail: import("yup").ObjectSchema<{
    school_nm: string;
    school_address: string;
    id: number;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    school_nm: undefined;
    school_address: undefined;
    id: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/**
 * 학교 정보 등록 DTO
 * @property {string | null | undefined} school_nm - 학교 이름
 * @property {string | null | undefined} school_address - 학교 주소
 */
export const SchoolManagementCreate: import("yup").ObjectSchema<{
    school_nm: string | null | undefined;
    school_address: string | null | undefined;
}, import("yup").AnyObject, {
    school_nm: undefined;
    school_address: undefined;
}, "">;
/**
 * 학교 정보 수정 DTO
 */
export const SchoolManagementUpdate: import("yup").ObjectSchema<{
    school_nm: string | null | undefined;
    school_address: string | null | undefined;
}, import("yup").AnyObject, {
    school_nm: undefined;
    school_address: undefined;
}, "">;
/**
 * 학교 정보 검색 요청 DTO
 */
export const SchoolManagementSearchReq: import("yup").ObjectSchema<{
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
 * 학교 정보 검색 결과 DTO
 */
export const SchoolManagementSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
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
 * 학교 정보 상세조회 결과 DTO
 */
export const SchoolManagementDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
        school_nm: string;
        school_address: string;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=school.d.ts.map