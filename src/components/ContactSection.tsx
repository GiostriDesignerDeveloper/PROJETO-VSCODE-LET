import React from "react";
import ContactInfo from "./ContactInfo";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Cabeçalho da Seção (Tipografia ajustada para fechar a página com elegância) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          {/* 👇 Reduzi de text-7xl para text-5xl e md:text-6xl */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            {t("contact.title")}
          </h2>
          {/* 👇 Reduzi sutilmente o peso do subtítulo também */}
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Card de Contato */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <ContactInfo />
        </motion.div>
        
      </div>
    </section>
  );
};

export default ContactSection;
