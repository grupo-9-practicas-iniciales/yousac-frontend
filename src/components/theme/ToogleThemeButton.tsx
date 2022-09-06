import { useTheme } from "../../hooks"
import { MoonIcon } from '../../assets/icons/MoonIcon';
import { SunIcon } from '../../assets/icons/SunIcon';


interface ToogleThemeButtonProps {
    fab?: boolean //fab = Floating Action button
}

export const ToogleThemeButton = ({ fab = false }: ToogleThemeButtonProps) => {

    const { darkModeEnabled, toogleDarkMode } = useTheme();

    return (
        <div onClick={() => toogleDarkMode()}
            className={`
            z-50
        cursor-pointer
        h-[40px] lg:h-[45px]
        w-[40px] lg:w-[45px]
        rounded-full
        border-4
        transition-all
        flex
        justify-center
        items-center
        ${darkModeEnabled ? 'border-info-dark-3 bg-darkContrast' : 'border-warning-light-4 bg-white '}
        ${fab ? 'fixed right-4 bottom-4' : 'relative'}
        `} >
            {
                darkModeEnabled
                    ? (
                        <MoonIcon className="text-white text-[20px] lg:text-[25px]" />
                    ) : (
                        <SunIcon className="text-warning-light-4 text-[20px] lg:text-[25px]" />
                    )
            }
        </div>
    )
}
