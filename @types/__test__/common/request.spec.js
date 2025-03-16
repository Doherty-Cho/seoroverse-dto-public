"use strict";
const { object, string, number, date, boolean, reach } = require('yup');
const { SearchListReq } = require('../../common/request');
describe('SearchListReq validation - default payload', () => {
    it('should pass with no filters and no search within payload', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).not.toThrow();
    });
    it('should pass with undefined extra key values within payload pass', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            hello: 'world',
            sort: [{ id: 'asc' }, { created_at: 'desc' }],
            filters: {
                id: '3',
            },
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).not.toThrow();
    });
});
// -----------------------------------------------------------------------------
// [FILTER ]
// -----------------------------------------------------------------------------
describe('SearchListReq validation - filters', () => {
    it('should pass with correct value and properties', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
            email: string().email().required(),
            created_at: date().required(),
            not_required: number(),
        });
        const requestBody = {
            filters: {
                nickname: { in: ['hi', 'hello'] },
                id: { eq: 1 },
                email: 'aaaa+2@aa.aa',
                created_at: '2023-11-22 00:00:00',
                created_at: new Date(),
                created_at: {
                    gte: new Date().toUTCString(),
                    lte: new Date().toUTCString(),
                },
                not_required: undefined,
            },
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).not.toThrow();
    });
    it('should throw error with undefined property', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            filters: { nuckname: { eq: 'hello' } },
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).rejects.toThrow();
    });
    it('should throw error with incorrect option property', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            filters: { nickname: { eql: ['hi', 'hello'] } },
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).rejects.toThrow();
    });
    it('should throw error with incorrect option value', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            filters: { nickname: { lt: ['hi', 'hello'] }, id: { in: 1 } },
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).rejects.toThrow();
    });
});
// -----------------------------------------------------------------------------
// [SEARCH]
// -----------------------------------------------------------------------------
describe('SearchListReq validation - search', () => {
    it('should pass with correct value and properties', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            search: { fields: ['nickname'], keyword: '33' },
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).not.toThrow();
    });
    it('should throw error with undefined property', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            search: { fieldssss: ['nickname'], keyword: '33' },
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).rejects.toThrow();
    });
    it('should throw error with incorrect value', async () => {
        // given
        const resourceSchema = object({
            id: number().required(),
            nickname: string().required(),
        });
        const requestBody = {
            search: { fields: ['nuckname'], keyword: '33' },
            sort: [{ id: 'asc' }],
        };
        // when
        const req = SearchListReq(resourceSchema);
        // then
        expect(async () => await req.validate(requestBody)).rejects.toThrow();
    });
});
//# sourceMappingURL=request.spec.js.map