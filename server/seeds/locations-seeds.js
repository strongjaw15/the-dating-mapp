// const mongoose = require('mongoose');
// const { Locations } = require("../models");

const locationsData = [
  {
    type: "Restaurant",
    name: "Young Joni",
    style: "Modern American",
    website: "https://youngjoni.com/",
    address: "165 13th Ave NE, Minneapolis, MN 55413",
    latPosition: 45.0012445223011, 
    lngPosition: -93.26667135771193,
    phone: "(612) 345-5719",
  },

  {
    type: "Restaurant",
    name: "Bar La Grassa",
    style: "Italian",
    website: "https://www.barlagrassa.com/",
    address: "800 N Washington Ave, Minneapolis, MN 55401",
    latPosition: 44.98939964806467, 
    lngPosition: -93.2787621595629,
    phone: "(612) 333-3837",
  },

  {
    type: "Restaurant",
    name: "Demi",
    style: "Tasting-Menu",
    website: "https://demimpls.com/",
    address: "212 N 2nd St Suite 100, Minneapolis, MN 55401",
    latPosition: 44.98558150316465, 
    lngPosition: -93.27093339154129,
    phone: "(612) 404-1123",
  },

  {
    type: "Restaurant",
    name: "Meritage",
    style: "French Brasserie",
    website: "https://www.meritage-stpaul.com/",
    address: "410 St Peter St, St Paul, MN 55102",
    latPosition: 44.94653315584599,
    lngPosition: -93.09664524422085,
    phone: "(651) 222-5670",
  },

  {
    type: "Restaurant",
    name: "Alma",
    style: "Seasonal Prix-Fixe",
    website: "https://www.almampls.com/",
    address: "528 University Ave SE, Minneapolis, MN 55414",
    latPosition: 44.98740498657231, 
    lngPosition: -93.24860298737629,
    phone: "(612) 379-4909",
  },

  {
    type: "Park",
    name: "North Mississippi Regional Park",
    website: "https://www.minneapolisparks.org/parks-destinations/parks-lakes/north_mississippi_regional_park/",
    address: "5116 North Mississippi Drive, Minneapolis, MN 55430",
    latPosition: 45.047231362920215, 
    lngPosition: -93.28337690188972,
    phone: "(612) 230-6400",
  },

  {
    type: "Park",
    name: "Nicollet Island Park",
    website: "https://www.minneapolisparks.org/parks-destinations/parks-lakes/nicollet_island_park/",
    address: "40 Power St., Minneapolis, MN 55401",   
    latPosition: 44.98887869768677, 
    lngPosition: -93.2621395196231,
    phone: "(612) 230-6400",
  },

  {
    type: "Park",
    name: "Lyndale Park Rose Garden",
    website: "https://www.minneapolisparks.org/parks-destinations/parks-lakes/north_mississippi_regional_park/",
    address: "1300 42nd St. W, Minneapolis, MN 55409",
    latPosition: 44.92752362341888, 
    lngPosition: -93.2953523061322,
    phone: "(612) 230-6400",
  },

  {
    type: "Park",
    name: "Como Regional Park",
    website: "https://www.stpaul.gov/departments/parks-and-recreation/como-regional-park",
    address: "1199 Midway Pkwy, St Paul, MN 55118",
    latPosition: 44.97913990912675,
    lngPosition: -93.15038555135374,
    phone: "(651) 266-6400",
  },

  {
    type: "Park",
    name: "Harriet Island Regional Park",
    website: "https://www.stpaul.gov/departments/parks-and-recreation/como-regional-park",
    address: "200 Dr Justus Ohage Blvd, St Paul, MN 55107",
    latPosition: 44.93762606235402, 
    lngPosition: -93.0962200656542,
    phone: "(651) 292-7010",
  },

  {
    type: "Museum",
    name: "Minneapolis Institute of Art",
    website: "https://new.artsmia.org/",
    address: "2400 Third Avenue South, Minneapolis, Minnesota 55404",
    latPosition: 44.95865950921331, 
    lngPosition: -93.27293905216108,
    phone: "(888) 642-2787",
  },

  {
    type: "Museum",
    name: "Walker Art Center",
    website: "https://walkerart.org/",
    address: "725 Vineland Pl, Minneapolis, MN 55403",
    latPosition: 44.96828081052484, 
    lngPosition: -93.28774817968382,
    phone: "(612) 375-7600 ",
  },

  {
    type: "Museum",
    name: "Science Museum of Minnesota",
    website: "https://new.smm.org/",
    address: "120 W Kellogg Blvd, St Paul, MN 55102",
    latPosition: 44.94260848357361, 
    lngPosition: -93.09845467914664,
    phone: "(651) 221-9444",
  },

  {
    type: "Museum",
    name: "The Museum of Russian Art",
    website: "https://tmora.org/",
    address: "5500 Stevens Ave, Minneapolis, MN 55419",
    latPosition: 44.90355146000856, 
    lngPosition: -93.27555086385333,
    phone: "(612) 821-9045",
  },

  {
    type: "Museum",
    name: "Weisman Art Museum",
    website: "https://wam.umn.edu/",
    address: "333 E River Pkwy, Minneapolis, MN 55455",
    latPosition: 44.973246998797414, 
    lngPosition: -93.23620554111376,
    phone: "(612) 625-9494",
  },

  {
    type: "Entertainment",
    name: "Acme Comedy Company",
    website: "http://acmecomedycompany.com/",
    address: "708 N 1st St, Minneapolis, MN 55401",
    latPosition: 44.990001683331215, 
    lngPosition: -93.27431570063331,
    phone: "(612) 338-6393",
  },

  {
    type: "Entertainment",
    name: "Up-Down: Minneapolis' Arcade Bar",
    website: "https://www.updownarcadebar.com/minneapolis/",
    address: "3012 Lyndale Ave S, Minneapolis, Minnesota 55408",
    latPosition: 44.947969359001284, 
    lngPosition: -93.28765316995002,
    phone: "(612) 823-3487",
  },

  {
    type: "Entertainment",
    name: "Bryant Lake Bowl & Theater",
    website: "https://www.bryantlakebowl.com/",
    address: "810 W Lake St, Minneapolis, MN 55408",
    latPosition: 44.948621991207396, 
    lngPosition: -93.28971314850995,
    phone: "(612) 825-3737",
  },

  {
    type: "Entertainment",
    name: "Vertical Endeavors",
    website: "https://www.verticalendeavors.com/",
    address: "2540 Nicollet Ave, Minneapolis, MN 55404",
    latPosition: 44.95824403216913, 
    lngPosition: -93.27864145707308,
    phone: "(612) 436-1470",
  },

  {
    type: "Entertainment",
    name: "Top Golf",
    website: "https://topgolf.com/us/minneapolis/",
    address: "6420 Camden Ave N., Brooklyn Center, MN",
    latPosition: 45.07579897001531, 
    lngPosition: -93.28817626193567,
    phone: "(763) 201-9636",
  },

]

// const seedLocations = () => {
//   Locations.insertMany(locationsData, (err, docs) => {
//       if (err) {
//           console.log(err);
//       } else {
//           console.log("Locations seeded");
//       }
//   });
// };

module.exports = seedLocations;