import { useEffect } from 'react';

export const useUpdateTitle = (newTitle) => {
    useEffect( () => {
        document.title = `${newTitle} | Cinemate`;
    });

    return null;
}
