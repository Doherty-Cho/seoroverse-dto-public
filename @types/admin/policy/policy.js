"use strict";
const { object, number, string, date, boolean, array } = require('yup');
const { POLICY_TYPE, TARGET_MEMBER } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
/**
 * 약관 정보 DTO
 * @property {string} type - 약관 종류
 * @property {string} target - 약관 대상
 * @property {string} title - 약관 제목
 * @property {string} content - 약관 내용
 * @property {number} is_mandatory - 필수여부
 * @property {number} is_active - 활성화여부
 * @property {Date} effective_at - 시행일시
 * @property {number} sequence - 순번
 * @property {number} created_admin_id - 작성 어드민 아이디
 * @property {number} updated_admin_id - 수정 어드민 아이디
 */
const PolicyInput = object({
    /** 약관 종류
     * cf. POLICY_TYPE code group */
    type: string().required().oneOf(Object.values(POLICY_TYPE)),
    /** 약관 대상
     * cf. TARGET_MEMBER code group */
    target: string().required().oneOf(Object.values(TARGET_MEMBER)),
    /** 약관 제목 */
    title: string().required().min(1),
    /** 약관 내용 */
    content: string().required().min(1),
    /** 필수여부 */
    is_mandatory: number().required().integer().oneOf([0, 1]).default(1),
    /** 활성화여부 */
    is_active: number().required().integer().oneOf([0, 1]).default(1),
    /** 시행일시 */
    effective_at: date().required(),
    /** 순번 */
    sequence: number().required().integer().default(1),
    /** 작성 어드민 아이디 */
    created_admin_id: number().required().integer().default(1),
    /** 수정 어드민 아이디 */
    updated_admin_id: number().required().integer().default(1),
});
/**
 * 약관 등록 DTO
 */
const PolicyCreate = PolicyInput.shape({});
/**
 * 약관 수정 DTO
 */
const PolicyUpdate = PolicyInput.shape({
    /** id of Policy */
    id: number().required().integer().positive().min(1),
});
/**
 * 약관 상세정보 DTO
 * @property {number} id - id of Policy
 * @property {string} type - 약관 종류
 * @property {string} target - 약관 대상
 * @property {string} title - 약관 제목
 * @property {string} content - 약관 내용
 * @property {number} is_mandatory - 필수여부
 * @property {number} is_active - 활성화여부
 * @property {Date} effective_at - 시행일시
 * @property {number} sequence - 순번
 * @property {number} created_admin_id - 작성 어드민 아이디
 * @property {string} created_admin_name - 작성 어드민 이름
 * @property {number} updated_admin_id - 수정 어드민 아이디
 * @property {string} updated_admin_name - 수정 어드민 이름
 * @property {Date} created_at - 생성일시
 * @property {Date} updated_at - 수정일시
 */
const PolicyDetail = object({
    /** id of Policy */
    id: number().required().integer().positive().min(1),
    /** 약관 종류
     * cf. POLICY_TYPE code group */
    type: string().required().oneOf(Object.values(POLICY_TYPE)),
    /** 약관 대상
     * cf. TARGET_MEMBER code group */
    target: string().required().oneOf(Object.values(TARGET_MEMBER)),
    /** 약관 제목 */
    title: string().required().min(1),
    /** 약관 내용 */
    content: string().required().min(1),
    /** 필수여부 */
    is_mandatory: number().required().integer().oneOf([0, 1]).default(1),
    /** 활성화여부 */
    is_active: number().required().integer().oneOf([0, 1]).default(1),
    /** 시행일시 */
    effective_at: date().required(),
    /** 순번 */
    sequence: number().required().integer().default(1),
    /** 작성 어드민 아이디 */
    created_admin_id: number().required().integer().default(1),
    /** 작성 어드민 이름 */
    created_admin_name: string(),
    /** 수정 어드민 아이디 */
    updated_admin_id: number().required().integer().default(1),
    /** 수정 어드민 이름 */
    updated_admin_name: string(),
    /** 생성일시 */
    created_at: date().nullable(),
    /** 수정일시 */
    updated_at: date().nullable(),
});
const PolicySearchListReq = SearchListReq(PolicyDetail);
const PolicySearchListRes = SuccessListRes(PolicyDetail);
const PolicySearchOneRes = SuccessObjectRes(PolicyDetail);
module.exports = {
    PolicyDetail,
    PolicyInput,
    PolicySearchListReq,
    PolicySearchListRes,
    PolicySearchOneRes,
};
//# sourceMappingURL=policy.js.map