
const request = require('request');
const fs = require('fs');

const version = '5.2.2'

var download = function(url, dest, cb) {
  request(url)
  .pipe(fs.createWriteStream(dest))
  .on('close', function () {
    console.log('File written!');
  });
};
const dir = `assets-${version}`;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const assets = [];
assets.push({ name: `elasticsearch-${version}.zip`, url: `http://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${version}.zip` });
//assets.push({ name: `kibana-${version}-windows-x86.zip`, url: `http://artifacts.elastic.co/downloads/kibana/kibana-${version}-windows-x86.zip` });
//assets.push({ name: `logstash-${version}.zip`, url: `http://artifacts.elastic.co/downloads/logstash/logstash-${version}.zip` });
//assets.push({ name: `x-pack-${version}.zip`, url: `http://artifacts.elastic.co/downloads/packs/x-pack/x-pack-${version}.zip` });

assets.forEach((asset) => {
  download(asset.url, `${dir}/${asset.name}`);
})
