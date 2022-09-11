import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckIcon, DownArrowIcon2 } from "../../../assets";
import { SelectOptionsInterface } from "./Select.types";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

interface SelectProps {
  selected: SelectOptionsInterface;
  setSelected: React.Dispatch<React.SetStateAction<SelectOptionsInterface>>;
  options: SelectOptionsInterface[];
}

export const Select = ({ selected, setSelected, options }: SelectProps) => {
  if (!selected) {
    return <></>;
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 text-white w-full">
        <Listbox.Button
          className="z-10 relative w-full cursor-pointer rounded-lg bg-primary-light-1 dark:bg-[#05131E] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm
        text-white "
        >
          <span className="block truncate">{selected.displayName}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <DownArrowIcon2
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Listbox.Options className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary-light-4 dark:bg-[#05131E] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active
                      ? "font-black text-info-light-3 dark:text-primary-dark-1 "
                      : "text-white font-normal transition-all duration-300"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.displayName}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-info-dark-1 dark:text-primary-dark-1">
                        <CheckIcon className="h-3 w-3" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
