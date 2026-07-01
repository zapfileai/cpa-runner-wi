const wisconsinCities = [
  "Cameron", "Campbellsport", "Cascade", "Casco", "Cashton",
  "Cazenovia", "Cecil", "Cedar Grove", "Cedarburg", "Centuria",
  "Chetek", "Chilton", "Chippewa Falls", "Clayton", "Clear Lake",
  "Cleveland", "Clinton", "Clintonville", "Colby", "Coleman",
  "Colfax", "Colgate", "Coloma", "Columbus", "Combined Locks",
  "Conover", "Coon Valley", "Cornell", "Cornucopia", "Cottage Grove",
  "Crandon", "Crivitz", "Cross Plains", "Cuba City", "Cudahy",
  "Cumberland", "Custer", "Danbury", "Dane", "Darlington",
  "De Pere", "Deer Park", "Deerbrook", "Deerfield", "Deforest",
  "Delafield", "Delavan", "Denmark", "Dickeyville", "Dodgeville",
  "Dorchester", "Dousman", "Downing", "Downsville", "Dresser",
  "Durand", "Eagle", "Eagle River", "East Troy", "Eau Claire",
  "Edgar", "Edgerton", "Egg Harbor", "Elcho", "Eldorado",
  "Eleva", "Elk Mound", "Elkhart Lake", "Elkhorn", "Ellison Bay",
  "Ellsworth", "Elm Grove", "Elmwood", "Elroy", "Ephraim",
  "Ettrick", "Evansville", "Fall Creek", "Fall River", "Fennimore",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < wisconsinCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(wisconsinCities[i]);
}

module.exports = { batches };
