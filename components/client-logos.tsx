import Image from "next/image";
import React from "react";
import SliderContainer, { SliderItem } from "./Slider";

type Props = {};

const ClientLogos: React.FC = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/beyondindia.svg"
            width={150}
            height={50}
            alt="Audubon"
            style={{objectFit:"contain"}}
          />

        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/reelpay.svg"
            width={150}
            height={50}
            alt="Coinbase"
            style={{objectFit:"contain"}}
          />
        </SliderItem>{" "}
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/reelstar.svg"
            width={150}
            height={50}
            alt="Exodus"
            style={{objectFit:"contain"}}
          />
        </SliderItem>{" "}
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/rpa360.svg"
            width={150}
            height={50}
            alt="Expensify"
            style={{objectFit:"contain"}}
          />
        </SliderItem>{" "}
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/softouch.svg"
            width={150}
            height={50}
            alt="Extra"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/stepsharp.svg"
            width={150}
            height={50}
            alt="Litentry"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/suddpay.svg"
            width={150}
            height={50}
            alt="Native Script"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/omni.svg"
            width={150}
            height={50}
            alt="Picnic"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/shift2go.svg"
            width={150}
            height={50}
            alt="Pink Panda"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/securedrive.svg"
            width={150}
            height={50}
            alt="Rain Bow"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
      </SliderContainer>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/zenedgerealty.svg"
            width={150}
            height={50}
            alt="Scribeware"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/arktic.svg"
            width={150}
            height={50}
            alt="Shopify"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/digimob.svg"
            width={150}
            height={50}
            alt="Showtime"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/henna.svg"
            width={150}
            height={50}
            alt="slingshot"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/nexa.svg"
            width={150}
            height={50}
            alt="snapcalorie"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/orderfeeds.svg"
            width={150}
            height={50}
            alt="status"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/wemark.svg"
            width={150}
            height={50}
            alt="Steakwallet"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/nexaconnect.svg"
            width={150}
            height={50}
            alt="Steddy"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/vericent.svg"
            width={150}
            height={50}
            alt="Steddy"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/vfon.svg"
            width={150}
            height={50}
            alt="Steddy"
            style={{objectFit:"contain"}}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/chatgennie.svg"
            width={150}
            height={50}
            alt="Steddy"
            style={{objectFit:"contain"}}
          />
        </SliderItem>

      </SliderContainer>
    </>
  );
};

export default ClientLogos;
