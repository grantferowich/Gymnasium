const urlify = require("./urlify")

test('replaces spaces in a string with %20', () => {
    expect(urlify('Mr John Doe')).toBe('Mr%20John%20Doe');
    expect(urlify('Joe Schmo')).toBe('Joe%20Schmo');
    expect(urlify('Anne Schuyler')).toBe('Anne%20Schuyler');
    expect(urlify('Cecilia Marie')).toBe('Cecilia%20Marie');
    expect(urlify('Kay Lee')).toBe('Kay%20Lee');
    expect(urlify('Gary W')).toBe('Gary%20W');

})
