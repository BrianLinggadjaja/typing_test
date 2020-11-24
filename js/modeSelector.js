// Set typing test mode and pass an OPTIONAL selectedTime if any specified
function setMode(selectedMode, selectedTime) {
    let isValidMode = checkValidMode(selectedMode)

    // Check if mode is valid
    if (isValidMode) {
        // Set global state "mode" with the selectedMode & reset currentWordIndex
        globalState.mode = selectedMode
        globalState.currentWordIndex = 0

        // Restart test
        resetTimer()
        randomlySelectPrompt(globalState.mode)
        setResponsePlaceholder('Start typing here to start the test...')
        allowTypingTestControls(true)
        toggleTypingTestView()
        scrollCurrentWordIntoView()

        // If "race" mode selected, request countdown time
        if (globalState.mode === 'race') {
            setCountdownTimer(selectedTime)
            toggleRaceModal()
        }
    } else {
        console.error('Invalid selectedMode in setMode()')
    }
}

// Check the selectedMode if it matches a validMode (returns boolean)
function checkValidMode(selectedMode) {
    const validModes = {
        'race': true,
        'pace': true
    }

    if (validModes[selectedMode]) {
        return true
    } else {
        return false
    }
}
