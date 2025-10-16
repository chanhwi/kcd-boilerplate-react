// src/store/useTabStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TAB } from '../utils/constants';

export interface ITabStore {
    activeTab: TAB,
    setActiveTab: (activeTab:TAB) => void,
}

export const TabStore = create<ITabStore>()(
    persist(
        (set) => ({
            activeTab: TAB.home,
            setActiveTab: ( activeTab:TAB ) => set({ activeTab }),
        }),
        {
            name: 'tabStorage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);