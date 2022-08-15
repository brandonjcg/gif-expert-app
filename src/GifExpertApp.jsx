import { useState } from 'react';
import { AddCategory,  GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['The Fast and the Furious', 'Honda Cars']);

    const handleAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory = { handleAddCategory } />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
