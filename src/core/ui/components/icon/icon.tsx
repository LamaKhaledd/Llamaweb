import { ActionIcon } from "@mantine/core";
import { TablerIcon } from '@tabler/icons-react';

interface SocialIconProps {
    icon: TablerIcon;
    href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href }) => {
    return (
        <ActionIcon 
            color="pink" 
            size="xl" 
            variant="outline" 
            component="a" 
            target="_blank" 
            href={href} 
            styles={(theme) => ({
                root: {
                    transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
                    "&:hover": {
                        transform: "scale(1.1)", 
                        backgroundColor: theme.colors.pink[0], 
                    },
                },
            })}
        >
            <Icon size="3rem" strokeWidth={1} />
        </ActionIcon>
    );
};

export default SocialIcon;
