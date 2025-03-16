/**
 * 퀴즈 검색 요청 DTO
 */
export const QuizSearchReq: import("yup").ObjectSchema<{
    filters: {} | null | undefined;
    search: {} | null | undefined;
    from: number;
    size: number;
    sort: any[] | undefined;
}, import("yup").AnyObject, {
    filters: undefined;
    search: undefined;
    from: 0;
    size: 1;
    sort: undefined;
}, "">;
/**
 * 퀴즈 검색 결과 DTO
 */
export const QuizSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            rbc_cn?: string | null | undefined;
            quiz_cn?: string | null | undefined;
            quiz_itpt_cn?: string | null | undefined;
            exmp_B_cn?: string | null | undefined;
            anw_itpt_cn?: string | null | undefined;
            id: number;
            crt_dt: Date;
            engh_quiz_yn: NonNullable<boolean | undefined>;
            exmp_A_cn: string;
            anw_cn: string;
        }[];
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: {
        total: undefined;
        count: undefined;
        rows: undefined;
    };
}, "">;
/**
 * 퀴즈 히스토리 등록 DTO
 * @property {number} user_id - 사용자 아이디
 * @property {Date} reg_dt - 등록일
 * @property {boolean} engh_quiz_yn - 영어퀴즈 여부
 * @property {number} quiz_sc - 점수
 */
export const QuizHistoryCreate: import("yup").ObjectSchema<{
    user_id: number;
    reg_dt: Date;
    engh_quiz_yn: NonNullable<boolean | undefined>;
    quiz_scr: number;
}, import("yup").AnyObject, {
    user_id: undefined;
    reg_dt: undefined;
    engh_quiz_yn: true;
    quiz_scr: undefined;
}, "">;
//# sourceMappingURL=quiz.d.ts.map