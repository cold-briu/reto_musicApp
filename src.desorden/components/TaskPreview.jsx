import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskPreview extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel white">
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Call to something</td>
                                    <td>Tomorrow</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>Do stuff</td>
                                    <td>06/18th</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>Mail to people</td>
                                    <td>06/02th</td>
                                    <td className="red-text" >Past-due</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="center-align hoverable">
                            <Link to='/task' >
                                <i className="material-icons ">expand_more</i>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPreview;