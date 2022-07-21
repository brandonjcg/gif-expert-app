import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['The Fast and the Furious', 'K series']);

    const handleAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([...categories, value]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory = { handleAddCategory } />
            <ol>
                {
                    categories.map((category) => <li key={category}> {category} </li>)
                }
            </ol>
        </>
    )
}
