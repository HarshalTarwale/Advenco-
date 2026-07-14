/**
 * Commercial Blinds — Sub-Page Content
 *
 * Data for the 5 "Commercial Blinds" category pages (Hospitals, Commercial
 * Buildings, Schools, Hotels, Colleges). Content sourced from the WordPress
 * site pages; each conforms to the shared CommercialBlindPage template shape
 * (hero + 5 benefit cards + 5 "why choose Advenco" cards).
 */

export interface BenefitCard {
  icon: "sun" | "eye" | "leaf" | "shield" | "wrench" | "clock" | "users" | "book" | "sparkles";
  title: string;
  body: string;
}

export interface DifferentiatorCard {
  icon: "layers" | "award" | "shield-check" | "users" | "pound";
  title: string;
  body: string;
}

export interface CommercialBlindPageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  badgeLabel: string;
  heroHeadingLines: [string, string]; // second line rendered in italic teal
  heroBody: string;
  heroImage: string;
  heroImageAlt: string;
  sideImage: string;
  sideImageAlt: string;
  importanceLabel: string;
  importanceHeadingLines: [string, string];
  importanceBody: string;
  benefits: BenefitCard[];
  differentiators: DifferentiatorCard[];
  bannerImage: string;
  bannerImageAlt: string;
  closingHeading: string;
  closingBody: string;
}

