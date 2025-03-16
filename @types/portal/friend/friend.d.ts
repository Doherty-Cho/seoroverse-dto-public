/**
 * 친구 신청 목록 DTO
 */
export type FriendApplyList = {
    /**
     * - 신청 id
     */
    id: number;
    /**
     * - 내 신청 여부
     */
    my_aply_yn: boolean;
    /**
     * - 신청대상자 사용자아이디.
     */
    user_id: number;
    /**
     * - 신청대상자 닉네임
     */
    nckn_nm: string;
    /**
     * - 신청대상자 프로필이미지
     */
    prfl_img_file: File;
    /**
     * - 신청등록일시
     */
    crt_dt: Date;
};
/**
 * 친구 목록 DTO
 *
 * @property {number} id - 아이디
 * @property {number} frnd_id - 친구 사용자아이디
 * @property {string} nckn_nm - 친구 닉네임
 * @property {File} prfl_img_file - 친구 프로필이미지
 * @property {Date} crt_dt - 친구 추가일시
 */
export const FriendList: import("yup").ObjectSchema<{
    id: number;
    frnd_id: number;
    nckn_nm: string;
    prfl_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
    crt_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    frnd_id: undefined;
    nckn_nm: undefined;
    prfl_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
    crt_dt: undefined;
}, "">;
/**
 * 친구 신청 목록 DTO
 *
 * @typedef {Object} FriendApplyList
 * @property {number} id - 신청 id
 * @property {boolean} my_aply_yn - 내 신청 여부
 * @property {number} user_id - 신청대상자 사용자아이디.
 * @property {string} nckn_nm - 신청대상자 닉네임
 * @property {File} prfl_img_file - 신청대상자 프로필이미지
 * @property {Date} crt_dt - 신청등록일시
 */
export const FriendApplyList: import("yup").ObjectSchema<{
    id: number;
    my_aply_yn: boolean | null | undefined;
    user_id: number;
    nckn_nm: string;
    prfl_img_file: {
        thmb_url_addr?: string | null | undefined;
        id: number;
        file_url_addr: string;
        orgnl_file_nm: string;
    } | null;
    crt_dt: Date;
}, import("yup").AnyObject, {
    id: undefined;
    my_aply_yn: undefined;
    user_id: undefined;
    nckn_nm: undefined;
    prfl_img_file: {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    };
    crt_dt: undefined;
}, "">;
/**
 * 친구 목록조회 응답 DTO
 */
export const FriendListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            id: number;
            crt_dt: Date;
            nckn_nm: string;
            prfl_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            frnd_id: number;
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
 * 친구 신청 목록조회 응답 DTO
 */
export const FriendApplyListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            my_aply_yn?: boolean | null | undefined;
            id: number;
            crt_dt: Date;
            nckn_nm: string;
            user_id: number;
            prfl_img_file: {
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
 * 친구신청 DTO.
 *
 * @property {number} target_user_id - 친구신청 대상 사용자아이디
 */
export const FriendRequest: import("yup").ObjectSchema<{
    target_user_id: number;
}, import("yup").AnyObject, {
    target_user_id: undefined;
}, "">;
/**
 * 공간초대 DTO
 *
 * @property {number} frnd_id - 초대할 친구 사용자아이디
 * @property {number} spce_id - 초대할 공간 아이디
 */
export const SpaceInvitation: import("yup").ObjectSchema<{
    frnd_id: number;
    spce_id: number;
}, import("yup").AnyObject, {
    frnd_id: undefined;
    spce_id: undefined;
}, "">;
//# sourceMappingURL=friend.d.ts.map