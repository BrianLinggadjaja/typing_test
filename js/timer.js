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
        totalMinutes = selectedTime

        // Update render with a valid selectedTime
        updateClock()
    }
}

function startTestTimer() {
    let isValidMode = checkValidMode(mode)

    if (isValidMode) {
        // Check if valid "mode" provided and timer has not already started
        if (mode === 'race' && !hasTimerStarted) {
            hasTimerStarted = true
            startCountdownTimer()
        } else if (mode === 'pace' && !hasTimerStarted) {
            hasTimerStarted = true
            startStopwatchTimer()
        }
    } else {
        console.error('Invalid mode given in startTestTimer()')
    }
}

// Start "race" mode timer using the totalMinutes and totalSeconds from the state
function startCountdownTimer() {
    timer = setInterval(() => {
        // Check for end of Countdown otherwise calculate totalMinutes and totalSeconds
        if ((totalMinutes <= 0) && (totalSeconds <= 0)) {
            // Call calculateWPM && clear timer
            console.log('completed')
            clearInterval(timer)
        } else if ((totalMinutes >= 1) && (totalSeconds <= 1)) {
            totalMinutes -= 1
            totalSeconds = 59
        } else {
            totalSeconds -= 1
        }

        updateClock()
    }, 1000) // Set timer for every second
}

function startStopwatchTimer() {
    timer = setInterval(() => {
        // Increment totalMinutes when totalSeconds equals a minute
        // check if prompt is completed
        if (totalSeconds === 59) {
            totalMinutes += 1
            totalSeconds = 0
        } else {
            totalSeconds += 1
        }

        updateClock()
    }, 1000) // Set timer for every second
}

function stopTimer() {
    clearInterval(timer)
}

function resetTimer() {
    stopTimer()
    hasTimerStarted = false
    totalMinutes = 0
    totalSeconds = 0

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
        minutesElement.innerText = totalMinutes
        secondsElement.innerText = totalSeconds

        // Hide minutes if less than 1
        if (totalMinutes <= 0) {
            const minutesWrapperElement = document.querySelector('.minutes-wrapper')
            minutesWrapperElement.classList.add('hide')
        } else if (totalMinutes > 0) {
            const minutesWrapperElement = document.querySelector('.minutes-wrapper')
            minutesWrapperElement.classList.remove('hide')
        }
    }
}

function checkForClockValidity() {
    // Check if number && is in range
    let isMinutesValid = (isFinite(totalMinutes) && ((totalMinutes <= 99) || (totalMinutes >= 0)))
    let isSecondsValid = (isFinite(totalSeconds) && ((totalSeconds <= 60) || (totalSeconds >= 0)))

    // Check if valid totalMinutes && totalSeconds, otherwise reset clock
    if (isMinutesValid && isSecondsValid) {
        return true
    } else {
        totalMinutes = 0
        totalSeconds = 0

        return false
    }
}