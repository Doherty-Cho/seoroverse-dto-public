/**
 * 알림 목록조회 DTO
 * @property {string|null} ntfc_type_cd - 알림유형코드. Optional
 * @property {date} start_day - 알림자료 시작일. Required
 * @property {date} end_day - 알림자료 종료일. Required
 */
export const NotificationSearch: import("yup").ObjectSchema<{
    ntfc_type_cd: string | null | undefined;
    start_day: Date;
    end_day: any;
}, import("yup").AnyObject, {
    ntfc_type_cd: undefined;
    start_day: undefined;
    end_day: any;
}, "">;
/**
 * 알림 검색 요청 DTO
 */
export const NotificationSearchReq: import("yup").ObjectSchema<{
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
 * 알림 등록 DTO
 * @property {number} rcvr_id - 수신자아이디. 필수항목
 * @property {number} sndpty_id - 발신자아이디. Optional
 * @property {string} ntfc_type_cd - 알림유형코드(NTFC_TYPE). 필수항목
 * @property {string} ntfc_type_dtl_cd - 알림유형상세코드(NTFC_TYPE_DTL). 필수항목
 * @property {string} ntfc_ttl - 알림제목. 필수항목
 * @property {string} ntfc_cn - 알림내용. 필수항목
 */
export const NotificationCreate: import("yup").ObjectSchema<{
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
/**
 * 알림 목록 DTO
 * @property {number} id - 아이디. 필수항목
 * @property {number|null} spce_id - 공간아이디.
 * @property {Date} crt_dt - 생성일시. 필수항목
 */
export const NotificationList: import("yup").ObjectSchema<{
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
/**
 * 알림 목록조회 응답 DTO
 */
export const NotificationSearchRes: import("yup").ObjectSchema<{
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
//# sourceMappingURL=notification.d.ts.map