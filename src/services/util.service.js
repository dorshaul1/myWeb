module.exports = {
    getNumFromStr
}
function getNumFromStr(str) {
    var num = str.match(/\d/g);
    return num.join("");
}
