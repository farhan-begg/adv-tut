import React, {useState} from 'react'
import {links} from '../data'




const Accordion = () => {
    // 
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = links.map((link , index) => {
      
        return <div key={links.id}> 
            <div className="title active"

                onClick={()=> console.log('Title Clicked', index)}
            
            >
                <i className="dropdown icon"></i>
                 {link.text}
            </div>

            <div className="content active">
                <p>{link.url}</p>
            </div>
        </div>
    })


    return (
        <div className= "ui styled accordion">
           {renderedItems}
           <h1>{activeIndex}</h1>
        </div>
    )
}

export default Accordion
