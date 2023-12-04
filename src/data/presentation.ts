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
    "A *Software Engineer* based in Bekasi, Indonesia. I'm currently learning *Fullstack Web Development* with *NextJS* and *Back-End Development* with *Go*, and also pursuing a *Computer Science* degree at *Gunadarma* University",
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
  profile: 'https://media.licdn.com/dms/image/D5603AQEljt1TTN_XTA/profile-displayphoto-shrink_400_400/0/1698132288654?e=1704931200&v=beta&t=FHmjPvwdpQfulVO6MZ0J-HhfLrzVslLZWVPCXxnNEY0'
} as const;

export default presentation;
