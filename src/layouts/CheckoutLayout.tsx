// dependencies
import { useState, type FC } from "react";
// interface/@types
interface FormInfo {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
}
interface PaymentPattern {
  method: string;
  cardNumber?: number;
  expiryDate?: string;
  cvc?: number;
}
// icons
import { ShieldCheck } from "lucide-react";
// components
import Typography from "../components/typography";
import InputBox from "../components/boxes/input";
import PaymentMethods from "../components/ui/paymentMethods";
import CheckoutProduct from "../components/ui/checkoutProduct";
import Button from "../components/ui/button";
// hooks
import useSlices from "../hooks/useSlices";
// data
const DELIVERY_FEE = 5;

// main
const CheckoutLayout: FC = () => {
  // redux
  const { data } = useSlices("globalController");
  const { cartDetails, totalPrice } = data;

  // form info
  const [formData, setFormData] = useState<FormInfo>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
  });
  // payment info
  const [paymentInfo, setPaymentInfo] = useState<PaymentPattern>({
    method: "credit/debit",
    cardNumber: 0,
    expiryDate: "",
    cvc: 0,
  });

  // total pay
  const totalCount = totalPrice + DELIVERY_FEE;
  const priceFields = [
    {
      title: "Subtotal",
      value: totalPrice,
    },
    {
      title: "Delivery",
      value: DELIVERY_FEE,
    },
  ];

  // handle edit data
  const handleField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle payment data (handles both radio selection and card detail inputs)
  const handleMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      ...formData,
      payment: { ...paymentInfo },
      total: totalCount,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full min-h-screen bg-[#E7F6F2]">
      {/* header */}
      <div className="mb-12">
        <Typography variant="subHead">Secure layout</Typography>
        <Typography className="mx-0 text-[#395B64] text-md font-medium">
          Complete your order with secure payment options.
        </Typography>
      </div>

      {/* inside body */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-12"
      >
        {/* Left Col */}
        <div className="flex-1 space-y-8">
          {/* form head */}
          <div className="bg-white p-8 rounded-xl border border-[#A5C9CA]/30 shadow-sm">
            <Typography variant="subHead" className="text-2xl mb-6">
              Delivery Details
            </Typography>

            {/* input fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <InputBox
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  changeFunc={handleField}
                  required
                />

                <InputBox
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  changeFunc={handleField}
                  required
                />
              </div>

              <InputBox
                name="address"
                type="text"
                placeholder="Street Address"
                changeFunc={handleField}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <InputBox
                  name="city"
                  type="text"
                  placeholder="City"
                  changeFunc={handleField}
                  required
                />

                <InputBox
                  name="zip"
                  type="text"
                  placeholder="ZIP Code"
                  changeFunc={handleField}
                  required
                />
              </div>
            </div>
          </div>

          {/* payments */}
          <div className="bg-white p-8 rounded-xl border border-[#A5C9CA]/30 shadow-sm">
            <Typography variant="subHead" className="text-2xl mb-6">
              Payment Method
            </Typography>

            {/* methods */}
            <PaymentMethods changeFunc={handleMethod} />
          </div>
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-100">
          <div className="bg-[#2C3333] text-white p-8 rounded-xl shadow-xl sticky top-28">
            <Typography variant="subHead" className="text-2xl text-white mb-6">
              Order Summary
            </Typography>

            {/* products */}
            <div className="space-y-4 mb-6">
              {cartDetails.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  product={{
                    image: item.image,
                    title: item.name,
                    quantity: item.quantity ?? 1,
                    price: item.price,
                  }}
                />
              ))}
            </div>

            {/* counts */}
            <div className="space-y-3 mb-8 text-[#A5C9CA]">
              {priceFields.map((item) => (
                <div key={item.title} className="flex justify-between">
                  <span>{item.title}</span>
                  <span>${item.value.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-xl font-black text-white pt-4 border-t border-[#395B64] mt-2">
                <span>Total</span>
                <span>${totalCount.toFixed(2)}</span>
              </div>
            </div>

            {/* actions */}
            <Button
              type="submit"
              variant="primary"
              className="text-lg font-black bg-[#A5C9CA] text-[#2C3333] hover:bg-[#E7F6F2] mb-4"
            >
              Confirm & Pay
            </Button>

            {/* info */}
            <div className="flex items-center justify-center gap-2 text-[#A5C9CA] text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>256-bit Secure Encryption</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutLayout;
