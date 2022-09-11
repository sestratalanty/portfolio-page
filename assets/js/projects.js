const createProjectCard = ({
  name ,
  img_url: imgUrl ,
  page_url: pageUrl ,
  code_url: codeUrl ,
  description,
  download
}) => {
  const project = `
    <article>
      <header>
        <h2><a href="${pageUrl}">${name}</a></h2>
      </header>
      <a href="${pageUrl}" class="image fit"><img src="${imgUrl}" alt="${name}" /></a>
      <p>${description}</p>
      <ul class="actions special">
        <li><a href="${pageUrl}" class="button" "${download}">To Page</a></li>
      </ul>
    </article>
  `
  document.querySelector('.posts').insertAdjacentHTML('afterbegin', project);
}

const getData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки: ${res.status}`)
  }

  return await res.json();
}

window.addEventListener('DOMContentLoaded', () => {
  getData('./db/projects.json').then(data => data.forEach(createProjectCard));
})