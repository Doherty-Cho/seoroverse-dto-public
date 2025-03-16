"use strict";
/** 관리자등급 */
const MNGR_LVL = {
    /** 관리자 */
    ADMIN: 'A',
    /** 운영자 */
    OPERATOR: 'O',
};
const MNGR_LVL_ID_CODE = {
    /** 관리자 */
    A: 'SMA',
    /** 운영자 */
    O: 'SSA',
};
/** 조회관리항목코드 */
const INQ_MNG_ARTCL_CD = {
    BOARD: 1,
    RELAY_CREATION: 2,
    NOTICE: 3,
    FAQ: 4,
};
/** 공지유형코드 */
const NOTICE_TYPE = {
    /** 공지사항 */
    NOTICE: 'N',
    /** FAQ */
    FAQ: 'F',
};
/** 등록유형코드 */
const REG_TYPE = {
    /** 로컬 */
    LOCAL: 'L',
    /** 카카오 */
    KAKAO: 'K',
    /** 네이버 */
    NAVER: 'N',
    /** 구글 */
    GOOGLE: 'G',
    /** 애플 */
    APPLE: 'A',
    /** 전주 */
    JEONJU: 'J',
    /** 익산 */
    IKSAN: 'I',
};
/** 모바일 디바이스 유형 */
const MBL_DEVICE_TYPE = {
    /** android */
    ANDROID: 'A',
    /** iOS */
    IOS: 'I',
    /** 포털웹 */
    WEB: 'W',
    /** 콘텐츠 */
    CONTENT: 'C',
};
/** 자원유형 */
const RSRC_TYPE = {
    /** 공간스큰 */
    SPACE_SKIN: '10',
    /** 아바타 */
    AVATAR: '20',
    /** 아바타 파츠 */
    AVATAR_PARTS: '30',
    /** 펫 */
    AVATAR_PETS: '40',
    /** NPC */
    NPC: '50',
    /** 게임 */
    GAME: '60',
};
/** 운영체제 구분 */
const OS_TYPE = {
    /** 안드로이드 */
    ANDROID: 'A',
    /** IOS */
    IOS: 'I',
    /** PC */
    PC: 'P',
};
/** 지역코드 */
const RGN = {
    /** 전주 */
    JEONJU: 'J',
    /** 익산 */
    IKSAN: 'I',
};
/** 공간유형코드 */
const LIB_TYPE = {
    LIBRARY: 'L',
    BOOKSHOP: 'S',
};
/** 전시광장코드 */
const EXHB_SQRE_CD = {
    SQUARE: '1',
    JEONJU: '2',
    IKSAN: '3',
};
/** 전시콘텐츠유형코드 */
const EXHB_CONTS_TYPE_CD = {
    IMAGE: 'I',
    MOVIE: 'M',
    WEB_VIEW: 'W',
};
/** 게시물구분코드 */
const PST_SE_CD = {
    SEOROVERSE: 'A',
    LIBRARY: 'B',
    BOOKSHOP: 'C',
};
/** 알림유형 */
const NTFC_TYPE = {
    /** 공지사항 */
    NOTICE: '1',
    /** 친구신청 */
    FRIEND: '2',
};
/** 알림유형 상세 */
const NTFC_TYPE_DTL = {
    /* 공지사항 */
    NOTICE: '1',
    /* 새로운 친구 신청 알림 */
    FRIEND_REQUESTED: '2',
    /* 친구 신청 결과 - 승낙 */
    FRIEND_ACCEPTED: '3',
    /* 친구 신청 결과 - 거절 */
    FRIEND_REJECTED: '4',
    /* 공간 초대 요청 알림 */
    INVITATION_REQUESTED: '5',
    /* 공간 초대 결과 - 거절   */
    INVITATION_REJECTED: '6',
};
/** 성별구분 */
const GNDR_TYPE = {
    /** 남자 */
    MALE: 'M',
    /** 여자 */
    FEMAIL: 'F',
    /** 남녀공용 */
    UNISEX: 'U',
};
/** 룸(공간) 상태 구분 */
const SPCE_STTS_CD = {
    /** 등록중 */
    REGISTERING: '1',
    /** 검수대기 */
    WATING_FOR_APPROVAL: '2',
    /** 반려(재등록) */
    CANCEL: '3',
    /** 운영대기 */
    WATING_FOR_OPERATION: '4',
    /** 운영중 */
    IN_OPERATION: '5',
    /** 운영정지(프로) */
    STOP_BY_OWNER: '6',
    /** 운영정지(관리자) */
    STOP_BY_ADMIN: '7',
    /** 운영종료 */
    END: '8',
};
/** 공간유형아이디 */
const SPCE_TYPE = {
    /** 메타광장 */
    SQUARE: 1,
    /** 도서관 */
    LIBRARY: 2,
    /** 서점 */
    BOOKSHOP: 3,
    /** 동아리 */
    READING_CLUB: 4,
    /** 나의서재 */
    MY_STUDY: 5,
    /** 점프맵 */
    JUMP_MAP: 6,
};
/** 신고사유코드 */
const DCLR_RSN_CD = {
    SPAM: '10',
    SEXUAL_EXPLOITATION: '20',
    HATE_SPEECH: '30',
    POLITICAL_SPEECH: '40',
    FALSE_INFORMATION: '50',
    HARASSMENT_BULLYING: '60',
};
/** 퀘스트상태코드 */
const QST_STTS_CD = {
    UNRECEIVED: '1',
    PROGRESS: '2',
    RECEIVE: '3',
};
/** 책 위치 코드 */
const BOOK_PSTN_CD = {
    /** 좌측 상단 */
    LEFT_TOP: 'LT',
    /** 좌측 하단 */
    LEFT_BOTTOM: 'LB',
    /** 우측 상단 */
    RIGHT_TOP: 'RT',
    /** 우측 하단 */
    RIGHT_BOTTOM: 'RB',
};
/** 명예의전당구분코드 */
const HOF_SE_CD = {
    /** 맞춤법게임 */
    SPELLING: '1',
    /** 알파벳게임 */
    ALPHABET: '2',
};
/** 명예의전당상세구분코드 */
const HOF_DTL_SE_CD = {
    /** 정답순 */
    SCORE: '1',
    /** 플레이순 */
    PLAY: '2',
};
/** 콘텐츠구분코드 */
const CONTS_SE_CD = {
    /** 일반콘텐츠 */
    NORMAL: '1',
    /** 라이브스크린 */
    LIVE_SCREEN: '2',
};
/** 조회기간 단위 */
const PERIOD_UNIT = {
    /** 시간 */
    HOUR: 'hour',
    /** 일 */
    DAY: 'day',
    /** 주 */
    WEEK: 'week',
    /** 월 */
    MONTH: 'month',
    /** 자유지정 */
    CUSTOM: 'custom',
};
module.exports = {
    MNGR_LVL,
    MNGR_LVL_ID_CODE,
    NOTICE_TYPE,
    INQ_MNG_ARTCL_CD,
    REG_TYPE,
    MBL_DEVICE_TYPE,
    OS_TYPE,
    RSRC_TYPE,
    RGN,
    LIB_TYPE,
    EXHB_SQRE_CD,
    EXHB_CONTS_TYPE_CD,
    PST_SE_CD,
    NTFC_TYPE,
    NTFC_TYPE_DTL,
    GNDR_TYPE,
    SPCE_STTS_CD,
    SPCE_TYPE,
    DCLR_RSN_CD,
    QST_STTS_CD,
    BOOK_PSTN_CD,
    HOF_SE_CD,
    HOF_DTL_SE_CD,
    CONTS_SE_CD,
    PERIOD_UNIT,
};
//# sourceMappingURL=code.js.map