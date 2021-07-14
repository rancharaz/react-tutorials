import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {



    return (


        <div>
            <h1>{title}</h1>
            {
                blogs.map((blog) => {
                    const { title, author } = blog;
                    return (

                        <div className="blog-preview" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`}>
                                <h1>{title}</h1>
                                <h2>{blog.title}</h2>
                                <h3>{author}</h3>
                            </Link>


                        </div>
                    )
                })
            }
        </div>
    )
}
export default BlogList;