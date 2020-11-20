function checkForTestProgress() {
    const promptWordsArray = selectedPrompt.split(' ')
    let response = document.querySelector('#response').value

    // Start test timer if havent already
    if (!hasTimerStarted) {
        startTestTimer()
    }

    /*
        * Progress validation Algo
        * Check for full test completion (end of test)
        * Check for word completion
        * Check for character completion for the current word
        */

    // (currentWordIndex === wordsArrayLength) && (responseText === wordArray[currentWordIndex])
    // (responseText === wordArray[currentWordIndex])
        // Move to next word
    // On keyup; response.length; currentWordArray[response.length]; compare (response.length === currentWordArray[response.length])
        // Highlight if matches
    // Check if response.length === currentWordArray.length
        // match full string for responseText and currentWord

    if (responseText === promptText) {
        // Stop timer
        // Remove event listener on textarea
        // Complete test
    } else if ()

    // Check for FULL string match and mark as complete
    if (!hasTimerStarted) {
        startTestTimer()
        checkWordCompletion(promptWordsArray, response)
    } else if (response === selectedPrompt) {
        // Stop timer & show results & addScoreEntry(selectedMode, totalScore)
        clearInterval(timer)
    } else {
        // check for current word
        // compare & highlight characters
        // some way to check for word completion?
        checkWordCompletion(promptWordsArray, response)
    }
}

function checkWordCompletion(promptWordsArray, response) {
    const prompt = document.querySelector('.prompt')
    console.log(prompt.children, promptWordsArray[currentWordIndex], response)
    let currentWord = prompt.children[currentWordIndex]
    console.log(currentWord)

    // let currentWordArray = promptWordsArray[currentWordIndex]
    // let responseArray = response.value.split('')
    // for (let i = 0; i <= response.length; i += 1) {
    //     if (responseArray[i] === currentWordArray[i]) {
    //         console.log(true)
    //     }
    // }
}

function resetTypingTest() {
    clearResponse()
    resetTimer()
    toggleTypingTestView()
}

function clearResponse() {
    // Clear response textarea
    document.querySelector('#response').value = ''
}
