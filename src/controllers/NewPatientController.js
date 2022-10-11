import { NewSalesForcePatientService } from '../services'


class NewPatientController {

    async handle(req, res) {
        console.log("controller: ", req)

        const { 
            endereco: { cep, bairro, complemento, idCidade, numero, rua },
            contato: { email, telefoneCelular },
            nome,
            numeroIdentificacao,
            sexo, 
            dataNascimento } = req.body;

        new NewSalesForcePatientService().run({
            name: nome,
            id: numeroIdentificacao,
            gender: sexo,
            birthday: dataNascimento,
            email: email,
            phoneNumber: telefoneCelular,
            postalCode: cep,
            address: bairro,
            address_complement: complemento,
            city_id: idCidade,
            address_number: numero,
            address_street: rua
        })        
    }

}

export { NewPatientController }

// {
//     "contato": {
//       "email": "string",
//       "ramalTelefoneComercial": "string",
//       "ramalTelefoneRecados": "string",
//       "ramalTelefoneResidencial": "string",
//       "skype": "string",
//       "telefoneCelular": "string",
//       "telefoneComercial": "string",
//       "telefoneRecados": "string",
//       "telefoneResidencial": "string"
//     },
//     "cpfcnpj": "string",
//     "dataNascimento": "string",
//     "endereco": {
//       "bairro": "string",
//       "cep": "string",
//       "complemento": "string",
//       "idCidade": 0,
//       "numero": "string",
//       "rua": "string"
//     },
//     "estrangeiro": true,
//     "genero": "MASCULINO",
//     "idNacionalidade": 0,
//     "idOrigem": 0,
//     "nome": "string",
//     "nomeSocial": "string",
//     "numeroControle": "string",
//     "numeroIdentificacao": "string",
//     "sexo": "M"
//   }
