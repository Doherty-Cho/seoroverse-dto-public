"use strict";
require('../../common/yup_locale');
const { object, number, string, date } = require('yup');
const { NTFC_TYPE, NTFC_TYPE_DTL } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
/**
 * 알림 목록조회 DTO
 * @property {string|null} ntfc_type_cd - 알림유형코드. Optional
 * @property {date} start_day - 알림자료 시작일. Required
 * @property {date} end_day - 알림자료 종료일. Required
 */
const NotificationSearch = object({
    /** 알림유형코드 */
    ntfc_type_cd: string().label('알림유형코드').oneOf(Object.values(NTFC_TYPE)).nullable(),
    /** 시작일 */
    start_day: date().label('시작일').required(),
    /** 종료일 */
    end_day: date().label('종료일').sameOrAfter('start_day').required(),
});
/**
 * 알림 등록 DTO
 * @property {number} rcvr_id - 수신자아이디. 필수항목
 * @property {number} sndpty_id - 발신자아이디. Optional
 * @property {string} ntfc_type_cd - 알림유형코드(NTFC_TYPE). 필수항목
 * @property {string} ntfc_type_dtl_cd - 알림유형상세코드(NTFC_TYPE_DTL). 필수항목
 * @property {string} ntfc_ttl - 알림제목. 필수항목
 * @property {string} ntfc_cn - 알림내용. 필수항목
 */
const NotificationCreate = object({
    /** 수신자아이디 */
    rcvr_id: number().label('수신자아이디').required(),
    /** 발신자아이디 */
    sndpty_id: number().label('발신자아이디').nullable(),
    /** 알림유형코드 */
    ntfc_type_cd: string().label('알림유형코드').required().oneOf(Object.values(NTFC_TYPE)),
    /** 알림유형상세코드 */
    ntfc_type_dtl_cd: string()
        .label('알림유형상세코드')
        .required()
        .oneOf(Object.values(NTFC_TYPE_DTL)),
    /** 알림제목 */
    ntfc_ttl: string().label('알림제목').required(),
    /** 알림내용 */
    ntfc_cn: string().label('알림내용').required(),
});
/**
 * 알림 목록 DTO
 * @property {number} id - 아이디. 필수항목
 * @property {number|null} spce_id - 공간아이디.
 * @property {Date} crt_dt - 생성일시. 필수항목
 */
const NotificationList = NotificationCreate.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 공간아이디 */
    spce_id: number().label('공간아이디').nullable(),
    /** 생성일시 */
    crt_dt: date().label('생성일시').required(),
});
/**
 * 알림 목록조회 응답 DTO
 */
const NotificationSearchRes = SuccessListRes(NotificationList);
/**
 * 알림 검색 요청 DTO
 */
const NotificationSearchReq = SearchListReq(NotificationSearch);
module.exports = {
    NotificationSearch,
    NotificationSearchReq,
    NotificationCreate,
    NotificationList,
    NotificationSearchRes,
};
//# sourceMappingURL=notification.js.map