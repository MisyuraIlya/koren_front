interface IUser extends Idefinder{
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
    isActive: boolean
    role: Role
    school: ISchool
    class: IClass
}



interface LoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

type Role = 'student' | 'teacher' | 'admin'

