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
    const person = 11; // 예시 값, 필요에 따라 변경 가능

    return (
        <>
            {person === 0 && (
                <StatusDiv version="primary">
                    <div className="status-textDiv1">
                        <p className="status-text">아리소리에 사람이 <br /> 없어요!</p>
                    </div>
                        <div className="status-dots">
                            <img src={statusDot} alt="statusDot" />
                            <img src={statusDot} alt="statusDot" />
                            <img src={statusDot} alt="statusDot" />
                    </div>
                    <div className="status-noone">
                        <img src={statusNoone} alt="statusNoone" />
                    </div>
                </StatusDiv>
            )}
            {person > 0 && person <= 5 && (
                <StatusDiv version="secondary">
                    <div className="status-textDiv2">
                        <p className="status-text">아리소리에 사람이<br />  많지 않아요!</p>
                    </div>
                    <div className="sortStarB">
                        <img src={statusStarBig} alt="statusStarBig" />
                    </div>
                    <div className='sortStarS'>
                        <img src={statusStarSmall} alt="statusStarSmall" />
                    </div>
                    <div className='statusSome'>
                        <img src={statusSome} alt="statusSome" />
                    </div>
                </StatusDiv>
            )}
            {person > 5 && person <= 10 && (
                <StatusDiv version="thirdary">
                    <div className="status-textDiv3">
                    <p className="status-text">아리소리에 사람이<br />어느 정도<br />있어요</p>
                    </div>
                    <div className="statusNotManySpring">
                        <img src={statusNotManySpring} alt="statusNotManySpring" />
                    </div>
                    <div className="statusNotManyStar">
                        <img src={statusNotManyStar} alt="statusNotManyStar" />
                    </div>
                    <div className='statusNotMany'>
                        <img src={statusNotMany} alt="statusNotMany" />
                    </div>
                </StatusDiv>
            )}
            {person > 10 && ( 
                <StatusDiv version="fourthdary">
                    <div className="status-textDiv4">
                        <p className="status-text-right">아리소리에 사람이<br />많아요!</p>
                    </div>
                    <div className='statusMany'>
                        <img src={statusMany} alt="statusMany" />
                    </div>
                    <div className='statusManyEleBig'>
                        <img src={statusManyEleBig} alt="statusManyEleBig" />
                    </div>
                    <div className='statusManyEleSmall'>
                        <img src={statusManyEleSmall} alt="statusManyEleSmall" />
                    </div>
                </StatusDiv>
            )}
        </>
    );
};//CSA

export default PeopleStatus;