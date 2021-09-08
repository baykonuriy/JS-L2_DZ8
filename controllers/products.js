
let products =
    [
        {
            product_name: "Lorem ipsum dolor",
            price: 100,
            id_product: 456,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img1.png'
        },
        {
            product_name: "Accusamus consectetur",
            price: 200,
            id_product: 455,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img2.png' 
        },
        {
            product_name: "Iure neque aliquid quia",
            price: 130,
            id_product: 454,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img3.png'
        },
        {
            product_name: "Laudantium obcaecati",
            price: 150,
            id_product: 453,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img4.png'
        },
        {
            product_name: "Obcaecat",
            price: 400,
            id_product: 452,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img5.png'
        },
        { 
            product_name: "Voluptates sit suscipit",
            price: 150,
            id_product: 451,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img6.png'
        },
        { 
            product_name: "Ipsum dolor sit amet",
            price: 160,
            id_product: 450,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img3.png'
        },
        { 
            product_name: "Perferendis fugiat",
            price: 160,
            id_product: 449,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img2.png'
        },
        { 
            product_name: "temporibus accusamus",
            price: 160,
            id_product: 448,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam facere aliquid quae expedita',
            image: 'img/products/img1.png'
        }
    ]

  export const getAll = (req, res) =>{
      res.status(200).json(products)
  }
  