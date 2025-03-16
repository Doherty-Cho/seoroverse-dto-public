/** @description 접속 통계 조회 결과 */
export const HomeAccessStatisticsRes: import("yup").ObjectSchema<{
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
/** @description 회원 통계 조회 결과 */
export const HomeMemberStatisticsRes: import("yup").ObjectSchema<{
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
/** @description 릴레이 창작전 조회 결과 */
export const HomeRelayCreationStatisticsRes: import("yup").ObjectSchema<{
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
//# sourceMappingURL=home.d.ts.map