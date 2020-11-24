/*
    * Functionality
    */


// Set global state "minutes" if a valid "selectedTime" is given
function setCountdownTimer(selectedTime) {
    // Valid timer presets to check against selectedTime
    const countdownTimerPresets = {
        '1': 1,
        '2': 2,
        '3': 3,
        '5': 5,
    }

    let selectedPreset = countdownTimerPresets[selectedTime]

    // Check if selectedPreset matches a countdownPreset && timer has not started
    if (selectedPreset) {
        globalState.totalMinutes = selectedTime

        // Store initalTime to be used in WPM calculations later
        globalState.initalTime = selectedTime

        // Update render with a valid selectedTime
        updateClock()
    }
}

function startTestTimer() {
    let isValidMode = checkValidMode(globalState.mode)

    if (isValidMode) {
        // Check if valid "mode" provided and timer has not already started
        if (globalState.mode === 'race' && !globalState.hasTimerStarted) {
            globalState.hasTimerStarted = true
            startCountdownTimer()
        } else if (globalState.mode === 'pace' && !globalState.hasTimerStarted) {
            globalState.hasTimerStarted = true
            startStopwatchTimer()
        }
    } else {
        console.error('Invalid mode given in startTestTimer()')
    }
}

// Start "race" mode timer using the totalMinutes and totalSeconds from the state
function startCountdownTimer() {
    globalState.timer = setInterval(() => {
        // Check for end of Countdown otherwise calculate totalMinutes and totalSeconds
        if ((globalState.totalMinutes <= 0) && (globalState.totalSeconds <= 0)) {
            stopTimer()
            clearResponse()
            setResponsePlaceholder('Test Complete!')
            allowTypingTestControls(false)

            // Calculate WPM & Render modal
            calculateWPM()
            renderTotalScore()
            toggleScoreModal()
        } else if ((globalState.totalMinutes >= 1) && (globalState.totalSeconds <= 1)) {
            globalState.totalMinutes -= 1
            globalState.totalSeconds = 59
        } else {
            globalState.totalSeconds -= 1
        }

        updateClock()
    }, 1000) // Set timer for every second
}

function startStopwatchTimer() {
    globalState.timer = setInterval(() => {
        // Increment totalMinutes when totalSeconds equals a minute
        // check if prompt is completed
        if (globalState.totalSeconds === 59) {
            globalState.totalMinutes += 1
            globalState.totalSeconds = 0
        } else {
            globalState.totalSeconds += 1
        }

        updateClock()
    }, 1000) // Set timer for every second
}

function stopTimer() {
    clearInterval(globalState.timer)
}

function resetTimer() {
    stopTimer()
    globalState.hasTimerStarted = false
    globalState.totalMinutes = 0
    globalState.totalSeconds = 0

    updateClock()
}

/*
    * Render
    */


function updateClock() {
    let isClockValid = checkForClockValidity()

    if (isClockValid) {
        const minutesElement = document.querySelector('.minutes')
        const secondsElement = document.querySelector('.seconds')

        // Update minutes and seconds render
        minutesElement.innerText = globalState.totalMinutes
        secondsElement.innerText = globalState.totalSeconds

        // Hide minutes if less than 1
        if (globalState.totalMinutes <= 0) {
            const minutesWrapperElement = document.querySelector('.minutes-wrapper')
            minutesWrapperElement.classList.add('hide')
        } else if (globalState.totalMinutes > 0) {
            const minutesWrapperElement = document.querySelector('.minutes-wrapper')
            minutesWrapperElement.classList.remove('hide')
        }
    }
}

function checkForClockValidity() {
    // Check if number && is in range
    let isMinutesValid = (isFinite(globalState.totalMinutes) && ((globalState.totalMinutes <= 99) || (globalState.totalMinutes >= 0)))
    let isSecondsValid = (isFinite(globalState.totalSeconds) && ((globalState.totalSeconds <= 60) || (globalState.totalSeconds >= 0)))

    // Check if valid totalMinutes && totalSeconds, otherwise reset clock
    if (isMinutesValid && isSecondsValid) {
        return true
    } else {
        globalState.totalMinutes = 0
        globalState.totalSeconds = 0

        return false
    }
}