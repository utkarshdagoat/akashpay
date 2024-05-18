import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useUserStore } from "@/hooks/useStore";
import axios from "axios";
import { createKYC } from "@/lib/endpoints";
import Spinner from "@/components/ui/spinner";
import { UploadButton } from "@/components/upload/uploadButton";
import { useState } from "react";

export default function KycExternal({
  children,
  setPaymentDisabled,
  email,
  setEmail,
  loading,
  setLoading,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dob,
  setDob,
  address,
  setAddress,
  postalCode,
  setPostalCode,
  state,
  setState,
  country,
  setCountry,
  idFront,
  setIdFront,
  idBack,
  setIdBack,
  selfieWithId,
  setSelfieWithId,
  city,
  setCity,
}: {
  children: React.ReactNode;
  setPaymentDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  dob: Date | undefined;
  setDob: React.Dispatch<React.SetStateAction<Date | undefined>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  postalCode: string;
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  idFront: string;
  setIdFront: React.Dispatch<React.SetStateAction<string>>;
  idBack: string;
  setIdBack: React.Dispatch<React.SetStateAction<string>>;
  selfieWithId: string;
  setSelfieWithId: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}) {


  const { toast } = useToast();

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handlePostalCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostalCode(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setPaymentDisabled(false);
    } catch (e) {
      console.error(e);
      toast({
        description:
          "An error occurred while submitting KYC application. Please try again Later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-card sm:max-w-[425px] max-h-[600px] overflow-y-scroll">
        {loading ? (
          <div className="flex justify-center align-center ">
            <Spinner className="w-5 h-5" />
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Apply for KYC</DialogTitle>
              <DialogDescription>
                Enter your details to complete your KYC verification.
              </DialogDescription>
            </DialogHeader>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="firstName" className="text-muted-foreground">
                  Email
                </Label>
                <Input
                  type="email"
                  id="firstName"
                  placeholder="Email You used for the app"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>
              <div className="flex gap-2">
                <div>
                  <Label htmlFor="firstName" className="text-muted-foreground">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    required
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-muted-foreground">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Your last name"
                    required
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="dob"> Date of Birth</Label>
                <Input
                  type="date"
                  id="dob"
                  placeholder="Your Date of Birth"
                  required
                  onChange={(e) => setDob(new Date(e.target.value))}
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-muted-foreground">
                  Address
                </Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="Your address"
                  required
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="flex gap-2">
                <div>
                  <Label htmlFor="city" className="text-muted-foreground">
                    City
                  </Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="Your city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode" className="text-muted-foreground">
                    Postal Code
                  </Label>
                  <Input
                    type="number"
                    id="postalCode"
                    placeholder="000000"
                    required
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <Label htmlFor="state" className="text-muted-foreground">
                    State
                  </Label>
                  <Input
                    type="text"
                    id="state"
                    placeholder="Your state"
                    required
                    value={state}
                    onChange={handleStateChange}
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-muted-foreground">
                    Country
                  </Label>
                  <Input
                    type="text"
                    id="country"
                    placeholder="Your country"
                    required
                    value={country}
                    onChange={handleCountryChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="photo"
                  className="text-muted-foreground text-xs"
                >
                  Front and Back for a TaxRelated Id, Eg: PAN Card for Indian
                  Citizens
                </Label>
                <div className="w-full flex justify-around">
                  <UploadButton
                    className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
                    content={{
                      button: idFront ? "Complete" : "Front of Id",
                      allowedContent: "Only 1 Image Max. Size 4MB",
                    }}
                    endpoint="imageUploader"
                    onUploadBegin={() => {
                      console.log("uploading");
                    }}
                    onClientUploadComplete={(url) => {
                      setIdFront(url[0].url);
                    }}
                  />
                  <UploadButton
                    className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
                    content={{
                      button: idBack ? "Complete" : "Back of Id",
                      allowedContent: "Only 1 Image Max. Size 4MB",
                    }}
                    endpoint="imageUploader"
                    onClientUploadComplete={(url) => {
                      setIdBack(url[0].url);
                    }}
                    onUploadError={(e) => {
                      console.error(e);
                    }}
                    onBeforeUploadBegin={(file) => {
                      console.log(file);
                      return file;
                    }}
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="photo"
                  className="text-muted-foreground text-xs"
                >
                  Self with Id Above in front of You the front
                </Label>
                <UploadButton
                  className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
                  content={{
                    button: selfieWithId ? "Complete" : "Selfie with Id",
                    allowedContent: "Only 1 Image Max. Size 4MB",
                  }}
                  endpoint="imageUploader"
                  onClientUploadComplete={(url) => {
                    setSelfieWithId(url[0].url);
                    return;
                  }}
                />
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
