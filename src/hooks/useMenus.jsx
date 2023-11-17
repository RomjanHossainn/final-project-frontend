import { useEffect, useState } from "react";

const useMenus = (filterData) => {
    
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:5000/menus")
          .then((res) => res.json())
          .then((result) => {
            const data = result.filter((res) => res.category === filterData);
            setData(data);
            setLoading(false)
          });
    },[filterData])
    
    return [data,loading];
};

export default useMenus;