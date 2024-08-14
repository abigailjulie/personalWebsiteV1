import React from 'react';
import './Back.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Back() {
    return (
        <span className='back'>
            <div className='backIcons'>
                <a href='/home'>
                    <i class="bi bi-arrow-left"></i>
                </a>
            </div>
        </span>
    )
};