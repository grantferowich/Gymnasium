const militaryTimeConversion = require('./militaryTimeConversion');

test('converts a standard time to military time', () => {
    expect(militaryTimeConversion('07:30:00pm')).toBe('19:30:00');
    expect(militaryTimeConversion('01:15:15AM')).toBe('01:15:15');
    expect(militaryTimeConversion('12:00:00AM')).toBe('00:00:00');
    expect(militaryTimeConversion('12:05:39AM')).toBe('00:05:39');
    expect(militaryTimeConversion('12:40:22AM')).toBe('00:40:22');
})