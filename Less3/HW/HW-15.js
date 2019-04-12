let str = "var_text_hello";

let words = str.split("_");

for (let w = 0; w < words.length; w++) {
    let words_str = str.split(" ");

    let chars = words[w].split("");
    chars[0] = chars[0].toUpperCase();
    words_str = chars.join("");

    words[w] = words_str;
}

alert("before: " + str + ";\nafter: " + words.join(" ") + ";");