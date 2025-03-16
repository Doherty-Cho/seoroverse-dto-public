"use strict";
const { string } = require('yup');
const nckn_nm = string()
    .label('닉네임')
    .matches(/^[a-zA-Z가-힣0-9]{1,8}$/, { message: '한글, 영문, 숫자 사용 8자 이내가 아닙니다.' })
    .max(8)
    .required();
module.exports = {
    nckn_nm,
};
//# sourceMappingURL=field.js.map