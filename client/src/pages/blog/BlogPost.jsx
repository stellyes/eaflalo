import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Markdown from 'react-markdown';

const BlogPost = () => {
    const location = useLocation();
    return (
        <Container className="blog-post py-2 px-3">
            <Markdown>{location.state.post.content}</Markdown>
        </Container>
    );
};

export default BlogPost;