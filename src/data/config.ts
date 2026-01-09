const config = {
  title: "K Thanush | Full Stack Developer",
  description: {
    long: "Passionate Full Stack Web Developer specializing in building exceptional digital experiences. Creator of Acadexis and various innovative web applications using modern technologies.",
    short:
      "Full Stack Developer passionate about creating innovative web solutions and AI-powered applications.",
  },
  keywords: [
    "K Thanush",
    "Thanush",
    "portfolio",
    "developer",
    "web development",
    "full stack",
    "Acadexis",
    "AI applications",
    "React",
    "Next.js",
  ],
  author: "K Thanush",
  email: "contact@kthanush.dev",
  site: "https://kthanush.dev",

  // for github stars button (optional - leave empty if you don't want it)
  githubUsername: "Thanush000",
  githubRepo: "3d-portfolio-main",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/thanush-vardhan-27347a3a4/",
    instagram: "https://instagram.com/thanush000",
    facebook: "",
    github: "https://github.com/Thanush000",
  },
};
export { config };
