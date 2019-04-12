let before = "asdg jdhf sdjkh asdkjhg";
let after = ucfirst(before);

function ucfirst(str){
    let words = str.split(" ");
    for(let w = 0; w < words.length; w++){
        let chars = words[w].split("");
        chars[0] = chars[0].toUpperCase();
        words[w] = chars.join("");
    }
    return words.join(" ");
}

alert("before: " + before + "\nafter: " + after);