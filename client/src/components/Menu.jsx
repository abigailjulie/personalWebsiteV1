import React from 'react';

export default function Menu() {
    return (
        <div style={{position: 'fixed', right: 0, top: 0}}>
            <select>
                <option value="Portugal">Portugal</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Columbia">Columbia</option>
                <option value="San Diego">San Diego</option>
            </select>
        </div>
    )
}