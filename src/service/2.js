function verificarFigurinhas(a, b){
    let diferentes = 0;
    for(var i=0;i<a.length;i++){
        if(a[i]!=b[i]){
            diferentes = diferentes + 1;
        }
    }
    return diferentes;
}



function compararArrays(a, b) {

    var possibiladades = 0;
    for (var i = 0; i < b.length; i++) {
      for (var j = 0; j < a.length; j++) {
        if (b[i] != a[j]) {
            possibiladades += 1;
        }
      }
    }
    return possibiladades;
}

let x = compararArrays([1,2,3,6], [2,3,4,5])
console.log(x);
   
    