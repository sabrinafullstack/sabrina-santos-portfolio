// scripts download btn 

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    const downloadLink = document.getElementById('download-link');
    
    // Method 1 using the invisible link
    downloadBtn.addEventListener('click', function() {
        // Adiciona classe de loading
        this.classList.add('loading');
        
        // simulate loading
        setTimeout(() => {
            // MMethod 1: Using the invisible link
            downloadLink.click();
            
            // Method 2 creating a link dynamically (alternative)
            // forceDownload();
            
            // Remove loading após 2 segundos
            setTimeout(() => {
                this.classList.remove('loading');
                this.classList.add('success');

                // remove success after 3 seconds
                setTimeout(() => {
                    this.classList.remove('success');
                }, 3000);
                
            }, 2000);
            
        }, 500);
    });
    
    // Method two download forced (alternative)
    function forceDownload() {
        const pdfUrl = 'sabrinaoliveira-estagio.pdf';
        const fileName = 'Sabrina-Santos-CV.pdf';

        // build a temporary link
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        link.target = '_blank'; // open in new tab if failed to
        
        // Adiciona DOM enter and click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Check if the PDF exists when the page loads
    
    checkPdfExists();
});