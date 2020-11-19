// Set typing test mode and pass an OPTIONAL selectedTime if any specified
function setMode(selectedMode, selectedTime) {
    let isValidMode = checkValidMode(selectedMode)

    // Check if mode is valid
    if (isValidMode) {
        // Set global state "mode" with the selectedMode
        mode = selectedMode

        resetTimer()

        if (mode === 'race') {
            setCountdownTimer(selectedTime)
            toggleTypingTestView()
            toggleRaceModal()
        } else if (mode === 'pace') {
            toggleTypingTestView()
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
