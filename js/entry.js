(() => {
    // Race Mode Actions
    const raceButton = document.querySelector('#raceButton')
    const raceOneMinute = document.querySelector('#raceOne')
    const raceTwoMinutes = document.querySelector('#raceTwo')
    const raceThreeMinutes = document.querySelector('#raceThree')
    const raceFiveMinutes = document.querySelector('#raceFive')
    const raceCancel = document.querySelector('#raceCancel')

    raceButton.addEventListener('click', toggleRaceModal)
    raceOneMinute.addEventListener('click', setMode.bind(this, 'race', 1))
    raceTwoMinutes.addEventListener('click', setMode.bind(this, 'race', 2))
    raceThreeMinutes.addEventListener('click', setMode.bind(this, 'race', 3))
    raceFiveMinutes.addEventListener('click', setMode.bind(this, 'race', 5))
    raceCancel.addEventListener('click', toggleRaceModal)

    // Pace Mode Action
    const paceButton = document.querySelector('#paceButton')
})()
