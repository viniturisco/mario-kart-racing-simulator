var readline = require('readline-sync');

process.stdout.write('\u001b[2J\u001b[0;0H');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const carachters = [
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

    if (userAnswer.toLowerCase() === 'y') await tutorial()
    
    console.log("\nChoose your character:")
    for (let i = 0; i < carachters.length; i++) {
        console.log(`${i + 1}. ${carachters[i].name} (Speed: ${carachters[i].speed}, Power: ${carachters[i].power}, Handling: ${carachters[i].handling})`)
    }
    characterChosen = readline.question("-----Type the number corresponding to your character:-----\n")
    switch
    (characterChosen) {
        case '1': player1.character = carachters[0]; break;
        case '2': player1.character = carachters[1]; break;
        case '3': player1.character = carachters[2]; break;
        case '4': player1.character = carachters[3]; break;
        case '5': player1.character = carachters[4]; break;
        case '6': player1.character = carachters[5]; break;
        default:
            console.log("I couldn't understand your answer, so I chose Mario for you.")
            player1.character = carachters[0]
    }
    console.log(`You chose ${player1.character.name} as your character!`)
    await sleep(2000)
    console.log("\nNow, let's choose your opponent...")
    await sleep(3000)
    do {
        player2.character = carachters[Math.floor(Math.random() * carachters.length)]
    } while (player2.character === player1.character)
    console.log(`\nYour opponent is ${player2.character.name}!`)

    for (let i = 0; i < 5; i++) {
        await round(player1, player2, i + 1)
    }

})()

async function tutorial() {
    console.log("\n📚 Mario Kart Racing Simulator is a solo game where you can race against an opponent from Mario's games.")
    console.log("🏎️  First of all, choose a character. Each one has their own unique stats and abilities.")
    console.log("⚡ After choosing your character, a random track will be generated. Each track has its own characteristics and challenges.")
    console.log("🎮 Each track has straight lines, curves, and fighting places that will make your character compete against the other racers.")
    console.log("🎯 To gain points, roll a die and add your points from the correct ability. Each part of the track require different skills.")
    console.log("🏁 In the end of the race, the player with more points wins the race.\n")
    console.log("🚀 Now that you know the basics, it's time to start racing! Good luck and have fun! 🏎️💨\n")

    await sleep(8000)
}

async function round(player1, player2, roundNumber) {

    const tracks = ["straight line", "curve", "fighting place"]
    let currentTrack = tracks[Math.floor(Math.random() * tracks.length)]
    console.log(`\n--- Round ${roundNumber} 🏁 ---`)
    console.log(`The characters are racing in: ${currentTrack}!`)
    rollDice(player1, currentTrack)


}

async function rollDice(player1, currentTrack) {
    if (currentTrack === "straight line") {
        console.log(`${player1.character.name} rolled a  🎲`)
        await sleep(2000)
        const dieRoll = Math.floor(Math.random() * 6) + 1
        const points = dieRoll + player1.character.speed
        console.log(`${player1.character.name} rolled a ${dieRoll} and has a total of ${points} points for this round!`)
    }
}