function toggleRaceModal() {
    const raceModal = document.querySelector('.race-modal')
    let isModalHidden = raceModal.classList.contains('hide')

    if (isModalHidden) {
        raceModal.classList.remove('hide')
    } else {
        raceModal.classList.add('hide')
    }
}

function startRaceTimer(selectedTime) {
    const validTimes = {
        '1': 1,
        '2': 2,
        '3': 3,
        '5': 5
    }

    if (validTimes[selectedTime]) {
        console.log(validTimes[selectedTime])
    }
}
