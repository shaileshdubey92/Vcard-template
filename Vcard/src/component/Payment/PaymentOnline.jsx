import React from "react";
import PhoneNumberQRCode from "./PhoneNumberQRCode";
import "./payment.css";

const PaymentOnline = () => {
  const phoneNumber = "+918707853511";

  // Function to handle QR code download
  const handleDownloadQR = () => {
    // Logic to download QR code image
  };

  return (
    <div className="payment_container" data-aos="flip-down">
      <div className="whitebox w-[96%] m-auto text-black rounded p-6 flex items-center justify-between">
        <div>
          <h1 className="mt-3 ml-[100px] font-bold text-3xl text-center m-4">QR Code</h1>
          
          <div className="qr-code-icon m-8 text-center">
            {/* QR code icon */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUekbZzzImwhQynw7gd6r8qv6CzwOspNnzPg&usqp=CAU"
              alt=""
              className="w-50 h-25 m-auto mb-5"
            />
          </div>
        </div>

        <div className="text-center">
          {/* Rounded image */}
          <img
            src="https://www.itconductor.com/hubfs/New%20Site%202022/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png"
            alt="QR Code"
            className="rounded-full w-35 h-20 m-auto mb-5"
          />

          {/* Download QR button */}
          <button
            onClick={handleDownloadQR}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto"
          >
            Download My QR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOnline;
