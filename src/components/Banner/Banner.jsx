import React from "react";
import { Button, Input, Typography } from "@material-tailwind/react";


const Banner = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <div className="relative h-[450px] flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat opacity-10">

            </div>
            <div className=" flex items-center justify-center  flex-col">
                <Typography className="mb-6 font-bold" variant="h2">I Grow By Helping People In Need</Typography>
                <div className="relative flex p-0  w-full max-w-[24rem]">
                    <Input
                        type="email"
                        label="Search here...."
                        value={email}
                        onChange={onChange}
                        className="p-0"
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                    <Button
                        size="sm"
                        className="!absolute right-0 py-3 bg-[#FF444A]  rounded-r-lg rounded-l-none normal-case"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;