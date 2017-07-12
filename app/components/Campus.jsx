import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Campus extends Component{
    constructor(){
        super();
        this.state={campuses:[]};

        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount () {
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => this.setState({ campuses }));
    }

    handleClick(e){
        console.log("clickTarg",e.target.id);
        axios({
            method: 'delete',
            url: '/api/campuses/'+e.target.id
        });

    }

    render() {
        const campuses = this.state.campuses;
        var styles = {
            cssFloat:'right'
        };
        return (
            <div>
                <h1>Campuses</h1>
                <h2>List of All Campuses <Link to="/campuses/new"><button type="button" className="btn btn-primary" style={styles}>+ Add Campus</button></Link></h2>


                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        {/*<th>Photo</th>*/}
                        <th>Campus Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        campuses.map(campuses => {
                            return (
                                <tr key={campuses.id}>
                                    <td>{ campuses.id }</td>
                                    {/*<td><Link to={`/campuses/${campuses.id}`}><img src={campuses.image} /></Link></td>*/}
                                    <td><Link to={`/campuses/${campuses.id}`}>{ campuses.name }</Link></td>
                                    <td className="text-right"><button type="button" className="btn btn-sm btn-danger" onClick={this.handleClick} id={campuses.id}>delete</button></td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>



            </div>
        )
    }
}