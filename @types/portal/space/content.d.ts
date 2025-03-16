/**
 * 콘텐츠 상세정보
 *
 * @property {number} id - 콘텐츠 아이디. Required.
 * @property {number} spce_id - 공간아이디. Required.
 * @property {string} conts_se_cd - 콘텐츠구분코드. Required.
 * @property {number} conts_seq - 콘텐츠순서. Required.
 * @property {string} conts_ttl - 콘텐츠제목. Required.
 * @property {number} file_id - 파일아이디. Required.
 * @property {date} crt_dt - 생성일시. Required.
 * @property {date} mdfcn_dt - 수정일시. Required.
 */
export const ContentList: import("yup").ObjectSchema<{
    id: number;
    spce_id: number;
    conts_se_cd: string;
    conts_seq: number;
    conts_ttl: string;
    file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        file_sz: number;
        orgnl_file_nm: string;
    };
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    spce_id: undefined;
    conts_se_cd: undefined;
    conts_seq: undefined;
    conts_ttl: undefined;
    file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
        file_sz: undefined;
    };
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/** 콘텐츠 목록조회 결과 DTO */
export const ContentListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            id: number;
            file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            };
            crt_dt: Date;
            mdfcn_dt: Date;
            conts_ttl: string;
            spce_id: number;
            conts_se_cd: string;
            conts_seq: number;
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
/**
 * 콘텐츠 생성 DTO
 *
 * @property {string} conts_se_cd - 콘텐츠구분코드. Required.
 * @property {number} conts_seq - 콘텐츠순서. Required.
 * @property {string} conts_ttl - 콘텐츠제목. Required.
 * @property {number} file_id - 파일아이디. Required.
 */
export const ContentCreate: import("yup").ObjectSchema<{
    conts_se_cd: string;
    conts_seq: number;
    conts_ttl: string;
    file_id: number;
}, import("yup").AnyObject, {
    conts_se_cd: undefined;
    conts_seq: undefined;
    conts_ttl: undefined;
    file_id: undefined;
}, "">;
/**
 * 콘텐츠 수정 DTO
 */
export const ContentUpdate: import("yup").ObjectSchema<{
    conts_se_cd: string;
    conts_seq: number;
    conts_ttl: string;
    file_id: number;
}, import("yup").AnyObject, {
    conts_se_cd: undefined;
    conts_seq: undefined;
    conts_ttl: undefined;
    file_id: undefined;
}, "">;
//# sourceMappingURL=content.d.ts.map