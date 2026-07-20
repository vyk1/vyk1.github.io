/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // gera pasta/index.html em vez de pasta.html — funciona em qualquer
  // servidor estático (não só hosts com resolução de clean URL tipo GH Pages)
  trailingSlash: true,
  images: {
    // export estático não tem servidor pra rodar o loader de otimização de imagem
    unoptimized: true,
  },
};

export default nextConfig;
