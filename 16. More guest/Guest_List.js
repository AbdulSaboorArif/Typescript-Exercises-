"use strict";
let Guest_List = ['Nawaz Sharif', 'Imran Khan', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absunt_Guest = 'Nawaz Sharif';
let new_Guest = 'Kamran tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Mr. ${absunt_Guest} is not coming in party`);
console.log(`Good News! We are find big table so we inviting 3 more guest at dinner`);
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Butto Zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
