import React from 'react';

import _ from 'lodash';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
            {/* <img className="card-img-top" src={props.document.image_url} alt={props.document.original_title}></img> */}
            <div className="card-body">
                <h6 className="title-style">{props.document}</h6>
            </div>
    
    </div>
    );
}
