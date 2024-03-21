import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from '../API'; 

export function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getBooks();
                setBooks(booksData.books);
                console.log('Data:', booksData); 
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <br /><br />
            <h1>Book list</h1><br />
            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <Link to={`/book/${book._id}`}>{book.title}</Link> 
                        by Author {book.author.first_name} {book.author.last_name}
                      
                    </li>
                ))}
            </ul>
        </>
    );
}