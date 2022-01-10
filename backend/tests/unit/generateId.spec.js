const generateId = require('../../src/utils/generateId');

describe('Generate an ID', () => {
    const id = generateId();

    it('Should generate an ID', () => {
        expect(id).toHaveLength(8);
    });
});