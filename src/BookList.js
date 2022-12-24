import { books } from "./books";
import Book from "./Book";
function BookList()
{
    return (
        <>
        {
            books.map((book) => {
                return <Book book={book}/>;
            })
        }
        </>
    );
}

export default BookList;