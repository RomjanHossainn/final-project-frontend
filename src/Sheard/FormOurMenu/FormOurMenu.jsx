import { useEffect, useState } from "react";
import SingleMenu from "./SingleMenu";
import SectionTitle from "../../components/SectionTtile/SectionTitle";

const FormOurMenu = () => {
    const [menus,setMenus] = useState(null);
    useEffect(() => {
        fetch('/menu.json')
        .then(res => res.json())
        .then(result => {
            const filterMenu = result.filter(
              (menu) => menu.category === "popular"
            );
            setMenus(filterMenu)
        })
    },[])

    
    
    return (
      <section>
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 py-12">
          {menus?.map((menu) => (
            <SingleMenu key={menu._id} menu={menu}></SingleMenu>
          ))}
        </div>
      </section>
    );
};

export default FormOurMenu;