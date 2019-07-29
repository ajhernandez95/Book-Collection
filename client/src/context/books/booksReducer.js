import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_BOOKS,
  FILTER_BOOKS,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookCollection: [...state.bookCollection, action.payload]
      };
    case DELETE_BOOK:
      const bookID = action.payload;
      const newBookCollection = state.bookCollection.filter(
        book => book.id !== bookID
      );
      return {
        ...state,
        bookCollection: [...newBookCollection]
      };
    case EDIT_BOOK:
      const updatedCollection = state.bookCollection.map(book => {
        if (book.id === state.currentBook.id) {
          book = action.payload;
        }
        return book;
      });
      return {
        ...state,
        bookCollection: [...updatedCollection]
      };
    case SET_CURRENT:
      return {
        ...state,
        currentBook: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentBook: null
      };
    case FILTER_BOOKS:
      const regExp = new RegExp(`${action.payload}`, 'gi');
      return {
        ...state,
        filtered: state.bookCollection.filter(
          book => book.title.match(regExp) || book.author.match(regExp)
        )
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
