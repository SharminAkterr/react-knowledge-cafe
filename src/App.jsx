import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = (id, time) => {
    // console.log('this is handling reading time', time);
    const addingTime = readingTime + time;
    setReadingTime(addingTime);
    // for removing bookmark title after clicking mark as read button by using id filtering
    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(removeBookmark);

  }

  return (
    <>
      <Header></Header>
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-6">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>

        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
