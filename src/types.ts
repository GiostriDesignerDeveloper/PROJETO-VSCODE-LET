export interface Project {
  id: string;
  title: string;
  status?: "active" | "coming-soon"; // <--- O segredo está aqui
  description: string;
  fullDescription?: string;
  imageUrl: string;
  category: string;
  tags: string[];
  technologies?: string[];
  client?: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  embedUrl?: string;
  gallery?: any[];
}
