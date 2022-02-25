import "./result.scss";
import { AiFillHeart } from 'react-icons/ai';
import { BsFillDice6Fill } from 'react-icons/bs';
import { FaFlag } from 'react-icons/fa';

export default function Result({
        handleClick, 
        currentSlide, 
        getQuote, 
        randomQuote,
        likeQuote,
        closeOpenFlag
    }) {

    return (
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <div className="resultBox">
                <h2>Quote 4 You</h2>
                <div className="results">
                    <div className="icons">
                        <div className="likes">
                            <i id="heart" onClick={() => likeQuote(randomQuote[0].id)}>
                                <AiFillHeart/>
                                <span>{randomQuote[0].likes}</span>
                            </i>
                        </div>
                        <i className="flag" onClick={closeOpenFlag}><FaFlag/></i>
                    </div>
                    <h3 id="quoteResult" className={!randomQuote[0].quoteText ? "removed" : " "}>{
                        randomQuote[0].quoteText
                        ? randomQuote[0].quoteText
                        : randomQuote[0]
                    }</h3>
                    <i className="dice" onClick={() => getQuote()}><BsFillDice6Fill/></i>
                </div>
                <button onClick={handleClick}>Submit Another Quote</button>
            </div>
        </div>
    )
}