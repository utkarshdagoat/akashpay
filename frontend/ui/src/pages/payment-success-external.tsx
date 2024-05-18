import SuccessfulPayment from "@/components/payments/success";
import styles from "./pages.module.css";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { useClientSecretStore, useStripePromiseStore } from "@/hooks/useStore";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { externalConvertToNobleAPI, externalConvertToOSMOAPI } from "@/lib/endpoints";
import SuccessfulExternalPayment from "@/components/payments/success-external";

export default function PaymentSuccessExternal() {
  const { stripePromise } = useStripePromiseStore()
  const options: StripeElementsOptions = {
    appearance: {
      theme: "night",
      variables: {
        colorPrimary: "#ff414c",
        colorBackground: "#1c1c1c",
      },
    }
  };
  return (
    <div className={`${styles.checkerboard_bg}`}>
      <div className={`h-screen w-full bg-black/40 flex items-center justify-center`}>
        <Elements options={options} stripe={stripePromise} >        
          <SuccessfulExternalPayment /> 
        </Elements>
      </div>
    </div>
  );
}
