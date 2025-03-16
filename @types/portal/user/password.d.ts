/**
 * @description 사용자 비밀번호 재설정
 * @request_uri: `/user/password`
 * @request_method: `PUT`
 * @response_body: `SuccessSimpleRes`
 */
export const ResetPassword: import("yup").ObjectSchema<{
    password: string;
}, import("yup").AnyObject, {
    password: undefined;
}, "">;
//# sourceMappingURL=password.d.ts.map