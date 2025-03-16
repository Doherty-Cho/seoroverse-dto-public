declare const _exports: {
    SchoolManagementSearch: import("yup").ObjectSchema<{
        school_nm: string | null | undefined;
        school_address: string | null | undefined;
        id: number | null | undefined;
    }, import("yup").AnyObject, {
        school_nm: undefined;
        school_address: undefined;
        id: undefined;
    }, "">;
    SchoolManagementList: import("yup").ObjectSchema<{
        school_nm: string;
        school_address: string;
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        school_nm: undefined;
        school_address: undefined;
        id: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    SchoolManagementDetail: import("yup").ObjectSchema<{
        school_nm: string;
        school_address: string;
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        school_nm: undefined;
        school_address: undefined;
        id: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    SchoolManagementCreate: import("yup").ObjectSchema<{
        school_nm: string | null | undefined;
        school_address: string | null | undefined;
    }, import("yup").AnyObject, {
        school_nm: undefined;
        school_address: undefined;
    }, "">;
    SchoolManagementUpdate: import("yup").ObjectSchema<{
        school_nm: string | null | undefined;
        school_address: string | null | undefined;
    }, import("yup").AnyObject, {
        school_nm: undefined;
        school_address: undefined;
    }, "">;
    SchoolManagementSearchReq: import("yup").ObjectSchema<{
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
    SchoolManagementSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                id: number;
                crt_dt: Date;
                mdfcn_dt: Date;
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
    SchoolManagementDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            school_nm: string;
            school_address: string;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    HomeAccessStatisticsRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            month: number;
            week: number;
            yesterday: number;
            last_month: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    HomeMemberStatisticsRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            new_join: number;
            whdwl: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    HomeRelayCreationStatisticsRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                report: number;
                date: string;
                creation: number;
                comment: number;
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
    OneBookManagementCreate: import("yup").ObjectSchema<{
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
    OneBookManagementUpdate: import("yup").ObjectSchema<{
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
    OneBookManagementSearchReq: import("yup").ObjectSchema<{
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
    OneBookManagementSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                lgn_id?: string | null | undefined;
                pblco_nm?: string | null | undefined;
                id: number;
                expsr_yn: NonNullable<boolean | undefined>;
                mngr_id: number;
                crt_dt: Date;
                crtr_yr: string;
                book_ttl: string;
                athr_nm: string;
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
    OneBookManagementDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            lgn_id?: string | null | undefined;
            pblco_nm?: string | null | undefined;
            intv_vdo_file_id?: number | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            mngr_id: number;
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
    MemberStatisticsSearch: import("yup").ObjectSchema<{
        unit: string;
        start_day: Date;
        end_day: Date;
        is_fixed_period: NonNullable<boolean | undefined>;
        is_withdrawal: NonNullable<boolean | undefined>;
    }, import("yup").AnyObject, {
        unit: string;
        start_day: undefined;
        end_day: undefined;
        is_fixed_period: true;
        is_withdrawal: false;
    }, "">;
    MemberStatisticsReq: import("yup").ObjectSchema<{
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
    MemberStatisticsRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                reg_type_cd?: string | null | undefined;
                reg_type_nm?: string | null | undefined;
                count: number;
                date: string;
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
    MemberStatistics: import("yup").ObjectSchema<{
        date: string;
        reg_type_cd: string | null | undefined;
        reg_type_nm: string | null | undefined;
        count: number;
    }, import("yup").AnyObject, {
        date: undefined;
        reg_type_cd: undefined;
        reg_type_nm: undefined;
        count: undefined;
    }, "">;
    PortalStatisticsSearch: import("yup").ObjectSchema<{
        unit: string;
        start_day: Date;
        end_day: Date;
        is_fixed_period: NonNullable<boolean | undefined>;
    }, import("yup").AnyObject, {
        unit: string;
        start_day: undefined;
        end_day: undefined;
        is_fixed_period: true;
    }, "">;
    PortalStatisticsReq: import("yup").ObjectSchema<{
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
    SpaceStatisticsSearch: import("yup").ObjectSchema<{
        unit: string;
        start_day: Date;
        end_day: Date;
        is_fixed_period: NonNullable<boolean | undefined>;
        spce_id: number;
    }, import("yup").AnyObject, {
        unit: string;
        start_day: undefined;
        end_day: undefined;
        is_fixed_period: true;
        spce_id: undefined;
    }, "">;
    SpaceStatisticsReq: import("yup").ObjectSchema<{
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
    AccessStatisticsRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                count: number;
                date: string;
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
    AccessStatistics: import("yup").ObjectSchema<{
        date: string;
        count: number;
    }, import("yup").AnyObject, {
        date: undefined;
        count: undefined;
    }, "">;
    HallOfFameManagementSearchReq: import("yup").ObjectSchema<{
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
    HallOfFameManagementSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                id: number;
                crt_dt: Date;
                nckn_nm: string;
                reg_type_cd: string;
                eml_addr: string;
                bkmny_amt: number;
                user_id: number;
                crtr_ym: string;
                hof_se_cd: string;
                hof_dtl_se_cd: string;
                rank: number;
                cmpn_give_yn: NonNullable<boolean | undefined>;
                whol_scr: number;
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
    CouponManagementSearch: import("yup").ObjectSchema<{
        exgtk_nm: string;
        rgn_cd: string;
        exgtk_tnocs: number;
        expsr_yn: NonNullable<boolean | undefined>;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        exgtk_issu_cn: string | null | undefined;
        exgtk_img_file_id: number | null | undefined;
        id: number;
        lgn_id: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        exgtk_nm: undefined;
        rgn_cd: string;
        exgtk_tnocs: undefined;
        expsr_yn: undefined;
        prchs_amt: undefined;
        vld_prd_bgng_dt: undefined;
        vld_prd_end_dt: undefined;
        exgtk_issu_cn: undefined;
        exgtk_img_file_id: undefined;
        id: undefined;
        lgn_id: undefined;
        crt_dt: undefined;
    }, "">;
    CouponManagementList: import("yup").ObjectSchema<{
        exgtk_nm: string;
        rgn_cd: string;
        exgtk_tnocs: number;
        expsr_yn: NonNullable<boolean | undefined>;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        id: number;
        reg_dt: Date;
        pay_cnt: number;
        use_cnt: number;
        lgn_id: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        exgtk_nm: undefined;
        rgn_cd: string;
        exgtk_tnocs: undefined;
        expsr_yn: undefined;
        prchs_amt: undefined;
        vld_prd_bgng_dt: undefined;
        vld_prd_end_dt: undefined;
        id: undefined;
        reg_dt: undefined;
        pay_cnt: undefined;
        use_cnt: undefined;
        lgn_id: undefined;
        crt_dt: undefined;
    }, "">;
    CouponManagementDetail: import("yup").ObjectSchema<{
        exgtk_nm: string;
        rgn_cd: string;
        exgtk_tnocs: number;
        expsr_yn: NonNullable<boolean | undefined>;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        id: number;
        reg_dt: Date;
        pay_cnt: number;
        use_cnt: number;
        lgn_id: string | null | undefined;
        crt_dt: Date;
        exgtk_issu_cn: string | null | undefined;
        exgtk_img_file_id: number | null | undefined;
        img_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
    }, import("yup").AnyObject, {
        exgtk_nm: undefined;
        rgn_cd: string;
        exgtk_tnocs: undefined;
        expsr_yn: undefined;
        prchs_amt: undefined;
        vld_prd_bgng_dt: undefined;
        vld_prd_end_dt: undefined;
        id: undefined;
        reg_dt: undefined;
        pay_cnt: undefined;
        use_cnt: undefined;
        lgn_id: undefined;
        crt_dt: undefined;
        exgtk_issu_cn: undefined;
        exgtk_img_file_id: undefined;
        img_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
    }, "">;
    CouponManagementCreate: import("yup").ObjectSchema<{
        exgtk_nm: string;
        rgn_cd: string;
        exgtk_tnocs: number;
        expsr_yn: NonNullable<boolean | undefined>;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        exgtk_issu_cn: string | null | undefined;
        exgtk_img_file_id: number | null | undefined;
    }, import("yup").AnyObject, {
        exgtk_nm: undefined;
        rgn_cd: string;
        exgtk_tnocs: undefined;
        expsr_yn: undefined;
        prchs_amt: undefined;
        vld_prd_bgng_dt: undefined;
        vld_prd_end_dt: undefined;
        exgtk_issu_cn: undefined;
        exgtk_img_file_id: undefined;
    }, "">;
    CouponManagementUpdate: import("yup").ObjectSchema<{
        exgtk_nm: string;
        rgn_cd: string;
        exgtk_tnocs: number;
        expsr_yn: NonNullable<boolean | undefined>;
        prchs_amt: number;
        vld_prd_bgng_dt: Date;
        vld_prd_end_dt: Date;
        exgtk_issu_cn: string | null | undefined;
        exgtk_img_file_id: number | null | undefined;
    }, import("yup").AnyObject, {
        exgtk_nm: undefined;
        rgn_cd: string;
        exgtk_tnocs: undefined;
        expsr_yn: undefined;
        prchs_amt: undefined;
        vld_prd_bgng_dt: undefined;
        vld_prd_end_dt: undefined;
        exgtk_issu_cn: undefined;
        exgtk_img_file_id: undefined;
    }, "">;
    CouponManagementSearchReq: import("yup").ObjectSchema<{
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
    CouponManagementSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                lgn_id?: string | null | undefined;
                id: number;
                expsr_yn: NonNullable<boolean | undefined>;
                crt_dt: Date;
                rgn_cd: string;
                exgtk_nm: string;
                exgtk_tnocs: number;
                prchs_amt: number;
                vld_prd_bgng_dt: Date;
                vld_prd_end_dt: Date;
                reg_dt: Date;
                pay_cnt: number;
                use_cnt: number;
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
    CouponManagementDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            lgn_id?: string | null | undefined;
            exgtk_issu_cn?: string | null | undefined;
            exgtk_img_file_id?: number | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            rgn_cd: string;
            exgtk_nm: string;
            exgtk_tnocs: number;
            prchs_amt: number;
            vld_prd_bgng_dt: Date;
            vld_prd_end_dt: Date;
            reg_dt: Date;
            pay_cnt: number;
            use_cnt: number;
            img_file: {
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
    ExhibitionBase: import("yup").ObjectSchema<{
        exhb_sqre_cd: string;
        exhb_conts_type_cd: string;
        conts_ttl: string;
        conts_file_id: number | null | undefined;
        vdo_spd: number | null;
        vdo_url_addr: string | null;
        thmb_file_id: number | null | undefined;
    }, import("yup").AnyObject, {
        exhb_sqre_cd: undefined;
        exhb_conts_type_cd: undefined;
        conts_ttl: "";
        conts_file_id: undefined;
        vdo_spd: 0;
        vdo_url_addr: "";
        thmb_file_id: undefined;
    }, "">;
    ExhibitionDetail: import("yup").ObjectSchema<{
        exhb_sqre_cd: string;
        exhb_conts_type_cd: string;
        conts_ttl: string;
        conts_file_id: number | null | undefined;
        vdo_spd: number | null;
        vdo_url_addr: string | null;
        thmb_file_id: number | null | undefined;
        id: number | null | undefined;
        conts_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
        thmb_file: {
            thmb_url_addr?: string | null | undefined;
            id: number;
            file_url_addr: string;
            orgnl_file_nm: string;
        } | null;
    }, import("yup").AnyObject, {
        exhb_sqre_cd: undefined;
        exhb_conts_type_cd: undefined;
        conts_ttl: "";
        conts_file_id: undefined;
        vdo_spd: 0;
        vdo_url_addr: "";
        thmb_file_id: undefined;
        id: undefined;
        conts_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
        thmb_file: {
            id: undefined;
            orgnl_file_nm: undefined;
            file_url_addr: undefined;
            thmb_url_addr: undefined;
        };
    }, "">;
    ExhibitionCreate: import("yup").ObjectSchema<{
        exhibition: {
            conts_file_id?: number | null | undefined;
            thmb_file_id?: number | null | undefined;
            exhb_sqre_cd: string;
            exhb_conts_type_cd: string;
            conts_ttl: string;
            vdo_spd: number | null;
            vdo_url_addr: string | null;
        } | null;
        jeonju: {
            conts_file_id?: number | null | undefined;
            thmb_file_id?: number | null | undefined;
            exhb_sqre_cd: string;
            exhb_conts_type_cd: string;
            conts_ttl: string;
            vdo_spd: number | null;
            vdo_url_addr: string | null;
        } | null;
        iksan: {
            conts_file_id?: number | null | undefined;
            thmb_file_id?: number | null | undefined;
            exhb_sqre_cd: string;
            exhb_conts_type_cd: string;
            conts_ttl: string;
            vdo_spd: number | null;
            vdo_url_addr: string | null;
        } | null;
    }, import("yup").AnyObject, {
        exhibition: {
            exhb_sqre_cd: undefined;
            exhb_conts_type_cd: undefined;
            conts_ttl: "";
            conts_file_id: undefined;
            vdo_spd: 0;
            vdo_url_addr: "";
            thmb_file_id: undefined;
        };
        jeonju: {
            exhb_sqre_cd: undefined;
            exhb_conts_type_cd: undefined;
            conts_ttl: "";
            conts_file_id: undefined;
            vdo_spd: 0;
            vdo_url_addr: "";
            thmb_file_id: undefined;
        };
        iksan: {
            exhb_sqre_cd: undefined;
            exhb_conts_type_cd: undefined;
            conts_ttl: "";
            conts_file_id: undefined;
            vdo_spd: 0;
            vdo_url_addr: "";
            thmb_file_id: undefined;
        };
    }, "">;
    ExhibitionDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            exhibition: {
                id?: number | null | undefined;
                conts_file_id?: number | null | undefined;
                thmb_file_id?: number | null | undefined;
                exhb_sqre_cd: string;
                exhb_conts_type_cd: string;
                conts_ttl: string;
                vdo_spd: number | null;
                vdo_url_addr: string | null;
                conts_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                thmb_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
            } | null;
            jeonju: {
                id?: number | null | undefined;
                conts_file_id?: number | null | undefined;
                thmb_file_id?: number | null | undefined;
                exhb_sqre_cd: string;
                exhb_conts_type_cd: string;
                conts_ttl: string;
                vdo_spd: number | null;
                vdo_url_addr: string | null;
                conts_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                thmb_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
            } | null;
            iksan: {
                id?: number | null | undefined;
                conts_file_id?: number | null | undefined;
                thmb_file_id?: number | null | undefined;
                exhb_sqre_cd: string;
                exhb_conts_type_cd: string;
                conts_ttl: string;
                vdo_spd: number | null;
                vdo_url_addr: string | null;
                conts_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
                thmb_file: {
                    thmb_url_addr?: string | null | undefined;
                    id: number;
                    file_url_addr: string;
                    orgnl_file_nm: string;
                } | null;
            } | null;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ManagerSearch: import("yup").ObjectSchema<{
        lvl_cd: string | undefined;
        rgn_cd: string | undefined;
        lgn_id: string | undefined;
        id: number | undefined;
        crt_dt: Date | undefined;
    }, import("yup").AnyObject, {
        lvl_cd: undefined;
        rgn_cd: undefined;
        lgn_id: undefined;
        id: undefined;
        crt_dt: undefined;
    }, "">;
    ManagerList: import("yup").ObjectSchema<{
        id: number;
        rgn_cd: string;
        lvl_cd: string;
        lgn_id: string;
        mngr_nm: string | undefined;
        prm_ip_addr: string | undefined;
        crt_dt: Date;
        use_yn: NonNullable<boolean | undefined>;
    }, import("yup").AnyObject, {
        id: undefined;
        rgn_cd: undefined;
        lvl_cd: undefined;
        lgn_id: undefined;
        mngr_nm: undefined;
        prm_ip_addr: undefined;
        crt_dt: undefined;
        use_yn: undefined;
    }, "">;
    ManagerSearchReq: import("yup").ObjectSchema<{
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
    ManagerSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                mngr_nm?: string | undefined;
                prm_ip_addr?: string | undefined;
                id: number;
                lgn_id: string;
                crt_dt: Date;
                rgn_cd: string;
                lvl_cd: string;
                use_yn: NonNullable<boolean | undefined>;
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
    ManagerDetail: import("yup").ObjectSchema<{
        id: number;
        rgn_cd: string;
        lvl_cd: string;
        lgn_id: string;
        mngr_nm: string | undefined;
        prm_ip_addr: string | undefined;
        crt_dt: Date;
        use_yn: NonNullable<boolean | undefined>;
    }, import("yup").AnyObject, {
        id: undefined;
        rgn_cd: undefined;
        lvl_cd: undefined;
        lgn_id: undefined;
        mngr_nm: undefined;
        prm_ip_addr: undefined;
        crt_dt: undefined;
        use_yn: undefined;
    }, "">;
    ManagerDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            mngr_nm?: string | undefined;
            prm_ip_addr?: string | undefined;
            id: number;
            lgn_id: string;
            crt_dt: Date;
            rgn_cd: string;
            lvl_cd: string;
            use_yn: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ManagerCreate: import("yup").ObjectSchema<{
        use_yn: NonNullable<boolean | undefined>;
        prm_ip_addr: string;
        mngr_nm: string;
        lvl_cd: string;
        encpt_pswd: string;
    }, import("yup").AnyObject, {
        use_yn: undefined;
        prm_ip_addr: undefined;
        mngr_nm: undefined;
        lvl_cd: undefined;
        encpt_pswd: undefined;
    }, "">;
    ManagerCreateRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            mngr_nm?: string | undefined;
            prm_ip_addr?: string | undefined;
            id: number;
            lgn_id: string;
            crt_dt: Date;
            rgn_cd: string;
            lvl_cd: string;
            use_yn: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ManagerUpdate: import("yup").ObjectSchema<{
        use_yn: NonNullable<boolean | undefined>;
        prm_ip_addr: string;
        mngr_nm: string;
    }, import("yup").AnyObject, {
        use_yn: undefined;
        prm_ip_addr: undefined;
        mngr_nm: undefined;
    }, "">;
    ManagerUpdateRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            mngr_nm?: string | undefined;
            prm_ip_addr?: string | undefined;
            id: number;
            lgn_id: string;
            crt_dt: Date;
            rgn_cd: string;
            lvl_cd: string;
            use_yn: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ManagerPasswordUpdate: import("yup").ObjectSchema<{
        new_password: string;
    }, import("yup").AnyObject, {
        new_password: undefined;
    }, "">;
    ManagerNameUpdate: import("yup").ObjectSchema<{
        mngr_nm: string;
    }, import("yup").AnyObject, {
        mngr_nm: undefined;
    }, "">;
    SpaceKeeperSearch: import("yup").ObjectSchema<{
        rgn_cd: string | undefined;
        lib_type_cd: string | undefined;
        lib_nm: string | undefined;
        id: string | undefined;
    }, import("yup").AnyObject, {
        rgn_cd: undefined;
        lib_type_cd: undefined;
        lib_nm: undefined;
        id: undefined;
    }, "">;
    SpaceKeeperList: import("yup").ObjectSchema<{
        id: number;
        rgn_cd: string;
        lib_type_cd: string;
        lib_nm: string;
        eml_addr: string;
        nckn_nm: string;
    }, import("yup").AnyObject, {
        id: undefined;
        rgn_cd: undefined;
        lib_type_cd: undefined;
        lib_nm: undefined;
        eml_addr: undefined;
        nckn_nm: undefined;
    }, "">;
    SpaceKeeperSearchReq: import("yup").ObjectSchema<{
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
    SpaceKeeperSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                id: number;
                nckn_nm: string;
                eml_addr: string;
                rgn_cd: string;
                lib_type_cd: string;
                lib_nm: string;
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
    SpaceKeeperDetail: import("yup").ObjectSchema<{
        id: number;
        rgn_cd: string;
        lib_type_cd: string;
        lib_nm: string;
        eml_addr: string;
        nckn_nm: string;
        mbl_telno: string | null | undefined;
        pst_cnt: number;
        last_cntn_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        rgn_cd: undefined;
        lib_type_cd: undefined;
        lib_nm: undefined;
        eml_addr: undefined;
        nckn_nm: undefined;
        mbl_telno: undefined;
        pst_cnt: undefined;
        last_cntn_dt: undefined;
    }, "">;
    SpaceKeeperDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            mbl_telno?: string | null | undefined;
            id: number;
            nckn_nm: string;
            eml_addr: string;
            last_cntn_dt: Date;
            rgn_cd: string;
            lib_type_cd: string;
            lib_nm: string;
            pst_cnt: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    SpaceKeeperPasswordUpdate: import("yup").ObjectSchema<{
        new_password: string;
    }, import("yup").AnyObject, {
        new_password: undefined;
    }, "">;
    WithdrawnUserSearch: import("yup").ObjectSchema<{
        reg_type_cd: string | undefined;
        id: number | undefined;
        eml_addr: string | undefined;
        crt_dt: Date | undefined;
    }, import("yup").AnyObject, {
        reg_type_cd: undefined;
        id: undefined;
        eml_addr: undefined;
        crt_dt: undefined;
    }, "">;
    WithdrawnUserList: import("yup").ObjectSchema<{
        id: number;
        reg_type_cd: string;
        crt_dt: Date;
        eml_addr: string | undefined;
        nckn_nm: string | undefined;
        del_prnmnt_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        reg_type_cd: undefined;
        crt_dt: undefined;
        eml_addr: undefined;
        nckn_nm: undefined;
        del_prnmnt_dt: undefined;
    }, "">;
    WithdrawnUserSearchReq: import("yup").ObjectSchema<{
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
    WithdrawnUserSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                nckn_nm?: string | undefined;
                eml_addr?: string | undefined;
                id: number;
                crt_dt: Date;
                reg_type_cd: string;
                del_prnmnt_dt: Date;
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
    WithdrawnUserDetail: import("yup").ObjectSchema<{
        id: number;
        reg_type_cd: string;
        crt_dt: Date;
        eml_addr: string | undefined;
        nckn_nm: string | undefined;
        del_prnmnt_dt: Date;
        otsd_acnt_key: string | null | undefined;
        mbl_telno: string;
        mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
        lib_acnt_itw_yn: NonNullable<boolean | undefined>;
        itw_lib_acnt: string | null | undefined;
        bkmny_amt: number;
    }, import("yup").AnyObject, {
        id: undefined;
        reg_type_cd: undefined;
        crt_dt: undefined;
        eml_addr: undefined;
        nckn_nm: undefined;
        del_prnmnt_dt: undefined;
        otsd_acnt_key: undefined;
        mbl_telno: undefined;
        mrkt_rcptn_agre_yn: false;
        lib_acnt_itw_yn: false;
        itw_lib_acnt: undefined;
        bkmny_amt: 0;
    }, "">;
    WithdrawnUserDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            nckn_nm?: string | undefined;
            eml_addr?: string | undefined;
            otsd_acnt_key?: string | null | undefined;
            itw_lib_acnt?: string | null | undefined;
            id: number;
            crt_dt: Date;
            reg_type_cd: string;
            bkmny_amt: number;
            mbl_telno: string;
            mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
            lib_acnt_itw_yn: NonNullable<boolean | undefined>;
            del_prnmnt_dt: Date;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    NormalUserSearch: import("yup").ObjectSchema<{
        reg_type_cd: string | undefined;
        id: number | undefined;
        eml_addr: string | undefined;
        crt_dt: Date | undefined;
    }, import("yup").AnyObject, {
        reg_type_cd: undefined;
        id: undefined;
        eml_addr: undefined;
        crt_dt: undefined;
    }, "">;
    NormalUserList: import("yup").ObjectSchema<{
        id: number;
        reg_type_cd: string;
        crt_dt: Date;
        eml_addr: string | undefined;
        nckn_nm: string | undefined;
        bkmny_amt: number;
    }, import("yup").AnyObject, {
        id: undefined;
        reg_type_cd: undefined;
        crt_dt: undefined;
        eml_addr: undefined;
        nckn_nm: undefined;
        bkmny_amt: 0;
    }, "">;
    NormalUserSearchReq: import("yup").ObjectSchema<{
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
    NormalUserSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                nckn_nm?: string | undefined;
                eml_addr?: string | undefined;
                id: number;
                crt_dt: Date;
                reg_type_cd: string;
                bkmny_amt: number;
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
    NormalUserDetail: import("yup").ObjectSchema<{
        id: number;
        reg_type_cd: string;
        crt_dt: Date;
        eml_addr: string | undefined;
        nckn_nm: string | undefined;
        bkmny_amt: number;
        otsd_acnt_key: string | null | undefined;
        last_cntn_dt: Date;
        mbl_telno: string;
        mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
        lib_acnt_itw_yn: NonNullable<boolean | undefined>;
        itw_lib_acnt: string | null | undefined;
        pet_nckn_nm: string | null | undefined;
        group_room_nm: string | null | undefined;
        edu_fnsh_yn: NonNullable<boolean | undefined>;
        acml_dclr_nmtm: number;
    }, import("yup").AnyObject, {
        id: undefined;
        reg_type_cd: undefined;
        crt_dt: undefined;
        eml_addr: undefined;
        nckn_nm: undefined;
        bkmny_amt: 0;
        otsd_acnt_key: undefined;
        last_cntn_dt: undefined;
        mbl_telno: undefined;
        mrkt_rcptn_agre_yn: false;
        lib_acnt_itw_yn: false;
        itw_lib_acnt: undefined;
        pet_nckn_nm: undefined;
        group_room_nm: undefined;
        edu_fnsh_yn: false;
        acml_dclr_nmtm: 0;
    }, "">;
    NormalUserDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            nckn_nm?: string | undefined;
            eml_addr?: string | undefined;
            otsd_acnt_key?: string | null | undefined;
            itw_lib_acnt?: string | null | undefined;
            pet_nckn_nm?: string | null | undefined;
            group_room_nm?: string | null | undefined;
            id: number;
            crt_dt: Date;
            acml_dclr_nmtm: number;
            reg_type_cd: string;
            bkmny_amt: number;
            last_cntn_dt: Date;
            mbl_telno: string;
            mrkt_rcptn_agre_yn: NonNullable<boolean | undefined>;
            lib_acnt_itw_yn: NonNullable<boolean | undefined>;
            edu_fnsh_yn: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    BookMoneyDetail: import("yup").ObjectSchema<{
        user_id: number;
        bkmny_amt: number;
    }, import("yup").AnyObject, {
        user_id: undefined;
        bkmny_amt: 0;
    }, "">;
    BookMoneyDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            bkmny_amt: number;
            user_id: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    BookMoneyUpdate: import("yup").ObjectSchema<{
        chg_type: string;
        chg_amt: number;
        hof_id: number | null | undefined;
    }, import("yup").AnyObject, {
        chg_type: undefined;
        chg_amt: undefined;
        hof_id: undefined;
    }, "">;
    BookMoneyUpdateRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            bkmny_amt: number;
            user_id: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    CreationSearch: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number | null | undefined;
        pst_cn: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        pst_cn: undefined;
        crt_dt: undefined;
    }, "">;
    CreationList: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number;
        rly_ctex_id: number;
        up_pst_id: number | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
        dclr_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        inq_cnt: number;
        cmnt_cnt: number;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        rly_ctex_id: undefined;
        up_pst_id: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
        dclr_yn: false;
        crt_dt: undefined;
        inq_cnt: 0;
        cmnt_cnt: 0;
    }, "">;
    CreationDetail: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number;
        rly_ctex_id: number;
        up_pst_id: number | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
        dclr_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        inq_cnt: number;
        cmnt_cnt: number;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        rly_ctex_id: undefined;
        up_pst_id: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
        dclr_yn: false;
        crt_dt: undefined;
        inq_cnt: 0;
        cmnt_cnt: 0;
    }, "">;
    CreationSearchReq: import("yup").ObjectSchema<{
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
    CreationSearchRes: import("yup").ObjectSchema<{
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
                inq_cnt: number;
                pst_cn: string;
                rly_ctex_id: number;
                dclr_yn: NonNullable<boolean | undefined>;
                cmnt_cnt: number;
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
    CreationDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            wrtr_id?: number | null | undefined;
            nckn_nm?: string | null | undefined;
            up_pst_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            inq_cnt: number;
            pst_cn: string;
            rly_ctex_id: number;
            dclr_yn: NonNullable<boolean | undefined>;
            cmnt_cnt: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    CommentSearch: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number | null | undefined;
        pst_cn: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        pst_cn: undefined;
        crt_dt: undefined;
    }, "">;
    CommentList: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number;
        rly_ctex_id: number;
        up_pst_id: number | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
        dclr_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        up_pst_nckn_nm: string | null | undefined;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        rly_ctex_id: undefined;
        up_pst_id: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
        dclr_yn: false;
        crt_dt: undefined;
        up_pst_nckn_nm: undefined;
    }, "">;
    CommentDetail: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number;
        rly_ctex_id: number;
        up_pst_id: number | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
        dclr_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        up_pst_nckn_nm: string | null | undefined;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        rly_ctex_id: undefined;
        up_pst_id: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
        dclr_yn: false;
        crt_dt: undefined;
        up_pst_nckn_nm: undefined;
    }, "">;
    CommentSearchReq: import("yup").ObjectSchema<{
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
    CommentSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                wrtr_id?: number | null | undefined;
                nckn_nm?: string | null | undefined;
                up_pst_id?: number | null | undefined;
                up_pst_nckn_nm?: string | null | undefined;
                id: number;
                crt_dt: Date;
                pst_cn: string;
                rly_ctex_id: number;
                dclr_yn: NonNullable<boolean | undefined>;
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
    CommentDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            wrtr_id?: number | null | undefined;
            nckn_nm?: string | null | undefined;
            up_pst_id?: number | null | undefined;
            up_pst_nckn_nm?: string | null | undefined;
            id: number;
            crt_dt: Date;
            pst_cn: string;
            rly_ctex_id: number;
            dclr_yn: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ReportSearch: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number | null | undefined;
        pst_cn: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        pst_cn: undefined;
        crt_dt: undefined;
    }, "">;
    ReportList: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number;
        dcl_id: number;
        dcl_nckn_nm: string | null | undefined;
        dclr_trgt_id: number;
        dclr_cmnt_id: number | null | undefined;
        dclr_rsn_cd: string;
        pst_cn: string | null | undefined;
        warn_yn: NonNullable<boolean | undefined>;
        cmnt_warn_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        dcl_id: undefined;
        dcl_nckn_nm: undefined;
        dclr_trgt_id: undefined;
        dclr_cmnt_id: undefined;
        dclr_rsn_cd: undefined;
        pst_cn: undefined;
        warn_yn: false;
        cmnt_warn_yn: false;
        crt_dt: undefined;
    }, "">;
    ReportDetail: import("yup").ObjectSchema<{
        nckn_nm: string | null | undefined;
        id: number;
        dcl_id: number;
        dcl_nckn_nm: string | null | undefined;
        dclr_trgt_id: number;
        dclr_cmnt_id: number | null | undefined;
        dclr_rsn_cd: string;
        pst_cn: string | null | undefined;
        warn_yn: NonNullable<boolean | undefined>;
        cmnt_warn_yn: NonNullable<boolean | undefined>;
        crt_dt: Date;
        acml_dclr_nmtm: number;
        dcl_cnt: number;
        cmnt_crt_dt: Date;
    }, import("yup").AnyObject, {
        nckn_nm: undefined;
        id: undefined;
        dcl_id: undefined;
        dcl_nckn_nm: undefined;
        dclr_trgt_id: undefined;
        dclr_cmnt_id: undefined;
        dclr_rsn_cd: undefined;
        pst_cn: undefined;
        warn_yn: false;
        cmnt_warn_yn: false;
        crt_dt: undefined;
        acml_dclr_nmtm: 0;
        dcl_cnt: 0;
        cmnt_crt_dt: undefined;
    }, "">;
    ReportSearchReq: import("yup").ObjectSchema<{
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
    ReportSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                pst_cn?: string | null | undefined;
                nckn_nm?: string | null | undefined;
                dcl_nckn_nm?: string | null | undefined;
                dclr_cmnt_id?: number | null | undefined;
                id: number;
                crt_dt: Date;
                dcl_id: number;
                dclr_trgt_id: number;
                dclr_rsn_cd: string;
                warn_yn: NonNullable<boolean | undefined>;
                cmnt_warn_yn: NonNullable<boolean | undefined>;
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
    ReportDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            pst_cn?: string | null | undefined;
            nckn_nm?: string | null | undefined;
            dcl_nckn_nm?: string | null | undefined;
            dclr_cmnt_id?: number | null | undefined;
            id: number;
            crt_dt: Date;
            dcl_id: number;
            dclr_trgt_id: number;
            dclr_rsn_cd: string;
            warn_yn: NonNullable<boolean | undefined>;
            cmnt_warn_yn: NonNullable<boolean | undefined>;
            acml_dclr_nmtm: number;
            dcl_cnt: number;
            cmnt_crt_dt: Date;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    SubjectCreate: import("yup").ObjectSchema<{
        pst_cn: string;
        pstg_bgng_dt: Date;
        pstg_end_dt: Date;
        wrtr_id: number | null | undefined;
        expsr_yn: NonNullable<boolean | undefined>;
    }, import("yup").AnyObject, {
        pst_cn: "";
        pstg_bgng_dt: Date;
        pstg_end_dt: Date;
        wrtr_id: undefined;
        expsr_yn: true;
    }, "">;
    SubjectDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            lgn_id?: string | null | undefined;
            wrtr_id?: number | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            pstg_bgng_dt: Date;
            crt_dt: Date;
            mdfcn_dt: Date;
            pst_cn: string;
            cmnt_cnt: number;
            pstg_end_dt: Date;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ResourceDetail: import("yup").ObjectSchema<{
        rsrc_type_cd: string;
        rsrc_nmg_artcl_nm: string | null | undefined;
        rsrc_nm: string;
        skn_id: number | null | undefined;
        os_se_cd: string;
        dwnld_addr: string | null | undefined;
        orgnl_file_nm: string | null | undefined;
        file_type_nm: string | null | undefined;
        file_sz: number | null | undefined;
        id: number;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        rsrc_type_cd: undefined;
        rsrc_nmg_artcl_nm: undefined;
        rsrc_nm: undefined;
        skn_id: undefined;
        os_se_cd: undefined;
        dwnld_addr: undefined;
        orgnl_file_nm: undefined;
        file_type_nm: undefined;
        file_sz: undefined;
        id: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    ResourceCreate: import("yup").ObjectSchema<{
        rsrc_type_cd: string;
        rsrc_nmg_artcl_nm: string | null | undefined;
        rsrc_nm: string;
        skn_id: number | null | undefined;
        os_se_cd: string;
        dwnld_addr: string | null | undefined;
        orgnl_file_nm: string | null | undefined;
        file_type_nm: string | null | undefined;
        file_sz: number | null | undefined;
    }, import("yup").AnyObject, {
        rsrc_type_cd: undefined;
        rsrc_nmg_artcl_nm: undefined;
        rsrc_nm: undefined;
        skn_id: undefined;
        os_se_cd: undefined;
        dwnld_addr: undefined;
        orgnl_file_nm: undefined;
        file_type_nm: undefined;
        file_sz: undefined;
    }, "">;
    ResourceDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            file_sz?: number | null | undefined;
            rsrc_nmg_artcl_nm?: string | null | undefined;
            skn_id?: number | null | undefined;
            dwnld_addr?: string | null | undefined;
            orgnl_file_nm?: string | null | undefined;
            file_type_nm?: string | null | undefined;
            id: number;
            crt_dt: Date;
            mdfcn_dt: Date;
            rsrc_type_cd: string;
            rsrc_nm: string;
            os_se_cd: string;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ResourceDetailReq: import("yup").ObjectSchema<{
        rsrc_type_cd: string;
        os_se_cd: string;
        skn_id: number;
    }, import("yup").AnyObject, {
        rsrc_type_cd: undefined;
        os_se_cd: undefined;
        skn_id: undefined;
    }, "">;
    ResourceDelete: import("yup").ObjectSchema<{
        rsrc_type_cd: string;
        os_se_cd: string;
        skn_id: number | null | undefined;
    }, import("yup").AnyObject, {
        rsrc_type_cd: undefined;
        os_se_cd: undefined;
        skn_id: undefined;
    }, "">;
    BoardManagementSearch: import("yup").ObjectSchema<{
        pst_ttl: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
        lgn_id: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        pst_ttl: undefined;
        expsr_yn: false;
        pstg_bgng_dt: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
        lgn_id: undefined;
        crt_dt: undefined;
    }, "">;
    BoardManagementList: import("yup").ObjectSchema<{
        pst_ttl: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        wrtr_id: number | null | undefined;
        id: number;
        inq_cnt: number;
        lgn_id: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        pst_ttl: undefined;
        expsr_yn: false;
        pstg_bgng_dt: undefined;
        wrtr_id: undefined;
        id: undefined;
        inq_cnt: 0;
        lgn_id: undefined;
        crt_dt: undefined;
    }, "">;
    BoardManagementDetail: import("yup").ObjectSchema<{
        pst_ttl: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        wrtr_id: number | null | undefined;
        id: number;
        inq_cnt: number;
        lgn_id: string | null | undefined;
        crt_dt: Date;
        pst_cn: string;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        pst_ttl: undefined;
        expsr_yn: false;
        pstg_bgng_dt: undefined;
        wrtr_id: undefined;
        id: undefined;
        inq_cnt: 0;
        lgn_id: undefined;
        crt_dt: undefined;
        pst_cn: undefined;
        mdfcn_dt: undefined;
    }, "">;
    BoardManagementCreate: import("yup").ObjectSchema<{
        pst_ttl: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
    }, import("yup").AnyObject, {
        pst_ttl: undefined;
        expsr_yn: false;
        pstg_bgng_dt: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
    }, "">;
    BoardManagementUpdate: import("yup").ObjectSchema<{
        pst_ttl: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        wrtr_id: number | null | undefined;
        pst_cn: string;
    }, import("yup").AnyObject, {
        pst_ttl: undefined;
        expsr_yn: false;
        pstg_bgng_dt: undefined;
        wrtr_id: undefined;
        pst_cn: undefined;
    }, "">;
    BoardManagementSearchReq: import("yup").ObjectSchema<{
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
    BoardManagementSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                pstg_bgng_dt?: Date | null | undefined;
                lgn_id?: string | null | undefined;
                wrtr_id?: number | null | undefined;
                id: number;
                expsr_yn: NonNullable<boolean | undefined>;
                crt_dt: Date;
                inq_cnt: number;
                pst_ttl: string;
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
    BoardManagementDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            pstg_bgng_dt?: Date | null | undefined;
            lgn_id?: string | null | undefined;
            wrtr_id?: number | null | undefined;
            id: number;
            expsr_yn: NonNullable<boolean | undefined>;
            crt_dt: Date;
            inq_cnt: number;
            mdfcn_dt: Date;
            pst_ttl: string;
            pst_cn: string;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    NoticeSearch: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        ntc_cn: string;
        atch_file_id: number | null;
        lgn_id: string | null | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        ntc_type_cd: string;
        ntc_nm: "";
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        ntc_cn: "";
        atch_file_id: 0;
        lgn_id: undefined;
        crt_dt: undefined;
    }, "">;
    NoticeList: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        id: number;
        inq_cnt: number;
        lgn_id: string | null | undefined;
        ntc_cn: string | undefined;
        crt_dt: Date;
    }, import("yup").AnyObject, {
        ntc_type_cd: string;
        ntc_nm: "";
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        id: undefined;
        inq_cnt: 0;
        lgn_id: undefined;
        ntc_cn: undefined;
        crt_dt: undefined;
    }, "">;
    NoticeDetail: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        id: number;
        inq_cnt: number;
        lgn_id: string | null | undefined;
        ntc_cn: string;
        crt_dt: Date;
        file_url_addr: string | null | undefined;
        file_nm: string | null | undefined;
        file_sz: number | null | undefined;
        mdfcn_dt: Date;
        next_id: number | null | undefined;
        prev_id: number | null | undefined;
    }, import("yup").AnyObject, {
        ntc_type_cd: string;
        ntc_nm: "";
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        id: undefined;
        inq_cnt: 0;
        lgn_id: undefined;
        ntc_cn: undefined;
        crt_dt: undefined;
        file_url_addr: undefined;
        file_nm: undefined;
        file_sz: undefined;
        mdfcn_dt: undefined;
        next_id: undefined;
        prev_id: undefined;
    }, "">;
    NoticeCreate: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        ntc_cn: string;
        atch_file_id: number | null;
    }, import("yup").AnyObject, {
        ntc_type_cd: string;
        ntc_nm: "";
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        ntc_cn: "";
        atch_file_id: 0;
    }, "">;
    NoticeUpdate: import("yup").ObjectSchema<{
        ntc_type_cd: string;
        ntc_nm: string;
        expsr_yn: NonNullable<boolean | undefined>;
        pstg_bgng_dt: Date | null | undefined;
        html_use_yn: NonNullable<boolean | undefined>;
        mngr_id: number | null | undefined;
        ntc_cn: string;
        atch_file_id: number | null;
    }, import("yup").AnyObject, {
        ntc_type_cd: string;
        ntc_nm: "";
        expsr_yn: true;
        pstg_bgng_dt: undefined;
        html_use_yn: false;
        mngr_id: undefined;
        ntc_cn: "";
        atch_file_id: 0;
    }, "">;
    NoticeSearchReq: import("yup").ObjectSchema<{
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
    NoticeSearchRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: {
                pstg_bgng_dt?: Date | null | undefined;
                mngr_id?: number | null | undefined;
                ntc_cn?: string | undefined;
                lgn_id?: string | null | undefined;
                id: number;
                ntc_type_cd: string;
                ntc_nm: string;
                expsr_yn: NonNullable<boolean | undefined>;
                html_use_yn: NonNullable<boolean | undefined>;
                crt_dt: Date;
                inq_cnt: number;
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
    NoticeDetailRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            pstg_bgng_dt?: Date | null | undefined;
            mngr_id?: number | null | undefined;
            lgn_id?: string | null | undefined;
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
    AdminLoginResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            menus?: {
                id: number;
                menu_nm: string;
                prvc_incl_yn: NonNullable<boolean | undefined>;
                prgrm_path_nm: string;
            }[] | undefined;
            require_password_update: NonNullable<boolean | undefined>;
            token: string;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    SendMobileCodeRequest: import("yup").ObjectSchema<{
        mobile: string;
        type: string;
    }, import("yup").AnyObject, {
        mobile: undefined;
        type: undefined;
    }, "">;
    SendMobileCodeResponse: import("yup").ObjectSchema<{
        code: string;
        data: {};
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    ConfirmMobileCodeRequest: import("yup").ObjectSchema<{
        mobile: string;
        code: string;
    }, import("yup").AnyObject, {
        mobile: undefined;
        code: undefined;
    }, "">;
    ConfirmMobileCodeResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            reason?: string | undefined;
            is_joined?: boolean | undefined;
            has_email_account?: boolean | undefined;
            hash?: string | undefined;
            mobile: string;
            is_success: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
};
export = _exports;
//# sourceMappingURL=index.d.ts.map