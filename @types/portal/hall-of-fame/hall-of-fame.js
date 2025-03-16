"use strict";
require('../../common/yup_locale');
const { string, object, number, date, boolean, array } = require('yup');
const { SuccessObjectRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
const { nckn_nm: nickNm } = require('../../common/field');
/**
 * 명예의 전당 공통 항목
 * @property {string} hof_se - 명예의 전당 구분
 * @property {number} rank - 랭킹
 * @property {number} user_id - 사용자 아이디
 * @property {string} nckn_nm - 사용자 닉네임
 * @property {FileBase} prfl_img_file - 썸네일파일
 * @property {boolean} engh_quiz_yn - 영어퀴즈 여부
 * @property {number} quiz_scr - 퀴즈 점수
 * @property {number} play_scr - 플레이 카운트
 * @property {Date} last_dt - 마지막 접속일
 */
const HallOfFame = object({
    /** 명예의 전당 구분 */
    hof_se: string().label('명예의 전당 구분').required(),
    /** 랭킹 */
    rank: number().label('랭킹').required(),
    /** 사용자 아이디 */
    user_id: number().label('사용자아이디').required(),
    /** 사용자 닉네임 */
    nckn_nm: nickNm,
    /** 사용자 프로필 파일 */
    prfl_img_file: file.label('사용자 프로필 파일').nullable(),
    /** 영어퀴즈 여부 */
    engh_quiz_yn: boolean().label('영어퀴즈여부').required().default(true),
    /** 퀴즈 점수 */
    quiz_scr: number().label('퀴즈 점수').nullable(),
    /** 플레이 카운트 */
    play_cnt: number().label('플레이 카운트').nullable(),
    /** 마지막 접속일 */
    last_dt: date().label('마지막 접속일').required(),
});
/**
 * 명예의 전당 결과 DTO
 * @property {HallOfFame} quiz_scr - 점수
 * @property {HallOfFame} play_cnt - 플레이수
 */
const HallOfFameList = object({
    quiz_scr: array(HallOfFame),
    play_cnt: array(HallOfFame),
});
const HallOfFameRes = SuccessObjectRes(HallOfFameList);
module.exports = {
    HallOfFameRes,
};
//# sourceMappingURL=hall-of-fame.js.map