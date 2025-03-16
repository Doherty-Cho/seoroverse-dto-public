/**
 * @description 로그인 결과
 * request uri: `/admin/auth/login`
 */
export const AdminLoginResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        menus?: {
            id: number;
            menu_nm: string;
            prvc_incl_yn: NonNullable<boolean | undefined>;
            prgrm_path_nm: string;
        }[] | undefined;
        require_password_update: NonNullable<boolean | undefined>;
        token: string;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @description 휴대폰 인증코드 전송 요청
 */
export const SendMobileCodeRequest: import("yup").ObjectSchema<{
    mobile: string;
    type: string;
}, import("yup").AnyObject, {
    mobile: undefined;
    type: undefined;
}, "">;
/**
 * @description 휴대폰 인증코드 전송 결과
 * request uri: `/admin/auth/send-mobile-code`
 */
export const SendMobileCodeResponse: import("yup").ObjectSchema<{
    code: string;
    data: {};
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @description 휴대폰 인증코드 확인 요청
 */
export const ConfirmMobileCodeRequest: import("yup").ObjectSchema<{
    mobile: string;
    code: string;
}, import("yup").AnyObject, {
    mobile: undefined;
    code: undefined;
}, "">;
/**
 * @description 휴대폰 인증코드 확인 결과
 * request uri: `/admin/auth/confirm-mobile-code`
 */
export const ConfirmMobileCodeResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        reason?: string | undefined;
        is_joined?: boolean | undefined;
        has_email_account?: boolean | undefined;
        hash?: string | undefined;
        mobile: string;
        is_success: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=auth.d.ts.map