import { useState,useEffect } from "react";

const useRestrauntMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
 
    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.3567316&lng=85.8201246&restaurantId=" + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );

        const json = await data.json();

        setresInfo(json.data);
    }

    return resInfo;

}

export default useRestrauntMenu;