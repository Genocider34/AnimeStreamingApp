const anime = async (id) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);

    const information = {
      title: res.data.data.title_japanese,
      img: res.data.data.images.jpg.image_url,
    };
    // const title_ = displayTitle(information.title);
    const img = displayImg(information.img);
    // cardInfo(title_, img_);
  } catch (e) {
    console.log("error", e);
  }
};

const movieContainer = document.querySelector(".movie-list");

function cardInfo(title, img) {
  const cardContainer = document.createElement("DIV");
  cardContainer.appendChild(title);
  cardContainer.appendChild(img);
}

function displayTitle(title) {
  const newText = document.createElement("SPAN");
  newText.textContent = title;
  movieContainer.appendChild(newText);
}

function displayImg(img) {
  const newImg = document.createElement("IMG");
  newImg.src = img;
  movieContainer.appendChild(newImg);
}
// Demo only
anime(21);
anime(11061);
anime(51535);
anime(2904);
anime(918);
anime(23273);
anime(38101);
