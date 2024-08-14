import React from 'react';
import ContactIcons from '../components/ContactIcons';

export default function MobileName() {
    return (
        <section className='mobileName'>
            <h1>Abigail Figaro</h1>
            <h3>Full Stack Developer</h3>
            <p>I design digital environments that creatviely <br />bridge the gap of accessibility.</p>
            <div className='contactIcons'><ContactIcons /></div>
        </section>
    )
}
