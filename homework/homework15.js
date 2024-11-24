console.log('\n---------------TASK01---------------\n');
function toCamelCase(str){
    if (str.trim().split(' ').length <= 1) return str;

    return str.trim().split(' ').filter(e => e !== '').reduce((camelCaseArr, el) => {
        if (camelCaseArr.length === 0) camelCaseArr.push(el.toLowerCase());
        else camelCaseArr.push(el.toUpperCase()[0] + el.toLowerCase().slice(1));
        return camelCaseArr;
    }, []).join('');
}

console.log(toCamelCase("first name")) // firstName
console.log(toCamelCase("last   name")) // lastName
console.log(toCamelCase("   ZIP CODE")) // zipCode
console.log(toCamelCase("I Learn Java Script")) // iLearnJavaScript
console.log(toCamelCase("helloWorld")) // helloWorld
console.log(toCamelCase("  ")) // 


console.log('\n---------------TASK02---------------\n');
function toSnakeCase(str){
    if (str.trim().split(' ').length <= 1) return str;
    
    return str.trim().split(' ').filter(e => e !== '').reduce((snakeCaseArr, el) => {
        snakeCaseArr.push(el.toLowerCase());
        return snakeCaseArr;
    }, []).join('_');
}

console.log(toSnakeCase("first name")) // first_name
console.log(toSnakeCase("last   name")) // last_name
console.log(toSnakeCase("     I love Java Script")) // i_love_java_script
console.log(toSnakeCase("already_snake_case")) // already_snake_case
console.log(toSnakeCase("hello")) // hello
console.log(toSnakeCase("  ")) //


console.log('\n---------------TASK03---------------\n');
function alternatingCases(str) {
    let result = '';
    let shouldCapitalize = true;
    
    for (const char of str) {
        if (/[a-zA-Z]/) {
            result += shouldCapitalize ? char.toUpperCase() : char.toLowerCase();
            shouldCapitalize = !shouldCapitalize;
        } else {
            result += char;
        }
    }
    
    return result;
}

console.log(alternatingCases("Hello")) // HeLlO
console.log(alternatingCases("basketball")) // BaSkEtBaLl
console.log(alternatingCases("Tech Global")) // TeCh GlObAl
console.log(alternatingCases("")) // 
console.log(alternatingCases("123!@#aB")) // 123!@#Ab


console.log('\n---------------TASK04---------------\n');
function isNeutral(str1, str2){
    let result = '';
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === '-' && str2[i] === '-') result += '-'
        else if (str1[i] === '+' && str2[i] === '+') result += '+'
        else result += '0'
    }
    
    return result;
}

console.log(isNeutral("-", "+")) // 0
console.log(isNeutral("-+", "-+")) // -+
console.log(isNeutral("-++-", "-+-+")) // -+00
console.log(isNeutral("--++--", "++--++")) // 000000
console.log(isNeutral("+++", "+++")) // +++


console.log('\n---------------TASK05---------------\n');
function isTrueOrFalse(str){
    let positiveHalf = str.split('').filter(e => /[a-mA-M]/.test(e)).length;
    let negativeHalf = str.split('').filter(e => /[n-zN-Z]/.test(e)).length;

    return positiveHalf >= negativeHalf;
    // I can put htis in one line but am leaving as is for future reference since I was practicing regex
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")) // true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")) // false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")) // true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")) // true
console.log(isTrueOrFalse("Got stuck in the Traffic")) // false