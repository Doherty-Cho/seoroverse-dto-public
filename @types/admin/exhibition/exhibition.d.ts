/**
 * 전시 콘텐츠 공통 항목
 * @property {number} id - 아이디
 * @property {string} exhb_sqre_cd - 전시광장코드
 * @property {string} exhb_conts_type_cd - 전시콘텐츠유형코드
 * @property {string} conts_ttl - 콘텐츠제목
 * @property {string} conts_file_id - 콘텐츠파일아이디
 * @property {FileBase} conts_file - 콘텐츠파일
 * @property {number} vdo_spd - 동영상속도
 * @property {string | null | undefined} vdo_url_addr - 동영상URL
 * @property {Date} thmb_file_id - 썸네일파일아이디
 * @property {FileBase} thmb_file - 썸네일파일
 * @property {Date} crt_dt - 생성일시
 */
export const ExhibitionBase: import("yup").ObjectSchema<{
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
/**
 * 전시 콘텐츠 상세 DTO
 * @property {number} id - 아이디
 * @property {FileBase} conts_file - 콘텐츠파일
 * @property {FileBase} thmb_file - 썸네일파일
 */
export const ExhibitionDetail: import("yup").ObjectSchema<{
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
/**
 * 전시 등록 DTO
 * @property {ExhibitionBase} exhibition - 광장
 * @property {ExhibitionBase} jeonju - 전주
 * @property {ExhibitionBase} iksan - 익산
 */
export const ExhibitionCreate: import("yup").ObjectSchema<{
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
/**
 *  전시광장 상세조회 결과 DTO
 */
export const ExhibitionDetailRes: import("yup").ObjectSchema<{
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
//# sourceMappingURL=exhibition.d.ts.map