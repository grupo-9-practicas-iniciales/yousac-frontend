import { LoaderIcon } from '../../../assets'

export const Spinner = () => {
    return (
        <main className="h-screen
    bg-light
    dark:bg-dark
    overflow-x-hidden
    transition-colors
    flex
    justify-center
    items-center
    " >
            <LoaderIcon className='animate-spin text-primary-light-1 dark:text-primary-dark-1 ' size={40} />
        </main>
    )
}
