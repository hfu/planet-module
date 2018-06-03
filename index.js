const tilebelt = require('@mapbox/tilebelt')
const Z = 0

const get = tile => {
  const bbox = tilebelt.tileToBBOX(tile)
  const zxy = [tile[2], tile[0], tile[1]]
  console.log(`ogr2ogr -f SQLite -clipsrc ${bbox.join(' ')} ` +
    `/Volumes/HANNOVER/planet/${zxy.join('-')}.sqlite ` +
    `/Volumes/HANNOVER/planet/planet-180528.osm.pbf`)
}

for (let x = 0; x < 2 ** Z; x++) {
  for (let y = 0; y < 2 ** Z; y++) {
    get([x, y, Z])
  }
}
