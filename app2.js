const nasa = [];
fetch("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
    .then(res => res.json())
    .then(data => {
        nasa.push(data);
        console.log(data);
        let userOutPut = '<h2>Fetched Data</h2>'
        for (const i in nasa) {
            const {
                url,
                title,
                service_version,
                media_type,
                hdurl,
                explanation,
                date
            } = nasa[i];
            userOutPut += `
                            <img src="${hdurl}" alt="the image">
                            <h1>${title}</h1>
                            <p>${explanation}. Visit this link to see the full image <a href="${url}">${url}</a></p>

                            `;
            Nasa.innerHTML = userOutPut;
        }
    });

const Nasa = document.querySelector('#nasa');
const list = document.querySelector('ul');


document.querySelector('#btn2').addEventListener('click', () => {
    Nasa.style.display = 'block';
    list.style.display = 'none';
});