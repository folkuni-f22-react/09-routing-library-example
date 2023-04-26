import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// Formatet på datan är:
// array med bok-objekt, [ { id, title, author } ]

function stringIncludes(longString, shortString) {
	let ls = longString.toLowerCase()
	let ss = shortString.toLowerCase()
	return ls.includes(ss)
}
function bookMatch(book, searchString) {
	if( stringIncludes(book.title, searchString) )
		return true
	if (stringIncludes(book.author, searchString))
		return true
	return false
}

const FindBook = () => {
	const books = useLoaderData()
	// console.log('FindBook books=', books)
	const [matches, setMatches] = useState([])

	const handleChange = event => {
		let searchString = event.target.value
		setMatches(books.filter(book => bookMatch(book, searchString)))
	}
	
	return (
		<div className="content">
			<h2> Find a book </h2>
			<input
				onChange={handleChange}
				className="search-input"
				type="text"
				placeholder="Book or author name" />
			<p>Matches:</p>
			<ul>
				{matches.map(book => (
					<li key={book.id}>
						{book.title}, {book.author}
					</li>
				))}
			</ul>
		</div>
		)
	}
		// <li>To Kill a Mockingbird, Harper Lee</li>

export default FindBook
