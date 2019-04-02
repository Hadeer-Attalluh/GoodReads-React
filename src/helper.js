import BooksData from './Data/Books';

export function getBookById(id) {
    return BooksData.filter(b => !b.deleted).find(b => b.id === id);
}