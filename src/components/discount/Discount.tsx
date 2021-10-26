import "./discount.scss"
import Iframe from 'react-iframe'

export default function Discount() {
    return (
        <div className = "discount">
            <div className="discountContent">
                {/* <span className="discountTitle">DRAIN THE SWAMP</span> */}
                <hr className="discountLine" />
                <div className="discountPage">
                    <Iframe 
                        url="https://logwork.com/widget/countdown?text=November%202nd%2C%202021%20%40%2010PM%20UTC&timezone=America%2FNew_York&width=550&style=&uid=864823&loc=https://logwork.com/countdown-qjr6&language=&textcolor=%23ffffff&background=&date=2021-11-02%2018%3A00&digitscolor=&unitscolor=%23ffffff&url=nullsrcdoc"
                        className="discountSite"
                        scrolling="no"
                    />
                </div>
            </div>
            
        </div>
    )
}
