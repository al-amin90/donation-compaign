import useDonationData from "../../Hooks/useDonationData";


const CategoryList = () => {
    const { data } = useDonationData();
    console.log(data);

    return (
        <div>
            {
                data.map((item) => <CategoryList key={item.id} item={item}></CategoryList>)
            }
        </div>
    );
};

export default CategoryList;