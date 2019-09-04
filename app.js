const ul = document.querySelector('ul');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://anapioficeandfire.com/api/characters/583', true);
xhr.onload = function () {
  const data = JSON.parse(this.responseText);
  const all = [];
  all.push(data);

  let output = '<h2>User Data</h2>';
  for (let i in all) {
    const {
      url,
      name,
      gender,
      culture,
      born,
      titles,
      aliases,
      allegiances,
      books,
      povBooks,
      tvSeries,
      playedBy
    } = all[i];
    output += `
                <li><span>Url:</span> <a href="${url}">${url}</a></li>
                <li><span>Name:</span> ${name}</li>
                <li><span>Gender:</span> ${gender}</li>
                <li><span>Culture:</span> ${culture}</li>
                <li><span>Born:</span> ${born}</li>
                <li><span>Title:</span> ${titles[0]}</li>
                <li><span>Alias:</span> ${aliases[4]}</li>
                <li><span>Allegiance:</span> <a href="${allegiances[0]}">${
      allegiances[0]
    }</a></li>
                <li><span>Book:</span> <a href="${books[0]}">${
      books[0]
    }</a></li>
                <li><span>Pov Book:</span> <a href="${povBooks[2]}">${
      povBooks[2]
    }</a></li>
                <li><span>TV Serie:</span> ${tvSeries[3]}</a></li>
                <li><span>Played By:</span> ${playedBy[0]}</a></li>
                `;
    ul.innerHTML = output;
  }
};
xhr.send();
const na = document.querySelector('#nasa');

document.querySelector('#btn1').addEventListener('click', () => {
  ul.style.display = 'block';
  na.style.display = 'none';
});