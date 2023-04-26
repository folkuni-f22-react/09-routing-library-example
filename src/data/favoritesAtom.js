import { atom } from 'recoil'

const favoritesAtom = atom({
	key: 'favorites',
	default: []
})

// Array med bok-objekt:
// [ { id, title, author } ]

export { favoritesAtom }
