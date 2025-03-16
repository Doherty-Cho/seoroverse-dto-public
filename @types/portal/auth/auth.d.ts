export const DeviceAgent: import("yup").ObjectSchema<{
    fcm_token: string | null | undefined;
    platform: {
        os: string;
        device_id: string;
        app_version: string;
        device_model: string;
    };
    os: string;
    sdk_version: string;
}, import("yup").AnyObject, {
    fcm_token: undefined;
    platform: {
        os: undefined;
        device_id: undefined;
        app_version: undefined;
        device_model: undefined;
    };
    os: undefined;
    sdk_version: undefined;
}, "">;
/**
 * @description 포탈 로그인 요청
 * @property {string} email - 이메일
 * @property {string} password - 비밀번호
 * @property {ObjectSchema} agent - agent
 */
export const PortalLoginRequest: import("yup").ObjectSchema<{
    email: string;
    password: string;
    agent: {
        fcm_token?: string | null | undefined;
        platform: {
            os: string;
            device_id: string;
            app_version: string;
            device_model: string;
        };
        os: string;
        sdk_version: string;
    };
}, import("yup").AnyObject, {
    email: undefined;
    password: undefined;
    agent: {
        fcm_token: undefined;
        platform: {
            os: undefined;
            device_id: undefined;
            app_version: undefined;
            device_model: undefined;
        };
        os: undefined;
        sdk_version: undefined;
    };
}, "">;
/**
 * @description 포탈 로그인 결과
 * @property {ObjectSchema} user - 사용자 정보
 * @property {string} token - 인증토큰
 */
export const PortalLoginResult: import("yup").ObjectSchema<{
    user: {
        emails?: {
            id: number;
            reg_type_cd: string;
            eml_addr: string;
        }[] | undefined;
        pswd_chg_dt?: Date | null | undefined;
        id: number;
        nckn_nm: string;
    };
    current_reported_cnt: number;
    max_reported_cnt: number;
    token: string;
}, import("yup").AnyObject, {
    user: {
        id: undefined;
        nckn_nm: undefined;
        pswd_chg_dt: undefined;
        emails: undefined;
    };
    current_reported_cnt: 0;
    max_reported_cnt: 3;
    token: undefined;
}, "">;
/**
 * @description 포탈 로그인 결과 응답
 * request uri: `/portal/auth/login`
 */
export const PortalLoginResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        user: {
            emails?: {
                id: number;
                reg_type_cd: string;
                eml_addr: string;
            }[] | undefined;
            pswd_chg_dt?: Date | null | undefined;
            id: number;
            nckn_nm: string;
        };
        token: string;
        current_reported_cnt: number;
        max_reported_cnt: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @description 포탈 게스트 로그인 결과 응답
 * request uri: `/auth/guest-login`
 */
export const PortalGuestLoginResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        user: {} | null;
        token: string;
        current_reported_cnt: number;
        max_reported_cnt: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @description 포탈 로그아웃 결과
 * @property {ObjectSchema} user - 사용자 정보
 */
export const PortalLogoutResult: import("yup").ObjectSchema<{
    user: {} | null;
}, import("yup").AnyObject, {
    user: null;
}, "">;
/**
 * @description 포탈 로그아웃 결과 응답
 * request uri: `/portal/auth/logout`
 */
export const PortalLogoutResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        user: {} | null;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/** 포탈 소셜 계정 정보 조회 요청값 */
export const PortalSocialLoginRequest: import("yup").ObjectSchema<{
    social_token: string;
    reg_type_cd: string;
    agent: {
        fcm_token?: string | null | undefined;
        platform: {
            os: string;
            device_id: string;
            app_version: string;
            device_model: string;
        };
        os: string;
        sdk_version: string;
    };
}, import("yup").AnyObject, {
    social_token: undefined;
    reg_type_cd: undefined;
    agent: {
        fcm_token: undefined;
        platform: {
            os: undefined;
            device_id: undefined;
            app_version: undefined;
            device_model: undefined;
        };
        os: undefined;
        sdk_version: undefined;
    };
}, "">;
//# sourceMappingURL=auth.d.ts.map