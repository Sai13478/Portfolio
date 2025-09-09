import { IconType } from 'react-icons';

export interface SocialLink {
  icon: IconType; // Changed from string to IconType
  url: string;
  label: string;
}

export interface ContactInfo {
  icon: IconType; // Changed from string to IconType
  label: string;
  value: string;
  href?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