export const commercialBlindsPages: Record<string, CommercialBlindPageContent> = {
  "blinds-for-hospitals": {
    slug: "blinds-for-hospitals",
    metaTitle: "Blinds for Hospitals | Durable and Safe Window Treatments | Advenco",
    metaDescription:
      "Specialised window blinds for hospitals across the UK — infection control, privacy, energy efficiency, and easy maintenance from Advenco Blinds and Shutters.",
    badgeLabel: "Healthcare Window Solutions",
    heroHeadingLines: ["Window Blinds for Hospitals", "in the UK"],
    heroBody:
      "Enhance patient care with specialised window treatments designed for healthcare facilities — controlling light, ensuring privacy, and supporting infection control across the UK.",
    heroImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Modern hospital corridor with clean, professional window blinds",
    sideImage:
      "https://images.unsplash.com/photo-1706521778346-89b688c68b71?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Bright hospital consultation room with a large window",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Hospitals"],
    importanceBody:
      "Window blinds in hospitals are not just for aesthetics. They play a vital role in controlling natural light, ensuring privacy, reducing glare, and contributing to infection control. Here's how our specially designed blinds benefit healthcare facilities:",
    benefits: [
      {
        icon: "sun",
        title: "Enhanced Patient Comfort & Recovery",
        body: "Natural light is a crucial factor in patient recovery. Our hospital blinds allow for optimal light control, ensuring rooms are neither too bright nor too dark — maintaining a soothing environment conducive to rest and healing.",
      },
      {
        icon: "eye",
        title: "Improved Privacy",
        body: "Privacy is paramount in a hospital setting. Our range of blackout and dim-out options ensures patients enjoy the privacy they need, particularly important in wards and shared rooms where multiple patients require individual privacy.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Hospitals operate around the clock. Advenco blinds aid in managing indoor climate by minimising heat loss in winter and minimising heat gain in summer — lowering energy consumption and costs.",
      },
      {
        icon: "shield",
        title: "Infection Control",
        body: "Infection control is a top priority in hospitals. Our blinds are made from easy-to-clean materials that are less likely to harbour dust and bacteria compared to traditional curtains, making them safer for patient rooms and operating theatres.",
      },
      {
        icon: "wrench",
        title: "Ease of Maintenance",
        body: "Advenco's hospital blinds are not only durable but require minimal maintenance. Easy to operate and clean — essential for the busy hospital environment where time and efficiency are of the essence.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Custom Solutions",
        body: "Every hospital has unique requirements. We offer a wide range of blinds — including roller, vertical, and venetian — customisable to fit any window size and shape. Our expert team works closely with hospital administrators to understand specific needs and provide solutions that enhance functionality and aesthetics.",
      },
      {
        icon: "award",
        title: "High-Quality Materials",
        body: "We use only the highest quality materials to ensure our hospital blinds are durable and long-lasting. Designed to withstand the rigorous demands of a hospital environment while maintaining their appearance and functionality over time.",
      },
      {
        icon: "shield-check",
        title: "Compliance with Regulations",
        body: "Our hospital blinds are designed to comply with the latest UK regulations for healthcare facilities, including fire safety and hygiene standards. Hospitals can trust our products to provide not only functionality but also safety and reliability.",
      },
      {
        icon: "users",
        title: "Professional Installation",
        body: "Our team of experienced professionals ensures blinds are installed correctly and efficiently, causing minimal disruption to hospital operations. We also provide ongoing support and maintenance services to keep blinds in optimal condition.",
      },
      {
        icon: "pound",
        title: "Competitive Pricing",
        body: "We offer competitive pricing without compromising on quality. Our cost-effective solutions are designed to meet the budgetary constraints of healthcare facilities while delivering exceptional value.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1719934398679-d764c1410770?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Bright hospital corridor with floor-to-ceiling windows",
    closingHeading: "Improve Your Patient Care with Blinds by Advenco",
    closingBody:
      "Integrating the right window blinds throughout your hospital improves patient comfort, energy efficiency, and infection control. Contact us today to discuss our comprehensive range of window blinds and how we can help transform your hospital.",
  },

  "blinds-for-commercial-buildings": {
    slug: "blinds-for-commercial-buildings",
    metaTitle: "Blinds for Commercial Buildings | Durable Window Solutions | Advenco",
    metaDescription:
      "Transform your commercial space with premium window blinds from Advenco Blinds and Shutters — tailored for offices, restaurants, and retail stores across the UK.",
    badgeLabel: "Commercial Window Solutions",
    heroHeadingLines: ["Window Blinds for Commercial", "Buildings in the UK"],
    heroBody:
      "Elevate your business environment with premium window blinds — bespoke solutions for offices, restaurants, and retail stores that combine style, light control, and durability.",
    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Modern commercial office interior with professional window blinds",
    sideImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Commercial office window fitted with professional blinds",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Commercial Buildings"],
    importanceBody:
      "First impressions are everything. The right window treatments elevate the appearance of your business while offering practical benefits — from light control to energy savings. Here's how our blinds benefit commercial spaces:",
    benefits: [
      {
        icon: "sparkles",
        title: "Aesthetic Appeal",
        body: "Commercial window blinds offer a sleek and modern look that elevates the appearance of any business, available in a wide range of styles, colours, and materials to suit your brand.",
      },
      {
        icon: "sun",
        title: "Light Control and Privacy",
        body: "Our blinds provide excellent control over the amount of natural light entering a space, while enhancing privacy for offices, meeting rooms, and customer-facing areas.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Window treatments help reduce the amount of heat entering or leaving a building, contributing to lower energy bills throughout the year.",
      },
      {
        icon: "shield",
        title: "Durability and Easy Maintenance",
        body: "Our commercial blinds are durable and easy to maintain, making them a practical choice for busy environments with high footfall.",
      },
      {
        icon: "wrench",
        title: "Wide Product Range",
        body: "From vertical and roller to Venetian, blackout, and motorised blinds — we offer an extensive range tailored to commercial applications of every kind.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Extensive Range of Products",
        body: "We offer vertical, roller, Venetian, blackout, and motorised blinds designed specifically for commercial applications.",
      },
      {
        icon: "award",
        title: "Customization Options",
        body: "Every commercial space is unique. Advenco offers bespoke commercial blinds tailored to fit the specific dimensions and requirements of your windows.",
      },
      {
        icon: "shield-check",
        title: "Professional Installation",
        body: "Our expert team ensures a correct and efficient installation, guaranteeing a perfect fit and smooth operation for every window.",
      },
      {
        icon: "users",
        title: "Exceptional Customer Service",
        body: "From consultation to aftercare, Advenco ensures a seamless experience, offering expert advice at every step of the process.",
      },
      {
        icon: "pound",
        title: "Competitive Pricing",
        body: "Quality doesn't have to break the bank. Advenco provides competitive pricing without compromising on quality.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Open-plan commercial office space with window blinds fitted",
    closingHeading: "Transform Your Commercial Space with Advenco",
    closingBody:
      "Ready to transform your commercial space? Contact Advenco Blinds and Shutters today for a free consultation.",
  },

  "blinds-for-school": {
    slug: "blinds-for-school",
    metaTitle: "Blinds for Schools | Practical & Durable Window Solutions | Advenco",
    metaDescription:
      "Enhance learning environments with window blinds for schools — light control, energy efficiency, and privacy from Advenco Blinds and Shutters across the UK.",
    badgeLabel: "Education Window Solutions",
    heroHeadingLines: ["Window Blinds for Schools", "in the UK"],
    heroBody:
      "Creating a conducive learning environment is paramount. Enhance classrooms and shared spaces with precise light control, energy efficiency, and privacy — tailored for schools across the UK.",
    heroImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright school classroom with professional window blinds",
    sideImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "School classroom window fitted with blinds",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Schools"],
    importanceBody:
      "Window treatments are often overlooked in schools, yet they play a vital role in creating a productive learning environment. Here's how our blinds benefit educational facilities:",
    benefits: [
      {
        icon: "sun",
        title: "Light Control and Glare Reduction",
        body: "Classrooms need adequate natural light to create a pleasant and stimulating environment. Excessive sunlight causes glare on whiteboards and screens, decreasing productivity — our blinds offer precise light control for a well-lit, glare-free space.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Blinds regulate indoor temperatures by minimising heat loss in winter and reducing heat gain in summer, resulting in lower energy consumption and cost savings.",
      },
      {
        icon: "eye",
        title: "Privacy and Security",
        body: "Privacy is essential, especially in rooms like offices, staff rooms, and examination halls. Our blinds provide privacy while maintaining natural light access and adding security by obstructing external views.",
      },
      {
        icon: "sparkles",
        title: "Aesthetics and Customization",
        body: "A wide range of designs, colours, and materials are available, allowing schools to match interior décor and branding across every space.",
      },
      {
        icon: "shield",
        title: "Blackout Options for Labs & Media Rooms",
        body: "For spaces requiring complete darkness, such as media rooms and science labs, our blackout blinds block out all light — ensuring the best environment for presentations and experiments.",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "High-Quality Products",
        body: "Durable, functional, and stylish blinds designed specifically for school environments and daily classroom use.",
      },
      {
        icon: "users",
        title: "Expert Consultation and Installation",
        body: "Comprehensive consultation services paired with professional installation, ensuring optimal function across every classroom.",
      },
      {
        icon: "pound",
        title: "Competitive Pricing",
        body: "Cost-effective solutions that acknowledge the budget constraints faced by educational institutions.",
      },
      {
        icon: "shield-check",
        title: "Ongoing Support and Maintenance",
        body: "Post-installation support ensuring continued performance throughout the life of your blinds.",
      },
      {
        icon: "layers",
        title: "Variety of Product Options",
        body: "Roller, vertical, Venetian, and blackout blinds — multiple blind types tailored for different school spaces, from classrooms to labs.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Empty school classroom with window blinds visible in the background",
    closingHeading: "Enhance Your Learning Environment with Advenco",
    closingBody:
      "For more information or to schedule a consultation, contact Advenco Blinds and Shutters today.",
  },

  "window-blinds-for-hotels": {
    slug: "window-blinds-for-hotels",
    metaTitle: "Window Blinds for Hotels | Elegant & Durable Solutions | Advenco",
    metaDescription:
      "Premium window blinds for hotels, bars, and restaurants — light control, privacy, and ambience from Advenco Blinds and Shutters across the UK.",
    badgeLabel: "Hospitality Window Solutions",
    heroHeadingLines: ["Window Blinds for Hotels", "in the UK"],
    heroBody:
      "Transform your ambience with stylish window blinds for hotels, bars, and restaurants — managing light, enhancing privacy, and elevating guest experience across the UK.",
    heroImage:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Elegant hotel room with professional window blinds",
    sideImage:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Hotel window fitted with premium blinds",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Hotels"],
    importanceBody:
      "Proper window treatments enhance both the aesthetic appeal and functionality of hospitality spaces. Here's how our blinds benefit hotels, bars, and restaurants:",
    benefits: [
      {
        icon: "sun",
        title: "Light Control and Ambience",
        body: "Manage natural light throughout the day to create the desired mood for every space, from bright breakfast rooms to intimate evening dining.",
      },
      {
        icon: "eye",
        title: "Privacy and Comfort",
        body: "Ensuring guest security and enhancing the dining or resting experience with blackout and dim-out options tailored to each room.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Regulating indoor temperatures to reduce heating and cooling needs — lowering running costs across large hospitality venues.",
      },
      {
        icon: "sparkles",
        title: "Aesthetic Appeal",
        body: "Complementing your interior décor to positively impact customer perceptions, from Venetian blinds in bars to Roman blinds in restaurants.",
      },
      {
        icon: "shield",
        title: "Restful Sleep for Guests",
        body: "Blackout and thermal blinds for hotel bedrooms ensure a restful night's sleep and consistent room comfort in every season.",
      },
    ],
    differentiators: [
      {
        icon: "users",
        title: "Expert Consultation",
        body: "Personalised guidance for selecting the ideal blinds for hotels, bars, and restaurants of any size.",
      },
      {
        icon: "award",
        title: "High-Quality Materials",
        body: "Durable, long-lasting performance built to withstand the demands of a busy hospitality environment.",
      },
      {
        icon: "layers",
        title: "Custom Solutions",
        body: "Bespoke tailoring to the specific needs of your venue — from blackout bedrooms to statement bar interiors.",
      },
      {
        icon: "shield-check",
        title: "Professional Installation",
        body: "Seamless fitting by skilled technicians, minimising disruption to daily hotel and restaurant operations.",
      },
      {
        icon: "pound",
        title: "Exceptional Customer Service",
        body: "Support from consultation through aftercare, with competitive pricing that doesn't compromise on quality.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Elegant hotel interior with window blinds fitted throughout",
    closingHeading: "Create an Unforgettable Guest Experience",
    closingBody:
      "Transform your space and create an unforgettable experience for your guests. Contact Advenco Blinds and Shutters today and let us help you make your establishment a standout success.",
  },

  "window-blinds-for-colleges": {
    slug: "window-blinds-for-colleges",
    metaTitle: "Window Blinds for Colleges | Practical & Durable Solutions | Advenco",
    metaDescription:
      "Enhance learning spaces with quality window blinds for colleges and universities — light control, energy efficiency, and safety from Advenco Blinds and Shutters.",
    badgeLabel: "Higher Education Window Solutions",
    heroHeadingLines: ["Window Blinds for Colleges", "& Universities"],
    heroBody:
      "When creating an optimal learning environment, colleges and universities must consider every detail — including window treatments. Enhance lecture halls, study rooms, and offices across the UK.",
    heroImage:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "University lecture hall with professional window blinds",
    sideImage:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "College building window fitted with blinds",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Colleges"],
    importanceBody:
      "Window treatments are a crucial but often overlooked aspect of the learning environment. Here's how our blinds benefit colleges and universities:",
    benefits: [
      {
        icon: "sun",
        title: "Control Lighting for Optimal Learning",
        body: "Excessive sunlight can cause glare, making it difficult for students to see screens and read materials. Our blinds enable precise light control for ideal concentration.",
      },
      {
        icon: "leaf",
        title: "Enhance Energy Efficiency",
        body: "Blinds provide an insulation layer that reduces heating and cooling expenses and lowers your institution's carbon footprint.",
      },
      {
        icon: "eye",
        title: "Improve Focus and Reduce Distractions",
        body: "In urban settings, window treatments minimise distractions by blocking outside noise and views, helping students stay focused.",
      },
      {
        icon: "shield",
        title: "Ensure Privacy and Security",
        body: "Essential for exam rooms, offices, and counselling areas — our blinds provide the privacy these spaces require.",
      },
      {
        icon: "sparkles",
        title: "Customizable Aesthetics",
        body: "A wide range of styles, colours, and materials are available to match institutional décor across every building.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Wide Range of Products",
        body: "Vertical, roller, and Venetian blinds available in various materials and finishes to suit any campus building.",
      },
      {
        icon: "award",
        title: "High-Quality and Durable",
        body: "Made from high-quality materials designed to withstand the rigours of daily use, with easy maintenance.",
      },
      {
        icon: "users",
        title: "Professional Installation",
        body: "Expert fitting that minimises disruption to lectures, exams, and daily campus operations.",
      },
      {
        icon: "shield-check",
        title: "Compliance with Safety Standards",
        body: "All our window blinds for colleges and universities in the UK follow safety standards, including child-safe mechanisms where required.",
      },
      {
        icon: "pound",
        title: "Expert Advice and Support",
        body: "Free consultations and on-site evaluations to help you choose the right solution for every space on campus.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "University lecture hall with large windows fitted with blinds",
    closingHeading: "Create the Ideal Environment for Education",
    closingBody:
      "Contact Advenco Blinds and Shutters today for a free consultation and let us help you create the ideal environment for education.",
  },
};

export type CommercialBlindsSlug = keyof typeof commercialBlindsPages;
