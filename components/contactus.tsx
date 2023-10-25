import Image from "next/image";
import React from "react";

type Props = {};

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen/2 w-full">
      <div className="flex flex-col items-center justify-center">
        
      <div className="pb-10">
        <Image src="/assets/logo.svg" width={60} height={60} alt="logo" />
      </div>
      <h2 className="text-5xl font-bold">Let&#x27;s Talk</h2>
        </div>
      {/* <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[600px]">
        <input
          type="text"
          id="Name"
          name="Name"
          required
          maxLength={128}
          placeholder="Name"
          className="bg-black text-white text-2xl  outline-none border-2 focus:border-white border-gray-500 rounded-3xl px-8 py-2 w-full h-14"
          // value=""
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={128}
          placeholder="Email"
          className="bg-black text-white text-2xl outline-none border-2 focus:border-white border-gray-500 rounded-3xl px-8 py-2 w-full h-14"
          // value=""
        />
        <textarea
          id="message"
          name="message"
          required
          maxLength={1048576}
          placeholder="Additional information"
          className="bg-black text-white text-2xl outline-none border-2 focus:border-white border-gray-500 rounded-3xl px-8 py-6 min-h-[10em]"
        ></textarea>
        
        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-white hover:bg-white/90 text-3xl text-black rounded-full px-12 py-3 font-bold"
          >
            Submit
          </button>
        </div>
      </form> */}
      <iframe
  src="https://api.leadconnectorhq.com/widget/form/D55owbh8ddaAnt44lCKN"
  style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
  id="inline-D55owbh8ddaAnt44lCKN" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Form 0"
  data-height="463"
  data-layout-iframe-id="inline-D55owbh8ddaAnt44lCKN"
  data-form-id="D55owbh8ddaAnt44lCKN"
  title="Form 0"
      >
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
};

export default ContactUs;
