import BooksData from './Data/Books';
import AuthorsData from './Data/Authors';

export function getBookById(id) {
    return BooksData.find(b => !b.deleted && b.id === id);
}
// export function getAuthorFullName(id) {
//     let index = AuthorsData.findIndex(a => a.id === id);
//     return AuthorsData[index]['first-name'] + ' ' + AuthorsData[index]['last-name'];
// }

export function getBooksByCategoryId(id) {
    return BooksData.filter(b => !b.deleted && b.categoryId === id);
}

export function getBooksByAuthorId(id) {
    return BooksData.filter(b => !b.deleted && b.authorId === id);
}
export function getAuthorById(id) {
    return AuthorsData.find(a => !a.deleted && a.id === id);
}