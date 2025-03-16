const { object, array, number, string, lazy, ValidationError, reach, mixed } = require('yup')
const mapValues = require('lodash/mapValues')
const { SORT_OPTION, filterValidationObject, hasFilterConditionKeys } = require('./const')
const { hasIn, isEmpty, without } = require('lodash')
const { FILTER_CONDITION } = require('./const')

function validateUnknownKeys(schemaObj, targetObj, field) {
  const unknownKeys = getUnknownKeys(schemaObj, targetObj)
  if (unknownKeys.length)
    throw new ValidationError(
      `Unknown key${unknownKeys.length > 1 ? 's' : ''}: ${unknownKeys.join(', ')}`,
      targetObj,
      field,
      unknownKeys[0]
    )
}

function getUnknownKeys(schemaObject, targetObj) {
  const schemaKeys = Object.keys(schemaObject)
  const objKeys = Object.keys(targetObj)
  const unknownKeys = without(objKeys, ...schemaKeys)
  return unknownKeys
}

/**
 * api 경로의 id
 * ex) /api/users/1에서의 1
 */
const PathId = number().required().integer().min(1).label('pathId')

const sortObj = lazy((obj) =>
  object(mapValues(obj, () => string().oneOf(Object.values(SORT_OPTION))))
)

/**
 * 요청 값 중 필터 조건이 존재할 경우 필터 키 및 연산자를 검증한 뒤 빈 객체 리턴하는 함수
 */
const getFilterSchema = (resourceSchema) => {
  return lazy((obj) => {
    if (isEmpty(obj)) return object().notRequired()

    validateUnknownKeys(resourceSchema.fields, obj, 'filters')
    return object(getFieldsSchema(resourceSchema, obj))
  })
}

/**
 * Generates a fields schema object from the provided resource schema and an object containing field values.
 *
 * @param {object} resourceSchema - The resource schema object.
 * @param {object} obj - The object containing field values.
 * @returns {object} - The generated fields schema object.
 */
function getFieldsSchema(resourceSchema, obj) {
  const result = {}
  for (const key of Object.keys(obj)) {
    const val = obj[key]
    const valueSchema = reach(resourceSchema, key)

    let keyRemoved = false // null 또는 빈 배열이면 validation에서 제외 : 검색쿼리 구성시 제외하기 위함.
    for (const opr of Object.values(FILTER_CONDITION)) {
      if (
        Object.prototype.hasOwnProperty.call(val, opr) &&
        (val[opr] === null ||
          val[opr] === undefined ||
          (Array.isArray(val[opr]) && !val[opr].length))
        // && valueSchema.spec.nullable ==> nullable인 경우에만 validation 제외할 경우 주석 풀 것.
      ) {
        delete obj[key]
        keyRemoved = true
        break
      }
    }
    if (keyRemoved) continue

    // object type 일 때에는 filterValidationObject 사용
    if ('object' === typeof val && hasFilterConditionKeys(val)) {
      // validate operators (objects)
      validateUnknownKeys(filterValidationObject, val, '')
      result[key] = object(filterValidationObject)
    } else {
      result[key] = valueSchema
    }
  }
  return result
}

/**
 * 요청 값의 검색 조건 유무에 따라 빈 객체 또는 스펙 존재하는 객체를 리턴하는 함수
 */
const getSearchSchema = (resourceSchema) =>
  lazy((obj) => {
    if (isEmpty(obj)) {
      return object().notRequired()
    }

    validateUnknownKeys({ fields: '', keyword: '' }, obj, 'search')

    return object({
      fields: array(string().required().min(1).oneOf(Object.keys(resourceSchema.fields)))
        .required()
        .min(1),
      keyword: mixed().required(),
    }).notRequired()
  })

const SearchListReq = (resourceSchema) => {
  return object({
    filters: getFilterSchema(resourceSchema),
    search: getSearchSchema(resourceSchema),
    from: number().required().integer().min(0).default(0),
    size: number().required().integer().min(1).default(1),
    sort: array(sortObj).min(1),
  }).required()
}

const DeleteListReq = array(number().required().integer().min(1))
  .transform((v) => (typeof v === 'string' ? v.split(',').map((num) => Number(num)) : v))
  .required()
  .min(1)
  .label('id_list')

module.exports = { PathId, SearchListReq, DeleteListReq }
