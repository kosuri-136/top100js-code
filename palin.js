function isPalindrome(word){
    var wordreverse = word.split("").reverse.join("")
    // reverse = (word.split(""));
    return word === wordreverse
}
var word = "racecar";
var result = isPalindrome(word);
console.log(result);