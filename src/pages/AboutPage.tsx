import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <div className="center">
            <h4>Swapon TodoList</h4>
            <p>This is simple add hello hi delete item.</p>
            <button className="btn black" onClick={() => history.push('/')}>Back to to-do list</button>
            </div>
        </>
    )
}
