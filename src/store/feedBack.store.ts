import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useDiratyState {
    choosedMode: string
    mode: {value: string,label:string}[]
    setChoosedMode: (choosedMode: string) => void
}

export const useFeedBack= create(
  persist(
    (set, get) => ({
        choosedMode: '',
        setChoosedMode: (choosedMode) => set({choosedMode}),
        mode: [
            {value:'create', label:'כתיבת משוב עצמי'},
            {value:'choose', label:'בחירת משוב מהבנק'}
        ],
       
    }),
    {
      name: 'feedback-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useDiratyState, useDiratyState>
  )
)
