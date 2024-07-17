import { useContext } from "react"
import { BooksContext } from "../../Context/AllBooksContext"

export default function LatestBooks() {
    const {books  } = useContext(BooksContext)
  return (
    <div>LatestBooks</div>
  )
}
