"use strict";
const { object, number, string, date, boolean } = require('yup');
const { PERIOD_UNIT, REG_TYPE } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
/**
 * Defines the base schema for statistics search requests.
 *
 * @property {string} unit - The period unit for the search, must be one of the values in the PERIOD_UNIT object.
 * @property {Date} start_day - The start date for the search, required.
 * @property {Date} end_day - The end date for the search, required. If the unit is time-based, this will be the same as the start_day.
 * @property {boolean} is_fixed_period - Indicates whether the start and end dates are fixed or can be adjusted based on the period unit, required. Defaults to true.
 */
const StatisticsSearchBase = object({
    /** 조회단위 */
    unit: string().oneOf(Object.values(PERIOD_UNIT)).required().default(PERIOD_UNIT.DAY),
    /** 시작일 */
    start_day: date().required(),
    /** 종료일 (단위가 시간이면 시작일과 같은 값) */
    end_day: date().required(),
    /**
     * 고정된 기간(시작일, 종료일) 여부.
     * false이면 시작일, 종료일을 조회단위에 따라 변경할 수 있음 */
    is_fixed_period: boolean().required().default(true),
});
/**
 * @description 회원 통계 요청 dto
 */
const MemberStatisticsSearch = StatisticsSearchBase.shape({
    /** 탈퇴여부 */
    is_withdrawal: boolean().label('탈퇴여부').required().default(false),
});
/**
 *  @description 포탈 접속 통계 요청 dto
 */
const PortalStatisticsSearch = StatisticsSearchBase;
/**
 *  @description 공간별 접속 통계 요청 dto
 */
const SpaceStatisticsSearch = StatisticsSearchBase.shape({
    /** 공간 ID */
    spce_id: number().label('공간id').positive().required(),
});
/**
 * @description 회원가입, 회원탈퇴 통계
 * @property {string} date - 날짜/시각
 * @property {string} reg_type_cd - 등록유형코드
 * @property {string} reg_type_nm - 등록유형명
 * @property {number} count - 회원수
 */
const MemberStatistics = object({
    /** date or time */
    date: string().label('날짜/시각').required(),
    /** 등록유형코드 */
    reg_type_cd: string().label('등록유형코드').oneOf(Object.values(REG_TYPE)).nullable(),
    /** 등록유형명 */
    reg_type_nm: string().label('등록유형명').nullable(),
    /** 회원수 */
    count: number().label('회원수').integer().required(),
});
/**
 * @description 포탈 접속 통계
 * @property {string} date - 날짜/시각
 * @property {number} count - 회원수
 */
const AccessStatistics = object({
    /** date or time */
    date: string().required(),
    /** 접속회원수 */
    count: number().integer().required(),
});
/** @description 회원 가입, 회원 탈퇴 통계 조회 요청 */
const MemberStatisticsReq = SearchListReq(MemberStatisticsSearch);
/** @description 회원 가입, 회원 탈퇴 통계 조회 결과 */
const MemberStatisticsRes = SuccessListRes(MemberStatistics);
/** @description 회원 가입, 회원 탈퇴 통계 조회 요청 */
const PortalStatisticsReq = SearchListReq(PortalStatisticsSearch);
/** @description 공간별 접속 통계 조회 요청 */
const SpaceStatisticsReq = SearchListReq(SpaceStatisticsSearch);
/** @description 접속 통계 조회 결과 */
const AccessStatisticsRes = SuccessListRes(AccessStatistics);
module.exports = {
    MemberStatisticsSearch,
    MemberStatisticsReq,
    MemberStatisticsRes,
    MemberStatistics,
    PortalStatisticsSearch,
    PortalStatisticsReq,
    SpaceStatisticsSearch,
    SpaceStatisticsReq,
    AccessStatisticsRes,
    AccessStatistics,
};
//# sourceMappingURL=statistics.js.map