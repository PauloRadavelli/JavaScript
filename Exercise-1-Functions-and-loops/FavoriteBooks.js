var favoriteBooks = [];

function addFavoriteBook(bookname) {
    if (!bookname.includes("Great")){
        favoriteBooks.push(bookname);
    }
}

function printFavoriteBooks(){
    console.log(`My favorite books are ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks){
        console.log(bookName);
    }
}

addFavoriteBook("A song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You don't know JS");

printFavoriteBooks();