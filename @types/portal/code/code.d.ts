/**
 * 공통코드 등록 DTO
 * @property {string} group_cd 그룹코드
 */
export const CodeSearch: import("yup").ObjectSchema<{
    group_cd: string[] | undefined;
}, import("yup").AnyObject, {
    group_cd: "";
}, "">;
/**
 * 공통코드 목록 DTO
 * @property {string} group_cd 그룹코드
 * @property {string} group_nm 그룹명
 * @property {ArraySchema} list 코드목록
 */
export const CodeList: import("yup").ObjectSchema<{
    group_cd: string;
    group_nm: string | null | undefined;
    list: {
        cd: string;
        cd_nm: string;
        indct_seq: number;
    }[] | undefined;
}, import("yup").AnyObject, {
    group_cd: undefined;
    group_nm: undefined;
    list: "";
}, "">;
/**
 * 공통코드 검색 요청 DTO
 */
export const CodeSearchReq: import("yup").ObjectSchema<{
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
 * 공통코드 검색 결과 DTO
 */
export const CodeSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            group_nm?: string | null | undefined;
            list?: {
                cd: string;
                cd_nm: string;
                indct_seq: number;
            }[] | undefined;
            group_cd: string;
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
//# sourceMappingURL=code.d.ts.map