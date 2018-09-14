import React from 'react';

//components
import NoteContainer from './NoteContainer.js';
import ItemContainer from './ItemContainer.js';

class Container extends React.Component {    

    render()
    {  
          return(
            <div className="container">
                <NoteContainer />
                <ItemContainer />
            </div>
        );
    }
    
}

export {
    Container
};