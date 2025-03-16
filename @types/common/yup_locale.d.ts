export namespace yup_locale {
    namespace mixed {
        let _default: string;
        export { _default as default };
        export function required(ref: any): any;
        export function oneOf(ref: any): any;
        export function notOneOf(ref: any): any;
        export function notType(ref: any): any;
        export let defined: string;
    }
    namespace string {
        function length(ref: any): any;
        function min(ref: any): any;
        function max(ref: any): any;
        function email(ref: any): any;
    }
    namespace number {
        export function min_1(ref: any): any;
        export { min_1 as min };
        export function max_1(ref: any): any;
        export { max_1 as max };
        export function lessThan(ref: any): any;
        export function moreThan(ref: any): any;
        export function positive(ref: any): any;
        export function negative(ref: any): any;
        export function integer(ref: any): any;
    }
    namespace date {
        export function min_2(ref: any): any;
        export { min_2 as min };
        export function max_2(ref: any): any;
        export { max_2 as max };
    }
}
//# sourceMappingURL=yup_locale.d.ts.map