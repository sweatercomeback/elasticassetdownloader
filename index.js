
const request = require('request');
const fs = require('fs');

const version = '5.3.1';

var download = function(url, dest, cb) {
  request(url)
  .pipe(fs.createWriteStream(dest))
  .on('close', function () {
    console.log(`${dest} downloaded!`);
  });
};
const dir = `assets-${version}`;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const assets = [];
assets.push({ name: `elasticsearch-${version}.zip`, url: `http://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${version}.zip` });
assets.push({ name: `kibana-${version}-windows-x86.zip`, url: `http://artifacts.elastic.co/downloads/kibana/kibana-${version}-windows-x86.zip` });
assets.push({ name: `logstash-${version}.zip`, url: `http://artifacts.elastic.co/downloads/logstash/logstash-${version}.zip` });
assets.push({ name: `x-pack-${version}.zip`, url: `http://artifacts.elastic.co/downloads/packs/x-pack/x-pack-${version}.zip` });
assets.push({ name: `filebeat-${version}-windows-x86_64.zip`, url: `https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-${version}-windows-x86_64.zip`});
assets.push({ name: `packetbeat-${version}-windows-x86_64.zip`, url: `https://artifacts.elastic.co/downloads/beats/packetbeat/packetbeat-${version}-windows-x86_64.zip`});
assets.push({ name: `winlogbeat-${version}-windows-x86_64.zip`, url: `https://artifacts.elastic.co/downloads/beats/winlogbeat/winlogbeat-${version}-windows-x86_64.zip`});
assets.push({ name: `metricbeat-${version}-windows-x86_64.zip`, url: `https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-${version}-windows-x86_64.zip`})
assets.push({ name: `heartbeat-${version}-windows-x86_64.zip`, url: `https://artifacts.elastic.co/downloads/beats/heartbeat/heartbeat-${version}-windows-x86_64.zip`})
assets.forEach((asset) => {
  download(asset.url, `${dir}/${asset.name}`);
})
