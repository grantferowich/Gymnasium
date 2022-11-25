const militaryTimeConversion = require('./militaryTimeConversion');

test('converts a standard time to military time', () => {
    expect(militaryTimeConversion('07:30:00pm')).toBe('19:30:00');
    expect(militaryTimeConversion('01:15:15AM')).toBe('01:15:15');
})