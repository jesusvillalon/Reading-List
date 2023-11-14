export interface Books {
  library: Library[];
}

export interface Library {
  book: BookWithId;
}

export interface BookWithId extends Book {
  id: string;
}

export interface Book {
  title:    string;
  pages:    number;
  genre:    string;
  cover:    string;
  synopsis: string;
  year:     number;
  ISBN:     string;
  author:   Author;
}



export interface Author {
  name:       string;
  otherBooks: string[];
}
