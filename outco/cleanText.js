/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = "When Mt. Joy (singer / guitarist Matt Quinn, guitarist Sam Cooper, bassist Michael Byrnes, drummer Sotiris Eliopoulos, and keyboardist Jackie Miclau) came together to record their sophomore album Rearrange Us, the band was in rough shape — adrift in a miasma of situational and romantic agony, digging themselves out of relationships that had soured in the harsh light of a life permanently spent in a van somewhere between Stockton and Peoria. Not that Mt. Joy wasn't grateful for the opportunity to live out even the most wayward chapters of the archetypical rock-and-roll narrative. The band's 2018 Dualtone Records debut was nothing short of life-changing. Over the course of a year, what was first a bedroom project was now a band that Rolling Stone called 'your new folk-rock heroes.' Industry publications called the album 'a major breakthrough' (Billboard), and single 'Silver Lining' hit #1 on the AAA Radio Charts. The resulting project is a triumph of spirit and self-knowledge: Rearrange Us —produced by Tucker Martine (My Morning Jacket, Modest Mouse) — is the sound of a band growing into themselves both musically and personally. Matt Quinn's songwriting is at once more painterly and less precise, like perfectly rendered vignettes from a largely disjointed memory of a dream, as the band veers from folk-stomps to psychedelic reflections to gospel elegies with a well-honed verve — all to create a welcome salve to the transience of getting older and chasing a dream."


const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim();
    return text;
}

console.log(cleanText(words));