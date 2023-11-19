import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenus from "../../hooks/useMenus";
import MapingMenu from "../../Sheard/MapingMenu/MapingMenu";
import { useParams } from "react-router-dom";

import AppHealmet from "../../Sheard/AppHealmet/AppHealmet";

const OurShop = () => {

    

    const categoryArray = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams();
    const indexOf = categoryArray.indexOf(category)
    const [tabIndex,setTabIndex] = useState(indexOf)
    
    const [salad] = useMenus('salad');
    const [pizza] = useMenus('pizza');
    const [drinks] = useMenus('drinks');
    const [dessert] = useMenus('dessert');
    const [shoups,loading] = useMenus("soup");
    

    if(loading){
      return <span className="loading  absolute left-1/2 loading-spinner text-neutral"></span>;
    }

  return (
    <div>
      <AppHealmet title={"Distro || Order Food"}></AppHealmet>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Shoups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <MapingMenu meuns={salad}></MapingMenu>
        </TabPanel>

        <TabPanel>
          <MapingMenu meuns={pizza}></MapingMenu>
        </TabPanel>
        <TabPanel>
          <MapingMenu meuns={shoups}></MapingMenu>
        </TabPanel>
        <TabPanel>
          <MapingMenu meuns={drinks}></MapingMenu>
        </TabPanel>

        <TabPanel>
          <MapingMenu meuns={dessert}></MapingMenu>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
