/**
 * 전당 공통 항목
 */
export type 명예의 = {
    /**
     * - 기준연월
     */
    crtr_ym: string;
    /**
     * - 명예의전당구분코드
     */
    hof_se_cd: string;
    /**
     * - 명예의전당상세구분코드
     */
    hof_dtl_se_cd: string;
};
/**
 * 검색 DTO
 */
export type 명예의전당 = any;
/**
 * @typedef 명예의전당 검색 요청 DTO
 */
export const HallOfFameManagementSearchReq: import("yup").ObjectSchema<{
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
 * @typedef 명예의전당 검색 결과 DTO
 */
export const HallOfFameManagementSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            id: number;
            crt_dt: Date;
            nckn_nm: string;
            reg_type_cd: string;
            eml_addr: string;
            bkmny_amt: number;
            user_id: number;
            crtr_ym: string;
            hof_se_cd: string;
            hof_dtl_se_cd: string;
            rank: number;
            cmpn_give_yn: NonNullable<boolean | undefined>;
            whol_scr: number;
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
//# sourceMappingURL=hall-of-fame.d.ts.map