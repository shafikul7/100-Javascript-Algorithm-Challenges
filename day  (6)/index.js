function pattern() {
    let star= "";
    for(let i=0;i<5;i++){
        
        for(let j=0;j<4;j++){
           star +='*'
        }
        star += '\n';
    }
    console.log(star)
}

pattern();