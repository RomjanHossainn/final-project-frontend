
const MenuCover = ({img,title,description}) => {
    console.log(img)
    return (
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: `url(${img})`,
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(74, 74, 74, 0.6)" }}
        >
          <div className="flex h-full  items-center justify-center">
            <div className="text-white bg-[#00000048] w-2/3 py-8 p-4">
              <h2 className="mb-4 text-4xl font-semibold">{title}</h2>
              <p className="mb-6 text-md ">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MenuCover;