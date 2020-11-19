function checkForTestProgress() {
    let response = document.querySelector('#response').value

    console.log(response)

    // Check for FULL string match and mark as complete
    if (!hasTimerStarted) {
        startTestTimer()
    } else if (response === selectedPrompt) {
        // markTestCompleted
        console.log(true)
    }

    console.log(selectedPrompt)
    console.log(response)
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
