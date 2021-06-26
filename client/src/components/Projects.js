import React, { Component } from 'react';

import logo from '../logo.svg'

function ProjectCards(props) {
    console.log('Hello')
    return (
        <div class="cursor-pointer hover:bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" class="lazy" src={logo} alt="Mountain"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.title}</div>
                <p class="text-gray-700 text-base">
                    {props.text}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {props.tags.map((value, index) => (
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value}</span>
                )
                )}
            </div>
        </div>
    );
}

const MyProjectCards = [
    {
        'title' : 'Mountain',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'winter'
        ]

    },
    {
        'title' : 'Lake',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'summer'
        ]

    },
    {
        'title' : 'Mountain',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'winter'
        ]

    },
    {
        'title' : 'Lake',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'summer'
        ]

    },
    {
        'title' : 'Mountain',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'winter'
        ]

    },
    {
        'title' : 'Lake',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'summer'
        ]

    },
    {
        'title' : 'Mountain',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'winter'
        ]

    },
    {
        'title' : 'Lake',
        'text' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        'tags' : [
            'photography',
            'travel',
            'summer'
        ]

    },
]

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        // console.log(MyProjectCards)

        return (
            // <div class="flex flex-col justify-center items-center bg-gray-100">
            <div class="pt-10 pb-10 pr-4 pl-4 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {MyProjectCards.map((el) => (
                    <div class="flex flex-col justify-center items-center">
                        <ProjectCards title={el.title} text={el.text} tags={el.tags}/>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Projects;