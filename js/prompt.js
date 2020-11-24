/*
    * Prompts
    */


// Choose a random prompt based on the "mode"
function randomlySelectPrompt(mode) {
    let isValidMode = checkValidMode(mode)

    // Randomly selected an associated "mode" prompt
    if (isValidMode && (globalState.mode === 'race')) {
        let selectedRacePromptIndex = Math.floor((Math.random() * racePrompts.length) + 0)
        let selectedRacePrompt = racePrompts[selectedRacePromptIndex]

        // Set prompt in global state
        setPrompt(selectedRacePrompt)

        // Render newly selected prompt
        renderPrompt()
    } else if (isValidMode && (globalState.mode === 'pace')) {
        let selectedPacePromptIndex = Math.floor((Math.random() * pacePrompts.length) + 0)
        let selectedPacePrompt = pacePrompts[selectedPacePromptIndex]

        // Set prompt in global state
        setPrompt(selectedPacePrompt)

        // Render newly selected prompt
        renderPrompt()
    } else {
        console.error('Invalid "mode" selected in randomlySelectPrompt()')
    }
}

function setPrompt(prompt) {
    // Remove leading, trailing, & duplicate spaces
    prompt = prompt.trim()
    prompt = prompt.removeDuplicateSpaces()

    // Set selectedPrompt from global state with the prompt provided
    globalState.selectedPromptChildNodes = document.querySelector('.prompt').children
    globalState.selectedPrompt = prompt
    globalState.promptWordsArray = prompt.split(' ')
}

function renderPrompt() {
    const promptElement = document.querySelector('.prompt')
    const wordsArray = globalState.selectedPrompt.split(' ')

    // Clear old prompt
    promptElement.textContent = ''

    for (const word of wordsArray) {
        let wordSpan = document.createElement('span')
        wordSpan.classList.add('word')

        let characterArray = word.split('')

        // Add a span for each character
        for (const character of characterArray) {
            let characterSpan = document.createElement('span')
            characterSpan.classList.add('char')
            characterSpan.innerText = character

            wordSpan.appendChild(characterSpan)
        }

        // Add space after each word
        let spaceSpan = document.createElement('span')
        spaceSpan.classList.add('char')
        spaceSpan.innerText = ' '
        wordSpan.appendChild(spaceSpan)

        promptElement.appendChild(wordSpan)
    }

}


/*
    * Prompts
    */


const pacePrompts = [
    // Prompt 1
    `Stardew Valley is a farming simulation game primarily inspired by the Harvest Moon video game series. At the start of the game, players create their character, who becomes the recipient of a plot of land and a small house once owned by their grandfather in a small town called Pelican Town. Players may select from several different farm map types, each having benefits and drawbacks. The farm plot is initially overrun with boulders, trees, stumps, and weeds, and players must work to clear them in order to restart the farm, tending to crops and livestock so as to generate revenue and further expand the farm's buildings and facilities.`,
    // Prompt 2
    `Call of Duty: Warzone is a free-to-play battle royale video game released on March 10, 2020, for PlayStation 4, Xbox One, and Microsoft Windows. The game is a part of the 2019 title Call of Duty: Modern Warfare and the 2020 title Call of Duty: Black Ops Cold War but does not require purchase of it. Warzone was developed by Infinity Ward and Raven Software and published by Activision. Warzone allows online multiplayer combat among 150 players, although some limited-time game modes support 200 players.`,
    // Prompt 3
    `Dark Souls III is an action role-playing game played in a third-person perspective, similar to previous games in the series. According to lead director and series creator Hidetaka Miyazaki, the game's gameplay design followed "closely from Dark Souls II". Players are equipped with a variety of weapons to fight against enemies, such as bows, throwable projectiles, and swords. Shields can act as secondary weapons but they are mainly used to deflect enemies' attacks and protect the player from suffering damage. Each weapon has two basic types of attack, one being a standard attack, and the other being slightly more powerful that can be charged up.`
]

