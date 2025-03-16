const yup = require('yup')
const { object, string, number, date, boolean, mixed } = require('yup')
const { yup_locale } = require('../common/yup_locale')

// validation test
function validate(heading, schema, input, detailLog) {
  try {
    return schema.validateSync(input)
  } catch (e) {
    if (e.name === 'ValidationError') {
      if (detailLog) console.log(`validation error - ${JSON.stringify(e, null, 2)}`)
      const item = e.params.label ? `${e.params.label}(${e.params.path})` : e.params.path
      const msg = e.errors[0]
      const value = e.params.originalValue
      const type = e.params.type ?? typeof e.params.value ?? typeof e.params.originalValue
      // console.log(`> * 항목: ${item}\n> * 값: ${value}\n> * 오류: ${msg}`);
      console.log(
        `> ${heading} - * 항목: ${item} / * 값: ${value} * 타입: ${type} / * 오류: ${msg}`
      )

      if (detailLog) console.log(`${JSON.stringify(e, null, 2)}`)
    } else {
      console.log(`unknown error - ${e.message}`)
    }
  }
}

// 데이터에 따라 동적으로 변하는 유효성 검증 (boolean type)
const schema1 = object({
  like: boolean(),
  comment: string().when('like', {
    is: true,
    then: (schema) => schema.notRequired(),
    otherwise: (schema) => schema.required(),
  }),
})

// 데이터에 따라 동적으로 변하는 유효성 검증 (number)
let schema = object().shape({
  loan: number().integer().required(),
  amount: yup
    .number()
    .label('금액')
    .integer()
    //.typeError('You must specify a number')
    .when('loan', {
      is: 100,
      then: (schema) => schema.moreThan(10000).lessThan(30000).required(),
      otherwise: (schema) => schema.max(7000).required(),
    }),
  downPayment: number().nullable(),
})

const request = {
  loan: 100,
  amount: 30000,
  downPayment: 500,
}

// loan = 100 => then
validate('loan = 100 => then', schema, request)

request.amount = 10000
validate('request.amount = 10000', schema, request)

// loan = 200 => otherwise
request.loan = 200
validate('loan = 200 => otherwise', schema, request)

// 데이터에 따라 동적으로 변하는 유효성 검증 (string)
schema = schema.shape({
  loan: string().label('대출유형').required(),
  amount: number()
    .label('금액')
    .unit('원')
    .when('loan', {
      is: 'mortgage',
      then: (schema) =>
        schema.min(15000).max(300000, '금액은 15000원 이하로 입력하세요.').required(),
      otherwise: (schema) => schema.max(5000).required(),
    }),
})

request.loan = 'mortgage'
request.amount = 10000
validate('loan > mortgate', schema, request)

request.loan = 'car'
validate('loan > car', schema, request)

console.log('------------------')
const schema2 = object({
  email: string().label('이메일').email().required(),
  name: string().required(),
  job: string().label('직업').oneOf(['developer', 'manager', 'ceo']),
  age: number().label('나이').integer().positive().required(),
  birth: date().label('생일').max('2023-12-01'), //.required(),
})

let data = {
  name: 'test',
  email: 'test@abc',
  job: 'manager',
  age: '30',
  birth: '2023-12-31',
  start_at: '2024-01-02',
  end_at: '2024-01-01',
}

validate('name, email, job, age, birth...', schema2, data, false)

const schemaDate = object({
  start_at: date().label('시작일').required(),
  end_at: date()
    .label('종료일')
    .required()
    // .sameOrAfter('start_at', '시작일보다 크거나 같아야 합니다.'),
    // .sameOrAfter('start_at'),
    // .after(
    //   'start_at',
    //   '${name}#{은}(${value}) ${compareFieldName}(${compareValue})보다 커야 합니다!!'
    // ),
    .after('start_at'),
})

validate('sameOfAfter, after - start_at, end_at', schemaDate, data, false)

// validate(schemaDate, data);

const stringSchema = object({
  name: string().label('이름').min(10).required(),
})

data = {
  name: '1234',
}

validate('string schema test', stringSchema, data, true)

if (true) {
  const person = object({
    age: number().default(30).required(),
    name: string().default('pat').required(),
    color: string().default('red').required(),
  })

  const nameAndAge = person.pick(['name', 'age'])
  let newOb = nameAndAge.getDefault() // => { age: 30, name: 'pat' }
  // console.log(`${JSON.stringify(newOb, null, 2)}`);

  const nameAndColor = person.omit(['age'])
  newOb = nameAndColor.getDefault() // => { name: 'pat', color: 'red' }
  // console.log(`${JSON.stringify(newOb, null, 2)}`);

  let schema3 = object({
    myProp: mixed(),
    Other: mixed(),
  })
    .from('prop', 'myProp')
    .from('other', 'Other', true)
  const fromOb = schema3.cast({ prop: 5, other: 6 })
  // console.log(`${JSON.stringify(fromOb, null, 2)}`); // => { myProp: 5, other: 6, Other: 6 }
}
