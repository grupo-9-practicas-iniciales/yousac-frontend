import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CgProfile, CgLogOff } from "react-icons/cg";
import { Link } from "react-router-dom";

type Props = {
  src: string;
  alt: string;
  isUserActive?: boolean;
};

export const Avatar = ({ src, alt, isUserActive = false }: Props) => {
  return (
    <Popover as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Popover.Button>
            <div className="relative">
              <div
                className={isUserActive ? "avatar-isUserActive" : "hidden"}
              ></div>
              <img className="h-10 w-10 rounded-full" src={src} alt={alt} />
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 mt-2 w-24 md:w-40 origin-top-right divide-y rounded-sm divide-gray-400 dark:divide-primary-dark-3/[0.1]  bg-white dark:bg-darkContrast shadow-lg dark:shadow-none ring-1 ring-black dark:ring-primary-dark-3/[0.1] ring-opacity-5  focus:outline-none  dark:text-white">
              <div className="py-1">
                <Link to="/profile" className="avatar-option-menu">
                  <CgProfile className="mr-2" />
                  Perfil
                </Link>
              </div>
              <div className="py-1">
                <Link to="/auth/login" className="avatar-option-menu">
                  <CgLogOff className="mr-2" />
                  Cerrar sesión
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
