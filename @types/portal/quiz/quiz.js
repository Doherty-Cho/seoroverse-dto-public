"use strict";
require('../../common/yup_locale');
const { string, object, number, date, boolean } = require('yup');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
/**
 * 퀴즈 공통 항목
 * @property {string} rbc_cn - 지시문 내용
 * @property {boolean} engh_quiz_yn - 영어퀴즈 여부
 * @property {string} quiz_cn - 퀴즈 내용
 * @property {string} quiz_itpt_cn - 퀴즈 해석 내용
 * @property {string} exmp_A_cn - 예시A 내용
 * @property {string} exmp_B_cn - 예시B 내용
 * @property {string} anw_cn - 답안 내용
 * @property {string} anw_itpt_cn - 답안해석 내용
 */
const Quiz = object({
    /** 지시문내용 */
    rbc_cn: string().label('지시문내용').max(500).nullable(),
    /** 영어퀴즈 여부 */
    engh_quiz_yn: boolean().label('영어퀴즈여부').required().default(true),
    /** 퀴즈내용 */
    quiz_cn: string().label('퀴즈내용').max(500).nullable(),
    /** 퀴즈해석내용 */
    quiz_itpt_cn: string().label('퀴즈해석내용').max(50).nullable(),
    /** 예시A내용 */
    exmp_A_cn: string().label('예시A 내용').max(50).required(),
    /** 예시B내용 */
    exmp_B_cn: string().label('예시B 내용').max(50).nullable(),
    /** 답안 내용 */
    anw_cn: string().label('답안 내용').max(50).required(),
    /** 답안해석 내용 */
    anw_itpt_cn: string().label('답안 해석 내용').max(50).nullable(),
});
/**
 * 퀴즈 검색 DTO
 * @property {boolean} engh_quiz_yn - 영어퀴즈 여부
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
const QuizSearch = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 영어퀴즈 여부 */
    engh_quiz_yn: boolean().label('영어퀴즈여부').required().default(true),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * 퀴즈 목록 DTO
 *  @property {number} id - 아이디
 *  @property {Date} crt_dt - 작성일시
 */
const QuizList = Quiz.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * 퀴즈 히스토리 등록 DTO
 * @property {number} user_id - 사용자 아이디
 * @property {Date} reg_dt - 등록일
 * @property {boolean} engh_quiz_yn - 영어퀴즈 여부
 * @property {number} quiz_sc - 점수
 */
const QuizHistoryCreate = object({
    /** 사용자 아이디 */
    user_id: number().label('사용자 아이디').required(),
    /** 등록일시 */
    reg_dt: date().label('등록일시').required(),
    /** 영어퀴즈여부 */
    engh_quiz_yn: boolean().label('영어퀴즈여부').required().default(true),
    /** 점수 */
    quiz_scr: number().label('점수').required(),
});
/**
 * 퀴즈 검색 요청 DTO
 */
const QuizSearchReq = SearchListReq(QuizSearch);
/**
 * 퀴즈 검색 결과 DTO
 */
const QuizSearchRes = SuccessListRes(QuizList);
module.exports = {
    QuizSearchReq,
    QuizSearchRes,
    QuizHistoryCreate,
};
//# sourceMappingURL=quiz.js.map