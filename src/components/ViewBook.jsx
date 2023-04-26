const ViewBook = ({ book }) => {
	const addToFavorites = book => {
		console.log('ViewBook: add book to favorites. book=', book)
		// TODO: lägg till bok i favorites-atomen
		// TODO: använd ViewBook <FindBook> också
	}

	return (
		<li key={book.id}>
			{book.title}, {book.author}
			<button onClick={() => addToFavorites(book)}> ❤️ Add to favorites </button>
		</li>
	)
}

export default ViewBook
