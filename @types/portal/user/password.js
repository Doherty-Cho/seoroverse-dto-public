"use strict";
const { object, string } = require('yup');
/**
 * @description 사용자 비밀번호 재설정
 * @request_uri: `/user/password`
 * @request_method: `PUT`
 * @response_body: `SuccessSimpleRes`
 */
const ResetPassword = object({
    password: string().label('비밀번호').required().min(1),
});
module.exports = {
    ResetPassword,
};
//# sourceMappingURL=password.js.map