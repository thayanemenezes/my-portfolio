import { FaReact, FaWordpress } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNestjs, SiJavascript, SiTypescript } from 'react-icons/si';

export const projectsData = [{
    id: 1,
    projectName: 'S4F',
    imagePath: '/s4f.png',
    URL: '/',
    subtitle: 'Layout Development | API Integration',
    technologiesUsed: [
        {
            icon: <FaReact size={24} color='#339CBA' />,
        },
        {
            icon: <SiNestjs size={24} color='#BA3342' />,
        },
        {
            icon: <SiJavascript size={24} color='#DFC72D' />,
        },
    ]
},
{
    id: 2,
    projectName: 'Space App',
    imagePath: '/spaceapp.png',
    URL: '/',
    subtitle: 'Layout Development',
    technologiesUsed: [
        {
            icon: <FaReact size={24} color='#2DC7DF' />
        },
        {
            icon: <RiTailwindCssFill size={24} color='#339CBA' />,
        },
        {
            icon: <SiTypescript size={24} color='#2D9CDF' />,
        },
    ]
},
{
    id: 3,
    projectName: 'Solution4Fleet',
    imagePath: '/solution4fleet.png',
    URL: '/',
    subtitle: 'Layout Development',
    technologiesUsed: [
        {
            icon: <FaReact size={24} color='#2DC7DF' />
        },
        {
            icon: <FaWordpress size={24} color='#2867C5' />
        }
    ]
},
{
    id: 4,
    projectName: 'In Orbit',
    imagePath: '/in-orbit.png',
    URL: '/',
    subtitle: 'Layout Development | API Integration',
    technologiesUsed: [
        {
            icon: <FaReact size={24} color='#2DC7DF' />
        },
        {
            icon: <RiTailwindCssFill size={24} color='#339CBA' />,
        },
        {
            icon: <SiTypescript size={24} color='#2D9CDF' />,
        },
    ]
}
]