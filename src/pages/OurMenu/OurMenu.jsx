import { Helmet} from "react-helmet-async";
import MenuCover from "../../Sheard/MenuCover/MenuCover";
import banner3 from '../../assets/menu/banner3.jpg'
import dechert from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import TodayOffer from "../../Sheard/TodyOffer/TodayOffer";
import FormOurMenu from "../../Sheard/FormOurMenu/FormOurMenu";
const OurMenu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>

      <div className=" space-y-10">
        <MenuCover
          title={"OUR MENU"}
          description={"Would you like to try a dish?"}
          img={banner3}
        ></MenuCover>
        <TodayOffer></TodayOffer>
        <FormOurMenu category={"dessert"}></FormOurMenu>
        <MenuCover
          img={dechert}
          title={"DESSERTS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCover>
        <FormOurMenu category={"pizza"}></FormOurMenu>
        <MenuCover
          img={pizza}
          title={"PIZZA"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCover>
        <FormOurMenu category={"salad"}></FormOurMenu>
        <MenuCover
          img={salad}
          title={"SALADS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCover>
        <FormOurMenu category={"soup"}></FormOurMenu>
        <MenuCover
          img={soup}
          title={"SOUPS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCover>
        <FormOurMenu category={"offered"}></FormOurMenu>
      </div>
    </>
  );
};

export default OurMenu;
