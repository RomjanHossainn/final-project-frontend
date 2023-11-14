import { useEffect, useState } from "react";
import ShareChefRecom from "./ShareChefRecom";

const ChefRecommends = () => {

    const [menus,setMenus]= useState(null)

    const [isShow,setIsShow] = useState(true)

    useEffect(() => {
        fetch("/menu.json")
          .then((res) => res.json())
          .then((result) => {
            const filterMenu = result.filter(
              (menu) => menu.category === "popular"
            );
            setMenus(filterMenu);
          });
    },[])
    
    return (
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {isShow
            ? menus
                ?.slice(0, 3)
                .map((menu) => (
                  <ShareChefRecom key={menu._id} menu={menu}></ShareChefRecom>
                ))
            : menus?.slice(0,6).map((menu) => (
                <ShareChefRecom key={menu._id} menu={menu}></ShareChefRecom>
              ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsShow(!isShow)}
            className="bg-[#1F2937] px-5 py-2 rounded-md text-white"
          >
            {isShow ? "Show All" : "Not Show All"}
          </button>
        </div>
      </section>
    );
};

export default ChefRecommends;