import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    // console.log(bookmark)
    return (
        <div className='mb-5 bg-white rounded-lg mx-5 p-5'>
            <h4 className="text-xl">{title}</h4>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;