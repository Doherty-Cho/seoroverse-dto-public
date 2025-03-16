/**
 * 공통 항목
 */
export type 한권의책 = {
    /**
     * - 기준연도
     */
    crtr_yr: string;
    /**
     * - 책제목
     */
    book_ttl: string;
    /**
     * - 작가명
     */
    athr_nm: string;
    /**
     * - 출판사명
     */
    pblco_nm: string | null | undefined;
    /**
     * - 노출여부
     */
    expsr_yn: boolean;
};
/**
 * @typedef 한권의책 등록 DTO
 * @property {string} book_rpt_cn - 책 소개
 * @property {number | null | undefined} intv_vdo_file_id - 인터뷰동영상파일아이디
 * @property {number} rprs_img_file_id - 대표이미지파일아이디
 * @property {date} reg_dt - 등록일시
 * @property {Date} crt_dt - 작성일시
 */
export const OneBookCreate: import("yup").ObjectSchema<{
    crtr_yr: string;
    book_ttl: string;
    athr_nm: string;
    pblco_nm: string | null | undefined;
    expsr_yn: NonNullable<boolean | undefined>;
    book_rpt_cn: string;
    intv_vdo_file_id: import("yup").Maybe<number | undefined>;
    rprs_img_file_id: number;
    reg_dt: Date | null | undefined;
    crt_dt: Date | null | undefined;
}, import("yup").AnyObject, {
    crtr_yr: string;
    book_ttl: undefined;
    athr_nm: undefined;
    pblco_nm: undefined;
    expsr_yn: import("yup").Maybe<NonNullable<boolean | undefined>>;
    book_rpt_cn: undefined;
    intv_vdo_file_id: undefined;
    rprs_img_file_id: undefined;
    reg_dt: undefined;
    crt_dt: undefined;
}, "">;
/** @typedef 한권의책 수정 DTO */
export const OneBookUpdate: import("yup").ObjectSchema<{
    crtr_yr: string;
    book_ttl: string;
    athr_nm: string;
    pblco_nm: string | null | undefined;
    expsr_yn: NonNullable<boolean | undefined>;
    book_rpt_cn: string;
    intv_vdo_file_id: import("yup").Maybe<number | undefined>;
    rprs_img_file_id: number;
    reg_dt: Date | null | undefined;
    crt_dt: Date | null | undefined;
}, import("yup").AnyObject, {
    crtr_yr: string;
    book_ttl: undefined;
    athr_nm: undefined;
    pblco_nm: undefined;
    expsr_yn: import("yup").Maybe<NonNullable<boolean | undefined>>;
    book_rpt_cn: undefined;
    intv_vdo_file_id: undefined;
    rprs_img_file_id: undefined;
    reg_dt: undefined;
    crt_dt: undefined;
}, "">;
/** @typedef 한권의책 검색 요청 DTO */
export const OneBookSearchReq: import("yup").ObjectSchema<{
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
/** @typedef 한권의책 검색 결과 DTO */
export const OneBookSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            pblco_nm?: string | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            crtr_yr: string;
            book_ttl: string;
            athr_nm: string;
            rprs_img_file_id: number;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            };
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
/** @typedef 한권의책 상세조회 결과 DTO */
export const OneBookDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        pblco_nm?: string | null | undefined;
        intv_vdo_file_id?: number | null | undefined;
        id: number;
        expsr_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        crtr_yr: string;
        book_ttl: string;
        athr_nm: string;
        book_rpt_cn: string;
        rprs_img_file_id: number;
        intv_vdo_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        };
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=one-book.d.ts.map