/** 배너 검색 DTO */
export const BannerSearch: import("yup").ObjectSchema<{
    bnr_pstn_cd: string;
    bnr_ttl: string | null | undefined;
    indct_seq_no: number | null;
}, import("yup").AnyObject, {
    bnr_pstn_cd: undefined;
    bnr_ttl: undefined;
    indct_seq_no: 0;
}, "">;
/**
 * 배너 목록 DTO
 * @property {number} id - 아이디
 * @property {string} lnkg_url_addr - 연결URL주소
 * @property {Date} crt_dt - 작성일시
 * @property {number} file_id - 파일 아이디
 * @property {FileBase} file - 파일
 */
export const BannerList: import("yup").ObjectSchema<{
    bnr_pstn_cd: string;
    bnr_ttl: string | null | undefined;
    indct_seq_no: number | null;
    id: number;
    lnkg_url_addr: string | null | undefined;
    crt_dt: Date;
    file_id: number | null | undefined;
    file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
}, import("yup").AnyObject, {
    bnr_pstn_cd: undefined;
    bnr_ttl: undefined;
    indct_seq_no: 0;
    id: undefined;
    lnkg_url_addr: undefined;
    crt_dt: undefined;
    file_id: undefined;
    file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
}, "">;
/** 배너 검색 요청 DTO */
export const BannerSearchReq: import("yup").ObjectSchema<{
    filters: {} | null | undefined;
    search: {} | null | undefined;
    from: number;
    size: number;
    sort: any[] | undefined;
}, import("yup").AnyObject, {
    filters: undefined;
    search: undefined;
    from: 0;
    size: 1;
    sort: undefined;
}, "">;
/** 배너 검색 결과 DTO */
export const BannerSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            bnr_ttl?: string | null | undefined;
            lnkg_url_addr?: string | null | undefined;
            file_id?: number | null | undefined;
            id: number;
            file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            crt_dt: Date;
            bnr_pstn_cd: string;
            indct_seq_no: number | null;
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
//# sourceMappingURL=banner.d.ts.map