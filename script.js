let word1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur "
let longer=function(word1){
    let converted=word1.split(" ")
    let final=""
    for (let i = 0; i < converted.length; i++) {
       if (converted[i].length>final.length) {
        final=converted[i];
       } 
    }
    console.log(final)
}
longer(word1);