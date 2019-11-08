// //superficie en (km²) et	Population en 2015
// source: https://fr.wikipedia.org/wiki/Provinces_de_la_r%C3%A9publique_d%C3%A9mocratique_du_Congo
// crapping script 
// document.querySelectorAll('tr').forEach((value, index)=>{
//   provinces.push({
//       nom: value.children[1].innerText,
//       chefLieu: value.children[2].innerText,
//       superficie: parseInt(value.children[3].innerText.replace(/\s/g, '')),
//       population: parseInt(value.children[4].innerText.replace(/\s/g, ''))
//   })
// })

export default [
  {nom: "Bas-Uele", chefLieu: "Buta", superficie: 148331, population: 1138000},
  {nom: "Équateur", chefLieu: "Mbandaka", superficie: 103902, population: 1528000},
  {nom: "Haut-Katanga", chefLieu: "Lubumbashi", superficie: 132425, population: 4617000},
  {nom: "Haut-Lomami", chefLieu: "Kamina", superficie: 108204, population: 2957000},
  {nom: "Haut-Uele", chefLieu: "Isiro", superficie: 89683, population: 1864000},
  {nom: "Ituri", chefLieu: "Bunia", superficie: 65658, population: 3650000},
  {nom: "Kasaï", chefLieu: "Luebo", superficie: 95631, population: 2801000},
  {nom: "Kasaï-Central", chefLieu: "Kananga", superficie: 60958, population: 3317000},
  {nom: "Kasaï-Oriental", chefLieu: "Mbuji-Mayi", superficie: 9481, population: 3145000},
  {nom: "Kinshasa", chefLieu: "Kinshasa", superficie: 9965, population: 11575000},
  {nom: "Kongo-Central", chefLieu: "Matadi", superficie: 53920, population: 5575000},
  {nom: "Kwango", chefLieu: "Kenge", superficie: 89974, population: 2152000},
  {nom: "Kwilu", chefLieu: "Kikwit", superficie: 78219, population: 5490000},
  {nom: "Lomami", chefLieu: "Kabinda", superficie: 56426, population: 2443000},
  {nom: "Lualaba", chefLieu: "Kolwezi", superficie: 121308, population: 2570000},
  {nom: "Mai-Ndombe", chefLieu: "Inongo", superficie: 127465, population: 1852000},
  {nom: "Maniema", chefLieu: "Kindu", superficie: 132520, population: 2333000},
  {nom: "Mongala", chefLieu: "Lisala", superficie: 58141, population: 1740000},
  {nom: "Nord-Kivu", chefLieu: "Goma", superficie: 59483, population: 6655000},
  {nom: "Nord-Ubangi", chefLieu: "Gbadolite", superficie: 56644, population: 1269000},
  {nom: "Sankuru", chefLieu: "Lusambo", superficie: 104331, population: 2110000},
  {nom: "Sud-Kivu", chefLieu: "Bukavu", superficie: 65070, population: 5772000},
  {nom: "Sud-Ubangi", chefLieu: "Gemena", superficie: 51648, population: 2458000},
  {nom: "Tanganyika", chefLieu: "Kalemie", superficie: 134940, population: 3062000},
  {nom: "Tshopo", chefLieu: "Kisangani", superficie: 199567, population: 2352000},
  {nom: "Tshuapa", chefLieu: "Boende", superficie: 132957, population: 1600000},
];

// les nouvelles provinces avec leurs provinces de provenance 
export const provincesWithAncien = [
  {nom: "Equateur (anc. Equateur)", chefLieu : "Mbandaka", langue  : "Lingala", superficie : 103902},
  {nom: 'Sud-Ubangui (anc. Equateur)', chefLieu : 'Gemena', langue  : 'Lingala', superficie : 51648,},
  {nom: 'Nord-Ubangui (anc. Equateur)', chefLieu : 'Gbadolite', langue  : 'Lingala', superficie : 56644},
  {nom: 'Mongala (anc. Equateur)', chefLieu : 'Lisala', langue  : 'Lingala', superficie : 58141},
  {nom: 'Bas-Uele (anc.Province Orientale)', chefLieu : 'Buta', langue  : 'Lingala', superficie :148331},
  {nom: 'Haut-Uele (anc.Province Orientale)', chefLieu : 'Isiro', langue  : 'Lingala', superficie : 98683},
  {nom: 'Ituri (anc.Province Orientale)', chefLieu : 'Bunia', langue  : 'Swahili', superficie : 65658},
  {nom: 'Kongo Central (anc.Bas-Congo)', chefLieu : 'Matadi', langue  : 'Kikongo', superficie : 53920},
  {nom: 'Kinshasa', chefLieu : 'Kinshasa', langue  : 'Lingala', superficie : 9965},
  {nom: 'Mai-Ndombe(anc.Bandundu)', chefLieu : 'Inongo', langue: 'Lingala', superficie : 127465,},
  {nom: 'Kwilu (anc.Bandundu)', chefLieu : 'Bandundu', langue: 'Kikongo', superficie : 78219,},
  {nom: 'Kwango (anc.Bandundu)', chefLieu : 'Kenge', langue: 'Kikongo', superficie : 89974,},
  {nom: 'Tshuapa (anc.Equateur)', chefLieu : 'Boende', langue: 'Lingala', superficie : 132957,},
  {nom: 'Tshopo (anc.Province Orientale)', chefLieu : 'Kisangani', langue: 'Swahili', superficie : 199567,},
  {nom: 'Sankuru (anc.Kasaï Oriental)', chefLieu : 'Lusambo', langue: 'Lotetela', superficie : 104331,},
  {nom: 'Kasaï (anc.Kasaï Occidental)', chefLieu : 'Tshikapa', langue: 'Tshiluba', superficie : 95631,},
  {nom: 'Kasaï Oriental(anc.Kasaï Oriental)', chefLieu : 'Mbuji-Mayi', langue: 'Tshiluba', superficie : 9481,},
  {nom: 'Kasaï Central (anc.Kasaï Occidental)', chefLieu : 'Kananga', langue: 'Tshiluba', superficie : 60958,},
  {nom: 'Lomani (anc.Kasaï Oriental)', chefLieu : 'Kabinda', langue: 'Tshiluba', superficie : 56426,},
  {nom: 'Nord Kivu', chefLieu : 'Goma', langue: 'Swahili', superficie : 59483,},
  {nom: 'Sud Kivu', chefLieu : 'Bukavu', langue: 'Swahili', superficie : 65070,},
  {nom: 'Maniema', chefLieu : 'Kindu', langue: 'Swahili', superficie : 132520,},
  {nom: 'Tanganyika(anc.Katanga)', chefLieu : 'Kalemi', langue: 'Swahili', superficie : 134940,},
  {nom: 'Haut-Katanga(anc.Katanga)', chefLieu : 'Lubumbashi', langue: 'Swahili', superficie : 132425,},
  {nom: 'Lualaba (anc.Katanga)', chefLieu : 'Kolwezi', langue: 'Swahili', superficie : 121308,},
  {nom: 'Haut-Lomani(anc.Katanga)', chefLieu : 'Kamina', langue: 'Swahili', superficie : 108204}
];



