import React from 'react';
import Button from './Button';

function BusinessProjectPreview({businessProject, onSeeMore, onCheckStatus}) {
    const {status, logo, business, description, team_size, end_date, category, location} = businessProject;

    const renderCategory = () => {
        if (!category) {
            return null;
        }
        return category.map((cat, index) => {
            return (
                <div
                    key={index}
                    className="category"
                >
                    {cat}
                </div>)
        })
    }

    const renderStatus = () => {
        if ( status !== 'open') {
            return <Button
                label={"Check Status"}
                variant={"secondary"}
                onClick={onCheckStatus}
            />
    }}

    const renderStatusLabel = () => {
        if ( status !== 'open') {
            return <p>"You have already applied"</p>
    }}

    return (
        <div className="business-project-preview">
            <div className="title-container">
                <img src={logo} alt="project's logo"/>
                <h2>{business.business_name}</h2>
                {renderStatusLabel()}
            </div>
            <div className="body-container">
                <div>
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <h3>Team Member</h3>
                    <p>{team_size}</p>
                    <h3>Due date</h3>
                    <p>{end_date}</p>
                </div>
                <div>
                    <h3>Category</h3>
                    {renderCategory()}
                </div>
                <div className="button-container">
                    <h3>Location</h3>
                    <p>{location}</p>
                    <div className={"button-wrapper"}>
                        {renderStatus()}
                        <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProjectPreview;
