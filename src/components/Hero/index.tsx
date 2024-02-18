import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

const Hero = () => {
  const flyTo = (): void => {
    alert("Aşağıya kaydır");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>
        <p className="hero__subtitle text-gray-200">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CustomButton
          title="Arabaları Keşfet"
          designs="mt-10"
          handleClick={flyTo}
        />
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          whileInView={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="object-contain"
          src="/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
