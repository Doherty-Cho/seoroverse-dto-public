"use strict";
require('../../common/yup_locale');
const { object, number, string, date, boolean, array } = require('yup');
const { SuccessListRes } = require('../../common/response');
/**
 * 채널 공통 항목
 * @property {string} spce_chnl_id - 공간채널아이디(게임아이디)
 * @property {number} spce_id - 공간아이디
 * @property {number} chnl_id - 채널아이디
 * @property {array} chnl_prtpnt_cn - 채널참여자
 * @property {boolean} ownr_cntn_yn - 소유자접속여부
 * @property {number} chnl_prtpnt_sum - 참여자합계
 */
const ChannelBase = object({
    /** 공간채널아이디(게임아이디) */
    spce_chnl_id: string().label('게임아이디').required(),
    /** 공간아이디 */
    spce_id: number().label('공간아이디').required(),
    /** 채널아이디 */
    chnl_id: number().label('채널아이디').required(),
    /** 채널참여자 */
    chnl_prtpnt_cn: array().of(object({
        /** 유저아이디 */
        id: number().integer().required(),
        /** 닉네임 */
        nickname: string().required(),
        /** 유저타입 */
        user_type: string().required(),
    })),
    /** 소유자접속여부 */
    ownr_cntn_yn: boolean().label('소유자접속여부').required().default(false),
    /** 참여자합계 */
    chnl_prtpnt_sum: number().label('참여자합계').required(),
});
/**
 * 채널 목록 DTO
 * @property {number} id - 아이디
 * @property {Date} crt_dt - 작성일시
 */
const ChannelList = ChannelBase.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * 채널 목록 결과 DTO
 */
const ChannelSearchRes = SuccessListRes(ChannelList);
module.exports = {
    ChannelSearchRes,
};
//# sourceMappingURL=channel.js.map