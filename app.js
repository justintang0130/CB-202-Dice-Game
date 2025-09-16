let choice = 3

if (choice <= 2) {
    console.log("Low Number")
}   else if (choice <= 4) {
    console.log("Medium Number")
}   else if (choice <= 6) {
    console.log("High Number")
}

let won;
won = (choice % 2 === 0) ? "You won" : "You lost"
console.log(won)

console.log("\nBonus Switch Statement")
console.log("----------------\n")

switch (true) {
    case (choice <= 2):
        console.log("Low Number")
        break;
    case (choice <= 4):
        console.log("Medium Number")
        break;
    default:
        console.log("High Number")
}