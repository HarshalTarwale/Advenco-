/**
 * Areas Page — Content
 *
 * Data for the "/areas/" page. Town list is copied verbatim, in the exact
 * order it appears, from the source WordPress page. The source page has
 * no unique hero photograph, so a real shutter photo already used
 * elsewhere on the site is reused for the hero background per instruction.
 */

const WP = "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/11";

export const areasHero = {
  badgeLabel: "Areas We Cover",
  heading: "Advenco",
  subheading: "Coverage Areas",
  body: "From Leeds and Yorkshire to London and the Home Counties, our expert measuring and fitting teams cover towns and cities across the UK.",
  image: `${WP}/steptodown.com560336-768x512.webp`,
  imageAlt: "Dark exterior shutters fitted to a modern apartment balcony",
};

export const areasIntro = "Advenco - We covered following Areas";

export interface AreaLink {
  name: string;
  /** URL path, verbatim from the source site (some towns share a slug or
   *  point at a non-town page on the source site — preserved as-is). */
  href: string;
}

export const areasList: AreaLink[] = [
  { name: "Armthorpe", href: "/areas/advenco-window-blinds-and-shutters-armthorpe/" },
  { name: "Ashton Under Lyne", href: "/areas/advenco-window-blinds-and-shutters-armthorpe/" },
  { name: "Aldershot", href: "/areas/advenco-window-blinds-and-shutters-aldershot/" },
  { name: "Auckley", href: "/areas/advenco-window-blinds-and-shutters-auckley/" },
  { name: "Adwick le Street", href: "/areas/advenco-window-blinds-and-shutters-adwick-le-street/" },
  { name: "Barlborough", href: "/areas/advenco-window-blinds-and-shutters-barlborough/" },
  { name: "Aylesbury", href: "/areas/advenco-window-blinds-and-shutters-aylesbury/" },
  { name: "Basingstoke", href: "/areas/advenco-window-blinds-and-shutters-basingstoke/" },
  { name: "Batley", href: "/areas/advenco-window-blinds-and-shutters-batley/" },
  { name: "Bolton", href: "/areas/advenco-window-blinds-and-shutters-bolton/" },
  { name: "Bracknell", href: "/areas/blinds-for-commercial-bildings/" },
  { name: "Barnsley", href: "/areas/advenco-window-blinds-and-shutters-barnsley/" },
  { name: "Bramley", href: "/areas/advenco-window-blinds-and-shutters-bramley/" },
  { name: "Bradford", href: "/areas/advenco-window-blinds-and-shutters-bradford/" },
  { name: "Brinsworth", href: "/areas/advenco-window-blinds-and-shutters-brinsworth/" },
  { name: "Brentford", href: "/areas/advenco-window-blinds-and-shutters-brentford/" },
  { name: "Brighouse", href: "/areas/advenco-window-blinds-and-shutters-brighouse/" },
  { name: "Bury", href: "/areas/advenco-window-blinds-and-shutters-bury/" },
  { name: "Burngreave", href: "/areas/advenco-window-blinds-and-shutters-burngreave/" },
  { name: "Cleckheaton", href: "/areas/advenco-window-blinds-and-shutters-cleckheaton/" },
  { name: "Castleford", href: "/areas/advenco-window-blinds-and-shutters-castleford/" },
  { name: "Crawley", href: "/areas/advenco-window-blinds-and-shutters-crawley/" },
  { name: "Chesterfield", href: "/areas/advenco-window-blinds-and-shutters-chesterfield/" },
  { name: "Conisbrough", href: "/areas/advenco-window-blinds-and-shutters-conisbrough/" },
  { name: "Crowthorne", href: "/areas/advenco-window-blinds-and-shutters-crowthorne/" },
  { name: "Crystal Peaks", href: "/areas/advenco-window-blinds-and-shutters-crystal-peaks/" },
  { name: "Cudworth", href: "/areas/advenco-window-blinds-and-shutters-in-cudworth/" },
  { name: "Derbyshire", href: "/areas/advenco-window-blinds-and-shutters-derbyshire/" },
  { name: "Dewsbury", href: "/areas/advenco-window-blinds-and-shutters-dewsbury/" },
  { name: "Doncaster", href: "/areas/advenco-window-blinds-and-shutters-doncaster/" },
  { name: "Dodworth", href: "/areas/advenco-window-blinds-and-shutters-dodworth/" },
  { name: "Dronfield", href: "/areas/advenco-window-blinds-and-shutters-dronfield/" },
  { name: "Earley", href: "/areas/advenco-window-blinds-and-shutters-earley/" },
  { name: "Edenthorpe", href: "/areas/advenco-window-blinds-and-shutters-edenthorpe/" },
  { name: "Farnborough", href: "/areas/advenco-window-blinds-and-shutters-farnborough/" },
  { name: "Feltham", href: "/areas/advenco-window-blinds-and-shutters-feltham/" },
  { name: "Farnham", href: "/areas/advenco-window-blinds-and-shutters-farnham/" },
  { name: "Guildford", href: "/areas/advenco-window-blinds-and-shutters-guildford/" },
  { name: "Garforth", href: "/areas/advenco-window-blinds-and-shutters-garforth/" },
  { name: "Halifax", href: "/areas/advenco-window-blinds-and-shutters-halifax/" },
  { name: "Guiseley", href: "/areas/advenco-window-blinds-and-shutters-guiseley/" },
  { name: "Hamilton", href: "/areas/advenco-window-blinds-and-shutters-hamilton/" },
  { name: "Harrogate", href: "/areas/advenco-window-blinds-and-shutters-harrogate/" },
  { name: "Hayes", href: "/areas/advenco-window-blinds-and-shutters-hayes/" },
  { name: "Heckmondwike", href: "/areas/advenco-window-blinds-and-shutters-heckmondwike/" },
  { name: "Hemsworth", href: "/areas/advenco-window-blinds-and-shutters-hemsworth/" },
  { name: "Hemel Hempstead", href: "/areas/advenco-window-blinds-and-shutters-in-hemel-hempstead/" },
  { name: "Holmfirth", href: "/areas/advenco-window-blinds-and-shutters-holmfirth/" },
  { name: "High Wycombe", href: "/areas/advenco-window-blinds-and-shutters-high-wycombe-2/" },
  { name: "Horsforth", href: "/areas/advenco-window-blinds-and-shutters-horsforth/" },
  { name: "Horley", href: "/areas/advenco-window-blinds-and-shutters-horley/" },
  { name: "Harrow", href: "/areas/advenco-window-blinds-and-shutters-harrow/" },
  { name: "Horsham", href: "/areas/advenco-window-blinds-and-shutters-horsham/" },
  { name: "Hoyland", href: "/areas/advenco-window-blinds-and-shutters-hoyland/" },
  { name: "Hounslow", href: "/areas/advenco-window-blinds-and-shutters-hounslow/" },
  { name: "Huddersfield", href: "/areas/advenco-window-blinds-and-shutters-huddersfield/" },
  { name: "Hull", href: "/areas/advenco-window-blinds-and-shutters-hull/" },
  { name: "Knaresborough", href: "/areas/advenco-window-blinds-and-shutters-knaresborough/" },
  { name: "Leeds", href: "/areas/advenco-window-blinds-and-shutters-leeds/" },
  { name: "Knottingley", href: "/areas/advenco-window-blinds-and-shutters-knottingley/" },
  { name: "Kingston upon Thames", href: "/areas/advenco-window-blinds-and-shutters-kingston-upon-thames/" },
  { name: "London", href: "/areas/advenco-window-blinds-and-shutters-london/" },
  { name: "Luton", href: "/areas/advenco-window-blinds-and-shutters-luton/" },
  { name: "Marlow", href: "/areas/advenco-window-blinds-and-shutters-marlow/" },
  { name: "Maidenhead", href: "/areas/advenco-window-blinds-and-shutters-maidenhead/" },
  { name: "Manchester", href: "/areas/advenco-window-blinds-and-shutters-manchester/" },
  { name: "Mirfield", href: "/areas/advenco-window-blinds-and-shutters-mirfield/" },
  { name: "Normanton", href: "/areas/advenco-window-blinds-and-shutters-normanton/" },
  { name: "Morley", href: "/areas/advenco-window-blinds-and-shutters-morley/" },
  { name: "Oldham", href: "/areas/advenco-window-blinds-and-shutters-oldham/" },
  { name: "Otley", href: "/areas/advenco-window-blinds-and-shutters-otley/" },
  { name: "Paisley", href: "/areas/advenco-window-blinds-and-shutters-paisley/" },
  { name: "Penistone", href: "/areas/advenco-window-blinds-and-shutters-penistone/" },
  { name: "Parkgate", href: "/areas/advenco-window-blinds-and-shutters-parkgate/" },
  { name: "Pudsey", href: "/areas/advenco-window-blinds-and-shutters-pudsey/" },
  { name: "Pontefract", href: "/areas/advenco-window-blinds-and-shutters-pontefract/" },
  { name: "Rawcliffe", href: "/areas/advenco-window-blinds-and-shutters-rawcliffe/" },
  { name: "Reading", href: "/areas/advenco-window-blinds-and-shutters-reading/" },
  { name: "Rochdale", href: "/areas/advenco-window-blinds-and-shutters-rochdale/" },
  { name: "Richmond", href: "/areas/advenco-window-blinds-and-shutters-richmond/" },
  { name: "Rotherham", href: "/areas/advenco-window-blinds-and-shutters-rotherham/" },
  { name: "Rothwell", href: "/areas/advenco-window-blinds-and-shutters-rothwell/" },
  { name: "Sheffield", href: "/areas/advenco-window-blinds-and-shutters-sheffield/" },
  { name: "Selby", href: "/areas/advenco-window-blinds-and-shutters-selby/" },
  { name: "Slough", href: "/areas/advenco-window-blinds-and-shutters-slough/" },
  { name: "Sonning", href: "/areas/advenco-window-blinds-and-shutters-sonning/" },
  { name: "South Elmsall", href: "/areas/advenco-window-blinds-and-shutters-south-elmsall/" },
  { name: "Southhall", href: "/areas/advenco-window-blinds-and-shutters-southhall/" },
  { name: "Sportborough", href: "/areas/advenco-window-blinds-and-shutters-sportborough/" },
  { name: "St Albans", href: "/areas/advenco-window-blinds-and-shutters-st-albans/" },
  { name: "Staines upon Thames", href: "/areas/advenco-window-blinds-and-shutters-staines-upon-thames/" },
  { name: "Stretford", href: "/areas/advenco-window-blinds-and-shutters-stretford/" },
  { name: "Stocksbridge", href: "/areas/advenco-window-blinds-and-shutters-stocksbridge/" },
  { name: "Tadcaster", href: "/areas/advenco-window-blinds-and-shutters-in-tadcaster/" },
  { name: "Theale", href: "/areas/advenco-window-blinds-and-shutters-theale/" },
  { name: "Wadsley bridge", href: "/areas/advenco-window-blinds-and-shutters-wadsley-bridge/" },
  { name: "Twickenham", href: "/areas/advenco-window-blinds-and-shutters-twickenham/" },
  { name: "Tingley", href: "/areas/advenco-window-blinds-and-shutters-tingley/" },
  { name: "Wakefield", href: "/areas/advenco-window-blinds-and-shutters-wakefield/" },
  { name: "Walton upon Thames", href: "/areas/advenco-window-blinds-and-shutters-walton-upon-thames/" },
  { name: "Warrington", href: "/areas/advenco-window-blinds-and-shutters-warrington/" },
  { name: "Wembley", href: "/areas/advenco-window-blinds-and-shutters-wembley/" },
  { name: "Watford", href: "/areas/advenco-window-blinds-and-shutters-watford/" },
  { name: "Whetherby", href: "/areas/advenco-window-blinds-and-shutters-whetherby/" },
  { name: "Woking", href: "/areas/advenco-window-blinds-and-shutters-woking/" },
  { name: "Windsor", href: "/areas/by-advenco-window-blinds-and-shutters-windsor/" },
  { name: "Wokingham", href: "/areas/by-advenco-window-blinds-and-shutters-in-wokingham/" },
  { name: "Woodlands", href: "/areas/advenco-window-blinds-and-shutters-woodlands/" },
  { name: "Yeadon", href: "/areas/advenco-window-blinds-and-shutters-yeadon/" },
  { name: "Woodley", href: "/areas/advenco-window-blinds-and-shutters-woodley/" },
  { name: "York", href: "/areas/advenco-window-blinds-and-shutters-york/" },
];

export const areasMeta = {
  metaTitle: "Areas We Cover | Advenco Blinds and Shutters",
  metaDescription:
    "Advenco Blinds and Shutters covers towns and cities across Yorkshire, London, and the Home Counties — find out if we cover your area.",
};
