
let Guest_List :string[] =['Nawaz Sharif','Imran Khan','Asif Ali Zardari'];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absunt_Guest:string = 'Nawaz Sharif';
let new_Guest:string = 'Kamran tessori';
Guest_List[0] = new_Guest;


// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
console.log(`Mr. ${absunt_Guest} is not coming in party`);
console.log(`Good News! We are find big table so we inviting 3 more guest at dinner`)

Guest_List.unshift('sir zia khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Butto Zardari');


for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`\nSorry we can not arrange big table, Only two people are invited.`);
// yaha per may nay guest remove ki ay ha
// while or pop function ya kam kar tay ha kay agher hum in ko kha day 
// kay 2 kay bad jitnay banday ha ion ko remove kar do guest list say 
while(Guest_List.length > 2){
    let remove_guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_guest} you are not invited for Dinner`);
}
// hamary bachay ho ay invited two guest 
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited .\n\nThank you!\n\n')
}
// may nay saray guest array say remove kar di ay 
Guest_List.splice(0, 2);
console.log(Guest_List);






