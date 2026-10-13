// Use digits only, including the country code. Leave empty until the business number is supplied.
export const CONFIG = { whatsappNumber: "", whatsappText: "Hi, I'd like to enquire about your car detailing services." };
const whatsappNumber = CONFIG.whatsappNumber.trim();
const validWhatsappNumber = /^\d{8,15}$/.test(whatsappNumber);
export const wa = validWhatsappNumber
  ? `https://wa.me/${whatsappNumber}?${new URLSearchParams({ text: CONFIG.whatsappText }).toString()}`
  : null;
// Replace mapsQuery and googleMapsEmbedUrl with the business's verified Google Maps pin.
export const LOCATION = {
  address: "Dhakoli, Old Chandigarh–Ambala Highway, Zirakpur, Punjab, India",
  mapsQuery: "The Detailing Cartel, Dhakoli, Old Chandigarh–Ambala Highway, Zirakpur, Punjab, India",
  googleMapsEmbedUrl: "",
};
const encodedLocation = encodeURIComponent(LOCATION.mapsQuery);
export const maps = `https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`;
export const mapsEmbed = LOCATION.googleMapsEmbedUrl || `https://www.google.com/maps?q=${encodedLocation}&output=embed`;
export const NAV = [["Home","#home"],["Services","#services"],["Our Work","#work"],["About Us","#about"],["Contact","#contact"]] as const;
const image = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
export const IMG: Record<string,string> = {
  hero: image("1503376780353-7e6692767b70"),
  about: image("1620584899131-a5ff5f8fbb03"),
  statement: image("1549317661-bd32c8ce0db2"),
  cta: image("1494976388531-d1058494cdd8"),
  g1: image("1632823471177-8b17c39b46ce"),
  g2: image("1632823469393-486df1a81060"),
  g3: image("1663789584101-bbbecbb5cc30"),
  g4: image("1677163487388-e324ffb4a4bf"),
  g5: image("1663685119242-f1718dc9b25c"),
  g6: image("1611902029807-570da6122e2e"),
  ppf: image("1584173445009-4f04449ce083"),
  boro: image("1518306727298-4c17e1bf6942"),
  graph: image("1612192761445-7fc010a84124"),
  cer: image("1654522659474-ca5e43f52258"),
  wheel: image("1768577615397-f9916e9b2152"),
  glass: image("1695334702343-877903386dc5"),
  trim: image("1654522659449-3f9e8ebd5dca"),
  wash: image("1761312834150-4beefff097a7"),
  corr: image("1708805282706-f44730b7e527"),
  care: image("1669833886433-0d54434a58ad"),
};
export const SERVICES = [
["Paint Protection Film (PPF)","Advanced film protection designed to help protect your vehicle's paintwork while maintaining its premium appearance.","ppf"],
["Borophene Coating","Explore advanced surface coating solutions designed to complement your vehicle's finish and detailing routine.","boro"],
["Graphene Coating","Premium coating care focused on enhancing your vehicle's finish and maintaining a refined appearance.","graph"],
["Ceramic Coating","Professional coating solutions designed to enhance gloss and support easier routine vehicle maintenance.","cer"],
["Alloy Wheel Coating","Specialized wheel care to help maintain a clean, refined appearance across your vehicle's alloys.","wheel"],
["Glass Coating","Dedicated glass surface treatment as part of a comprehensive vehicle care routine.","glass"],
["Anti-Fade Trim Coating","Specialized trim care designed to help maintain the appearance of exterior plastic and trim surfaces.","trim"],
["Premium Car Wash","A meticulous vehicle wash focused on a clean finish and professional presentation.","wash"],
["Paint Correction & Gloss Enhancement","Professional paint refinement focused on improving the appearance and clarity of your vehicle's finish.","corr"],
["Complete Car Care Solutions","Comprehensive vehicle care solutions tailored to your detailing and surface protection needs.","care"]] as const;
