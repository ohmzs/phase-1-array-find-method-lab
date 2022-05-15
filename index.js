
//superbowlWin(record)
// 1) returns a year the Denver Broncos won the superbowl
// 2) returns undefined if the record has no win objects
// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined
const array = [record.year, record.result]
function superbowlWin(array){ 
    for(let i = 0; i < array.length; i++){
        if (array[i].result === "W"){
           return array[i].year
        }
    }
}
superbowlWin(record)
