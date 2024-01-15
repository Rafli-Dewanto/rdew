type Social = {
    label: string;
    link: string;
};

type Presentation = {
    mail: string;
    title: string;
    description: string;
    socials: Social[];
    profile?: string;
};

const presentation: Presentation = {
    mail: "dewantorafli@gmail.com",
    title: "Hi, I’m Rafli Dewanto 👋",
    description:
        "I am a *Software Engineer* from *Indonesia*, currently working with *Next.js* for *Fullstack Web Development*. In my leisure time, I am learning *Back-End Development* with *Go* and writing post about my learning.",
    socials: [
        {
            label: "Instagram",
            link: "https://www.instagram.com/rafli.dewanto/",
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/rd09/",
        },
        {
            label: "Github",
            link: "https://github.com/Rafli-Dewanto",
        },
    ],
    profile:
        "https://lh3.googleusercontent.com/a/ACg8ocLtrHdGLj3yQ2p1byJFcaLOAXZ0ONCbuiGh8WsIO6yN5g=s512-c",
} as const;

export default presentation;
