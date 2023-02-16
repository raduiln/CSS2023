function Book(title, author, page) {
  this.author = title;
  this.author = author;
  this.page = page;
  this.toString = toString;
}
function toString() {
  return this.title + " de " + this.author + " are " + this.page + " pagini.";
}
function citeste() {
  return "Acum citesc o carte";
}

//export {book};
export { Book, citeste };
