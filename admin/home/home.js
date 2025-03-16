const { object, number, string } = require('yup')
const { SuccessObjectRes } = require('../../common/response')
const { SuccessListRes } = require('../../common/response')

/**
 * @description Home 포탈 접속 통계
 * @property {number} yesterday - 어제 접속자 수
 * @property {number} week - 이번주 접속자 수
 * @property {number} month - 이번달 접속자 수
 * @property {number} last_month - 저번달 접속자 수
 */
const HomeAccessStatistics = object({
  /** 어제 접속자 수 */
  yesterday: number().integer().required(),
  /** 이번주 접속자 수 */
  week: number().integer().required(),
  /** 이번달 접속자 수 */
  month: number().integer().required(),
  /** 저번달 접속자 수 */
  last_month: number().integer().required(),
})

/**
 * @description Home 회원 통계
 * @property {number} total - 총 회원 수
 * @property {number} new_join - 신규 가입자 수
 * @property {number} whdwl - 탈퇴 회원 수
 */
const HomeMemberStatistics = object({
  /** 총 회원 수 */
  total: number().integer().required(),
  /** 신규 가입자 수 */
  new_join: number().integer().required(),
  /** 탈퇴 회원 수 */
  whdwl: number().integer().required(),
})

/**
 * @description Home 릴레이 창작전 통계
 * @property {string} date - 날짜
 * @property {number} creation - 창작물 수
 * @property {number} comment - 댓글 수
 * @property {number} report - 신고 수
 */
const HomeRelayCreationStatistics = object({
  /** 날짜 */
  date: string().required(),
  /** 창작물 수 */
  creation: number().integer().required(),
  /** 댓글 수 */
  comment: number().integer().required(),
  /** 신고 수 */
  report: number().integer().required(),
})

/** @description 접속 통계 조회 결과 */
const HomeAccessStatisticsRes = SuccessObjectRes(HomeAccessStatistics)

/** @description 회원 통계 조회 결과 */
const HomeMemberStatisticsRes = SuccessObjectRes(HomeMemberStatistics)

/** @description 릴레이 창작전 조회 결과 */
const HomeRelayCreationStatisticsRes = SuccessListRes(HomeRelayCreationStatistics)

module.exports = {
  HomeAccessStatisticsRes,
  HomeMemberStatisticsRes,
  HomeRelayCreationStatisticsRes,
}
