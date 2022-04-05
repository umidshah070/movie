const elList = document.querySelector(".list");
const elBookmarkList = document.querySelector(".bookmark-list");

const bookmark = [];



function renderBookmark(arr ,  element){
  element.innerHTML = "";

  arr.forEach(bookmark => {
    const newItem = document.createElement("li");
    const newBookmarkBtn = document.createElement("button");

    newItem.textContent= bookmark.title;
    newBookmarkBtn.textContent= "Remove";
    newBookmarkBtn.type = "button";
    newBookmarkBtn.classList.add("remove-button");
    newBookmarkBtn.dataset.filmId = bookmark.id;

    newItem.appendChild(newBookmarkBtn);
    element.appendChild(newItem);


  });
}

elBookmarkList.addEventListener("click", evt => {

  const isDeleteBtn = evt.target.matches(".remove-button");

  if(isDeleteBtn){
    const btnId = evt.target.dataset.filmId;

    const findIndexBookmark = bookmark.findIndex(e => e.id === btnId);



    bookmark.splice(findIndexBookmark ,1);

    renderBookmark(bookmark , elBookmarkList);



  }


})





for(const film of films){

  const newItem = document.createElement("li");
  const newHeading = document.createElement("h3");
  const newImg = document.createElement("img");
  const newText = document.createElement("p");
  const newBtn = document.createElement("button");

  newBtn.textContent= "Bookmark";
  newHeading.textContent = film.title;
  newText.textContent = film.overview.split(" ").slice(0,20).join(" ") + " ...";

  newItem.setAttribute("class", "list__item");
  newImg.setAttribute("src", film.poster);
  newImg.setAttribute("class", "list__img");
  newBtn.setAttribute("class", "list__bookmark-btn");
  newBtn.dataset.filmId = film.id;

  newItem.appendChild(newImg);
  newItem.appendChild(newHeading);
  newItem.appendChild(newText);
  newItem.appendChild(newBtn);


  elList.appendChild(newItem);

}

elList.addEventListener("click" , evt => {

  if(evt.target.matches(".list__bookmark-btn")){
    const bookmarkBtnId = evt.target.dataset.filmId;

    const findFilms = films.find(e => e.id === bookmarkBtnId);

    if(!bookmark.includes(findFilms)){
      bookmark.push(findFilms);

      renderBookmark(bookmark , elBookmarkList);
    }
  };

})
