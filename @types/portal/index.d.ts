declare const _exports: {
    SchoolListReq: import("yup").ObjectSchema<{
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
    SchoolListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                school_id?: number | null | undefined;
                school_scr?: number | null | undefined;
                id: number;
                crt_dt: Date;
                school_nm: string;
                school_address: string;
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
    SchoolSearchReq: import("yup").ObjectSchema<{
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
    SchoolSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                school_address?: string | null | undefined;
                rank: number;
                school_nm: string;
                school_id: number;
                school_scr: number;
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
    SchoolScoreCreate: import("yup").ObjectSchema<{
        school_id: number;
        school_scr: number;
    }, import("yup").AnyObject, {
        school_id: undefined;
        school_scr: undefined;
    }, "">;
    ProgramVersionReq: import("yup").ObjectSchema<{
        mbl_device_type_cd: string;
    }, import("yup").AnyObject, {
        mbl_device_type_cd: undefined;
    }, "">;
    ProgramVersion: import("yup").ObjectSchema<{
        id: number;
        mbl_device_type_cd: string;
        env_nm: string;
        updt_yn: NonNullable<boolean | undefined>;
        ver_idnty_no: string | null | undefined;
        ver_cn: string | null | undefined;
        dwnld_url_addr: string | null | undefined;
        lnkg_page_url_addr: string | null | undefined;
        orgnl_file_nm: string | null | undefined;
        file_type_nm: string | null | undefined;
        file_sz: number | null | undefined;
        crltn_dt: Date | null | undefined;
        mngr_id: number | null | undefined;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        mbl_device_type_cd: undefined;
        env_nm: undefined;
        updt_yn: undefined;
        ver_idnty_no: undefined;
        ver_cn: undefined;
        dwnld_url_addr: undefined;
        lnkg_page_url_addr: undefined;
        orgnl_file_nm: undefined;
        file_type_nm: undefined;
        file_sz: undefined;
        crltn_dt: undefined;
        mngr_id: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    ProgramVersionRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            mngr_id?: number | null | undefined;
            file_sz?: number | null | undefined;
            orgnl_file_nm?: string | null | undefined;
            file_type_nm?: string | null | undefined;
            ver_idnty_no?: string | null | undefined;
            ver_cn?: string | null | undefined;
            dwnld_url_addr?: string | null | undefined;
            lnkg_page_url_addr?: string | null | undefined;
            crltn_dt?: Date | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            mbl_device_type_cd: string;
            env_nm: string;
            updt_yn: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    OneBookCreate: import("yup").ObjectSchema<{
        crtr_yr: string;
        book_ttl: string;
        athr_nm: string;
        pblco_nm: string | null | undefined;
        expsr_yn: NonNullable<boolean | undefined>;
        book_rpt_cn: string;
        intv_vdo_file_id: import("yup").Maybe<number | undefined>;
        rprs_img_file_id: number;
        reg_dt: Date | null | undefined;
        crt_dt: Date | null | undefined;
    }, import("yup").AnyObject, {
        crtr_yr: string;
        book_ttl: undefined;
        athr_nm: undefined;
        pblco_nm: undefined;
        expsr_yn: import("yup").Maybe<NonNullable<boolean | undefined>>;
        book_rpt_cn: undefined;
        intv_vdo_file_id: undefined;
        rprs_img_file_id: undefined;
        reg_dt: undefined;
        crt_dt: undefined;
    }, "">;
    OneBookUpdate: import("yup").ObjectSchema<{
        crtr_yr: string;
        book_ttl: string;
        athr_nm: string;
        pblco_nm: string | null | undefined;
        expsr_yn: NonNullable<boolean | undefined>;
        book_rpt_cn: string;
        intv_vdo_file_id: import("yup").Maybe<number | undefined>;
        rprs_img_file_id: number;
        reg_dt: Date | null | undefined;
        crt_dt: Date | null | undefined;
    }, import("yup").AnyObject, {
        crtr_yr: string;
        book_ttl: undefined;
        athr_nm: undefined;
        pblco_nm: undefined;
        expsr_yn: import("yup").Maybe<NonNullable<boolean | undefined>>;
        book_rpt_cn: undefined;
        intv_vdo_file_id: undefined;
        rprs_img_file_id: undefined;
        reg_dt: undefined;
        crt_dt: undefined;
    }, "">;
    OneBookSearchReq: import("yup").ObjectSchema<{
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
    OneBookSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                pblco_nm?: string | null | undefined;
                id: number;
                expsr_yn: NonNullable<boolean | undefined>;
                crt_dt: Date;
                crtr_yr: string;
                book_ttl: string;
                athr_nm: string;
                rprs_img_file_id: number;
                rprs_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                };
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
    OneBookDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            pblco_nm?: string | null | undefined;
            intv_vdo_file_id?: number | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            crtr_yr: string;
            book_ttl: string;
            athr_nm: string;
            book_rpt_cn: string;
            rprs_img_file_id: number;
            intv_vdo_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            };
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    HallOfFameRes: import("yup").ObjectSchema<{
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
    BookSearch: import("yup").ObjectSchema<{
        book_ttl: string;
        athr_nm: string;
    }, import("yup").AnyObject, {
        book_ttl: undefined;
        athr_nm: undefined;
    }, "">;
    BookSearchReq: import("yup").ObjectSchema<{
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
    BookSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                athr_nm?: string | null | undefined;
                pblco_nm?: string | null | undefined;
                book_rpt_cn?: string | null | undefined;
                img_file_url_addr?: string | null | undefined;
                book_ttl: string;
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
    BookList: import("yup").ObjectSchema<{
        bksf_pstn_cd: string;
        book_ttl: string;
        athr_nm: string | null | undefined;
        pblco_nm: string | null | undefined;
        book_rpt_cn: string | null | undefined;
        id: number;
        spce_id: number;
        expsr_yn: NonNullable<boolean | undefined>;
        bbnd_colr_cd: string;
        bbnd_indct_cn: string | null | undefined;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        bksf_pstn_cd: undefined;
        book_ttl: undefined;
        athr_nm: undefined;
        pblco_nm: undefined;
        book_rpt_cn: undefined;
        id: undefined;
        spce_id: undefined;
        expsr_yn: undefined;
        bbnd_colr_cd: "1";
        bbnd_indct_cn: undefined;
        rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    BookListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                athr_nm?: string | null | undefined;
                pblco_nm?: string | null | undefined;
                book_rpt_cn?: string | null | undefined;
                bbnd_indct_cn?: string | null | undefined;
                id: number;
                expsr_yn: NonNullable<boolean | undefined>;
                crt_dt: Date;
                mdfcn_dt: Date;
                spce_id: number;
                book_ttl: string;
                rprs_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                bksf_pstn_cd: string;
                bbnd_colr_cd: string;
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
    BookCreate: import("yup").ObjectSchema<{
        bksf_pstn_cd: string;
        book_ttl: string;
        athr_nm: string | null | undefined;
        pblco_nm: string | null | undefined;
        book_rpt_cn: string | null | undefined;
        img_file_url_addr: string | null | undefined;
        expsr_yn: NonNullable<boolean | undefined>;
        bbnd_colr_cd: string;
        bbnd_indct_cn: string | null | undefined;
    }, import("yup").AnyObject, {
        bksf_pstn_cd: undefined;
        book_ttl: undefined;
        athr_nm: undefined;
        pblco_nm: undefined;
        book_rpt_cn: undefined;
        img_file_url_addr: undefined;
        expsr_yn: undefined;
        bbnd_colr_cd: "1";
        bbnd_indct_cn: undefined;
    }, "">;
    BookUpdate: import("yup").ObjectSchema<{
        bksf_pstn_cd: string;
        book_ttl: string;
        athr_nm: string | null | undefined;
        pblco_nm: string | null | undefined;
        book_rpt_cn: string | null | undefined;
        img_file_url_addr: string | null | undefined;
        expsr_yn: NonNullable<boolean | undefined>;
        bbnd_colr_cd: string;
        bbnd_indct_cn: string | null | undefined;
        rprs_img_file_id: number | null | undefined;
    }, import("yup").AnyObject, {
        bksf_pstn_cd: undefined;
        book_ttl: undefined;
        athr_nm: undefined;
        pblco_nm: undefined;
        book_rpt_cn: undefined;
        img_file_url_addr: undefined;
        expsr_yn: undefined;
        bbnd_colr_cd: "1";
        bbnd_indct_cn: undefined;
        rprs_img_file_id: undefined;
    }, "">;
    BookshelfDecorationUpdate: import("yup").ObjectSchema<{
        spce_bsc_stng_cn: {} | null;
    }, import("yup").AnyObject, {
        spce_bsc_stng_cn: {};
    }, "">;
    FriendList: import("yup").ObjectSchema<{
        id: number;
        frnd_id: number;
        nckn_nm: string;
        prfl_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        frnd_id: undefined;
        nckn_nm: undefined;
        prfl_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        crt_dt: undefined;
    }, "">;
    FriendApplyList: import("yup").ObjectSchema<{
        id: number;
        my_aply_yn: boolean | null | undefined;
        user_id: number;
        nckn_nm: string;
        prfl_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        my_aply_yn: undefined;
        user_id: undefined;
        nckn_nm: undefined;
        prfl_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        crt_dt: undefined;
    }, "">;
    FriendListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                id: number;
                crt_dt: Date;
                nckn_nm: string;
                prfl_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                frnd_id: number;
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
    FriendApplyListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                my_aply_yn?: boolean | null | undefined;
                id: number;
                crt_dt: Date;
                nckn_nm: string;
                user_id: number;
                prfl_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
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
    FriendRequest: import("yup").ObjectSchema<{
        target_user_id: number;
    }, import("yup").AnyObject, {
        target_user_id: undefined;
    }, "">;
    SpaceInvitation: import("yup").ObjectSchema<{
        frnd_id: number;
        spce_id: number;
    }, import("yup").AnyObject, {
        frnd_id: undefined;
        spce_id: undefined;
    }, "">;
    BookFarmHistoryCreate: import("yup").ObjectSchema<{
        user_id: number | null | undefined;
        cmpn_rcv_dt: Date;
    }, import("yup").AnyObject, {
        user_id: undefined;
        cmpn_rcv_dt: undefined;
    }, "">;
    BookFarmProgressStatusRes: import("yup").ObjectSchema<{
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
    DailyQuestHistory: import("yup").ObjectSchema<{
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
    DailyQuestList: import("yup").ObjectSchema<{
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
    DailyQuestHistoryCreate: import("yup").ObjectSchema<{
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
    DailyQuestHistoryUpdate: import("yup").ObjectSchema<{
        qst_stts_cd: string;
    }, import("yup").AnyObject, {
        qst_stts_cd: undefined;
    }, "">;
    DailyQuestReloadHistoryUpdate: import("yup").ObjectSchema<{
        rld_qst_id: number;
    }, import("yup").AnyObject, {
        rld_qst_id: undefined;
    }, "">;
    DailyQuestListRes: import("yup").ObjectSchema<{
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
    BookshopUpdate: import("yup").ObjectSchema<{
        lib_nm: string;
        spce_otln_cn: string;
        lib_expln: string;
        lib_addr: string | null | undefined;
        oper_info_cn: string | null | undefined;
        lib_telno: string | null | undefined;
        site_url_addr: string | null | undefined;
        rprs_img_file_id: number;
        img_files: (number | undefined)[];
    }, import("yup").AnyObject, {
        lib_nm: undefined;
        spce_otln_cn: undefined;
        lib_expln: undefined;
        lib_addr: undefined;
        oper_info_cn: undefined;
        lib_telno: undefined;
        site_url_addr: undefined;
        rprs_img_file_id: undefined;
        img_files: undefined;
    }, "">;
    ContentList: import("yup").ObjectSchema<{
        id: number;
        spce_id: number;
        conts_se_cd: string;
        conts_seq: number;
        conts_ttl: string;
        file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        };
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        spce_id: undefined;
        conts_se_cd: undefined;
        conts_seq: undefined;
        conts_ttl: undefined;
        file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
            file_sz: undefined;
        };
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    ContentListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                id: number;
                file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    file_sz: number;
                    orgnl_file_nm: string;
                };
                crt_dt: Date;
                mdfcn_dt: Date;
                conts_ttl: string;
                spce_id: number;
                conts_se_cd: string;
                conts_seq: number;
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
    ContentCreate: import("yup").ObjectSchema<{
        conts_se_cd: string;
        conts_seq: number;
        conts_ttl: string;
        file_id: number;
    }, import("yup").AnyObject, {
        conts_se_cd: undefined;
        conts_seq: undefined;
        conts_ttl: undefined;
        file_id: undefined;
    }, "">;
    ContentUpdate: import("yup").ObjectSchema<{
        conts_se_cd: string;
        conts_seq: number;
        conts_ttl: string;
        file_id: number;
    }, import("yup").AnyObject, {
        conts_se_cd: undefined;
        conts_seq: undefined;
        conts_ttl: undefined;
        file_id: undefined;
    }, "">;
    SpaceDetail: import("yup").ObjectSchema<{
        id: number;
        spce_creatr_id: number | null | undefined;
        nckn_nm: string | null | undefined;
        spce_type_id: number;
        spce_skn_id: number;
        spce_ttl: string;
        spce_expln: string;
        spce_bsc_stng_cn: {} | null;
        cntn_lmt_cnt: number;
        chnl_extd_psblty_yn: NonNullable<boolean | undefined>;
        voc_chitt_psblty_yn: NonNullable<boolean | undefined>;
        scrn_use_yn: NonNullable<boolean | undefined>;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        } | null;
        sctr_yn: NonNullable<boolean | undefined>;
        sctr_pswd: string | null | undefined;
        spce_stts_cd: string | null | undefined;
        crt_dt: Date;
        mdfcn_dt: Date;
        rgn_lib_id: number | null | undefined;
        rgn_lib_rgn_cd: string | null | undefined;
        rgn_lib_type_cd: string | null | undefined;
    }, import("yup").AnyObject, {
        id: undefined;
        spce_creatr_id: undefined;
        nckn_nm: undefined;
        spce_type_id: undefined;
        spce_skn_id: undefined;
        spce_ttl: undefined;
        spce_expln: undefined;
        spce_bsc_stng_cn: {};
        cntn_lmt_cnt: undefined;
        chnl_extd_psblty_yn: undefined;
        voc_chitt_psblty_yn: undefined;
        scrn_use_yn: undefined;
        rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
            file_sz: undefined;
        };
        sctr_yn: undefined;
        sctr_pswd: undefined;
        spce_stts_cd: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
        rgn_lib_id: undefined;
        rgn_lib_rgn_cd: undefined;
        rgn_lib_type_cd: undefined;
    }, "">;
    SpaceDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            nckn_nm?: string | null | undefined;
            rgn_lib_id?: number | null | undefined;
            sctr_pswd?: string | null | undefined;
            spce_creatr_id?: number | null | undefined;
            spce_stts_cd?: string | null | undefined;
            rgn_lib_rgn_cd?: string | null | undefined;
            rgn_lib_type_cd?: string | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            } | null;
            spce_ttl: string;
            spce_skn_id: number;
            cntn_lmt_cnt: number;
            sctr_yn: NonNullable<boolean | undefined>;
            spce_expln: string;
            spce_type_id: number;
            spce_bsc_stng_cn: {} | null;
            chnl_extd_psblty_yn: NonNullable<boolean | undefined>;
            voc_chitt_psblty_yn: NonNullable<boolean | undefined>;
            scrn_use_yn: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    PictorialBookSearchReq: import("yup").ObjectSchema<{
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
    PictorialBookSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                ptrb_knd_nm?: string | null | undefined;
                ptrb_src_nm?: string | null | undefined;
                id: number;
                crt_dt: Date;
                wissy_yn: NonNullable<boolean | undefined>;
                ctgry_nm: string;
                ptrb_cn: string;
                collect_yn: NonNullable<boolean | undefined>;
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
    PictorialBookHistoryCreateReq: import("yup").ObjectSchema<{
        ptrb_id: number;
    }, import("yup").AnyObject, {
        ptrb_id: undefined;
    }, "">;
    PictorialBookHistoryCreate: import("yup").ObjectSchema<{
        ptrb_id: number;
        user_id: number;
        wissy_yn: NonNullable<boolean | undefined>;
    }, import("yup").AnyObject, {
        ptrb_id: undefined;
        user_id: undefined;
        wissy_yn: undefined;
    }, "">;
    QuizSearchReq: import("yup").ObjectSchema<{
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
    QuizSearchRes: import("yup").ObjectSchema<{
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
    QuizHistoryCreate: import("yup").ObjectSchema<{
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
    RelayCreationSubjectDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            pstg_bgng_dt?: Date | null | undefined;
            pstg_end_dt?: Date | null | undefined;
            id: number;
            crt_dt: Date;
            pst_cn: string;
            cmnt_cnt: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    RelayCreationSearchReq: import("yup").ObjectSchema<{
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
    RelayCreationSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                wrtr_id?: number | null | undefined;
                nckn_nm?: string | null | undefined;
                up_pst_id?: number | null | undefined;
                id: number;
                crt_dt: Date;
                pst_cn: string;
                rly_ctex_id: number;
                dclr_yn: NonNullable<boolean | undefined>;
                prfl_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
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
    RelayCreationCreate: import("yup").ObjectSchema<{
        rly_ctex_id: number;
        up_pst_id: number | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
    }, import("yup").AnyObject, {
        rly_ctex_id: undefined;
        up_pst_id: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
    }, "">;
    RelayCommentCreate: import("yup").ObjectSchema<{
        rly_ctex_id: number;
        up_pst_id: number;
        wrtr_id: number | null | undefined;
        pst_cn: string;
    }, import("yup").AnyObject, {
        rly_ctex_id: undefined;
        up_pst_id: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
    }, "">;
    ReportCreate: import("yup").ObjectSchema<{
        dclr_cmnt_id: number;
        dclr_rsn_cd: string;
    }, import("yup").AnyObject, {
        dclr_cmnt_id: undefined;
        dclr_rsn_cd: undefined;
    }, "">;
    RelayCommentListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            comment?: {
                wrtr_id?: number | null | undefined;
                nckn_nm?: string | null | undefined;
                up_pst_id?: number | null | undefined;
                id: number;
                crt_dt: Date;
                pst_cn: string;
                rly_ctex_id: number;
                dclr_yn: NonNullable<boolean | undefined>;
                prfl_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
            }[] | undefined;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ReadingClubSearch: import("yup").ObjectSchema<{
        spce_ttl: string | undefined;
        nckn_nm: string | undefined;
    }, import("yup").AnyObject, {
        spce_ttl: undefined;
        nckn_nm: undefined;
    }, "">;
    ReadingClubSearchReq: import("yup").ObjectSchema<{
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
    ReadingClubList: import("yup").ObjectSchema<{
        id: number;
        spce_skn_id: number;
        spce_ttl: string;
        ownr_id: number;
        nckn_nm: string;
        cntn_lmt_cnt: number;
        prtpnt_cnt: number;
        ownr_cntn_yn: NonNullable<boolean | undefined>;
        my_spce_yn: NonNullable<boolean | undefined>;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        };
        sctr_yn: NonNullable<boolean | undefined>;
        sctr_pswd: string | null | undefined;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        spce_skn_id: undefined;
        spce_ttl: undefined;
        ownr_id: undefined;
        nckn_nm: undefined;
        cntn_lmt_cnt: undefined;
        prtpnt_cnt: undefined;
        ownr_cntn_yn: undefined;
        my_spce_yn: undefined;
        rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
            file_sz: undefined;
        };
        sctr_yn: false;
        sctr_pswd: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    ReadingClubSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                sctr_pswd?: string | null | undefined;
                id: number;
                crt_dt: Date;
                mdfcn_dt: Date;
                nckn_nm: string;
                rprs_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    file_sz: number;
                    orgnl_file_nm: string;
                };
                ownr_cntn_yn: NonNullable<boolean | undefined>;
                spce_ttl: string;
                spce_skn_id: number;
                ownr_id: number;
                cntn_lmt_cnt: number;
                prtpnt_cnt: number;
                my_spce_yn: NonNullable<boolean | undefined>;
                sctr_yn: NonNullable<boolean | undefined>;
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
    ReadingClubDetail: import("yup").ObjectSchema<{
        id: number;
        spce_skn_id: number;
        spce_ttl: string;
        ownr_id: number;
        nckn_nm: string;
        cntn_lmt_cnt: number;
        prtpnt_cnt: number;
        ownr_cntn_yn: NonNullable<boolean | undefined>;
        my_spce_yn: NonNullable<boolean | undefined>;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        };
        sctr_yn: NonNullable<boolean | undefined>;
        sctr_pswd: string | null | undefined;
        crt_dt: Date;
        mdfcn_dt: Date;
        spce_expln: string;
        vald_term_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        spce_skn_id: undefined;
        spce_ttl: undefined;
        ownr_id: undefined;
        nckn_nm: undefined;
        cntn_lmt_cnt: undefined;
        prtpnt_cnt: undefined;
        ownr_cntn_yn: undefined;
        my_spce_yn: undefined;
        rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
            file_sz: undefined;
        };
        sctr_yn: false;
        sctr_pswd: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
        spce_expln: undefined;
        vald_term_dt: undefined;
    }, "">;
    ReadingClubDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            sctr_pswd?: string | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            nckn_nm: string;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            };
            ownr_cntn_yn: NonNullable<boolean | undefined>;
            spce_ttl: string;
            spce_skn_id: number;
            ownr_id: number;
            cntn_lmt_cnt: number;
            prtpnt_cnt: number;
            my_spce_yn: NonNullable<boolean | undefined>;
            sctr_yn: NonNullable<boolean | undefined>;
            spce_expln: string;
            vald_term_dt: Date;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ReadingClubCreate: import("yup").ObjectSchema<{
        spce_skn_id: number;
        spce_ttl: string;
        spce_expln: string;
        rprs_img_file_id: number | null | undefined;
        sctr_yn: NonNullable<boolean | undefined>;
        sctr_pswd: string | undefined;
    }, import("yup").AnyObject, {
        spce_skn_id: undefined;
        spce_ttl: undefined;
        spce_expln: undefined;
        rprs_img_file_id: undefined;
        sctr_yn: false;
        sctr_pswd: undefined;
    }, "">;
    ReadingClubUpdate: import("yup").ObjectSchema<{
        spce_skn_id: number;
        spce_ttl: string;
        spce_expln: string;
        rprs_img_file_id: number | null | undefined;
        sctr_yn: NonNullable<boolean | undefined>;
        sctr_pswd: string | undefined;
    }, import("yup").AnyObject, {
        spce_skn_id: undefined;
        spce_ttl: undefined;
        spce_expln: undefined;
        rprs_img_file_id: undefined;
        sctr_yn: false;
        sctr_pswd: undefined;
    }, "">;
    ReadingClubPassword: import("yup").ObjectSchema<{
        password: string;
    }, import("yup").AnyObject, {
        password: undefined;
    }, "">;
    SquareDetail: import("yup").ObjectSchema<{
        id: number;
        exhb_sqre_cd: string;
        exhb_conts_type_cd: string;
        conts_ttl: string | null | undefined;
        conts_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        } | null;
        vdo_spd: number;
        vdo_url_addr: string | null | undefined;
        thmb_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        } | null;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        exhb_sqre_cd: undefined;
        exhb_conts_type_cd: undefined;
        conts_ttl: undefined;
        conts_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
            file_sz: undefined;
        };
        vdo_spd: 0;
        vdo_url_addr: undefined;
        thmb_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
            file_sz: undefined;
        };
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    SquareDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            conts_ttl?: string | null | undefined;
            vdo_url_addr?: string | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            exhb_sqre_cd: string;
            exhb_conts_type_cd: string;
            vdo_spd: number;
            conts_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            } | null;
            thmb_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            } | null;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    SquareListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                conts_ttl?: string | null | undefined;
                vdo_url_addr?: string | null | undefined;
                id: number;
                crt_dt: Date;
                mdfcn_dt: Date;
                exhb_sqre_cd: string;
                exhb_conts_type_cd: string;
                vdo_spd: number;
                conts_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    file_sz: number;
                    orgnl_file_nm: string;
                } | null;
                thmb_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    file_sz: number;
                    orgnl_file_nm: string;
                } | null;
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
    AccessoryList: import("yup").ObjectSchema<{
        id: number;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            file_sz: number;
            orgnl_file_nm: string;
        };
        avtr_expln: string;
        gndr_se_cd: string;
        indct_seq: number;
        prchs_amt: number;
        bsc_pvsn_yn: NonNullable<boolean | undefined>;
        acsy_se_cd: string;
        avtr_mtrl_expln: string | null | undefined;
        avtr_mesh_expln: string | null | undefined;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
            file_sz: undefined;
        };
        avtr_expln: undefined;
        gndr_se_cd: undefined;
        indct_seq: undefined;
        prchs_amt: undefined;
        bsc_pvsn_yn: undefined;
        acsy_se_cd: undefined;
        avtr_mtrl_expln: undefined;
        avtr_mesh_expln: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    AccessoryListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                avtr_mtrl_expln?: string | null | undefined;
                avtr_mesh_expln?: string | null | undefined;
                id: number;
                crt_dt: Date;
                mdfcn_dt: Date;
                prchs_amt: number;
                rprs_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    file_sz: number;
                    orgnl_file_nm: string;
                };
                indct_seq: number;
                avtr_expln: string;
                gndr_se_cd: string;
                bsc_pvsn_yn: NonNullable<boolean | undefined>;
                acsy_se_cd: string;
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
    NotificationSearch: import("yup").ObjectSchema<{
        ntfc_type_cd: string | null | undefined;
        start_day: Date;
        end_day: any;
    }, import("yup").AnyObject, {
        ntfc_type_cd: undefined;
        start_day: undefined;
        end_day: any;
    }, "">;
    NotificationSearchReq: import("yup").ObjectSchema<{
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
    NotificationCreate: import("yup").ObjectSchema<{
        rcvr_id: number;
        sndpty_id: number | null | undefined;
        ntfc_type_cd: string;
        ntfc_type_dtl_cd: string;
        ntfc_ttl: string;
        ntfc_cn: string;
    }, import("yup").AnyObject, {
        rcvr_id: undefined;
        sndpty_id: undefined;
        ntfc_type_cd: undefined;
        ntfc_type_dtl_cd: undefined;
        ntfc_ttl: undefined;
        ntfc_cn: undefined;
    }, "">;
    NotificationList: import("yup").ObjectSchema<{
        rcvr_id: number;
        sndpty_id: number | null | undefined;
        ntfc_type_cd: string;
        ntfc_type_dtl_cd: string;
        ntfc_ttl: string;
        ntfc_cn: string;
        id: number;
        spce_id: number | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        rcvr_id: undefined;
        sndpty_id: undefined;
        ntfc_type_cd: undefined;
        ntfc_type_dtl_cd: undefined;
        ntfc_ttl: undefined;
        ntfc_cn: undefined;
        id: undefined;
        spce_id: undefined;
        crt_dt: undefined;
    }, "">;
    NotificationSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                spce_id?: number | null | undefined;
                sndpty_id?: number | null | undefined;
                id: number;
                crt_dt: Date;
                ntfc_type_cd: string;
                rcvr_id: number;
                ntfc_type_dtl_cd: string;
                ntfc_ttl: string;
                ntfc_cn: string;
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
    BoardSearch: import("yup").ObjectSchema<{
        pst_se_cd: string;
        rgn_lib_id: number | null | undefined;
        pst_ttl: string;
        wrtr_id: number | null | undefined;
    }, import("yup").AnyObject, {
        pst_se_cd: undefined;
        rgn_lib_id: undefined;
        pst_ttl: undefined;
        wrtr_id: undefined;
    }, "">;
    BoardList: import("yup").ObjectSchema<{
        pst_se_cd: string;
        rgn_lib_id: number | null | undefined;
        pst_ttl: string;
        wrtr_id: number | null | undefined;
        id: number;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        pst_se_cd: undefined;
        rgn_lib_id: undefined;
        pst_ttl: undefined;
        wrtr_id: undefined;
        id: undefined;
        crt_dt: undefined;
    }, "">;
    BoardDetail: import("yup").ObjectSchema<{
        pst_se_cd: string;
        rgn_lib_id: number | null | undefined;
        pst_ttl: string;
        wrtr_id: number | null | undefined;
        id: number;
        crt_dt: Date;
        pst_cn: string;
    }, import("yup").AnyObject, {
        pst_se_cd: undefined;
        rgn_lib_id: undefined;
        pst_ttl: undefined;
        wrtr_id: undefined;
        id: undefined;
        crt_dt: undefined;
        pst_cn: undefined;
    }, "">;
    BoardCreate: import("yup").ObjectSchema<{
        pst_se_cd: string | null | undefined;
        rgn_lib_id: number | null | undefined;
        pst_ttl: string;
        wrtr_id: number | null | undefined;
        pst_cn: string;
    }, import("yup").AnyObject, {
        pst_se_cd: undefined;
        rgn_lib_id: undefined;
        pst_ttl: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
    }, "">;
    BoardUpdate: import("yup").ObjectSchema<{
        pst_se_cd: string | null | undefined;
        rgn_lib_id: number | null | undefined;
        pst_ttl: string;
        wrtr_id: number | null | undefined;
        pst_cn: string;
    }, import("yup").AnyObject, {
        pst_se_cd: undefined;
        rgn_lib_id: undefined;
        pst_ttl: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
    }, "">;
    BoardSearchReq: import("yup").ObjectSchema<{
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
    BoardSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                wrtr_id?: number | null | undefined;
                rgn_lib_id?: number | null | undefined;
                id: number;
                crt_dt: Date;
                pst_ttl: string;
                pst_se_cd: string;
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
    BoardDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            wrtr_id?: number | null | undefined;
            rgn_lib_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            pst_ttl: string;
            pst_cn: string;
            pst_se_cd: string;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ChannelSearchRes: import("yup").ObjectSchema<{
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
    BannerSearch: import("yup").ObjectSchema<{
        bnr_pstn_cd: string;
        bnr_ttl: string | null | undefined;
        indct_seq_no: number | null;
    }, import("yup").AnyObject, {
        bnr_pstn_cd: undefined;
        bnr_ttl: undefined;
        indct_seq_no: 0;
    }, "">;
    BannerList: import("yup").ObjectSchema<{
        bnr_pstn_cd: string;
        bnr_ttl: string | null | undefined;
        indct_seq_no: number | null;
        id: number;
        lnkg_url_addr: string | null | undefined;
        crt_dt: Date;
        file_id: number | null | undefined;
        file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
    }, import("yup").AnyObject, {
        bnr_pstn_cd: undefined;
        bnr_ttl: undefined;
        indct_seq_no: 0;
        id: undefined;
        lnkg_url_addr: undefined;
        crt_dt: undefined;
        file_id: undefined;
        file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
    }, "">;
    BannerSearchReq: import("yup").ObjectSchema<{
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
    BannerSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                bnr_ttl?: string | null | undefined;
                lnkg_url_addr?: string | null | undefined;
                file_id?: number | null | undefined;
                id: number;
                file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                crt_dt: Date;
                bnr_pstn_cd: string;
                indct_seq_no: number | null;
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
    ClosetDetail: import("yup").ObjectSchema<{
        avtr_rprs_img_file_id: number;
        prfl_img_file_id: number;
        avtr_stts_msg_cn: string | null | undefined;
        user_wer_item_cn: {} | null;
        user_pss_item_cn: {} | null;
        id: number;
        user_id: string;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        avtr_rprs_img_file_id: undefined;
        prfl_img_file_id: undefined;
        avtr_stts_msg_cn: undefined;
        user_wer_item_cn: {};
        user_pss_item_cn: {};
        id: undefined;
        user_id: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    ClosetCreate: import("yup").ObjectSchema<{
        avtr_rprs_img_file_id: number;
        prfl_img_file_id: number;
        avtr_stts_msg_cn: string | null | undefined;
        user_wer_item_cn: {} | null;
        user_pss_item_cn: {} | null;
    }, import("yup").AnyObject, {
        avtr_rprs_img_file_id: undefined;
        prfl_img_file_id: undefined;
        avtr_stts_msg_cn: undefined;
        user_wer_item_cn: {};
        user_pss_item_cn: {};
    }, "">;
    ClosetUpdate: import("yup").ObjectSchema<{
        avtr_rprs_img_file_id: number;
        prfl_img_file_id: number;
        avtr_stts_msg_cn: string | null | undefined;
        user_wer_item_cn: {} | null;
        user_pss_item_cn: {} | null;
    }, import("yup").AnyObject, {
        avtr_rprs_img_file_id: undefined;
        prfl_img_file_id: undefined;
        avtr_stts_msg_cn: undefined;
        user_wer_item_cn: {};
        user_pss_item_cn: {};
    }, "">;
    ClosetDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            avtr_stts_msg_cn?: string | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            user_id: string;
            user_wer_item_cn: {} | null;
            user_pss_item_cn: {} | null;
            avtr_rprs_img_file_id: number;
            prfl_img_file_id: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    UserSearch: import("yup").ObjectSchema<{
        reg_type_cd: string | undefined;
        id: number | undefined;
        eml_addr: string | undefined;
        nckn_nm: string;
        crt_dt: Date | undefined;
    }, import("yup").AnyObject, {
        reg_type_cd: undefined;
        id: undefined;
        eml_addr: undefined;
        nckn_nm: undefined;
        crt_dt: undefined;
    }, "">;
    UserSearchReq: import("yup").ObjectSchema<{
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
    UserSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                last_cntn_dt?: Date | null | undefined;
                pet_nckn_nm?: string | null | undefined;
                avtr_stts_msg_cn?: string | null | undefined;
                clt_id?: number | null | undefined;
                id: number;
                crt_dt: Date;
                mdfcn_dt: Date;
                nckn_nm: string;
                acml_dclr_nmtm: number;
                eml_addr: string;
                bkmny_amt: number;
                mbl_telno: string;
                edu_fnsh_yn: NonNullable<boolean | undefined>;
                bsc_reg_type_cd: string;
                avtr_rprs_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                };
                prfl_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                };
                ntfc_rcptn_yn: NonNullable<boolean | undefined>;
                spce_kep_yn: NonNullable<boolean | undefined>;
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
    UserDetail: import("yup").ObjectSchema<{
        id: number;
        mbl_telno: string;
        bsc_reg_type_cd: string;
        nckn_nm: string;
        pet_nckn_nm: string | null | undefined;
        avtr_stts_msg_cn: string | null | undefined;
        avtr_rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        };
        prfl_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        };
        eml_addr: string;
        clt_id: number | null | undefined;
        bkmny_amt: number;
        ntfc_rcptn_yn: NonNullable<boolean | undefined>;
        acml_dclr_nmtm: number;
        spce_kep_yn: NonNullable<boolean | undefined>;
        edu_fnsh_yn: NonNullable<boolean | undefined>;
        last_cntn_dt: Date | null | undefined;
        crt_dt: Date;
        mdfcn_dt: Date;
        emails: {
            id: number;
            reg_type_cd: string;
            eml_addr: string;
        }[];
        closet: {
            id: number;
            pet_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            user_wer_item_cn: {} | null;
            user_pss_item_cn: {} | null;
        };
        bksf_spce_id: number | null | undefined;
    }, import("yup").AnyObject, {
        id: undefined;
        mbl_telno: undefined;
        bsc_reg_type_cd: undefined;
        nckn_nm: undefined;
        pet_nckn_nm: undefined;
        avtr_stts_msg_cn: undefined;
        avtr_rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        prfl_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        eml_addr: undefined;
        clt_id: undefined;
        bkmny_amt: undefined;
        ntfc_rcptn_yn: false;
        acml_dclr_nmtm: undefined;
        spce_kep_yn: false;
        edu_fnsh_yn: false;
        last_cntn_dt: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
        emails: undefined;
        closet: {
            id: undefined;
            pet_img_file: {
                id: undefined;
                orgnl_file_nm: undefined;
                file_url_addr: undefined;
                thmb_url_addr: undefined;
            };
            user_wer_item_cn: {};
            user_pss_item_cn: {};
        };
        bksf_spce_id: undefined;
    }, "">;
    UserDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            last_cntn_dt?: Date | null | undefined;
            pet_nckn_nm?: string | null | undefined;
            avtr_stts_msg_cn?: string | null | undefined;
            clt_id?: number | null | undefined;
            bksf_spce_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            nckn_nm: string;
            acml_dclr_nmtm: number;
            eml_addr: string;
            bkmny_amt: number;
            mbl_telno: string;
            edu_fnsh_yn: NonNullable<boolean | undefined>;
            bsc_reg_type_cd: string;
            avtr_rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            };
            prfl_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            };
            ntfc_rcptn_yn: NonNullable<boolean | undefined>;
            spce_kep_yn: NonNullable<boolean | undefined>;
            emails: {
                id: number;
                reg_type_cd: string;
                eml_addr: string;
            }[];
            closet: {
                id: number;
                pet_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                user_wer_item_cn: {} | null;
                user_pss_item_cn: {} | null;
            };
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    UserProfileUpdate: import("yup").ObjectSchema<{
        nckn_nm: string;
        pet_nckn_nm: string | null | undefined;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        pet_nckn_nm: undefined;
    }, "">;
    UserNicknameRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            id: number;
            nckn_nm: string;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    UserSocialAccountReq: import("yup").ObjectSchema<{
        social_token: string;
        reg_type_cd: string;
    }, import("yup").AnyObject, {
        social_token: undefined;
        reg_type_cd: undefined;
    }, "">;
    TrainingResult: import("yup").ObjectSchema<{
        user_id: number;
        bkmny_amt: number;
        edu_fnsh_yn: NonNullable<boolean | undefined>;
    }, import("yup").AnyObject, {
        user_id: undefined;
        bkmny_amt: undefined;
        edu_fnsh_yn: false;
    }, "">;
    TrainingResultRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            bkmny_amt: number;
            edu_fnsh_yn: NonNullable<boolean | undefined>;
            user_id: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ResetPassword: import("yup").ObjectSchema<{
        password: string;
    }, import("yup").AnyObject, {
        password: undefined;
    }, "">;
    AccountBase: import("yup").ObjectSchema<{
        id: number;
        mbl_telno: string;
        reg_type_cd: string;
        eml_addr: string;
        mobile_verified_token: string | null;
    }, import("yup").AnyObject, {
        id: undefined;
        mbl_telno: undefined;
        reg_type_cd: undefined;
        eml_addr: undefined;
        mobile_verified_token: null;
    }, "">;
    AccountRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            id: number;
            reg_type_cd: string;
            eml_addr: string;
            mbl_telno: string;
            mobile_verified_token: string | null;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    CouponDetail: import("yup").ObjectSchema<{
        id: number;
        reg_dt: Date;
        exgtk_issu_no: string;
        user_id: number;
        exgtk_rprs_id: number;
        crt_dt: Date;
        use_dt: Date | null | undefined;
        rgn_cd: string;
        exgtk_nm: string;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        exgtk_issu_cn: string | undefined;
        exgtk_img_file_id: number | null | undefined;
        img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
    } | null, import("yup").AnyObject, {
        id: undefined;
        reg_dt: undefined;
        exgtk_issu_no: undefined;
        user_id: undefined;
        exgtk_rprs_id: undefined;
        crt_dt: undefined;
        use_dt: undefined;
        rgn_cd: undefined;
        exgtk_nm: undefined;
        prchs_amt: undefined;
        vld_prd_bgng_dt: undefined;
        vld_prd_end_dt: undefined;
        exgtk_issu_cn: undefined;
        exgtk_img_file_id: undefined;
        img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
    }, "">;
    CouponDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            exgtk_issu_cn?: string | undefined;
            exgtk_img_file_id?: number | null | undefined;
            use_dt?: Date | null | undefined;
            id: number;
            crt_dt: Date;
            user_id: number;
            rgn_cd: string;
            exgtk_nm: string;
            prchs_amt: number;
            vld_prd_bgng_dt: Date;
            vld_prd_end_dt: Date;
            reg_dt: Date;
            img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
            exgtk_issu_no: string;
            exgtk_rprs_id: number;
        } | null;
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    CouponListRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                exgtk_issu_cn?: string | null | undefined;
                exgtk_img_file_id?: number | null | undefined;
                id: number;
                rgn_cd: string;
                exgtk_nm: string;
                exgtk_tnocs: number;
                prchs_amt: number;
                vld_prd_bgng_dt: Date;
                vld_prd_end_dt: Date;
                img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                remain_cnt: number;
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
    LibrarySearch: import("yup").ObjectSchema<{
        spce_kep_id: number | null | undefined;
        rgn_cd: string;
        lib_type_cd: string;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        spce_kep_id: undefined;
        rgn_cd: undefined;
        lib_type_cd: undefined;
        crt_dt: undefined;
    }, "">;
    LibraryList: import("yup").ObjectSchema<{
        spce_kep_id: number | null | undefined;
        rgn_cd: string;
        lib_type_cd: string;
        id: number;
        lib_nm: string;
        spce_otln_cn: string | undefined;
        crt_dt: Date;
        lib_addr: string | null | undefined;
        oper_info_cn: string | null | undefined;
        lib_telno: string | null | undefined;
        site_url_addr: string | null | undefined;
        rprs_img_file_id: number | null | undefined;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        lib_expln: string | null | undefined;
        spce_id: number | null | undefined;
    }, import("yup").AnyObject, {
        spce_kep_id: undefined;
        rgn_cd: undefined;
        lib_type_cd: undefined;
        id: undefined;
        lib_nm: undefined;
        spce_otln_cn: undefined;
        crt_dt: undefined;
        lib_addr: undefined;
        oper_info_cn: undefined;
        lib_telno: undefined;
        site_url_addr: undefined;
        rprs_img_file_id: undefined;
        rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        lib_expln: undefined;
        spce_id: undefined;
    }, "">;
    LibraryDetail: import("yup").ObjectSchema<{
        spce_kep_id: number | null | undefined;
        rgn_cd: string;
        lib_type_cd: string;
        id: number;
        lib_nm: string;
        spce_otln_cn: string | undefined;
        crt_dt: Date;
        lib_addr: string | null | undefined;
        oper_info_cn: string | null | undefined;
        lib_telno: string | null | undefined;
        site_url_addr: string | null | undefined;
        rprs_img_file_id: number | null | undefined;
        rprs_img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        lib_expln: string | null | undefined;
        spce_id: number | null | undefined;
        img_files: ({
            thmb_url_addr?: string | null | undefined;
            indct_seq?: number | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null)[] | null | undefined;
    }, import("yup").AnyObject, {
        spce_kep_id: undefined;
        rgn_cd: undefined;
        lib_type_cd: undefined;
        id: undefined;
        lib_nm: undefined;
        spce_otln_cn: undefined;
        crt_dt: undefined;
        lib_addr: undefined;
        oper_info_cn: undefined;
        lib_telno: undefined;
        site_url_addr: undefined;
        rprs_img_file_id: undefined;
        rprs_img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        lib_expln: undefined;
        spce_id: undefined;
        img_files: undefined;
    }, "">;
    LibrarySearchReq: import("yup").ObjectSchema<{
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
    LibrarySearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                spce_id?: number | null | undefined;
                rprs_img_file_id?: number | null | undefined;
                spce_kep_id?: number | null | undefined;
                spce_otln_cn?: string | undefined;
                lib_addr?: string | null | undefined;
                oper_info_cn?: string | null | undefined;
                lib_telno?: string | null | undefined;
                site_url_addr?: string | null | undefined;
                lib_expln?: string | null | undefined;
                id: number;
                crt_dt: Date;
                rgn_cd: string;
                lib_type_cd: string;
                lib_nm: string;
                rprs_img_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
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
    LibraryDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            spce_id?: number | null | undefined;
            rprs_img_file_id?: number | null | undefined;
            spce_kep_id?: number | null | undefined;
            spce_otln_cn?: string | undefined;
            lib_addr?: string | null | undefined;
            oper_info_cn?: string | null | undefined;
            lib_telno?: string | null | undefined;
            site_url_addr?: string | null | undefined;
            lib_expln?: string | null | undefined;
            img_files?: ({
                thmb_url_addr?: string | null | undefined;
                indct_seq?: number | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null)[] | null | undefined;
            id: number;
            crt_dt: Date;
            rgn_cd: string;
            lib_type_cd: string;
            lib_nm: string;
            rprs_img_file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                orgnl_file_nm: string;
            } | null;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    CodeSearch: import("yup").ObjectSchema<{
        group_cd: string[] | undefined;
    }, import("yup").AnyObject, {
        group_cd: "";
    }, "">;
    CodeList: import("yup").ObjectSchema<{
        group_cd: string;
        group_nm: string | null | undefined;
        list: {
            cd: string;
            cd_nm: string;
            indct_seq: number;
        }[] | undefined;
    }, import("yup").AnyObject, {
        group_cd: undefined;
        group_nm: undefined;
        list: "";
    }, "">;
    CodeSearchReq: import("yup").ObjectSchema<{
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
    CodeSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                group_nm?: string | null | undefined;
                list?: {
                    cd: string;
                    cd_nm: string;
                    indct_seq: number;
                }[] | undefined;
                group_cd: string;
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
    GreetingSearch: import("yup").ObjectSchema<{
        grt_cn: string;
        ssaw_bgng_mm: number;
        ssaw_end_mm: number;
        use_yn: number;
    }, import("yup").AnyObject, {
        grt_cn: undefined;
        ssaw_bgng_mm: undefined;
        ssaw_end_mm: undefined;
        use_yn: undefined;
    }, "">;
    GreetingList: import("yup").ObjectSchema<{
        grt_cn: string;
        ssaw_bgng_mm: number;
        ssaw_end_mm: number;
        id: number;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        grt_cn: undefined;
        ssaw_bgng_mm: undefined;
        ssaw_end_mm: undefined;
        id: undefined;
        crt_dt: undefined;
    }, "">;
    GreetingDetail: import("yup").ObjectSchema<{
        grt_cn: string;
        ssaw_bgng_mm: number;
        ssaw_end_mm: number;
        id: number;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        grt_cn: undefined;
        ssaw_bgng_mm: undefined;
        ssaw_end_mm: undefined;
        id: undefined;
        crt_dt: undefined;
    }, "">;
    GreetingCreate: import("yup").ObjectSchema<{
        grt_cn: string;
        ssaw_bgng_mm: number;
        ssaw_end_mm: number;
        use_yn: number;
    }, import("yup").AnyObject, {
        grt_cn: undefined;
        ssaw_bgng_mm: undefined;
        ssaw_end_mm: undefined;
        use_yn: undefined;
    }, "">;
    GreetingSearchReq: import("yup").ObjectSchema<{
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
    GreetingSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                id: number;
                crt_dt: Date;
                grt_cn: string;
                ssaw_bgng_mm: number;
                ssaw_end_mm: number;
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
    GreetingDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            id: number;
            crt_dt: Date;
            grt_cn: string;
            ssaw_bgng_mm: number;
            ssaw_end_mm: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    PolicySearch: import("yup").ObjectSchema<{
        trms_ttl: string;
        esntl_yn: number;
        enfc_bgng_dt: Date;
        updt_trms_agre_need_yn: number;
        trms_cn: string;
        crt_dt: Date | undefined;
    }, import("yup").AnyObject, {
        trms_ttl: undefined;
        esntl_yn: undefined;
        enfc_bgng_dt: undefined;
        updt_trms_agre_need_yn: 0;
        trms_cn: undefined;
        crt_dt: undefined;
    }, "">;
    PolicyList: import("yup").ObjectSchema<{
        trms_ttl: string;
        esntl_yn: number;
        enfc_bgng_dt: Date;
        updt_trms_agre_need_yn: number;
        id: number;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        trms_ttl: undefined;
        esntl_yn: undefined;
        enfc_bgng_dt: undefined;
        updt_trms_agre_need_yn: 0;
        id: undefined;
        crt_dt: undefined;
    }, "">;
    PolicyDetail: import("yup").ObjectSchema<{
        trms_ttl: string;
        esntl_yn: number;
        enfc_bgng_dt: Date;
        updt_trms_agre_need_yn: number;
        id: number;
        crt_dt: Date;
        trms_cn: string;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        trms_ttl: undefined;
        esntl_yn: undefined;
        enfc_bgng_dt: undefined;
        updt_trms_agre_need_yn: 0;
        id: undefined;
        crt_dt: undefined;
        trms_cn: undefined;
        mdfcn_dt: undefined;
    }, "">;
    PolicyCreate: import("yup").ObjectSchema<{
        trms_ttl: string;
        esntl_yn: number;
        enfc_bgng_dt: Date;
        updt_trms_agre_need_yn: number;
        trms_cn: string;
    }, import("yup").AnyObject, {
        trms_ttl: undefined;
        esntl_yn: undefined;
        enfc_bgng_dt: undefined;
        updt_trms_agre_need_yn: 0;
        trms_cn: undefined;
    }, "">;
    PolicySearchReq: import("yup").ObjectSchema<{
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
    PolicySearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                id: number;
                crt_dt: Date;
                trms_ttl: string;
                esntl_yn: number;
                enfc_bgng_dt: Date;
                updt_trms_agre_need_yn: number;
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
    PolicyDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            trms_ttl: string;
            esntl_yn: number;
            enfc_bgng_dt: Date;
            updt_trms_agre_need_yn: number;
            trms_cn: string;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    PasswordUpdate: import("yup").ObjectSchema<{
        new_password: string;
    }, import("yup").AnyObject, {
        new_password: undefined;
    }, "">;
    SendMobileCodeRequest: import("yup").ObjectSchema<{
        mobile: string;
        type: string;
    }, import("yup").AnyObject, {
        mobile: undefined;
        type: undefined;
    }, "">;
    ConfirmMobileCodeRequest: import("yup").ObjectSchema<{
        mobile: string;
        type: string;
        code: string;
    }, import("yup").AnyObject, {
        mobile: undefined;
        type: undefined;
        code: undefined;
    }, "">;
    ConfirmRegistrationMobileCodeResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            reason: string;
            is_success: NonNullable<boolean | undefined>;
            result: {
                mobile_verified_token: string | null;
            };
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ConfirmFindAccountMobileCodeResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            reason: string;
            is_success: NonNullable<boolean | undefined>;
            result: {
                id: number;
                reg_type_cd: string;
                eml_addr: string;
                mbl_telno: string;
                mobile_verified_token: string | null;
            };
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    EmailRegistrationReq: import("yup").ObjectSchema<{
        mbl_telno: string;
        nckn_nm: string;
        reg_type_cd: string;
        policy_agreements: {
            plcy_id: number;
            agre_yn: NonNullable<boolean | undefined>;
        }[];
        mobile_verified_token: string;
        agent: {
            fcm_token?: string | null | undefined;
            platform: {
                os: string;
                device_id: string;
                app_version: string;
                device_model: string;
            };
            os: string;
            sdk_version: string;
        };
        eml_addr: string;
        password: string;
    }, import("yup").AnyObject, {
        mbl_telno: undefined;
        nckn_nm: undefined;
        reg_type_cd: undefined;
        policy_agreements: "";
        mobile_verified_token: undefined;
        agent: {
            fcm_token: undefined;
            platform: {
                os: undefined;
                device_id: undefined;
                app_version: undefined;
                device_model: undefined;
            };
            os: undefined;
            sdk_version: undefined;
        };
        eml_addr: undefined;
        password: undefined;
    }, "">;
    SocialRegistrationReq: import("yup").ObjectSchema<{
        mbl_telno: string;
        nckn_nm: string;
        reg_type_cd: string;
        policy_agreements: {
            plcy_id: number;
            agre_yn: NonNullable<boolean | undefined>;
        }[];
        mobile_verified_token: string;
        agent: {
            fcm_token?: string | null | undefined;
            platform: {
                os: string;
                device_id: string;
                app_version: string;
                device_model: string;
            };
            os: string;
            sdk_version: string;
        };
        social_token: string;
    }, import("yup").AnyObject, {
        mbl_telno: undefined;
        nckn_nm: undefined;
        reg_type_cd: undefined;
        policy_agreements: "";
        mobile_verified_token: undefined;
        agent: {
            fcm_token: undefined;
            platform: {
                os: undefined;
                device_id: undefined;
                app_version: undefined;
                device_model: undefined;
            };
            os: undefined;
            sdk_version: undefined;
        };
        social_token: undefined;
    }, "">;
    LibraryRegistrationReq: import("yup").ObjectSchema<{
        mbl_telno: string;
        nckn_nm: string;
        reg_type_cd: string;
        policy_agreements: {
            plcy_id: number;
            agre_yn: NonNullable<boolean | undefined>;
        }[];
        mobile_verified_token: string;
        agent: {
            fcm_token?: string | null | undefined;
            platform: {
                os: string;
                device_id: string;
                app_version: string;
                device_model: string;
            };
            os: string;
            sdk_version: string;
        };
        lib_acnt_nm: string;
        lib_key_no: string;
    }, import("yup").AnyObject, {
        mbl_telno: undefined;
        nckn_nm: undefined;
        reg_type_cd: undefined;
        policy_agreements: "";
        mobile_verified_token: undefined;
        agent: {
            fcm_token: undefined;
            platform: {
                os: undefined;
                device_id: undefined;
                app_version: undefined;
                device_model: undefined;
            };
            os: undefined;
            sdk_version: undefined;
        };
        lib_acnt_nm: undefined;
        lib_key_no: undefined;
    }, "">;
    DeviceAgent: import("yup").ObjectSchema<{
        fcm_token: string | null | undefined;
        platform: {
            os: string;
            device_id: string;
            app_version: string;
            device_model: string;
        };
        os: string;
        sdk_version: string;
    }, import("yup").AnyObject, {
        fcm_token: undefined;
        platform: {
            os: undefined;
            device_id: undefined;
            app_version: undefined;
            device_model: undefined;
        };
        os: undefined;
        sdk_version: undefined;
    }, "">;
    PortalLoginRequest: import("yup").ObjectSchema<{
        email: string;
        password: string;
        agent: {
            fcm_token?: string | null | undefined;
            platform: {
                os: string;
                device_id: string;
                app_version: string;
                device_model: string;
            };
            os: string;
            sdk_version: string;
        };
    }, import("yup").AnyObject, {
        email: undefined;
        password: undefined;
        agent: {
            fcm_token: undefined;
            platform: {
                os: undefined;
                device_id: undefined;
                app_version: undefined;
                device_model: undefined;
            };
            os: undefined;
            sdk_version: undefined;
        };
    }, "">;
    PortalLoginResult: import("yup").ObjectSchema<{
        user: {
            emails?: {
                id: number;
                reg_type_cd: string;
                eml_addr: string;
            }[] | undefined;
            pswd_chg_dt?: Date | null | undefined;
            id: number;
            nckn_nm: string;
        };
        current_reported_cnt: number;
        max_reported_cnt: number;
        token: string;
    }, import("yup").AnyObject, {
        user: {
            id: undefined;
            nckn_nm: undefined;
            pswd_chg_dt: undefined;
            emails: undefined;
        };
        current_reported_cnt: 0;
        max_reported_cnt: 3;
        token: undefined;
    }, "">;
    PortalLoginResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            user: {
                emails?: {
                    id: number;
                    reg_type_cd: string;
                    eml_addr: string;
                }[] | undefined;
                pswd_chg_dt?: Date | null | undefined;
                id: number;
                nckn_nm: string;
            };
            token: string;
            current_reported_cnt: number;
            max_reported_cnt: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    PortalGuestLoginResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            user: {} | null;
            token: string;
            current_reported_cnt: number;
            max_reported_cnt: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    PortalLogoutResult: import("yup").ObjectSchema<{
        user: {} | null;
    }, import("yup").AnyObject, {
        user: null;
    }, "">;
    PortalLogoutResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            user: {} | null;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    PortalSocialLoginRequest: import("yup").ObjectSchema<{
        social_token: string;
        reg_type_cd: string;
        agent: {
            fcm_token?: string | null | undefined;
            platform: {
                os: string;
                device_id: string;
                app_version: string;
                device_model: string;
            };
            os: string;
            sdk_version: string;
        };
    }, import("yup").AnyObject, {
        social_token: undefined;
        reg_type_cd: undefined;
        agent: {
            fcm_token: undefined;
            platform: {
                os: undefined;
                device_id: undefined;
                app_version: undefined;
                device_model: undefined;
            };
            os: undefined;
            sdk_version: undefined;
        };
    }, "">;
    SampleSearch: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        ntc_cn: string;
        atch_file_id: number | null;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        ntc_type_cd: undefined;
        ntc_nm: undefined;
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        ntc_cn: undefined;
        atch_file_id: 0;
        crt_dt: undefined;
    }, "">;
    SampleList: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        id: number;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        ntc_type_cd: undefined;
        ntc_nm: undefined;
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        id: undefined;
        crt_dt: undefined;
    }, "">;
    SampleDetail: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        id: number;
        crt_dt: Date;
        ntc_cn: string;
        file_url_addr: string | null | undefined;
        file_nm: string | null | undefined;
        file_sz: number | null | undefined;
        mdfcn_dt: Date;
        inq_cnt: number;
        next_id: number | null | undefined;
        prev_id: number | null | undefined;
    }, import("yup").AnyObject, {
        ntc_type_cd: undefined;
        ntc_nm: undefined;
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        id: undefined;
        crt_dt: undefined;
        ntc_cn: undefined;
        file_url_addr: undefined;
        file_nm: undefined;
        file_sz: undefined;
        mdfcn_dt: undefined;
        inq_cnt: 0;
        next_id: undefined;
        prev_id: undefined;
    }, "">;
    SampleCreate: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        ntc_cn: string;
        atch_file_id: number | null;
    }, import("yup").AnyObject, {
        ntc_type_cd: undefined;
        ntc_nm: undefined;
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        ntc_cn: undefined;
        atch_file_id: 0;
    }, "">;
    SampleUpdate: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        ntc_cn: string;
        atch_file_id: number | null;
    }, import("yup").AnyObject, {
        ntc_type_cd: undefined;
        ntc_nm: undefined;
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        ntc_cn: undefined;
        atch_file_id: 0;
    }, "">;
    SampleSearchReq: import("yup").ObjectSchema<{
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
    SampleSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                pstg_bgng_dt?: Date | null | undefined;
                mngr_id?: number | null | undefined;
                id: number;
                ntc_type_cd: string;
                ntc_nm: string;
                expsr_yn: NonNullable<boolean | undefined>;
                html_use_yn: NonNullable<boolean | undefined>;
                crt_dt: Date;
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
    SampleDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            pstg_bgng_dt?: Date | null | undefined;
            mngr_id?: number | null | undefined;
            file_url_addr?: string | null | undefined;
            file_nm?: string | null | undefined;
            file_sz?: number | null | undefined;
            next_id?: number | null | undefined;
            prev_id?: number | null | undefined;
            id: number;
            ntc_type_cd: string;
            ntc_nm: string;
            expsr_yn: NonNullable<boolean | undefined>;
            html_use_yn: NonNullable<boolean | undefined>;
            ntc_cn: string;
            crt_dt: Date;
            inq_cnt: number;
            mdfcn_dt: Date;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
};
export = _exports;
//# sourceMappingURL=index.d.ts.map