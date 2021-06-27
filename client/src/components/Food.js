import React, { Component } from 'react';
import ramen from '../assets/ramen.png'
import pizza from '../assets/pizzaPic.png'

function createFood(title, text, ingredients, image) {
    return {title, text, ingredients, image}
}

const foodCards = [
    createFood(
        'Tonkotsu Ramen',
        'Homemade Tonkotsu with Chashu pork and Ajitama.',
        [],
        ramen
    ),
    createFood( 
        'Pan Pizza',
        'Pan style Pizza with Mozzarella and Parmigiano-Reggiano.',
        [],
        pizza
    ),
]

function FoodCard(props) {
    return (
            <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
                <img className="h-10" class="lazy" src={props.image} alt=''/>
                <div className="mx-6 my-4 border-b border-gray-light">
                    <div className="font-medium text-base text-gray-darker mb-4">{props.title}</div>
                    <p className="font-normal text-gray-dark text-sm mb-2">
                    {props.text}
                    </p>
                </div>
            </div>
    )
}

class Food extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
            <div className="justify-items-center items-center">
                <div class="grid justify-items-center items-center xs:grid-cols-1 md:grid-cols-2 gap-4">
                    {foodCards.map((card) => (
                        <div class="justify-center items-center">
                            <FoodCard title={card.title} text={card.text} image={card.image} ingredients={card.ingredients} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Food;