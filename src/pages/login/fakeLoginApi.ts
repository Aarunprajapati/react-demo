interface LoginResponse {
    data: {
        token: string
        message?: string 
    }
}

export function login(data: {
    email: string
    password: string
}): Promise<LoginResponse> {
    const { email, password } = data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'lovearun010@gmail.com' && password === '123456') {
                resolve({
                    data: {
                        token: 'asjvasgcvassgcasgdvejakhbdabcajssbckajss',
                        message: 'Login successful!',
                    },
                })
            } else {
                reject({
                    message: 'Email or password is incorrect',
                })
            }
        }, 1000)
    })
}
