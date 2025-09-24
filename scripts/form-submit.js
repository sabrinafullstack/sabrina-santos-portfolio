// scripts/form-submit.js - Compatível com seu HTML
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Feedback visual
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Opcional: Mostrar mensagem de carregamento
            messageDiv.style.display = 'block';
            messageDiv.textContent = 'Enviando mensagem...';
            messageDiv.style.background = '#fff3cd';
            messageDiv.style.color = '#856404';
            messageDiv.style.border = '1px solid #ffeaa7';
            
            // Netlify cuida do envio automaticamente
            // O redirect para /obrigado.html acontece sozinho
            
            // Se quiser feedback adicional, pode usar:
            setTimeout(() => {
                messageDiv.textContent = 'Redirecionando...';
            }, 2000);
        });
    }
});