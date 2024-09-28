// Função genérica para converter entre bases
function converterBase(valor, baseInicial, baseFinal) {
    let decimalValor = parseInt(valor, baseInicial); // Converte para decimal a partir da base inicial
    if (isNaN(decimalValor)) {
        alert(`Por favor, insira um valor válido na base ${baseInicial}.`);
        return;
    }
    return decimalValor.toString(baseFinal).toUpperCase(); // Converte de decimal para a base final
}

// Funções específicas para cada conversão
function converterDecimalParaBinario() {
    let valor = document.getElementById("id_decimal_para_binario").value;
    let binario = converterBase(valor, 10, 2);
    document.getElementById("div_exibir_bin").innerHTML = `Binário: ${binario}`;
    aparecer_bin();
}

function converterDecimalParaOctal() {
    let valor = document.getElementById("id_decimal_para_octal").value;
    let octal = converterBase(valor, 10, 8);
    document.getElementById("div_exibir_octal").innerHTML = `Octal: ${octal}`;
    aparecer_octal();
}

function converterDecimalParaHexa() {
    let valor = document.getElementById("id_decimal_para_hexa").value;
    let hexa = converterBase(valor, 10, 16);
    document.getElementById("div_exibir_hexa").innerHTML = `Hexadecimal: ${hexa}`;
    aparecer_hexa();
}

function converterHexParaBinario() {
    let valor = document.getElementById("id_hex_para_binario").value;
    let binario = converterBase(valor, 16, 2);
    document.getElementById("div_exibir_bin").innerHTML = `Binário: ${binario}`;
    aparecer_bin();
}

function converterHexParaOctal() {
    let valor = document.getElementById("id_hex_para_octal").value;
    let octal = converterBase(valor, 16, 8);
    document.getElementById("div_exibir_octal").innerHTML = `Octal: ${octal}`;
    aparecer_octal();
}

function converterHexParaDecimal() {
    let valor = document.getElementById("id_hex_para_decimal").value;
    let decimal = converterBase(valor, 16, 10);
    document.getElementById("div_exibir_decimal").innerHTML = `Decimal: ${decimal}`;
    aparecer_decimal();
}

function converterBinarioParaDecimal() {
    let valor = Number(id_binário_para_decimal.value)
    let decimal = converterBase(valor, 2, 10);
    document.getElementById("div_exibir_decimal").innerHTML = `Decimal: ${decimal}`;
    aparecer_decimal();
}

function converterBinarioParaOctal() {
    let valor = Number(id_binário_para_octal.value)
    let octal = converterBase(valor, 2, 8);
    document.getElementById("div_exibir_octal").innerHTML = `Octal: ${octal}`;
    aparecer_octal();
}

function converterBinarioParaHexa() {
    let valor = Number(id_binário_para_hexa.value)
    let hexa = converterBase(valor, 2, 16);
    document.getElementById("div_exibir_hexa").innerHTML = `Hexadecimal: ${hexa}`;
    aparecer_hexa();
}
// Converter Octal para Binário
function converterOctalParaBinario() {
    let valor = document.getElementById("id_octal_para_binario").value;
    let binario = converterBase(valor, 8, 2);
    document.getElementById("div_exibir_bin").innerHTML = `Binário: ${binario}`;
    aparecer_bin();
}

// Converter Octal para Decimal
function converterOctalParaDecimal() {
    let valor = document.getElementById("id_octal_para_decimal").value;
    let decimal = converterBase(valor, 8, 10);
    document.getElementById("div_exibir_decimal").innerHTML = `Decimal: ${decimal}`;
    aparecer_decimal();
}

// Converter Octal para Hexadecimal
function converterOctalParaHexa() {
    let valor = document.getElementById("id_octal_para_hexa").value;
    let hexa = converterBase(valor, 8, 16);
    document.getElementById("div_exibir_hexa").innerHTML = `Hexadecimal: ${hexa}`;
    aparecer_hexa();
}

