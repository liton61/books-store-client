import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBook = () => {
    const singleBook = useLoaderData();
    const { _id, book, writer, publication, price, quantity, address, photo } = singleBook;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const book = form.book.value;
        const writer = form.writer.value;
        const publication = form.publication.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const address = form.address.value;
        const photo = form.photo.value;

        const updateBook = { book, writer, publication, price, quantity, address, photo };

        fetch(`http://localhost:5000/books/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateBook),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Book successfully updated !',
                    showConfirmButton: false,
                    timer: 2000
                })
                console.log(data);
            });
    }
    return (
        <div>
            <div className="bg-slate-100 pb-24">
                <h1 className="text-center text-2xl font-bold py-5">Update Books</h1>
                <form onSubmit={handleUpdate}>
                    <div className="flex w-9/12 mx-auto">
                        <div className="form-control w-full mb-5 mr-3">
                            <label>
                                <span className="label-text text-lg font-semibold">Book Name</span>
                            </label>
                            <label>
                                <input className="focus:outline-none w-full px-5 py-3" type="text" name="book" defaultValue={book} placeholder="Book name" />
                            </label>
                        </div>
                        <div className="form-control w-full mb-5 ml-3">
                            <label>
                                <span className="label-text text-lg font-semibold">Price</span>
                            </label>
                            <label>
                                <input className="focus:outline-none w-full px-5 py-3" type="text" name="price" defaultValue={price} placeholder="Price" />
                            </label>
                        </div>
                    </div>
                    <div className="flex w-9/12 mx-auto">
                        <div className="form-control w-full mb-5 mr-3">
                            <label>
                                <span className="label-text text-lg font-semibold">Writer Name</span>
                            </label>
                            <label>
                                <input className="focus:outline-none w-full px-5 py-3" type="text" name="writer" defaultValue={writer} placeholder="Writer name" />
                            </label>
                        </div>
                        <div className="form-control w-full mb-5 ml-3">
                            <label>
                                <span className="label-text text-lg font-semibold">Quantity</span>
                            </label>
                            <label>
                                <input className="focus:outline-none w-full px-5 py-3" type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" />
                            </label>
                        </div>
                    </div>
                    <div className="flex w-9/12 mx-auto">
                        <div className="form-control w-full mb-5 mr-3">
                            <label>
                                <span className="label-text text-lg font-semibold">Publication Name</span>
                            </label>
                            <label>
                                <input className="focus:outline-none w-full px-5 py-3" type="text" name="publication" defaultValue={publication} placeholder="Publication name" />
                            </label>
                        </div>
                        <div className="form-control w-full mb-5 ml-3">
                            <label>
                                <span className="label-text text-lg font-semibold">Address</span>
                            </label>
                            <label>
                                <input className="focus:outline-none w-full px-5 py-3" type="text" name="address" defaultValue={address} placeholder="address" />
                            </label>
                        </div>
                    </div>
                    <div className="w-9/12 mx-auto">
                        <div className="form-control w-full mb-5 mr-3">
                            <label>
                                <span className="label-text text-lg font-semibold">Photo URL</span>
                            </label>
                            <label>
                                <input className="focus:outline-none w-full px-5 py-3" type="text" name="photo" defaultValue={photo} placeholder="Photo URL" />
                            </label>
                        </div>
                    </div>
                    <div className="w-9/12 mx-auto">
                        <input className="btn btn-neutral w-full mt-5" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;