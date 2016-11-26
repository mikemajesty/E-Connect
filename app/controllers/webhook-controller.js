var express = require('express');
var router = express.Router();
var Canvas = require('../models/canvas');
var randomstring = require("randomstring");

router.post('/', function (req, res) {
    // Canvas.create({
    //     code: code,
    //     data: {
    //         key_partners: 'key_partners' + code,
    //         key_activities: 'key_activities' + code,
    //         key_resources: 'key_resources' + code,
    //         cost_structure: 'cost_structure' + code,
    //         value_propositions: 'value_propositions' + code,
    //         customer_relationships: 'customer_relationships' + code,
    //         channels: 'channels',
    //         customer_segments: 'customer_segments' + code,
    //         revenue_streams: 'revenue_streams' + code
    //     }
    // });
    
    var code = randomstring.generate(7);
    Canvas.create({
        code: code,
        data: req.body.result.parameters
    });

    if (req.body.result.action === 'canvas') {
        res.json({
            "speech": "Acabamos de montar um pequeno modelo de negócio para você, olhe aqui.",
            "displayText": "Acabamos de montar um pequeno modelo de negócio para você, olhe aqui.",
            "source": "connect-api",
            "data": {
                // url: 'https://uol-econnect.herokuapp.com/canvas/' + code,
                url: 'http://http://hackauol02.xyz//canvas/' + code,
                messages: [
                    "O marketing também é muito importante, faça um site para divulgar o seu negócio! UOL oferece um amplo catálogo de produtos que podem te ajudar! Você pode criar seu site, sua loja online ou um e-mail profissional, pensa só, celso@sualoja.com.br, bacana né!?"
                ]
            }
        });
    }

    if (req.body.result.action === 'business') {
        res.json({
            "speech": "Seu faturamento é de aproximadamente R$ " + parseFloat(req.body.result.parameters.value) * 28 + " por mês, você se enquadra no MEI - Microempreendedor Individual. Nesse tipo de empresa você pagará apenas o valor fixo mensal de R$ 45,00 (comércio ou indústria), R$ 49,00 (prestação de serviços) ou R$ 50,00 (comércio e serviços). Para abrir empresa basta acessar o site abaixo.",
            "displayText": "Seu faturamento é de aproximadamente R$ " + parseFloat(req.body.result.parameters.value) * 28 + " por mês, você se enquadra no MEI - Microempreendedor Individual. Nesse tipo de empresa você pagará apenas o valor fixo mensal de R$ 45,00 (comércio ou indústria), R$ 49,00 (prestação de serviços) ou R$ 50,00 (comércio e serviços). Para abrir empresa basta acessar o site abaixo.",
            "source": "connect-api",
            "data": {
                url: "http://www.portaldoempreendedor.gov.br",
                "messages": [
                    {
                        message: "Clicar no icone",
                        data: {image: "http://www.portaldoempreendedor.gov.br/mei-microempreendedor-individual/iamgens/btn-formalizar2.png"}
                    },
                    {
                        message: "A lista de documentos necessários é:",
                        data: {list: ["Número do CPF", "Data de nascimento do titular", "Número do título de eleitor", "Último recibo de entrega da Declaração Anual de Imposto de Renda Pessoa Física – DIRPF, caso esteja obrigado a entregar a DIRPF"]}
                    },
                    {
                        message: "Antes de abrir a empresa, o que acha de validarmos o seu negócio ?",
                        data: {url: 'http://http://hackauol02.xyz//canvas/' + code}
                    }
                ]
            }
        });
    }

    res.json({
        "speech": "Não temos resposta para esta solicitação ainda, mas estamos trabalhando nisso.",
        "displayText": "Não temos resposta para esta solicitação ainda, mas estamos trabalhando nisso.",
        "source": "connect-api",
    });
}); 

module.exports = router;