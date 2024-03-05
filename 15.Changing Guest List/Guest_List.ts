
let Guest_List :string[] =['Nawaz Sharif','Imran Khan','Asif Ali Zardari'];

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

let absunt_Guest:string = 'Imran Khan';
let new_Guest:string = 'Kamran tessori';
Guest_List[0] = new_Guest;


for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
console.log(`Mr. ${absunt_Guest} is not coming in party`)

