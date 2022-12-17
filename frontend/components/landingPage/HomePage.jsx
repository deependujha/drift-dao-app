import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div className="bg-[url('/landingPageImg/landingbg.jpg')] bg-fixed">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:flex items-center justify-center sm:h-screen">
          <div>
            <div>
              <Image
                src="/landingPageLogo/logo-white.png"
                height="200"
                width="450"
                alt="load.."
              />
              <span className="text-white text-3xl">
                decenterlised drifting through DAOs
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="sm:flex items-center justify-start sm:h-screen">
            <div>
              <div className="text-white text-3xl italic font-bold">
                sign in with your wallet to continue
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-10 ">
                <div>
                  <Button
                    size="lg"
                    className="w-56"
                    gradientDuoTone="purpleToPink"
                  >
                    <Image
                      className="mr-3"
                      src="/landingPageLogo/MetaMask_logo.png"
                      height="30"
                      width="30"
                      alt="load.."
                    />
                    metamask
                  </Button>
                </div>
                <div>
                  <Button
                    size="lg"
                    className="w-56 ml-3"
                    gradientDuoTone="purpleToPink"
                  >
                    <Image
                      className="mr-3"
                      src="/landingPageLogo/coinbase_logo.png"
                      height="30"
                      width="28"
                      alt="load.."
                    />
                    coinbase
                  </Button>
                </div>
                <div>
                  <Button
                    size="lg"
                    className="w-56 mt-2"
                    gradientDuoTone="purpleToPink"
                  >
                    <Image
                      className="mr-3"
                      src="/landingPageLogo/walletconnect-logo.png"
                      height="30"
                      width="28"
                      alt="load.."
                    />
                    wallet connect
                  </Button>
                </div>
                <div>
                  <Button
                    size="lg"
                    className="w-56 mt-2 ml-3"
                    gradientDuoTone="purpleToPink"
                  >
                    <Image
                      className="mr-3"
                      src="/landingPageLogo/wallet_logo.png"
                      height="30"
                      width="28"
                      alt="load.."
                    />
                    Get a wallet
                  </Button>
                </div>
              </div>
              <div className="text-white flex justify-center font-bold mt-7">
                Or
              </div>
              <div className="flex justify-center mt-6">
                <Button
                  size="lg"
                  className="w-72"
                  gradientDuoTone="purpleToPink"
                >
                  <Image
                    className="mr-1"
                    src="/landingPageLogo/lens-logo.png"
                    height="40"
                    width="58"
                    alt="load.."
                  />
                  with lens id
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