const racePrompts = [
    // Prompt 1
    `Among Us is a multiplayer game for four to ten players. One to three players (depending on what the host selected) are chosen to be the impostor(s) each round. A game can take place on one of three maps: a spaceship called "The Skeld", a headquarters building called "Mira HQ", or a planet base called "Polus".

    At the start of the game, Crewmates are given "tasks" to complete around the map in the form of minigames, consisting of maintenance work on vital systems such as electrical rewiring and engine refueling. Impostors are given a fake list of tasks to blend in with Crewmates, although they are unable to actually complete any task. Impostors can sabotage vital systems, covertly travel through air vents, and work with other Impostors to kill Crewmates. If a player dies, they become a ghost. Ghosts can pass through walls, are invisible to everyone except other ghosts, and are limited in their capacity to interact with the world; however, dead Crewmates must still complete their tasks. If an Impostor dies from being voted off, they can still sabotage to help the other Impostor(s). All players except ghosts have a limited cone of vision, only allowing them to see other players within a certain unblocked distance around them.
    
    The Crewmates win by completing all tasks, or by identifying and eliminating all Impostors. The Impostors win when the number of Impostors is equal to the number of Crewmates, or when a sabotage countdown reaches zero. Ghosts help their living teammates by completing tasks (as a Crewmate) or performing sabotages (as an Impostor). When an Impostor performs a sabotage, either there is an immediate consequence (such as all the lights being turned off) or a countdown begins. In the latter case, if the sabotage is not resolved before the countdown finishes, the Impostors win. Sabotages can be resolved by living players in varying ways depending on which sabotage is performed. Games can also end by players quitting the match if doing so fulfills any win condition; a player quitting is equivalent to them being eliminated, and a Crewmate quitting leads to their tasks being considered completed for the total.
    
    To help the Crewmates identify Impostors, there are various surveillance systems in each map, such as a security camera system on The Skeld, a doorlog in Mira HQ, and a vitals indicator in Polus. Crewmates may also confirm their identity through visual tasks, which cannot be faked by Impostors. Any living player may call a group meeting by reporting a dead body, or by pressing a button in the map at any time (except when a sabotage is in progress). This halts all other gameplay. In the meeting, players discuss who they believe is an Impostor based on the available evidence. A plurality vote is held, and the chosen player is ejected from the map and dies. Players can communicate in a text chat, but only during meetings, and only if they are alive (though ghosts can speak with one another at any time). While the game does not have a built-in voice chat system, it is common for players to use external programs such as Discord while playing.
    
    In each game's lobby, various options can be adjusted to customize aspects of gameplay, such as the vision range of the Crewmates and the Impostors, and the allowed number of emergency meetings. There are also many cosmetic options, including spacesuit colors, skins, hats, and pets, some of which are paid downloadable content.
    `,
    // Prompt 2
    `Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions-linear scenarios with set objectives-to progress through the story. Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series. It may be fully explored after the game's beginning without restriction, although story progress unlocks more gameplay content.

    Players use melee attacks, firearms and explosives to fight enemies, and may run, jump, swim or use vehicles to navigate the world. To accommodate the map's size, the game introduces vehicle types absent in its predecessor Grand Theft Auto IV, such as fixed-wing aircraft. In combat, auto-aim and a cover system may be used as assistance against enemies. Should players take damage, their health meter will gradually regenerate to its halfway point. Players respawn at hospitals when their health depletes. If players commit crimes, law enforcement agencies may respond as indicated by a "wanted" meter in the head-up display (HUD). Stars displayed on the meter indicate the current wanted level (for example, at the maximum five-star level, police helicopters and SWAT teams swarm to lethally dispatch players). Law enforcement officers will search for players who leave the wanted vicinity. The meter enters a cool-down mode and eventually recedes when players are hidden from the officers' line of sight that displays on the mini-map.
    
    The single-player mode lets players control three characters: Michael De Santa, Trevor Philips and Franklin Clinton-criminals whose stories interconnect as they complete missions. Some missions are completed with only one character and others feature two or three. Outside the missions, players may switch between characters at will by a directional compass on the HUD. The game may switch characters automatically during missions to complete specific objectives. A character's compass avatar will flash red if he is in danger and needs help, and flash white if he has a strategic advantage. Though players complete missions as any of the three protagonists, the more difficult heist missions require aid from AI-controlled accomplices with unique skill sets like computer hacking and driving. If an accomplice survives a successful heist, they take a cut from the cash reward and may be available for later missions with improvements to their unique skills. Some heists afford multiple strategies; in a holdup mission, players may either stealthily subdue civilians with an incapacitating agent or conspicuously storm the venue with guns drawn.
    
    Each character has a set of eight skills that represent their ability in specific areas such as shooting and driving. Though skills improve through play, each character has a skill with expertise by default (e.g. Trevor's flying skill). The eighth "special" skill determines the effectiveness in performing an ability that is unique to each respective character. Michael enters bullet time in combat, Franklin slows down time while driving, and Trevor deals twice as much damage to enemies while taking half as much in combat. A meter on each character's HUD depletes when an ability is being used and regenerates when players perform skilful actions (for example, drifting in vehicles as Franklin or performing headshots as Michael).
    
    While free-roaming the game world, players may engage in context-specific activities such as scuba diving and BASE jumping. Each character has a smartphone for contacting friends, starting activities and accessing an in-game Internet. The Internet lets players trade in stocks via a stock market. Players may purchase properties such as garages and businesses, upgrade the weapons and vehicles in each character's arsenal. Players may also visit places such as cinemas and strip clubs. Players can also customise their appearance by purchasing outfits, haircuts and tattoos.
    `,
    // Prompt 3
    `Minecraft is a 3D sandbox game that has no specific goals to accomplish, allowing players a large amount of freedom in choosing how to play the game. However, there is an achievement system, known as "advancements" in the Java Edition of the game. Gameplay is in the first-person perspective by default, but players have the option for third-person perspective. The game world is composed of rough 3D objects-mainly cubes and fluids, and commonly called "blocks"-representing various materials, such as dirt, stone, ores, tree trunks, water, and lava. The core gameplay revolves around picking up and placing these objects. These blocks are arranged in a 3D grid, while players can move freely around the world. Players can "mine" blocks and then place them elsewhere, enabling them to build things. Many commentators have described the game's physics system as unrealistic. The game also contains a material known as redstone, which can be used to make primitive mechanical devices, electrical circuits, and logic gates, allowing for the construction of many complex systems.

    The default player skin, Steve, stands on a cliffside overlooking a village in a forest. In the distance, there is a small mountain range. The sun is setting to the right, making the sky turn pink and blue.
    An example of Minecraft's procedurally-generated terrain, including a village and the default skin Steve
    The game world is virtually infinite and procedurally generated as players explore it, using a map seed that is obtained from the system clock at the time of world creation (or manually specified by the player). There are limits on vertical movement, but Minecraft allows an infinitely large game world to be generated on the horizontal plane. Due to technical problems when extremely distant locations are reached, however, there is a barrier preventing players from traversing to locations beyond 30,000,000 blocks from the center. The game achieves this by splitting the world data into smaller sections called "chunks" that are only created or loaded when players are nearby. The world is divided into biomes ranging from deserts to jungles to snowfields; the terrain includes plains, mountains, forests, caves, and various lava/water bodies. The in-game time system follows a day and night cycle, and one full cycle lasts 20 real-time minutes.
    
    When starting a new world, players must choose one of five game modes, as well as one of four difficulties, ranging from peaceful to hard. Increasing the difficulty of the game causes the player to take more damage from mobs, as well as having other difficulty-specific effects. For example, the peaceful difficulty prevents hostile mobs from spawning, and the hard difficulty allows players to starve to death if their hunger bar is depleted. Once selected, the difficulty can be changed, but the game mode is locked and can only be changed with cheats.
    `
]