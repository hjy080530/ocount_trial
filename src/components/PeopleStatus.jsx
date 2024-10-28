import React from 'react';
import StatusDiv from './StatusDiv.jsx';
import statusDot from '../image/statusDot.svg';
import statusMany from '../image/statusMany.svg';
import statusManyEleBig from '../image/statusManyEleBig.svg';
import statusManyEleSmall from '../image/statusManyEleSmall.svg';
import statusNoone from '../image/statusNoone.svg';
import statusNotMany from '../image/statusNotMany.svg';
import statusNotManySpring from '../image/statusNotManySpring.svg';
import statusNotManyStar from '../image/statusNotManyStar.svg';
import statusSome from '../image/statusSome.svg';
import statusStarBig from '../image/statusStarBig.svg';
import statusStarSmall from '../image/statusStarSmall.svg';
import './PeopleStatus.css';


const PeopleStatus = () => {
    const person =9; 

    return (
        <>
            {person === 0 && (
                <StatusDiv version="primary">
                    <div className='status-div-inner-sort'>
                        <div className="status-textDiv1">
                            <p className="status-text">아리소리에 사람이 <br /> 없어요!</p>
                        </div>
                        <div className="status-dots-sort">
                            <img src={statusDot} className='status-dots' alt="statusDot" />
                            <img src={statusDot} className='status-dots'alt="statusDot" />
                            <img src={statusDot} className='status-dots'alt="statusDot" />
                        </div>
                        <div className="status-noone">
                            <img src={statusNoone} className='status-noone-img' alt="statusNoone" />
                        </div>
                    </div>
                </StatusDiv>
            )}
            {person > 0 && person <= 5 && (
                <StatusDiv version="secondary">
                    <div className='status-div-inner-sort'>
                        <div className="status-textDiv2">
                            <p className="status-text">아리소리에 사람이<br />  많지 않아요!</p>
                        </div>
                        <img src={statusStarBig} className='status-star-big' alt="statusStarBig" />
                        <img src={statusStarSmall} className='status-star-small' alt="statusStarSmall" />
                        <img src={statusSome} className='status-some' alt="statusSome" />
                    </div>
                </StatusDiv>
            )}
            {person > 5 && person <= 10 && (
                <StatusDiv version="thirdary">
                    <div className="status-textDiv3">
                        <p className="status-text-Not-Many">아리소리에 사람이<br />어느 정도<br />있어요</p>
                        <img src={statusNotManyStar}className="statusNotManyStar" alt="statusNotManyStar" />
                        <img src={statusNotManySpring} className="statusNotManySpring" alt="statusNotManySpring" />
                        <img src={statusNotMany} className='statusNotMany'alt="statusNotMany" />
                    </div>
                </StatusDiv>
            )}
            {person > 10 && ( 
                <StatusDiv version="fourthdary">
                    <div className="status-div-inner-sort">
                        <div className="status-textDiv4">
                            <p className="status-text-right">아리소리에 사람이<br />많아요!</p>
                        </div>
                        <img src={statusMany} className='statusMany' alt="statusMany" />
                        <img src={statusManyEleBig}  className='statusManyEleBig' alt="statusManyEleBig" />
                        <img src={statusManyEleSmall} className='statusManyEleSmall' alt="statusManyEleSmall" />
                    </div>
                </StatusDiv>
            )}
        </>
    );
};

export default PeopleStatus;