import React from 'react'
import '../index.css';

function Card(props) {

    return (
        <>
            <div className="cards">
                <div className="card">
                    < img src={props.imgsrc}
                        alt="AZZARO CHROME" className="card_img" />
                    <div className="card_info">
                        <span className="card_category"> {props.title}</span>
                        <h3 className="card_title"> </h3>
                        <a href={props.link} target="">
                            <button> Add to Cart</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card; 