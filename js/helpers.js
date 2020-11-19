// Extends all string types to include a method to remove duplicate spaces
String.prototype.removeDuplicateSpaces = function () {
    return this.replace(/\s+/g, ' ')
}
