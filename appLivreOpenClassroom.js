export class Book {
    constructor(title, author, description, pages, currentPage, read) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = false;
      }
  
      readBook(page) {
        if (page < 0 || page > this.pages) {
          return 0;
        } 
        if (page > 0 && page < this.pages) {
          this.currentPage = page;
          return 1;
        }
        if (page == this.pages) {
          this.currentPage = page;
          this.read = true;
          return 1;
        }
      }
  }
  
  const livre1 = new Book ("Titre du Livre1", "Auteur du Livre1", "Description du Livre1", 100, 50, false);
  const livre2 = new Book ("Titre du Livre2", "Auteur du Livre2", "Description du Livre2", 200, 50, false);
  const livre3 = new Book ("Titre du Livre3", "Auteur du Livre3", "Description du Livre3", 300, 50, false);
  
  export const books = [livre1, livre2, livre3];
  