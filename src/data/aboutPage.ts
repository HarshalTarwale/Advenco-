/**
 * About Us Page — Content
 *
 * Data for the "/about-us/" page. Content is copied verbatim from the
 * WordPress site page.
 */

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads";

export const aboutHero = {
  badgeLabel: "About Advenco",
  heading: "Who We Are",
  subheading: "Advenco Window Blinds and Shutters",
  body: "Welcome to Advenco Window Blinds and Shutters, your premier destination for high-quality window coverings in the UK.",
  image: `${WP}/2024/12/steptodown.com675276-768x512.webp`,
  imageAlt: "Elegant living room window dressed with Advenco blinds",
};

export interface AboutSection {
  heading: string;
  body: string;
}

export const aboutIntro: AboutSection = {
  heading: "Who We Are",
  body: "Welcome to Advenco Window Blinds and Shutters, your premier destination for high-quality window coverings in the UK. We are dedicated to transforming your spaces with our elegant and functional blinds and shutters, tailored to meet the diverse needs of homes, offices, hotels, and commercial properties. Our mission is to provide top-notch products that combine aesthetic appeal with practical benefits, enhancing both the look and functionality of your windows.",
};

export const aboutSections: AboutSection[] = [
  {
    heading: "Our Vision",
    body: "At Advenco, we envision a world where every window reflects style, quality, and personal taste. We strive to be the leading supplier of bespoke window blinds and shutters in the UK, committed to innovation, craftsmanship, and customer satisfaction. Our goal is to set the standard for excellence in the window decoration industry, ensuring that every product we offer exceeds our customers' expectations.",
  },
  {
    heading: "Our Commitment to Quality",
    body: "Quality is at the heart of everything we do at Advenco Window Blinds and Shutters. We meticulously select the finest materials to craft our products, ensuring they are durable, stylish, and perfectly suited to withstand the UK's climate. From classic plantation shutters to modern roller blinds, each piece is made to last and designed to add a touch of elegance to your space. Our commitment to quality means you can trust that our products will not only look great but also provide lasting value.",
  },
];

export const productRangeIntro =
  "We offer an extensive range of window coverings, including:";

export const productRangeItems: AboutSection[] = [
  {
    heading: "Plantation Shutters",
    body: "Ideal for a timeless and elegant look, our plantation shutters are available in various styles such as full height, tier on tier, and café style, suitable for any room and decor.",
  },
  {
    heading: "Blinds",
    body: "From roller and Venetian blinds to Roman and vertical blinds, we provide a wide array of options to fit your style and functionality needs.",
  },
  {
    heading: "Blinds Screen",
    body: "Our blinds screens offer an elegant solution for maintaining privacy while allowing natural light to filter into your space. Available in various materials and finishes, they are easy to operate and maintain, ensuring a perfect fit for any window.",
  },
  {
    heading: "Custom Solutions",
    body: "We understand that every window is unique, which is why we offer bespoke solutions tailored to your specific requirements. Our made-to-measure services ensure a perfect fit for every window, large or small.",
  },
];

export const whyChooseIntro = "Why Choose Advenco?";
export const whyChooseBody =
  "Choosing Advenco Window Blinds and Shutters means choosing excellence, reliability, and style. Here's why our customers love us:";

export const whyChoosePoints: AboutSection[] = [
  {
    heading: "Expert Craftsmanship",
    body: "Our products are crafted with precision and attention to detail, ensuring top-notch quality and durability.",
  },
  {
    heading: "Personalized Service",
    body: "We provide personalized consultations and expert advice to help you select the perfect window coverings for your space.",
  },
  {
    heading: "Free Measuring and Fitting",
    body: "Our free window measuring and fitting service ensures a hassle-free experience from start to finish.",
  },
  {
    heading: "Wide Service Area",
    body: "We serve a broad range of locations across the UK.",
  },
];

export const customerPromise: AboutSection = {
  heading: "Our Customer Promise",
  body: "At Advenco Window Blinds and Shutters, customer satisfaction is our top priority. We are committed to providing exceptional service and high-quality products that meet your needs and exceed your expectations. Our friendly and knowledgeable team is always ready to assist you, from helping you choose the right product to ensuring a seamless installation process.",
};

export const aboutClosing: AboutSection = {
  heading: "Contact Us",
  body: "Ready to transform your windows with stunning blinds and shutters? Contact us today to schedule a consultation or to learn more about our products and services. Whether you're looking for a classic, modern, or custom solution, Advenco Window Blinds and Shutters is here to help you find the perfect fit for your space.",
};

export const aboutSideImage = {
  image: `${WP}/2024/12/Untitled-design-5-768x579.webp`,
  imageAlt: "Advenco showroom display of blinds and shutters",
};

export const aboutBannerImage = {
  image: `${WP}/2024/11/steptodown.com694616-768x456.webp`,
  imageAlt: "Dark tier-on-tier shutters on an interior window with an ocean view",
};

export const aboutMeta = {
  metaTitle: "About Us | Advenco Blinds and Shutters",
  metaDescription:
    "Advenco Window Blinds and Shutters — your premier destination for high-quality window coverings in the UK, crafted with precision and personalised service.",
};
