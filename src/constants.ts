import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconLine from "@/assets/icons/IconLine.svg";
import IconThreads from "@/assets/icons/IconThreads.svg";
import IconCopyLink from "@/assets/icons/IconCopyLink.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/hiyenjen",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "https://x.com/username",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tobeyliu",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:hiyenjen@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "Threads",
    href: "https://www.threads.net/intent/post?text=",
    linkTitle: `Share this post on Threads`,
    icon: IconThreads,
  },
  {
    name: "Line",
    href: "https://social-plugins.line.me/lineit/share?url=",
    linkTitle: `Share this post via Line`,
    icon: IconLine,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
] as const;
