import { Activity, Bell, Home, Instagram, Settings } from "lucide-react";
import React from "react";
import { FaSalesforce } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { IntegrationProps, PageIcons, SidebarProps } from "./types";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contact",
  "automations",
  "integrations",
  "profile",
  "settings",
];

export const INTEGRATIONS: IntegrationProps[] = [
  {
    title: "Connect Instagram",
    icon: <Instagram />,
    description:
      "Connect your Instagram account to automate posts and stories.",
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    icon: <FaSalesforce />,
    description:
      "Integrate with Salesforce for enhanced customer relationship management.",
    strategy: "CRM",
  },
];

export const PAGE_ICONS: PageIcons = {
  AUTOMATIONS: <Activity />,
  INTEGRATIONS: <Bell />,
  PROFILE: "/assets/icons/profile.svg",
  SETTINGS: <Settings />,
  CONTACT: "/assets/icons/free-plan.svg",
  HOME: <Home />,
};

export const navLinks: SidebarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: "/assets/icons/home.svg",
  },
  {
    id: uuid(),
    label: "automations",
    icon: "/assets/icons/image.svg",
  },
  {
    id: uuid(),
    label: "integrations",
    icon: "/assets/icons/stars.svg",
  },
  {
    id: uuid(),
    label: "settings",
    icon: "/assets/icons/scan.svg",
  },
];

export const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1564064695621-5cb08cd581eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNlbGVicml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Professional Portrait",
    description: "Perfect for LinkedIn and business profiles",
    style: "Corporate",
  },
  {
    url: "https://images.unsplash.com/photo-1547992087-e67e3944257e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNlbGVicml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Casual Lifestyle",
    description: "Natural and relaxed everyday portraits",
    style: "Casual",
  },
  {
    url: "https://images.unsplash.com/photo-1550751464-57982110c246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNlbGVicml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Creative Portrait",
    description: "Artistic shots with unique lighting",
    style: "Creative",
  },
  {
    url: "https://images.unsplash.com/photo-1611898685362-861ca506fe07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsZWJyaXR5fGVufDB8fDB8fHww",
    title: "Fashion Portrait",
    description: "High-end fashion inspired photography",
    style: "Fashion",
  },
];

export const products = [
  {
    id: "1",
    category: "ulcer",
    name: "Emzor Paracetamol 500mg Tablets *96",
    price: 9.5,
    image: "/kainuwa/emzor1.png",
  },
  {
    id: "2",
    category: "diabetes",
    name: "Emprofen E 200mg Soft Gel 1*10",
    price: 24.0,
    image: "/kainuwa/emzor2.png",
  },
  {
    id: "3",
    category: "typhoid",
    name: "Emzor Paracetamol 500mg Tablets *1000",
    price: 12.0,
    image: "/kainuwa/emzor3.png",
  },
  {
    id: "4",
    category: "maleria",
    name: "Folic acid tablets 5mg",
    price: 54.5,
    image: "/kainuwa/polic1.png",
  },
  {
    id: "5",
    category: "pile",
    name: "Emzor Paracetamol 500mg Tablets *1000",
    price: 9.0,
    image: "/kainuwa/polic2.png",
  },
  {
    id: "6",
    category: "maleria",
    name: "Em-vit'c vitamin cyrup 200ml",
    price: 13.5,
    image: "/kainuwa/polic4.png",
  },
  {
    id: "7",
    category: "maleria",
    name: "Emzor Paracetamol 500mg Tablets *96",
    price: 9.5,
    image: "/kainuwa/emzor1.png",
  },
  {
    id: "8",
    category: "maleria",
    name: "Emprofen E 200mg Soft Gel 1*10",
    price: 24.0,
    image: "/kainuwa/emzor2.png",
  },
  {
    id: "9",
    category: "maleria",
    name: "Emzor Paracetamol 500mg Tablets *1000",
    price: 12.0,
    image: "/kainuwa/emzor3.png",
  },
  {
    id: "10",
    category: "maleria",
    name: "Emzor Paracetamol 500mg Tablets *1000",
    price: 12.0,
    image: "/kainuwa/emzor3.png",
  },
];

export const plans = [
  {
    name: "Free Plan",
    price: "$0",
    features: [
      "Boost engagement with target starter responses",
      "Automate comment replies to enhance interaction",
      "Generate personalized responses for better engagement",
    ],
    highlighted: false,
  },
  {
    name: "Smart AI Plan",
    price: "$99",
    features: [
      "All features from free plan",
      "AI powered responses",
      "Advance analytics and insights",
      "Unlimited automations",
    ],
    highlighted: true,
  },
  // {
  //   name: "Enterprise",
  //   price: "Custom",
  //   features: [
  //     "Priority customer Support",
  //     "Custom AI Models",
  //     "Custom Workflows",
  //     "Custom Integrations",
  //     "Custom Automations",
  //   ],
  //   highlighted: false,
  // },
];
