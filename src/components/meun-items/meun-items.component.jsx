import React from 'react'
import './meun-items.style.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title,imageUrl,size,linkUrl,match,history}) => {
    return (
       
            <div
            style={{backgroundImage: 'url(' + imageUrl + ')'}}
            className={`meun-items ${size}`}
            onClick={() => history.push(`${match.path}${linkUrl}`)}
            >
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle" >SHOP NOW</span>
                </div>
            </div>
        
    )
}

export default withRouter(MenuItem);
