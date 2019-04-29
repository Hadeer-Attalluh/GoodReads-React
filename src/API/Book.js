import axios from 'axios';
export const server = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';


export async function GetAllBooks() {
    // let output = [];
    return await axios.get(`${server}/api/books/`)
    //     .then(data => {
    //         output = data;
    //     })
    //     .catch(err => {
    //         // this.props.history.push('/error');
    //         console.log(err);
    //     });
    // return output;
}
export async function GetBookById(id) {
    // let output = {};
    debugger
    return await axios.get(`${server}/api/books/${id}/details`);
}

export function EditBook(book) {
    let output = {};
    axios.patch(`${server}/api/books/${book._id}/edit`, {
        ...book
    })
        .then(data => {
            output = data;
        })
        .catch(err => {
            // this.props.history.push('/error');
            console.log(err);
        });
    return output;
}
export function DeleteBookById(id) {
    let output = {};

    axios.patch(`${server}/api/books/${id}/delete`)
        .then(data => {
            output = data;
        })
        .catch(err => {
            // this.props.history.push('/error');
            console.log(err);
        });
    return output;
}
export function AddBook(book) {
    let output = {};
    axios.post(`${server}/api/books/add`, {
        ...book
    })
        .then(data => {
            output = data;
        })
        .catch(err => {
            // this.props.history.push('/error');
            console.log(err);
        });
    return output;
}
