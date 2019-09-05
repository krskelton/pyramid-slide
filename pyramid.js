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
    let rowStrings = [];
    for (let row = 0; row < height; row++) {

        let numBricks = row + 2;
        let numSpaces = height - row - 1;

        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += character;
        }

        rowStrings.push(rowStr);
    }
    return rowStrings;
    // console.log(rowStrings);
}
