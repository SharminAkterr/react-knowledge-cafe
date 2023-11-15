import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    const { cover, author, hashtags, mark_as_read_title
        , publish_date, reading_time, title } = blog;
    return (
        <div className='border border-red-700 mb-12'>
            <div className='mb-4'>
                <img className='w-full' src={cover} alt="" />
            </div>

            <div className='flex justify-between mb-5'>
                <div className='flex gap-4 w-[80%]'>
                    <img className='w-[10%]' src={author.img} alt="" />
                    <div>
                        <h5 className='text-2xl font-bold'>{author.name} </h5>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl'>{reading_time} mins read</p>
                </div>
            </div>
            
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p>
                    <span className='mr-4'>{hashtags[0]}</span>
                    <span>{hashtags[1]}</span>
                </p>
                <button>{mark_as_read_title}</button>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;