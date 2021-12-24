import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    const items = [
        {
            parentName: "Dominos",
            name: "Cheese Burst Margerita",
            price: "$10",
            location: "American",
            foodType: "Snacks",
            deal: "20%",
            preparationTime: '20',
        },
        {
            parentName: "Dominos",
            name: "Cheese Burst Margerita",
            price: "$10",
            location: "American",
            foodType: "Snacks",
            deal: "20%",
            preparationTime: '20',
        },
        {
            parentName: "Dominos",
            name: "Cheese Burst Margerita",
            price: "$10",
            location: "American",
            foodType: "Snacks",
            deal: "20%",
            preparationTime: '20',
        },
    ];

    return (
        <div className="container mx-auto pb-10 flex justify-center">
            <div className="w-11/12 flex flex-col">
                <div className="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
                    Popular Items In The Menu Card
                </div>
                {
                    items.map(e => {
                        return <MenuItem
                            name={ e.name }
                            parentName={ e.parentName }
                            price={ e.price }
                            location={ e.location }
                            foodType={ e.foodType }
                            deal={ e.deal }
                            preparationTime={ e.preparationTime }
                        />;
                    })
                }
            </div>
        </div>
    );
};

export default Menu;
