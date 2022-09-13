import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Popover, Transition } from "@headlessui/react";
import { CgProfile, CgLogOff } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";

import { AvatarProfileButton } from "./AvatarProfileButton";

import { useContentStore, useAuthStore } from "../../../hooks";
import { User } from "../../../context/auth";

type AvatarProps = {
  user: User;
  isUserOnline?: boolean;
  displayMenu?: boolean;
};

export const Avatar = ({
  user,
  isUserOnline = false,
  displayMenu = false,
}: AvatarProps) => {
  const { startLogout } = useAuthStore();
  const { setSelectedUser } = useContentStore();

  const displayUserName = user.names[0] + user.lastnames[0];

  return (
    <>
      {displayMenu ? (
        <Popover as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <Popover.Button>
                <AvatarProfileButton
                  isUserOnline={isUserOnline}
                  displayUserName={displayUserName}
                />
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
                <Popover.Panel className="absolute z-50 right-0 mt-2 w-32 md:w-40 origin-top-right divide-y rounded-sm divide-gray-400 dark:divide-primary-dark-3/[0.1]  bg-white dark:bg-darkContrast shadow-lg dark:shadow-none ring-1 ring-black dark:ring-primary-dark-3/[0.1] ring-opacity-5  focus:outline-none">
                  <Link
                    onClick={() => setSelectedUser(user)}
                    to={`/profile/user`}
                    className="avatar-option-menu"
                  >
                    <CgProfile className="mr-2" />
                    Perfil
                  </Link>

                  <Link to={`/settings`} className="avatar-option-menu">
                    <VscSettings className="mr-2" />
                    Settings
                  </Link>

                  <Link
                    to="/"
                    onClick={() => startLogout()}
                    className="avatar-option-menu"
                  >
                    <CgLogOff className="mr-2" />
                    Logout
                  </Link>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ) : (
        <Link to={"/profile/user"} onClick={() => setSelectedUser(user)}>
          <AvatarProfileButton displayUserName={displayUserName} />
        </Link>
      )}
    </>
  );
};
