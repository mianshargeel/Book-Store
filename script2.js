function renderBooks() {
  let contentIdRef = document.getElementById('contentId');
  contentIdRef.innerHTML = '';

  books.forEach((ele, index) => {
    contentIdRef.appendChild(createBookCard(ele, index));
  })
}

function createBookCard(ele, index) {
  let bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.innerHTML = `
    ${createCardHeading(ele)}
    ${createBookImage()}
    ${createPriceAndLike(ele, index)}
    ${createDetails(ele)}
    ${createCommentArea(ele, index)}
    ${createAddCommentSection(index)}
    
  `;
  return bookCard;
}

function createCardHeading(ele) {
  return `<div class='card-heading'><h2>${ele.name}</h2></div>`;
}

function createBookImage() {
  return `<img class='mainImg' src="./assets/img/book.jpeg" alt="" />`
}

function createPriceAndLike(ele, index) {
  return `
  <div class='priceAndLikes'>
    <h2>${ele.price}</h2>
    <span><strong id='likesNum${index}'>${ele.likes}</strong>${createLikeButton(index)}</span>
  </div>
  `;
}

function createLikeButton(index) {
  return `
    <img id='likeButton${index}'
      src="${books[index].liked ? './assets/img/redLike.png' : './assets/img/whiteLike.png'}"
      onclick="isBookLiked(${index})"
      style="cursor: pointer;"
      alt="like button" />`;
}

function isBookLiked(index) {
  let likesNumRef = document.getElementById(`likesNum${index}`);
  let likeButtonRef = document.getElementById(`likeButton${index}`);
 
  books[index].liked = !books[index].liked;

  books[index].likes += books[index].liked ? 1 : -1;
  likesNumRef.innerText = books[index].likes;

  likeButtonRef.src =  books[index].liked ? `./assets/img/redLike.png` : `./assets/img/whiteLike.png`;

}

function createDetails(ele) {
  return `
    <div class='details'>  <p>Author:</p> <p>${ele.author}</p> </div>
    <div class='details'> <p>Erscheiningungsjahr:</p> <p>${ele.publishedYear}</p> </div>
    <div class='details'> <p>Genre:</p> <p>${ele.genre}</p> </div>
  `;
}

function createCommentArea(ele, index) {
  return `
    <div class='commentArea'> <strong>Comments:</strong> ${commentBox(index)} </div>
  `;
}

function commentBox(index) {
  let commentHtml = '';
  books[index].comments.forEach(ele => {
    commentHtml += `<div class='coment-box'><span>${ele.name}:</span> <span> ${ele.comment}</span></div>`;
  });
  return commentHtml;
}

function createAddCommentSection(index) {
  return `
   <div class='addComment'>
   <input  type="text" id='userComment${index}' placeholder='enter your commnet'/>
    <button class='inputBtn' onclick="addComments(${index})"></button></div>
  `;
}

function addComments(index) {
  let userCommentRef = document.getElementById(`userComment${index}`);
  let comValue = userCommentRef.value;

  if (comValue) {
    books[index].comments.push({ name: 'User', comment: comValue })
    userCommentRef.value = '';
    renderBooks();
  } else {
    alert('Enter your Comment please');
  }
}