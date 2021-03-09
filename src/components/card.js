import React from 'react'

import metricsIco from '../icon/metrics.png'
import timeIco from '../icon/time.png'
import videoIco from '../icon/video.png'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Card = ({ id, title, img, thumb, playlist, stats, isActive, handleClick }) => {
    const imgPath = `/img/${img}`;
    const thumbPath = `/img/${thumb}`;

    return (
        <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className={"card ifit-card " + (isActive ? 'shadow-full active' : 'shadow-soft')} onClick={() => { handleClick(id) }}>
                <div className="position-relative">
                    <img className="card-img-top" src={imgPath} alt="img for {title}" />

                    {playlist && <div className="img-overlay d-flex flex-column justify-content-center">
                        <div className=" text-center d-flex flex-column justify-content-around h-50 text-bold">
                            <div className="overlay-number text-lg" >{playlist}</div>
                            <div className="text-uppercase" style={{ fontSize: "0.9em", fontWeight: "600" }}>workouts</div>
                            <div>
                                <img src={videoIco} width="32" className="" alt="watch video" />
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="card-body mt-2" >
                    <div className="d-flex justify-content-between align-items-start" style={{ height: "5em", Height: "5em", overflow: "hidden" }}>
                        <h2 className="card-title text-capitalize font-weight-bold" style={{ fontSize: "1.6em", fontWeight: "800" }}>{title}</h2>
                        <img className="ifit-card-thumb" src={thumbPath} width="42" alt="{title}" />
                    </div>
                    <p className="font-weight-bold initialism mt-0" style={{ fontSize: "0.9em", fontWeight: "800", minHeight: '18px' }}>
                        {stats && (<>
                            <span className=""><img src={timeIco} alt="time" width="18" className="mr-1" />{stats.time} </span>
                            <span className="ml-1"><img src={metricsIco} alt="time" width="18" className="mr-1" />{numberWithCommas(stats.metrics)} M</span>
                        </>)}
                    </p>
                    <div className="view-details">
                        {isActive && (<a href="#" className="card-details text-uppercase font-weight-bold" style={{ fontSize: "1.5em", fontWeight: "600" }}>view details</a>)}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card