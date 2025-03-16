/**
 * 히스토리 base DTO
 */
export type 퀘스트 = {
    /**
     * - 사용자 ID
     */
    user_id: number;
    /**
     * - 퀘스트 일자
     */
    qst_ymd: string;
    /**
     * - 퀘스트 아이디
     */
    qst_id: number;
    /**
     * - 퀘스트 새로고침 아이디
     */
    rld_qst_id: number;
    /**
     * - 퀘스트 상태 코드
     */
    qst_stts_cd: string;
};
/**
 * DTO
 */
export type 목록 = {
    /**
     * - 아이디
     */
    id: number;
    /**
     * - 히스토리 아이디
     */
    hstry_id: number;
    /**
     * - 퀘스트 새로고침 아이디
     */
    rld_qst_id: number;
    /**
     * - 퀘스트 제목
     */
    qst_ttl: string;
    /**
     * - 퀘스트 내용
     */
    qst_cn: string;
    /**
     * - 북팜 단계 번호
     */
    bkfm_step_no: number;
    /**
     * - 북팜 항목 수
     */
    goal_artcl_cnt: number;
    /**
     * - 보상 책머니 금액
     */
    cmpn_bkmny_amt: number;
    /**
     * - 퀘스트 상태 코드
     */
    qst_stts_cd: string;
    /**
     * - 북팜 여부
     */
    bkfm_yn: boolean;
    /**
     * - 고정 여부
     */
    fix_yn: boolean;
};
/**
 * @typedef 퀘스트 히스토리 base DTO
 * @property {number} user_id - 사용자 ID
 * @property {string} qst_ymd - 퀘스트 일자
 * @property {number} qst_id - 퀘스트 아이디
 * @property {number} rld_qst_id - 퀘스트 새로고침 아이디
 * @property {string} qst_stts_cd - 퀘스트 상태 코드
 */
export const DailyQuestHistory: import("yup").ObjectSchema<{
    user_id: number | null | undefined;
    qst_ymd: string;
    qst_id: number;
    rld_qst_id: number | null | undefined;
    qst_stts_cd: string;
}, import("yup").AnyObject, {
    user_id: undefined;
    qst_ymd: undefined;
    qst_id: undefined;
    rld_qst_id: undefined;
    qst_stts_cd: undefined;
}, "">;
/**
 * @typedef 목록 DTO
 * @property {number} id - 아이디
 * @property {number} hstry_id - 히스토리 아이디
 * @property {number} rld_qst_id - 퀘스트 새로고침 아이디
 * @property {string} qst_ttl - 퀘스트 제목
 * @property {string} qst_cn - 퀘스트 내용
 * @property {number} bkfm_step_no - 북팜 단계 번호
 * @property {number} goal_artcl_cnt - 북팜 항목 수
 * @property {number} cmpn_bkmny_amt - 보상 책머니 금액
 * @property {string} qst_stts_cd - 퀘스트 상태 코드
 * @property {boolean} bkfm_yn - 북팜 여부
 * @property {boolean} fix_yn - 고정 여부
 */
export const DailyQuestList: import("yup").ObjectSchema<{
    id: number;
    hstry_id: number | null | undefined;
    rld_qst_id: number | null | undefined;
    qst_ttl: string | null | undefined;
    qst_cn: string | null | undefined;
    bkfm_step_no: number;
    goal_artcl_cnt: number;
    cmpn_bkmny_amt: number;
    qst_stts_cd: string | null | undefined;
    bkfm_yn: NonNullable<boolean | undefined>;
    fix_yn: NonNullable<boolean | undefined>;
}, import("yup").AnyObject, {
    id: undefined;
    hstry_id: undefined;
    rld_qst_id: undefined;
    qst_ttl: undefined;
    qst_cn: undefined;
    bkfm_step_no: 0;
    goal_artcl_cnt: 1;
    cmpn_bkmny_amt: 0;
    qst_stts_cd: undefined;
    bkfm_yn: false;
    fix_yn: false;
}, "">;
/**
 * @typedef 퀘스트 히스토리 등록 DTO
 */
export const DailyQuestHistoryCreate: import("yup").ObjectSchema<{
    user_id: number | null | undefined;
    qst_ymd: string;
    qst_id: number;
    rld_qst_id: number | null | undefined;
    qst_stts_cd: string;
}, import("yup").AnyObject, {
    user_id: undefined;
    qst_ymd: undefined;
    qst_id: undefined;
    rld_qst_id: undefined;
    qst_stts_cd: undefined;
}, "">;
/**
 * @typedef 퀘스트 히스토리 업데이트 DTO
 * @property {string} qst_stts_cd - 퀘스트 상태 코드
 */
export const DailyQuestHistoryUpdate: import("yup").ObjectSchema<{
    qst_stts_cd: string;
}, import("yup").AnyObject, {
    qst_stts_cd: undefined;
}, "">;
/**
 * @typedef 퀘스트 히스토리 새로고침 업데이트 DTO
 * @property {number} rld_qst_id - 퀘스트 새로고침 아이디
 */
export const DailyQuestReloadHistoryUpdate: import("yup").ObjectSchema<{
    rld_qst_id: number;
}, import("yup").AnyObject, {
    rld_qst_id: undefined;
}, "">;
/**
 *  @typedef 퀘스트 조회 결과 DTO
 */
export const DailyQuestListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            rld_qst_id?: number | null | undefined;
            qst_stts_cd?: string | null | undefined;
            hstry_id?: number | null | undefined;
            qst_ttl?: string | null | undefined;
            qst_cn?: string | null | undefined;
            id: number;
            bkfm_step_no: number;
            goal_artcl_cnt: number;
            cmpn_bkmny_amt: number;
            bkfm_yn: NonNullable<boolean | undefined>;
            fix_yn: NonNullable<boolean | undefined>;
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
//# sourceMappingURL=daily-quest.d.ts.map