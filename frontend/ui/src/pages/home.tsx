import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AnimatedGradientText } from "@/components/animated-gradient-text";
import bg from "@/assets/home-bg.svg";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { useUserStore } from "@/hooks/useStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUserAPI } from "@/lib/endpoints";
import { useToast } from "@/components/ui/use-toast";
import Spinner from "@/components/ui/spinner";


export default function Home() {
  const { user, setUser } = useUserStore();
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleGetStartedClick = async () => {
    setLoading(true)
    axios.get(getUserAPI, {
      withCredentials: true
    })
      .then(res => {
        console.log(res)
        if (res.status === 403 || res.status === 404) {
          setUser(null)
          navigate("/login")
        } else if (res.status === 200) {
          setUser(res.data)
          navigate("/pay")
        } else {
          setUser(null)
          toast({
            description: "Can't Seem to find you, Please login again."
          })
          navigate("/login")
        }
      })
      .catch((err) => {
        console.log(err)
        setUser(null)
        toast({
          description: "Can't Seem to find you, Please login again."
        })
        navigate("/login")
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <div
        className="h-screen w-full flex flex-col gap-8 items-center justify-center"
        style={{
          background: `url(${bg}) no-repeat`,
          backgroundSize: "cover",
        }}
      >{
          <>
            <div className="text-center flex flex-col gap-6">
              <h1 className="text-8xl drop-shadow-2xl font-extrabold leading-none tracking-tight ">
                Akash <AnimatedGradientText text="Pay" />
              </h1>
              <p className="text-xl leading-8 text-muted-foreground font-semibold lg:text-xl">
                The open source fiat payment system for <br />{" "}
                <span className="text-primary font-bold">Akash Network</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button
                  variant={"gradient"}
                  size={"lg"}
                  className="font-extrabold text-sm"
                  onClick={handleGetStartedClick}
                >{loading ?
                  <div >
                    <Spinner className="w-5 h-5" />
                  </div> :
                  <>
                    Get Started <ArrowLongRightIcon className="ml-1 w-5" />
                  </>
                  }
                </Button>
            </div>
          </>
        }

      </div>
    </>
  );
}
