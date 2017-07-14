'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import store from './store';
import Root from './components/Root';
import Home from './components/Home';
import Student from './components/Student';
// import Campus from './components/Campus';
// import Student from './components/StudentGrid';
import Campus from './components/CampusGrid';
import SingleCampus from './components/SingleCampus';
import SingleStudent from './components/SingleStudent';
import NewCampus from './components/NewCampus';
import NewStudent from './components/NewStudent';
import ReadMe from './components/ReadMe';
import Video from './components/Video';

render (
    <Provider store={store}>
        <Router>
            <div className="container">

                {/* NAV BAR */}
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle NAV</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">✨ Margaret Hamilton Academy</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/campuses">Campuses</Link></li>
                                <li><Link to="/students">Students</Link></li>
                                <li><Link to="/video">Video</Link></li>
                                <li><Link to="/readme">ReadMe</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                {/* BODY */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/students" component={Student} />
                    <Route exact path="/campuses" component={Campus} />
                    <Route exact path="/students/new" component={NewStudent} />
                    <Route exact path="/campuses/new" component={NewCampus} />
                    <Route exact path="/students/edit/:studentId" component={NewStudent} />
                    <Route exact path="/campuses/edit/:campusId" component={NewCampus} />
                    <Route exact path="/students/view/:studentId" component={SingleStudent} />
                    <Route exact path="/campuses/view/:campusId" component={SingleCampus} />
                    <Route path="/readme" component={ReadMe} />
                    <Route path="/video" component={Video} />
                    <Route component={Root} />
                </Switch>

            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);