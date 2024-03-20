import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAuthorById, getBooks } from "../API";
import { format } from "date-fns";

export function AuthorDetail() {
    const [books, setBooks] = useState([]);
    const [author, setAuthor] = useState(null);
    const { id } = useParams(); 

    const formatDate = (date) => {
        if (!date) return ''; // Verifica se a data é válida
        return format(new Date(date), "dd/MM/yyyy");
    };

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const authorData = await getAuthorById(id);
                setAuthor(authorData.author);
                console.log('Author Details:', authorData); 
            } catch (error) {
                console.error('Error fetching author details:', error);
            }
        };

        fetchAuthor();
    }, [id]);

    useEffect(() => {
        const fetchBooksByAuthor = async () => {
            try {
                const booksData = await getBooks();
                setBooks(booksData.books);
                console.log('Books:', booksData); 
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooksByAuthor();
    }, []);

    const filteredBooksByAuthorId = books.filter(
        book => book.author._id === id,
        
    );

    if (!author) {
        return <div>Loading...Restricted Area</div>;
    }

    return(
        <>
            <h1>Name: {author.first_name} {author.family_name}</h1>
            <p><strong>First Name:</strong> {author.first_name}</p>
            <p><strong>Family Name:</strong> {author.family_name}</p>
            <p><strong>Date of Birth:</strong> {author.date_of_birth ? formatDate(author.date_of_birth) : "Unknown"}</p>
            <p><strong>Date of Death:</strong> {author.date_of_death ? formatDate(author.date_of_death) : "Still alive"}</p>
            <h1>Books</h1>
            {filteredBooksByAuthorId.map((book) => (
                <ul key={book.id}>
                    <Link to={`/book/${book._id}`}>Title: {book.title}</Link> 
                    <hr />
                </ul>
            ))}
        </>
    );
}
