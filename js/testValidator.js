function checkForTestCompletion() {
    let response = document.querySelector('#response').value

    // Remove any extra spaces within string
    selectedPrompt = 'test  test  '.removeDuplicateSpaces()
    response = response.removeDuplicateSpaces()

    // Check for FULL string match and mark as complete
    if (response === selectedPrompt) {
        // markTestCompleted
        console.log(true)
    }

    console.log(selectedPrompt)
    console.log(response)
}

function removeDuplicateSpaces(string) {
    // Find any duplicate spaces and remove them
    return string.replace(/\s+/g, ' ')
}
