import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: "1",
            featured: false,
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            icon: "assets/down.png",
            name: "John",
            title: "CEO",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        },
        {
            id: "2",
            featured: true,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuYSHG0_bUUHWf_CNNdIgovMMcAxkTx1R4Q&usqp=CAU",
            icon: "assets/down.png",
            name: "Jane",
            title: "Entreprenuer",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        },
        {
            id: "3",
            featured: false,
            img: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
            icon: "assets/down.png",
            name: "Sam",
            title: "Business Owner",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
                <div className="container">
                    {data.map((d) => (
                        <div className={d.featured ? "card featured" : "card"}>
                            <div className="top">
                                <img src="assets/down-arrow.png" alt="" className="left"/>
                                <img src={d.img} alt="" className="user"/>
                                <img src={d.icon} alt="" className="right"/>
                            </div>
                            <div className="center">
                            {d.description}
                            </div>
                            <div className="bottom">
                                <h3>{d.name}</h3>
                                <h4>{d.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}