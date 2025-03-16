/** 휴대폰 인증코드 전송 요청 */
export const SendMobileCodeRequest: import("yup").ObjectSchema<{
    mobile: string;
    type: string;
}, import("yup").AnyObject, {
    mobile: undefined;
    type: undefined;
}, "">;
/** 휴대폰 인증코드 확인 요청 */
export const ConfirmMobileCodeRequest: import("yup").ObjectSchema<{
    mobile: string;
    type: string;
    code: string;
}, import("yup").AnyObject, {
    mobile: undefined;
    type: undefined;
    code: undefined;
}, "">;
/**
 * @description 휴대폰 인증코드 확인 결과 DTO (회원가입 하는 경우)
 * request uri: `/auth/confirm-mobile-code`
 */
export const ConfirmRegistrationMobileCodeResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        reason: string;
        is_success: NonNullable<boolean | undefined>;
        result: {
            mobile_verified_token: string | null;
        };
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @description 휴대폰 인증코드 확인 결과 DTO (계정 찾기 하는 경우)
 * request uri: `/auth/confirm-mobile-code`
 */
export const ConfirmFindAccountMobileCodeResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        reason: string;
        is_success: NonNullable<boolean | undefined>;
        result: {
            id: number;
            reg_type_cd: string;
            eml_addr: string;
            mbl_telno: string;
            mobile_verified_token: string | null;
        };
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=mobile-verification.d.ts.map