import icon1 from '../../assets/Images/Group5155.png'
import icon2 from '../../assets/Images/Iconmetro-credit-card.png'
import icon5 from '../../assets/Images/subtraction3.png'
import icon3 from '../../assets/Images/Iconmetro-qrcode.png'
import icon4 from '../../assets/Images/Iconawesome-bitcoin.png'

import picon1 from '../../assets/Images/Products.png'
import picon2 from '../../assets/Images/UserPlus.png'
import picon3 from '../../assets/Images/Comision.png'
import picon4 from '../../assets/Images/Whatsapp.png'
import picon5 from '../../assets/Images/Messages.png'

import img1 from '../../assets/Images/recargas.png'
import corresponsal from '../../assets/Images/corresponsal.png'
import img2 from '../../assets/Images/bit.png'
import img3 from '../../assets/Images/dig.png'
import img4 from '../../assets/Images/bill.png'
import img5 from '../../assets/Images/fac.png'
import img6 from '../../assets/Images/sec.png'
import img7 from '../../assets/Images/cre.png'
import img8 from '../../assets/Images/intr.png'
import img9 from '../../assets/Images/tv.png'
import img10 from '../../assets/Images/tra.png'
import essa from '../../assets/Images/essa3.png'
import epm from '../../assets/Images/epm3.png'
import component1441 from '../../assets/Images/component1441.png'
import component1263 from '../../assets/Images/component1262.png'
import component1253 from '../../assets/Images/component1253.png'
import component1273 from '../../assets/Images/component1273.png'
import pego from '../../assets/Images/pego.png'


import claroIcon from '../../assets/Images/claro3.png';
import avetalIcon from '../../assets/Images/avetal3.png'
import ExitoIcon from '../../assets/Images/Exito3.png'
import EtbIcon from '../../assets/Images/etb3.png'
import VirginIcon from '../../assets/Images/Virgin3.png'
import flashIcon from '../../assets/Images/flash3.png'
import MovistarIcon from '../../assets/Images/Movistar3.png'
import tigoIcon from '../../assets/Images/tigo3.png'
import WPLAY from "../../assets/Images/WPLAY3.png"
import Rush from "../../assets/Images/Rush3.png"
import Rivalo from "../../assets/Images/Rivalo3.png"
import Ya from "../../assets/Images/Ya3.png"
import Aqui from "../../assets/Images/Aqui3.png"
import Sportium from "../../assets/Images/Sportium3.png"
import Jugada from "../../assets/Images/Jugada3.png"

import Netflix from "../../assets/Images/Netflix3.png"
import PlayStation from "../../assets/Images/PlayStation3.png"
import Spotify from "../../assets/Images/Spotify3.png"
import Xbox from "../../assets/Images/Xbox3.png"
import Office from "../../assets/Images/Office3.png"
import Minecraft from "../../assets/Images/Minecraft3.png"
import IMVU from "../../assets/Images/IMVU3.png"
import Rixty from "../../assets/Images/Rixty3.png"
import snr from "../../assets/Images/snr3.png"
import runt from "../../assets/Images/runt3.png"


import component345 from "../../assets/Images/component345.png"
import component357 from "../../assets/Images/component357.png"


export const profilData = [
    {
        name: "Productos",
        icon: picon1,
        route: "Products"
    },
    {
        name: "Perfiles",
        icon: picon2,
        route: "Profiles"
    },
    {
        name: "Comision",
        icon: picon3,
        route: 'Comision'
    },
    {
        name: "Soporte",
        icon: picon4,
        route: 'Messages'
    },
    {
        name: "Mensajes",
        icon: picon5,
        route: "Messages"
    },
]

export const paymetData = [
    {
        name: "PSE",
        icon: icon1
    },
    {
        name: "Tarjeta",
        icon: icon2
    },
    {
        name: "Deposito",
        icon: icon5
    },
    {
        name: "QR code",
        icon: icon3
    },
    {
        name: "Bitcoin",
        icon: icon4
    },
]

export const productsData2 = [
    {
        name: "Corresponsal",
        icon: corresponsal,
        route: "Recargas"

    },
]
export const productsData = [
    {
        name: "Recargas",
        icon: img1,
        route: "Recargas"
    },
    {
        name: "Apuestas",
        icon: img2,
        route: "Apuestas"
    },
    {
        name: "Pines Digitales",
        icon: img3,
        route: "Digitales"
    },
    {
        name: "Billeteras",
        icon: img4,
        route: "Billeteras"
    },
    {
        name: "Facturas",
        icon: img5,
        route: "Facturas"
    },
    {
        name: "Seguros",
        icon: img6,
        route: "Seguros"
    },
    {
        name: "Certificados",
        icon: img7,
        route: 'Certificados'
    },
    {
        name: "Internacional",
        icon: img8,
        route: 'Internacional'

    },
    {
        name: "Tv",
        icon: img9,
        route: 'Tv'

    },
    // {
    //     name:"Tv",
    //     icon:img10,
    //     route : 'Transporte'

    // },

]

export const singelProduct = [
    {
        name: "PSE",
        icon: img1

    },

]

export const transferType = [
    {
        name: 'Repartos',
        redux: 'Recargas'
    },
    {
        name: 'Reversión',
        redux: "Recargas_Packages"
    }
]
export const recargasType = [
    {
        name: 'Recargas',
        redux: 'Recargas'
    },
    {
        name: 'Paquetes',
        redux: "Recargas_Packages"
    }
]

