import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import Contact from "../components/contact";

export default function ContactPage(props) {
  return (
    <>
      <Helmet>
        <title>Contact | Josh Haywood</title>
      </Helmet>

      {/* Form */}
      <motion.div
        class="py-32 md:py-44 px-10 flex flex-col justify-center max-w-[1100px] mx-auto"
        initial={{ opacity: 0, y: "5%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: props.delay, ease: "easeInOut" }}
      >
        <Contact
          heading={<h1 class="font-semibold text-4xl text-center">Contact</h1>}
        />
      </motion.div>
    </>
  );
};