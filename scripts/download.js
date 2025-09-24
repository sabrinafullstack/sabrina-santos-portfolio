// scripts/download.js

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    const downloadLink = document.getElementById('download-link');
    
    // Método 1: Download direto com feedback visual
    downloadBtn.addEventListener('click', function() {
        // Adiciona classe de loading
        this.classList.add('loading');
        
        // Simula um pequeno delay para feedback visual
        setTimeout(() => {
            // Método 1: Usando o link invisível
            downloadLink.click();
            
            // Método 2: Criando link dinamicamente (alternativa)
            // forceDownload();
            
            // Remove loading após 2 segundos
            setTimeout(() => {
                this.classList.remove('loading');
                this.classList.add('success');
                
                // Remove o sucesso após 3 segundos
                setTimeout(() => {
                    this.classList.remove('success');
                }, 3000);
                
            }, 2000);
            
        }, 500);
    });
    
    // Método alternativo: Download forçado via JavaScript
    function forceDownload() {
        const pdfUrl = 'sabrinaoliveira-estagio.pdf';
        const fileName = 'Sabrina-Santos-CV.pdf';
        
        // Cria um link temporário
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        link.target = '_blank'; // Abre em nova aba se o download falhar
        
        // Adiciona ao DOM, clica e remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    // Verifica se o PDF existe (opcional)
    function checkPdfExists() {
        const pdfUrl = 'sabrinaoliveira-estagio.pdf';
        
        fetch(pdfUrl, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    console.warn('PDF não encontrado em:', pdfUrl);
                    downloadBtn.style.opacity = '0.7';
                    downloadBtn.title = 'CV temporariamente indisponível';
                }
            })
            .catch(error => {
                console.error('Erro ao verificar PDF:', error);
            });
    }
    
    // Verifica se o PDF existe ao carregar a página
    checkPdfExists();
});