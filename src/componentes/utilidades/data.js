
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
]


const obtenerProductos = new Promise( (resolve, reject) =>{
    //Simulamos retraso de red
    setTimeout(()=>{
        resolve(productos);
    }, 1500);
})

export default obtenerProductos;