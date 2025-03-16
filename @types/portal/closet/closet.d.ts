/**
 * 공통 항목
 */
export type 옷장 = {
    /**
     * - 아바타 대표 이미지 파일아이디. Required.
     */
    avtr_rprs_img_file_id: number;
    /**
     * - 프로필 이미지 파일아이디. Required.
     */
    prfl_img_file_id: number;
    /**
     * - 아바타상태메시지
     */
    avtr_stts_msg_cn: string;
    /**
     * - 사용자착용품목
     */
    user_wer_item_cn: string;
    /**
     * - 사용자소지품목
     */
    user_pss_item_cn: string;
};
/**
 * 옷장 상세 DTO
 * @property {number} id - 아이디
 * @property {string} user_id - 사용자ID
 * @property {number} avtr_rprs_img_file_id - 아바타 대표 이미지 파일아이디. Required.
 * @property {number} prfl_img_file_id - 프로필 이미지 파일아이디. Required.
 * @property {string} avtr_stts_msg_cn - 아바타상태메시지
 * @property {string} user_wer_item_cn - 사용자착용품목
 * @property {string} user_pss_item_cn - 사용자소지품목
 * @property {Date} crt_dt - 작성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
export const ClosetDetail: import("yup").ObjectSchema<{
    avtr_rprs_img_file_id: number;
    prfl_img_file_id: number;
    avtr_stts_msg_cn: string | null | undefined;
    user_wer_item_cn: {} | null;
    user_pss_item_cn: {} | null;
    id: number;
    user_id: string;
    crt_dt: Date;
    mdfcn_dt: Date;
}, import("yup").AnyObject, {
    avtr_rprs_img_file_id: undefined;
    prfl_img_file_id: undefined;
    avtr_stts_msg_cn: undefined;
    user_wer_item_cn: {};
    user_pss_item_cn: {};
    id: undefined;
    user_id: undefined;
    crt_dt: undefined;
    mdfcn_dt: undefined;
}, "">;
/**
 * @typedef 옷장 공통 항목
 * @property {number} avtr_rprs_img_file_id - 아바타 대표 이미지 파일아이디. Required.
 * @property {number} prfl_img_file_id - 프로필 이미지 파일아이디. Required.
 * @property {string} avtr_stts_msg_cn - 아바타상태메시지
 * @property {string} user_wer_item_cn - 사용자착용품목
 * @property {string} user_pss_item_cn - 사용자소지품목
 */
export const ClosetCreate: import("yup").ObjectSchema<{
    avtr_rprs_img_file_id: number;
    prfl_img_file_id: number;
    avtr_stts_msg_cn: string | null | undefined;
    user_wer_item_cn: {} | null;
    user_pss_item_cn: {} | null;
}, import("yup").AnyObject, {
    avtr_rprs_img_file_id: undefined;
    prfl_img_file_id: undefined;
    avtr_stts_msg_cn: undefined;
    user_wer_item_cn: {};
    user_pss_item_cn: {};
}, "">;
/**
 * 옷장 수정 DTO
 */
export const ClosetUpdate: import("yup").ObjectSchema<{
    avtr_rprs_img_file_id: number;
    prfl_img_file_id: number;
    avtr_stts_msg_cn: string | null | undefined;
    user_wer_item_cn: {} | null;
    user_pss_item_cn: {} | null;
}, import("yup").AnyObject, {
    avtr_rprs_img_file_id: undefined;
    prfl_img_file_id: undefined;
    avtr_stts_msg_cn: undefined;
    user_wer_item_cn: {};
    user_pss_item_cn: {};
}, "">;
/** 옷장 상세조회 결과 DTO */
export const ClosetDetailRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        avtr_stts_msg_cn?: string | null | undefined;
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
        user_id: string;
        user_wer_item_cn: {} | null;
        user_pss_item_cn: {} | null;
        avtr_rprs_img_file_id: number;
        prfl_img_file_id: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=closet.d.ts.map