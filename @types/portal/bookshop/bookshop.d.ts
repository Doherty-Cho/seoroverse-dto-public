/**
 * 지역서점 수정 DTO
 *
 * @property {string} lib_nm - 서점 이름. Required.
 * @property {string} spce_otln_cn - 서점 한 줄 소개글. Required.
 * @property {string} lib_expln - 서점 소개글. Required.
 * @property {string} lib_addr - 서점 주소. Optional.
 * @property {string} oper_info_cn - 서점 운영시간. Optional.
 * @property {string} lib_telno - 서점 연락처. Optional.
 * @property {string} site_url_addr - 서점 채널 주소. Optional.
 * @property {number} rprs_img_file_id - 지역서점 대표 이미지. required.
 * @property {array} img_files - 지역서점 이미지 파일 아이디 배열. required.
 */
export const BookshopUpdate: import("yup").ObjectSchema<{
    lib_nm: string;
    spce_otln_cn: string;
    lib_expln: string;
    lib_addr: string | null | undefined;
    oper_info_cn: string | null | undefined;
    lib_telno: string | null | undefined;
    site_url_addr: string | null | undefined;
    rprs_img_file_id: number;
    img_files: (number | undefined)[];
}, import("yup").AnyObject, {
    lib_nm: undefined;
    spce_otln_cn: undefined;
    lib_expln: undefined;
    lib_addr: undefined;
    oper_info_cn: undefined;
    lib_telno: undefined;
    site_url_addr: undefined;
    rprs_img_file_id: undefined;
    img_files: undefined;
}, "">;
//# sourceMappingURL=bookshop.d.ts.map