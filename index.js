var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';

  } else {
    var currentlyserving = katzDeliLine.slice(0,1);
    katzDeliLine.shift();
    return `Currently serving ${currentlyserving}.`;

  }
}
const katzDeli = [];
function currentLine(katzDeliLine) {
if (katzDeliLine.length == 0) {
  return "The line is currently empty."
} else {
  for (let i = 0; i < katzDeliLine.length; i++) {
    katzDeli.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
}
return `The line is currently:${katzDeli}`
}
