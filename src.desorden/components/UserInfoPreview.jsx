import React, { Component } from 'react';
class UserInfoPreview extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel withe">
                        <div class="row valign-wrapper">
                            <div class="col s4">
                                <img alt="" id="usrpreview" className="circle responsive-img" src="https://s3.us-east-2.amazonaws.com/eafitrequisitos/john.png" />
                            </div>
                            <div class="col s8">
                                <span class="black-text">
                                    <ul>
                                        <li>Caetano Veloso</li>
                                        <li>+57 3145749678</li>
                                        <li>cc.985376804</li>
                                        <li>Cra 80 #33-50, Belén C16</li>
                                        <li>c.veloso@gmail.com</li>
                                        <li>Task Ratio  ·
                                            <span className="green-text">
                                                76.6%
                                            </span>
                                        </li>

                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfoPreview;