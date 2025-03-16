/**
 * @description 회원 통계 요청 dto
 */
export const MemberStatisticsSearch: import("yup").ObjectSchema<{
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
/** @description 회원 가입, 회원 탈퇴 통계 조회 요청 */
export const MemberStatisticsReq: import("yup").ObjectSchema<{
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
/** @description 회원 가입, 회원 탈퇴 통계 조회 결과 */
export const MemberStatisticsRes: import("yup").ObjectSchema<{
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
/**
 * @description 회원가입, 회원탈퇴 통계
 * @property {string} date - 날짜/시각
 * @property {string} reg_type_cd - 등록유형코드
 * @property {string} reg_type_nm - 등록유형명
 * @property {number} count - 회원수
 */
export const MemberStatistics: import("yup").ObjectSchema<{
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
/**
 *  @description 포탈 접속 통계 요청 dto
 */
export const PortalStatisticsSearch: import("yup").ObjectSchema<{
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
/** @description 회원 가입, 회원 탈퇴 통계 조회 요청 */
export const PortalStatisticsReq: import("yup").ObjectSchema<{
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
 *  @description 공간별 접속 통계 요청 dto
 */
export const SpaceStatisticsSearch: import("yup").ObjectSchema<{
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
/** @description 공간별 접속 통계 조회 요청 */
export const SpaceStatisticsReq: import("yup").ObjectSchema<{
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
/** @description 접속 통계 조회 결과 */
export const AccessStatisticsRes: import("yup").ObjectSchema<{
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
/**
 * @description 포탈 접속 통계
 * @property {string} date - 날짜/시각
 * @property {number} count - 회원수
 */
export const AccessStatistics: import("yup").ObjectSchema<{
    date: string;
    count: number;
}, import("yup").AnyObject, {
    date: undefined;
    count: undefined;
}, "">;
//# sourceMappingURL=statistics.d.ts.map