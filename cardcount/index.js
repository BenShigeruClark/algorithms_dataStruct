let count = 0

const cc = (card) => {
  switch (card) {
    case 2: 
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--
      break
  }
  let cardhand = "Bet"
  if (count <= 0) {
    cardhand = "Hold"
  }

  return count + " " + cardhand
}

console.log(cc(4));