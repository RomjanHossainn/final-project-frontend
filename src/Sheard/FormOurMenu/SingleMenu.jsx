
const SingleMenu = ({menu}) => {
    const { category, image, name, price, recipe } = menu || {};
    return (
      <div className="flex gap-5">
        <img src={image} className="max-w-[150px] rounded-r-full  rounded-bl-full" alt="" />
        <div>
          <h3>{name}--------------</h3>
          <p className="text-[#737373]">{recipe}</p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    );
};

export default SingleMenu;