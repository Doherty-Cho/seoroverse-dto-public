"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean } = require('yup');
const { FileBase: file } = require('../../common/file');
const { SuccessListRes } = require('../../common/response');
/**
 * 친구 목록 DTO
 *
 * @property {number} id - 아이디
 * @property {number} frnd_id - 친구 사용자아이디
 * @property {string} nckn_nm - 친구 닉네임
 * @property {File} prfl_img_file - 친구 프로필이미지
 * @property {Date} crt_dt - 친구 추가일시
 */
const FriendList = object({
    /** id */
    id: number().required(),
    /** 친구 사용자아이디 */
    frnd_id: number().label('친구 아이디').required(),
    /** 닉네임 */
    nckn_nm: string().required(),
    /** 프로필 이미지 */
    prfl_img_file: file.label('프로필이미지').nullable(),
    /** 친구 추가일시 */
    crt_dt: date().label('친구 추가일시').required(),
});
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
const FriendApplyList = object({
    /** 신청 id */
    id: number().required(),
    /** 내 신청 여부 */
    my_aply_yn: boolean().label('내 신청 여부').nullable(),
    /** 신청대상자 사용자아이디 */
    user_id: number().label('사용자아이디').required(),
    /** 신청대상자 닉네임 */
    nckn_nm: string().required(),
    /** 신청대상자 프로필 이미지 */
    prfl_img_file: file.label('프로필이미지').nullable(),
    /** 등록일시 */
    crt_dt: date().label('등록일시').required(),
});
/**
 * 친구신청 DTO.
 *
 * @property {number} target_user_id - 친구신청 대상 사용자아이디
 */
const FriendRequest = object({
    /** frnd_id */
    target_user_id: number().label('친구신청 대상 사용자아이디').required(),
});
/**
 * 공간초대 DTO
 *
 * @property {number} frnd_id - 초대할 친구 사용자아이디
 * @property {number} spce_id - 초대할 공간 아이디
 */
const SpaceInvitation = object({
    /** 친구 사용자아이디 */
    frnd_id: number().label('친구 사용자아이디').required(),
    /** 공간아이디 */
    spce_id: number().label('공간아이디').required(),
});
/**
 * 친구 목록조회 응답 DTO
 */
const FriendListRes = SuccessListRes(FriendList);
/**
 * 친구 신청 목록조회 응답 DTO
 */
const FriendApplyListRes = SuccessListRes(FriendApplyList);
module.exports = {
    FriendList,
    FriendApplyList,
    FriendListRes,
    FriendApplyListRes,
    FriendRequest,
    SpaceInvitation,
};
//# sourceMappingURL=friend.js.map