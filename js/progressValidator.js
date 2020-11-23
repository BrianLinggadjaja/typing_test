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
            calculateWPM()
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
}


/*
    * Typing Test Calculation
    */


function calculateWPM() {
    console.log(timer, promptWordsArray, currentWordIndex)
}
