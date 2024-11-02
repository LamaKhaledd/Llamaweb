import { ActionIcon } from "@mantine/core";
import { ISocialIconProps } from "./models/lama-icon-interface";

const SocialIcon: React.FC<ISocialIconProps> = ({
  icon: Icon,
  href,
  size = "3rem",
  color = "pink",
}) => {
  return (
    <ActionIcon
      color={color}
      size="xl"
      component="a"
      target="_blank"
      href={href}
      style={{
        transition:
          "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.backgroundColor = `${color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.backgroundColor = "black";
      }}
    >
      <Icon size={size} strokeWidth={1} />
    </ActionIcon>
  );
};

export default SocialIcon;
