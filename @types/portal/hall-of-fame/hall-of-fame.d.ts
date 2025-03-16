export const HallOfFameRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        quiz_scr?: {
            quiz_scr?: number | null | undefined;
            play_cnt?: number | null | undefined;
            nckn_nm: string;
            user_id: number;
            rank: number;
            prfl_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            engh_quiz_yn: NonNullable<boolean | undefined>;
            hof_se: string;
            last_dt: Date;
        }[] | undefined;
        play_cnt?: {
            quiz_scr?: number | null | undefined;
            play_cnt?: number | null | undefined;
            nckn_nm: string;
            user_id: number;
            rank: number;
            prfl_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            engh_quiz_yn: NonNullable<boolean | undefined>;
            hof_se: string;
            last_dt: Date;
        }[] | undefined;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=hall-of-fame.d.ts.map