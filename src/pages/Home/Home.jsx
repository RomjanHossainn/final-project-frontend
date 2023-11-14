import FormOurMenu from "../../Sheard/FormOurMenu/FormOurMenu";
import Banner from "../../components/Banner/Banner";
import CategoryesFood from "../../components/CategoryesFood/CategoryesFood";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryesFood></CategoryesFood>
            <FormOurMenu></FormOurMenu>
        </div>
    );
};

export default Home;