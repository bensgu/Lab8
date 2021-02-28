const main = require('../assets/scripts/main');

describe('correct volume icon for all values', () => {
    test('where value is 0', () => {
        expect(main(0)).toContain('0');
    });

    test('where value is 1', () => {
        expect(main(1)).toContain('1');
    });

    test('where value is 34', () => {
        expect(main(34)).toContain('2');
    });

    test('where value is 67', () => {
        expect(main(67)).toContain('3');
    });

});
