import { useState } from 'react';
import { SecondFilter } from '../search/SecondFilter';
import { Select } from '../select/Select';
import { SelectOptionsInterface } from '../select/Select.types';

const secondFilterOptions: SelectOptionsInterface[] = [
    { displayName: 'Curso', id: '1' },
    { displayName: 'Catedrático', id: '2' },
]

export const SelectSection = () => {

    const [selectedFirstFilter, setSelectedFirstFilter] = useState(secondFilterOptions[0]);


    return (
        <>
            <Select selected={selectedFirstFilter} setSelected={setSelectedFirstFilter} options={secondFilterOptions} />
            <SecondFilter id={selectedFirstFilter.id} />
        </>
    )
}
