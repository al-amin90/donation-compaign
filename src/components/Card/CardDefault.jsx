import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardDefault = ({ item }) => {
    const { id, title, category, image, cardBg, textColor, categoryBg } = item;

    return (
        <Link to={`/donation-details/${id}`}>
            <Card style={{ backgroundColor: cardBg }} className={`rounded-lg cursor-pointer overflow-hidden h-full`}>
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        src={image}
                        alt="ui/ux review check"
                    />
                </CardHeader>
                <CardBody className="flex-grow">
                    <Button style={{ color: textColor, backgroundColor: categoryBg }} size="sm" className={`rounded-md capitalize mb-3 font-medium tracking-wider`}>{category}</Button>
                    <Typography style={{ color: textColor }} className="text-xl font-semibold " color="blue-gray ">
                        {title}
                    </Typography>
                </CardBody>
            </Card>
        </Link>
    );
};

export default CardDefault;