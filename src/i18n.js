import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Home page
      "home.hero.title": "Natural.  Refined.  Fantastical.",
      "home.hero.description1": "Leather that lights you up, made by the artistic hand of M Renee.\nCreating elegance from the wild, M Renee walks the line between raw and refined— a slow fashion siren with Louisiana roots, sharp steel in her knowing hands.\nGenuine, sumptuous, unique; the beauty of these pieces is more than skin deep.",
      "home.hero.description2": "Unignorable jackets, dresses, skirts-- pieces built for real life: breathable and adaptable, low-maintenance, designed to be worn with pleasure, and strong enough to last.",

      // About page
      "about.title": "Emily Renee. Call me M.",
      "about.tagline": "My design impulse: elegant flair and decadent experience connecting clients to the joy of their body.",
      "about.intro": "So much of elegance is line, and feeling the line is a natural gift difficult to explain or to teach; but, is perceived instantly.\nI create to accentuate the natural elegance of the body while inviting a sense of the fantastical. My designs are about your body. It's my artistic aim that wearing my work, you will enjoy-- even more-- your embodiment.",
      "about.paragraph1": "I am grateful that my mother-- skilled seamstress herself-- started me sewing at 6 years old. She noticed I was unhappy with the clothes available, but clear about what I desired. I took to sewing like a fish to water, mixing and matching pattern elements from the very beginning, continuing competitive sewing in 4-H, free hand designing details for show clothes I created for AQHA, and tailoring any store-bought clothes.\nThe grind and pomp of corporate fashion industry turned me off, so instead of the fashion design scholarship offered, I chose the forensics scholarship and studied philosophy, literature, theatre, music, and writing. Making my own leather journals turned from hobby to full-time self-employment in 2010. With leather on hand to make journals, I also made myself leather clothes.  Demand for my leather fashion circled me back to my roots.\nDeer leather– particularly earthy, aromatic, and supple-- seduced me back to fashion creation in 2012 because leather is timeless, real, and durable enough to live long with a human.\nBeyond being outside fast fashion, I love that my leather offers a grounding sense, a comforting and pleasurable experience of moving through the world.\nInitially, my work was savage and raw– intentionally so. Minimal. Yet now I also play with refined shapes and techniques because I can, I have great capacity with fine sewing at the machine– and honestly it delights me, especially with the raw natural material in a finessed shaped.",
      "about.paragraph2": "\nToday, I make bespoke pieces for private clients (unique drape-designed pieces as shown in my reel). Also I offer small-batch ready-to-wear collections to clients and-- soon-- select boutiques.\nMy workshop is in north Houston, near the Woodlands, where clients are welcome by appointment. Also, clients may book me for a Trunk Show or personal fitting at your location.",
      "about.paragraph3": "What leather do I use?\nPrimarily, wild-sourced domestic deer and elk hides because their supple feel and raw beauty. These hides carry the stories of their former life—scars, marks, wildness and I love that authenticity. The lithe nature of deer leaping through the forest is perceptible in the stretch and texture of these hides as they move with you. I love that they do not wrinkle, and that their aroma is intoxicating.\nI do also use other leathers and hides like Alligator, Ostrich, Python, Horsehide, Lamb, Kangaroo, Moose, hair-on hides, and of course some beautiful cowhides as well.\nIf you are excited by a particular leather, inquire! I enjoy exploring new possibilities!",
      "about.paragraph4": "Each creation begins with a conversation and evolves through fittings and refinement. Timeline varies depending on the scale of the commission, respecting both the artistry of the piece and the Client's participation in the process.\nThis is slow fashion. Yours will be one of approximately 25 projects a year.",

      // Designs page
      "designs.title": "Looks",
      "designs.subtitle": "Natural ~ Refined ~ Fantastical",
      "designs.description": "Every jacket, skirt, or top is built for real life—layerable, breathable, low-maintenance, and strong enough to last.\n\nThese aren't mass-produced. I create each piece myself in Houston, Texas, using wild-sourced deer and elk hides known for their supple feel and raw beauty. These hides carry the stories of their former life—scars, textures, wildness—and I shape them into daring fashion that feels as luxurious as it looks. M Renee is elegance grounded in nature. \n\n** Look Book coming soon with images of current work ** \nI am deep in the making, so here is a glimpse of sold pieces as I prepare a new body of work to photograph, to share, to offer.\n\nIn the meantime, my best effort of describing the range of possibilities.\n \nAny of these looks can be made in two silhouettes (full bust or sleek bust), two collar/sleeve styles (Queen collar with bell sleeves, or Elvira standing collar with classic sleeves), and customizable length and style (raw edge or clean seams), in your choice of color: black, dark chocolate, tobacco, willow, red (or inquire for other colors).\n\nCustomizable looks: Jackets. Dresses. Skirts. Bustier vests. Fringe capes/belts. Jock straps. \n \nIn development: Mens vests and jackets, pants, jumpsuits, Alligator corset belts, and more.\n\nPhotos are for reference-- current pattern cuts have been updated and refined. \n",
      "designs.product1": "Queen Collar Leather Coat (front)",
      "designs.product2": "Queen Collar Leather Coat (back)",
      "designs.product3": "Queen collar vest (or jacket) with peplum back",
      "designs.product4": "Deer leather backless halter dress- mini, midi, or maxi",
      "designs.product5": "Bustier Vest",
      "designs.product6": "Deer leather halter dress, raw edge hem",

      // Custom page
      "custom.title": "Custom Designs",
      "custom.tagline": "Custom design fittings are one on one, creating bespoke epic fashion from the hides of your choice, draped to flatter your form, designed suit your function",
      "custom.subtitle": "Empowerment through personalized fashion design",
      "custom.motto": "Natural. Refined. Fantastical.",
      "custom.description": "One-on-one design consultation and fittings in my Houston atelier, or fly me to you (details and pricing via email).\n\nDiscretion is at the heart of the M. Renee experience. All measurements, communications, and private details entrusted to the Atelier are held in strict confidence. No Client's identity shall be revealed without explicit written consent. Photographs of works may appear in editorial or promotional contexts, yet always without attribution unless invited by the Client.\n\nClients may apply to host a trunk show. Designer and assistants will bring current inventory for personal shopping, and I will be available for custom order consultations in a social atmosphere.",
      "custom.cta": "To have bespoke clothing made for you pleasure",
      "custom.cta.link": "contact us",

      // Contact page
      "contact.title": "Contact Us",
      "contact.email.label": "Email:",
      "contact.phone.label": "Phone:",
      "contact.location.label": "Location:",
      "contact.location.value": "Houston Heights",
      "contact.hours.label": "Hours:",
      "contact.hours.value": "By appointment",
      "contact.social.label": "Follow us on Instagram",

      // Footer
      "footer.copyright": "M. Renee Designs. All rights reserved.",

      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.designs": "Looks",
      "nav.custom": "Custom",
      "nav.contact": "Contact"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
