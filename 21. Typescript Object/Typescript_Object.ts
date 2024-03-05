// Write a program that creates Objects containing these items

let personName :string = 'Saboor';

// const personName_Array :(String | number)[] =['Safi', 8, 'Arif'];

const personName_Array1 :string[]=['Person','Cars','Cold Drink']
// Data type of person object 
interface person {
    age : number,
    name : string,
    nationality : string,
    Student : boolean,
}
//  person object 
let person :person= {

    age : 19,
    name : 'Saboor',
    nationality : 'Pakistan',
    Student : true
}

console.log(person);

// Datatype of car object
interface Car {
       maker : string;
       color : string;
       automatic : boolean
}
// car object 
let Car = {
      maker :'Toyota',
      color : 'Black',
      automatic :true,
}
console.log(Car);