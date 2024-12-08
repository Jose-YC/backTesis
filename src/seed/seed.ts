
import { OrderStatus, ClientType, DocumentType, PaymentMethod  } from '@prisma/client';
import bcryptjs from 'bcryptjs';


export const initialData = {
    rol: [
        {name:'user'},
        {name:'admin'},
        {name:'gerente'},
        {name:'vendedor'},
        {name:'asistente almacen'},
        {name:'jefe almacen'},
        {name:'jefe ventas'},
    ],

    clients: [
        {
            num_doc: '00000000',
            type: ClientType.GENERAL,
            name: 'GENERAL',
        },
        {
            num_doc: '12345678',
            type: ClientType.NATURAL,
            name: 'Juan Perez',
            email: 'juanperez235@example.com',
            phone: '123456789',
            address: 'Calle Falsa 123'
        },
        {
          num_doc: '87654321',
          type: ClientType.NATURAL,
          name: 'Carlos Rodriguez',
          email: 'carlosrodriguez325@example.com',
          phone: '456789123',
          address: 'Boulevard de los Sueños Rotos 789'
        },
        {
          num_doc: '98765432',
          type: ClientType.NATURAL,
          name: 'Pedro Sanchez',
          email: 'pedrosanchez57@example.com',
          phone: '654123987',
          address: 'Calle del Sol 654'
        },
        {
          num_doc: '23456789',
          type: ClientType.NATURAL,
          name: 'Maria Lopez',
          email: 'marialopez13@example.com',
          phone: '987654321',
          address: 'Av. Libertador 456'
        },
        {
          num_doc: '34567890',
          type: ClientType.NATURAL,
          name: 'Luis Fernandez',
          email: 'luisfernandez35@example.com',
          phone: '321987654',
          address: 'Calle de la Paz 321'
        },
        {
          num_doc: '45678901',
          type: ClientType.NATURAL,
          name: 'Ana Torres',
          email: 'anatorres23@example.com',
          phone: '654321987',
          address: 'Plaza de la Libertad 654'
        },
        {
          num_doc: '56789012',
          type: ClientType.NATURAL,
          name: 'Jorge Ramirez',
          email: 'jorgeramirez45@example.com',
          phone: '987123456',
          address: 'Av. San Martin 987'
        },
        {
          num_doc: '67890123',
          type: ClientType.NATURAL,
          name: 'Sofia Castro',
          email: 'sofiacastro23@example.com',
          phone: '123456789',
          address: 'Calle de la Esperanza 123'
        },
        {
          num_doc: '78901234',
          type: ClientType.NATURAL,
          name: 'Diego Silva',
          email: 'diegosilva02@example.com',
          phone: '456789321',
          address: 'Boulevard de los Sueños 456'
        },
        {
          num_doc: '89012345',
          type: ClientType.NATURAL,
          name: 'Clara Medina',
          email: 'clara_medina@example.com',
          phone: '321654987',
          address: 'Calle del Sol 321'
        },
        {
          num_doc: '20123456789',
          type: ClientType.JURIDICO,
          name: 'Inversiones Gomez S.A.C.',
          email: 'maria_gomez@example.com',
          phone: '987654321',
          address: 'Avenida Siempre Viva 456'
        },
        {
          num_doc: '20456789123',
          type: ClientType.JURIDICO,
          name: 'Comercial Laura S.A.C.',
          email: 'laura_martinez@example.com',
          phone: '321987654',
          address: 'Plaza de la Paz 321'
        },
        {
          num_doc: '20123456790',
          type: ClientType.JURIDICO,
          name: 'Distribuciones Carlos S.A.C.',
          email: 'carlos_rodriguez02@example.com',
          phone: '456789123',
          address: 'Boulevard de los Sueños Rotos 789'
        },
        {
          num_doc: '20456789124',
          type: ClientType.JURIDICO,
          name: 'Servicios Pedro S.A.C.',
          email: 'pedro_sanchez02@example.com',
          phone: '654123987',
          address: 'Calle del Sol 654'
        },
        {
          num_doc: '20123456791',
          type: ClientType.JURIDICO,
          name: 'Construcciones Juan S.A.C.',
          email: 'juan_perez@example.com',
          phone: '123456789',
          address: 'Calle Falsa 123'
        },
        {
          num_doc: '20456789125',
          type: ClientType.JURIDICO,
          name: 'Tecnologia Sofia S.A.C.',
          email: 'sofia_castro@example.com',
          phone: '123456789',
          address: 'Calle de la Esperanza 123'
        },
        {
          num_doc: '20123456792',
          type: ClientType.JURIDICO,
          name: 'Alimentos Ana S.A.C.',
          email: 'anatorres02@example.com',
          phone: '654321987',
          address: 'Plaza de la Libertad 654'
        },
        {
          num_doc: '20456789126',
          type: ClientType.JURIDICO,
          name: 'Ropa Clara S.A.C.',
          email: 'clara_medina02@example.com',
          phone: '321654987',
          address: 'Calle del Sol 321'
        },
        {
          num_doc: '20123456793',
          type: ClientType.JURIDICO,
          name: 'Transporte Diego S.A.C.',
          email: 'diego_silva@example.com',
          phone: '456789321',
          address: 'Boulevard de los Sueños 456'
        },
        {
          num_doc: '20456789127',
          type: ClientType.JURIDICO,
          name: 'Salud Luis S.A.C.',
          email: 'luis_fernandez@example.com',
          phone: '321987654',
          address: 'Calle de la Paz 321'
        }
      ],

    users: [
        {
            email: 'juanjoseyamunaquecastillo02@gmail.com',
            name: 'Juan Jose',
            lastname: 'Yamunaque Castillo Juan Jose',
            phone: '999999999',
            password: bcryptjs.hashSync('123456'),
        },
        {
            email: 'bgladeche0@google.pl',
            name: 'Barr',
            lastname: 'Gladeche',
            phone: '926 489 131',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'sbickers1@va.gov',
            name: 'Sebastiano',
            lastname: 'Bickers',
            phone: '926 805 323',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'wfilipiak2@prnewswire.com',
            name: 'Willy',
            lastname: 'Filipiak',
            phone: '926 542 489',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'jbernet3@imgur.com',
            name: 'Juliann',
            lastname: 'Bernet',
            phone: '926 445 284',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'cpowter4@wiley.com',
            name: 'Constancy',
            lastname: 'Powter',
            phone: '926 671 297',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'sjukes5@utexas.edu',
            name: 'Sheri',
            lastname: 'Jukes',
            phone: '926 806 971',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'sdiggons6@trellian.com',
            name: 'Sawyere',
            lastname: 'Diggons',
            phone: '926 624 550',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'dmilligan7@slashdot.org',
            name: 'Darn',
            lastname: 'Milligan',
            phone: '926 320 538',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'bstanlock8@xing.com',
            name: 'Barney',
            lastname: 'Stanlock',
            phone: '926 700 976',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'aguyet9@businessweek.com',
            name: 'Abigail',
            lastname: 'Guyet',
            phone: '926 359 659',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'ddonwella@bbb.org',
            name: 'Dall',
            lastname: 'Donwell',
            phone: '926 717 431',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'bshorrockb@wp.com',
            name: 'Bev',
            lastname: 'Shorrock',
            phone: '924 367 889',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'mdockreayc@ovh.net',
            name: 'Monro',
            lastname: 'Dockreay',
            phone: '926 501 811',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'eblakewayd@miibeian.gov.cn',
            name: 'Evan',
            lastname: 'Blakeway',
            phone: '926 590 251',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'bplomere@huffingtonpost.com',
            name: 'Barnabas',
            lastname: 'Plomer',
            phone: '926 193 498',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'imcclaughlinf@behance.net',
            name: 'Irving',
            lastname: 'McClaughlin',
            phone: '926 377 578',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'egianolog@bravesites.com',
            name: 'Elva',
            lastname: 'Gianolo',
            phone: '979 905 887',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'deverleighh@fastcompany.com',
            name: 'Dorian',
            lastname: 'Everleigh',
            phone: '926 921 892',
            password: bcryptjs.hashSync('123456'),
          }, {
            email: 'wgleadhalli@mozilla.org',
            name: 'Waldo',
            lastname: 'Gleadhall',
            phone: '970 290 057',
            password: bcryptjs.hashSync('123456'),
          }, 
          {
            email: 'mwealdj@samsung.com',
            name: 'Mace',
            lastname: 'Weald',
            phone: '926 234 631',
            password: bcryptjs.hashSync('123456'),
          }
      ],

      category: [
        {
          name: 'Cosméticos',
          description: 'Productos para realzar la belleza',
          parent_id: null
        },
        {
          name: 'Cuidado de la Piel',
          description: 'Productos para mantener la salud de la piel',
          parent_id: null
        },
        {
          name: 'Maquillaje',
          description: 'Productos cosméticos para el realce facial',
          parent_id: null
        },
        {
          name: 'Perfumes',
          description: 'Perfumes y productos aromatizantes',
          parent_id: null
        },
        {
          name: 'Cuidado del Cabello',
          description: 'Productos para mantener la salud del cabello',
          parent_id: null
        },
        {
          name: 'Ropa',
          description: 'Prendas de vestir',
          parent_id: null
        },
        {
          name: 'Ropa de Hombre',
          description: 'Prendas de vestir para hombres',
          parent_id: null
        },
        {
          name: 'Ropa de Mujer',
          description: 'Prendas de vestir para mujeres',
          parent_id: null
        },
        {
            name: 'Ropa de Niño',
            description: 'Prendas de vestir para mujeres',
            parent_id: null
        },
        {
            name: 'Ropa Unisex',
            description: 'Prendas de vestir para mujeres',
            parent_id: null
        },
        {
          name: 'Electrónica',
          description: 'Dispositivos y gadgets',
          parent_id: null
        },
        {
          name: 'Computadoras',
          description: 'Computadoras personales y accesorios',
          parent_id: null
        },
        {
          name: 'Laptops',
          description: 'Computadoras portátiles',
          parent_id: null
        },
    ],

    measures: [
        {
          name: 'Unidad',
          abbrev: 'u'
        },
        {
          name: 'Talla S',
          abbrev: 's'
        },
        {
          name: 'Talla M',
          abbrev: 'm'
        },
        {
          name: 'Talla L',
          abbrev: 'l'
        },
        {
          name: 'Talla XL',
          abbrev: 'xl'
        },
        {
          name: 'Talla XXL',
          abbrev: 'xxl'
        },
        {
          name: 'Talla XXXL',
          abbrev: 'xxxl'
        },
    ],

    suplier: [
        {
          repre: 'Proveedor Esika 1',
          ruc: '12345678901',
          email: 'esika1@example.com',
          address: 'Av. Esika 123',
          phone: '987654321',
        },
        {
          repre: 'Proveedor Esika 2',
          ruc: '12345678902',
          email: 'esika2@example.com',
          address: 'Av. Esika 456',
          phone: '987654322',
        },
        {
          repre: 'Proveedor Avon 1',
          ruc: '12345678903',
          email: 'avon1@example.com',
          address: 'Av. Avon 123',
          phone: '987654323',
        },
        {
          repre: 'Proveedor Avon 2',
          ruc: '12345678904',
          email: 'avon2@example.com',
          address: 'Av. Avon 456',
          phone: '987654324',
        },
        {
          repre: 'Proveedor Natura 1',
          ruc: '12345678905',
          email: 'natura1@example.com',
          address: 'Av. Natura 123',
          phone: '987654325',
        },
        {
          repre: 'Proveedor Natura 2',
          ruc: '12345678906',
          email: 'natura2@example.com',
          address: 'Av. Natura 456',
          phone: '987654326',
        },
        {
          repre: 'Proveedor Ropa 1',
          ruc: '12345678907',
          email: 'ropa1@example.com',
          address: 'Av. Ropa 123',
          phone: '987654327',
        },
        {
          repre: 'Proveedor Ropa 2',
          ruc: '12345678908',
          email: 'ropa2@example.com',
          address: 'Av. Ropa 456',
          phone: '987654328',
        },
        {
          repre: 'Proveedor Electro 1',
          ruc: '12345678909',
          email: 'electro1@example.com',
          address: 'Av. Electro 123',
          phone: '987654329',
        },
        {
          repre: 'Proveedor Electro 2',
          ruc: '12345678910',
          email: 'electro2@example.com',
          address: 'Av. Electro 456',
          phone: '987654330',
        }
      ],

        products: [
            {
            name: 'Men’s Chill Crew Neck Sweatshirt',
            description: 'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
            base_priece: 21,
            ProductImage : [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263700/Product/llb7uyqtndr3e2rxtx76.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263714/Product/yc4htnrcviufaoj7vwpt.webp',
            ],
            ItemsMeasures: [
                    {
                        measures_id: 2,
                        min_stock: 6,
                        stock: 20,
                        price: 21,
                    },
                    {
                        measures_id: 3,
                        min_stock: 10,
                        stock: 20,
                        price: 25,
                    }
                ],
                ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            
            },
            {
            name: 'Mens Quilted Shirt Jacket',
            description: 'The Mens Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.',
            base_priece: 21,
            ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263748/Product/jjuz3n3bjkqmgasvouj7.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263749/Product/hla8isjpi9tavyrfjpr5.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            },
        
            {
            name: 'Mens Raven Lightweight Zip Up Bomber Jacket',
            description: 'Introducing the Tesla Raven Collection. The Mens Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.',
            base_priece: 21,
            ProductImage: [
            'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263738/Product/jyi1w1gsppbrzmboa9xk.webp',
            'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263739/Product/luei5iyifyxqmfhpy0cx.webp'
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            },
        
            {
            name: 'Mens Turbine Long Sleeve Tee',
            description: 'Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Mens Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.',
            base_priece: 21,
            ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263700/Product/llb7uyqtndr3e2rxtx76.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263740/Product/kuiihbl7t2nvi14gjdgt.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            },
            {
            description: 'Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Mens Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263752/Product/n1lmqo0i9xk6z3alix9w.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263752/Product/ctr8nyq71k7rlngj5cow.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Turbine Short Sleeve Tee',
            },
            {
            description: 'Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
            base_priece: 21,
            ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263853/Product/wgd5b59xyuipcj8dfoet.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263866/Product/vqviyzx83r5a5rpbigce.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Cybertruck Owl Tee',
            },
            {
            description: 'Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above Solar Roof on the back. Made from 100% Peruvian cotton.',
            base_priece: 21,
            ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263894/Product/rbsqiazqwdwhhvjwuove.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264107/Product/ujnlwqqgvatjgpcwyz0t.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Solar Roof Tee',
            },
            {
            description: 'Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above Solar Roof on the back. Made from 100% Peruvian cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264117/Product/yiooy3ltletozrbp5u3z.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264117/Product/strqzfpjljzksejezoyz.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Let the Sun Shine Tee',
            },
            {
            description: 'Designed for fit, comfort and style, the Mens 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264073/Product/tm3q11toscp518fx39ul.jpg',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264072/Product/dnfihljriypjybjho1c3.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens 3D Large Wordmark Tee',
            },
            {
            description: 'Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263852/Product/igcs2xemqylgembzsxi3.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263852/Product/gywbnux1jb3n8eegdzos.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens 3D T Logo Tee',
            },
            {
            description: 'Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263851/Product/fgq6fncpu5g6rvlaflqq.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264050/Product/dtymaoj3bstfvh6hwl49.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Men’s 3D Small Wordmark Tee',
            },
            {
            description: 'Designed to celebrate Teslas incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, its the next best thing to riding shotgun at the Nürburgring.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264101/Product/qrd2ny5jbvyoplwnowi7.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264101/Product/kd7qvzlswc715c2ryebh.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Men’s 3D Small Wordmark Tee',
            },
            {
            description: 'Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase Pure Energy under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264078/Product/q6kka9o7pnegbxragknz.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264079/Product/nkrfdsptvsd13ma4wgz2.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Powerwall Tee',
            },
            {
            description: 'Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264117/Product/aiigtnc5yldjo0q2osrg.jpg',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264117/Product/ackiq5tcoduwnxzliplh.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Battery Day Tee',
            },
            {
            description: 'Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263880/Product/kmqvgckyssffs0gixj5b.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263866/Product/vqviyzx83r5a5rpbigce.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Men’s Cybertruck Bulletproof Tee',
            },
            {
            description: 'Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263851/Product/h0adhlgjm3m4k2egx4bv.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263851/Product/w37vnfyq6juvkfhyib0u.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Haha Yes Tee',
            },
            {
            description: 'Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264069/Product/xljldfcd6tlbrvucngdn.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264069/Product/ccvufj6b2bi08pgrxoo1.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens S3XY Tee',
            },
            {
            description: 'Designed for fit, comfort and style, the Mens 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264074/Product/gxa9erjqm42do9h0omyj.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264074/Product/r6hk1rqh4whdxcduwgc7.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens 3D Wordmark Long Sleeve Tee',
            },
            {
            description: 'Designed for fit, comfort and style, the Mens 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264074/Product/gxa9erjqm42do9h0omyj.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264054/Product/dtwogngjn2ovwn4ua3km.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens 3D T Logo Long Sleeve Tee',
            },
            {
            description: 'Introducing the Tesla Raven Collection. The Mens Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263736/Product/lxmorhvzpoqfpevkt7pa.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263737/Product/aw6g73pdseboohtaaqmr.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Raven Lightweight Hoodie',
            },
            {
            description: 'Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263676/Product/odliyhupek6li9wgujjd.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263677/Product/duvatzz0kousm1qlh1p4.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 10},
                ],
            name: 'Chill Pullover Hoodie',
            },
            {
            description: 'Introducing the Tesla Chill Collection. The Mens Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263751/Product/filzmbccktm7ia2hwdl8.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263758/Product/bcdktq3sfhgofods3lfl.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Chill Full Zip Hoodie',
            },
            {
            description: 'Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263677/Product/ph2bonzzz8qmofjcbo2s.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263677/Product/ahuptbmfk7vlrevcwcpg.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Chill Quarter Zip Pullover - Gray',
            },
            {
            description: 'Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263686/Product/b7agqctlvv4jgnwykw9l.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263677/Product/k13nuy7har0co0j0rspt.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 7},
                ],
            name: 'Mens Chill Quarter Zip Pullover - White',
            },
            {
            description: 'The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264052/Product/dxep2xkszesqvwvtf3z0.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264057/Product/jhrriql0mcboocd0epbf.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 10},
                ],
            name: '3D Large Wordmark Pullover Hoodie',
            },
            {
            description: 'As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263908/Product/zzjis1hh5035jdpmrusw.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264054/Product/iybg680svrjf5ubxddjf.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 10},
                ],
            name: 'Cybertruck Graffiti Hoodie',
            },
            {
            description: 'The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264110/Product/x70gfa2t39hfwitnqxdw.jpg',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264110/Product/gibilixqk1unjtxgabnm.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 10},
                ],
            name: 'Relaxed T Logo Hat',
            },
            {
            description: 'The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263750/Product/orefl6d5d5u4e3octxko.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263748/Product/dptisj2wcr8jkin6wn08.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 10},
                ],
            name: 'Thermal Cuffed Beanie',
            },
            {
            description: 'The Womens Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263751/Product/v3athhw0lfncoiklzmg2.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263752/Product/dmfu4b2s7nruw1lugsdt.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Cropped Puffer Jacket',
            },
            {
            description: 'Introducing the Tesla Chill Collection. The Womens Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263735/Product/q3mk2sdadffgyb70yolh.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263739/Product/fatvqmnacujxksmrvbqw.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Chill Half Zip Cropped Hoodie',
            },
            {
            description: 'Introducing the Tesla Raven Collection. The Womens Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263738/Product/gbe6mo6y7vmmcpzag4lg.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263739/Product/fatvqmnacujxksmrvbqw.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Raven Slouchy Crew Sweatshirt',
            },
            {
            description: 'Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Womens Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%',
              base_priece: 21,
        ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263741/Product/uujdp3ia4gnfcoqodlpv.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263743/Product/c4wx7vxfenacyopc9kww.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Turbine Cropped Long Sleeve Tee',
            },
            {
            description: 'ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Womens Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263753/Product/znxwrhgtazwzj1fsammg.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263754/Product/ixcyltsobtwjiymeohvn.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Turbine Cropped Short Sleeve Tee',
            },
            {
            description: 'Designed for style and comfort, the ultrasoft Womens T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264075/Product/tq7kjsgbsvllbrnhnwxj.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264075/Product/zw7eya2nobods3nsdyzc.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens T Logo Short Sleeve Scoop Neck Tee',
            },
            {
            description: 'Designed for style and comfort, the ultrasoft Womens T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264075/Product/tq7kjsgbsvllbrnhnwxj.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264076/Product/pwrhtbg9bl6a1rns46sz.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens T Logo Long Sleeve Scoop Neck Tee',
            },
            {
            description: 'Designed for style and comfort, the Womens Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264077/Product/u6aivlhtc183t2plepkm.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264077/Product/bkwy1icdaecfjvvpj3ez.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Small Wordmark Short Sleeve V-Neck Tee',
            },
            {
            description: 'Designed for style and comfort, the Womens Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264076/Product/hoqpbv6biewh6orams3t.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264077/Product/euuk2urdfpv5apwbm0ti.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Large Wordmark Short Sleeve Crew Neck Tee',
            },
            {
            description: 'Designed to celebrate Teslas incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, its the next best thing to riding shotgun at the Nürburgring.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264101/Product/xfprwsrtdcmzpjkrjbl1.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264101/Product/jecs40gjzpkty8hhgr3p.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Plaid Mode Tee',
            },
            {
            description: 'Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase Pure Energy under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264080/Product/vnytgycflllbjd8znek3.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264080/Product/ftdlmpaucvmafhjvxgdg.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Women’s Powerwall Tee',
            },
            {
            description: 'Fully customized and uniquely styled, the Womens Corp Jacket features a silicone-printed T logo on the left chest and prominent Tesla wordmark across the back.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263789/Product/ebmgehw2injf32d05g7p.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263774/Product/ty135tacwouyitfcdrhu.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Corp Jacket',
            },
            {
            description: 'Introducing the Tesla Raven Collection. The Womens Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263739/Product/klwzjfkssi5s2ikc6lot.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263739/Product/ceybvr7z5mat9241hw8d.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 8},
                ],
            name: 'Womens Raven Joggers',
            },
            {
            description: 'Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263761/Product/pqzwh08eqdhr1krqeqvo.jpg',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263763/Product/pt5kwphrs0rz5rsardkg.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids Cybertruck Long Sleeve Tee',
            },
            {
            description: 'The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264057/Product/rqrjjesnkwcvsyvoi2jx.jpg',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264069/Product/pdymeztwtv4jsqhxiiyh.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids Scribble T Logo Tee',
            },
            {
            description: 'The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264066/Product/b0bjcdsv1eo8uprddlvo.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264062/Product/awhd8dnzd6zqyrjq0bwa.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids Cybertruck Tee',
            },
            {
            description: 'The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark thats perfect for any speed racer.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264062/Product/soaiq33scnevuakupzdi.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264063/Product/ptjdx7ewwk92wm07yqys.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids Racing Stripe Tee',
            },
            {
            description: 'Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263853/Product/xv7mwsnrxfncspkh6ihf.jpg',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263854/Product/mgg78azk7cqpicofybjs.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids 3D T Logo Tee',
            },
            {
            description: 'The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264081/Product/k9k6qosaivlxh8pyf0td.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264096/Product/vuqqh4bztg1byx2hhaqw.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids Checkered Tee',
            },
            {
            description: 'For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264069/Product/pdymeztwtv4jsqhxiiyh.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264096/Product/gywvsunsm0muix43hkpc.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Made on Earth by Humans Onesie',
            },
            {
            description: 'The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264069/Product/di9w4nlwjov32hor9ok6.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264069/Product/pdymeztwtv4jsqhxiiyh.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Scribble T Logo Onesie',
            },
            {
            description: 'Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264100/Product/qnowtz4uq8f0n8jlqmbk.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264102/Product/h1u5f5wnwxnmwkamm2cd.jpg',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Zero Emissions (Almost) Onesie',
            },
            {
            description: 'Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731263761/Product/m7b4ydtmtydqiulq3kmt.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids Cyberquad Bomber Jacket',
            },
            {
            description: 'Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.',
              base_priece: 21,
ProductImage: [
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264100/Product/bfzmkovkp7j6ti38gtf1.webp',
                'https://res.cloudinary.com/dbe4rxkkn/image/upload/v1731264101/Product/ziazyyq6nqalael8ozqo.webp',
            ],
            ItemsMeasures: [
                {
                    measures_id: 2,
                    min_stock: 6,
                    stock: 20,
                    price: 21,
                },
                {
                    measures_id: 3,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 4,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                },
                {
                    measures_id: 5,
                    min_stock: 10,
                    stock: 20,
                    price: 25,
                }
            ],
             ItemsCategory: [
                    {category_id: 6},
                    {category_id: 9},
                ],
            name: 'Kids Corp Jacket',
            },
        ],

        orden: [
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.PENDING,
                provedor_id: 7,
                itemsOrden: [
                        {
                            quantity: 1,
                            price: 21,
                            product_id: 1,
                            mesures_id: 2,
                        },
                        {
                            quantity: 1,
                            price: 25,
                            product_id: 1,
                            mesures_id: 3,
                        }
                    ],
            },
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.PENDING,
                provedor_id: 7,
                itemsOrden: [
                        {
                            quantity: 1,
                            price: 21,
                            product_id: 2,
                            mesures_id: 2,
                        },
                        {
                            quantity: 1,
                            price: 25,
                            product_id: 2,
                            mesures_id: 3,
                        }
                    ],
            },
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.PENDING,
                provedor_id: 7,
                itemsOrden: [
                        {
                            quantity: 1,
                            price: 21,
                            product_id: 3,
                            mesures_id: 2,
                        },
                        {
                            quantity: 1,
                            price: 25,
                            product_id: 4,
                            mesures_id: 3,
                        }
                    ],
            },
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.DELIVERED,
                provedor_id: 7,
                itemsOrden: [
                        {
                            quantity: 1,
                            price: 21,
                            product_id: 5,
                            mesures_id: 2,
                        },
                        {
                            quantity: 1,
                            price: 25,
                            product_id: 6,
                            mesures_id: 3,
                        }
                    ],
            },
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.DELIVERED,
                provedor_id: 7,
                itemsOrden: [
                        {
                            quantity: 1,
                            price: 21,
                            product_id: 7,
                            mesures_id: 2,
                        },
                        {
                            quantity: 1,
                            price: 25,
                            product_id: 7,
                            mesures_id: 3,
                        }
                    ],
            },
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.CANCELLED,
                provedor_id: 7,
                itemsOrden: [
                        {
                            quantity: 1,
                            price: 21,
                            product_id: 8,
                            mesures_id: 2,
                        },
                        {
                            quantity: 1,
                            price: 25,
                            product_id: 3,
                            mesures_id: 3,
                        }
                    ],
            },
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.CANCELLED,
                provedor_id: 7,
                itemsOrden: [
                        {
                            quantity: 1,
                            price: 21,
                            product_id: 1,
                            mesures_id: 2,
                        },
                        {
                            quantity: 1,
                            price: 25,
                            product_id: 5,
                            mesures_id: 3,
                        }
                    ],
            },
            {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.DELIVERED,
                provedor_id: 7,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 5,
                    mesures_id: 2
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 6,
                    mesures_id: 3
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.PENDING,
                provedor_id: 3,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 12,
                    mesures_id: 5
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 8,
                    mesures_id: 6
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.CANCELLED,
                provedor_id: 1,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 20,
                    mesures_id: 3
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 15,
                    mesures_id: 7
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.DELIVERED,
                provedor_id: 9,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 2,
                    mesures_id: 4
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 1,
                    mesures_id: 2
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.PENDING,
                provedor_id: 2,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 10,
                    mesures_id: 6
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 18,
                    mesures_id: 5
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.CANCELLED,
                provedor_id: 5,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 13,
                    mesures_id: 3
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 17,
                    mesures_id: 2
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.DELIVERED,
                provedor_id: 8,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 4,
                    mesures_id: 2
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 14,
                    mesures_id: 4
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.PENDING,
                provedor_id: 6,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 3,
                    mesures_id: 5
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 19,
                    mesures_id: 6
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.CANCELLED,
                provedor_id: 4,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 11,
                    mesures_id: 3
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 9,
                    mesures_id: 7
                  }
                ]
              },
              {
                total: 46,
                itemsInOrder: 2,
                state: OrderStatus.DELIVERED,
                provedor_id: 10,
                itemsOrden: [
                  {
                    quantity: 1,
                    price: 21,
                    product_id: 16,
                    mesures_id: 4
                  },
                  {
                    quantity: 1,
                    price: 25,
                    product_id: 12,
                    mesures_id: 2
                  }
                ]
              }

        ],

        ventas: [
            {
              client_id: '20456789127',
              type: DocumentType.FACTURA,
              type_payment: PaymentMethod.DEBITO,
              itemsVenta: [
                {
                  id: 105,
                  quantity: 6,
                  price: 30,
                  income: 15,
                  product_id: 15,
                  measures_id: 3
                },
                {
                  id: 200,
                  quantity: 2,
                  price: 45,
                  income: 10,
                  product_id: 18,
                  measures_id: 5
                }
              ]
            },
            {
              client_id: '12345678',
              type: DocumentType.BOLETA,
              type_payment: PaymentMethod.EFECTIVO,
              itemsVenta: [
                {
                  id: 50,
                  quantity: 4,
                  price: 20,
                  income: 8,
                  product_id: 10,
                  measures_id: 7
                }
              ]
            },
            {
              client_id: '56789012',
              type: DocumentType.BOLETA,
              type_payment: PaymentMethod.TRANSFERENCIA,
              itemsVenta: [
                {
                  id: 205,
                  quantity: 1,
                  price: 60,
                  income: 5,
                  product_id: 2,
                  measures_id: 6
                },
                {
                  id: 120,
                  quantity: 3,
                  price: 25,
                  income: 10,
                  product_id: 7,
                  measures_id: 4
                }
              ]
            },
            {
              type: DocumentType.TICKET,
              type_payment: PaymentMethod.CREDITO,
              itemsVenta: [
                {
                  id: 199,
                  quantity: 5,
                  price: 15,
                  income: 5,
                  product_id: 12,
                  measures_id: 3
                }
              ]
            },
            {
              client_id: '20123456792',
              type: DocumentType.FACTURA,
              type_payment: PaymentMethod.CREDITO,
              itemsVenta: [
                {
                  id: 88,
                  quantity: 2,
                  price: 35,
                  income: 8,
                  product_id: 19,
                  measures_id: 5
                },
                {
                  id: 150,
                  quantity: 7,
                  price: 50,
                  income: 12,
                  product_id: 3,
                  measures_id: 2
                }
              ]
            },
            {
              client_id: '89012345',
              type: DocumentType.BOLETA,
              type_payment: PaymentMethod.DEBITO,
              itemsVenta: [
                {
                  id: 43,
                  quantity: 4,
                  price: 40,
                  income: 20,
                  product_id: 5,
                  measures_id: 4
                },
                {
                  id: 102,
                  quantity: 6,
                  price: 20,
                  income: 12,
                  product_id: 16,
                  measures_id: 1
                }
              ]
            },
            {
              client_id: '20456789124',
              type: DocumentType.FACTURA,
              type_payment: PaymentMethod.EFECTIVO,
              itemsVenta: [
                {
                  id: 15,
                  quantity: 3,
                  price: 25,
                  income: 7,
                  product_id: 8,
                  measures_id: 2
                }
              ]
            },
            {
              type: DocumentType.TICKET,
              type_payment: PaymentMethod.EFECTIVO,
              itemsVenta: [
                {
                  id: 35,
                  quantity: 2,
                  price: 18,
                  income: 3,
                  product_id: 11,
                  measures_id: 6
                },
                {
                  id: 198,
                  quantity: 1,
                  price: 70,
                  income: 5,
                  product_id: 4,
                  measures_id: 3
                }
              ]
            },
            {
              client_id: '87654321',
              type: DocumentType.BOLETA,
              type_payment: PaymentMethod.TRANSFERENCIA,
              itemsVenta: [
                {
                  id: 150,
                  quantity: 5,
                  price: 30,
                  income: 10,
                  product_id: 14,
                  measures_id: 7
                },
                {
                  id: 62,
                  quantity: 7,
                  price: 20,
                  income: 8,
                  product_id: 20,
                  measures_id: 5
                }
              ]
            },
            {
              client_id: '20456789125',
              type: DocumentType.FACTURA,
              type_payment: PaymentMethod.DEBITO,
              itemsVenta: [
                {
                  id: 17,
                  quantity: 4,
                  price: 25,
                  income: 12,
                  product_id: 6,
                  measures_id: 4
                }
              ]
            }
          ]
          

}