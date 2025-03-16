/**
 * api 경로의 id
 * ex) /api/users/1에서의 1
 */
export const PathId: import("yup").NumberSchema<number, import("yup").AnyObject, undefined, "">;
export function SearchListReq(resourceSchema: any): import("yup").ObjectSchema<{
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
export const DeleteListReq: import("yup").ArraySchema<number[], import("yup").AnyObject, undefined, "">;
//# sourceMappingURL=request.d.ts.map