import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    // console.log(typeof readingTime);
    // console.log(bookmarks)
    return (
        <div className='container mx-auto my-10 w-[70%] md:w-[32%]'>
            <div className='border rounded-lg min-h-auto bg-slate-100 mb-6 p-5'>
                <h2 className='text-3xl text-blue-700 font-bold'>Spent time on read : {readingTime} mins </h2>
            </div>


            <div className=' border rounded-lg min-h-auto bg-slate-100'>
                <h2 className='text-3xl my-5 mx-5'>Bookmarked Blogs: {bookmarks.length} </h2>
                <div className=''>
                    {/* {
                    bookmarks.map(blog => <p
                        key={blog.id}

                    >{blog.title}</p>)
                } */}

                    {/* {
                    bookmarks.map(blog => <Bookmark key={blog.id} blog={blog} ></Bookmark>)
                } */}

                    {
                        bookmarks.map((bookmark, idx) => <Bookmark
                            key={idx}
                            bookmark={bookmark}
                        ></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;