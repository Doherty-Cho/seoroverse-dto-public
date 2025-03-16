"use strict";
require('../../common/yup_locale');
const { object, number, string, boolean } = require('yup');
const { QST_STTS_CD } = require('../../common/code');
const { SuccessListRes } = require('../../common/response');
/**
 * @typedef 퀘스트 히스토리 base DTO
 * @property {number} user_id - 사용자 ID
 * @property {string} qst_ymd - 퀘스트 일자
 * @property {number} qst_id - 퀘스트 아이디
 * @property {number} rld_qst_id - 퀘스트 새로고침 아이디
 * @property {string} qst_stts_cd - 퀘스트 상태 코드
 */
const DailyQuestHistory = object({
    /** 사용자 ID */
    user_id: number().label('작성자 ID').nullable(),
    /** 퀘스트 일자 */
    qst_ymd: string().label('퀘스트 일자').max(8).required(),
    /** 퀘스트 아이디 */
    qst_id: number().label('퀘스트 ID').required(),
    /** 퀘스트 새로고침 아이디 */
    rld_qst_id: number().label('퀘스트 새로고침 ID').nullable(),
    /** 퀘스트 상태 코드 */
    qst_stts_cd: string().label('퀘스트 상태 코드').required().oneOf(Object.values(QST_STTS_CD)),
});
/**
 * @typedef 퀘스트 히스토리 등록 DTO
 */
const DailyQuestHistoryCreate = DailyQuestHistory;
/**
 * @typedef 퀘스트 히스토리 업데이트 DTO
 * @property {string} qst_stts_cd - 퀘스트 상태 코드
 */
const DailyQuestHistoryUpdate = object({
    /** 퀘스트 상태 코드 */
    qst_stts_cd: string().label('퀘스트 상태 코드').required().oneOf(Object.values(QST_STTS_CD)),
});
/**
 * @typedef 퀘스트 히스토리 새로고침 업데이트 DTO
 * @property {number} rld_qst_id - 퀘스트 새로고침 아이디
 */
const DailyQuestReloadHistoryUpdate = object({
    /** 퀘스트 새로고침 아이디 */
    rld_qst_id: number().label('퀘스트 새로고침 ID').required(),
});
/**
 * @typedef 목록 DTO
 * @property {number} id - 아이디
 * @property {number} hstry_id - 히스토리 아이디
 * @property {number} rld_qst_id - 퀘스트 새로고침 아이디
 * @property {string} qst_ttl - 퀘스트 제목
 * @property {string} qst_cn - 퀘스트 내용
 * @property {number} bkfm_step_no - 북팜 단계 번호
 * @property {number} goal_artcl_cnt - 북팜 항목 수
 * @property {number} cmpn_bkmny_amt - 보상 책머니 금액
 * @property {string} qst_stts_cd - 퀘스트 상태 코드
 * @property {boolean} bkfm_yn - 북팜 여부
 * @property {boolean} fix_yn - 고정 여부
 */
const DailyQuestList = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 히스토리 아이디 */
    hstry_id: number().label('히스토리 아이디').nullable(),
    /** 퀘스트 새로고침 아이디 */
    rld_qst_id: number().label('퀘스트 새로고침 ID').nullable(),
    /** 퀘스트 제목 */
    qst_ttl: string().label('퀘스트 제목').max(40).nullable(),
    /** 퀘스트 내용 */
    qst_cn: string().label('퀘스트 내용').max(500).nullable(),
    /** 북팜 단계 번호 */
    bkfm_step_no: number().label('북팜 단계 번호').required().default(0),
    /** 목표 항목 수 */
    goal_artcl_cnt: number().label('목표 항목 수').required().default(1),
    /** 보상 책머니 금액 */
    cmpn_bkmny_amt: number().label('보상 책머니 금액').required().default(0),
    /** 퀘스트 상태 코드 */
    qst_stts_cd: string().label('퀘스트 상태 코드').nullable().oneOf(Object.values(QST_STTS_CD)),
    /** 북팜 여부 */
    bkfm_yn: boolean().label('북팜여부').required().default(false),
    /** 고정 여부 */
    fix_yn: boolean().label('고정여부').required().default(false),
});
/**
 *  @typedef 퀘스트 조회 결과 DTO
 */
const DailyQuestListRes = SuccessListRes(DailyQuestList);
module.exports = {
    DailyQuestHistory,
    DailyQuestList,
    DailyQuestHistoryCreate,
    DailyQuestHistoryUpdate,
    DailyQuestReloadHistoryUpdate,
    DailyQuestListRes,
};
//# sourceMappingURL=daily-quest.js.map