const wisconsinCities = [
  "Abbotsford", "Abrams", "Adell", "Albany", "Algoma",
  "Allenton", "Alma", "Alma Center", "Almond", "Altoona",
  "Amery", "Amherst", "Antigo", "Appleton", "Arcadia",
  "Argyle", "Arkansaw", "Arkdale", "Arlington", "Armstrong Creek",
  "Arpin", "Ashland", "Athens", "Auburndale", "Augusta",
  "Baileys Harbor", "Baldwin", "Balsam Lake", "Bancroft", "Baraboo",
  "Barneveld", "Barron", "Bay City", "Bayfield", "Beaver Dam",
  "Beetown", "Beldenville", "Belgium", "Belleville", "Belmont",
  "Beloit", "Benton", "Berlin", "Big Bend", "Birchwood",
  "Birnamwood", "Black Creek", "Black Earth", "Black River Falls", "Blair",
  "Blanchardville", "Bloomer", "Blue Mounds", "Blue River", "Bonduel",
  "Boscobel", "Bowler", "Boyceville", "Boyd", "Brandon",
  "Brillion", "Bristol", "Brodhead", "Brookfield", "Brooklyn",
  "Brownsville", "Bruce", "Brule", "Brussels", "Bryant",
  "Burlington", "Burnett", "Butler", "Butte Des Morts", "Butternut",
  "Cable", "Cadott", "Caledonia", "Cambria", "Cambridge",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < wisconsinCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(wisconsinCities[i]);
}

module.exports = { batches };
