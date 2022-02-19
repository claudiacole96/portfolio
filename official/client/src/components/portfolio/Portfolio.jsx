import "./portfolio.scss";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [projects, setProjects] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Designing"
        },
        {
            id: "brand",
            title: "Branding"
        }
    ];

    function getProjects(portfolioFilter) {
        axios.get(`/GetProjects/${portfolioFilter}`)
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        switch(selected) {
            case "featured":
                getProjects("featured");
                break;
            case "web":
                getProjects("web");
                break;
            case "mobile":
                getProjects("mobile");
                break;
            case "design":
                getProjects("design");
                break;
            case "brand":
                getProjects("brand");
                break;
            default:
                getProjects("featured");
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                {projects.map((i) => (
                    <div className="item">
                        <img 
                            src={i.img} 
                            alt="" 
                        />
                        <h3>{i.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}