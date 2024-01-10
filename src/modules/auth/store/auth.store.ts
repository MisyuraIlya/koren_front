import { create } from 'zustand'
import { AuthService } from '../services/auth.service'
interface useAuthState {
    loading: boolean
    login:(obj: LoginForm) => Promise<boolean>
    register:() => void
}

export const useAuth = create<useAuthState>((set, get) => ({
    loading: false,
    login: async (obj: LoginForm) => {
        try {
            set({loading: true})
            const response = await AuthService.login(obj)
            if(response){
                return true
            } else {
                return false
            }
        } catch(e) {
            console.log('error',e)
            return false
        } finally {
            set({loading: false})
        }
    },
    register: () => {
        
    }
}))
