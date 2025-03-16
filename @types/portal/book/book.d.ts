/**
 * 도서 검색 DTO
 *
 * @property {string} book_ttl - 책제목 (required)
 * @property {string} athr_nm - 작가명 (required)
 */
export const BookSearch: import("yup").ObjectSchema<{
    book_ttl: string;
    athr_nm: string;
}, import("yup").AnyObject, {
    book_ttl: undefined;
    athr_nm: undefined;
}, "">;
/** 도서 검색 요청 DTO */
export const BookSearchReq: import("yup").ObjectSchema<{
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
/** 도서 검색 결과 응답 DTO */
export const BookSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            athr_nm?: string | null | undefined;
            pblco_nm?: string | null | undefined;
            book_rpt_cn?: string | null | undefined;
            img_file_url_addr?: string | null | undefined;
            book_ttl: string;
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
 * @description 도서 목록 DTO
 *
 * @property {number} id - 아이디
 * @property {number} spce_id - 공간아이디
 * @property {boolean} expsr_yn - 띠지 노출여부
 * @property {string} bbnd_colr_cd - 띠지색상코드
 * @property {string|null} bbnd_indct_cn - 띠지표시내용
 * @property {FileBase|null} rprs_img_file - 표지이미지파일
 * @property {Date} crt_dt - 등록일시
 * @property {Date} mdfcn_dt - 수정일시
 */
export const BookList: import("yup").ObjectSchema<{
    bksf_pstn_cd: string;
    book_ttl: string;
    athr_nm: string | null | undefined;
    pblco_nm: string | null | undefined;
    book_rpt_cn: string | null | undefined;
    id: number;
    spce_id: number;
    expsr_yn: NonNullable<boolean | undefined>;
    bbnd_colr_cd: string;
    bbnd_indct_cn: string | null | undefined;
    rprs_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    bksf_pstn_cd: undefined;
    book_ttl: undefined;
    athr_nm: undefined;
    pblco_nm: undefined;
    book_rpt_cn: undefined;
    id: undefined;
    spce_id: undefined;
    expsr_yn: undefined;
    bbnd_colr_cd: "1";
    bbnd_indct_cn: undefined;
    rprs_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/** 서가 도서 목록 응답 DTO */
export const BookListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            athr_nm?: string | null | undefined;
            pblco_nm?: string | null | undefined;
            book_rpt_cn?: string | null | undefined;
            bbnd_indct_cn?: string | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            mdfcn_dt: Date;
            spce_id: number;
            book_ttl: string;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            bksf_pstn_cd: string;
            bbnd_colr_cd: string;
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
 * 도서 등록 DTO
 *
 * @property {string} bksf_pstn_cd - 위치 (BOOK_PSTN_CD, required)
 * @property {string} book_ttl - 책제목 (required)
 * @property {string|null} athr_nm - 작가명 (optional)
 * @property {string|null} pblco_nm - 출판사명 (optional)
 * @property {string|null} book_rpt_cn - 책 소개 (optional)
 * @property {string|null} img_file_url_addr - 표지이미지URL (optional)
 * @property {boolean} expsr_yn - 띠지 노출여부 (required)
 * @property {string} bbnd_colr_cd - 띠지색상코드 (required. default '1')
 * @property {string|null} bbnd_indct_cn - 띠지표시내용 (nullable)
 */
export const BookCreate: import("yup").ObjectSchema<{
    bksf_pstn_cd: string;
    book_ttl: string;
    athr_nm: string | null | undefined;
    pblco_nm: string | null | undefined;
    book_rpt_cn: string | null | undefined;
    img_file_url_addr: string | null | undefined;
    expsr_yn: NonNullable<boolean | undefined>;
    bbnd_colr_cd: string;
    bbnd_indct_cn: string | null | undefined;
}, import("yup").AnyObject, {
    bksf_pstn_cd: undefined;
    book_ttl: undefined;
    athr_nm: undefined;
    pblco_nm: undefined;
    book_rpt_cn: undefined;
    img_file_url_addr: undefined;
    expsr_yn: undefined;
    bbnd_colr_cd: "1";
    bbnd_indct_cn: undefined;
}, "">;
/**
 * 도서 등록 DTO
 *
 * @property {string} rprs_img_file_id - 대표이미지파일아이디. 표지이미지가 변경되지 않는 경우 원래 값을 그대로 전달해야 하고, 표지이미지가 변경되는 경우 0을 전달.
 * @property {string} img_file_url_addr - 표지이미지URL. 표지이미지를 변경하는 경우에만 값을 전달해야 함. 변경하지 않을 경우 null. (optional)
 */
export const BookUpdate: import("yup").ObjectSchema<{
    bksf_pstn_cd: string;
    book_ttl: string;
    athr_nm: string | null | undefined;
    pblco_nm: string | null | undefined;
    book_rpt_cn: string | null | undefined;
    img_file_url_addr: string | null | undefined;
    expsr_yn: NonNullable<boolean | undefined>;
    bbnd_colr_cd: string;
    bbnd_indct_cn: string | null | undefined;
    rprs_img_file_id: number | null | undefined;
}, import("yup").AnyObject, {
    bksf_pstn_cd: undefined;
    book_ttl: undefined;
    athr_nm: undefined;
    pblco_nm: undefined;
    book_rpt_cn: undefined;
    img_file_url_addr: undefined;
    expsr_yn: undefined;
    bbnd_colr_cd: "1";
    bbnd_indct_cn: undefined;
    rprs_img_file_id: undefined;
}, "">;
/**
 * 서재 꾸미기 정보 수정 DTO
 * @property {object} spce_bsc_stng_cn - 공간 기본 설정 내용(꾸미기 정보)
 */
export const BookshelfDecorationUpdate: import("yup").ObjectSchema<{
    spce_bsc_stng_cn: {} | null;
}, import("yup").AnyObject, {
    spce_bsc_stng_cn: {};
}, "">;
//# sourceMappingURL=book.d.ts.map