export const LoginService = {
    login: async (email, password) => {
        if (email === '' || password === '') {
            throw new Error('Invalid credentials')
        }
        return { email, password }
    }
}