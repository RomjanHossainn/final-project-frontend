import { useEffect, useState } from "react";
import SingleMenu from "./SingleMenu";

import SectionHeading from "../../components/SectionTtile/SectionHeading";
import { Link } from "react-router-dom";

const FormOurMenu = ({ category}) => {
  console.log(category)
  const [menus, setMenus] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((result) => {
        const filterMenu = result.filter((menu) => menu.category === category);
        setMenus(filterMenu);
      });
  }, [category]);

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 py-12">
        {menus?.map((menu) => (
          <SingleMenu key={menu._id} menu={menu}></SingleMenu>
        ))}
      </div>
      <SectionHeading heading={"View Full  Menu"}></SectionHeading>
      <Link to={`/ourshop/${category}`} className="bg-[#E4A604] px-4 py-3 rounded-md text-white">Order Food</Link>
    </section>
  );
};

export default FormOurMenu;