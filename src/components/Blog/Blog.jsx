import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
    // console.log(blog);
    const { cover, author, hashtags, mark_as_read_title
        , publish_date, reading_time, title, id } = blog;
    return (
        <div className='mb-12'>
            <div className='mb-4'>
                <img className='w-full' src={cover} alt="" />
            </div>

            <div className='flex justify-between mb-5'>
                <div className='flex gap-4 w-[80%]'>
                    <img className='w-14' src={author.img} alt="" />
                    <div>
                        <h5 className='text-2xl font-bold'>{author.name} </h5>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-xl'>{reading_time} mins read</p>
                    <button onClick={() => handleAddToBookmarks(blog)}> <FaRegBookmark /> </button>
                </div>
            </div>

            <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                    }
                </p>
                <button className='text-purple-700 underline' onClick={() => handleReadingTime(id, reading_time)} >{mark_as_read_title}</button>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;