"use strict";
const { array, string, lazy, number, boolean, object, ValidationError } = require('yup');
const { hasIn, isEmpty, isObject } = require('lodash');
const FILTER_CONDITION = {
    /** 같은 */
    EQUAL: 'eq',
    /** 포함된 */
    LIKE: 'like',
    /** 초과 */
    GREATER_THAN: 'gt',
    /** 이상 */
    GREATER_THAN_EQUAL: 'gte',
    /** 미만 */
    LESS_THAN: 'lt',
    /** 이하 */
    LESS_THAN_EQUAL: 'lte',
    /** 여러개 중 포함 */
    IN: 'in',
};
const SORT_OPTION = {
    /** 오름차순 */
    ASC: 'asc',
    /** 내림차순 */
    DESC: 'desc',
};
function getSchemaFromObj(obj) {
    const type = typeof obj;
    return type === 'number'
        ? number()
        : type === 'boolean'
            ? boolean()
            : type === 'object'
                ? object()
                : string();
}
function singleTypeSchemaForFilter(schema) {
    return schema.required().notRequired();
}
function arrayTypeSchemaForFilter(schema) {
    return array(singleTypeSchemaForFilter(schema).required()).notRequired();
}
const filterValidationObject = Object.fromEntries(Object.entries(FILTER_CONDITION).map(([, v]) => [
    v,
    lazy((obj) => {
        if ('object' === typeof obj && !Array.isArray(obj)) {
            throw new ValidationError('object is not allowed as filter options', obj, v);
        }
        return v === 'in'
            ? arrayTypeSchemaForFilter(Array.isArray(obj) && obj.length > 0 ? getSchemaFromObj(obj[0]) : string().nullable())
            : singleTypeSchemaForFilter(getSchemaFromObj(obj));
    }),
]));
function hasFilterConditionKeys(targetObj) {
    if (!targetObj || !isObject(targetObj) || isEmpty(targetObj))
        return false;
    return Object.entries(FILTER_CONDITION).map(([, path]) => hasIn(targetObj, path)).length > 0;
}
/** @name 최대 누적 신고 횟수 */
const MAX_REPORTED_CNT = 3;
module.exports = {
    FILTER_CONDITION,
    SORT_OPTION,
    filterValidationObject,
    hasFilterConditionKeys,
    MAX_REPORTED_CNT,
};
//# sourceMappingURL=const.js.map