
'use client';
import './WrappedButton.css';


const WrappedButton = ({ text, action, icon }) => {
    return (
        <div className="download-wrapper" onClick={action}>
            <div className="download-wrapper-button">
                <div className="download-button">
                    {icon}
                </div>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default WrappedButton;