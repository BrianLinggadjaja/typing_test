/*
    * Typing Test Functionality
    */


function checkForTestProgress() {
    let responseText = document.querySelector('#response').value
    // Remove duplicate spaces & trim leading/trailing spaces
    responseText = responseText.trim()
    responseText = responseText.removeDuplicateSpaces()

    // Compare response & prompt words and highlight correct characters
    compareCurrentWord(responseText)

    // Start test timer if test timer hasn't started
    if (!globalState.hasTimerStarted) {
        startTestTimer()
    } else {
        let totalPromptWords = (globalState.promptWordsArray.length - 1)
        let isWordMatched = (responseText === globalState.promptWordsArray[globalState.currentWordIndex])
        let isTestCompleted = (globalState.currentWordIndex === totalPromptWords) && (isWordMatched)

        // Check if word is completed && test completion
        if (isTestCompleted && isWordMatched) {
            stopTimer()
            clearResponse()
            setResponsePlaceholder('Test Complete!')
            allowTypingTestControls(false)

            // Calculate WPM & Render modal
            calculateWPM()
            renderTotalScore()
            toggleScoreModal()
        } else if (isWordMatched) {
            globalState.currentWordIndex += 1
            scrollCurrentWordIntoView()
            clearResponse()
            setResponsePlaceholder(globalState.promptWordsArray[globalState.currentWordIndex])
        }
    }
}

// Compare response & prompt words and highlight correct characters
function compareCurrentWord(responseText) {
    let currentWord = globalState.promptWordsArray[globalState.currentWordIndex]
    let currentWordLength = currentWord.length

    let wordPromptArray = currentWord.split('')
    let responsePromptArray = responseText.split('')

    for (let i = 0; i < currentWordLength; i += 1) {
        let currenWordElement = globalState.selectedPromptChildNodes[globalState.currentWordIndex]
        let currentCharacterElement = currenWordElement.children[i]

        if (wordPromptArray[i] === responsePromptArray[i]) {
            currentCharacterElement.classList.add('hl')
        } else {
            currentCharacterElement.classList.remove('hl')
        }
    }
}

function scrollCurrentWordIntoView() {
    globalState.selectedPromptChildNodes[globalState.currentWordIndex].scrollIntoView()
}

function clearResponse() {
    document.querySelector('#response').value = ''
}

function setResponsePlaceholder(replacementString) {
    document.querySelector('#response').placeholder = replacementString
}

function resetTypingTest() {
    clearResponse()
    resetTimer()
    toggleTypingTestView()
}

function confirmTypingTestScore() {
    resetTypingTest()
    toggleScoreModal()
}


/*
    * Typing Test Calculation
    */


function calculateWPM() {
    const WPMScaling = 1.5
    let isValidMode = checkValidMode(globalState.mode)

    // Calculate WPM and store into global state
    if ((globalState.mode === 'race') && isValidMode) {
        let WPM = parseInt( (globalState.currentWordIndex / globalState.initalTime) * WPMScaling )
        globalState.totalScore = WPM

        // Update leaderboard
        addScoreEntry(globalState.mode, WPM)
    } else if ((globalState.mode === 'pace') && isValidMode) {
        let WPM = parseInt( (globalState.currentWordIndex / (globalState.totalMinutes + (globalState.totalSeconds / 60))) * WPMScaling )
        globalState.totalScore = WPM

        // Update leaderboard
        addScoreEntry(globalState.mode, WPM)
    } else {
        console.error('Invalid "mode" in global state from calculateWPM()')
    }
}

function renderTotalScore() {
    document.querySelector('#score').innerText = globalState.totalScore
}
