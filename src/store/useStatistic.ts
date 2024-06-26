import { GroupService } from '@/services/group.service'
import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useStatisticState {
    loading: boolean
    getStatistic: (uuid: string,lvl1:number,lvl2:number,lvl3:number,lvl4:number,lvl5:number) => void
    data: IStatistic | null
}

export const useStatistic = create(
  persist(
    (set, get) => ({
        loading: false,
        getStatistic: async (uuid: string,lvl1:number,lvl2:number,lvl3:number,lvl4:number,lvl5:number) => {
            try {
                set({loading:true})
                const response = await GroupService.getStatistic(
                  uuid,
                  lvl1,
                  lvl2,
                  lvl3,
                  lvl4,
                  lvl5,
                )
                set({data:response})
            } catch(e) {
                console.log('[ERROR]',e)
            } finally {
                set({loading:false})
            }
        },
        data: null
    }),
    {
      name: 'statistic-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useStatisticState, useStatisticState>
  )
)
