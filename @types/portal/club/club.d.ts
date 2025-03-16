/**
 * 독서 동아리 검색 DTO
 *
 * @property {string} spce_ttl - 동아리실 이름
 * @property {string} nckn_nm - Host nickname.
 */
export const ReadingClubSearch: import("yup").ObjectSchema<{
    spce_ttl: string | undefined;
    nckn_nm: string | undefined;
}, import("yup").AnyObject, {
    spce_ttl: undefined;
    nckn_nm: undefined;
}, "">;
/** 독서 동아리컨텐츠 목록조회 요청 DTO */
export const ReadingClubSearchReq: import("yup").ObjectSchema<{
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
 * 독서 동아리 상세정보
 *
 * @property {number} id - 독서 동아리 아이디
 * @property {string} spce_skn_id - 동아리실 스킨 아이디
 * @property {string} spce_ttl - 동아리실 이름
 * @property {number} ownr_id - 소유자(호스트) 아이디
 * @property {string} nckn_nm - 소유자(호스트) 닉네임
 * @property {number} cntn_lmt_cnt - 접속제한수
 * @property {number} prtpnt_cnt - 참여인원수(소유자 제외)
 * @property {boolean} ownr_cntn_yn - 소유자(호스트)접속여부
 * @property {boolean} my_spce_yn - 내 공간 여부
 * @property {FileInfo} rprs_img_file - 대표이미지파일
 * @property {boolean} sctr_yn - 비밀방 여부. Required.
 * @property {string} sctr_pswd - 비밀방 비밀번호. Required if sctr_yn is true.
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
export const ReadingClubList: import("yup").ObjectSchema<{
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
/** 독서 동아리컨텐츠 목록조회 결과 DTO */
export const ReadingClubSearchRes: import("yup").ObjectSchema<{
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
/**
 * 독서 동아리 상세정보
 *
 * @extends ReadingClubList
 * @property {string} spce_expln - 동아리 설명
 * @property {Date} vald_term_dt - 유효기간일자
 */
export const ReadingClubDetail: import("yup").ObjectSchema<{
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
/** 독서 동아리컨텐츠 상세조회 결과 DTO */
export const ReadingClubDetailRes: import("yup").ObjectSchema<{
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
/**
 * 독서 동아리 생성 DTO
 *
 * @property {string} spce_skn_id - 동아리실 스킨 아이디. Required.
 * @property {string} spce_ttl - 동아리실 이름. Max length 100 characters. Required.
 * @property {string} spce_expln - 동아리실 설명. Max length 1000 characters. Required.
 * @property {number} ownr_id - 소유자 아이디. Required.
 * @property {number} rprs_img_file_id - 대표 이미지 파일아이디. Optional.
 * @property {boolean} sctr_yn - 비밀방 여부. Required.
 * @property {string} sctr_pswd - 비밀방 비밀번호. Required if sctr_yn is true.
 */
export const ReadingClubCreate: import("yup").ObjectSchema<{
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
/**
 * 독서 동아리 수정 DTO
 */
export const ReadingClubUpdate: import("yup").ObjectSchema<{
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
/**
 * 독서 동아리 비밀번호 확인 DTO
 *
 * @property {string} password - 동아리 비밀번호
 */
export const ReadingClubPassword: import("yup").ObjectSchema<{
    password: string;
}, import("yup").AnyObject, {
    password: undefined;
}, "">;
//# sourceMappingURL=club.d.ts.map