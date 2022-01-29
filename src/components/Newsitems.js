import React, { Component } from 'react'

const Newsitems=(props)=> {
        let {title , description,imageUrl,newsUrl,author,date} =props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img className="card-img-top" src={!imageUrl?"https://images.livemint.com/img/2021/11/09/600x338/INDIA-AUTOS-ELECTRIC-1_1636471644971_1636471669773.JPG":imageUrl} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default Newsitems
