import React from "react"
import "./News.css"
import LeftBlockNews from "./LeftSideBlock/LeftBlockNews.js"
import RightSideNews from "./RightSideBlock/RightSideNews.js"

let News = () => {

    return(

        <div>

                <div className="News">

                        <div className="title__block">

                        <h1>news</h1>

                        </div>


                        <div className="container_block_news">


                        <div className="block__news">


                                <LeftBlockNews 
                                imgNews = "./img/news/news.jpg" 
                                info = "playing"
                                info1 = "Bejami Evlent"
                                datenews = "23 days ago"
                                views = "2.7K Views"
                                title = "Ko Lipe is the only inhabited and incredibly beautiful island of the Tarutao archipelago, located on the border of Thailand and Malaysia. Located in the Andaman Sea."
                                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac massa urna. Nullam posuere nisi eget ante tincidunt scelerisque. Vivamus sit amet consequat quam. Vestibulum ante ipsum primis in faucibus orci luctus"/>


                        </div>
                        <div className="right_side_news">

                            <div className="right_sideRotate_news">

                                    <div className="block_right_side_news">

                                        <img src="./img/news/news1.jpg" alt="" />
                                    </div>
                                    


                                <RightSideNews   
                                imgRightSideNews = "./img/news/news2.jpg"
                                textNews = "was at Lake Baikal - a huge ancient lake in the mountains of Siberia north of the Mongolian border."/>
                                <RightSideNews   
                                imgRightSideNews = "./img/news/img.jpg"
                                textNews = "was in the garden of Kawachi Fuji - this place can be safely called one of the most beautiful places in the world"/>
                                <RightSideNews   
                                imgRightSideNews = "./img/news/me.jpg"
                                textNews = "was in the Masai Mara National Park - this huge reserve, the main attraction of Kenya"/>
                        
                            </div>


                        </div>


                        </div>

                        
                        


                </div>


        </div>

    )

}

export default News;