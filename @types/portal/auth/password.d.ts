/**
 * @description 사용자 비밀번호 변경 요청
 * @request_uri: `/auth/password`
 * @request_method: `PUT`
 * @response_body: `SuccessSimpleRes`
 */
export const PasswordUpdate: import("yup").ObjectSchema<{
    new_password: string;
}, import("yup").AnyObject, {
    new_password: undefined;
}, "">;
//# sourceMappingURL=password.d.ts.map