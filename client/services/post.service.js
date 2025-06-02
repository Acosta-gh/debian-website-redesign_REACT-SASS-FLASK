
const API_URL = 'http://127.0.0.1:5000/post/';

export const getPosts = async () => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error('Error al obtener posts');
    }

    return res.json();
};

export const getPost = async (id) => {
    const res = await fetch(`${API_URL}${id}`);
    console.log(res)
    if (!res.ok) {
        throw new Error('Error al obtener el post');
    }

    return res.json();
};


export const createPost = async (postData, token) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
    });

    if (!res.ok) {
        throw new Error('Error al crear post');
    }

    return res.json();
};
