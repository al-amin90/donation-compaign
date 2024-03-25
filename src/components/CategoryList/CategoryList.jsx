import { useLoaderData } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import CardDefault from "../Card/CardDefault";


const CategoryList = () => {
    const { data } = useDonationData();
    const allDonation = useLoaderData();
    console.log(allDonation);

    return (
        <div className="mt-24  grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
            {
                data.map((item) => <CardDefault item={item} key={item.id}></CardDefault>)
            }
        </div>
    );
};

export default CategoryList;