/**
 * 채널 목록 결과 DTO
 */
export const ChannelSearchRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            chnl_prtpnt_cn?: {
                id: number;
                nickname: string;
                user_type: string;
            }[] | undefined;
            id: number;
            crt_dt: Date;
            spce_id: number;
            spce_chnl_id: string;
            chnl_id: number;
            ownr_cntn_yn: NonNullable<boolean | undefined>;
            chnl_prtpnt_sum: number;
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
//# sourceMappingURL=channel.d.ts.map