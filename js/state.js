// STRING prototype that extends the removeDuplicateSpaces() method to to all STRING types
String.prototype.removeDuplicateSpaces = function () {
    return this.replace(/\s+/g, ' ')
}

/*
    * Global State
    */


let leaderboard = null

let timer = null
let hasTimerStarted = false

let mode = null

let selectedPrompt = null

let totalMinutes = 0
let totalSeconds = 0