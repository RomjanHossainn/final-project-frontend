import ShareChefRecom from "../../components/ChefRecommends/ShareChefRecom";

const MapingMenu = ({meuns}) => {
    return (
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {meuns?.map((menu) => (
            <ShareChefRecom key={menu._id} menu={menu}></ShareChefRecom>
          ))}
        </div>
        
      </div>
    );
};

export default MapingMenu;