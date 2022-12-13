import create from "zustand";

const useStore = create((set) => ({
    theme: 'light',
    changeTheme : () => {
        set((state: any) => ({
          theme: state.theme === 'light' ? 'dark' : 'light'  
        }))
    }
}))

export default useStore;