function calcularCompatibilidade() {
    const nome1 = document.getElementById('nome1').value.toLowerCase().trim();
    const nome2 = document.getElementById('nome2').value.toLowerCase().trim();
    
    if (!nome1 || !nome2) {
        alert('Por favor, preencha ambos os nomes!');
        return;
    }

    // Exceção especial para "julia" e "matheus"
    const nomesEspeciais = ['julia', 'matheus'];
    if (nomesEspeciais.includes(nome1) && nomesEspeciais.includes(nome2)) {
        mostrarResultado(1000);
        return;
    }

    // Contar letras em comum
    const letras1 = {};
    const letras2 = {};
    
    for (let letra of nome1) {
        if (letra !== ' ') {
            letras1[letra] = (letras1[letra] || 0) + 1;
        }
    }
    
    for (let letra of nome2) {
        if (letra !== ' ') {
            letras2[letra] = (letras2[letra] || 0) + 1;
        }
    }
    
    let letrasComuns = 0;
    for (let letra in letras1) {
        if (letras2[letra]) {
            letrasComuns += Math.min(letras1[letra], letras2[letra]);
        }
    }
    
    const totalLetras = nome1.replace(/\s/g, '').length + nome2.replace(/\s/g, '').length;
    const porcentagem = Math.round((letrasComuns / totalLetras) * 200);
    
    const porcentagemFinal = Math.min(1000, Math.max(0, porcentagem));
    
    mostrarResultado(porcentagemFinal);
}

function mostrarResultado(porcentagemFinal) {
    document.getElementById('porcentagem').textContent = porcentagemFinal + '%';
    
    let mensagem = '';
    let emoji = '';
    
   
    if (porcentagemFinal >= 80) {
        mensagem = 'Combinação perfeita! 🎉';
        emoji = '😍';
    } else if (porcentagemFinal >= 60) {
        mensagem = 'Ótima compatibilidade!';
        emoji = '🥰';
    } else if (porcentagemFinal >= 40) {
        mensagem = 'Boa combinação!';
        emoji = '😊';
    } else if (porcentagemFinal >= 20) {
        mensagem = 'Podem tentar...';
        emoji = '🤔';
        } else if (porcentagemFinal >= 1000) {
        mensagem = 'São mais do que perfeitos, precisam casar agora! 😘';
        emoji = '💖';
    } else {
        mensagem = 'Nem tudo é perfeito!';
        emoji = '😅';
    }
    
    
    document.getElementById('mensagem').textContent = mensagem;
    document.getElementById('emoji').textContent = emoji;
    document.getElementById('resultado').style.display = 'block';
}
