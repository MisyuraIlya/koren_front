import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useDiratyState {
    choosedMode: string
    mode: {value: string,label:string}[]
    setChoosedMode: (choosedMode: string) => void
    positive: {value: string,label:string}[]
    negative: {value: string,label:string}[]
    positiveChoosed:string,
    setPositiveChoosed: (value: string) => void
    negativeChoosed:string,
    setNegativeChoosed: (value: string) => void
    choosedFeedBack: string,
    setChoosedFeedBack: (choosedFeedBack: string) => void
    addFeedBack:string,
    setAddFeedBack: (value: string) => void
    isSavedBank: boolean,
    setIsSavedBanl: (value: boolean) => void
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
        positiveChoosed:'',
        setPositiveChoosed: (positiveChoosed) => set({positiveChoosed}),
        negativeChoosed:'',
        setNegativeChoosed: (negativeChoosed) => set({negativeChoosed}),
        positive: [
          {value:'1', label:'משובים לשיפור הלמידה'},
        ],
        negative: [
          {value:'1', label:'פרקי הלשון השונים'},
        ],
        choosedFeedBack:'',
        setChoosedFeedBack: (choosedFeedBack) => set({choosedFeedBack}),
        addFeedBack:'',
        setAddFeedBack: (addFeedBack) => set({addFeedBack}),
        isSavedBank: false,
        setIsSavedBanl: (isSavedBank) => set({isSavedBank}) 
    }),
    {
      name: 'feedback-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useDiratyState, useDiratyState>
  )
)
