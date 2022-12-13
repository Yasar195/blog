import useStore from "../store/store"
import { BiSun, BiMoon } from 'react-icons/bi'
import styles from '../styles/Nav.module.css';

export default function Nav(){

    const { changeTheme, theme } = useStore((state: any) => ({changeTheme: state.changeTheme, theme: state.theme}))

    return(
        <main className="w-full h-1/6 p-8 flex items-center justify-between">
            <h1 className="md:text-xl lg:text-4xl tracking-widest">Yasar Arafath S</h1>
            <div onClick={changeTheme}
            className={`${styles.button} p-2 sm:p-4 border-2 rounded-full cursor-pointer`}
            >
                {
                    theme === "light"? 
                        <BiMoon className="w-full"/>
                    :
                        <BiSun className="w-full"/>
                }
            </div>
        </main>
    )
}