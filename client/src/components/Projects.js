import React, { Component } from 'react';

function ProjectCards(props) {
    console.log('Hello')
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" class="lazy" data-src="/mountain.jpg" alt="Mountain"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {/* {props.tags.map((value, index) => {
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value}</span>
                })} */}
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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

    }
]

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        // console.log(MyProjectCards)

        return (
            <div>
                {MyProjectCards.map((el) => {
                    ProjectCards()
                })}
            </div>
        );
    }
}
 
export default Projects;