const { object, string, number, array, bool } = require('yup')

/**
 * @template T
 * @param {import('yup').ObjectSchema<T extends import('yup').Maybe<import('yup').AnyObject> ? T : any>} schema
 */
const SuccessObjectRes = (schema) =>
  object({
    code: string().required().default('0000'),
    data: schema,
  })

/**
 * @template T
 * @param {import('yup').ObjectSchema<T extends import('yup').Maybe<import('yup').AnyObject> ? T : any>} schema
 */
const SuccessListRes = (schema) =>
  object({
    code: string().required().default('0000'),
    data: object({
      total: number().required().integer().min(0),
      count: number().required().integer().min(0),
      rows: array(schema).required(),
    }).required(),
  })

const SuccessSimpleRes = SuccessObjectRes(object({ is_success: bool().required().default(true) }))

const StringArrayRes = SuccessObjectRes(array().of(string()).required())

const NumberArrayRes = SuccessObjectRes(array().of(number()).required())

const FailRes = object({
  code: string().required().default('9999'),
  message: string().required().min(1),
})

const CreateOneRes = SuccessObjectRes(object({ id: number().required() }))

module.exports = {
  SuccessObjectRes,
  SuccessListRes,
  SuccessSimpleRes,
  FailRes,
  CreateOneRes,
  StringArrayRes,
  NumberArrayRes,
}
