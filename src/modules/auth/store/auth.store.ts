import { create } from "zustand"
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware"

import { AuthService } from '../services/auth.service'
interface useAuthState {
    loading: boolean
    user: IUser | null
    login:(obj: LoginForm) => Promise<IUser | null>
    register:() => void
    logout:() => void
}

export const useAuth = create(
    persist(
        (set, get) => ({
            loading: false,
            user: null,
            login: async (obj: LoginForm) => {
                try {
                    set({loading: true})
                    const response = await AuthService.login(obj)
                    if(response?.id){
                        set({user: response})
                    }
                    return response
                } catch(e) {
                    console.log('error',e)
                    return null
                } finally {
                    set({loading: false})
                }
            },
            register: () => {
                
            },
            logout: () => {
                localStorage.clear()
                set({user:null})
            }
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => localStorage),
        } as PersistOptions<useAuthState, useAuthState>
    )

)


