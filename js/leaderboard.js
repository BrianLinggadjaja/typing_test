// Checks for any stored leaderboards in localStorage, updates if any
function checkForStoredLeaderboard() {
    let storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard'))

    // If storedLeaderboard exists set application state with the localStorage
    if (storedLeaderboard) {
        leaderboard = storedLeaderboard
        populateLeaderboard()
        toggleLeaderboardTable()
        // toggleLeaderboardTable()
    }
}

function populateLeaderboard() {
    const leaderboardTable = document.querySelector('#leaderboardTable')

    for (const entry of leaderboard) {
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
        leaderboardTable.appendChild(tableRow)
    }
}

function validateLeaderboardState() {
    console.log('test', leaderboard)
}