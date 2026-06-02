import React from "react";
import { ContactCard } from "./ContactCard"; // Mudamos para o Card oficial
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            {t("contact.title") || "Entre em contato"}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {t("contact.subtitle") || "Tem um projeto em mente ou quer apenas bater um papo? Sinta-se à vontade para me contatar."}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Aqui injetamos o nosso card limpo e funcional */}
          <ContactCard />
        </motion.div>
        
      </div>
    </section>
  );
};

export default ContactSection;