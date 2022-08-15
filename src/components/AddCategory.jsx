import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [value, setValue] = useState('');

    const handleChange = ({ target }) => {
        setValue(target.value);
    };

    const onSubmit = ((event) => {
        event.preventDefault();
        const newCategory = value.trim();
        if (newCategory.length <= 3) return;
        onNewCategory(newCategory);
        setValue('');
    });

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs..."
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}
