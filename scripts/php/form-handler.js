// scripts/form-handler.js - VERSÃO NETLIFY
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.form-container');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // NÃO USA e.preventDefault() - Deixa o Netlify processar
            
            // Mostrar estado de carregamento
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Mostrar mensagem de carregamento
            formMessage.style.display = 'block';
            formMessage.textContent = 'Enviando sua mensagem...';
            formMessage.style.backgroundColor = '#fff3cd';
            formMessage.style.color = '#856404';
            formMessage.style.border = '1px solid #ffeaa7';
            
            // Netlify cuida do envio automaticamente
            // O formulário será submetido normalmente
            
            // Restaurar botão após algum tempo (caso não haja redirect)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 5000);
        });
    }
});

// Função para animação de sucesso (opcional)
function triggerSuccessAnimation() {
    console.log('Enviado com sucesso!');
    // Suas animações do SVG podem ser chamadas aqui
}