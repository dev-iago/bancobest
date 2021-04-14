$(function () {
  $('.mn').click(function () {
    $('.submn1').slideUp('slow');
    $(this).next('.submn1').slideDown('slow');
  });
});

// $(function () {
//   $('ul').html(`
//   <a href="#" title="Dia" class="mn">Hoje</a>
// <ul class="submn1">
// <li>
// <div id="item" >
//   <div>
//     <img src="./img/galp.png" alt="Foto" />
//     <span>
//       <strong>Galp</strong>
//       </br>
//       <span class="item_sub_info">
//         02 Jan, 12:30 •Transportes
//       </span>
//   </span>
//    </div>
//    <span>-45,00€</span>
//  </div>
// </li></ul>`);
// });

const jsonData = {
  icons: {
    patrimonio: {
      type: 1,
      label: 'Património',
      target: 'same_name_folder',
    },
    gestao_diaria: {
      type: 1,
      label: 'Gestão Diaria',
      target: 'same_name_folder',
    },
    comprar_vender: {
      type: 1,
      label: 'Comprar/Vender',
      target: 'same_name_folder',
    },
    novidades: {
      type: 1,
      label: 'Novidades',
      id_group: 4,
      target: 'same_name_container',
    },
    patrimonio_integrado: {
      type: 2,
      label: 'Património integrado',
      parent: 'patrimonio',
    },
    saldos_movimentos: {
      type: 2,
      label: 'Saldos e Movimentos',
      parent: 'gestao_diaria',
    },
    transferencias: {
      type: 2,
      label: 'Transferências',
      parent: 'gestao_diaria',
    },
    pagamentos_carregamentos: {
      type: 2,
      label: 'Pagamentos e Carregamentos',
      parent: 'gestao_diaria',
    },
    cartoes: {
      type: 2,
      label: 'Cartões',
      parent: 'patrimonio',
    },
    depositos_prazo: {
      type: 2,
      label: 'Depósitos a Prazo',
      parent: 'comprar_vender',
    },
    confirmacao_operacoes: {
      type: 2,
      label: 'Confirmação de Operações',
      parent: 'gestao_diaria',
    },
    investimento_trading: {
      type: 2,
      label: 'Investimento e Trading',
      parent: 'patrimonio',
    },
  },
  movements: {
    1: {
      galp: {
        label: 'Galp',
        date: '02 Jan',
        time: '12:30',
        direction: 'payment',
        amount: 45.0,
        tag: 'Transportes',
        currency: '€',
      },
      continente: {
        label: 'Continente São Marcos',
        date: '02 Jan',
        time: '12:02',
        direction: 'payment',
        amount: 10.99,
        tag: 'Alimentação',
        currency: '€',
      },
      uber: {
        label: 'Uber',
        date: '02 Jan',
        time: '09:44',
        direction: 'payment',
        amount: 7.24,
        tag: 'Transportes',
        currency: '€',
      },
      account01: {
        label: 'Albino Costa',
        date: '02 Jan',
        time: '09:44',
        direction: 'transfer',
        amount: 20.0,
        tag: null,
        currency: '€',
      },
    },
    2: {
      galp: {
        label: 'Galp',
        date: '02 Feb',
        time: '12:30',
        direction: 'payment',
        amount: 45.0,
        tag: 'Transportes',
        currency: '€',
      },
      continente: {
        label: 'Continente São Marcos',
        date: '02 Feb',
        time: '12:02',
        direction: 'payment',
        amount: 10.99,
        tag: 'Alimentação',
        currency: '€',
      },
      uber: {
        label: 'Uber',
        date: '02 Feb',
        time: '09:44',
        direction: 'payment',
        amount: 7.24,
        tag: 'Transportes',
        currency: '€',
      },
      account01: {
        label: 'Albino Costa',
        date: '02 Feb',
        time: '09:44',
        direction: 'transfer',
        amount: 20.0,
        tag: null,
        currency: '€',
      },
    },
  },
  beneficiarios: {
    pt_account01: {
      name: 'Joaquim Carvalho',
      iban: 'PT50003506830000000784311',
      photo: 'joaquim_carvalho.png',
    },
    pt_account02: {
      name: 'Beatriz Agostinho',
      iban: 'PT50003506830000000784312',
      photo: 'beatriz_agostinho.png',
    },
    pt_account03: {
      name: 'Luis Pessoa',
      iban: 'PT50003506830000000784313',
      photo: 'luis_pessoa.png',
    },
    uk_account: {
      name: 'Mats Magnusson',
      iban: 'GB32ESSE40486562136016',
      photo: 'mats_magnusson.png',
      bic_swift: 'ESSEGB2L',
      bank_name: 'SKANDINAVISKA ENSKILDA BANKEN AB (PUBL)',
      bank_address: 'One Carter Lane',
      bank_zip: 'EC4V 5AN',
    },
    es_account: {
      name: 'William Andrade',
      iban: 'ES1020903200500041045040',
      photo: 'william_andrade.png',
      bic_swift: 'BSABESBB',
      bank_name: 'BANCO DE SABADELL, S A',
      bank_address: 'CL PASCUAL Y GENIS 22',
      bank_zip: '46002 VALENCIA ES',
    },
    fr_account: {
      name: 'Sven Eriksson',
      iban: 'FR7630066100410001057380116',
      photo: 'sven_eriksson.png',
      bic_swift: 'CMCIFRPP',
      bank_name: 'CREDIT INDUSTRIEL ET COMMERCIAL CIC',
      bank_address: '2 BD RASPAIL',
      bank_zip: '75007',
    },
    it_account: {
      name: 'Jonas Thern',
      iban: 'IT68D0300203280000400162854',
      photo: 'jonas_thern.png',
      bic_swift: 'UNCRITMM',
      bank_name: 'UNICREDIT BANCA DI ROMA SPA',
      bank_address: 'PIAZZA MONTE DI PIETA, 32/A',
      bank_zip: '00186',
    },
  },
  accounts_cards: {
    1: {
      name: 'Nome da minha conta',
      type: 'account',
      iban: 'PT50 0002 0123 1234 5678 9015 4',
      balance_available: 2132.07,
      balance_accounting: 2132.07,
      balance_cative: 0,
      balance_authorized: 2132.07,
      currency: 'EUR',
      style: 'gradient',
    },
    2: {
      name: 'Poupanças',
      type: 'account',
      iban: 'PT50 0002 0123 1234 5678 9015 8',
      balance_available: 10650.0,
      balance_accounting: 10650.0,
      balance_cative: 0,
      balance_authorized: 10650.0,
      currency: 'EUR',
      style: 'gradient',
    },
    3: {
      name: 'VISA GOLD PLUS',
      type: 'card',
      card_number: '**** **** **** 4693',
      card_type: 'credit',
      credit_available: 16775.0,
      credit_used: 10650.0,
      credit_plafond: 0,
      credit_extrat: '31 Feb',
      currency: 'EUR',
      style: 'image',
    },
    4: {
      name: 'VISA ELECTRON',
      type: 'card',
      card_number: '**** **** **** 4694',
      card_type: 'debit',
      account_parent: '1',
      currency: 'EUR',
      style: 'image',
    },
  },
};

// $(function () {
//   console.log('here');
//   let linha = 0;
//   for (linha = 0; linha < 1; linha++) {
//     console.log('Registros da linha ' + linha);
//     console.log(jsonData.movements);
//   }
// });

// // console.log(JSON.stringify());
// // jsonData.movements.forEach(() => console.log('teste'));
// // $(jsonData.movements).each(function (index) {
// //   console.log(index + ': ' + $(this).text());
// // });
// // $(document).ready(function () {
// //   $.get(jsonData.movements, function (data) {
// //     console.log('encontrei ' + data.length + ' registros');
// //     console.log(data[0]);
// //   });
// // });
