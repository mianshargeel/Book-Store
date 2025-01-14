function renderBooks() {
  let contentIdRef = document.getElementById('contentId');
  contentIdRef.innerHTML = '';
  
  books.forEach((bookElements, index) => {
    let bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    bookCard.innerHTML += `
     <div><h2>${bookElements.name}</h2></div>
     <div><img  src="./assets/img/book.jpeg" alt="" /></div>
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

function addComments(index) {
  let userComRef = document.getElementById(`userComment${index}`);
  let userValue = userComRef.value;

  if (userValue) {
    books[index].comments.push({ name: 'User', comment: userValue });
    //comments contains array of object with with name&comment keys
    userComRef.value = '';
    renderBooks(); //updating the state of Card
  } else {
    alert("Please add your Comment");
  }
}

function commentBox(index) {
  let commentHtml = '';
  books[index].comments.forEach(ele => {
    commentHtml += `<div class='coment-box'><strong>${ele.name}:</strong>    
        <p>${ele.comment}</p></div>
        `;
  });
  return commentHtml;
}

function isBookLiked(index) {
  let likesNumRef = document.getElementById(`likesNum${index}`);
  let likedImgRef = document.getElementById(`likedImg${index}`);

 // Toggle the "liked" state for the specific book
  books[index].liked = !books[index].liked;
  if (books[index].liked) {
    likedImgRef.src = "./assets/img/redLike.png"; //changed the src of img
    books[index].likes += 1;
  } else {
    likedImgRef.src = "./assets/img/whiteLike.png";
    books[index].likes -= 1;
  }
  likesNumRef.innerHTML = books[index].likes;//updating dom
  console.log('Like button clicked for book:', books[index].name);
}


























































// // console.log(books.name);
// function renderBooks() {
//   let mainRef = document.getElementById('content');

//   nameOfBook();
//   imageOfBook();
//   showPriceAndLikes();

// }

// function nameOfBook() {
//   let nameContainerRef = document.getElementById('nameContainer');
//   nameContainerRef.innerHTML = '';

//   for (let i = 0; i < books.length; i++) {
//     let nameOfAuthor = books[i].name;
//       nameContainerRef.innerHTML = `<h2>${nameOfAuthor}</h2>`;
//   }
// }

// function imageOfBook() {
//   let bookImgRef = document.getElementById('bookImg');
//   bookImgRef.innerHTML = '';

//   bookImgRef.innerHTML = `<img src="./assets/img/book.jpeg" alt="" />`; 
// }

// function showPriceAndLikes() {
//   let priceRef = document.getElementById('price');
//   let likeImgRef = document.getElementById('likeImg');

//   priceRef.innerHTML = '';
//   likeImgRef.innerHTML = '';

//   for (let i = 0; i < books.length; i++) {
//     priceRef.innerHTML = `<span>${books[i].price} €</span>`;
//     likeImgRef.innerHTML = `<span>${books[i].likes}</span>
//     <a href="" onclick="likeBtn(${i})"><img src="./assets/img/whiteLike.png" alt="" /></a>`;
//   }
// }

// function likeBtn() {
//   let likeImgRef = document.getElementById('likeImg');
  
//   for (let i = 0; i < books.length; i++) {
//     let val = books[i].likes + 1;
//     likeImgRef.innerHTML = `<a href=""> ${val} <img  src="./assets/img/redLike.png" alt="" /></a>`;
// }
    
// }


// function showBook() {
//   let nameContainerRef = document.getElementById('nameContainer');
//   let bookImgRef = document.getElementById('bookImg');
//   let priceRef = document.getElementById('price');
//   let likeImgRef = document.getElementById('likeImg');

//   nameContainerRef.innerHTML = '';
//   bookImgRef.innerHTML = '';
//   priceRef.innerHTML = '';
//   likeImgRef.innerHTML = '';

//   books.forEach((ele) => {
//     nameContainerRef.innerHTML = `<h2>${ele.name}</h2>`;
//     bookImgRef.innerHTML = `<img src="./assets/img/book.jpeg" alt="" />`;
//     priceRef.innerHTML = `<span>${ele.price} €</span>`;
//     likeImgRef.innerHTML = `<span>${ele.likes}</span>
//     <a onclick="likeButton()"><img src="./assets/img/whiteLike.png" alt="" /></a>`;
//   });
// }


  


// likeImgRef.innerHTML = `${val} <img src="./assets/img/redLike.png" alt="" />`