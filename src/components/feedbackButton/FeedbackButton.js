import React from 'react';

const FeedbackButton = ({ onHandleClick }) => {
    return (
        <>
            <button onClick={onHandleClick} type="button" name="good">GOOD</button><br />
            <button onClick={onHandleClick} type="button" name="neutral">NEUTRAL</button><br />
            <button onClick={onHandleClick} type="button" name="bad">BAD</button><br />
        </>
    );
}

export default FeedbackButton;