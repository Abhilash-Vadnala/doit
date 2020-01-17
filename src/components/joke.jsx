import React from 'react'

/**
 * This Functional component is done just as a fun exercise. And this doesn't contribute to the DoIt app.
 */
function joke(props) {
        return(
            <div className="Joke">
                <p style={{display: props.Question ? "block" : "none"}}><strong>{props.Question}</strong></p>
                <span style = {{fontWeight: props.Question ? "normal" : "bold"}}>{props.Punch}</span>
                <hr/>
            </div>
        );
}

export default joke