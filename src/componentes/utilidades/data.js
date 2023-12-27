
const productos = [
    {
        id:"asdq1" ,
        nombre:"Zapatillas Puma Slipstream Retro" ,
        categoria:"Puma",
        stock:15 ,
        precio:100000 ,
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwda281c52/products/PU389021-02/PU389021-02-1.JPG",
        descripcion: "Las Zapatillas Puma Slipstream Retro Unisex son ideales para sumar estilo a tu rutina diaria. Su capellada de cuero sintético aporta durabilidad y comodidad durante toda tu actividad, mientras que la suela de goma ofrece una tracción excelente sobre cualquier superficie. Su diseño clásico y atemporal las hace versátiles para combinar con cualquier outfit y para emplearlas en cualquier ocasión. Mantenete a la moda con un calzado de calidad."
    },
    {
        id:"asdq2" ,
        nombre:"Zapatillas Adidas Forum Low" ,
        categoria:"Adidas",
        stock:7 ,
        precio:130000,
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6a515447/products/ADHQ1494/ADHQ1494-1.JPG",
        descripcion:"Reavivá tu amor por los años 80, cuando el estilo deportivo pasó del día del partido a la cotidianidad. Las Zapatillas adidas Forum Low Hombre llegaron con una actualización moderna con combinaciones de colores frescos. La parte superior de cuero y la suela de goma añaden la comodidad extra que te merecés para que completes tu look urbano de la mejor manera."
    },
    {
        id:"asdq3" ,
        nombre:"Zapatillas Nike Air Max Excee" ,
        categoria:"Nike",
        stock:5 ,
        precio:115000,
        imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0da26251/products/NICD4165-118/NICD4165-118-1.JPG",
        descripcion: "Las Zapatillas Nike Air Max Excee Hombre son todo lo que necesitas para lucirte en cualquier ocasión. Ya sea para una salida casual o estar relajado en casa no vas a pasar desapercibido. Su parte superior de mesh, cuero y material sintético combinan transpirabilidad y durabilidad para que solo te concentres en lucir cómodo y a la moda vayas donde vayas. Además, la tecnología Air Max junto con la entresuela y las almohadillas de espuma te ofrecen máximo confort en cada paso que das, mientras que la suela de goma proporciona un agarre excepcional para que tus recorridos sean más cómodos y seguros. Si buscabas un calzado moderno y funcional, entonces estas zapatillas son para vos."
    },
    {
        id:"asdq4" ,
        nombre:"Zapatillas Jordan Air 1 Mid" ,
        categoria:"Nike",
        stock:9 ,
        precio:219000,
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1e69f84d/products/NIDV0427-100/NIDV0427-100-1.JPG",
        descripcion: "Las nuevas Zapatillas Jordan Air 1 Mid Se Mujer llegan a tu vida para elevar tu estilo y con una estética del básquet de los 90 que te encanta. Hecha con materiales resistentes y duraderos que te garantizan seguridad dentro y fuera de la cancha. Su increíble diseño de caña alta con un ajuste de cordones y luciendo el logotipo Wings icónico en el cuello mid que cambia a metálico, mejorando tu estilo y el del calzado. Además, sus perforaciones en la punta te dan mejor ventilación y transpirabilidad en los momentos de más tensión en el juego, mientras que la suela de goma te dará mejor tracción y reacción en cada salto. Usá este par en cada partido y en cada salida para lucir tu estilo favorito de Nike."
    },
    {
        id:"asdq5" ,
        nombre:"Zapatillas Puma Pro Classic" ,
        categoria:"Puma",
        stock:12 ,
        precio:140000,
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5240494a/products/PU_388258-02/PU_388258-02-1.JPG",
        descripcion: "Completá tu estilo único con las Zapatillas Puma Pro Classic Unisex. Un par que mantiene tu look actualizado gracias a su construcción en un cuero sintético brillante y duradero al que se suma una suela robusta de goma que no pasa desapercibida. Su cuello acolchado mantiene la comodidad desde que salís a la mañana hasta que volvés a casa. Los detalles en dorado combinan la elegancia de este calzado con el toque justo de modernidad."
    },
    {
        id:"asdq6" ,
        nombre:"Zapatillas adidas Grand Court Alpha" ,
        categoria:"Adidas",
        stock:3 ,
        precio:99000,
        imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw19d237a1/products/ADIF8081/ADIF8081-1.JPG",
        descripcion: "Dejá que el estilo atemporal de las Zapatillas adidas Grand Court Alpha Hombre te acompañe a donde vayas. Con un exterior sintético super resistente, este par es ideal para que lo uses diariamente sin preocuparte. Además, su suela de caucho y su mediasuela con tecnología Cloudfoam amortiguan cada uno de tus pasos para que realices tus actividades diarias en total confort. Usa estas increíbles zapatillas y asegurate de lucir el estilo retro de adidas siempre que salgas de tu casa."
    },
]


const obtenerProductos = new Promise( (resolve, reject) =>{
    //Simulamos retraso de red
    setTimeout(()=>{
        resolve(productos);
    }, 1500);
})

export default obtenerProductos;