// 1. Create object consist of divs '.card-#'
const card = {
  card1: document.querySelector(".card-1"),
  card2: document.querySelector(".card-2"),
};

const anime = async (id) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const information = {
      title: res.data.data.title_japanese,
      img: res.data.data.images.jpg.image_url,
    };

    Object.keys(card).forEach((key) => {
      const imgCreated = document.createElement("img");
      imgCreated.src = information.img;
      card[key].appendChild(imgCreated);
    });
    // const keys = Object.keys(card);
    // const imgCreated = document.createElement("IMG");
    // imgCreated.src = information.img;
    // keys.appendChild(imgCreated);
    // console.log(keys);
    // displayImg(information.img, card.keys);
  } catch (e) {
    console.log("error", e);
  }
};

// function displayImg(img, card) {
//   const imgCreated = document.createElement("IMG");
//   imgCreated.src = img;
//   card.appendChild(imgCreated);
// }

anime(21);
anime(51535);
