
import FormOurMenu from "../../Sheard/FormOurMenu/FormOurMenu";
import Banner from "../../components/Banner/Banner";
import CategoryesFood from "../../components/CategoryesFood/CategoryesFood";
import ChefRecommends from "../../components/ChefRecommends/ChefRecommends";
import Testimonial from "../../components/Testimonial/Testimonial";
import SectionTitle from "../../components/SectionTtile/SectionTitle";
import AppHealmet from "../../Sheard/AppHealmet/AppHealmet";

const Home = () => {

    return (
      <div>
        
        <AppHealmet title={'Bistro || Home'}></AppHealmet>
        <Banner></Banner>
        <CategoryesFood></CategoryesFood>

        <div>
          <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
          ></SectionTitle>
          <FormOurMenu category={"popular"}></FormOurMenu>
        </div>

        <ChefRecommends></ChefRecommends>
        <Testimonial></Testimonial>
      </div>
    );
};

export default Home;