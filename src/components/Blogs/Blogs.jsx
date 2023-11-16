import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
            <div className='container mx-auto md:w-[70%] my-10'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmarks={handleAddToBookmarks}
                        handleReadingTime ={handleReadingTime}
                    ></Blog>)
                }
            </div>
    );
};
Blogs.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blogs;