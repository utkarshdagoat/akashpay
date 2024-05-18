import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { AnimatedGradientText } from "@/components/animated-gradient-text";

import Metadata from "@/components/payments/metadata";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import stripeLogo from "@/assets/stripe.svg";
import styles from "@/components/components.module.css";
import CheckoutForm from "@/components/payments/stripeCheckout";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import keplrIcon from "@/assets/keplr-icon.svg";
import KycExternal from "@/components/kyc/kyc-external";
import { externalGetData, externalStripePaymentAPI } from "@/lib/endpoints";
import ExternalCheckoutForm from "@/components/payments/externalStripeCheckout";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow { }
}

const PK_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripe = loadStripe(PK_KEY);

export default function ApiPaymentGateway() {
  const [walletAddress, setWalletAddress] = useState("");
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  const token  = new URLSearchParams(window.location.search).get('token') || '';
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState<Date>();
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [idFront, setIdFront] = useState("");
  const [idBack, setIdBack] = useState("");
  const [selfieWithId, setSelfieWithId] = useState("");
  const [city, setCity] = useState("")

  const [clientSecret, setClientSecret] = useState("");
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [AKTAmount, setAKTAmount] = useState(0);
  const [paymentClickedStripe, setPaymentClickedStripe] = useState(false);
  useEffect(()=>{
    console.log(token)
    async function fetchData(){
      axios.defaults.headers.common['Access-Token'] = `Bearer ${token}`
      axios.defaults.headers.common['X-TXC-TIMESTAMP'] = Date.now()
      const res = await axios.get(externalGetData);
      const data = res.data
      console.log(data)
      setWalletAddress(data.wallet)
      setExchangeAmount(data.amount)
    }
    fetchData()
  },[])

  const handleStripePayment = async () => {
    try {
      const response = await axios.post(externalStripePaymentAPI, {
        amount: exchangeAmount,
        userData:{
          email: email,
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          address: address,
          postalCode: postalCode,
          state: state,
          country: country,
          idFront: idFront,
          idBack: idBack,
          selfieWithId: selfieWithId,
          city: city
        }
      },{
        headers:{
          "Access-Token": `Bearer ${token}`,
          "X-TXC TIMESTAMP": Date.now(),
        }
      });
      const data = await response.data;
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
    setPaymentClickedStripe(true);
  };


  const options: StripeElementsOptions = {
    appearance: {
      theme: "night",
      variables: {
        colorPrimary: "#ff414c",
        colorBackground: "#1c1c1c",
      },
    },
    clientSecret: clientSecret,
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {paymentClickedStripe ? (
        <Elements stripe={stripe} options={options}>
          <ExternalCheckoutForm email={email} token={token} />
        </Elements>
      ) : (
        <div
          className={`p-1 bg-gradient-to-br w-[400px] from-gradient_1/80 via-purple-500/80 to-gradient_2/80 ${styles.animate_gradient} rounded-xl`}
        >
          <Card className="p-2 shadow-xl border">
            <CardHeader>
              <CardTitle>
                Get <AnimatedGradientText text="AKT" /> Tokens
              </CardTitle>
              <CardDescription>Fiat to deployment currency</CardDescription>
            </CardHeader>
            <CardContent>
              <InputBoxes
                exchangeAmount={exchangeAmount}
                AKTAmount={AKTAmount}
                setExchangeAmount={setExchangeAmount}
                setAKTAmount={setAKTAmount}
              />
              <Metadata />
              <div className="flex flex-row gap-2 my-4">
                <Input
                  className="basis-5/6"
                  defaultValue={walletAddress}
                  placeholder="Wallet Address"
                  onChange={() => setWalletAddress(walletAddress)}
                />
                <div className="p-1/2 rounded-md bg-gradient-to-b from-teal-500/60 to-violet-500/60">
                </div>
              </div>
              <KycExternal
                setPaymentDisabled={setPaymentDisabled}
                email={email}
                setEmail={setEmail}
                loading={loading}
                setLoading={setLoading}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                dob={dob}
                setDob={setDob}
                address={address}
                setAddress={setAddress}
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                state={state}
                setState={setState}
                country={country}
                setCountry={setCountry}
                idFront={idFront}
                setIdFront={setIdFront}
                idBack={idBack}
                setIdBack={setIdBack}
                selfieWithId={selfieWithId}
                setSelfieWithId={setSelfieWithId}
                city={city}
                setCity={setCity}
              >
                <Button
                  size={"lg"}
                  className="font-bold w-full mb-3"
                  disabled={!paymentDisabled}
                >
                  Complete KYC
                </Button>
              </KycExternal>
              <Button
                variant={"gradient"}
                size={"lg"}
                disabled={paymentDisabled}
                className="font-bold w-full"
                onClick={handleStripePayment}
              >
                Pay with
                <img src={stripeLogo} className="w-14 -ml-1" />{" "}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

// Input Boxes
interface InputBoxesProps {
  exchangeAmount: number;
  AKTAmount: number;
  setExchangeAmount: (value: number) => void;
  setAKTAmount: (value: number) => void;
}

const EXCHANGE_RATE_API = import.meta.env.VITE_EXCHANGE_RATE_API;
const dataFetch = async () => {
  const res = await axios.get(EXCHANGE_RATE_API);
  const data = await res.data;
  return data;
};

function InputBoxes({
  exchangeAmount,
  setAKTAmount,
  setExchangeAmount,
  AKTAmount,
}: InputBoxesProps) {
  const { toast } = useToast();

  console.log(EXCHANGE_RATE_API);
  const onUSDChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setExchangeAmount(Number(e.target.value));
    if (Number(e.target.value) > 0) {
      const data = await dataFetch();
      const price = data.data.price;
      if (price) {
        setAKTAmount(Number(e.target.value) / price);
      } else {
        toast({
          title: "Uh oh!",
          description: "Unable to fetch data from the API.",
          variant: "destructive",
        });
      }
    }
  };

  const onAktChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setAKTAmount(Number(e.target.value));
    if (Number(e.target.value) > 0) {
      const data = await dataFetch();
      const price = data.data.price;
      // 1
      if (price) {
        setExchangeAmount(Number(e.target.value) * price);
      } else {
        toast({
          title: "Uh oh!",
          description: "Unable to fetch data from the API.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <>
      <div>
        <Label htmlFor="pay-amount">You pay</Label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <Input
            className="w-full pr-12  pt-7 pb-7 rounded-md"
            id="pay-amount"
            name="pay-amount"
            type="number"
            placeholder="0"
            readOnly
            value={!exchangeAmount ? "" : exchangeAmount}
            onChange={onUSDChange}
          />
          <span className="text-sm -ml-11 font-bold text-muted-foreground">
            USD
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-3 rounded-full items-center">
        <ArrowDownUpIcon className="text-gray-500" />
      </div>
      <div className="mb-6">
        <Label htmlFor="receive-amount">You receive</Label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <Input
            className="w-full pr-12 pt-7 pb-7 rounded-md"
            id="pay-amount"
            name="pay-amount"
            type="number"
            readOnly
            placeholder="0"
            value={!AKTAmount ? "" : AKTAmount}
            onChange={onAktChange}
          />
          <span className="-ml-11 font-bold rounded-md text-sm text-muted-foreground">
            AKT
          </span>
        </div>
      </div>
    </>
  );
}

function ArrowDownUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </svg>
  );
}
