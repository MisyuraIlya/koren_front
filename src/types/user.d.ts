interface IUser extends Idefinder{
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
    isActive: boolean
    role: Role
}

interface LoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

enum Role {
    Student = 'student',
    Teacher = 'teacher',
    Admin = 'admin',
}