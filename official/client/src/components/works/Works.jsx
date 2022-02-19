import { useState } from "react"
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "https://img.favpng.com/10/2/21/computer-icons-at-sign-symbol-clip-art-png-favpng-ybA5V2LdzFa7P7ey3FQMc5fLy.jpg",
            title: "Something1",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
            img: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg",
        },
        {
            id: "2",
            icon: "https://i.pinimg.com/originals/02/cd/6d/02cd6d546a9c9d1ab35b487f82df16f7.png",
            title: "Something2",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
            img: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg",
        },
        {
            id: "3",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png",
            title: "Something3",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
            img: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg",
        },
    ];

    const handleClick = (direction) => {
        direction === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.description}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/down-white.png" alt="" className="arrow left" onClick={() => handleClick("left")}/>
            <img src="assets/down-white.png" alt="" className="arrow right" onClick={() => handleClick("right")}/>
        </div>
    )
}