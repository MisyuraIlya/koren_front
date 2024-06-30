import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useDiratyState {
    choosedMode: string
    mode: {value: string,label:string}[]
    typeChoosed:string,
    setTypeChoosed:(typeChoosed:string) => void
    setChoosedMode: (choosedMode: string) => void
    choosedFeedBack: string,
    setChoosedFeedBack: (choosedFeedBack: string) => void
    addFeedBack:string,
    setAddFeedBack: (value: string) => void
    isSavedBank: boolean,
    setIsSavedBank: (value: boolean) => void
    toSaveFeedBack: boolean
    setToSaveFeedBack: (toSaveFeedBack: boolean) => void
}

export const useFeedBackStore= create(
  persist(
    (set, get) => ({
        choosedMode: '',
        setChoosedMode: (choosedMode) => set({choosedMode}),
        mode: [
            {value:'create', label:'כתיבת משוב עצמי'},
            {value:'choose', label:'בחירת משוב מהבנק'}
        ],
        typeChoosed:'',
        setTypeChoosed:(typeChoosed) => set({typeChoosed}),
        choosedFeedBack:'',
        setChoosedFeedBack: (choosedFeedBack) => set({choosedFeedBack}),
        addFeedBack:'',
        setAddFeedBack: (addFeedBack) => set({addFeedBack}),
        isSavedBank: false,
        setIsSavedBank: (isSavedBank) => set({isSavedBank}),
        toSaveFeedBack:false,
        setToSaveFeedBack:(toSaveFeedBack) => set({toSaveFeedBack}) 
    }),
    {
      name: 'feedback-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useDiratyState, useDiratyState>
  )
)
