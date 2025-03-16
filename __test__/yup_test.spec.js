const _ = require('lodash')
const yup = require('yup')
const { object, string, number, date, boolean, ref, test } = require('yup')
const { SearchListReq } = require('../common/request')

// const ko = require('yup-locale-ko')

//import * as yup from 'yup'
// import ko from 'yup-locale-ko'

// yup.setLocale(ko)

// yup.object({
//     name: yup.string().label('이름'),
//   })
//   .validateSync(
//     { name: 12345, },
//     { strict: true, }
//   )

yup.setLocale({
  mixed: {
    default: '사용할수 없는 값입니다.',
    required: '필수입력입니다.',
    oneOf: '다음 값 중 하나여야 합니다.: ${values}',
    notOneOf: '다음 값 중 하나가 아니어야 합니다.: ${values}',
    notType: function notType(_ref) {
      let path = _ref.path,
        type = _ref.type,
        value = _ref.value,
        originalValue = _ref.originalValue
      var isCast = originalValue != null && originalValue !== value

      if (type == 'number') {
        var msg = ' 숫자만 입력해주세요.'
      } else if (type == 'date') {
        var msg = ' 날짜 형식으로 입력해주세요.'
      } else {
        var msg = path + ' 항목은 `' + type + '` 형식으로 입력해주세요.'
      }

      return msg
    },
    defined: '정의되지 않았습니다.',
  },
  string: {
    length: '${length}자로 입력해주세요.',
    min: '${min}자 이상 입력바랍니다.',
    max: '${max}자 까지 입력됩니다.',
    email: '이메일 형식이 아닙니다.',
  },
  number: {
    min: '${min} 이상으로 입력해주세요.',
    max: '${min} 이하로 입력해주세요.',
    lessThan: '${min} 이상으로 입력해주세요.',
    moreThan: '${min} 이상으로 입력해주세요.',
    positive: '양수값으로 입력해주세요.',
    negative: '음수값으로 입력해주세요.',
    integer: '${label} 정수로 입력해주세요.',
  },
})

let msg = ''

describe('SearchListReq validation - default payload', () => {
  it('검증 항목간 비교 예제 - 비밀번호 확인', async () => {
    // given
    const resourceSchema = object().shape({
      //id: number().max(10).required(),
      id: number().required().integer().label('아이디를'),
      // nickname: string().when('id', (id, schema) => {
      //   // id !== 0 ? schema.required() : schema
      //   if (id !== 0) {
      //     return schema.required()
      //   } else {
      //     return schema
      //   }
      // }),
      nickname: string().when('id', {
        is: '1',
        then: (resourceSchema) => resourceSchema.nullable(),
        otherwise: (resourceSchema) => resourceSchema.required(),
        // otherwise: string().required('닉네임은 필수항목입니다.'),
      }),
      // nickname: string().when('id', {
      //   is: true,
      //   then: string().required('닉네임은 필수항목입니다.'),
      // }),
      type: string().required(),
      // method: mixed().when('yn', {
      //   is: (yn) => type === 'Y',
      //   then: object().shape({
      //     name: string().when('method', (method, schema) =>
      //       addObjYn === 'Y' ? schema.required('name을 입력해주세요.') : schema
      //     ),
      //     age: number().min(3, 'age를 3이상 입력해주세요.'),
      //   }),
      // }),
      password: string()
        .concat(string().required('비밀번호는 필수항목입니다.'))
        .min(6, '비밀번호는 6문자 이상이어야 합니다.'),
      confirmPassword: string()
        // .when('password', (password, schema) => {
        //   if (password) return schema.required('확인비밀번호는 필수항목입니다.')
        // })
        .oneOf([ref('password')], '비밀번호가 일치해야 합니다.'),

      content: string().test({
        message: `내용을 확인하세요 - 'test'를 포함해야하며 5자 이상이어야 합니다.`,
        test: (value, context) => {
          if (context.parent.type == 'A') {
            return true
          } else {
            return value?.includes('test') && value.length >= 5
          }
        },
      }),

      start_at: date().nullable(),
      end_at: date()
        .when('start_at', (start_at, schema) => {
          // start_at 값이 있을 때에만 end_at을 필수항목으로 처리함
          if (_.isEmpty(start_at[0])) {
            return schema.nullable()
          } else {
            return schema.required('종료일을 입력하세요.')
          }
        })
        .test({
          message: `시작일이 종료일보다 작거나 같아야 합니다.`,
          test: (value, context) => {
            return value >= context.parent.start_at
          },
        }),
    })

    const requestBody = {
      id: 1,
      nickname: 'nick',
      // nickname: 'aa',
      password: '123456',
      // password: null,
      confirmPassword: '123456',
      type: 'A',
      content: 'tesa1',
      start_at: null,
      end_at: null,
      // start_at: '2024-01-01',
      // end_at: '2024-01-03',
    }

    // when
    const req = resourceSchema

    // then
    expect(async () => await req.validate(requestBody)).not.toThrow()
  })
})

describe('dfffff', () => {
  it('검증 항목간 비교 예제 - 비밀번호 확인', async () => {
    const schema = object().shape({
      displayYn: string().required('표시여부를 선택해주세요'),
      displayContent: string().when('displayYn', (displayYn, schema) =>
        displayYn[0] === 'Y' ? schema.required('표시내용을 입력해주세요.') : schema.nullable()
      ),
    })

    const requestBody = {
      displayYn: 'Y',
      displayContent: '내용입니다.',
    }

    // when
    const req = schema

    // then
    expect(async () => await req.validate(requestBody)).not.toThrow()
  })
})
