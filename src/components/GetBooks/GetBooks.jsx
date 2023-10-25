/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const GetBooks = ({ singleBook, books, setBooks }) => {
    const { _id, book, writer, publication, price, quantity, address, photo } = singleBook;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/books/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = books.filter(item => item._id !== _id);
                            setBooks(remaining)
                        }
                    });
            }
        })

    }
    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={photo}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex justify-between items-center w-full pr-5">
                    <div>
                        <h3>Book : {book}</h3>
                        <h3>Writer : {writer}</h3>
                        <h3>Publication : {publication}</h3>
                        <h3>Price : {price}</h3>
                    </div>
                    <div className="">
                        <div className="btn-group btn-group-vertical">
                            <Link to={`/updateBook/${_id}`}>
                                <button className="btn btn-primary w-20 text-white font-semibold mb-2">Edit</button>
                            </Link>
                            <Link>
                                <button className="btn btn-success w-20 text-white font-semibold mb-2">View</button>
                            </Link>
                            <Link>
                                <button onClick={() => handleDelete(_id)} className="btn btn-warning w-20 text-white font-semibold">Delete</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBooks;