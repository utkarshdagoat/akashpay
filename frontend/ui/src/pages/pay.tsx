import Navbar from "@/components/navbar";
import Exchange from "@/components/payments/exchange";

export default function Pay() {
  return (
    <div className="flex flex-col">
      <Navbar active="Pay" />
      <div className="w-full mt-20 flex items-center justify-center">
        <Exchange />
      </div>
    </div>
  );
}
