import "./portfolio.scss";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio({darkmode}) {

    const [selected, setSelected] = useState("featured");
    const [projects, setProjects] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web Design"
        },
        {
            id: "react",
            title: "React App"
        },
        {
            id: "api",
            title: "API"
        },
        {
            id: "blog",
            title: "Blog"
        },
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
            case "react":
                getProjects("mobile");
                break;
            case "api":
                getProjects("design");
                break;
            case "blog":
                getProjects("brand");
                break;
            default:
                getProjects("featured");
        }
    }, [selected]);

    return (
        <div className={"portfolio " + (darkmode && "dark")} id="portfolio">
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