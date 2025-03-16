/**
 * 도서관 검색 DTO
 * @property {Date} crt_dt - 작성일시
 */
export const LibrarySearch: import("yup").ObjectSchema<{
    spce_kep_id: number | null | undefined;
    rgn_cd: string;
    lib_type_cd: string;
    crt_dt: Date;
}, import("yup").AnyObject, {
    spce_kep_id: undefined;
    rgn_cd: undefined;
    lib_type_cd: undefined;
    crt_dt: undefined;
}, "">;
/**
 * 도서관 목록 DTO
 * @property {number} id - 아이디
 * @property {string} lib_nm - 도서관명
 * @property {string} spce_otln_cn - 도서관 소개 텍스트
 * @property {Date} crt_dt - 작성일시
 * @property {string} lib_addr - 도서관 주소
 * @property {string} oper_info_cn - 운영정보 내용
 * @property {string} lib_telno - 도서관 전화번호
 * @property {string} site_url_addr - 사이트 URL 주소
 * @property {number} rprs_img_file_id - 대표 이미지 파일 아이디
 * @property {FileBase} rprs_img_file - 대표이미지
 * @property {string} lib_expln - 도서관 설명
 * @property {number} spce_id - 공간아이디
 */
export const LibraryList: import("yup").ObjectSchema<{
    spce_kep_id: number | null | undefined;
    rgn_cd: string;
    lib_type_cd: string;
    id: number;
    lib_nm: string;
    spce_otln_cn: string | undefined;
    crt_dt: Date;
    lib_addr: string | null | undefined;
    oper_info_cn: string | null | undefined;
    lib_telno: string | null | undefined;
    site_url_addr: string | null | undefined;
    rprs_img_file_id: number | null | undefined;
    rprs_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
    lib_expln: string | null | undefined;
    spce_id: number | null | undefined;
}, import("yup").AnyObject, {
    spce_kep_id: undefined;
    rgn_cd: undefined;
    lib_type_cd: undefined;
    id: undefined;
    lib_nm: undefined;
    spce_otln_cn: undefined;
    crt_dt: undefined;
    lib_addr: undefined;
    oper_info_cn: undefined;
    lib_telno: undefined;
    site_url_addr: undefined;
    rprs_img_file_id: undefined;
    rprs_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
    lib_expln: undefined;
    spce_id: undefined;
}, "">;
/**
 * 도서관 상세 DTO
 * @property {Array<FileBase>} img_files - 상세 이미지 리스트
 */
export const LibraryDetail: import("yup").ObjectSchema<{
    spce_kep_id: number | null | undefined;
    rgn_cd: string;
    lib_type_cd: string;
    id: number;
    lib_nm: string;
    spce_otln_cn: string | undefined;
    crt_dt: Date;
    lib_addr: string | null | undefined;
    oper_info_cn: string | null | undefined;
    lib_telno: string | null | undefined;
    site_url_addr: string | null | undefined;
    rprs_img_file_id: number | null | undefined;
    rprs_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
    lib_expln: string | null | undefined;
    spce_id: number | null | undefined;
    img_files: ({
        thmb_url_addr?: string | null | undefined;
        indct_seq?: number | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null)[] | null | undefined;
}, import("yup").AnyObject, {
    spce_kep_id: undefined;
    rgn_cd: undefined;
    lib_type_cd: undefined;
    id: undefined;
    lib_nm: undefined;
    spce_otln_cn: undefined;
    crt_dt: undefined;
    lib_addr: undefined;
    oper_info_cn: undefined;
    lib_telno: undefined;
    site_url_addr: undefined;
    rprs_img_file_id: undefined;
    rprs_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
    lib_expln: undefined;
    spce_id: undefined;
    img_files: undefined;
}, "">;
/**
 * 도서관 검색 요청 DTO
 */
export const LibrarySearchReq: import("yup").ObjectSchema<{
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
 * 도서관 검색 결과 DTO
 */
export const LibrarySearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            spce_id?: number | null | undefined;
            rprs_img_file_id?: number | null | undefined;
            spce_kep_id?: number | null | undefined;
            spce_otln_cn?: string | undefined;
            lib_addr?: string | null | undefined;
            oper_info_cn?: string | null | undefined;
            lib_telno?: string | null | undefined;
            site_url_addr?: string | null | undefined;
            lib_expln?: string | null | undefined;
            id: number;
            crt_dt: Date;
            rgn_cd: string;
            lib_type_cd: string;
            lib_nm: string;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
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
 *  도서관 상세조회 결과 DTO
 */
export const LibraryDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        spce_id?: number | null | undefined;
        rprs_img_file_id?: number | null | undefined;
        spce_kep_id?: number | null | undefined;
        spce_otln_cn?: string | undefined;
        lib_addr?: string | null | undefined;
        oper_info_cn?: string | null | undefined;
        lib_telno?: string | null | undefined;
        site_url_addr?: string | null | undefined;
        lib_expln?: string | null | undefined;
        img_files?: ({
            thmb_url_addr?: string | null | undefined;
            indct_seq?: number | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null)[] | null | undefined;
        id: number;
        crt_dt: Date;
        rgn_cd: string;
        lib_type_cd: string;
        lib_nm: string;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=library.d.ts.map