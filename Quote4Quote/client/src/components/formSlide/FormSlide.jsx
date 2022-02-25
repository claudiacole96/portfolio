import { useState } from 'react';
import "./formSlide.scss";
import Intro from "../intro/Intro.jsx"
import Form from "../form/Form.jsx"
import Result from "../result/Result.jsx"
import FlagBox from '../flagBox/FlagBox.jsx';
import axios from "axios"

export default function FormSlide() {

    //state
    const [currentSlide, setCurrentSlide] = useState(0);
    const [randomQuote, setRandomQuote] = useState([""]);
    const [flagOpen, setFlagOpen] = useState(false);

    //flag functions
    const closeOpenFlag = () => {
        setFlagOpen(flagOpen === false ? true : false);
    };

    const handleFlag = (quoteID) => {
        axios.put(`/flagQuote/${quoteID}`)
            .then(res => {
                closeOpenFlag();
                setRandomQuote(["Quote has been removed."]);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    //like functions
    const likeQuote = (quoteID) => {
        console.log(quoteID)
        let icon = document.getElementById("heart");
        if (icon.classList.contains("selected")) {
            icon.classList.remove("selected");
            axios.put(`/unlikeQuote/${quoteID}`)
                .then(res => {
                    console.log(res.data)
                    getQuote(quoteID)
                })
                .catch(err => console.log(err))
        } else {
            icon.classList.add("selected")
            axios.put(`/likeQuote/${quoteID}`)
                .then(res => {
                    console.log(res.data)
                    getQuote(quoteID)
                })
                .catch(err => console.log(err))
        };
    };

    //pull quote/update state
    const getQuote = (quoteID) => {
        if (quoteID) {
            axios.get(`/refreshQuote/${quoteID}`)
                .then(res => {
                    setRandomQuote(res.data)
                })
                .catch(err => console.log(err))
        } else {
            axios.get(`/getQuote`)
                .then(res => {
                    setRandomQuote(res.data)
                })
                .catch(err => console.log(err))
        };
    };

    //add new quote to db and update state
    const handleQuote = (value) => {
        //push value to database
        axios.post(`/addQuote/${value}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        //pull random quote from db
        getQuote();
        setCurrentSlide(currentSlide + 1)
    }

    //handle form submit following with function to add quote and update state
    const handleSubmit = (e) => {
        e.preventDefault();

        const quoteText = document.getElementById("quoteText");
        let h3 = document.getElementById("inputError");

        if (quoteText.value) {
            handleQuote(quoteText.value);
            quoteText.value = "";
            h3.innerHTML = "";
        } else {
            h3.innerHTML = "Field must be valid before submit";
        }
    }

    //handle slide changes
    const handleClick = (button, e) => {
        button === "back"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
    }

    return (
        <div className="formSlide">
            <div className="slider">
                <Intro handleClick={handleClick} currentSlide={currentSlide}/>
                <Form handleClick={handleClick} handleSubmit={handleSubmit} currentSlide={currentSlide}/>
                <Result 
                handleClick={handleClick} 
                currentSlide={currentSlide} 
                getQuote={getQuote} 
                randomQuote={randomQuote}
                likeQuote={likeQuote}
                closeOpenFlag={closeOpenFlag}/>
            </div>
            <FlagBox 
            flagOpen={flagOpen} 
            closeOpenFlag={closeOpenFlag}
            handleFlag={handleFlag}
            randomQuote={randomQuote}/>
        </div>
    )
}