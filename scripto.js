let total = 0;

        function addToOrder(itemName, itemPrice) {
            total += itemPrice;
            document.getElementById('total-price').innerText = total;
            alert(itemName + " adicionado ao pedido!");
        }

        function finalizeOrder() {
            if (total > 0) {
                alert("Seu pedido totaliza R$" + total + ". Obrigado por pedir! realize o pagamento no seguinte pix: 3cf8f5a2-6713-490d-8070-fce1bd7b49c0");
            } else if (total === 0) {
                alert("Você não fez nenhum pedido.");
            } else {
                alert("Seu pedido totaliza R$" + total + ". Boa sorte no desafio, vai precisar");
            }
        }
        function msgdes() {
            alert("Ainda em desenvolvimento");
        }
        function lootboxvsf() {
            // Gera um valor aleatório entre 50 e 200
            const randomValue = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
            // Adiciona o valor aleatório ao carrinho
            addToOrder('Valor Aleatório', randomValue);
        }
