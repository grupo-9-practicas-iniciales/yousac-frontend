import { useState } from 'react';
import { Select } from '../select/Select';
import { SelectOptionsInterface } from '../select/Select.types';
import { SecondFilter } from './SecondFilter';

const secondFilterOptions: SelectOptionsInterface[] = [
    { displayName: 'Curso', id: '1' },
    { displayName: 'Catedrático', id: '2' },
]

export const PostSearch = () => {

    const [selectedFirstFilter, setSelectedFirstFilter] = useState(secondFilterOptions[0]);


    return (
        <>
            <Select selected={selectedFirstFilter} setSelected={setSelectedFirstFilter} options={secondFilterOptions} />
            <SecondFilter id={selectedFirstFilter.id} />
        </>
    )
}
