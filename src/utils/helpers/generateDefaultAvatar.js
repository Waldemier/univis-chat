import tinycolor from 'tinycolor2';

/*
    Generate from hash
*/

export default hash => {
    const [r, g, b] = hash.substr(0, 3).split('').map(letter => letter.charCodeAt(0) > 255 ? 255 : letter.charCodeAt(0)); //because 255 digit is end of rgb colors
    const color = tinycolor({ r, g, b }).toHexString();
    const lightenColor = tinycolor({ r, g, b }).lighten(40).toHexString();
    return {
        color,
        lightenColor
    };
}