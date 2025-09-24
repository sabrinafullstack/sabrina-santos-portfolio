<?php
// php/enviar.php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Simula processamento
    sleep(1);
    
    // Sempre retorna sucesso para teste
    echo json_encode([
        "success" => true, 
        "message" => "✅ Mensagem enviada com sucesso! Entrarei em contato em breve."
    ]);
    
    // Salva os dados em log
    $dados = [
        'nome' => $_POST['name'] ?? 'Não informado',
        'email' => $_POST['email'] ?? 'Não informado', 
        'assunto' => $_POST['subject'] ?? 'Não informado',
        'data' => date('d/m/Y H:i:s')
    ];
    
    file_put_contents('contatos.log', print_r($dados, true) . "\n", FILE_APPEND);
    
} else {
    echo json_encode(["success" => false, "message" => "Método não permitido"]);
}
?>