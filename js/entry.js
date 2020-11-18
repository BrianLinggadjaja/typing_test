(() => {
    // Mode selector buttons
    const raceButton = document.querySelector('#raceButton')
    const raceCancel = document.querySelector('#raceCancel')
    const paceButton = document.querySelector('#paceButton')

    // Add event listener to toggle "race" modal
    raceButton.addEventListener('click', toggleRaceModal)
    raceCancel.addEventListener('click', toggleRaceModal)

    startRaceTimer('1')
})()
