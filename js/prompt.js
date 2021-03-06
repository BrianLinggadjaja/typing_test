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
    `Dark Souls III is an action role-playing game played in a third-person perspective, similar to previous games in the series. According to lead director and series creator Hidetaka Miyazaki, the game's gameplay design followed "closely from Dark Souls II". Players are equipped with a variety of weapons to fight against enemies, such as bows, throwable projectiles, and swords. Shields can act as secondary weapons but they are mainly used to deflect enemies' attacks and protect the player from suffering damage. Each weapon has two basic types of attack, one being a standard attack, and the other being slightly more powerful that can be charged up.`,
    // Prompt 4
    `Garry's Mod (abbreviated GMod) is a 2006 sandbox game developed by Facepunch Studios and published by Valve. The base game mode of Garry's Mod has no set objectives and provides the player with a world to freely manipulate objects in. Other game modes, notably Trouble in Terrorist Town, are created by other developers as mods and are installed separately, by means such as the Steam Workshop. Garry's Mod was created by Garry Newman as a mod for Valve's Source game engine and released in December 2004, before being expanded into a standalone release and published by Valve in November 2006. Ports of the original Microsoft Windows version for Mac OS X and Linux followed in September 2010 and June 2013, respectively. As of December 2019, Garry's Mod has sold 15 million copies.`,
    // Prompt 5
    `Valorant is a team-based tactical shooter and first-person shooter set in the near-future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability which requires charging through kills, deaths, or spike actions. Every player starts each round with a "classic" pistol and one or more "signature ability" charge. Other weapons and ability charges can be purchased using an in game economic system which awards money based on the outcome of the previous round, any kills the player is responsible for, and any actions taken with the spike. The game has an assortment of weapons including sidearms, submachine guns, shotguns, machine guns, assault rifles and sniper rifles. There are automatic and semi-automatic weapons that have a shooting pattern which has to be controlled by the player in order to be able to shoot accurately.`
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
    `,
    // Prompt 4
    `Payday 2 consists of a variety of 'heists' that a player can opt to either carry out by themselves, with the AI, or as part of a multiplayer game. There are heists such as bank robberies, drug trafficking runs, rigging an election, or stealing smuggled nuclear warheads. Some of the heists put a large emphasis on stealth, often leading to bonus experience points and money on completion, and certain heists can only be done in stealth.

    The level selection menu is styled as a fictional website, Crime.net, where missions pop up periodically as contracts in a map of Washington, D.C. The player can pick up an open contract, join a contract another player has started, or buy a contract with in-game money in an offshore bank account. There are seven difficulty levels: Normal, Hard, Very Hard, Overkill, Mayhem, Death Wish, and Death Sentence (formerly One Down), with increased money and experience payouts for higher difficulty levels. Currently there is an option to enable the "One Down" function on any difficulty, meaning that players can only go down once before going into custody (goes up to two downs with the "Nine Lives" skill aced). Independent of difficulty was the "pro job" condition - pro jobs give additional experience, but cannot be retried if the players fail. Pro Jobs were later removed in an update. Some contracts in Payday 2 take place over multiple days, with each day represented by a separate level with different objectives. After certain days of heists are completed in 'loud' (In which the alarm has sounded) the game may add an escape level, where the players' original escape is thwarted and they must survive to reach their backup getaway.
    
    Many jobs in Payday 2 can be completed in stealth. If players avoid getting caught on camera, evade or silently kill security guards, don't kill more than four guards with pagers (number of pagers may be lowered via modifications in the "crime spree" game-mode) and keep any civilian witnesses from calling the police, the alarm will not be raised and the players will receive an experience bonus. Otherwise, players will have to achieve their objectives, carry out any loot they find to a drop-off point, and then reach their escape point under the pressure of constant police assault waves. Most of the enemies are SWAT units sourced from D.C. police, then FBI SWAT, GenSec private security contractors and finally the DHS as difficulty increases. Mixed in with these are special units; all versions of Payday 2 include the "Shield" and the "Taser" - both named for their signature equipment, the "Bulldozer" - a SWAT team member in a modified near-bulletproof bomb suit, and snipers. The Crimewave Edition and PC version include the "Cloaker" - an infiltration and hand-to-hand combat expert. Exclusive to the PC and Crimewave editions are near-indestructible SWAT van turrets, capable of area denial, a medic capable of returning an enforcer to full health with no status effects, and Captain Winters, a well-protected veteran police officer who sustains assaults and buffs enemies until he can be driven off.
    
    If a player takes too much damage they will be knocked down and incapacitated. If no one helps them back up, or if they are downed a number of times without healing up via a "doctor bag", they will be taken into custody. On lower difficulty levels players in custody will eventually come out of custody after a set time period, but otherwise, their teammates must take a hostage to trade to get them back into the game. A job is failed if all players are downed or in custody (but some jobs have unique failure conditions, such as the loud only heist, Cook Off by adding the incorrect ingredient and blowing up the meth lab).
    
    At the end of each heist, the player is presented with a screen with three cards, one of which is to be chosen by the player (called a "Payday"). These bonus cards can be either weapon modifications, masks, weapon skins, colors or materials for masks, bonus experience or money. Players can purchase and customize masks, although these are purely cosmetic and have no effect on the gameplay.
    `,
    // Prompt 5
    `The Elder Scrolls V: Skyrim is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011.

    The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.
    
    Skyrim was developed using the Creation Engine, rebuilt specifically for the game. The team opted for a unique and more diverse open world than Oblivion's Imperial Province of Cyrodiil, which game director and executive producer Todd Howard considered less interesting by comparison. The game was released to critical acclaim, with reviewers particularly mentioning the character advancement and setting, and is considered to be one of the greatest video games of all time. Nonetheless it received some criticism, predominantly for its melee combat and numerous technical issues present at launch. The game shipped over seven million copies to retailers within the first week of its release, and over 30 million copies on all platforms as of November 2016, making it one of the best selling video games in history.
    
    Three downloadable content (DLC) add-ons were released-Dawnguard, Hearthfire, and Dragonborn-which were repackaged into The Elder Scrolls V: Skyrim – Legendary Edition and released in June 2013. The Elder Scrolls V: Skyrim – Special Edition is a remastered version of the game released for Windows, Xbox One, and PlayStation 4 in October 2016. It includes all three DLC expansions and a graphical upgrade, along with additional features such as modding capabilities on consoles. Versions were released in November 2017 for the Nintendo Switch and PlayStation VR, and a stand-alone virtual reality (VR) version for Windows was released in April 2018. These versions were based on the remastered release, but the Switch version's graphics upgrade was relative to its hardware capabilities, and it did not include the modding features.
    `
]