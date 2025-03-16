"use strict";
const { object, number, string, array } = require('yup');
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
const BookshopUpdate = object({
    /** 서점 이름 */
    lib_nm: string().label('서점 이름').required(),
    /** 서점 한 줄 소개글 */
    spce_otln_cn: string().label('서점 한 줄 소개글').required(),
    /** 서점 소개글 */
    lib_expln: string().label('서점 소개글').required(),
    /** 서점 주소 */
    lib_addr: string().label('서점 주소').nullable(),
    /** 서점 운영시간 */
    oper_info_cn: string().label('서점 운영시간').nullable(),
    /** 서점 연락처 */
    lib_telno: string().label('서점 연락처').nullable(),
    /** 서점 채널 주소 */
    site_url_addr: string().label('서점 채널 주소').nullable(),
    /** 지역서점 대표 이미지 */
    rprs_img_file_id: number().label('지역서점 대표 이미지').required(),
    /** 지역서점 이미지 목록 */
    img_files: array(number().integer()).label('지역서점 이미지 목록').required(),
});
module.exports = {
    BookshopUpdate,
};
//# sourceMappingURL=bookshop.js.map