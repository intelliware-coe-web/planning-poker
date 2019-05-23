import List from "./CardList";
import React from 'react';
import Header from './Header';

const Room = () =>
    <>
    <Header title="Room"/>
    <List listItems={stories}/>
    </>;

const stories = [
    {
        title: 'Story A',
        description: 'some description for story A',
        priority: 'High',
        link: 'story-a'
    },
    {
        title: 'Story B',
        description: 'some description for story B',
        priority: 'High',
        link: 'story-b'
    },
    {
        title: 'Story C',
        description: 'some description for story C',
        priority: 'Medium',
        link: 'story-c'
    },
    {
        title: 'Story D',
        description: 'some description for story D',
        priority: 'Low',
        link: 'story-d'
    },
    {
        title: 'Add New Story +',
        description: 'click here to add a new story to this room',
        priority: '',
        link: 'add-story'
    },
]

export default Room;