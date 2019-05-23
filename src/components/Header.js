import React from 'react';

function Header(props) {
    return( 
        <h1 class="uk-heading-line uk-text-center uk-margin-large-top uk-margin-large-bottom">
            <span>{props.title}</span>
        </h1>
    );
}

export default Header;