//Carrossel
let ulsElis = document.querySelectorAll('ul li')

let qtdItens = ulsElis.length

let numDeItens = 6

let lista1 = document.querySelectorAll('#lista1 li')

function show(indice, indiceLista) {
    let n = indice
    numDeItens =  numDeItens + indice
    console.log(n + " " + numDeItens)

    let listaUl = document.querySelector('#lista'+indiceLista)
    //console.log(listaUl)

    let mover  = 200
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) {
        //console.log('Mover para direita')
        listaUl.scrollBy(posicaoXDireita, 0)
    }
    if(indice == -1) {
        //console.log('Mover para esquerda')
        listaUl.scrollBy(posicaoXEsquerda, 0)
    }

}

// Lógica para abrir os vídeos no iframe
const videoLinks = document.querySelectorAll('.videos a');
const iframeVideo = document.getElementById('iframeVideo');

videoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede que o link abra em uma nova aba
        
        const url = this.href;
        let videoId = '';
        
        // Extrai o ID do vídeo da URL (funciona para youtu.be e youtube.com/watch)
        if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        } else if (url.includes('youtube.com/watch')) {
            const urlObj = new URL(url);
            videoId = urlObj.searchParams.get('v');
        }
        
        // Atualiza o src do iframeVideo e define as dimensões para exibir o vídeo
        if (videoId) {
            iframeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            iframeVideo.width = '560';
            iframeVideo.height = '315';
            iframeVideo.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframeVideo.allowFullscreen = true;
        }
    });
});
