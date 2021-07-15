const API_URL = 'https://api.github.com';

export const getAllGist = async () => {
    const result = await fetch(`${API_URL}/gists`)
    return await result.json()
}

export const getAllGistByUsername = async (username) => {
    const result = await fetch(`${API_URL}/users/${username}/gists`)
    return await result.json()
}

export const getGistDetailsById = async (id) => {
    const result = await fetch(`${API_URL}/gists/${id}`)
    return await result.json()
}

