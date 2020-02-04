function fetchData() {
  const url = window.location.href;

  return {
    url: url
  }
};

function sendData(data) {
  const url = 'http://127.0.0.1:3000/audios/';
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: { "audio": { "text_url": `${data.url}` } }
  })
}

sendData(fetchData());
