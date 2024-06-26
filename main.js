  // yes I tried to do this with yaml variables but it was too much of a pain
  const urlMapping = {
    "https://daniel-broderick.com/history/server-resources-monitor': 'https://glances.daniel-broderick.com/",
    "https://daniel-broderick.com/history/bioinformatics-file-converter': 'https://bioconvert.daniel-broderick.com/",
    "https://daniel-broderick.com/history/vault-application-pitch-page": "https://vaultqr-app.daniel-broderick.com",
    "https://daniel-broderick.com/history/vault-qr-code-generator": "https://vaultqr-generate.daniel-broderick.com",
    "https://daniel-broderick.com/history/coder-remote-dev-environments": "https://coder.daniel-broderick.com",
    "https://daniel-broderick.com/history/torrent-streaming-server": "https://torrent-stream.daniel-broderick.com"
  };

  document.addEventListener("DOMContentLoaded", function(){
    const anchors = document.querySelectorAll('a');
    const matchingHrefs = [];
    anchors.forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href && urlMapping[href]) {
          anchor.setAttribute('href', urlMapping[href]);
        }
    });
    console.log(matchingHrefs);
  });