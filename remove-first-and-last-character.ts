const removeChar = (str) => {

    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        if ( i === 0 || str.length - 1 === i  ) {
            newStr += ''
        } else {
            newStr += str[i]
        }
    }
    return newStr
};

console.log(removeChar('eloquent'))
console.log(removeChar('ooopsss'))