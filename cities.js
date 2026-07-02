const wisconsinCities = [
  "Ferryville", "Fifield", "Fish Creek", "Fond Du Lac", "Fontana",
  "Footville", "Fort Atkinson", "Fountain City", "Fox Lake", "Francis Creek",
  "Franklin", "Franksville", "Fredonia", "Fremont", "Friendship",
  "Friesland", "Galesville", "Gays Mills", "Genesee Depot", "Genoa",
  "Genoa City", "Germantown", "Gillett", "Gilman", "Glenbeulah",
  "Grafton", "Grand Marsh", "Granton", "Grantsburg", "Gratiot",
  "Green Bay", "Green Lake", "Greendale", "Greenleaf", "Greenville",
  "Greenwood", "Hager City", "Hales Corners", "Hammond", "Harshaw",
  "Hartford", "Hartland", "Hatley", "Haugen", "Hawthorne",
  "Hayward", "Hazel Green", "Hazelhurst", "Helenville", "Herbster",
  "Hertel", "Hewitt", "Highland", "Hilbert", "Hillsboro",
  "Hingham", "Hixton", "Holcombe", "Hollandale", "Holmen",
  "Horicon", "Hortonville", "Houlton", "Hubertus", "Hudson",
  "Humbird", "Hurley", "Hustisford", "Independence", "Iola",
  "Iron Ridge", "Iron River", "Ixonia", "Jackson", "Janesville",
  "Jefferson", "Jim Falls", "Johnson Creek", "Junction City", "Kansasville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < wisconsinCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(wisconsinCities[i]);
}

module.exports = { batches };
