// 6. Zigzag Conversion
const convert = function(s, numRows) {
    if(numRows === 1 || numRows>= s.length) return s;
    let rows = Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;
    for(let char of s){
        rows[currentRow] += char;
        if(currentRow === 0){
            goingDown = true;
        }else if(currentRow === numRows - 1){
            goingDown = false;
        }
        currentRow += goingDown ? 1: -1;
    }
    return rows.join("")
};

const s = "PAYPALISHIRING"
const numRows = 5;
console.log(convert(s,numRows));
