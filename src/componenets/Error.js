import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();

    return (
        <div>
            <h1>Oops!!!</h1>
            <h2><i class="fa fa-itali" aria-hidden="true">Something rent wrong😥🤔.....</i></h2>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}

export default Error;
