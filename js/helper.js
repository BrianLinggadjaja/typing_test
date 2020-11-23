/*
    * Prototypes
    */


// STRING prototype that extends the removeDuplicateSpaces() method to to all STRING types
String.prototype.removeDuplicateSpaces = function () {
    return this.replace(/\s+/g, ' ')
}


/*
    * Global State
    */


let leaderboard = []
let totalScore = 0

let hasTimerStarted = false
let timer = null
let initalTime = 0
let totalMinutes = 0
let totalSeconds = 0

let mode = null
let selectedPrompt = null
let selectedPromptChildNodes = null
let promptWordsArray = []
let currentWordIndex = 0


/*
    * Render
    */


function toggleLeaderboardTable() {
    const noLeaderboardMessage = document.querySelector('#noLeaderboardMessage')
    const leaderboardTable = document.querySelector('#leaderboardTable')

    if (isLeaderboardTableHidden()) {
        noLeaderboardMessage.classList.add('hide')
        leaderboardTable.classList.remove('hide')
    } else {
        noLeaderboardMessage.classList.remove('hide')
        leaderboardTable.classList.add('hide')
    }
}

function isLeaderboardTableHidden() {
    let isLeaderboardTableHidden = leaderboardTable.classList.contains('hide')

    if (isLeaderboardTableHidden) {
        return true
    } else {
        return false
    }
}

function toggleTypingTestView() {
    const testSelectorView = document.querySelector('#testSelector')
    const typingTestView = document.querySelector('#typingTest')
    let isTypingTestViewHidden = typingTestView.classList.contains('hide')

    if (isTypingTestViewHidden) {
        typingTestView.classList.remove('hide')
        testSelectorView.classList.add('hide')
    } else {
        typingTestView.classList.add('hide')
        testSelectorView.classList.remove('hide')
    }
}

// Option a time selector modal when "race" mode selected
function toggleRaceModal() {
    const raceModal = document.querySelector('.race-modal')
    let isModalHidden = raceModal.classList.contains('hide')

    if (isModalHidden) {
        raceModal.classList.remove('hide')
    } else {
        raceModal.classList.add('hide')
    }
}

function toggleScoreModal() {
    const scoreModal = document.querySelector('.score-modal')

    let isModalHidden = scoreModal.classList.contains('hide')

    if (isModalHidden) {
        scoreModal.classList.remove('hide')
    } else {
        scoreModal.classList.add('hide')
    }
}

function allowTypingTestControls(isActive) {
    // If true enable eventlisteners for typing test else disable
    const responseTextarea = document.querySelector('#response')

    if (isActive) {
        responseTextarea.addEventListener('keyup', checkForTestProgress)
    } else {
        responseTextarea.removeEventListener('keyup', checkForTestProgress, false)
    }
}
