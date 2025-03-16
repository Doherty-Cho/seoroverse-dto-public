export namespace FILTER_CONDITION {
    let EQUAL: string;
    let LIKE: string;
    let GREATER_THAN: string;
    let GREATER_THAN_EQUAL: string;
    let LESS_THAN: string;
    let LESS_THAN_EQUAL: string;
    let IN: string;
}
export namespace SORT_OPTION {
    let ASC: string;
    let DESC: string;
}
export const filterValidationObject: {
    [k: string]: import("yup").Lazy<any, import("yup").AnyObject, any>;
};
export function hasFilterConditionKeys(targetObj: any): boolean;
/** @name 최대 누적 신고 횟수 */
export const MAX_REPORTED_CNT: 3;
//# sourceMappingURL=const.d.ts.map