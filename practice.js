const cards = [
  {
    card1: "hello",
    card2: "world",
    card3: "hehe",
  },
];

function sampleFN(card) {
  card.forEach((x) => {
    for (let i in x) {
      console.log(x[i]);
    }
  });
}

sampleFN(cards);
