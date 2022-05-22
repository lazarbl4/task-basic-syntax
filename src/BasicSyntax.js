export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = str.length - 1; i >= 0; i--) {
        let temp = 0;
        let cur = str[i];
        switch (cur) {
            case 'I':
                temp = 1;
                break;
            case 'V':
                temp = 5;
                break;
            case 'X':
                temp = 10;
                break;
            case 'L':
                temp = 50;
                break;
            case 'C':
                temp = 100;
                break;
            case 'D':
                temp = 500;
                break;
            case 'M':
                temp = 1000;
                break;
        }
        if (i != str.length - 1) {
            let prev = str[i + 1];
            if (
                (cur == 'I' && (prev == 'V' || prev == 'X')) ||
                (cur == 'X' && (prev == 'L' || prev == 'C')) ||
                (cur == 'C' && (prev == 'D' || prev == 'M'))
            )
                temp = -temp;
        }
        result += temp;
    }
    return result;
}
