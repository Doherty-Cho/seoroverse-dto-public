/**
 * 악세사리 목록조회 DTO
 * @property {number} id - 아이디
 * @property {FileInfo} rprs_img_file - 대표이미지파일
 * @property {string} avtr_expln - 악세사리설명
 * @property {string} gndr_se_cd - 성별구분코드(GNDR_SE_CD)
 * @property {number} indct_seq - 표시순서
 * @property {number} prchs_amt - 구매금액
 * @property {boolean} bsc_pvsn_yn - 기본제
 * @property {string} acsy_se_cd - 악세사리구분코드(ACSY_SE_CD)
 * @property {string|null} avtr_mtrl_expln - 아바타머티리얼설명. Optional
 * @property {string|null} avtr_mesh_expln - 아바타메쉬설명. Optional
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
export const AccessoryList: import("yup").ObjectSchema<{
    id: number;
    rprs_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        file_sz: number;
        orgnl_file_nm: string;
    };
    avtr_expln: string;
    gndr_se_cd: string;
    indct_seq: number;
    prchs_amt: number;
    bsc_pvsn_yn: NonNullable<boolean | undefined>;
    acsy_se_cd: string;
    avtr_mtrl_expln: string | null | undefined;
    avtr_mesh_expln: string | null | undefined;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    rprs_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
        file_sz: undefined;
    };
    avtr_expln: undefined;
    gndr_se_cd: undefined;
    indct_seq: undefined;
    prchs_amt: undefined;
    bsc_pvsn_yn: undefined;
    acsy_se_cd: undefined;
    avtr_mtrl_expln: undefined;
    avtr_mesh_expln: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/** 악세사리 목록조회 결과 DTO */
export const AccessoryListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            avtr_mtrl_expln?: string | null | undefined;
            avtr_mesh_expln?: string | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            prchs_amt: number;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            };
            indct_seq: number;
            avtr_expln: string;
            gndr_se_cd: string;
            bsc_pvsn_yn: NonNullable<boolean | undefined>;
            acsy_se_cd: string;
        }[];
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: {
        total: undefined;
        count: undefined;
        rows: undefined;
    };
}, "">;
//# sourceMappingURL=accessory.d.ts.map