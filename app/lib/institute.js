/**
 * Verified institutional information — single source of truth.
 * Every number, address and pre-filled message on the site is read
 * from this file. Do not hard-code these values anywhere else.
 */

export const INSTITUTE_NAME = "Mu'ādh ibn Jabal Institute";
export const TAGLINE =
  "Preparing Muslim generation with knowledge and noble character";

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

/** International format, used in every wa.me link. */
export const WHATSAPP_NUMBER = "2348137280101";
/** How the WhatsApp number is shown to people in Nigeria. */
export const WHATSAPP_DISPLAY = "08137280101";

/** Landline / call number — used with tel: and shown as-is. */
export const PHONE_DISPLAY = "07025069442";
export const PHONE_TEL = "tel:07025069442";

/* ------------------------------------------------------------------ */
/* Location                                                            */
/* ------------------------------------------------------------------ */

export const ADDRESS_LINE_1 = "Kamadupe Masjid, Adeun";
export const ADDRESS_LINE_2 = "Abeokuta, Ogun State, Nigeria";

/* ------------------------------------------------------------------ */
/* Programs                                                            */
/* ------------------------------------------------------------------ */

export const PROGRAMS = [
  {
    id: "hifz",
    number: "01",
    name: "Qur'ān Memorization (Hifz)",
    short:
      "Memorization is the heart of the Institute. Students learn the Qur'ān portion by portion, revise it until it is secure, and are corrected in recitation as they go. The pace is measured, and it follows the student.",
  },
  {
    id: "tajweed",
    number: "02",
    name: "Proper Tajwīd",
    short:
      "The rules of recitation. Tajwīd teaches students to read the Qur'ān as it was revealed, with correct pronunciation and a steady, beautiful rhythm.",
  },
  {
    id: "islamic-studies",
    number: "03",
    name: "Islamic Studies",
    short:
      "The fundamentals of the faith, and the lessons of the Prophets' lives that give them meaning.",
  },
  {
    id: "arabic",
    number: "04",
    name: "Arabic Language",
    short:
      "Reading, writing, and understanding the language of the Qur'ān, from its letters to its grammar.",
  },
  {
    id: "character",
    number: "05",
    name: "Character Building",
    short:
      "Sincerity, humility, patience, and self-discipline. The qualities that keep knowledge honest.",
  },
  {
    id: "manners",
    number: "06",
    name: "Good Manners",
    short:
      "Respect for parents and teachers, kindness to others, and good conduct in everyday life.",
  },
];

/* ------------------------------------------------------------------ */
/* WhatsApp — pre-filled messages and link builder                     */
/* ------------------------------------------------------------------ */

export const WA_MESSAGES = {
  general:
    "Assalamu Alaikum. I would like to enquire about learning at Mu'ādh ibn Jabal Institute.",
  hifz: "Assalamu Alaikum. I would like to enquire about the Hifz program at Mu'ādh ibn Jabal Institute.",
  learning:
    "Assalamu Alaikum. I would like to enquire about physical and online learning at Mu'ādh ibn Jabal Institute.",
};

/**
 * Build a wa.me deep link with a pre-filled message.
 * The number comes from the constant above; the message is
 * always percent-encoded.
 */
export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_LINKS = {
  general: waLink(WA_MESSAGES.general),
  hifz: waLink(WA_MESSAGES.hifz),
  learning: waLink(WA_MESSAGES.learning),
};
