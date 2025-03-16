/**
 * @template T
 * @param {import('yup').ObjectSchema<T extends import('yup').Maybe<import('yup').AnyObject> ? T : any>} schema
 */
export function SuccessObjectRes<T>(schema: import("yup").ObjectSchema<T extends import("yup").Maybe<import("yup").AnyObject> ? T : any, import("yup").AnyObject, any, "">): import("yup").ObjectSchema<{
    code: string;
    data: (T extends import("yup").Maybe<import("yup").AnyObject> ? T : any) extends infer T_1 ? T_1 extends (T extends import("yup").Maybe<import("yup").AnyObject> ? T : any) ? T_1 extends import("yup").AnyObject ? import("yup").MakePartial<T_1> extends infer T_2 ? T_2 extends import("yup").MakePartial<T_1> ? T_2 extends {} ? { [k in keyof T_2]: T_2[k]; } : T_2 : never : never : T_1 : never : never;
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
/**
 * @template T
 * @param {import('yup').ObjectSchema<T extends import('yup').Maybe<import('yup').AnyObject> ? T : any>} schema
 */
export function SuccessListRes<T>(schema: import("yup").ObjectSchema<T extends import("yup").Maybe<import("yup").AnyObject> ? T : any, import("yup").AnyObject, any, "">): import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: ((T extends import("yup").Maybe<import("yup").AnyObject> ? T : any) extends infer T_1 ? T_1 extends (T extends import("yup").Maybe<import("yup").AnyObject> ? T : any) ? T_1 extends import("yup").AnyObject ? import("yup").MakePartial<T_1> extends infer T_2 ? T_2 extends import("yup").MakePartial<T_1> ? T_2 extends {} ? { [k in keyof T_2]: T_2[k]; } : T_2 : never : never : T_1 : never : never)[];
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: {
        total: undefined;
        count: undefined;
        rows: undefined;
    };
}, "">;
export const SuccessSimpleRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        is_success: NonNullable<boolean | undefined>;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
export const FailRes: import("yup").ObjectSchema<{
    code: string;
    message: string;
}, import("yup").AnyObject, {
    code: "9999";
    message: undefined;
}, "">;
export const CreateOneRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        id: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
export const StringArrayRes: import("yup").ObjectSchema<{
    code: string;
    data: any;
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
export const NumberArrayRes: import("yup").ObjectSchema<{
    code: string;
    data: any;
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=response.d.ts.map