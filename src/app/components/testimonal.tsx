"use client";
import { Card, CardHeader, CardBody, Avatar, Divider, extendVariants } from "@nextui-org/react";
import { testimonals } from "../data/testimonal";
import { Header } from "./header";

export const Testimonals = () => {
    return (
        <div>
            <div className="flex  w-full mt-8 lg:mt-16">
                <Header title="Testimonals" />
            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-5 mt-5 ${testimonals.length % 2 !== 0 ? 'lg:col-start-1 lg:col-end-3' : ''}`}>
                {testimonals.map((item, index) => (
                    <Card key={index} className="flex-1 max-w-[610px] bg-[#b1b1b166] pb-5 mb-5 mx-auto lg:mx-0">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                        <SRAvatar isBordered color="default" radius="full" size="md" src={item.src} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-900">{item.name}</h4>
                            <h5 className="text-small tracking-tight text-default-400">{item.desc}</h5>
                        </div>
                        </div>
                    </CardHeader>
                    <CardBody className="px-5 py-0 text-small text-default-900">
                        <p>
                        {item.content}
                        </p>
                    </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export const SRAvatar = extendVariants(Avatar, {
   
});