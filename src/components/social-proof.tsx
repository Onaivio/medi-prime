import brand1 from "../assets/brand_1.png";
import brand2 from "../assets/brand_2.png";
import brand4 from "../assets/brand_4.png";
import brand6 from "../assets/brand_6.png";
import brand8 from "../assets/brand_8.png";
import brand3 from "../assets/brand_3.png";
import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-12 py-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.2, ease: [0.44, 0, 0.56, 1] },
        }}
        viewport={{ amount: "some", once: true }}
        className="text-[18px] font-bold leading-[26px] text-[#2f2b43]/60"
      >
        Trusted by the best
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.44, 0, 0, 1] },
        }}
        viewport={{ amount: "some", once: true }}
        className="flex flex-wrap items-center justify-evenly gap-6"
      >
        <img src={brand1} alt="logo-1" className="w-[120px] mx-4" />
        <img src={brand2} alt="logo-1" className="w-[120px] mx-4" />
        <img src={brand4} alt="logo-1" className="w-[120px] mx-4" />
        <img src={brand6} alt="logo-1" className="w-[120px] mx-4" />
        <img src={brand8} alt="logo-1" className="w-[120px] mx-4" />
        <img src={brand3} alt="logo-1" className="w-[120px] mx-4" />
      </motion.div>
    </section>
  );
};

export default SocialProof;
