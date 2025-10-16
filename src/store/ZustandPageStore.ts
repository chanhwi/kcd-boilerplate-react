// src/store/useTabStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface IZustandPage {
    key: string,
    value: string,
}

export interface IZustandPageStore {
    keywordList: IZustandPage[];
    setKeywordList: (list: IZustandPage[]) => void;
    addKeyword: (keyObj: IZustandPage) => void;
    removeKeyword: (key: string) => void;
    clearKeywords: () => void;
}

export const ZustandPageStore = create<IZustandPageStore>()(
    persist(
        (set) => ({
            keywordList: [],
            
            setKeywordList: (list) => set({ keywordList: list }),
            
            addKeyword: (keyword) => set((state) => ({ 
                keywordList: [...state.keywordList, keyword] 
            })),
            
            removeKeyword: (key) => set((state) => ({ 
                keywordList: state.keywordList.filter(item => item.key !== key) 
            })),
            
            clearKeywords: () => set({ keywordList: [] }),
        }),
        {
            name: 'zustandPageStorage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);