// Função para soma de valores em diferentes bases com base no resultado selecionado
function realizarSoma() {
    let valor1 = document.getElementById("valor1_soma").value;
    let valor2 = document.getElementById("valor2_soma").value;
    let base1 = parseInt(document.getElementById("base1_soma").value);
    let base2 = parseInt(document.getElementById("base2_soma").value);
    let baseResultado = parseInt(document.getElementById("base_resultado_soma").value);

    // Converter os valores para decimal
    let decimal1 = parseInt(valor1, base1);
    let decimal2 = parseInt(valor2, base2);

    if (isNaN(decimal1) || isNaN(decimal2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Realizar a soma em decimal
    let resultadoDecimal = decimal1 + decimal2;

    // Converter o resultado para a base escolhida
    let resultadoFinal = resultadoDecimal.toString(baseResultado).toUpperCase();

    // Exibir o resultado
    document.getElementById("div_exibir_resultado_soma").style.display = 'block';
    document.getElementById("div_exibir_resultado_soma").innerHTML = `Resultado: ${resultadoFinal} (Base ${baseResultado})`;
}

// Função para subtração de valores em diferentes bases com base no resultado selecionado
function realizarSubtracao() {
    let valor1 = document.getElementById("valor1_subtracao").value;
    let valor2 = document.getElementById("valor2_subtracao").value;
    let base1 = parseInt(document.getElementById("base1_subtracao").value);
    let base2 = parseInt(document.getElementById("base2_subtracao").value);
    let baseResultado = parseInt(document.getElementById("base_resultado_subtracao").value);

    // Converter os valores para decimal
    let decimal1 = parseInt(valor1, base1);
    let decimal2 = parseInt(valor2, base2);

    if (isNaN(decimal1) || isNaN(decimal2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Realizar a subtração em decimal
    let resultadoDecimal = decimal1 - decimal2;

    // Converter o resultado para a base escolhida
    let resultadoFinal = resultadoDecimal.toString(baseResultado).toUpperCase();

    // Exibir o resultado
    document.getElementById("div_exibir_resultado_subtracao").style.display = 'block';
    document.getElementById("div_exibir_resultado_subtracao").innerHTML = `Resultado: ${resultadoFinal} (Base ${baseResultado})`;
}

// Função para multiplicação de valores em diferentes bases com base no resultado selecionado
function realizarMultiplicacao() {
    let valor1 = document.getElementById("valor1_multiplicacao").value;
    let valor2 = document.getElementById("valor2_multiplicacao").value;
    let base1 = parseInt(document.getElementById("base1_multiplicacao").value);
    let base2 = parseInt(document.getElementById("base2_multiplicacao").value);
    let baseResultado = parseInt(document.getElementById("base_resultado_multiplicacao").value);

    // Converter os valores para decimal
    let decimal1 = parseInt(valor1, base1);
    let decimal2 = parseInt(valor2, base2);

    if (isNaN(decimal1) || isNaN(decimal2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Realizar a multiplicação em decimal
    let resultadoDecimal = decimal1 * decimal2;

    // Converter o resultado para a base escolhida
    let resultadoFinal = resultadoDecimal.toString(baseResultado).toUpperCase();

    // Exibir o resultado
    document.getElementById("div_exibir_resultado_multiplicacao").style.display = 'block';
    document.getElementById("div_exibir_resultado_multiplicacao").innerHTML = `Resultado: ${resultadoFinal} (Base ${baseResultado})`;
}
// Função para divisão de valores em diferentes bases com base no resultado selecionado
function realizarDivisao() {
    let valor1 = document.getElementById("valor1_divisao").value;
    let valor2 = document.getElementById("valor2_divisao").value;
    let base1 = parseInt(document.getElementById("base1_divisao").value);
    let base2 = parseInt(document.getElementById("base2_divisao").value);
    let baseResultado = parseInt(document.getElementById("base_resultado_divisao").value);

    // Verificar se as bases e os valores estão preenchidos corretamente
    if (!valor1 || !valor2 || isNaN(base1) || isNaN(base2) || isNaN(baseResultado)) {
        alert("Por favor, preencha todos os campos e selecione as bases corretamente.");
        return;
    }

    // Converter os valores para decimal a partir das suas respectivas bases
    let decimal1 = parseInt(valor1, base1);
    let decimal2 = parseInt(valor2, base2);

    // Verificar se as conversões foram bem-sucedidas
    if (isNaN(decimal1) || isNaN(decimal2)) {
        alert("Por favor, insira valores válidos para as bases selecionadas.");
        return;
    }

    // Impedir divisão por zero
    if (decimal2 === 0) {
        alert("O divisor não pode ser zero.");
        return;
    }

    // Realizar a divisão em decimal (forçando divisão inteira)
    let resultadoDecimal = Math.floor(decimal1 / decimal2);

    // Converter o resultado para a base escolhida
    let resultadoFinal = resultadoDecimal.toString(baseResultado).toUpperCase();

    // Exibir o resultado
    document.getElementById("div_exibir_resultado_divisao").style.display = 'block';
    document.getElementById("div_exibir_resultado_divisao").innerHTML = `Resultado: ${resultadoFinal} (Base ${baseResultado})`;
}

// Funções para exibir as divs
function aparecer_bin() {
    document.getElementById("div_exibir_bin").style.display = 'block';
}

function aparecer_octal() {
    document.getElementById("div_exibir_octal").style.display = 'block';
}

function aparecer_hexa() {
    document.getElementById("div_exibir_hexa").style.display = 'block';
}

function aparecer_decimal() {
    document.getElementById("div_exibir_decimal").style.display = 'block';
}

function converterCaracter() {

    div_output.innerHTML = '';

    var caractere = input_ascii.value;
    var decimal = caractere.charCodeAt();

    div_output.style.display = 'block';

    div_output.innerHTML += "<b>Decimal: </b>" + decimal + '<br>';
    div_output.innerHTML += "<b>Binário: </b>" + decimal.toString(2) + '<br>';
    div_output.innerHTML += "<b>Hexadecimal: </b>" + decimal.toString(16) + '<br>';
}
