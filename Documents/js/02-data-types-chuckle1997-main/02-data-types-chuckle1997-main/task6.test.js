const {velkeCislo} = require("./task6")

test('velkeCislo je bigint', () => {
    expect(typeof velkeCislo).toBe('bigint');
});