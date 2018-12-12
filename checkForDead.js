
function checkForDead(objArr) {
    //console.log(objArr[2].isDead);
    let deadObjects = [];

    // iterate through the array of objects
    for( i = 0; i < objArr.length; i += 1) {
        // if its dead, add it to a new array called "deadObjects"
        if (objArr[i].isDead == true) {
            deadObjects.push(objArr[i]);
        }
    }
    return deadObjects;
}
