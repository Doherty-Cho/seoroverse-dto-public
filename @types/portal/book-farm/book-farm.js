"use strict";
require('../../common/yup_locale');
const { object, number, date, array } = require('yup');
const { SuccessObjectRes } = require('../../common/response');
const { DailyQuestHistory: dailyQuestHistory, DailyQuestList: dailyQuestList, } = require('../daily-quest/daily-quest');
/**
 * 북팜 히스토리 저장 DTO
 * @property {number} user_id - 사용자 ID
 * @property {Date} cmpn_rcv_dt - 퀘스트 일자
 */
const BookFarmHistoryCreate = object({
    /** 사용자 ID */
    user_id: number().label('작성자 ID').nullable(),
    /** 보상 수령일시 */
    cmpn_rcv_dt: date().label('작성일시').required(),
});
/**
 * 북팜 상세 DTO
 * @property {DailyQuestList} next_step_need - 다음 스텝까지 필요 완료 퀘스트
 * @property {DailyQuestList} prgr_stts - 진행상태
 * @property {DailyQuestHistory} thmb_file - 퀘스트이력
 */
const BookFarmProgressStatus = object({
    next_step_need: number().label('다음 스텝까지 필요 완료 퀘스트').required(),
    /** 진행상태 */
    prgr_stts: dailyQuestList.label('진행상태').required(),
    /** 퀘스트 이력 */
    qst_hstry: array(dailyQuestHistory).label('퀘스트 이력').nullable(),
});
/**
 *  북팜 상태조회 결과 DTO
 */
const BookFarmProgressStatusRes = SuccessObjectRes(BookFarmProgressStatus);
module.exports = {
    BookFarmHistoryCreate,
    BookFarmProgressStatusRes,
};
//# sourceMappingURL=book-farm.js.map