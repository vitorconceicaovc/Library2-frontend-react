import { useEffect, useState } from "react"
import { getAuthors, getBooks, getBooksInstances, verifyToken } from "../API"
import { useAuth } from "../context/AuthContext";

export function Home(){

    const { setIsLoggedIn } = useAuth();

    const [books, setBooks] = useState([])
    const [booksInstances, setBooksInstances] = useState([])
    const [authors, setAuthor] = useState([])

    useEffect(() => {
        const checkToken = async () => {
            const tokenValid = await verifyToken()
            
            if (!tokenValid) {
                localStorage.removeItem('token')
            }

            if (tokenValid){
                setIsLoggedIn(true)
            }
        };
        
        checkToken();
    }, []);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getBooks()
                setBooks(booksData.books)
                console.log('Books:', booksData)
            } catch (error) {
                console.error('Error fetching books:', error)
            }
        }
        fetchBooks()
    }, [])

    useEffect(() => {
        const fetchBooksInstances = async () => {
            try {
                const booksInstancesData = await getBooksInstances()
                setBooksInstances(booksInstancesData.bookinstances)
                console.log('Books Instances: ', booksInstancesData)
            } catch (error) {
                console.error('Error fetching books:', error)
            }
        }
        fetchBooksInstances()
    }, [])

    const countAvailableCopies = () => {
        return booksInstances.filter(booksInstances => booksInstances.status === "Available").length
    };

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const authorsData = await getAuthors()
                setAuthor(authorsData.authors)
                console.log('Authors: ', authors)
            } catch (error) {
                console.error('Error fetching books:', error)
            }
        }
        fetchAuthors()
    }, [])

    return(
        <>
            <br /><br />
            <h1>Local Library Home</h1>
            <p>Welcome to LocalLibrary, a website developed by react and django!</p>
            <br />
            <h1>Dynamic content</h1>
            <p>The library has the following record counts:</p>
            <br />
            <ul>
                <li>Books: {books.length}</li>
                <li>Copies: {booksInstances.length}</li>
                <li>Copies available: {countAvailableCopies()}</li>
                <li>Authors: {authors.length}</li>
            </ul>
        </>
    )
}