import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/shadcn-ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shadcn-ui/components/ui/dialog"

type Props = {};

export default function AppDev({ }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="min-h-screen bg-black flex flex-col items-center justify-center text-center"
    >

      <div className="flex mt-10 flex-col text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-start">
        <motion.div
          transition={{
            duration: 1.2,
          }}
          exit={{
            x: 1000,
            opacity: 0,
          }}
          className="space-y-3 md:space-y-10 px-0 md:px-10"
        >
          <article>            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="mt-10 mb-20 text-center text-5xl lg:text-7xl font-bold text-white"
            >
              {" "}
              
              <span>App Development</span>{" "}
            </motion.h4></article>
          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Financial{" "}
              <span>App Development</span>{" "}
            </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
              We will develop a fully functional financial application and help you to successfully deploy it on the App Store and Play Store with all the necessary certificates.
            </motion.p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto">Get in Touch</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] min-h-[500px]  overflow-y-hidden  bg-black text-white pt-20" >
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/FPkOIy3TIQWJSi9Gf9f4"
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}

                  id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Me - Dialog Form "
                  data-height="486"
                  data-layout-iframe-id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-form-id="FPkOIy3TIQWJSi9Gf9f4"
                  title="Contact Me - Dialog Form "
                >
                </iframe>
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>

              </DialogContent>
            </Dialog>
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Real Estate{" "}
              <span>Application Development</span>{" "}
            </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
              We will develop a fully functional app with a user-friendly interface for your real estate application, with a fully functional admin and super admin panel with many additional features.
            </motion.p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto">Get in Touch</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] min-h-[500px]  overflow-y-hidden  bg-black text-white pt-20" >
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/FPkOIy3TIQWJSi9Gf9f4"
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}

                  id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Me - Dialog Form "
                  data-height="486"
                  data-layout-iframe-id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-form-id="FPkOIy3TIQWJSi9Gf9f4"
                  title="Contact Me - Dialog Form "
                >
                </iframe>
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>

              </DialogContent>
            </Dialog>
          </article>

          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              E-Commerce App{" "}
              <span> Development</span>{" "}
            </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
              We will develop a fully functional e-commerce application that will be much more than just a shopping app, with many customization options available in your admin panel.
            </motion.p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto">Get in Touch</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] min-h-[500px]  overflow-y-hidden  bg-black text-white pt-20" >
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/FPkOIy3TIQWJSi9Gf9f4"
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}

                  id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Me - Dialog Form "
                  data-height="486"
                  data-layout-iframe-id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-form-id="FPkOIy3TIQWJSi9Gf9f4"
                  title="Contact Me - Dialog Form "
                >
                </iframe>
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>

              </DialogContent>
            </Dialog>
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Social Media{" "}
              <span>Application Development</span>{" "}
            </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
              We will develop a complete social media platform according to your requirements, with all functionalities and a user management system, including all integrations.
            </motion.p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto">Get in Touch</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] min-h-[500px]  overflow-y-hidden  bg-black text-white pt-20" >
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/FPkOIy3TIQWJSi9Gf9f4"
                  style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}

                  id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Me - Dialog Form "
                  data-height="486"
                  data-layout-iframe-id="inline-FPkOIy3TIQWJSi9Gf9f4"
                  data-form-id="FPkOIy3TIQWJSi9Gf9f4"
                  title="Contact Me - Dialog Form "
                >
                </iframe>
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>

              </DialogContent>
            </Dialog>
          </article>

          <article>            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="mt-10 mb-20 text-center text-5xl lg:text-7xl font-bold text-white"
            >
              {" "}
              
              <span>Have an Idea? </span>{" "}
            </motion.h4></article>


        </motion.div>
      </div>
    </motion.div>
  );
}