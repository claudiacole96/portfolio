import "./flagBox.scss";
import { FaFlag } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

export default function FlagBox({flagOpen, closeOpenFlag, handleFlag, randomQuote}) {
    return (
        <div className={"flagBoxDiv " + (flagOpen && "open")}>
            <i className="closeFlag" onClick={closeOpenFlag}><ImCross/></i>
            <i className="flagLogo"><FaFlag/></i>
            <div className="verification">
                <h4>Are you sure you want to flag this quote?</h4>
                <h4 className="note">Note: once the quote is flagged, the quote will no longer be available to user view and will be reviewed for possible removal.</h4>
            </div>
            <button onClick={() => handleFlag(randomQuote[0].id)}>Yes, Flag</button>
        </div>
        
    )
}