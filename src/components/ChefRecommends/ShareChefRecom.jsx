
const ShareChefRecom = ({menu}) => {
      
     const { category, image, name, price, recipe } = menu || {};
    return (
      <div className="card bg-[#F3F3F3] shadow-xl">
        <img src={image} alt="Shoes" className="rounded-xl" />

        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="bg-[#E8E8E8] px-4 border-b-[4px] border-[#BB8506] rounded-md py-2">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
};

export default ShareChefRecom;