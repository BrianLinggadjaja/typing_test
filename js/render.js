function toggleLeaderboardTable() {
    const noLeaderboardMessage = document.querySelector('#noLeaderboardMessage')
    const leaderboardTable = document.querySelector('#leaderboardTable')
    let isLeaderboardTableHidden = leaderboardTable.classList.contains('hide')

    if (isLeaderboardTableHidden) {
        noLeaderboardMessage.classList.add('hide')
        leaderboardTable.classList.remove('hide')
    } else {
        noLeaderboardMessage.classList.remove('hide')
        leaderboardTable.classList.add('hide')
    }
}

function toggleTypingTestView() {
    const testSelectorView = document.querySelector('#testSelector')
    const typingTestView = document.querySelector('#typingTest')
    let isTypingTestViewHidden = typingTestView.classList.contains('hide')

    if (isTypingTestViewHidden) {
        typingTestView.classList.remove('hide')
        testSelectorView.classList.add('hide')
    } else {
        typingTestView.classList.add('hide')
        testSelectorView.classList.remove('hide')
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
