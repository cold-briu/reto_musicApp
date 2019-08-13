import React, { Component } from 'react';
class TaskAccordion extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12">

                    <ul class="collapsible white">

                        <li>
                            <div class="collapsible-header">
                                <i class="material-icons">attach_file</i>
                                Call to someone
                            </div>
                            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>


                        <li>
                            <div class="collapsible-header">
                                <i class="material-icons">attach_file</i>
                                Do Stuff
                            </div>
                            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>

                        <li>
                            <div class="collapsible-header">
                                <i class="material-icons">attach_file</i>
                                Mail to people
                            </div>
                            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>

                        <li>
                            <div class="collapsible-header">
                                <i class="material-icons">attach_file</i>
                                Pay bills
                            </div>
                            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                    </ul>


                </div>
            </div>
        );
    }
}

export default TaskAccordion;