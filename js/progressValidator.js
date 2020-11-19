function checkForTestProgress() {
    const promptWordsArray = selectedPrompt.split(' ')
    let response = document.querySelector('#response').value

    // Check for FULL string match and mark as complete
    if (!hasTimerStarted) {
        startTestTimer()
        checkWordCompletion(promptWordsArray)
    } else if (response === selectedPrompt) {
        // Stop timer & show results & addScoreEntry(selectedMode, totalScore)
        clearInterval(timer)
    } else {
        // check for current word
        // compare & highlight characters
        // some way to check for word completion?
        checkWordCompletion(promptWordsArray)
    }
}

function checkWordCompletion(promptWordsArray) {
    console.log(promptWordsArray)
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
