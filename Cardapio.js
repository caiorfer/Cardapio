var cardapio = {
    "Entradas": ["Bruschetta", "Carpaccio", "Salada Caprese", "Caldo Verde", "Queijo Brie"],
    "Pratos Principais": ["Filé", "Salmao Grelhado", "Risoto de Cogumelos", "Frango a Parmegiana", "Lasanha"],
    "Bebidas": ["Vinho Tinto", "Suco Detox", "Caipirinha", "Refrigerante", "Suco Natural", "Aguinha Mineral"],
    "Sobremesas": ["Tiramisu", "Pudim de Leite", "Brownie com Sorvete", "Cheesecake"]
};

var valores = {
    "Bruschetta": 15, 
    "Carpaccio": 20, 
    "Salada Caprese": 15, 
    "Caldo Verde": 11, 
    "Queijo Brie": 10,
    "Filé": 45, 
    "Salmao Grelhado": 60, 
    "Risoto de Cogumelos": 90, 
    "Frango a Parmegiana": 50, 
    "Lasanha": 50,
    "Vinho Tinto": 80, 
    "Suco Detox": 15, 
    "Caipirinha": 20, 
    "Refrigerante": 8, 
    "Suco Natural": 14, 
    "Aguinha Mineral": 5,
    "Tiramisu": 20, 
    "Pudim de Leite": 15, 
    "Brownie com Sorvete": 30, 
    "Cheesecake": 40
};

function exibir_cardapio(cardapio, valores) {
    var html = "<h2>Cardápio</h2>";
    for (var categoria in cardapio) {
        html += "<h3>" + categoria + "</h3>";
        for (var i = 0; i < cardapio[categoria].length; i++) {
            var item = cardapio[categoria][i];
            html += "<p>" + item + " - R$" + valores[item].toFixed(2) + "</p>";
        }
    }
    document.getElementById("cardapio").innerHTML = html;
}

function fazer_pedido(cardapio) {
    var pedido = {};
    for (var categoria in cardapio) {
        var opcoes = "";
        for (var i = 0; i < cardapio[categoria].length; i++) {
            opcoes += (i+1) + ". "+cardapio[categoria][i]+"\n";
        }
        var escolha = window.prompt("Opções de "+categoria+":\n"+opcoes+"\nDeseja algum dos/das "+categoria.toLowerCase()+"? (s/n): ");
        if (escolha.toLowerCase() === 's') {
            var opcao = parseInt(window.prompt("Digite o número do item que deseja ou 0 para não pedir: "));
            if (1 <= opcao && opcao <= cardapio[categoria].length) {
                pedido[categoria] = cardapio[categoria][opcao - 1];
            }
        }
    }
    return pedido;
}

function calcular_valor_total(pedido, valores) {
    var valor_total = 0;
    for (var categoria in pedido) {
        valor_total += valores[pedido[categoria]];
    }
    return valor_total;
}

exibir_cardapio(cardapio, valores);
var pedido = fazer_pedido(cardapio);

var resumo_pedido = "\nResumo do Pedido:\n";
for (var categoria in pedido) {
    resumo_pedido += "- "+pedido[categoria]+" ("+categoria+")\n";
}
window.alert(resumo_pedido);

var valor_total = calcular_valor_total(pedido, valores);
window.alert("Valor Total: R$ "+valor_total.toFixed(2));
