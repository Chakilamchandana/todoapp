import React from 'react';


function Footer(){
    return(
    <div className="footer">
            <p className='instructions'>This website presents a dynamic to-do list built with ReactJS and styled using CSS. The main objective of this application is to provide you with a platform to jot down tasks you intend to tackle. Additionally, it offers the convenience of marking tasks as completed, and if you inadvertently mark something off, worry not – you can easily revert the action by clicking on it again.
            The primary focus of this app is to showcase the utilization of React's useState hook. However, it's important
             to note that this particular implementation doesn't include data persistence, meaning the entered tasks won't be 
             stored for future sessions.
             </p>
        
        <div className='foot'>
            <p > ~ Made wholly for learning purposes ~</p>
            <p>&copy; Chandana Chakilam 2023. All rights reserved.</p>
        </div>
        
        </div>
    )
}

export default Footer;