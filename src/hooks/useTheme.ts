import { useEffect, useState } from 'react';


const initialValue = localStorage.getItem('darkmode') === 'true' ? true : false

export const useTheme = () => {

    const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(initialValue)

    useEffect(() => {

        darkModeEnabled
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')

        localStorage.setItem('darkmode', darkModeEnabled ? 'true' : 'false')

    }, [darkModeEnabled])

    const toogleDarkMode = () => {
        setDarkModeEnabled((prevState) => {
            return !prevState
        })
    }

    return {
        darkModeEnabled,
        toogleDarkMode
    }

}