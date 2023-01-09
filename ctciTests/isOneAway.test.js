const isOneAway = require('../../outco/stringsAndArrays/isOneAway');

test('returns a boolean after determining whether two strings are one or zero char edits different from each other', ()=>{
    expect(isOneAway("pale", "ple")).toBe(true);
    expect(isOneAway('pale', 'bake')).toBe(false);
    expect(isOneAway("apple", "aple")).toBe(true); 
    expect(isOneAway("pales", "pale")).toBe(true);
    expect(isOneAway("pale","bale")).toBe(true)
    expect(isOneAway("apppppppppppppppple", "aple")).toBe(false); 
    expect(isOneAway("h","hi")).toBe(true)
    expect(isOneAway('hehe', 'hehejj')).toBe(false)
})
