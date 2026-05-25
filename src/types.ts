export interface TranslatedText {
  pt: string;
  en: string;
}

export interface Project {
  id: string;
  title: { pt: string; en: string };
  status: "active" | "coming-soon";
  embedUrl?: string;
  description: { pt: string; en: string };
  fullDescription: { pt: string; en: string };
  imageUrl: string;
  category: string;
  tags: string[];
  technologies: string[];
  methods?: string[];      // Adicione isto
  principles?: string[]; // Adicione esta linha
  client: string;
  role: string;
  liveUrl: string;
  gallery?: { url: string; title: string }[];
}

