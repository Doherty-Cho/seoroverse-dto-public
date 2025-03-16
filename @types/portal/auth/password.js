"use strict";
const { object, string } = require('yup');
/**
 * @description 사용자 비밀번호 변경 요청
 * @request_uri: `/auth/password`
 * @request_method: `PUT`
 * @response_body: `SuccessSimpleRes`
 */
const PasswordUpdate = object({
    new_password: string().label('새 비밀번호').required().min(1),
});
module.exports = {
    PasswordUpdate,
};
//# sourceMappingURL=password.js.map