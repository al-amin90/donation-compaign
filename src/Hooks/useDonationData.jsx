import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";


const useDonationData = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json")
            const data = await res.json();
            setData(data)
        };

        fetchData();
    }, [])

    if (navigation.state === "loading") return;
    return { data }
};

export default useDonationData;