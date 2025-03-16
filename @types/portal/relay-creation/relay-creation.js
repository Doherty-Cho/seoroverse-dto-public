"use strict";
require('../../common/yup_locale');
const { object, number, string, date, array, boolean } = require('yup');
const { DCLR_RSN_CD } = require('../../common/code');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
/**
 * 창작물 주제 상세 DTO
 * @property {number} id - 아이디
 * @property {string} pst_cn - 내용
 * @property {Date} pstg_bgng_dt - 게시시작일시
 * @property {Date} pstg_end_dt - 게시종료일시
 * @property {number} inq_cnt - 조회수
 * @property {Date} crt_dt - 등록일
 */
const RelayCreationSubjectDetail = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 주제 */
    pst_cn: string().label('내용').max(4000).required(),
    /** 게시시작일 */
    pstg_bgng_dt: date().label('게시시작 일시').nullable(),
    /** 게시종료일 */
    pstg_end_dt: date().label('게시종료 일시').nullable(),
    /** 댓글 수 */
    cmnt_cnt: number().label('댓글수').required().default(0),
    /** 작성일시 */
    crt_dt: date().label('작성일시').required(),
});
/**
 * 릴레이 창작전 창작물 공통 항목
 * @property {number} rly_ctex_id - 주제 아이디
 * @property {number} up_pst_id - 상위 게시물 아이디
 * @property {number} wrtr_id - 작성자 아이디
 * @property {string} pst_cn - 게시물 내용
 */
const RelayCreationBase = object({
    /** 주제 아이디 */
    rly_ctex_id: number().label('주제아이디').required(),
    /** 상위 게시물 아이디 */
    up_pst_id: number().label('상위 게시물 아이디').nullable(),
    /** 작성자 아이디 */
    wrtr_id: number().label('작성자 ID').nullable(),
    /** 게시물 내용 */
    pst_cn: string().label('내용').max(4000).required(),
});
/**
 * 창작물 검색 DTO
 * @property {number} rly_ctex_id - 주제 아이디
 */
const RelayCreationSearch = object({
    /** 주제 아이디 */
    rly_ctex_id: number().label('주제 ID').required(),
});
/**
 * 창작물 등록 DTO
 */
const RelayCreationCreate = RelayCreationBase;
/**
 * 댓글 등록 DTO
 *  @property {number} up_pst_id - 상위 게시물 아이디
 */
const RelayCommentCreate = RelayCreationBase.shape({
    /** 상위 게시물 아이디 */
    up_pst_id: number().label('상위 게시물 아이디').required(),
});
/**
 * 창작물 리스트 DTO
 * @property {number} id - 창작물 아이디
 * @property {Date} crt_dt - 작성일시
 * @property {string | null | undefined} nckn_nm - 작성자 닉네임
 * @property {FileBase | null} prfl_img_file - 사용자 프로필 파일
 * @property {boolean} dclr_yn - 신고여부
 */
const RelayCreationList = RelayCreationBase.shape({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 작성 일시 */
    crt_dt: date().label('생성일시').required(),
    /** 작성자 닉네임 */
    nckn_nm: string().label('닉네임').nullable(),
    /** 사용자 프로필 파일 */
    prfl_img_file: file.label('사용자 프로필 파일').nullable(),
    /** 신고여부 */
    dclr_yn: boolean().label('신고여부').required().default(false),
});
/**
 * 코멘트 리스트 DTO
 * @property {number} id - 창작물 아이디
 * @property {Date} crt_dt - 작성일시
 * @property {string | null | undefined} nckn_nm - 작성자 닉네임
 * @property {FileBase | null} prfl_img_file - 사용자 프로필 파일
 */
const RelayCommnetList = object({
    /** 아이디 */
    comment: array(RelayCreationList),
});
/**
 * 신고 등록 DTO
 * @property {number} dclr_cmnt_id - 창작물/댓글 아이디
 * @property {string} dclr_rsn_cd - 신고사유코드
 */
const ReportCreate = object({
    /** 댓글아이디 */
    dclr_cmnt_id: number().label('댓글아이디').required(),
    /** 신고사유코드 그룹코드: DCLR_RSN_CD */
    dclr_rsn_cd: string().label('신고사유 코드').required().oneOf(Object.values(DCLR_RSN_CD)),
});
/** 주제 상세조회 결과 DTO */
const RelayCreationSubjectDetailRes = SuccessObjectRes(RelayCreationSubjectDetail);
/** 창작물 검색 요청 DTO */
const RelayCreationSearchReq = SearchListReq(RelayCreationSearch);
/** 창작물 검색 결과 DTO */
const RelayCreationSearchRes = SuccessListRes(RelayCreationList);
/** 댓글 검색 결과 DTO */
const RelayCommentListRes = SuccessObjectRes(RelayCommnetList);
module.exports = {
    RelayCreationSubjectDetailRes,
    RelayCreationSearchReq,
    RelayCreationSearchRes,
    RelayCreationCreate,
    RelayCommentCreate,
    ReportCreate,
    RelayCommentListRes,
};
//# sourceMappingURL=relay-creation.js.map