interface IUser extends Idefinder{
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
    isActive: boolean
}

interface LoginForm {
    email: string;
    password: string;
}
