import "./form.scss";

export default function Form({handleClick, handleSubmit, currentSlide}) {
    return (
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <div className="formDiv">
                <h4>Submit Quote</h4>
                <form>
                    <textarea name="" id="quoteText" cols="30" rows="10" maxLength={250}></textarea>
                    <h3 id="inputError"></h3>
                    <div className="buttons">
                        <button className="left" onClick={() => handleClick("back")}>Back</button>
                        <button className="right" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}