const removeChar = (str) => {

    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        if ( i === 0 || str[str.length - 1] === str[i]  ) {
            newStr += ''
        } else {
            newStr += str[i]
        }
    }
    return newStr
};

console.log(removeChar('eloquent'))