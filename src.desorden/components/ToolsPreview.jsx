import React, { Component } from 'react';

class ToolsPreview extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel white">
                        <ul className="collection">

                            <li className="collection-item avatar">
                                <i className="material-icons circle">folder</i>
                                <span className="title">Marketing flyers</span>
                                <p>File Resoruces </p>
                                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>

                            </li>

                            <li className="collection-item avatar">
                                <i className="material-icons circle green">insert_chart</i>
                                <span className="title">Api charts info</span>
                                <p>Social Media Stats</p>
                            </li>
                            <li className="collection-item avatar">
                                <i className="material-icons circle red">play_arrow</i>
                                <span className="title">Help & Docs</span>
                                <p>Video Courses</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToolsPreview;