import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
            <div className='container mx-auto w-[70%] my-10 border border-lime-600'>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
            </div>

            <div className='container mx-auto my-10 w-[30%] border border-lime-600 h-96'>
                
            </div>
        </div>
    );
};

export default Blogs;