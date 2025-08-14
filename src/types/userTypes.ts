
export interface userCredencials{
    id?: string,
    username?: string,
    email?: string,
    password: string
}

export interface newUser{
    username: string,
    email: string,
    password: string
}

export interface newAdmin{
    username: string,
    email: string,
    password: string,
    is_staff: boolean,
}

export interface userData{
    id: string,
    username: string,
    email: string,
    password?: string,
    created_at:Date,
    is_staff: boolean,
    is_superuser: boolean
}
