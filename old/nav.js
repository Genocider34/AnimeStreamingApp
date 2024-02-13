const header = document.querySelector("header");

// header.addEventListener("", () => {
//   header.classList.toggle("active-grab");
// });

async function anime(id) {
  try {
    const container = document.querySelector(".card-list");

    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const name = response.data.data.title;
    const img = response.data.data.images.jpg.large_image_url;
    // console.log(response.data.data.images);
    // const newImg = document.createElement("IMG");
    // newImg.src = img;

    const card = `<div class="card"><img src="${img}" /></div>`;
    container.innerHTML += card;
  } catch (error) {
    console.error(error);
  }
}

anime(21);
anime(21);
anime(21);
