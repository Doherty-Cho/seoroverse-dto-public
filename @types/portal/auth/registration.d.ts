export const EmailRegistrationReq: import("yup").ObjectSchema<{
    mbl_telno: string;
    nckn_nm: string;
    reg_type_cd: string;
    policy_agreements: {
        plcy_id: number;
        agre_yn: NonNullable<boolean | undefined>;
    }[];
    mobile_verified_token: string;
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
    eml_addr: string;
    password: string;
}, import("yup").AnyObject, {
    mbl_telno: undefined;
    nckn_nm: undefined;
    reg_type_cd: undefined;
    policy_agreements: "";
    mobile_verified_token: undefined;
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
    eml_addr: undefined;
    password: undefined;
}, "">;
export const SocialRegistrationReq: import("yup").ObjectSchema<{
    mbl_telno: string;
    nckn_nm: string;
    reg_type_cd: string;
    policy_agreements: {
        plcy_id: number;
        agre_yn: NonNullable<boolean | undefined>;
    }[];
    mobile_verified_token: string;
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
    social_token: string;
}, import("yup").AnyObject, {
    mbl_telno: undefined;
    nckn_nm: undefined;
    reg_type_cd: undefined;
    policy_agreements: "";
    mobile_verified_token: undefined;
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
    social_token: undefined;
}, "">;
export const LibraryRegistrationReq: import("yup").ObjectSchema<{
    mbl_telno: string;
    nckn_nm: string;
    reg_type_cd: string;
    policy_agreements: {
        plcy_id: number;
        agre_yn: NonNullable<boolean | undefined>;
    }[];
    mobile_verified_token: string;
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
    lib_acnt_nm: string;
    lib_key_no: string;
}, import("yup").AnyObject, {
    mbl_telno: undefined;
    nckn_nm: undefined;
    reg_type_cd: undefined;
    policy_agreements: "";
    mobile_verified_token: undefined;
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
    lib_acnt_nm: undefined;
    lib_key_no: undefined;
}, "">;
//# sourceMappingURL=registration.d.ts.map