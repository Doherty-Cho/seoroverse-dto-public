/**
 * 약관 상세정보 DTO
 * @property {number} id - id of Policy
 * @property {string} type - 약관 종류
 * @property {string} target - 약관 대상
 * @property {string} title - 약관 제목
 * @property {string} content - 약관 내용
 * @property {number} is_mandatory - 필수여부
 * @property {number} is_active - 활성화여부
 * @property {Date} effective_at - 시행일시
 * @property {number} sequence - 순번
 * @property {number} created_admin_id - 작성 어드민 아이디
 * @property {string} created_admin_name - 작성 어드민 이름
 * @property {number} updated_admin_id - 수정 어드민 아이디
 * @property {string} updated_admin_name - 수정 어드민 이름
 * @property {Date} created_at - 생성일시
 * @property {Date} updated_at - 수정일시
 */
export const PolicyDetail: import("yup").ObjectSchema<{
    id: number;
    type: any;
    target: any;
    title: string;
    content: string;
    is_mandatory: number;
    is_active: number;
    effective_at: Date;
    sequence: number;
    created_admin_id: number;
    created_admin_name: string | undefined;
    updated_admin_id: number;
    updated_admin_name: string | undefined;
    created_at: Date | null | undefined;
    updated_at: Date | null | undefined;
}, import("yup").AnyObject, {
    id: undefined;
    type: undefined;
    target: undefined;
    title: undefined;
    content: undefined;
    is_mandatory: 1;
    is_active: 1;
    effective_at: undefined;
    sequence: 1;
    created_admin_id: 1;
    created_admin_name: undefined;
    updated_admin_id: 1;
    updated_admin_name: undefined;
    created_at: undefined;
    updated_at: undefined;
}, "">;
/**
 * 약관 정보 DTO
 * @property {string} type - 약관 종류
 * @property {string} target - 약관 대상
 * @property {string} title - 약관 제목
 * @property {string} content - 약관 내용
 * @property {number} is_mandatory - 필수여부
 * @property {number} is_active - 활성화여부
 * @property {Date} effective_at - 시행일시
 * @property {number} sequence - 순번
 * @property {number} created_admin_id - 작성 어드민 아이디
 * @property {number} updated_admin_id - 수정 어드민 아이디
 */
export const PolicyInput: import("yup").ObjectSchema<{
    type: any;
    target: any;
    title: string;
    content: string;
    is_mandatory: number;
    is_active: number;
    effective_at: Date;
    sequence: number;
    created_admin_id: number;
    updated_admin_id: number;
}, import("yup").AnyObject, {
    type: undefined;
    target: undefined;
    title: undefined;
    content: undefined;
    is_mandatory: 1;
    is_active: 1;
    effective_at: undefined;
    sequence: 1;
    created_admin_id: 1;
    updated_admin_id: 1;
}, "">;
export const PolicySearchListReq: import("yup").ObjectSchema<{
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
export const PolicySearchListRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        total: number;
        count: number;
        rows: {
            type?: any;
            target?: any;
            created_at?: Date | null | undefined;
            created_admin_name?: string | undefined;
            updated_admin_name?: string | undefined;
            updated_at?: Date | null | undefined;
            id: number;
            content: string;
            title: string;
            sequence: number;
            is_mandatory: number;
            is_active: number;
            effective_at: Date;
            created_admin_id: number;
            updated_admin_id: number;
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
export const PolicySearchOneRes: import("yup").ObjectSchema<{
    code: string;
    data: {
        type?: any;
        target?: any;
        created_at?: Date | null | undefined;
        created_admin_name?: string | undefined;
        updated_admin_name?: string | undefined;
        updated_at?: Date | null | undefined;
        id: number;
        content: string;
        title: string;
        sequence: number;
        is_mandatory: number;
        is_active: number;
        effective_at: Date;
        created_admin_id: number;
        updated_admin_id: number;
    };
}, import("yup").AnyObject, {
    code: "0000";
    data: any;
}, "">;
//# sourceMappingURL=policy.d.ts.map