import { Instagram, Plane } from "lucide-react";
import { JSX } from "react";
// import { v4 as uuidv4 } from "uuid";
import { GiArtificialHive } from "react-icons/gi";

export type AutomationListenerProps = {
  // id: string;
  label: string;
  icon: JSX.Element;
  desc: string;
  type: "SMARTAI" | "MESSAGE";
};

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    // id: uuidv4(),
    label: "Sent the user a message",
    icon: <Plane />,
    desc: "Enter the message that you want to send the user",
    type: "MESSAGE",
  },
  {
    // id: uuidv4(),
    label: "Let's Smart AI take over",
    icon: <GiArtificialHive />,
    desc: "Tell AI about your project. (Upgrade to use this feature)",
    type: "SMARTAI",
  },
];

export type AutomationLTriggerProps = {
  // id: string;
  label: string;
  icon: JSX.Element;
  desc: string;
  type: "COMMENT" | "DM";
};

export const AUTOMATION_TRIGGER: AutomationLTriggerProps[] = [
  {
    // id: uuidv4(),
    label: "User comment on my post",
    icon: <Instagram />,
    desc: "Select if you want to automate comments on your post",
    type: "COMMENT",
  },
  {
    // id: uuidv4(),
    label: "User send me a dm with a keyword",
    icon: <Instagram />,
    desc: "Select if you want to automate DMs on your profile",
    type: "DM",
  },
];
