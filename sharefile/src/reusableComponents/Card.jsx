import React, { useState } from 'react';
const Card = (props) => {
    const [isActive, setActive] = useState(false);
    const handleActive = () => {
        isActive ? setActive(false) : setActive(true);
    }
    return (
        <div className="card-container">
            <div className="card-action">
                <div>
                    {!isActive ? <i class="far fa-star" onClick={handleActive}></i>
                        :
                        <i class="fas fa-star active" onClick={handleActive}></i>}
                </div>
                <i class="fas fa-ellipsis-v"></i>
            </div>
            <div className="file-info">
                <div>
                    <i class="fas fa-file-pdf"></i>
                </div>
                <small>{props.name}.pdf</small>
            </div>
            <hr style={{ marginTop: 35 }} />
            <div className="fs-i">
                <div>
                    <small>file size</small>
                    <small>32MB</small>
                </div>
                <button>S</button>
            </div>
        </div>
    )
}

export default Card;