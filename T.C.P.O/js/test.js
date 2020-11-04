let str = Math.PI
for(i=1;i<=6;i++){
    str = Math.floor(Math.random() * 100 + 1)
    let word = "<h" + i + ">" + str + "</h" + i + ">"
    document.write(word)
}