/**
 * 공간 상세조회 DTO
 * @property {number} id - 아이디. Required.
 * @property {number} spce_creatr_id - 공간생성자. Optional.
 * @property {string} nckn_nm - 공간생성자 닉네임. Optional.
 * @property {number} spce_type_id - 공간유형아이디. Required.
 * @property {number} spce_skn_id - 공간스킨아이디. Required.
 * @property {string} spce_ttl - 공간제목. Required.
 * @property {string} spce_expln - 공간설명. Required.
 * @property {object} spce_bsc_stng_cn - 공간기본설정내용. Optional.
 * @property {number} cntn_lmt_cnt - 접속제한수. Required.
 * @property {boolean} chnl_extd_psblty_yn - 채널확장가능여부. Required.
 * @property {boolean} voc_chitt_psblty_yn - 음성채팅가능여부. Required.
 * @property {boolean} scrn_use_yn - 화면사용여부. Required.
 * @property {FileInfo} rprs_img_file - 대표이미지파일. Optional.
 * @property {boolean} sctr_yn - 비밀방여부. Required.
 * @property {string} sctr_pswd - 비밀방비밀번호. Optional.
 * @property {string} spce_stts_cd - 공간상태. Optional.
 * @property {date} crt_dt - 생성일시. Required.
 * @property {date} mdfcn_dt - 수정일시. Required.
 * @property {number} rgn_lib_id - 아이디. Optional.
 * @property {string} rgn_lib_rgn_cd - 지역코드 Optional
 * @property {string} rgn_lib_type_cd - 도서관유형코드 Optional
 */
export const SpaceDetail: import("yup").ObjectSchema<{
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
/** 공간 상세조회 결과 DTO */
export const SpaceDetailRes: import("yup").ObjectSchema<{
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
//# sourceMappingURL=space.d.ts.map