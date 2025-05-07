import placementVideo from "../../assets/placement-recommendation-system.mp4";
import placement from "../../assets/placements.jpg";
import booknook from "../../assets/bookNook.jpeg";
import voicelang from "../../assets/voicelang.jpeg";
import paint from "../../assets/paint.jpg";
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: Array<string>;
  link: string;
  video?: string;
  image: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Placement recommendation System",
    description:
      "Developed a web-based platform that helps students identify ideal companies for employment based on their profiles. The platform streamlines the job application process, provides a comprehensive list of job openings, and allows recruiters to post new opportunities.",
    tech: ["NextJS"],
    link: "https://github.com/InshiyaRavat/placement-recommendation",
    video: placementVideo,
    image: placement,
  },
  {
    id: 2,
    title: "BookNook",
    description:
      "A web application that allows users to search for books, add them to a cart, and securely complete purchases through an integrated payment system.The website provides a user-friendly interface with various functionalities to enhance the shopping experience for book enthusiasts.",
    tech: ["React", "SpringBoot"],
    link: "https://github.com/InshiyaRavat/BookNook",
    image: booknook,
  },
  {
    id: 3,
    title: "VoiceLang",
    description:
      "A voice-controlled programming language tailored for mathematical computations. It leverages speech recognition to interpret spoken commands, enabling users to perform calculations seamlessly through voice input, offering a novel way to interact with mathematical operations.",
    tech: ["Python"],
    link: "https://github.com/InshiyaRavat/VoiceLang",
    image: voicelang,
  },
  {
    id: 4,
    title: "PixelSplash",
    description:
      ' A drawing tool where users can paint by dragging the mouse—left click uses the primary color, right click uses the secondary. Includes an eraser, full canvas fill, and an "Erase All" option to clear the canvas. Simple and intuitive for quick sketches or coloring.',
    tech: ["React"],
    link: "https://github.com/inshiya-ravat/paint-app",
    image: paint,
  },
];
