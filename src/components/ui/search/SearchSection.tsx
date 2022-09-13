import { useState } from "react";

import { Select } from "../../";
import { SelectOptionsInterface } from "../select/Select.types";
import { FirstFilter } from "./FirstFilter";

const firtFilterOptions: SelectOptionsInterface[] = [
  { displayName: "Usuario", id: "1" },
  { displayName: "Publicación", id: "2" },
];

export const SearchSection = () => {
  const [selectedFirstFilter, setSelectedFirstFilter] = useState(
    firtFilterOptions[0]
  );

  return (
    <section className="w-5/6 dark:bg-darkContrast bg-white border border-gray-400 dark:border-none my-6 p-5 rounded-md">
      <article className="flex flex-col gap-y-2 justify-between items-center">
        <h2 className="text-lg font-bold">Buscar</h2>
        <Select
          selected={selectedFirstFilter}
          setSelected={setSelectedFirstFilter}
          options={firtFilterOptions}
        />
        <FirstFilter id={selectedFirstFilter.id} />
      </article>
    </section>
  );
};
