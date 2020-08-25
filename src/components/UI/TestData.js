import icon1 from '../../assets/Images/Group5155.png'
import icon2 from '../../assets/Images/Iconmetro-credit-card.png'
import icon3 from '../../assets/Images/Iconmetro-qrcode.png'
import icon4 from '../../assets/Images/Iconawesome-bitcoin.png'
import img1 from '../../assets/Images/004-mobile-shopping.png'
import img2 from '../../assets/Images/001-money.png'

import img3 from '../../assets/Images/003-mortgage.png'
import img4 from '../../assets/Images/002-insurance.png'
import img5 from '../../assets/Images/006-online-game-1.png'
import img6 from '../../assets/Images/meter.png'

import claroIcon from '../../assets/Images/claro3.png';
import avetalIcon from '../../assets/Images/avetal3.png'
import ExitoIcon from '../../assets/Images/Exito3.png'
import EtbIcon from '../../assets/Images/etb3.png'
import VirginIcon from '../../assets/Images/Virgin3.png'
import flashIcon from '../../assets/Images/flash3.png'
import MovistarIcon from '../../assets/Images/Movistar3.png'
import tigoIcon from '../../assets/Images/tigo3.png'


export const paymetData =[
    {
        name:"PSE",
        icon:icon1

    },
    {
        name:"Tarjeta",
        icon:icon2

    },
    {
        name:"QR code",
        icon:icon3

    },
    {
        name:"Bitcoin",
        icon:icon4

    },
    
]

export const productsData =[
    {
        name:"Recargas",
        icon:img1

    },
    {
        name:"Apuestas",
        icon:img2

    },
    {
        name:"Hogar",
        icon:img3

    },
    {
        name:"Seguros",
        icon:img4

    },
    {
        name:"Pines Digitales",
        icon:img5

    },{
        name:"Contador",
        icon:img6

    },
    {
        name:"Nequi",
        icon:img4

    },
    {
        name:"Goovi",
        icon:img5

    },{
        name:"SNR",
        icon:img6

    },
    
]

export const singelProduct =[
    {
        name:"PSE",
        icon:img1

    },
    
]

export const recargasType=[
    {
        name:'Movil',
        redux: 'Recargas'
    },
    {
        name:'Packages',
        redux:"Recargas_Packages"

    }
]

export const productsDiscription = {
    "Recargas":[
        {
            name:'Claro',
            id:'2',
            icon:claroIcon,
            package:'paqueclaro'
        },
        {
            name:'Tigo',
            id:'7',
            icon:tigoIcon,
            package:'paquetigo'
        },
        {
            name:'Movistar',
            id:'6',
            icon:MovistarIcon,
            package:'paquemovistar'

        },
        {
            name:'Flash',
            id:'16',
            icon:flashIcon,
            package:null

        },
        {
            name:'Virgin',
            id:'10',
            icon:VirginIcon,
            package:'paquevirgin'
        },
        {
            name:'ETP',
            id:'4',
            icon:EtbIcon,
            package:'paqueetb'
        },
         
        {
            name:'Éxito',
            id:'5',
            icon:ExitoIcon,
            package:null
        },
        {
            name:'Avantel',
            id:'1',
            icon:avetalIcon,
            package:'paqueavantel'
        },
       
       
      
       
      

    ],
    "Recargas_Packages":[
        {
            name:'Paqueclaro',
            id:'13',
            icon:''
        },
        {
            name:'Paquemovistar',
            id:'19',
            icon:''
        },
        {
            name:'Paquetigos',
            id:'12',
            icon:''
        },
        {
            name:'Paqueavantel',
            id:'17',
            icon:''
        },
        {
            name:'Paquevirgin',
            id:'15',
            icon:''
        },
        {
            name:'Paqueetb',
            id:'18',
            icon:''
        },

    ]
}
