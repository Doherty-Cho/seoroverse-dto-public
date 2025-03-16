"use strict";
const { object, number, string, date, boolean, array } = require('yup');
const { SearchListReq } = require('../../common/request');
const { SuccessListRes } = require('../../common/response');
const { SuccessObjectRes } = require('../../common/response');
const { FileBase: file } = require('../../common/file');
const { nckn_nm } = require('../../common/field');
const { REG_TYPE } = require('../../common/code');
/**
 * 회원(사용자) 검색
 * @property {string} reg_type_cd 가입유형(REG_TYPE)
 * @property {number} id 회원번호(id)
 * @property {string} eml_addr 이메일
 * @property {string} nckn_nm 닉네임
 * @property {date} crt_dt 가입날짜
 */
const UserSearch = object({
    /** 가입유형 */
    reg_type_cd: string().label('가입유형'),
    /** 회원번호(id) */
    id: number().label('회원번호'),
    /** 이메일 */
    eml_addr: string().label('이메일'),
    /** 닉네임 */
    nckn_nm: nckn_nm,
    /** 가입날짜 */
    crt_dt: date().label('가입날짜'),
});
/**
 * 사용자 공통 항목
 * @property {number} id 아이디
 * @property {string} mbl_telno 모바일전화번호
 * @property {string} bsc_reg_type_cd 기본등록유형코드
 * @property {string} nckn_nm 닉네임
 * @property {string} pet_nckn_nm 펫닉네임
 * @property {string} avtr_stts_msg_cn 아바타 상태 메시지
 * @property {FileBase} avtr_rprs_img_file 아바타 대표 이미지
 * @property {FileBase} prfl_img_file 프로필 이미지
 */
const UserBase = object({
    /** 아이디 */
    id: number().label('아이디').required(),
    /** 모바일전화번호 */
    mbl_telno: string().label('모바일전화번호').max(11).required(),
    /** 기본등록유형코드 */
    bsc_reg_type_cd: string().label('기본등록유형코드').max(1).required(),
    /** 닉네임 */
    nckn_nm: nckn_nm,
    /** 펫닉네임 */
    pet_nckn_nm: string().label('펫닉네임').max(50).nullable(),
    /** 아바타 상태 메시지 */
    avtr_stts_msg_cn: string().label('아바타 상태 메시지').nullable(),
    /** 아바타 대표 이미지 */
    avtr_rprs_img_file: file.label('아바타 대표 이미지').required(),
    /** 프로필 이미지 */
    prfl_img_file: file.label('프로필 이미지').required(),
});
/**
 * 옷장 정보
 * @typedef {Object} Closet
 * @property {number} id 옷장id - 필수
 * @property {FileBase} pet_img_file 펫 이미지 - 선택사항
 * @property {Object} user_wer_item_cn 착용아이템 - 선택사항
 * @property {Object[]} user_pss_item_cn 소지아이템 - 선택사항
 */
const Closet = object({
    /** 옷장id */
    id: number().label('옷장 아이디').required(),
    /** 펫 이미지 */
    pet_img_file: file.label('펫 이미지').nullable(),
    /** 착용아이템 */
    user_wer_item_cn: object().label('착용아이템').nullable(),
    /** 소지아이템 */
    user_pss_item_cn: object().label('소지아이템').nullable(),
});
/**
 * 회원(사용자) 목록
 * @property {string} eml_addr 이메일
 * @property {number} clt_id 옷장아이디
 * @property {number} bkmny_amt 책머니금액
 * @property {boolean} ntfc_rcptn_yn 알림수신여부
 * @property {number} acml_dclr_nmtm 누적신고횟수
 * @property {boolean} spce_kep_yn 옷공간지기 여부
 * @property {boolean} edu_fnsh_yn 도서관 이용교육 수료 여부
 * @property {date} last_cntn_dt 최종접속일시
 * @property {date} crt_dt 가입날짜
 * @property {date} mdfcn_dt 수정일시
 */
