const possibleMoves = require('./index');

test('chess possibleMoves function is defined', () => {
  expect(possibleMoves).toBeDefined();
});

test('Calling possibleMoves with no valid parameters to return false', () => {
    var returnVal = possibleMoves();
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with Out of board Vertical value "D44" to return false', () => {
    var returnVal = possibleMoves("King","D44");
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with Out of board Horizontal value "Z5" to return false', () => {
    var returnVal = possibleMoves("King","Z5");
    expect(returnVal).toEqual(false);
});

test('Calling possibleMoves with wrong position parameter "D" to return false', () => {
    var returnVal = possibleMoves("King","D");
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with wrong piece parameter "Kinger" to return false', () => {
    var returnVal = possibleMoves("Kinger","D5");
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with King and Center position "King", "D5" to return correct values', () => {
    var returnVal = possibleMoves("King","D5");
    expect(returnVal).toEqual("E5,C5,D6,D4,E6,E4,C4,C6");
});

test('Calling possibleMoves with King and Corner position "King", "A1" to return correct values', () => {
    var returnVal = possibleMoves("King","A1");
    expect(returnVal).toEqual("B1,A2,B2");
});

test('Calling possibleMoves with King and Boundary Middle position "King", "A4" to return correct values', () => {
    var returnVal = possibleMoves("King","A4");
    expect(returnVal).toEqual("B4,A5,A3,B5,B3");
});

test('Calling possibleMoves with King and Random position "King", "B7" to return correct values', () => {
    var returnVal = possibleMoves("King","B7");
    expect(returnVal).toEqual("C7,A7,B8,B6,C8,C6,A6,A8");
});