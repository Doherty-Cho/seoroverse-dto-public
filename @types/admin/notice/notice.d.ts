/**
 * 공지사항 검색 DTO
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {Date} crt_dt - 작성일시
 */
export const NoticeSearch: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    ntc_cn: string;
    atch_file_id: number | null;
    lgn_id: string | null | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    ntc_type_cd: string;
    ntc_nm: "";
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    ntc_cn: "";
    atch_file_id: 0;
    lgn_id: undefined;
    crt_dt: undefined;
}, "">;
/**
 * 공지사항 목록 DTO
 * @property {number} id - 아이디
 * @property {number} inq_cnt - 조회수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {string | undefined} ntc_cn - 공지내용
 * @property {Date} crt_dt - 작성일시
 */
export const NoticeList: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    id: number;
    inq_cnt: number;
    lgn_id: string | null | undefined;
    ntc_cn: string | undefined;
    crt_dt: Date;
}, import("yup").AnyObject, {
    ntc_type_cd: string;
    ntc_nm: "";
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    id: undefined;
    inq_cnt: 0;
    lgn_id: undefined;
    ntc_cn: undefined;
    crt_dt: undefined;
}, "">;
/** 공지사항 상세 DTO
 * @property {string} ntc_cn - 공지내용
 * @property {string | null | undefined} file_url_addr - 파일 URL
 * @property {string | null | undefined} file_nm - 파일명
 * @property {number | null | undefined} file_sz - 파일크기
 * @property {Date} mdfcn_dt - 수정일시
 * @property {number} inq_cnt - 조회수
 * @property {string | null | undefined} lgn_id - 작성자 로그인 아이디
 * @property {number | null | undefined} next_id - 다음 공지사항 id
 * @property {number | null | undefined} prev_id - 이전 공지사항 id
 */
export const NoticeDetail: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    id: number;
    inq_cnt: number;
    lgn_id: string | null | undefined;
    ntc_cn: string;
    crt_dt: Date;
    file_url_addr: string | null | undefined;
    file_nm: string | null | undefined;
    file_sz: number | null | undefined;
    mdfcn_dt: Date;
    next_id: number | null | undefined;
    prev_id: number | null | undefined;
}, import("yup").AnyObject, {
    ntc_type_cd: string;
    ntc_nm: "";
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    id: undefined;
    inq_cnt: 0;
    lgn_id: undefined;
    ntc_cn: undefined;
    crt_dt: undefined;
    file_url_addr: undefined;
    file_nm: undefined;
    file_sz: undefined;
    mdfcn_dt: undefined;
    next_id: undefined;
    prev_id: undefined;
}, "">;
/**
 * 공지사항 등록 DTO
 * @property {string} ntc_cn - 공지내용
 * @property {number | null} atch_file_id - 첨부파일아이디
 */
export const NoticeCreate: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    ntc_cn: string;
    atch_file_id: number | null;
}, import("yup").AnyObject, {
    ntc_type_cd: string;
    ntc_nm: "";
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    ntc_cn: "";
    atch_file_id: 0;
}, "">;
/**
 * 공지사항 수정 DTO
 */
export const NoticeUpdate: import("yup").ObjectSchema<{
    ntc_type_cd: string;
    ntc_nm: string;
    expsr_yn: NonNullable<boolean | undefined>;
    pstg_bgng_dt: Date | null | undefined;
    html_use_yn: NonNullable<boolean | undefined>;
    mngr_id: number | null | undefined;
    ntc_cn: string;
    atch_file_id: number | null;
}, import("yup").AnyObject, {
    ntc_type_cd: string;
    ntc_nm: "";
    expsr_yn: true;
    pstg_bgng_dt: undefined;
    html_use_yn: false;
    mngr_id: undefined;
    ntc_cn: "";
    atch_file_id: 0;
}, "">;
/**
 * 공지사항 검색 요청 DTO
 */
export const NoticeSearchReq: import("yup").ObjectSchema<{
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
/**
 * 공지사항 검색 결과 DTO
 */
export const NoticeSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            pstg_bgng_dt?: Date | null | undefined;
            mngr_id?: number | null | undefined;
            ntc_cn?: string | undefined;
            lgn_id?: string | null | undefined;
            id: number;
            ntc_type_cd: string;
            ntc_nm: string;
            expsr_yn: NonNullable<boolean | undefined>;
            html_use_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            inq_cnt: number;
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
 * 공지사항 상세조회 결과 DTO
 */
export const NoticeDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        pstg_bgng_dt?: Date | null | undefined;
        mngr_id?: number | null | undefined;
        lgn_id?: string | null | undefined;
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
//# sourceMappingURL=notice.d.ts.map