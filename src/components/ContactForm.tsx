import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você colocaria a lógica de envio real
    console.log("Form submitted:", formData);
    alert("Obrigado! Sua mensagem foi enviada (simulação).");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-none border border-gray-100 p-6 md:p-8"
    >
      <div className="space-y-6">
        {/* Campo Nome */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-900 tracking-wide mb-2 uppercase"
          >
            Nome <span className="text-gray-400 font-normal">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Digite seu nome completo"
            className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 bg-gray-50 hover:bg-white"
          />
        </div>

        {/* Campo Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-900 tracking-wide mb-2 uppercase"
          >
            Email <span className="text-gray-400 font-normal">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu.email@exemplo.com"
            className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 bg-gray-50 hover:bg-white"
          />
        </div>

        {/* Campo Assunto */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-bold text-gray-900 tracking-wide mb-2 uppercase"
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sobre o que você quer falar?"
            className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 bg-gray-50 hover:bg-white"
          />
        </div>

        {/* Campo Mensagem */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-gray-900 tracking-wide mb-2 uppercase"
          >
            Mensagem <span className="text-gray-400 font-normal">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Escreva sua mensagem aqui..."
            className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 resize-none bg-gray-50 hover:bg-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-gray-900 hover:bg-black text-white rounded-none transition-colors font-bold tracking-wide flex items-center justify-center gap-2 uppercase"
        >
          Enviar mensagem <Send size={18} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
