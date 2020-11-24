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


let globalState = {
    leaderboard: [],
    totalScore: 0,
    hasTimerStarted: false,
    timer: null,
    initalTime: 0,
    totalMinutes: 0,
    totalSeconds: 0,
    mode: null,
    selectedPrompt: null,
    selectedPromptChildNodes: null,
    promptWordsArray: [],
    currentWordIndex: 0,
}


/*
    * Event Listeners
    */


function initalizeEventListeners() {
    // Race Mode Actions
    const raceButton = document.querySelector('#raceButton')
    const raceOneMinute = document.querySelector('#raceOne')
    const raceTwoMinutes = document.querySelector('#raceTwo')
    const raceThreeMinutes = document.querySelector('#raceThree')
    const raceFiveMinutes = document.querySelector('#raceFive')
    const raceCancel = document.querySelector('#raceCancel')

    raceButton.addEventListener('click', toggleRaceModal)
    raceOneMinute.addEventListener('click', setMode.bind(this, 'race', 1))
    raceTwoMinutes.addEventListener('click', setMode.bind(this, 'race', 2))
    raceThreeMinutes.addEventListener('click', setMode.bind(this, 'race', 3))
    raceFiveMinutes.addEventListener('click', setMode.bind(this, 'race', 5))
    raceCancel.addEventListener('click', toggleRaceModal)

    // Pace Mode Action
    const paceButton = document.querySelector('#paceButton')

    paceButton.addEventListener('click', setMode.bind(this, 'pace'))

    // Test Actions
    const confirmScore = document.querySelector('#confirmScore')
    const resetTest = document.querySelector('#resetTest')

    confirmScore.addEventListener('click', confirmTypingTestScore)
    resetTest.addEventListener('click', resetTypingTest)
}


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
