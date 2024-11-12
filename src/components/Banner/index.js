import './Banner.css'
import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <header className="banner">
            <img src={bannerImg} alt="Banner principal"/>
        </header>
    )
}

export default Banner