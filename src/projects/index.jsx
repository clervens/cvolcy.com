import MarkdownProject from "./markdown.md";
import GifMakerProject from "./gifmaker.md";
import RTCProject from "./rtc-drive.md";
import SimpsonsProject from "./simpsons.md";

const Projects = [
    { file: MarkdownProject, name: "./markdown.md"},
    { file: GifMakerProject, name: "./gifmaker.md"},
    { file: RTCProject, name: "./rtc-drive.md"},
    { file: SimpsonsProject, name: "./simpsons.md"}
];

export function getProject(project) {
    return Projects.filter((p) => p.name.includes(project.toLowerCase()))[0];
}

export default Projects;
