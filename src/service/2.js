
export function Adicionar(valor){
    let array = [];
    array.push(valor);

    return array
} 

export function possibilidades(array1, array2){
    let cont = -1
    for (let index = 0; index < array1.length; index++) {
        if(array1[index] != array2[index]){
            cont++;
        }
    }
    let msg = `Exite ${cont} Possibilidades de Troca!` ;
    return msg;
}

let x = possibilidades([1,2,3,6], [2,3,4,5])
console.log(x);
   
    