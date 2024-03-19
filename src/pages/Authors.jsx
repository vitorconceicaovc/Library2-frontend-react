import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuthors } from '../API'; 

export function Authors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const authorsData = await getAuthors();
                setAuthors(authorsData.authors);
                console.log('Data:', authorsData);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        fetchAuthors();
    }, []);

    return (
        <>
            <br /><br />
            <h1>Author List</h1><br />
            <ul>
                {authors.map((author) => (
                    <li key={author._id}>
                       <Link 
                            to={`/author/${author._id}`}>
                                {author.first_name} {author.family_name}
                       </Link> 
                   </li>
                ))}
            </ul>
        </>
    );
}