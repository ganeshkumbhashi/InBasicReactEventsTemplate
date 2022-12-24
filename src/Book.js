function Book(props)
{
    function clickHandler()
    {
        alert("Hello"+ props.book.author);
    }

    return (
        <>
            <h1>{props.book.title}</h1>
            <p>{props.book.author}</p>
            <button type="button" onClick={clickHandler} >click me</button>
        </>
    );
}

export default Book;