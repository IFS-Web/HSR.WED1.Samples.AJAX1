const indexTemplateComplied = Handlebars.compile(document.getElementById('music-list-template').innerHTML);
const musicContainter = document.getElementById('music-list');

function indexAction() {
    renderIndexView();
}

async function renderIndexView() {
    const music = await musicService.getAll();
    musicContainter.innerHTML = indexTemplateComplied(music);
}