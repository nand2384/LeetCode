function convert(s: string, numRows: number): string {
    let strArr: string[] = [];
    for(let i = 0; i < numRows; i++) strArr[i] = "";
    let direction = 0;
    let currentRow = 0;
    
    for(let i = 0; i < s.length; i++) {
        strArr[currentRow] += s[i];
        console.log(currentRow, strArr, direction)

        switch(direction) {
            case 0: {
                if(currentRow !== (numRows - 1)) {
                    currentRow++;
                    break;
                }
                if(currentRow == (numRows - 1)) {
                    direction = 1;
                    currentRow--;
                    break;
                }

            }
            case 1: {
                if(currentRow !== 0) {
                    currentRow--;
                    break;
                }
                if(currentRow == 0) {
                    direction = 0;
                    currentRow++;
                    break;
                }
            }
        }
    }

    let finalString = '';

    for(let i = 0; i < strArr.length; i++) {
        finalString += strArr[i];
    }

    return finalString;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));