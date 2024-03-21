import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookById, getBooksInstances } from "../API";

export function BookDetail() {
    const [book, setBook] = useState(null);
    const [booksInstances, setBooksInstances] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookData = await getBookById(id);
                setBook(bookData.book);
                console.log('Book Detailss:', book); 

                // 
                // console.log('Book Details:', book); 
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBook();
    }, [id]);

    useEffect(() => {
        const fetchBooksInstances = async () => {
            try {
                const booksInstancesData = await getBooksInstances();
                setBooksInstances(booksInstancesData.bookinstances); 
                console.log('Books Instances: ', booksInstancesData);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooksInstances();
    }, []);

    const filteredInstancesById = booksInstances.filter(
        instance => instance.book._id === id
    );

    if (!book) {
        return <div>Loading...Restricted Area</div>;
    }

    return (
        <>
            <h1>Title: {book.title}</h1>
            <strong>
                Author:{" "}
                <Link to={`/author/${book.author._id}`}>
                    {book.author.first_name} {book.author.family_name}
                </Link>
            </strong>
            <p>
                <strong>Summary:</strong> {book.summary}
            </p>
            <p>
                <strong>ISBN:</strong> {book.isbn}
            </p>
            <p>
                <strong>Genre:</strong> {book.genre.map(genre => genre.name).join(", ")}
            </p>
            <h1>Copies</h1>

            {filteredInstancesById.map((instance) => (
                <ul key={instance._id}>
                    <li>Imprint: {instance.imprint}</li>
                    <li>ID: {instance._id}</li>
                    <hr />
                </ul>
            ))}
        </>
    );
}
