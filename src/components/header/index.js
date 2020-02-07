import React from 'react';

const Header = ({ text }) => {
   return( <div>
        <h2 data-testid="h2tag" className="fancy-h2">{text}</h2>
    </div> );
}
export default Header;