export default function(url, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        success && success(data);
      } else {
        error();
      }
    }
  };
  xhr.send();
}
