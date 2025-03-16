/** 사용자 공통 항목 */
export const AccountBase: import("yup").ObjectSchema<{
    id: number;
    mbl_telno: string;
    reg_type_cd: string;
    eml_addr: string;
    mobile_verified_token: string | null;
}, import("yup").AnyObject, {
    id: undefined;
    mbl_telno: undefined;
    reg_type_cd: undefined;
    eml_addr: undefined;
    mobile_verified_token: null;
}, "">;
/** 계정 찾기 결과 (계정 조회) 결과 DTO */
export const AccountRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        id: number;
        reg_type_cd: string;
        eml_addr: string;
        mbl_telno: string;
        mobile_verified_token: string | null;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=account.d.ts.map