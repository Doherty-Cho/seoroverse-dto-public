/**
 * 북팜 히스토리 저장 DTO
 * @property {number} user_id - 사용자 ID
 * @property {Date} cmpn_rcv_dt - 퀘스트 일자
 */
export const BookFarmHistoryCreate: import("yup").ObjectSchema<{
    user_id: number | null | undefined;
    cmpn_rcv_dt: Date;
}, import("yup").AnyObject, {
    user_id: undefined;
    cmpn_rcv_dt: undefined;
}, "">;
/**
 *  북팜 상태조회 결과 DTO
 */
export const BookFarmProgressStatusRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        qst_hstry?: {
            user_id?: number | null | undefined;
            rld_qst_id?: number | null | undefined;
            qst_ymd: string;
            qst_id: number;
            qst_stts_cd: string;
        }[] | null | undefined;
        next_step_need: number;
        prgr_stts: {
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
        };
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=book-farm.d.ts.map