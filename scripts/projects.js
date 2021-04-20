function getProjects() {
  let stored = localStorage.getItem('language')

  if (!stored) {
    localStorage.setItem('language', 'pt')
    stored = 'pt'
  }

  fetch('/languages/projects-' + stored + '.json')
    .then(data => data.json()
      .then(projetos => {
        document.getElementById('pjArr').innerHTML = ""

        projetos.map((el, i) => {

          el.title === 'Lar Serviços' ?
            imgCard = `<img class="card-img-top" src="${el.image}" style="border-radius: 100%;" alt="Logo da Lar Serviços"/>`
            :
            imgCard = `<img class="card-img-top" src="${el.image}" alt="${el.title}"/>`

          document.getElementById('pjArr').innerHTML +=
            `
      <div class="card">
        ${imgCard}
            <div class="card-body">
              <div class="h5 pt-2">${el.title}</div>
              <p class="category">${el.category}</p>
              <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modal${i}"><i
                class="fa fa-info"></i></button>
            </div>
       </div>
       </div>
            <div class="modal fade" id="modal${i}" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Mais Informações sobre <i>${el.title}</i> </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                      ${imgCard}
                      <h5 class="mt-2" id="about-title"></h5>
                      <p>${el.about}</p>
                      <h5>Site: </h5> <h5><a href="${el.site}" target="_blank" rel="noreferrer" class="fa fa-link"></a></h5>
                  <h5 class="mt-2" id="used-techs"></h5>
                    ${el.techs.map((t, i) => `<span key=${i} class="iconify my-2 mx-1" data-icon="${t}" data-inline="false" data-width="50" data-height="50"></span>`).join('')}
                    </div >
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary text-right" data-dismiss="modal">Fechar</button>
    </div>
                  </div >
                </div >
              </div >
  `
        })
      })
    )
}