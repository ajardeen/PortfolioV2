import React from "react";
import ContactForm from "../components/ContactForm";
import { RevealText } from "../components/RevealText";
import { motion } from "framer-motion";
import ShinnyLine from "../components/ShinnyLine";
function ContactSection() {
  return (
    <section className="flex flex-col gap-4 p-4 " id="contact">
       {/* skill div  */}
       <div className="flex gap-10 justify-center items-center">
          <span className="rotate-180">
            <ShinnyLine />
          </span>
          <span>
            <RevealText text={"Contact"} />
          </span>
          {/* shinny line animation  */}
          <ShinnyLine />
        </div>
      <div className="flex justify-evenly items-center gap-4 lg:p-3">
        <motion.div className="hidden lg:block space-y-6 lg:w-[50%] text-8xl text-center opacity-50">
          <span>
            <motion.span
              className="inline-block"
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.2,duration: 0.5 }}
            >
              {"<"}
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.2,duration: 0.5 }}
            >
              {"/>"}
            </motion.span>
          </span>
          
            <h1 className="text-5xl font-bold text-gray-100 md:text-6xl">
              Let’s Talk
            </h1>
            <p className="text-lg md:text-xl text-gray-300 xl:px-40">
              Got a project idea or a question? Drop your message in the contact
              form and share your email so we can connect!
            </p>
       
        </motion.div>

       <div className="w-full lg:w-1/2 flex justify-center items-center">
       <ContactForm />
       </div>
      </div>
    </section>
  );
}

export default ContactSection;
