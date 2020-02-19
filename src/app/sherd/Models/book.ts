export class Book {
  id: string;
  title: string;
  authors: [];
  publishedDate: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };

  constructor(
    id: string,
    title: string,
    authors: [],
    publishedDate: string,
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    }
  ) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.publishedDate = publishedDate;
    this.imageLinks = imageLinks;
  }
}
