// Code your solutions in this file
function writeCards(names, eventName) {
  let messages = []; 

  for (let i = 0; i < names.length; i++) { // Step 2: Iterate through the input array
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message); // Add the message to the array
  }

  return messages; // Step 3: Return the array of messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--; // Decrease the number by 1 in each iteration
  }
}
countDown(10);

