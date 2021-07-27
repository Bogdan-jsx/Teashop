import React from "react";
import { Footer } from "../../components/footer";
import { FullHeader } from './../../components/fullHeader/index';
import { Shipping } from './../../components/shipping/index';
import { Payment } from './../../components/payment/index';

export const ShippingAndPaymentPage: React.FC = () => {
    return (
        <>
            <FullHeader />
            <div className="container">
                <Shipping />
                <Payment />
            </div>
            <Footer />
        </>
    )
}