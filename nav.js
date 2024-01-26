const anime = async (id) => {
  const card = [
    {
      card1: document.querySelector(".card-1"),
      card2: document.querySelector(".card-2"),
    },
  ];

  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const information = {
      title: res.data.data.title_japanese,
      img: res.data.data.images.jpg.image_url,
    };

    displayImg(information.img, card);
  } catch (e) {
    console.log("error", e);
  }
};

function displayImg(img, card) {
  card.forEach((item) => {
    for (let x in item) {
      const imgCard = document.createElement("IMG");
      imgCard.src = img;
      item[x].appendChild(imgCard);
    }
  });
}

anime(21);
// anime(11061);
