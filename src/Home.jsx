
import BlogList from './BlogList';
import useFetch from './Error';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading...</div>}

            {blogs && <BlogList blogs={blogs} title="My blogs" />}
            {/*  <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="marios blogs" /> */}
        </div >

    )
}
export default Home;