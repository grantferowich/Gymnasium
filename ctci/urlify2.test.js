const urlify2 = require("./urlify")

test('replaces spaces in a string with %20', () => {
    expect(urlify2('Mr John Doe')).toBe('Mr%20John%20Doe');
    expect(urlify2('Joe Schmo')).toBe('Joe%20Schmo');
    expect(urlify2('Anne Schuyler')).toBe('Anne%20Schuyler');
    expect(urlify2('Cecilia Marie')).toBe('Cecilia%20Marie');
    expect(urlify2('Kay Lee')).toBe('Kay%20Lee');
    expect(urlify2('Gary W')).toBe('Gary%20W');
})
