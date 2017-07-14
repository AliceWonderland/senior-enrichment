import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ReadMe extends Component{
    render() {

        return (
            <div>
                <h1>Welcome! This web app is built on the <span style={{color: 'olive'}}>'NERP'</span> Stack!</h1>
                <p>Which means it's made up primarily of <span style={{color: 'olive'}}>Node, Express, React, and Postgres</span>.
                    <br /><span style={{color: 'olive'}}>Derp!</span> If only there was a Node equivalent that started with a 'D'.
                    <br />Or we were using DocumentDB as our NoSQL persistent DB! <span style={{color: 'olive'}}>Nerd!</span>
                </p>



                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Primary Technologies</h4>
                            <ul>
                                <li><a href="https://nodejs.org/" target="_blank">Node.js</a> Javascript-Based Server</li>
                                <li><a href="http://expressjs.com/" target="_blank">Express.js</a> Web App Framework for Node</li>
                                <li><a href="https://facebook.github.io/react/" target="_blank">React</a> Javascript Frontend Web App Library</li>
                                <li><a href="https://www.postgresql.org/" target="_blank">Postgres</a> with <a href="http://docs.sequelizejs.com/" target="_blank">Sequelize</a> NoSQL Persistent DB and ORM</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4>Other Technologies</h4>
                            <ul>
                                <li>React-Redux/React-Dom/React-Router</li>
                                <li><a href="http://getbootstrap.com/">Bootstrap</a> Frontend Responsive UI Library</li>
                                <li>Various Supporting Packages
                                    <ul>
                                        <li>PSQL/PG/Axios Postgres/Ajax Support</li>
                                        <li>NPM/BodyParser/PATH Node/Express Support</li>
                                        <li>Webpack/Babel JS Module Support</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h4>Page Structure</h4>
                            <ul>
                                <li>HOME</li>
                                <ul>
                                    <li>CAMPUSES</li>
                                    <li>Add Campus</li>
                                    <li>Delete Campus</li>
                                    <li>View Campuses</li>
                                    <ul>
                                        <li>SINGLE CAMPUS</li>
                                        <li>Edit Campus</li>
                                        <li>Add Student</li>
                                        <li>Delete Student</li>
                                        <li>View Students</li>
                                    </ul>
                                </ul>

                                <ul>
                                    <li>STUDENTS</li>
                                    <li>Add Student</li>
                                    <li>Delete Student</li>
                                    <li>View Students</li>
                                    <ul>
                                        <li>SINGLE STUDENT</li>
                                        <li>Edit Student</li>
                                        <li>View Student</li>
                                    </ul>
                                </ul>
                                <li>README</li>
                                <li>VIDEO</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4>Dir Structure</h4>
                            <ul>
                                <li>APP</li>
                                <li>DB</li>
                                <li>PUBLIC</li>
                                <li>SERVER</li>
                                <li>index.js</li>
                                <li>package.json</li>
                                <li>seed.js</li>
                                <li>webpack.config.json</li>
                            </ul>

                        </div>
                    </div>

                </div>














            </div>
        )
    }
}