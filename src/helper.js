import BooksData from './Data/Books';
// import AuthorsData from './Data/Authors';

export function getBookById(id) {
    return BooksData.filter(b => !b.deleted).find(b => b.id === id);
}
// export function getAuthorFullName(id) {
//     let index = AuthorsData.findIndex(a => a.id === id);
//     return AuthorsData[index]['first-name'] + ' ' + AuthorsData[index]['last-name'];
// }