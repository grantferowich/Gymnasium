const urlify3 = require("./urlify")

test('replaces spaces in a string with %20', () => {
    expect(urlify3('Mr John Doe')).toBe('Mr%20John%20Doe');
    expect(urlify3('Joe Schmo')).toBe('Joe%20Schmo');
    expect(urlify3('Anne Schuyler')).toBe('Anne%20Schuyler');
    expect(urlify3('Cecilia Marie')).toBe('Cecilia%20Marie');
    expect(urlify3('Kay Lee')).toBe('Kay%20Lee');
    expect(urlify3('Gary W')).toBe('Gary%20W');

})
