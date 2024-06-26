import { GitHub, LinkedIn, Resume, Email } from 'icons';

const config = {
  name: {
    display: 'Ivy Cerelia Valerie',
    aria: '',
  },
  title: {
    display: '',
    aria: '',
  },
  buttons: [
    {
      href: 'https://github.com/ivcvy',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/ivycerelia/',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      label: 'LinkedIn',
    },
    {
      href: 'https://drive.google.com/file/d/1nl1s3hjjh-fEzun6Owp4Khed853HVQMP/view?usp=sharing',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      label: 'Resume',
    },
    {
      href: 'mailto:cevalierre@gmail.com',
      aria: 'Send me an email',
      icon: <Email />,
      label: 'Email',
    },
  ],
};

export default config;
