import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="container mx-auto mt-10 ">
            <div className="flex mb-5 justify-between">
                <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Header;