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

// les nouvelles provinces avec leurs provinces de provenance 

export default [
  {nom: "Equateur (anc. Equateur)", chefLieu : "Mbandaka", langue  : "Lingala", population: 1138000, superficie : 103902},
  {nom: 'Sud-Ubangui (anc. Equateur)', chefLieu : 'Gemena', langue  : 'Lingala', population: 1528000, superficie : 51648,},
  {nom: 'Nord-Ubangui (anc. Equateur)', chefLieu : 'Gbadolite', langue  : 'Lingala', population: 4617000, superficie : 56644},
  {nom: 'Mongala (anc. Equateur)', chefLieu : 'Lisala', langue  : 'Lingala', population: 2957000, superficie : 58141},
  {nom: 'Bas-Uele (anc.Province Orientale)', chefLieu : 'Buta', langue  : 'Lingala', population: 1864000, superficie :148331},
  {nom: 'Haut-Uele (anc.Province Orientale)', chefLieu : 'Isiro', langue  : 'Lingala', population: 3650000, superficie : 98683},
  {nom: 'Ituri (anc.Province Orientale)', chefLieu : 'Bunia', langue  : 'Swahili', population: 2801000, superficie : 65658},
  {nom: 'Kongo Central (anc.Bas-Congo)', chefLieu : 'Matadi', langue  : 'Kikongo', population: 3317000, superficie : 53920},
  {nom: 'Kinshasa', chefLieu : 'Kinshasa', langue  : 'Lingala', population: 3145000, superficie : 9965},
  {nom: 'Mai-Ndombe(anc.Bandundu)', chefLieu : 'Inongo', langue: 'Lingala', population: 1157500, superficie : 127465,},
  {nom: 'Kwilu (anc.Bandundu)', chefLieu : 'Bandundu', langue: 'Kikongo', population: 5575000, superficie : 78219,},
  {nom: 'Kwango (anc.Bandundu)', chefLieu : 'Kenge', langue: 'Kikongo', population: 2152000, superficie : 89974,},
  {nom: 'Tshuapa (anc.Equateur)', chefLieu : 'Boende', langue: 'Lingala', population: 5490000, superficie : 132957,},
  {nom: 'Tshopo (anc.Province Orientale)', chefLieu : 'Kisangani', langue: 'Swahili', population: 2443000, superficie : 199567,},
  {nom: 'Sankuru (anc.Kasaï Oriental)', chefLieu : 'Lusambo', langue: 'Lotetela', population: 2570000, superficie : 104331,},
  {nom: 'Kasaï (anc.Kasaï Occidental)', chefLieu : 'Tshikapa', langue: 'Tshiluba', population: 1852000, superficie : 95631,},
  {nom: 'Kasaï Oriental(anc.Kasaï Oriental)', chefLieu : 'Mbuji-Mayi', langue: 'Tshiluba', population: 2333000, superficie : 9481,},
  {nom: 'Kasaï Central (anc.Kasaï Occidental)', chefLieu : 'Kananga', langue: 'Tshiluba', population: 1740000, superficie : 60958,},
  {nom: 'Lomani (anc.Kasaï Oriental)', chefLieu : 'Kabinda', langue: 'Tshiluba', population: 6655000, superficie : 56426,},
  {nom: 'Nord Kivu', chefLieu : 'Goma', langue: 'Swahili', population: 1269000, superficie : 59483,},
  {nom: 'Sud Kivu', chefLieu : 'Bukavu', langue: 'Swahili', population: 2110000, superficie : 65070,},
  {nom: 'Maniema', chefLieu : 'Kindu', langue: 'Swahili', population: 5772000, superficie : 132520,},
  {nom: 'Tanganyika(anc.Katanga)', chefLieu : 'Kalemi', langue: 'Swahili', population: 2458000, superficie : 134940,},
  {nom: 'Haut-Katanga(anc.Katanga)', chefLieu : 'Lubumbashi', langue: 'Swahili', population: 3062000, superficie : 132425,},
  {nom: 'Lualaba (anc.Katanga)', chefLieu : 'Kolwezi', langue: 'Swahili', population: 2352000, superficie : 121308,},
  {nom: 'Haut-Lomani(anc.Katanga)', chefLieu : 'Kamina', langue: 'Swahili', population: 1600000, superficie : 108204}
];



