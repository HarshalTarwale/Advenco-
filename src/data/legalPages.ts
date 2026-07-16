/**
 * Legal Pages — Content
 *
 * Data for the "/privacy-policy/" and "/terms-and-conditions/" pages.
 * Content is copied verbatim from the WordPress site pages. Both share the
 * same simple heading + paragraph shape, rendered through LegalPage.
 */

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/11";

export interface LegalSection {
  heading?: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  badgeLabel: string;
  heading: string;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalPageContent = {
  badgeLabel: "Legal",
  heading: "Privacy Policy",
  heroImage: `${WP}/steptodown.com560336-768x512.webp`,
  heroImageAlt: "Dark exterior shutters on a modern apartment balcony",
  metaTitle: "Privacy Policy | Advenco Blinds and Shutters",
  metaDescription:
    "Advenco Blinds and Shutters privacy policy — how we collect, use, and protect your personally identifiable information.",
  intro:
    "This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect, or otherwise handle your Personally Identifiable Information in accordance with our website.",
  sections: [
    {
      heading: "What personal information do we collect from the people that visit our blog, website or app?",
      paragraphs: [
        "When ordering or registering on our site, as appropriate, you may be asked to enter your name or other details to help you with your experience.",
      ],
    },
    {
      heading: "When do we collect information?",
      paragraphs: ["We collect information from you when you fill out a form or enter information on our site."],
    },
    {
      heading: "How do we use your information?",
      paragraphs: [
        "We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:",
        "To administer a contest, promotion, survey, or other site feature.",
      ],
    },
    {
      heading: "How do we protect visitor information?",
      paragraphs: [
        "Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. We use regular Malware Scanning. We do not use an SSL certificate.",
        "We only provide articles and information, we never ask for personal or private information like email addresses or credit card numbers.",
      ],
    },
    {
      heading: "Do we use 'cookies'?",
      paragraphs: [
        "We do not use cookies for tracking purposes. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies. If you disable cookies, some features will be disabled that make your site experience more efficient and some of our services will not function properly. However, you can still place orders.",
      ],
    },
    {
      heading: "Third Party Disclosure",
      paragraphs: ["We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information"],
    },
    {
      heading: "Third party links",
      paragraphs: ["We do not include or offer third party products or services on our website."],
    },
    {
      heading: "Google",
      paragraphs: [
        "Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en. We have not enabled Google AdSense on our site but we may do so in the future.",
      ],
    },
    {
      heading: "CAN SPAM Act",
      paragraphs: [
        "The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.",
      ],
    },
    {
      heading: "Contacting Us",
      paragraphs: [
        "If there are any questions regarding this privacy policy, you may contact us using the information below.",
        "www.advencoblindsandshutters.co.uk",
        "Advenco Blinds and Shutters",
        "57 Queen Street, Morley, Leeds, England,",
        "LS27 8EB",
      ],
    },
  ],
};

export const termsAndConditions: LegalPageContent = {
  badgeLabel: "Legal",
  heading: "Terms and Conditions",
  heroImage: `${WP}/steptodown.com781237-768x486.webp`,
  heroImageAlt: "Warm wooden shutter slats beside a green plant",
  metaTitle: "Terms & Conditions | Advenco Blinds and Shutters",
  metaDescription:
    "Advenco Blinds and Shutters terms and conditions — website usage, disclaimer, applicable law, copyright, and linking policy.",
  intro:
    "The Advenco Blinds and Shutters website is intended for your personal use and viewing. Please review our conditions of use carefully. By accessing and using this website, you accept these conditions. We reserve the right to modify the conditions of use at any time, and we recommend that you regularly review them. Continued use of this website after any changes have been posted constitutes your acceptance of the modified conditions.",
  sections: [
    {
      heading: "Disclaimer",
      paragraphs: [
        "Advenco Blinds and Shutters strives to ensure that the content and information published on this website is accurate and current. However, we cannot guarantee the accuracy of the content or information provided, and anyone using this information does so at their own risk. You are advised to verify the accuracy of any information before acting on it. Advenco Blinds and Shutters also reserves the right to change information on the website at any time without notice.",
      ],
    },
    {
      heading: "Applicable Law",
      paragraphs: [
        "The laws of Scotland govern these conditions of use, and you agree that the Scottish courts shall have exclusive jurisdiction in any disputes. Any personal data collected through this website will be treated as confidential in accordance with the principles of the Data Protection Act 1998.",
      ],
    },
    {
      heading: "Copyright and Neighboring Rights",
      paragraphs: [
        "The material featured on this site is subject to Crown copyright protection unless otherwise stated. Crown copyright protected material (excluding departmental logos) may be reproduced free of charge in any format or medium for research, private study, web-based discussion, or internal circulation within an organization, provided it is reproduced accurately and not in a misleading context. When republishing or copying Crown copyright items, the source must be identified and the copyright status acknowledged. The permission to reproduce Crown protected material does not extend to any material on this site identified as the copyright of a third party. For further information on Crown copyright policy and licensing arrangements, please see the guidance at www.opsi.gov.uk. The copying and use of the Advenco Blinds and Shutters logo is not permitted without prior approval from Advenco Blinds and Shutters.",
      ],
    },
    {
      heading: "Virus Protection",
      paragraphs: [
        "We make every effort to check and test materials at all stages of production. It is always wise for users to run an antivirus program on all materials downloaded from the internet. Advenco Blinds and Shutters cannot accept responsibility for any loss, disruption, or damage to your data or computer system that may occur while using materials from this website.",
      ],
    },
    {
      heading: "Links to and from Other Websites",
      paragraphs: [
        "Advenco Blinds and Shutters is not responsible for the content or reliability of external websites and does not necessarily endorse the views expressed within them. Links to external sites should not be taken as an endorsement of any kind. We cannot guarantee that these links will work all of the time, and we have no control over the availability of the linked pages. Advenco Blinds and Shutters encourages users to establish hypertext links to our site. You do not need to ask permission to link directly to pages hosted on our website. However, you should obtain permission if you intend to use our logo.",
      ],
    },
  ],
};
