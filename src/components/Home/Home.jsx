import { useLoaderData } from "react-router-dom";
import GetBooks from "../GetBooks/GetBooks";
import { useState } from "react";


const Home = () => {
    const loadBooks = useLoaderData();
    const [books, setBooks] = useState(loadBooks)
    return (
        <div className="bg-gray-100 ">
            <h1 className="text-center text-4xl font-bold py-12">Book List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-10">
                {
                    books.map(singleBook => <GetBooks
                        key={singleBook._id}
                        singleBook={singleBook}
                        books={books}
                        setBooks={setBooks}></GetBooks>)
                }
            </div>
        </div>
    );
};

export default Home;