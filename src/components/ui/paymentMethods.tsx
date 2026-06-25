// dependencies
import { useState, type ChangeEvent, type FC } from "react";
// interface/@types
type PaymentMethodsProps = {
  changeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
};
// icons
import { Banknote, CreditCard, Truck } from "lucide-react";
// components
import InputBox from "../boxes/input";

// main
const PaymentMethods: FC<PaymentMethodsProps> = ({ changeFunc }) => {
  // local state
  const [show, setShow] = useState<string>("credit/debit");
  const visible = show === "credit/debit";

  return (
    <div className="space-y-4">
      {/* Method 1 */}
      <label className="flex items-center gap-4 p-5 rounded-2xl bg-[#E7F6F2] hover:bg-[#A5C9CA]/20 cursor-pointer">
        <input
          type="radio"
          name="method"
          value={"credit/debit"}
          className="w-5 h-5 text-[#395B64] focus:ring-[#395B64]"
          onChange={(e) => {
            setShow(e.target.value);
            changeFunc(e);
          }}
          defaultChecked
        />
        <CreditCard className="w-6 h-6 text-[#395B64]" />
        <div className="flex-1">
          <h4 className="font-bold text-[#2C3333]">Credit / Debit Card</h4>
          <p className="text-sm text-[#395B64]">Secure online processing</p>
        </div>
      </label>

      {/* Card Details - method 1 (Visible when selected) */}
      {visible && (
        <div className="px-4 md:px-8 py-2 space-y-4">
          <InputBox
            name="cardNumber"
            type="number"
            placeholder="Card Number"
            changeFunc={changeFunc}
          />
          <div className="grid grid-cols-2 gap-4">
            <InputBox
              name="expiryDate"
              type="text"
              placeholder="MM/YY"
              changeFunc={changeFunc}
            />
            <InputBox
              name="cvc"
              type="number"
              placeholder="CVC"
              changeFunc={changeFunc}
            />
          </div>
        </div>
      )}

      {/* Method 2 */}
      <label className="flex items-center gap-4 p-5 rounded-2xl border-2 border-transparent bg-[#E7F6F2] hover:bg-[#A5C9CA]/20 cursor-pointer transition-colors">
        <input
          type="radio"
          name="method"
          value={"cashOnDelivery"}
          className="w-5 h-5 text-[#395B64] focus:ring-[#395B64]"
          onChange={(e) => {
            setShow(e.target.value);
            changeFunc(e);
          }}
        />
        <Truck className="w-6 h-6 text-[#395B64]" />
        <div className="flex-1">
          <h4 className="font-bold text-[#2C3333]">Cash on Delivery</h4>
          <p className="text-sm text-[#395B64]">Pay when it arrives</p>
        </div>
      </label>

      {/* Method 3 */}
      <label className="flex items-center gap-4 p-5 rounded-2xl border-2 border-transparent bg-[#E7F6F2] hover:bg-[#A5C9CA]/20 cursor-pointer transition-colors">
        <input
          type="radio"
          name="method"
          value={"localPayment"}
          className="w-5 h-5 text-[#395B64] focus:ring-[#395B64]"
          onChange={(e) => {
            setShow(e.target.value);
            changeFunc(e);
          }}
        />
        <Banknote className="w-6 h-6 text-[#395B64]" />
        <div className="flex-1">
          <h4 className="font-bold text-[#2C3333]">Local Store Pickup</h4>
          <p className="text-sm text-[#395B64]">Pay in cash at our shop</p>
        </div>
      </label>
    </div>
  );
};

// exports
export default PaymentMethods;
