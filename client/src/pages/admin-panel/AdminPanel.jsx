import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminPanel = () => {
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        title: '',
        description: '',
        content: ''
    });

    useEffect(() => {
        const token = getToken();
        if (!token || checkTokenExpiration(token)) {
            navigate('/login');
            return;
        }
        try {
            const decoded = jwtDecode(token);
            console.log("decoded.isAdmin")
            console.log(decoded.isAdmin)
            if (!decoded.isAdmin) {
                navigate('/');
            }
        } catch (e) {
            navigate('/');
        }
    }, [navigate]);

    const checkTokenExpiration = (token) => {
        if (!token) {
            return true;
        }

        const decoded = jwtDecode(token);
        if (!decoded || !decoded.exp) {
            return true;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(form, getToken())
        console.log(form);
        setForm({
            title: '',
            description: '',
            content: ''
        })
    };

    return (
        <div className='adminpanel'>
            <h2>Create a News Update</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdminPanel;