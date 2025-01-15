function renderBooks() {
  let contentIdRef = document.getElementById('contentId');
  contentIdRef.innerHTML = '';
  
  books.forEach((bookElements, index) => {
    let bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    bookCard.innerHTML += `
     <div class='card-heading'><h2>${bookElements.name}</h2></div>
     <div><img class='mainImg' src="./assets/img/book.jpeg" alt="" /></div>
     <div class='priceAndLikes'>
     <h2>${bookElements.price} €</h2>
     <span><strong id='likesNum${index}'> ${bookElements.likes} </strong>
     <img id="likedImg${index}" src="./assets/img/whiteLike.png" alt="Like" onclick="isBookLiked(${index})" /> </span>
     </div>
    <div class='details'>  <p>Author</p> <p>:${bookElements.author}</p> </div>
    <div class='details'> <p>Erscheiningungsjahr</p> <p>:${bookElements.publishedYear}</p> </div>
    <div class='details'> <p>Genre</p> <p>:${bookElements.genre}</p> </div>
    <div class='commentArea'> <strong>Comments:</strong> ${commentBox(index)} </div>
    <div class='addComment'> <input type="text" id='userComment${index}' placeholder='enter your commnet'/>
    <button class='inputBtn' onclick="addComments(${index})"></button></div>
    `;
    contentIdRef.appendChild(bookCard);
  });
}

function commentBox(index) {
  let commentHtml = '';
  books[index].comments.forEach(ele => {
    commentHtml += `<div class='coment-box'><span>${ele.name}:</span> <span> ${ele.comment}</span></div> `;
  });
  return commentHtml;
}

function addComments(index) {
  let userComRef = document.getElementById(`userComment${index}`);
  let userValue = userComRef.value;

  if (userValue) {
    books[index].comments.push({ name: 'User', comment: userValue });
    userComRef.value = '';
    renderBooks(); //updating the state of Card
  } else {
    alert("Please add your Comment");
  }
}

function isBookLiked(index) {
  let likesNumRef = document.getElementById(`likesNum${index}`);
  let likedImgRef = document.getElementById(`likedImg${index}`);

  books[index].liked = !books[index].liked;
  if (books[index].liked) {
    likedImgRef.src = `./assets/img/redLike.png`; 
    books[index].likes += 1;
  } else {
    likedImgRef.src = `./assets/img/whiteLike.png`;
    books[index].likes -= 1;
  }
  likesNumRef.innerHTML = books[index].likes;
}

























