export const clientType = [
    {
        name: 'Clientes',
        redux: 'Recargas'
    },
    {
        name: 'Usuarios',
        redux: "Recargas_Packages"
    }
]

export const productsDiscription = {
    "Recargas": [
        {
            name: 'Claro',
            id: '2',
            icon: claroIcon,
            package: 'paqueclaro'
        },
        {
            name: 'Tigo',
            id: '7',
            icon: tigoIcon,
            package: 'paquetigo'
        },
        {
            name: 'Movistar',
            id: '6',
            icon: MovistarIcon,
            package: 'paquemovistar'

        },
        {
            name: 'Flash',
            id: '16',
            icon: flashIcon,
            package: null

        },
        {
            name: 'Virgin',
            id: '10',
            icon: VirginIcon,
            package: 'paquevirgin'
        },
        {
            name: 'ETP',
            id: '4',
            icon: EtbIcon,
            package: 'paqueetb'
        },

        {
            name: 'Éxito',
            id: '5',
            icon: ExitoIcon,
            package: null
        },
        {
            name: 'Avantel',
            id: '1',
            icon: avetalIcon,
            package: 'paqueavantel'
        },

    ],
    "Recargas_Packages": [
        {
            name: 'Paqueclaro',
            id: '13',
            icon: ''
        },
        {
            name: 'Paquemovistar',
            id: '19',
            icon: ''
        },
        {
            name: 'Paquetigos',
            id: '12',
            icon: ''
        },
        {
            name: 'Paqueavantel',
            id: '17',
            icon: ''
        },
        {
            name: 'Paquevirgin',
            id: '15',
            icon: ''
        },
        {
            name: 'Paqueetb',
            id: '18',
            icon: ''
        },

    ],
    "bet_companies_Recargas": [
        {
            name: 'WPLAY',
            id: '26',
            icon: WPLAY,
        },
        {
            name: 'Rush Bet',
            id: '63',
            icon: Rush,
        },
        {
            name: 'Rivalo',
            id: '47',
            icon: Rivalo,
        },
        {
            name: 'Ya Juego',
            id: '47', //need update
            icon: Ya,
        },

        {
            name: 'Aqui Juego',
            id: '48',
            icon: Aqui,
        },
        {
            name: 'Sportium',
            id: '53',
            icon: Sportium,
        },
        {
            name: 'Mi Jugada',
            id: '46',
            icon: Jugada,
        },
    ],
    "bet_companies_Pago_premio": [
        {
            name: 'WPLAY',
            id: '26',
            icon: WPLAY,
        },
        {
            name: 'Ya Juego',
            id: '47', //need update
            icon: Ya,
        },
    ],
    "Digitales": [
        {
            name: 'Netflix',
            id: '56',
            icon: Netflix,
        },
        {
            name: 'Play Station',
            id: '39',
            icon: PlayStation,
        },
        {
            name: 'Spotify',
            id: '41',
            icon: Spotify,
        },
        {
            name: 'Xbox',
            id: '36',
            icon: Xbox,
        },
        {
            name: 'Office',
            id: '38',
            icon: Office,
        },
        {
            name: 'Minecraft',
            id: '40',
            icon: Minecraft,
        },
        {
            name: 'IMVU',
            id: '37',
            icon: IMVU,
        },
        {
            name: 'Rixty',
            id: '42',
            icon: Rixty,
        },

    ],
    "Deposito": [
        {
            name: "Nequi",
            id: '58',
            icon: Rixty,
        },
        {
            name: "Movii",
            id: '68',
            icon: component345,
        },
        {
            name: "Daviplata",
            id: '78',
            icon: component357,
        },
        
    ],
    "Retiros": [
        {
            name: "Nequi",
            id: '58',
            icon: Rixty,
        },
        {
            name: "Movii",
            id: '68',
            icon: component345,
        },
        {
            name: "Daviplata",
            id: '78',
            icon: component357,
        },
    ],
    "certificados": [
        {
            name: "Runt",
            id: '00', //need to update
            icon: runt,
            title: "Certificado"
        },
        {
            name: "SNR",
            id: '35',
            icon: snr,
            title: "SOAT"
        },

    ],
    "Venezuela": [
        {
            name: "Movilnet",
            id: '66',
            icon: snr //need to update
        },
        {
            name: "Movistar",
            id: '67',
            icon: snr
        },
        {
            name: "Movistar TV",
            id: '70',
            icon: snr
        }
    ],
    "Ecuador": [
        {
            name: "Movilnet",
            id: '66',
            icon: snr //need to update
        },
        {
            name: "Movistar",
            id: '67',
            icon: snr
        },
        {
            name: "Movistar TV",
            id: '70',
            icon: snr
        }
    ],
    "Directv": [
        {
            name: "Directv",
            id: "3",

        },
        {
            name: "Kit Directv",
            id: "60",

        }
    ],
    "Facturas": [
        {
            name: "EPM",
            icon: epm,
            id: "43"
        },
        {
            name: "ESSA",
            icon: essa,
            id: "62"
        },
        {
            name: "Facturas",
            icon: component1441,
            id: "473"
        },
        {
            name: "Servicios",
            icon: component1263,
            id: "562"
        },
        {
            name: "Gas",
            icon: component1253,
            id: "439"
        },
        {
            name: "Recaudos",
            icon: component1273,
            id: "622"
        },
    ]
}
