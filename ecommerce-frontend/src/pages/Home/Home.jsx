import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'
import './Home.scss';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Slider />
            <FeaturedProducts type="featured"/>
            <Categories/>
            <FeaturedProducts type="trending"/>
            <Footer/>
        </div>
    )
}

export default Home