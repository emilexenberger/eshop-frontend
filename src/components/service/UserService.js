class UserService {
    static BASE_URL = "http://localhost:8080";

    static async login(username, password) {
        try {
            const response = await fetch(`${UserService.BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

    static async register(userData) {
        try {
            const response = await fetch(`${UserService.BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

    static async getAllUsers(token) {
        try {
            const response = await fetch(`${UserService.BASE_URL}/admin/get-all-users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

    static async getYourProfile(token) {
        try {
            const response = await fetch(`${UserService.BASE_URL}/user/get-profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

    static async getUserById(userId, token) {
        try {
            const response = await fetch(`${UserService.BASE_URL}/admin/user/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

    static async deleteUser(userId, token) {
        try {
            const response = await fetch(`${UserService.BASE_URL}/admin/delete/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(userId, userData, token) {
        try {
            const response = await fetch(`${UserService.BASE_URL}/admin/update/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    }

    static async isUsernameAvailable(username) {
        try {
            console.log(`Check if the username is available: POST ${UserService.BASE_URL}/user/is-username-available`, { username: username })
            const response = await fetch(`${UserService.BASE_URL}/user/is-username-available`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username })
            });
            const data = await response.json();
            return data.isUsernameAvailable;
        } catch (err) {
            throw err;
        }
    }

    /** AUTHENTICATION CHECKER */
    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    static isAdmin() {
        const role = localStorage.getItem('role');
        return role === 'ADMIN';
    }

    static isUser() {
        const role = localStorage.getItem('role');
        return role === 'USER';
    }
}

export default UserService;
