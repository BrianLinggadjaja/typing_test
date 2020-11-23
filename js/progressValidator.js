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
    if (!hasTimerStarted) {
        startTestTimer()
    } else {
        let totalPromptWords = (promptWordsArray.length - 1)
        let isWordMatched = (responseText === promptWordsArray[currentWordIndex])
        let isTestCompleted = (currentWordIndex === totalPromptWords) && (isWordMatched)

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
            currentWordIndex += 1
            scrollCurrentWordIntoView()
            clearResponse()
            setResponsePlaceholder(promptWordsArray[currentWordIndex])
        }
    }
}

// Compare response & prompt words and highlight correct characters
function compareCurrentWord(responseText) {
    let currentWord = promptWordsArray[currentWordIndex]
    let currentWordLength = currentWord.length

    let wordPromptArray = currentWord.split('')
    let responsePromptArray = responseText.split('')

    for (let i = 0; i < currentWordLength; i += 1) {
        let currenWordElement = selectedPromptChildNodes[currentWordIndex]
        let currentCharacterElement = currenWordElement.children[i]

        if (wordPromptArray[i] === responsePromptArray[i]) {
            currentCharacterElement.classList.add('hl')
        } else {
            currentCharacterElement.classList.remove('hl')
        }
    }
}

function scrollCurrentWordIntoView() {
    selectedPromptChildNodes[currentWordIndex].scrollIntoView()
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
    toggleScoreModal()
}


/*
    * Typing Test Calculation
    */


function calculateWPM() {
    let isValidMode = checkValidMode(mode)

    // Calculate WPM and store into global state
    if ((mode === 'race') && isValidMode) {
        let WPM = parseInt( (currentWordIndex / initalTime) * 1.35 )
        totalScore = WPM

        // Update leaderboard
        addScoreEntry(mode, WPM)
    } else if ((mode === 'pace') && isValidMode) {
        let WPM = parseInt( (currentWordIndex / (totalMinutes + (totalSeconds / 60))) * 1.35 )
        totalScore = WPM

        // Update leaderboard
        addScoreEntry(mode, WPM)
    } else {
        console.error('Invalid "mode" in global state from calculateWPM()')
    }
}

function renderTotalScore() {
    document.querySelector('#score').innerText = totalScore
}
