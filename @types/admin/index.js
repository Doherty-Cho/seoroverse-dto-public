"use strict";
module.exports = {
    // 인증
    ...require('./auth/auth'),
    // 공지사항 관리
    ...require('./notice/notice'),
    // 게시판 관리
    ...require('./board/board'),
    // 자원 관리
    ...require('./resource/resource'),
    // 릴레이 창작전 관리
    ...require('./relay-creation/relay-creation'),
    // 회원 관리
    ...require('./user/normal-user'), // 일반회원
    ...require('./user/withdrawn-user'), // 탈퇴회원
    ...require('./user/space-keeper'), // 공간지기
    // 관리자 계정 관리
    ...require('./manager/manager'),
    // 전시 관리
    ...require('./exhibition/exhibition'),
    // 실물교환권 관리
    ...require('./coupon/coupon'),
    // 명예의전당 관리
    ...require('./hall-of-fame/hall-of-fame'),
    // 데이터 통계
    ...require('./statistics/statistics'),
    // 한권의책 관리
    ...require('./one-book/one-book'),
    // 홈
    ...require('./home/home'),
    // 학교 정보 관리
    ...require('./school/school'),
};
//# sourceMappingURL=index.js.map