const UserList = UserBase.shape({
    /** 이메일 */
    eml_addr: string().label('이메일').max(320).required(),
    /** 옷장아이디 */
    clt_id: number().label('옷장아이디').nullable(),
    /** 책머니금액 */
    bkmny_amt: number().label('책머니금액').required(),
    /** 알림수신여부 */
    ntfc_rcptn_yn: boolean().label('알림수신여부').required().default(false),
    /** 누적신고횟수 */
    acml_dclr_nmtm: number().label('누적신고횟수').required(),
    /** 공간지기 여부 */
    spce_kep_yn: boolean().label('공간지기 여부').required().default(false),
    /** 도서관 이용교육 수료 여부 */
    edu_fnsh_yn: boolean().label('도서관 이용교육 수료 여부').required().default(false),
    /** 최종접속일시 */
    last_cntn_dt: date().label('최종접속일시').nullable(),
    /** 생성일시 */
    crt_dt: date().label('가입날짜').required(),
    /** 수정일시 */
    mdfcn_dt: date().label('수정일시').required(),
});
/** 닉네임 조회 DTO */
const UserNickname = object({
    id: number().label('아이디').required(),
    nckn_nm: nckn_nm,
});
/**
 * 이메일 정보
 * @typedef {Object} Email
 * @property {number} id - The email ID.
 * @property {string} eml_addr - The email address.
 * @property {string} reg_type_cd - The registration type code.
 */
const Email = object({
    /** 이메일 아이디 */
    id: number().label('이메일 아이디').required(),
    /** 이메일 주소 */
    eml_addr: string().label('이메일 주소').max(320).required(),
    /** 등록 유형 */
    reg_type_cd: string().label('등록유형').max(1).required(),
});
/** 소셜 계정 정보 조회 요청값 */
const UserSocialAccountReq = object({
    social_token: string().label('소셜 토큰').required(),
    reg_type_cd: string()
        .label('소셜 종류')
        .oneOf([REG_TYPE.APPLE, REG_TYPE.KAKAO, REG_TYPE.GOOGLE, REG_TYPE.NAVER])
        .required(),
});
/**
 * 사용자 상세 DTO
 * @property {Email[]} emails 이메일 목록
 * @property {Closet} closet 옷장정보
 */
const UserDetail = UserList.shape({
    /** 이메일 목록 */
    emails: array(Email).label('이메일 목록').required(),
    /** 옷장 */
    closet: Closet.label('옷장').required(),
    /** 나의 서재 공간id */
    bksf_spce_id: number().label('나의 서재 공간id').nullable(),
});
/**
 * 닉네임 수정 DTO
 * @property {string} nckn_nm 닉네임
 * @property {string|null} pet_nckn_nm 펫 닉네임
 */
const UserProfileUpdate = object({
    /** 닉네임 */
    nckn_nm: nckn_nm,
    // pet_nckn_nm: string().label('펫 닉네임').max(50).nullable(),
    pet_nckn_nm: string()
        .label('펫 닉네임')
        .test('pet nickname', '한글, 영문, 숫자를 사용하여 8자 이내로 입력해 주세요.', (value) => {
        if (!value)
            return true;
        const regex = /^[a-zA-Z가-힣0-9]{1,8}$/;
        return regex.test(value);
    })
        .nullable(),
});
/**
 * 도서관이용교육수료 결과 DTO
 * @property {number} user_id 회원번호
 * @property {number} bkmny_amt 책머니금액
 * @property {boolean} edu_fnsh_yn 도서관 이용교육 수료 여부
 */
const TrainingResult = object({
    user_id: number().label('회원번호').required(),
    /** 책머니금액 */
    bkmny_amt: number().label('책머니금액').required(),
    /** 도서관 이용교육 수료 여부 */
    edu_fnsh_yn: boolean().label('도서관 이용교육 수료 여부').required().default(false),
});
/**
 * 약관 상세조회 결과 DTO
 */
const UserDetailRes = SuccessObjectRes(UserDetail);
/**
 * 회원(사용자) 검색 요청 DTO
 */
const UserSearchReq = SearchListReq(UserSearch);
/**
 * 회원(사용자) 검색 결과 DTO
 */
const UserSearchRes = SuccessListRes(UserList);
/**
 * 닉네임 정보조회 결과 DTO
 */
const UserNicknameRes = SuccessObjectRes(UserNickname);
/**
 * 도서관이용교육 수료결과 응답 DTO
 */
const TrainingResultRes = SuccessObjectRes(TrainingResult);
module.exports = {
    UserSearch,
    UserSearchReq,
    UserSearchRes,
    UserDetail,
    UserDetailRes,
    UserProfileUpdate,
    UserNicknameRes,
    UserSocialAccountReq,
    TrainingResult,
    TrainingResultRes,
};
//# sourceMappingURL=user.js.map