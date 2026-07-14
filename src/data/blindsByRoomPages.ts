/**
 * Blinds by Room — Sub-Page Content
 *
 * Data for the 6 "Blinds by Room" category pages (Bathroom, Bedroom, Kitchen,
 * Dining Room, Living Room, Office). Content sourced from the WordPress site
 * pages; each conforms to the shared CommercialBlindPage template shape
 * (hero + 5 benefit cards + 5 "why choose Advenco" cards) — the same
 * component used for the Commercial Blinds pages, since the layout is
 * identical and only content/images change.
 */

import type { CommercialBlindPageContent } from "./commercialBlindsPages";

export const blindsByRoomPages: Record<string, CommercialBlindPageContent> = {
  "bathroom-window-blinds": {
    slug: "bathroom-window-blinds",
    metaTitle: "Bathroom Window Blinds | Stylish & Functional Solutions | Advenco",
    metaDescription:
      "Waterproof, made-to-measure bathroom blinds from Advenco Blinds and Shutters — metal Venetian, roller, and PVC options with free fitting in select UK cities.",
    badgeLabel: "Bathroom Window Solutions",
    heroHeadingLines: ["Bathroom Window", "Blinds in the UK"],
    heroBody:
      "Bathroom windows come in a variety of shapes, sizes, and dimensions. Our custom-designed blinds provide the perfect treatment — combining privacy, temperature insulation, and daylight control in fully waterproof materials.",
    heroImage:
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Modern bathroom with a frosted glass window and walk-in shower",
    sideImage:
      "https://images.unsplash.com/photo-1641481001093-592dd889b1af?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Close-up of a wooden Venetian blind fitted to a sunlit window",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Bathrooms"],
    importanceBody:
      "Bathroom windows need treatments that can handle moisture without compromising on privacy or style. Here's how our specially designed blinds benefit every bathroom:",
    benefits: [
      {
        icon: "eye",
        title: "Enhanced Privacy",
        body: "Bathroom windows demand reliable privacy. Our blinds give you full control over visibility from outside, without sacrificing natural light.",
      },
      {
        icon: "shield",
        title: "Fully Waterproof",
        body: "Made from high-quality waterproof PVC and coated aluminium, our bathroom blinds are built to withstand steam and humidity without warping or staining.",
      },
      {
        icon: "sun",
        title: "Daylight Control",
        body: "Adjust light levels easily to suit the moment — bright and airy for your morning routine, softened for a relaxing evening soak.",
      },
      {
        icon: "leaf",
        title: "Temperature Insulation",
        body: "Our blinds help retain warmth in the bathroom during colder months, keeping the room comfortable while reducing energy loss.",
      },
      {
        icon: "sparkles",
        title: "Custom Sizing & Colours",
        body: "Every bathroom window is different. We offer custom sizing, shapes, and a wide range of colours to complement your bathroom's design.",
      },
    ],
    differentiators: [
      {
        icon: "pound",
        title: "Affordable Pricing",
        body: "Competitive pricing across all design and size requirements, with no compromise on quality or finish.",
      },
      {
        icon: "layers",
        title: "Custom-Made, Perfect Fit",
        body: "Every blind is made to measure for your exact window, ensuring a precise, professional fit every time.",
      },
      {
        icon: "sparkles",
        title: "Extensive Customization",
        body: "Choose from a wide range of materials, styles, and finishes to match your bathroom's look and feel.",
      },
      {
        icon: "users",
        title: "Free Fitting in Select Cities",
        body: "We offer free measuring and fitting services in selected cities and regions across the UK.",
      },
      {
        icon: "award",
        title: "High-Quality Materials",
        body: "We use only durable, moisture-resistant materials with meticulous attention to detail on every order.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1656646523430-deb9d3fabca0?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Frosted bathroom window with a chrome towel rail beneath it",
    closingHeading: "Upgrade Your Bathroom with Blinds by Advenco",
    closingBody:
      "From waterproof roller blinds to elegant metal Venetians, we have the perfect treatment for every bathroom window. Contact us today or place your order to get a free quote.",
  },

  "bedroom-window-blinds": {
    slug: "bedroom-window-blinds",
    metaTitle: "Bedroom Window Blinds | Comfort and Privacy Solutions | Advenco",
    metaDescription:
      "Custom bedroom blinds from Advenco Blinds and Shutters — dimout, blackout, and privacy options in wood, metal Venetian, and Roman styles, with free measuring and fitting.",
    badgeLabel: "Bedroom Window Solutions",
    heroHeadingLines: ["Bedroom Window", "Blinds in the UK"],
    heroBody:
      "Bedrooms are some of the most frequently used rooms in the home, and deserve window treatments to match. Explore premium blinds in wood, metal Venetian, and Roman styles — with free measuring and fitting in selected areas.",
    heroImage:
      "https://images.unsplash.com/photo-1615911577983-e2bb805354b3?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Cosy attic bedroom with a roller blind fitted to the window",
    sideImage:
      "https://images.unsplash.com/photo-1586205009278-cf9854b97d0c?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Bedroom window with sheer curtains and a radiator below",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Bedrooms"],
    importanceBody:
      "Elevate your bedroom windows with custom blinds offering dimout, blackout, and privacy features in sleek designs and stunning finishes. Here's how our blinds benefit every bedroom:",
    benefits: [
      {
        icon: "eye",
        title: "Enhanced Privacy",
        body: "Privacy is essential in bedrooms. Options like blackout and Venetian blinds control the amount of visibility from the outside, day or night.",
      },
      {
        icon: "sun",
        title: "Light Control",
        body: "Manage natural light entry with precision — from gentle filtered sunlight in the morning to complete darkness for uninterrupted sleep.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Thermal and blackout options help regulate temperature, reducing heat loss during winter and keeping your room cooler in summer.",
      },
      {
        icon: "sparkles",
        title: "Aesthetic Appeal",
        body: "An extensive variety of styles and colours allows you to coordinate your blinds with bedroom décor, from modern to traditional.",
      },
      {
        icon: "shield",
        title: "Durability & Warranty",
        body: "Our bedroom blinds are made from durable materials and include warranty coverage for lasting peace of mind.",
      },
    ],
    differentiators: [
      {
        icon: "layers",
        title: "Custom Fit",
        body: "A bespoke service with precise measurements ensures every blind is customised to your exact window specifications.",
      },
      {
        icon: "users",
        title: "Expert Installation",
        body: "Our skilled installers ensure proper fitting every time, with no hassle and minimal disruption to your home.",
      },
      {
        icon: "award",
        title: "Quality & Durability",
        body: "We're committed to using quality materials designed for longevity, so your bedroom blinds look great for years to come.",
      },
      {
        icon: "shield-check",
        title: "Professional Consultation",
        body: "Free consultation and measuring services are available to help you choose the perfect blinds for your bedroom.",
      },
      {
        icon: "pound",
        title: "Showroom Access",
        body: "Visit our physical showrooms in Morley and Maidenhead to see and feel our full range of bedroom blinds in person.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1630699376106-d550afb865bd?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Empty modern bedroom with a large window overlooking greenery",
    closingHeading: "Elevate Your Bedroom Windows with Advenco",
    closingBody:
      "Whether you need blackout blinds for better sleep or stylish Roman blinds to complete your décor, our team is here to help. Contact us today to learn more or schedule a free consultation.",
  },

  "kitchen-window-blinds": {
    slug: "kitchen-window-blinds",
    metaTitle: "Kitchen Window Blinds | Stylish & Durable Designs | Advenco",
    metaDescription:
      "Made-to-measure kitchen blinds from Advenco Blinds and Shutters — waterproof roller, metal Venetian, wooden, and vertical options with a best price match guarantee.",
    badgeLabel: "Kitchen Window Solutions",
    heroHeadingLines: ["Kitchen Window", "Blinds in the UK"],
    heroBody:
      "Upgrade your kitchen window coverings with our exceptional kitchen blinds. Enjoy natural daylight and window insulation with custom styles, designs, colours, and finishes made to order.",
    heroImage:
      "https://images.unsplash.com/photo-1634672050277-16639332c727?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright kitchen with a large window over the sink looking out to trees",
    sideImage:
      "https://images.unsplash.com/photo-1653267407376-b3c133549fc4?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Kitchen window fitted with a roller blind above the sink",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Kitchens"],
    importanceBody:
      "The accuracy of window treatments is crucial for their performance. Even a minor sizing or fitting error can significantly impact how a kitchen blind operates. Here's how our perfectly fitted blinds benefit every kitchen:",
    benefits: [
      {
        icon: "shield",
        title: "Waterproof & Durable",
        body: "Made with waterproof, flexible materials, our kitchen blinds are built to handle steam, splashes, and daily wear without losing their finish.",
      },
      {
        icon: "sun",
        title: "Daylight Control",
        body: "Enjoy dimout or blackout options that let you manage natural light while keeping your kitchen bright and welcoming.",
      },
      {
        icon: "leaf",
        title: "Temperature Insulation",
        body: "Custom-designed blinds help insulate your kitchen windows, keeping the room comfortable throughout the year.",
      },
      {
        icon: "sparkles",
        title: "Extensive Customization",
        body: "A wide variety of custom designs, colours, textures, and finishes ensures your kitchen gets exactly the treatment it deserves.",
      },
      {
        icon: "wrench",
        title: "Perfect Fit Guarantee",
        body: "Our made-to-measure kitchen blinds are precisely sized to your windows, avoiding the misalignment issues of off-the-shelf options.",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "High-Quality Materials",
        body: "Our premium kitchen blinds are crafted from the finest locally sourced materials for exceptional durability.",
      },
      {
        icon: "pound",
        title: "Price Match Guarantee",
        body: "We ensure you receive the highest value for money with a best price match guarantee on all our kitchen blinds.",
      },
      {
        icon: "sparkles",
        title: "Extensive Variety",
        body: "An extensive variety of custom designs, colours, and styles are available to suit any kitchen interior.",
      },
      {
        icon: "users",
        title: "Free Fitting in Select Areas",
        body: "Complimentary measuring and fitting appointments are available in select cities — contact us for details.",
      },
      {
        icon: "shield-check",
        title: "Trusted UK Supplier",
        body: "As trusted window blinds suppliers in the UK, we offer professional service from order through installation.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1590880265945-6b43effeb599?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Sunlit kitchen windowsill with a small potted plant",
    closingHeading: "Enhance Your Kitchen with Blinds by Advenco",
    closingBody:
      "From waterproof roller blinds to luxurious wooden Venetians, we have the perfect kitchen window treatment for you. Place your order today to have your kitchen blinds delivered or fitted at your convenience.",
  },

  "dining-room-window-blinds": {
    slug: "dining-room-window-blinds",
    metaTitle: "Dining Room Window Blinds | Elegant & Functional Designs | Advenco",
    metaDescription:
      "Elegant dining room blinds from Advenco Blinds and Shutters — faux wood, privacy wood, and roller options with free measuring and fitting across the UK.",
    badgeLabel: "Dining Room Window Solutions",
    heroHeadingLines: ["Dining Room Window", "Blinds in the UK"],
    heroBody:
      "The dining room is where meals and memories are made — its window treatments deserve thoughtful selection. Explore premium blinds with complimentary measuring and fitting services nationwide.",
    heroImage:
      "https://images.unsplash.com/photo-1696986296905-e631802befb0?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright dining room with tall windows overlooking a garden",
    sideImage:
      "https://images.unsplash.com/photo-1628985095652-cb94d4c263dc?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Elegant dining room window dressed with layered curtains",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Dining Rooms"],
    importanceBody:
      "Your dining room deserves window treatments that balance elegance and practicality. Here's how our blinds benefit every dining space:",
    benefits: [
      {
        icon: "eye",
        title: "Maintain Privacy",
        body: "Blinds ensure privacy for your family during meals and gatherings, without blocking out natural light entirely.",
      },
      {
        icon: "sparkles",
        title: "Variety",
        body: "Available in numerous designs, colours, and materials — from faux wood to roller blinds — to suit any dining room style.",
      },
      {
        icon: "wrench",
        title: "Low Maintenance",
        body: "Our dining room blinds are easier to clean compared to curtains and drapes, saving you time and effort.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Blinds help regulate room temperature effectively, keeping your dining room comfortable in every season.",
      },
      {
        icon: "shield",
        title: "Accurate, Perfect Fit",
        body: "Accurate measurements are crucial for ensuring your dining room blinds fit perfectly, and we get every detail right.",
      },
    ],
    differentiators: [
      {
        icon: "users",
        title: "Free Measuring and Fitting",
        body: "Hassle-free service for precise and perfect installation, available across the UK.",
      },
      {
        icon: "layers",
        title: "Expert Advice",
        body: "Professional assistance to help you choose the right material, colour, and design for your dining room.",
      },
      {
        icon: "award",
        title: "UK Manufactured",
        body: "All our blinds are manufactured in the UK and come with a 12-month guarantee.",
      },
      {
        icon: "pound",
        title: "Nationwide Delivery",
        body: "We provide affordable delivery services to customers across the entire UK.",
      },
      {
        icon: "sparkles",
        title: "Neutral & Patterned Options",
        body: "Choose from neutral tones like white, beige, and grey, or patterned options for extra aesthetic appeal.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1618326442388-19f430961020?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Modern dining room with black dining table beneath large windows",
    closingHeading: "Transform Your Dining Room with Advenco",
    closingBody:
      "Simply contact us, and we'll help transform your dining room with the perfect blinds for your space. Get a free quote today.",
  },

  "living-room-blinds": {
    slug: "living-room-blinds",
    metaTitle: "Living Room Blinds | Stylish & Functional Window Coverings | Advenco",
    metaDescription:
      "Elevate your living space with stylish living room blinds from Advenco Blinds and Shutters — vertical, Venetian, Roman, pleated, roller, and plantation shutter options.",
    badgeLabel: "Living Room Window Solutions",
    heroHeadingLines: ["Living Room", "Blinds in the UK"],
    heroBody:
      "The living room is the heart of the home. Elevate your living space with stylish blinds that combine aesthetic appeal with practical functionality, completing the room in every way.",
    heroImage:
      "https://images.unsplash.com/photo-1656122381069-9ec666d95cf1?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright living room with vaulted ceiling and plantation shutters",
    sideImage:
      "https://images.unsplash.com/photo-1631048501831-46856f9eaaf2?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Living room sectional sofa beneath large windows fitted with blinds",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Living Rooms"],
    importanceBody:
      "Living room blinds are essential window treatments that combine aesthetic appeal with practical functionality. Here's how our blinds benefit every living space:",
    benefits: [
      {
        icon: "sun",
        title: "Light Control",
        body: "Manage the amount of natural light entering your living room, from bright and airy to softly filtered.",
      },
      {
        icon: "eye",
        title: "Privacy",
        body: "Adjustable opacity levels give you security and peace of mind, whether you're relaxing or entertaining guests.",
      },
      {
        icon: "sparkles",
        title: "Style",
        body: "A wide range of materials, colours, and styles are available to enhance your living room décor, from classic to contemporary.",
      },
      {
        icon: "leaf",
        title: "Energy Efficiency",
        body: "Many of our living room blinds offer insulation benefits, helping regulate temperature across the seasons.",
      },
      {
        icon: "wrench",
        title: "Easy Maintenance",
        body: "Minimal upkeep is required for cleaning and care, keeping your living room looking its best with little effort.",
      },
    ],
    differentiators: [
      {
        icon: "sparkles",
        title: "Wide Selection",
        body: "Choose from vertical, Venetian, Roman, pleated, roller blinds, and plantation shutters across styles, materials, and colours.",
      },
      {
        icon: "layers",
        title: "Custom Made-to-Measure",
        body: "Every living room blind is made to measure, ensuring a precise fit for windows and doors of any size.",
      },
      {
        icon: "users",
        title: "Expert Advisory Team",
        body: "Our expert team is on hand to help you choose the right blinds for your living room's style and needs.",
      },
      {
        icon: "award",
        title: "High-Quality Materials",
        body: "We use durable, high-quality materials designed to keep their appearance and function for years to come.",
      },
      {
        icon: "pound",
        title: "Fast UK Delivery",
        body: "Enjoy fast delivery across the UK, along with free measuring and fitting available in select areas.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1771924648531-94af2b79dc96?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Living room armchair beside a window dressed with sheer curtains",
    closingHeading: "Complete Your Living Room with Advenco",
    closingBody:
      "Visit our showroom or browse our website to explore the full range. Contact us today to learn more or schedule a free consultation.",
  },

  "office-window-blinds": {
    slug: "office-window-blinds",
    metaTitle: "Office Window Blinds | Professional & Functional Designs | Advenco",
    metaDescription:
      "Professional-grade office blinds from Advenco Blinds and Shutters — wood, metal, fabric, integral, and motorised options with made-to-measure precision fit.",
    badgeLabel: "Office Window Solutions",
    heroHeadingLines: ["Office Window", "Blinds in the UK"],
    heroBody:
      "Workspaces and offices require specific attention when it comes to window treatments. Explore professional-grade office blinds delivered in precise, made-to-measure fit sizes.",
    heroImage:
      "https://images.unsplash.com/photo-1519575706483-221027bfbb31?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Bright home office corner with large sash windows",
    sideImage:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
    sideImageAlt: "Minimalist office desk positioned beside a window",
    importanceLabel: "The Importance",
    importanceHeadingLines: ["Why Window Blinds Matter", "in Offices"],
    importanceBody:
      "Office windows come in various sizes, dimensions, and layouts, and even minor variations can affect the fit of close in-frame blinds. Here's how our perfect fit blinds benefit every workspace:",
    benefits: [
      {
        icon: "sun",
        title: "Daylight Control",
        body: "Control daylight with our light management features, reducing screen glare and keeping the workspace comfortable.",
      },
      {
        icon: "eye",
        title: "Privacy for Meetings",
        body: "Enjoy privacy for meetings whenever needed, with dimout and blackout options built for professional settings.",
      },
      {
        icon: "leaf",
        title: "Temperature Insulation",
        body: "Custom designs provide temperature insulation, helping maintain a comfortable working environment year-round.",
      },
      {
        icon: "wrench",
        title: "Made-to-Measure Fit",
        body: "Our office blinds are available in perfect fit sizes, precisely matched to your window's exact shape and size.",
      },
      {
        icon: "sparkles",
        title: "Wide Range of Finishes",
        body: "Choose from wooden, metallic, or fabric blinds in various shapes, sizes, custom finishes, and styles.",
      },
    ],
    differentiators: [
      {
        icon: "pound",
        title: "Affordable Pricing",
        body: "Stylish office blinds at affordable prices in all sizes, available anytime you need them.",
      },
      {
        icon: "users",
        title: "Free Fitting Appointments",
        body: "Free office blinds fitting services are available in select cities, subject to location and availability.",
      },
      {
        icon: "shield-check",
        title: "100% Accurate Fit",
        body: "Our precise, made-to-measure process ensures 100% accurate perfect fit office blinds every time.",
      },
      {
        icon: "award",
        title: "Fast Shipping & Quality Finishes",
        body: "Fast shipping across the UK combined with premium, long-lasting finishes on every order.",
      },
      {
        icon: "layers",
        title: "Detailed Customization",
        body: "Customize your office window blinds with great attention to detail, from materials to colours and designs.",
      },
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1920&q=80",
    bannerImageAlt: "Office desk with computer monitor positioned beside a large window",
    closingHeading: "Fit Out Your Workspace with Advenco",
    closingBody:
      "Whether you need advice on choosing the right office blinds or want to schedule a free consultation, our friendly team is here to help. Contact us today at Advenco Window Blinds and Shutters.",
  },
};

export type BlindsByRoomSlug = keyof typeof blindsByRoomPages;
