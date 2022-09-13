import { Switch } from '@headlessui/react'

interface SwitchButtonProps {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

export const SwitchButton = ({ enabled, setEnabled }: SwitchButtonProps) => {


  return (
    <div >
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-success-gradient' : 'bg-light dark:bg-dark'}
          relative inline-flex h-[30px]  w-[58px] md:h-[34px] md:w-[62px] items-center  shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block  h-[28px] w-[28px] md:h-[32px] md:w-[32px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}