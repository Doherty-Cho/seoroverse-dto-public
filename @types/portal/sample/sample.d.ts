/** 공지사항 검색 DTO */
export const SampleSearch: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    ntc_cn: string;
    atch_file_id: number | null;
    crt_dt: Date;
}, import("yup").AnyObject, {
    ntc_type_cd: undefined;
    ntc_nm: undefined;
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    ntc_cn: undefined;
    atch_file_id: 0;
    crt_dt: undefined;
}, "">;
/** 공지사항 목록 dto */
export const SampleList: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    id: number;
    crt_dt: Date;
}, import("yup").AnyObject, {
    ntc_type_cd: undefined;
    ntc_nm: undefined;
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    id: undefined;
    crt_dt: undefined;
}, "">;
/** 공지사항 상세 dto */
export const SampleDetail: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    id: number;
    crt_dt: Date;
    ntc_cn: string;
    file_url_addr: string | null | undefined;
    file_nm: string | null | undefined;
    file_sz: number | null | undefined;
    mdfcn_dt: Date;
    inq_cnt: number;
    next_id: number | null | undefined;
    prev_id: number | null | undefined;
}, import("yup").AnyObject, {
    ntc_type_cd: undefined;
    ntc_nm: undefined;
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    id: undefined;
    crt_dt: undefined;
    ntc_cn: undefined;
    file_url_addr: undefined;
    file_nm: undefined;
    file_sz: undefined;
    mdfcn_dt: undefined;
    inq_cnt: 0;
    next_id: undefined;
    prev_id: undefined;
}, "">;
/** 공지사항 등록 DTO */
export const SampleCreate: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    ntc_cn: string;
    atch_file_id: number | null;
}, import("yup").AnyObject, {
    ntc_type_cd: undefined;
    ntc_nm: undefined;
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    ntc_cn: undefined;
    atch_file_id: 0;
}, "">;
/** 공지사항 수정 DTO */
export const SampleUpdate: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    ntc_cn: string;
    atch_file_id: number | null;
}, import("yup").AnyObject, {
    ntc_type_cd: undefined;
    ntc_nm: undefined;
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    ntc_cn: undefined;
    atch_file_id: 0;
}, "">;
/** 공지사항 검색 요청 DTO */
export const SampleSearchReq: import("yup").ObjectSchema<{
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
/** 공지사항 검색 결과 DTO */
export const SampleSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            pstg_bgng_dt?: Date | null | undefined;
            mngr_id?: number | null | undefined;
            id: number;
            ntc_type_cd: string;
            ntc_nm: string;
            expsr_yn: NonNullable<boolean | undefined>;
            html_use_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
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
/** 공지사항 상세조회 결과 DTO */
export const SampleDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        pstg_bgng_dt?: Date | null | undefined;
        mngr_id?: number | null | undefined;
        file_url_addr?: string | null | undefined;
        file_nm?: string | null | undefined;
        file_sz?: number | null | undefined;
        next_id?: number | null | undefined;
        prev_id?: number | null | undefined;
        id: number;
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        html_use_yn: NonNullable<boolean | undefined>;
        ntc_cn: string;
        crt_dt: Date;
        inq_cnt: number;
        mdfcn_dt: Date;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=sample.d.ts.map