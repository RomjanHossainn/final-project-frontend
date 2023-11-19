import { Helmet } from "react-helmet-async";

const AppHealmet = ({title}) => {
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </>
    );
};

export default AppHealmet;