import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Statusbar extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel white" id="status-bar">
                        <Link to="/info">
                            <i className="material-icons ">face</i>
                        </Link>
                        <Link to="/stats">
                            <i className="material-icons ">trending_up</i>
                        </Link>
                        <Link to="/task">
                            <i className="material-icons ">collections_bookmark</i>
                        </Link>
                        <i className="material-icons ">business_center</i>

                        <Link to="/">
                            <i className="material-icons ">attach_money</i>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statusbar;