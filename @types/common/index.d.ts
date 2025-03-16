declare const _exports: {
    SuccessObjectRes: <T>(schema: import("yup").ObjectSchema<T extends import("yup").Maybe<import("yup").AnyObject> ? T : any, import("yup").AnyObject, any, "">) => import("yup").ObjectSchema<{
        code: string;
        data: (T extends import("yup").Maybe<import("yup").AnyObject> ? T : any) extends infer T_1 ? T_1 extends (T extends import("yup").Maybe<import("yup").AnyObject> ? T : any) ? T_1 extends import("yup").AnyObject ? import("yup").MakePartial<T_1> extends infer T_2 ? T_2 extends import("yup").MakePartial<T_1> ? T_2 extends {} ? { [k in keyof T_2]: T_2[k]; } : T_2 : never : never : T_1 : never : never;
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    SuccessListRes: <T_3>(schema: import("yup").ObjectSchema<T_3 extends import("yup").Maybe<import("yup").AnyObject> ? T_3 : any, import("yup").AnyObject, any, "">) => import("yup").ObjectSchema<{
        code: string;
        data: {
            total: number;
            count: number;
            rows: ((T_3 extends import("yup").Maybe<import("yup").AnyObject> ? T_3 : any) extends infer T_4 ? T_4 extends (T_3 extends import("yup").Maybe<import("yup").AnyObject> ? T_3 : any) ? T_4 extends import("yup").AnyObject ? import("yup").MakePartial<T_4> extends infer T_5 ? T_5 extends import("yup").MakePartial<T_4> ? T_5 extends {} ? { [k_1 in keyof T_5]: T_5[k_1]; } : T_5 : never : never : T_4 : never : never)[];
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: {
            total: undefined;
            count: undefined;
            rows: undefined;
        };
    }, "">;
    SuccessSimpleRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            is_success: NonNullable<boolean | undefined>;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    FailRes: import("yup").ObjectSchema<{
        code: string;
        message: string;
    }, import("yup").AnyObject, {
        code: "9999";
        message: undefined;
    }, "">;
    CreateOneRes: import("yup").ObjectSchema<{
        code: string;
        data: {
            id: number;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    StringArrayRes: import("yup").ObjectSchema<{
        code: string;
        data: any;
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    NumberArrayRes: import("yup").ObjectSchema<{
        code: string;
        data: any;
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    PathId: import("yup").NumberSchema<number, import("yup").AnyObject, undefined, "">;
    SearchListReq: (resourceSchema: any) => import("yup").ObjectSchema<{
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
    DeleteListReq: import("yup").ArraySchema<number[], import("yup").AnyObject, undefined, "">;
    FileBase: import("yup").ObjectSchema<{
        id: number;
        orgnl_file_nm: string;
        file_url_addr: string;
        thmb_url_addr: string | null | undefined;
    }, import("yup").AnyObject, {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
    }, "">;
    FileInfo: import("yup").ObjectSchema<{
        id: number;
        orgnl_file_nm: string;
        file_url_addr: string;
        thmb_url_addr: string | null | undefined;
        file_sz: number;
    }, import("yup").AnyObject, {
        id: undefined;
        orgnl_file_nm: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
        file_sz: undefined;
    }, "">;
    FileDetail: import("yup").ObjectSchema<{
        id: number;
        file_url_addr: string;
        thmb_url_addr: string | null | undefined;
        orgnl_file_nm: string;
        file_type_nm: string;
        file_sz: number;
        encd_yn: NonNullable<boolean | undefined>;
        vdo_encd_err_log_cn: string | null | undefined;
        crt_dt: Date;
        mdfcn_dt: Date;
    }, import("yup").AnyObject, {
        id: undefined;
        file_url_addr: undefined;
        thmb_url_addr: undefined;
        orgnl_file_nm: undefined;
        file_type_nm: undefined;
        file_sz: undefined;
        encd_yn: false;
        vdo_encd_err_log_cn: undefined;
        crt_dt: undefined;
        mdfcn_dt: undefined;
    }, "">;
    FileCreateResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            file: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            };
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    FileMultipleCreateResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            files?: {
                thmb_url_addr?: string | null | undefined;
                id: number;
                file_url_addr: string;
                file_sz: number;
                orgnl_file_nm: string;
            }[] | undefined;
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    FileGetResponse: import("yup").ObjectSchema<{
        code: string;
        data: {
            file: {
                thmb_url_addr?: string | null | undefined;
                vdo_encd_err_log_cn?: string | null | undefined;
                id: number;
                crt_dt: Date;
                file_url_addr: string;
                file_sz: number;
                mdfcn_dt: Date;
                orgnl_file_nm: string;
                file_type_nm: string;
                encd_yn: NonNullable<boolean | undefined>;
            };
        };
    }, import("yup").AnyObject, {
        code: "0000";
        data: any;
    }, "">;
    FILTER_CONDITION: {
        EQUAL: string;
        LIKE: string;
        GREATER_THAN: string;
        GREATER_THAN_EQUAL: string;
        LESS_THAN: string;
        LESS_THAN_EQUAL: string;
        IN: string;
    };
    SORT_OPTION: {
        ASC: string;
        DESC: string;
    };
    filterValidationObject: {
        [k: string]: import("yup").Lazy<any, import("yup").AnyObject, any>;
    };
    hasFilterConditionKeys: typeof import("./const").hasFilterConditionKeys;
    MAX_REPORTED_CNT: 3;
    MNGR_LVL: {
        ADMIN: string;
        OPERATOR: string;
    };
    MNGR_LVL_ID_CODE: {
        A: string;
        O: string;
    };
    NOTICE_TYPE: {
        NOTICE: string;
        FAQ: string;
    };
    INQ_MNG_ARTCL_CD: {
        BOARD: number;
        RELAY_CREATION: number;
        NOTICE: number;
        FAQ: number;
    };
    REG_TYPE: {
        LOCAL: string;
        KAKAO: string;
        NAVER: string;
        GOOGLE: string;
        APPLE: string;
        JEONJU: string;
        IKSAN: string;
    };
    MBL_DEVICE_TYPE: {
        ANDROID: string;
        IOS: string;
        WEB: string;
        CONTENT: string;
    };
    OS_TYPE: {
        ANDROID: string;
        IOS: string;
        PC: string;
    };
    RSRC_TYPE: {
        SPACE_SKIN: string;
        AVATAR: string;
        AVATAR_PARTS: string;
        AVATAR_PETS: string;
        NPC: string;
        GAME: string;
    };
    RGN: {
        JEONJU: string;
        IKSAN: string;
    };
    LIB_TYPE: {
        LIBRARY: string;
        BOOKSHOP: string;
    };
    EXHB_SQRE_CD: {
        SQUARE: string;
        JEONJU: string;
        IKSAN: string;
    };
    EXHB_CONTS_TYPE_CD: {
        IMAGE: string;
        MOVIE: string;
        WEB_VIEW: string;
    };
    PST_SE_CD: {
        SEOROVERSE: string;
        LIBRARY: string;
        BOOKSHOP: string;
    };
    NTFC_TYPE: {
        NOTICE: string;
        FRIEND: string;
    };
    NTFC_TYPE_DTL: {
        NOTICE: string;
        FRIEND_REQUESTED: string;
        FRIEND_ACCEPTED: string;
        FRIEND_REJECTED: string;
        INVITATION_REQUESTED: string;
        INVITATION_REJECTED: string;
    };
    GNDR_TYPE: {
        MALE: string;
        FEMAIL: string;
        UNISEX: string;
    };
    SPCE_STTS_CD: {
        REGISTERING: string;
        WATING_FOR_APPROVAL: string;
        CANCEL: string;
        WATING_FOR_OPERATION: string;
        IN_OPERATION: string;
        STOP_BY_OWNER: string;
        STOP_BY_ADMIN: string;
        END: string;
    };
    SPCE_TYPE: {
        SQUARE: number;
        LIBRARY: number;
        BOOKSHOP: number;
        READING_CLUB: number;
        MY_STUDY: number;
        JUMP_MAP: number;
    };
    DCLR_RSN_CD: {
        SPAM: string;
        SEXUAL_EXPLOITATION: string;
        HATE_SPEECH: string;
        POLITICAL_SPEECH: string;
        FALSE_INFORMATION: string;
        HARASSMENT_BULLYING: string;
    };
    QST_STTS_CD: {
        UNRECEIVED: string;
        PROGRESS: string;
        RECEIVE: string;
    };
    BOOK_PSTN_CD: {
        LEFT_TOP: string;
        LEFT_BOTTOM: string;
        RIGHT_TOP: string;
        RIGHT_BOTTOM: string;
    };
    HOF_SE_CD: {
        SPELLING: string;
        ALPHABET: string;
    };
    HOF_DTL_SE_CD: {
        SCORE: string;
        PLAY: string;
    };
    CONTS_SE_CD: {
        NORMAL: string;
        LIVE_SCREEN: string;
    };
    PERIOD_UNIT: {
        HOUR: string;
        DAY: string;
        WEEK: string;
        MONTH: string;
        CUSTOM: string;
    };
};
export = _exports;
//# sourceMappingURL=index.d.ts.map