/**
 * Contact Us Page — Content
 *
 * Data for the "/contact-us/" page. Content is copied verbatim from the
 * WordPress site page.
 */

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads";

export const contactHero = {
  badgeLabel: "Get In Touch",
  heading: "Book a Free Quote",
  subheading: "with Us",
  body: "From the comfort of your home — tell us about your windows and one of our showroom experts will be in touch to arrange your free consultation.",
  image: `${WP}/2024/11/steptodown.com791645-768x502.webp`,
  imageAlt: "Blue café style shutters fitted to windows on a white house exterior",
};

export interface Showroom {
  name: string;
  address: string;
  phone?: string;
}

export const showrooms: Showroom[] = [
  {
    name: "Morley Showroom",
    address: "57 Queen Street Morley, Leeds LS27 8EB",
    phone: "0800 054 1880",
  },
  {
    name: "Maidenhead Showroom",
    address: "28 Kings Street Maidenhead SL6 1EF",
  },
];

export const contactEmail = "info@advencoblindsandshutters.co.uk";
