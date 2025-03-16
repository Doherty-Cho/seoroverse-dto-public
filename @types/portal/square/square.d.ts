/**
 * 광장 상세조회 DTO
 * @property {number} id - 아이디
 * @property {string} exhb_sqre_cd - 전시광장코드(EXHB_SQRE_CD)
 * @property {string} exhb_conts_type_cd - 전시콘텐츠유형코드(EXHB_CONTS_TYPE_CD)
 * @property {string} conts_ttl - 콘텐츠제목
 * @property {FileInfo} conts_file - 콘텐츠파일
 * @property {number} vdo_spd - 동영상속도
 * @property {string} vdo_url_addr - 동영상URL주소
 * @property {FileInfo} thmb_file - 썸네일파일
 * @property {Date} crt_dt - 생성일시
 * @property {Date} mdfcn_dt - 수정일시
 */
export const SquareDetail: import("yup").ObjectSchema<{
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
/** 광장컨텐츠 상세조회 결과 DTO */
export const SquareDetailRes: import("yup").ObjectSchema<{
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
/** 광장컨텐츠 목록조회 결과 DTO */
export const SquareListRes: import("yup").ObjectSchema<{
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
//# sourceMappingURL=square.d.ts.map