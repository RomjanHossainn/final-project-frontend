
const SectionTitle = ({heading,subHeading}) => {
    return (
      <div className="text-center pb-8 w-1/4 mx-auto">
        <h2 className="text-[#D99904] py-2">{subHeading}</h2>
        <h5 className="border-y-2 py-3 text-3xl">{heading}</h5>
      </div>
    );
};

export default SectionTitle;