import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { FetchApi } from './components/FetchApi';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>

            <hr />
            
            <ol>
                {
                    categories.map(category => {
                        return <FetchApi 
                                key={category}
                                category={category}
                                >
                                    {category}
                                </FetchApi>
                    })
                }
            </ol>
        </>
    )
};
