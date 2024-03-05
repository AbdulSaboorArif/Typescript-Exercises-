//  Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order

let place :string[] =['Saudia', 'Turkey', 'Germany', 'Italy','Dubai']; 

//  Print your array in its original order.
console.log('Orignal '+place);

// Print your array in alphabetical order without modifying the actual list.
// is ... ki madad say orignal place ki copy ban jay gi
console.log('Copy' +[...place].sort());

// Show that your array is still in its original order by printing it.
console.log('Orignal '+place);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy' +[...place].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('Orignal '+place);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal '+place.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Orignal '+place.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orignal '+place.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Orignal '+place.sort().reverse());

