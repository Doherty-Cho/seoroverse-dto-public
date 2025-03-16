"use strict";
const yup = require('yup');
const { object, string, number, date, boolean, mixed } = require('yup');
// const { yup_locale } = require('../common/yup_locale')
// 사용자 지정 오류 메시지 함수 정의
const customErrorMessage = (params) => {
    return `${params.label} 항목은 ${params.max}${params.spec.unit} 이하여야 합니다.`;
};
yup.setLocale({
    mixed: {
        default: '입력값이 올바르지 않습니다.',
        required: '필수 입력값입니다.',
    },
    string: {
        email: '유효한 이메일 주소를 입력해주세요.',
    },
    number: {
        min: '${label} 항목은 ${min}${unit} -- 이상이어야 합니다.',
        max: customErrorMessage,
    },
});
yup.addMethod(number, 'unit', function (unit) {
    this.spec.unit = unit;
    return this;
});
// validation test
function validate(heading, schema, input, detailLog) {
    try {
        return schema.validateSync(input);
    }
    catch (e) {
        if (e.name === 'ValidationError') {
            if (detailLog)
                console.log(`validation error - ${JSON.stringify(e, null, 2)}`);
            const item = e.params.label ? `${e.params.label}(${e.params.path})` : e.params.path;
            const msg = e.errors[0];
            const value = e.params.originalValue;
            const type = e.params.type ?? typeof e.params.value ?? typeof e.params.originalValue;
            // console.log(`> * 항목: ${item}\n> * 값: ${value}\n> * 오류: ${msg}`);
            console.log(`> ${heading} - * 항목: ${item} / * 값: ${value} * 타입: ${type} / * 오류: ${msg}`);
            if (detailLog)
                console.log(`${JSON.stringify(e, null, 2)}`);
        }
        else {
            console.log(`unknown error - ${e.message}`);
        }
    }
}
const request = {
    loan: 'car',
    amount: 10000,
    downPayment: 500,
};
// 데이터에 따라 동적으로 변하는 유효성 검증 (string)
const schema = object().shape({
    loan: string().label('대출유형').required(),
    amount: number()
        //.label('금액')
        .label('금액')
        .unit('원')
        .when('loan', {
        is: 'mortgage',
        then: (schema) => schema.min(15000).max(300000, '금액은 15000원 이하로 입력하세요.').required(),
        // otherwise: (schema) => schema.max({ max: 5000, unit: '원' }).required(),
        otherwise: (schema) => schema.min(1000).max(5000).required(),
    }),
});
validate('loan > car', schema, request);
//# sourceMappingURL=yup_msg.js.map