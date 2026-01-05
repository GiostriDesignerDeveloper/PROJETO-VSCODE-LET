export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  category: string;
  tags: string[];
  technologies?: string[];
  client?: string;
  role?: string;
  timeline?: string; // Se você já adicionou antes
  liveUrl?: string;
  githubUrl?: string;
  embedUrl?: string;
  gallery?: { url: string; title: string }[];
}
