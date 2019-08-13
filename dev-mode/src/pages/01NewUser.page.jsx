import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NewUser = () => {
    return (
        <>
            <h1>New User</h1>
            <Link to="/mailCheck">
                <button>Next</button>
            </Link>
        </>
    )
}

export default NewUser