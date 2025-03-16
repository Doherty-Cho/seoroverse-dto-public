/**
 * 파일 공통 항목
 * @property {number} id - 파일id
 * @property {string} orgnl_file_nm - 원본파일명
 * @property {string} file_url_addr - 파일URL주소
 * @property {string} thmb_url_addr - 썸네일URL주소
 */
export const FileBase: import("yup").ObjectSchema<{
    id: number;
    orgnl_file_nm: string;
    file_url_addr: string;
    thmb_url_addr: string | null | undefined;
}, import("yup").AnyObject, {
    id: undefined;
    orgnl_file_nm: undefined;
    file_url_addr: undefined;
    thmb_url_addr: undefined;
}, "">;
/**
 * @description 파일 정보
 * @property {number} file_sz - 파일크기
 */
export const FileInfo: import("yup").ObjectSchema<{
    id: number;
    orgnl_file_nm: string;
    file_url_addr: string;
    thmb_url_addr: string | null | undefined;
    file_sz: number;
}, import("yup").AnyObject, {
    id: undefined;
    orgnl_file_nm: undefined;
    file_url_addr: undefined;
    thmb_url_addr: undefined;
    file_sz: undefined;
}, "">;
/**
 * @descrption 파일 상세정보 DTO
 * @property {number} id - 파일id
 * @property {string} file_url_addr - 파일URL주소
 * @property {string} thmb_url_addr - 썸네일URL주소
 * @property {string} orgnl_file_nm - 원본파일명
 * @property {string} file_type_nm - 파일유형
 * @property {number} file_sz - 파일크기
 * @property {boolean} encd_yn - 인코딩여부
 * @property {string} vdo_encd_err_log_cn - 동영상인코딩오류로그
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
export const FileDetail: import("yup").ObjectSchema<{
    id: number;
    file_url_addr: string;
    thmb_url_addr: string | null | undefined;
    orgnl_file_nm: string;
    file_type_nm: string;
    file_sz: number;
    encd_yn: NonNullable<boolean | undefined>;
    vdo_encd_err_log_cn: string | null | undefined;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    file_url_addr: undefined;
    thmb_url_addr: undefined;
    orgnl_file_nm: undefined;
    file_type_nm: undefined;
    file_sz: undefined;
    encd_yn: false;
    vdo_encd_err_log_cn: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/**
 * @description 파일 등록 결과 DTO
 */
export const FileCreateResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        };
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @description 복수 파일 등록 결과 DTO
 */
export const FileMultipleCreateResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        files?: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        }[] | undefined;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @description 파일 상세조회 결과 DTO
 */
export const FileGetResponse: import("yup").ObjectSchema<{
    code: string;
    data: {
        file: {
            thmb_url_addr?: string | null | undefined;
            vdo_encd_err_log_cn?: string | null | undefined;
            id: number;
            crt_dt: Date;
            file_url_addr: string;
            file_sz: number;
            mdfcn_dt: Date;
            orgnl_file_nm: string;
            file_type_nm: string;
            encd_yn: NonNullable<boolean | undefined>;
        };
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=file.d.ts.map