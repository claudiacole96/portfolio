import "./intro.scss";

export default function Intro({handleClick, currentSlide}) {
    return (
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <div className="introBox">
                <h2>Welcome!</h2>
                <h4>This is where you can type inspirational quotes and get one in return</h4>
                <h3>Click to begin</h3>
                <button onClick={handleClick}>Submit Quote</button>
            </div>
        </div>
    )
}