function countvowel(str){
    return str.match(/[aeiou]/gi)?.length||0;
}