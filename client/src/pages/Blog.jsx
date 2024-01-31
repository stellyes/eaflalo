import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import posts from '../assets/documents/blogposts.json';


const Blog = () => {
    return (
        <Container className="blog mt-4">
            {posts.length !== 0 ?
                posts.toReversed().map((post) => (
                    <Link
                        to={`/blog/${post.url}`}
                        className="blog-post-link"
                        key={post.id}
                        state={{ post }}
                    >
                        <Container className="blog-post-preview p-2">
                            <Container className='mx-auto'>
                                <h1 className='mb-0'>{post.title}</h1>
                                <p>{post.date}</p>
                            </Container>
                            <Container className='mx-auto'>
                                <p>{post.preview}</p>
                            </Container>
                        </Container>
                    </Link>
                ))
                : <h2 className='no-posts mt-5 mx-auto p-3 text-center'>Check back later! Nothing here yet :)</h2>
            }
        </Container>
    );
};

export default Blog;