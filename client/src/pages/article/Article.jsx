import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '../../../services/post.service';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

export default function Article() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPost(id);
                setPost(data.post);
            } catch (error) {
                console.error(error);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    if (!post) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="article">
            <Fade triggerOnce duration={500}>
                <div className="article-header">
                   {/* 
                    <Link to="/news" className="article-back" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg> Volver
                    </Link>
                     */}
                    <h1 className="article-title">{post.title}</h1>
                    <time className="article-date" dateTime={post.created_at}>
                        {new Date(post.created_at).toLocaleString()}
                    </time>
                </div>
                <div className="article-content">
                    <p>{post.content}</p>
                </div>
            </Fade>
        </div>
    );
}
