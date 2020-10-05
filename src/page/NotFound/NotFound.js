import React from 'react'
import './NotFound.css'

function NotFound() {
    return (
        <div className="notFound">
            <div className="notFound__title">
                <span>404 Page not found</span>
            </div>
            <div className="notFound__container">
                <div className="notFound__scarecrow">
                    <img src="/assets/images/Scarecrow.png" alt="Scarecrow" className="notFound__scarecrowimg" />
                </div>
                <div className="notFound__body">
                    <p className="notFound__bads">I have bad news for you.</p>
                    <p className="notFound__bodsParagraph">The page you are looking for might be remove or is temporarily unavailable</p>
                    <button className="notFound__button">Back to home page</button>
                </div>
            </div>
            <div className="notFound__footer">
                <p>RobertoVR &#64; DevChallenges.io</p>
            </div>
        </div>
    )
}

export default NotFound
