export function Adicionar(valor){
    let array = [];
    array.push(valor);

    return array
} 

export function inverter(array){
    let arr = array.reverse();
    return arr;
}


let x = inverter([1,2,3]);
console.log(x);