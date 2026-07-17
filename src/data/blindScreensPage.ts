/**
 * Blind Screens Page — Content
 *
 * Data for the "/blinds-screens/" page. Content is copied verbatim from the
 * WordPress site page; conforms to the shared CommercialBlindPage template
 * shape — the same component used across every other product page, since
 * the layout is identical and only content/images change.
 *
 * Images are the real blind screen photos hosted on the source WordPress
 * site (wp-content/uploads/2024/11/steptodown.com*.webp), not stock
 * substitutes.
 */

import type { CommercialBlindPageContent } from "./commercialBlindsPages";

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/11";

export const blindScreensPage: CommercialBlindPageContent = {
  slug: "blinds-screens",
  metaTitle: "Blind Screens in the UK | Insect Protection & Light Control | Advenco",
  metaDescription:
    "Blind screens from Advenco Windows Blinds and Shutters — insect protection, light control, and energy efficiency combined in one made-to-measure window covering.",
  badgeLabel: "Blind Screens",
  heroHeadingLines: ["Embrace the Light,", "Control Privacy"],
  heroBody: [
    "For UK homeowners, summer brings a welcome wave of sunshine, longer days, and the chance to fling open the windows and let in the fresh air. But this often comes with an unwelcome side effect: a surge in unwanted insect activity. Mosquitoes, flies, and other pests can quickly turn a relaxing evening into a swatting frenzy.",
    "Here at Advenco Windows Blinds and Shutters in UK, we offer a stylish solution that addresses both your desire for fresh air and your need for a pest-free environment: blind screens.",
  ],
  heroImage: `${WP}/steptodown.com270369-768x576.webp`,
  heroImageAlt: "Warm evening light through a mesh roller blind screen",
  sideImage: `${WP}/steptodown.com423056-768x504.webp`,
  sideImageAlt: "Glass patio doors fitted with roller blind screens overlooking a garden",
  importanceLabel: "What Are Blind Screens",
  importanceHeadingLines: ["Insect Protection Meets", "Light and Privacy Control"],
  importanceBody: [
    "Blind screens, also known as insect screens or integrated blinds, offer a unique combination of functionality and style. They incorporate a mesh screen for insect protection alongside a blind for light and privacy control. They offer a sleek, modern aesthetic while providing the benefits below.",
  ],
  benefits: [
    {
      icon: "shield",
      title: "Insect Protection",
      body: "Enjoy fresh air without the worry of buzzing or biting insects.",
    },
    {
      icon: "sun",
      title: "Light Control",
      body: "Choose from various fabric options, including blackout for ultimate privacy and light control.",
    },
    {
      icon: "leaf",
      title: "Energy Efficiency",
      body: "Keep cool air in during the summer and warm air in during the winter, reducing reliance on air conditioning and heating.",
    },
    {
      icon: "sparkles",
      title: "Stylish Design",
      body: "Upgrade your home's décor with a variety of colours and finishes to complement any style.",
    },
  ],
  differentiators: [
    {
      icon: "users",
      title: "Expert Advice",
      body: "Our knowledgeable staff have years of experience helping customers find the perfect window coverings for their needs. They will take the time to understand your requirements and recommend the best type of blind screens for your home.",
    },
    {
      icon: "award",
      title: "Free Consultation",
      body: "We offer free in-home consultations to assess your needs and measure your windows. This ensures that your blind screens are a perfect fit and provide the level of light control, privacy, and insect protection you desire.",
    },
    {
      icon: "shield-check",
      title: "High-Quality Products",
      body: "We use only the finest materials to ensure that our blind screens are durable, stylish, and long-lasting. We source our materials from reputable suppliers and our products are built to meet the highest standards of quality.",
    },
    {
      icon: "layers",
      title: "Professional Installation",
      body: "Our experienced team of installers will ensure that your blind screens are fitted perfectly and operate smoothly. They will take care of everything, so you can relax and enjoy your new window coverings.",
    },
    {
      icon: "pound",
      title: "Excellent Customer Service",
      body: "We are committed to providing our customers with excellent customer service. We are always available to answer your questions and address any concerns you may have.",
    },
  ],
  extraSections: [
    {
      heading: "Types of Blind Screens in the UK",
      paragraphs: [
        "Blackout Blind Screens — block out light entirely, perfect for bedrooms and media rooms. These are ideal for shift workers or anyone who needs complete darkness for sleeping.",
        "Thermal Blind Screens — insulate windows, improving energy efficiency and reducing heating and cooling costs. Thermal blind screens are a great choice for homeowners looking to save on energy bills.",
        "Pleated Blind Screens — offer a soft, textured look and excellent light control. Pleated blind screens come in a variety of colours and fabrics to suit any style.",
        "Vertical Blind Screens — ideal for patio doors and large windows. Vertical blind screens are easy to operate and provide excellent privacy control.",
      ],
    },
    {
      heading: "Finding the Perfect Blind Screens in the UK",
      paragraphs: [
        "At Advenco Windows Blinds and Shutters in UK, we offer a wide selection of high-quality blind screens to suit your needs and style. Here's what to consider:",
      ],
      bullets: [
        "Fabric Choices: Select from a variety of roller blind fabrics for light control and aesthetics. Choose mesh or insect screen options for the secondary blind.",
        "Operation: We offer manual and electric operation options for ultimate convenience.",
        "Size and Customization: Our blind screens are available in made-to-measure sizes to perfectly fit your windows.",
      ],
    },
    {
      heading: "The Versatility of Blind Screens in the UK",
      paragraphs: [
        "While keeping out insects is a major advantage, blind screens offer numerous other benefits.",
      ],
      bullets: [
        "Privacy: Maintain privacy while still enjoying natural light with light filtering fabrics.",
        "Glare Reduction: Reduce screen glare for comfortable viewing of TVs or computer monitors.",
        "Sun Protection: Protect furniture and artwork from harmful UV rays.",
      ],
    },
    {
      heading: "Additional Benefits",
      paragraphs: [
        "In addition to the above, we also offer a wide range of additional benefits.",
      ],
      bullets: [
        "Competitive Prices: We offer competitive prices on all of our blind screens in the UK.",
        "Wide Selection: We have a wide selection of blind screens in UK to choose from, so you can find the perfect style and colour to match your décor.",
        "Guarantee: We offer a guarantee on all of our products and workmanship.",
      ],
    },
  ],
  bannerImage: `${WP}/steptodown.com666830-768x512.webp`,
  bannerImageAlt: "Hand operating a remote control for motorised blind screens",
  closingImage: `${WP}/steptodown.com219118-768x512.webp`,
  closingImageAlt: "Bright living room window fitted with a blind screen",
  closingHeading: "Transform Your Home with Advenco Blind Screens",
  closingBody: [
    "Advenco window blinds and shutters in UK is your one-stop shop for all your blind screen needs in the UK. Contact us today for a free consultation and discover the perfect solution for your windows.",
    "We offer expert advice, high-quality products, and exceptional customer service to ensure complete satisfaction.",
  ],
};
