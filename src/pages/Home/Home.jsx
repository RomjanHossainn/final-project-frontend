import FormOurMenu from "../../Sheard/FormOurMenu/FormOurMenu";
import Banner from "../../components/Banner/Banner";
import CategoryesFood from "../../components/CategoryesFood/CategoryesFood";
import ChefRecommends from "../../components/ChefRecommends/ChefRecommends";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryesFood></CategoryesFood>
            <FormOurMenu></FormOurMenu>
            <ChefRecommends></ChefRecommends>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;