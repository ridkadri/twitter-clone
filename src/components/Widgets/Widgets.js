import React from 'react';
import './Widgets.css';

import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchIcon className='widgets_searchIcon'/>
                <input placeholder='Search Twitter' type='text'/>
            </div>
        </div>
    )
}

export default Widgets;
