function fetchData() {
  const url = window.location.href;

  return {
    url: url
  }
};

const sendData = (data) => {
  // const site_url = window.location.href;
  const url = 'http://127.0.0.1:3000/api/v1/audios';
    fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json",
               "Accept": "application/json"
     },
    body: JSON.stringify({ "audio": { "text_url": `${data.url}` } } )
  })
}

sendData(fetchData());
