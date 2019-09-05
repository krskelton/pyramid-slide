var app = new Vue({
    el: '#app',
    data: {
        character: '#',
        height: '5',
    },
    computed: {
        rows() {
            return pyramidRows(this.height, this.character)
        }
    }
})

function pyramidRows(height,character) {
    var height = parseInt(height)
    var rowStrings = [];
    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += character;
        }

        rowStrings.push(rowStr);
    }
    return rowStrings;
    // console.log(rowStrings);
}