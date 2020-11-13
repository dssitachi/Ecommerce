import React from 'react'
import PropTypes from 'prop-types';

const Rating = ({ value, text }) => {
    
    const ratingArray = [0, 0, 0, 0, 0]
    let i = 0, j= 0;
    while (i < 5 && value >= 1) {
        ratingArray[i] = 1;
        i++;
        value = value - 1;
    }

    if (i < 5 && value > 0) ratingArray[i] = 0.5;
    
    return (
        <div className="rating">
            { ratingArray.map(v =>  {
                return (  
                <span key={j++}>
                    <i style={{color:'#f8e825'}} className={v >= 1 ?
                        'fas fa-star' :
                        v >= 0.5 ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                    ></i>
                </span>
                )
            })
        }
           
            <span> {text && text }</span>
        </div>
    )
}

Rating.propTypes = {
    value : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
}
export default Rating
