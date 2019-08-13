import React, { Component } from 'react';
class FormUserInfo extends Component {

    render() {
        return (

            <div className="row">
                <form className="col s12 m10 offset-m1">
                    <div className="card-panel white">

                        <div className="row">

                            <div className="input-field col s12">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">Your Name</label>
                            </div>

                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>

                        <button class="btn yellow darken-3 waves-effect waves-light" type="submit" name="action">Submit
                     <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

export default FormUserInfo;