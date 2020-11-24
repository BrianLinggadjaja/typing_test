
/*
    * Functionality
    */


// Checks for any stored leaderboards in localStorage, updates if any
function checkForStoredLeaderboard() {
    let storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard'))

    // If storedLeaderboard exists set application state with the localStorage
    if (storedLeaderboard) {
        globalState.leaderboard = storedLeaderboard
        populateLeaderboard()
        toggleLeaderboardTable()
        // toggleLeaderboardTable()
    }
}

function populateLeaderboard() {
    // Reverse array to display most recent scores
    globalState.leaderboard.reverse()
    for (const entry of globalState.leaderboard) {
        let isEntryValid = checkIfEntryIsValid(entry)

        if (isEntryValid) {
            addEntry(entry)
        }
    }
}

// Check entry if "mode" is type STRING and "score" is a NUMBER (TYPE Converted if string)
function checkIfEntryIsValid(entry) {
    let isModeString = (typeof(entry[0]) === 'string')
    let isScoreNumber = !isNaN(entry[1])
    let isEntryValid = (isModeString && isScoreNumber)

    if (isEntryValid) {
        return true
    } else {
        return false
    }
}

function addScoreEntry(selectedMode, totalScore) {
    let isValidMode = checkValidMode(selectedMode)
    let isScoreANumber = !isNaN(parseInt(totalScore))
    let isValidScoreEntry = (isValidMode && isScoreANumber)

    if (isValidScoreEntry) {
        // Add score entry at the start of the array if valid
        let scoreEntry = [selectedMode, totalScore]
        globalState.leaderboard.unshift(scoreEntry)

        // Update localStorage with new leaderboard
        localStorage.setItem('leaderboard', JSON.stringify(globalState.leaderboard))

        // Update leaderboard with new entry
        addEntry(scoreEntry)

        if (isLeaderboardTableHidden()) {
            toggleLeaderboardTable()
        }
    } else {
        console.error('Invalid score entry in addScoreEntry()')
    }
}


/*
    * Render
    */


function addEntry(entry) {
    const leaderboardTable = document.querySelector('#leaderboardTableData')

    // Create the proper elements
    let tableRow = document.createElement('tr')
    let modeNode = document.createElement('td')
    let scoreNode = document.createElement('td')

    // Inser mode & score data
    modeNode.innerText = entry[0]
    scoreNode.innerText = entry[1]

    // Append the table nodes into the leaderboard element
    tableRow.appendChild(modeNode)
    tableRow.appendChild(scoreNode)
    leaderboardTable.prepend(tableRow)
}
