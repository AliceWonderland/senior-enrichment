import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Video extends Component{
    render() {
        return (
            <div>
                <h1>Video Walkthrough <span style={{color: 'olive'}}>Senior Enrichment Project</span></h1>
                <h3>Overview</h3>
                <p><iframe width="853" height="480" src="https://www.youtube.com/embed/t6S0cb27LJ8" frameborder="0" allowfullscreen></iframe></p>
                <h3>Overview with   Code Walkthrough</h3>
                <p><iframe width="853" height="480" src="https://www.youtube.com/embed/fuJb5mgM2ZE" frameborder="0" allowfullscreen></iframe></p>
                <h2>By Alice Chuang <span style={{color: 'olive'}}>Grace Hopper June 2017 Cohort</span></h2>
            </div>
        )
    }
}