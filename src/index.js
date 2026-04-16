var readline = require('readline-sync');

process.stdout.write('\u001b[2J\u001b[0;0H');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));    

const characters = [
    {
        name: "Mario",
        speed: 4,
        power: 3,
        handling: 3
    },
    {
        name: "Luigi",
        speed: 3,
        power: 3,
        handling: 4
    },
    {
        name: "Peach",
        speed: 5,
        power: 2,
        handling: 3
    }, 
    {
        name: "Bowser",
        speed: 2,
        power: 5,
        handling: 3
    },
    {
        name: "Yoshi",
        speed: 4,
        power: 3,
        handling: 4
    },
    {
        name: "Donkey Kong",
        speed: 2,
        power: 4,
        handling: 4
    }
];

(async function main() {

    let userAnswer
    let player1 = {
        character: null,
        points: 0
    }
    let player2 = {
        character: null,
        points: 0,
    }
    let characterChosen

    console.log("\n\n🏁🏎️  Welcome to the Mario Kart Racing Simulator!")
    userAnswer = readline.question("\nWould you like to start the tutorial? (y/n) \n")

    if (userAnswer.toLowerCase() === 'y' || userAnswer.toLowerCase() === 'yes') await tutorial()
    
    console.log("\nChoose your character:")
    for (let i = 0; i < characters.length; i++) {
        console.log(`${i + 1}. ${characters[i].name} (Speed: ${characters[i].speed}, Power: ${characters[i].power}, Handling: ${characters[i].handling})`)
    }
    characterChosen = readline.question("-----Type the number corresponding to your character:-----\n")
    switch
    (characterChosen) {
        case '1': player1.character = characters[0]; break;
        case '2': player1.character = characters[1]; break;
        case '3': player1.character = characters[2]; break;
        case '4': player1.character = characters[3]; break;
        case '5': player1.character = characters[4]; break;
        case '6': player1.character = characters[5]; break;
        default:
            console.log("I couldn't understand your answer, so I chose Mario for you.")
            player1.character = characters[0]
    }
    console.log(`You chose ${player1.character.name} as your character!`)
    await sleep(2000)
    console.log("\nNow, let's choose your opponent...")
    await sleep(3000)
    do {
        player2.character = characters[Math.floor(Math.random() * characters.length)]
    } while (player2.character == player1.character)
    console.log(`\nYour opponent is ${player2.character.name}!`)
    await sleep(2000)

    for (let i = 0; i < 5; i++) {
        await round(player1, player2, i + 1)
        await sleep(2000)
    }

    await endGame(player1, player2)

})()

async function tutorial() {
    console.log("\n📚 HOW TO PLAY - Mario Kart Simulator")
    console.log("---------------------------------------")
    console.log("🏎️  SELECT YOUR RACER: Pick a character with unique stats and abilities.")
    console.log("⚡ HIT THE TRACK: A random circuit is generated with specific challenges.")
    console.log("🎮 FACE THE CHALLENGE: Compete through Straights, Curves, and Confrontations.")
    console.log("🎯 ROLL THE DICE: Your score depends on the die roll + your character's skills.")
    console.log("🏆 VICTORY: The racer with the most points at the finish line wins!")
    console.log("\n🚀 Start your engines! Good luck and have fun! 🏎️💨\n")
    await sleep(8000)
}

async function round(player1, player2, roundNumber) {

    const tracks = ["straight line", "curve", "fighting place"]
    let currentTrack = tracks[Math.floor(Math.random() * tracks.length)]
    let param = [] 

    console.log(`\n--- Round ${roundNumber} 🏁 ---`)
    console.log(`The characters are racing in: ${currentTrack}!`)
    await sleep(2000) 
    switch (currentTrack) {
        case "straight line": param[0] = "speed"; break;
        case "curve": param[0] = "handling"; break;
        case "fighting place": param[0] = "power"; break;
    }
    param[1] = await rollDice(player1, param)
    param[2] = await rollDice(player2, param)
    if (param[1] > param[2] && param[0] !== "power") {
        console.log(`${player1.character.name} wins this round. +1 Point! 🏆`)
        player1.points++
    } else if (param[2] > param[1] && param[0] !== "power") {
        console.log(`${player2.character.name} wins this round. +1 Point! 🏆`)
        player2.points++
    } else if (param[1] > param[2] && param[0] === "power") {
        console.log(`${player1.character.name} wins a power round! 🏆`)
        console.log(`${player2.character.name} loses a point for being hit! 💥`)
        if (player2.points > 0) player2.points--
    } else if (param[2] > param[1] && param[0] === "power") {
        console.log(`${player2.character.name} wins a power round! 🏆`)
        console.log(`${player1.character.name} loses a point for being hit! 💥`)
        if (player1.points > 0) player1.points--
    }    
    else {
        console.log("It's a tie! 🤝")
        console.log("No points awarded this round.")
    }
}

async function rollDice(player, param) {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`${player.character.name} 🎲 rolled for ${param[0]}: ${roll} + ${player.character[param[0]]} = ${roll + player.character[param[0]]}`)
    await sleep(2000)
    return roll + player.character[param[0]]
}

async function endGame(player1, player2) {
    console.log("\n🏁 Final Results 🏁")
    await sleep(1000)
    console.log(`${player1.character.name}: ${player1.points} points`)
    await sleep(1000)
    console.log(`${player2.character.name}: ${player2.points} points`)
    await sleep(1000)
    if (player1.points > player2.points) {
        console.log(`\n🎉 ${player1.character.name} wins the game! Congratulations! 🏆`)
    } else if (player2.points > player1.points) {
        console.log(`\n🎉 ${player2.character.name} wins the game! Congratulations! 🏆`)
    } else {
        console.log("\nIt's a tie! Both racers performed equally well! 🤝")
    }   
}