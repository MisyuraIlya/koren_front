import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useDiratyState {
    open: boolean
    setOpen: (openStudents: boolean) => void
    title: string
    setTitle: (title:string) => void
    description: string
    setDescription: (description: string) => void 
    selectedUsers: IUser[]
    setSelectedUsers: (users: IUser[]) => void
    success:boolean,
    setSuccess:(success: boolean) => void
    error: boolean,
    setError: (error: boolean) => void
    search: string
    setSearch: (search: string) => void
}

export const useMailStore= create(
  persist(
    (set, get) => ({
        open: false,
        setOpen: (open) => set({open}),
        title:'',
        setTitle:(title) => set({title}),
        description:'',
        setDescription:(description) => set({description}),
        selectedUsers: [],
        setSelectedUsers: (users) => set({ selectedUsers: users }),
        success:false,
        setSuccess:(success) => set({success}),
        error:false,
        setError: (error) => set({error}),
        search:'',
        setSearch:(search) => set({search})
    }),
    {
      name: 'mail-store',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useDiratyState, useDiratyState>
  )
)
