

function renderBooks() {
  let contentIdRef = document.getElementById('contentId');
  contentIdRef.innerHTML = '';
  
  books.forEach((bookElements, index) => {
    let bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML += `
     <div class='card-heading'><h2>${bookElements.name}</h2></div>
     <div><img class='mainImg' src="./assets/img/book.jpeg" alt="" /></div>
     <div class='priceAndLikes'> <h2>${bookElements.price} €</h2>
     <span><strong id='likesNum${index}'>${bookElements.likes}</strong></span></div>
    <div class='details'>  <p>Author:</p> <p>${bookElements.author}</p> </div>
    <div class='details'> <p>Erscheiningungsjahr:</p> <p>${bookElements.publishedYear}</p> </div>
    <div class='details'> <p>Genre:</p> <p>${bookElements.genre}</p> </div>
    <div class='commentArea'> <strong>Comments:</strong> ${commentBox(index)} </div>
    <div class='addComment'> <input  type="text" id='userComment${index}' placeholder='enter your commnet'/>
    <button class='inputBtn' onclick="addComments(${index})"></button></div> `;
    let likeButton = createLikeButton(index);
    let likesContainer = bookCard.querySelector('.priceAndLikes span');
    likesContainer.appendChild(likeButton);
    contentIdRef.appendChild(bookCard);
  });
}

function commentBox(index) {
  let commentHtml = '';
  books[index].comments.forEach(ele => {
    commentHtml += `<div class='coment-box'><span>${ele.name}:</span> <span> ${ele.comment}</span></div>`;
  });
  return commentHtml;
}

function addComments(index) {
  let userComRef = document.getElementById(`userComment${index}`);
  let userValue = userComRef.value;

  if (userValue) {
    books[index].comments.push({ name: 'User', comment: userValue });
    userComRef.value = '';
    renderBooks(); 
  } else {
    alert("Please add your Comment");
  }
}

function createLikeButton(index) {
  let likeButton = document.createElement('img');

  likeButton.src = books[index].liked ? `./assets/img/redLike.png` : `./assets/img/whiteLike.png`;
  likeButton.onclick = () => isBookLiked(index);
  likeButton.style.cursor = 'pointer';

  return likeButton;
}

function isBookLiked(index) {
  let likesNumRef = document.getElementById(`likesNum${index}`);
  books[index].liked = !books[index].liked;
  books[index].likes += books[index].liked ? 1 : -1;
  likesNumRef.innerText = books[index].likes;

  let likeButtonRef = likesNumRef.nextElementSibling; //img
  likeButtonRef.src = books[index].liked ? `./assets/img/redLike.png` : `./assets/img/whiteLike.png`;
}
