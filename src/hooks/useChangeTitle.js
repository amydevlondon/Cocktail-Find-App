import { useEffect } from 'react';

const useChangeTitle = (title) => {
    useEffect(() => {
        document.title = title;
        return () => {
            document.title = "Cocktail Find";
        }
    }, []);

    return { title };
};

export default useChangeTitle;