// Set typing test mode and pass an OPTIONAL selectedTime if any specified
function setMode(selectedMode, selectedTime) {
    const validModes = {
        'race': true,
        'pace': true
    }

    // Check if selectedMode matches a validMode
    if (validModes[selectedMode]) {
        if (selectedMode === 'race') {
            setTestTimer(selectedTime)
        } else if (selectedMode === 'pace') {
            setTestTimer(0)
            console.log('pace')
        }
    } else {
        console.error('Invalid selectedMode in setMode()')
    }
}

// Option a time selector modal when "race" mode selected
function toggleRaceModal() {
    const raceModal = document.querySelector('.race-modal')
    let isModalHidden = raceModal.classList.contains('hide')

    if (isModalHidden) {
        raceModal.classList.remove('hide')
    } else {
        raceModal.classList.add('hide')
    }
}
