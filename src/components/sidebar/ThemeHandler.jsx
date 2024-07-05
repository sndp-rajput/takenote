import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import clsx from "clsx";
import { useState, useEffect } from "react";
import Textellipsis from "./resuable/Textellipsis";

const theme = [
  { id: 0, name: "Light", icon: MdOutlineLightMode },
  { id: 1, name: "Dark", icon: CiDark },
  { id: 2, name: "System", icon: RiComputerLine },
];

const ThemeHandler = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : 2
  );

  const [selected, setSelected] = useState(theme[mode]);
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  if (selected && selected.id !== mode) {
    setMode(selected.id);
  }

  function onWindowMatch() {
    if (
      localStorage.mode === 2 ||
      (!(mode in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  useEffect(() => {
    switch (mode) {
      case 1:
        element.classList.add("dark");
        localStorage.setItem("mode", 1);
        break;
      case 0:
        element.classList.remove("dark");
        localStorage.setItem("mode", 0);
        break;
      default:
        localStorage.removeItem("mode");
        onWindowMatch();
        break;
    }
  }, [mode]);

  darkQuery.addEventListener("change", (e) => {
    if (!(mode in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={clsx(
          "relative grid grid-cols-[auto_1fr_auto] items-center gap-2 w-full rounded-lg bg-light-2h dark:bg-dark-2h py-1.5 px-3 text-left text-sm/6 dark:text-light text-dark",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 border-[1px] border-transparent focus:border-dark/30 dark:focus:border-light/30"
        )}
      >
        <selected.icon size={"18px"} className={""} />
        <div className="flex flex-col">
          <Textellipsis>{selected.name}</Textellipsis>
          <Textellipsis className={"text-xs opacity-[0.5] "}>
            Theme
          </Textellipsis>
        </div>

        <IoIosArrowUp
          className="group pointer-events-none top-2.5 right-2.5 size-4 dark:text-light text-dark"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--button-width)] font-cursive rounded-xl border-[1px] border-transparent focus:border-dark/30 dark:focus:border-light/30 bg-light-2h dark:bg-[#2f2f2f] p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {theme.map((person) => (
          <ListboxOption
            key={person.name}
            value={person}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/5 dark:data-[focus]:bg-white/10 "
          >
            <IoCheckmark className="invisible size-4 text-black dark:text-white group-data-[selected]:visible" />
            <div className="text-sm/6 text-black dark:text-white">
              {person.name}
            </div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};
export default ThemeHandler;
