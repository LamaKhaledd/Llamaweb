import { IconBrandLinkedin, IconBrandInstagram, IconBrandTiktok, IconBrandSnapchat, TablerIcon } from '@tabler/icons-react';

interface SocialIconData {
    icon: TablerIcon;
    href: string;
}

export const socialIconsData: SocialIconData[] = [
    {
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/in/lama-ibrahim-a382aa305/",
    },
    {
        icon: IconBrandInstagram,
        href: "https://www.instagram.com/lama.ibrahimm/",
    },
    {
        icon: IconBrandTiktok,
        href: "https://www.tiktok.com/@lama.ibrahimm?_t=8qjRVxMDk64&_r=1",
    },
    {
        icon: IconBrandSnapchat,
        href: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWQxOXg3dnE2Z2J2NmJ5c3B4eHJ1b28yMm1leHRvdzZ3NGJ2MXo5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DU4iDpA1CDkcZMpAVA/giphy.webp",
    },
];
