export type Collection = 
  | 'colorful-creator' 
  | 'experimental-rebel' 
  | 'cosmopolitan-expert' 
  | 'pretty-posh'

export interface Product {
  id: string
  slug: string
  name: string
  collection: Collection
  tagline: string
  description: string
  material: string
  price: number
  images: string[]
  featured?: boolean
  new?: boolean
}

export const collections: Record<Collection, {
  name: string
  tagline: string
  description: string
  keywords: string[]
  gradientFrom: string
  gradientTo: string
}> = {
  'colorful-creator': {
    name: 'Colorful Creator',
    tagline: 'Bold, playful, unforgettable',
    description: 'Introducing the Colorful Creator range of lighting, bursting onto your screens and into your homes. The youthful and playful collection will have you ooo\'ng and rrr\'ing over which design you want for yourself. The colours pop and the classic Vietnamese materials are given a striking modern makeover. Be as bold as your lamp choice!',
    keywords: ['Contrasting Colour', 'Daring', 'Retro', 'Playful', 'Happy', 'Geometric Shape', 'Bold Pattern'],
    gradientFrom: '#FF7F32',
    gradientTo: '#FFB81C',
  },
  'experimental-rebel': {
    name: 'Experimental Rebel',
    tagline: 'Avant-garde statement pieces',
    description: 'A non-conformist statement is what you will receive if you choose to be an Experimental Rebel! These designs aren\'t for the faint of heart but for the daring and courageous souls. Blending sculpture with premium materials, your lamp will be sure to WOW all those who lay eyes on them.',
    keywords: ['Avant Garde', 'Outside of the Box', 'Attitude', 'Experimental Materials', 'Edgy', 'Alternative', 'Punk Pattern'],
    gradientFrom: '#87189D',
    gradientTo: '#F93822',
  },
  'cosmopolitan-expert': {
    name: 'Cosmopolitan Expert',
    tagline: 'Sustainable elegance',
    description: 'A family of lighting for those of you like us, who care about our planet. Cosmopolitan Expert\'s understand that the finer things in life are refined approaches to sustainable materials and design. Vietnam has an immense heritage of handicraft, that we have tastefully brought into the 21st century with these products.',
    keywords: ['Rustic Luxury', 'Chic', 'Eastern Influence', 'Eclectic', 'Curated', 'Environmentally Conscious', 'Muted Tones'],
    gradientFrom: '#AC7644',
    gradientTo: '#F3CFB3',
  },
  'pretty-posh': {
    name: 'Pretty & Posh',
    tagline: 'Timeless sophistication',
    description: 'There are some things that money can\'t buy and that is taste! For all those classy humans out there this range is for you. If like all things Pretty & Posh you\'ll know what we mean. Luxurious materials paired with elegant design makes for some simply stunning lamps.',
    keywords: ['Classic', 'Toned Down Colors', 'Traditional Materials', 'Polished Metal', 'Status', 'Modern'],
    gradientFrom: '#F5D0C4',
    gradientTo: '#F5CDF0',
  },
}

export const products: Product[] = [
  // COLORFUL CREATOR
  {
    id: 'flamingo-table-lamp',
    slug: 'flamingo-table-lamp',
    name: 'Flamingo Table Lamp',
    collection: 'colorful-creator',
    tagline: 'A fabulous terrazzo statement',
    description: 'We all love flamingos! So why not make a table lamp and a flamingo in one! This quirky design is a fabulous terrazzo statement inspired by our love of the bird.',
    material: 'Blush terrazzo',
    price: 189,
    images: ['/images/products/flamingo-table-lamp.jpg'],
    featured: true,
  },
  {
    id: 'cheese-table-lamp',
    slug: 'cheese-table-lamp',
    name: 'Cheese! Table Lamp',
    collection: 'colorful-creator',
    tagline: 'A smile on your face',
    description: 'Just hearing the name "Cheese" puts a smile on your face. This lamp is a combination of cheerful colors and interesting silhouettes. The original idea was taken from the movie Tom & Jerry, which is a movie loved by many Vietnamese children.',
    material: 'Ceramic',
    price: 159,
    images: ['/images/products/cheese-table-lamp.jpg'],
    featured: true,
  },
  {
    id: 'out-mood-lamp',
    slug: 'out-mood-lamp',
    name: 'Out Mood Lamp',
    collection: 'colorful-creator',
    tagline: 'Truly versatile',
    description: 'A fun terrazzo mood lamp, its small size makes it truly versatile! We can think of so many places that Out could look great in the home, be that your shelf, bedside, or coffee table. Buy Out with its friend In!',
    material: 'Terrazzo',
    price: 89,
    images: ['/images/products/out-mood-lamp.jpg'],
  },
  {
    id: 'in-mood-lamp',
    slug: 'in-mood-lamp',
    name: 'In Mood Lamp',
    collection: 'colorful-creator',
    tagline: 'Pair with Out',
    description: 'A fun terrazzo mood lamp, its small size makes it truly versatile! We can think of so many places that In could look great in the home, be that your shelf, bedside, or coffee table. Buy In with its friend Out!',
    material: 'Terrazzo',
    price: 89,
    images: ['/images/products/in-mood-lamp.jpg'],
  },
  {
    id: 'rainbow-mood-lamp',
    slug: 'rainbow-mood-lamp',
    name: 'Rainbow Mood Lamp',
    collection: 'colorful-creator',
    tagline: 'Joy in every color',
    description: 'Rainbow was designed to add a sense of joy to your home, what we all feel when we see a rainbow! This multi-colored ceramic mood lamp will brighten up any room it is added to.',
    material: 'Ceramic',
    price: 119,
    images: ['/images/products/rainbow-mood-lamp.jpg'],
  },
  {
    id: 'tilt-desk-lamp',
    slug: 'tilt-desk-lamp',
    name: 'Tilt Desk Lamp',
    collection: 'colorful-creator',
    tagline: 'Funky and functional',
    description: 'A funky desk lamp to brighten up the dreariest of days. The shiny metal upright is designed to follow the edge of the shade and base. The base and shade are in identical shape but contrasting materials: colourful spun metal shades and dazzling terrazzo, creating a contemporary look.',
    material: 'Colorful terrazzo base & metal shade',
    price: 229,
    images: ['/images/products/tilt-desk-lamp.jpg'],
    featured: true,
  },
  {
    id: 'tilt-floor-lamp',
    slug: 'tilt-floor-lamp',
    name: 'Tilt Floor Lamp',
    collection: 'colorful-creator',
    tagline: 'Statement task lighting',
    description: 'Like its desk lamp partner in crime, the Tilt floor lamp will add some functional task lighting in a funky way. Using contrasting materials: colourful spun metal shades and dazzling terrazzo, creating a contemporary look.',
    material: 'Colorful terrazzo base & metal shade',
    price: 389,
    images: ['/images/products/tilt-floor-lamp.jpg'],
  },
  {
    id: 'mai-pendant',
    slug: 'mai-pendant',
    name: 'Mai Pendant',
    collection: 'colorful-creator',
    tagline: 'Traditional with Saola flair',
    description: 'Mai has a look that we all know and love with added Saola flair, traditional Vietnamese bamboo weaving with a pop of colour!',
    material: 'Bamboo',
    price: 169,
    images: ['/images/products/mai-pendant.jpg'],
  },
  {
    id: 'wander-pendant',
    slug: 'wander-pendant',
    name: 'Wander Pendant',
    collection: 'colorful-creator',
    tagline: 'Take a walk on the winding road',
    description: 'Sometimes you like to take a walk on the winding road? So get a Wander light, the colorful matte glaze with curvaceous feminine shape, ensures you will have a nice partner on the amazing trip.',
    material: 'Ceramic',
    price: 199,
    images: ['/images/products/wander-pendant.jpg'],
  },

  // EXPERIMENTAL REBEL
  {
    id: 'block-table-lamp',
    slug: 'block-table-lamp',
    name: 'Block Table Lamp',
    collection: 'experimental-rebel',
    tagline: 'Fun and bold',
    description: 'Want something fun and bold? Block is inspired by our childhood toy – Lego – the iconic Block, will help to build a foundation in any statement interior. The base is made of ceramic, in as eye-popping glazes as the shape.',
    material: 'Ceramic',
    price: 179,
    images: ['/images/products/block-table-lamp.jpg'],
    featured: true,
  },
  {
    id: 'bunny-table-lamp',
    slug: 'bunny-table-lamp',
    name: 'Bunny Table Lamp',
    collection: 'experimental-rebel',
    tagline: 'Inspired by Jeff Koons',
    description: 'Bunny is inspired by an American artist Jeff Koons. It is made as if a little bunny has snuck into your home, hidden under the lampshade just around the corners. In striking metallic finish the Bunny lamp will surely capture the attention of whoever visits your home regardless of their age.',
    material: 'Resin',
    price: 249,
    images: ['/images/products/bunny-table-lamp.jpg'],
    featured: true,
    new: true,
  },
  {
    id: 'hot-dog-table-lamp',
    slug: 'hot-dog-table-lamp',
    name: 'Hot Dog Table Lamp',
    collection: 'experimental-rebel',
    tagline: 'For sausage dog lovers',
    description: 'Designed as a tribute to our lovable pet sausage dog whom we love and to all those other crazy Weiner dog lovers out there. Choose yours in matte black, mustard and ketchup glazes.',
    material: 'Ceramic',
    price: 199,
    images: ['/images/products/hot-dog-table-lamp.jpg'],
  },
  {
    id: 'dino-table-lamp',
    slug: 'dino-table-lamp',
    name: 'Dino Table Lamp',
    collection: 'experimental-rebel',
    tagline: 'Playful asymmetry',
    description: 'The spikes of a Dinosaur creates a playful design feature for this lamp. It will surely update your space with asymmetry and its unique shape. Imagine having a dinosaur in your home. Fantastic!',
    material: 'Ceramic',
    price: 219,
    images: ['/images/products/dino-table-lamp.jpg'],
  },
  {
    id: 'domo-mood-lamp',
    slug: 'domo-mood-lamp',
    name: 'Domo Mood Lamp',
    collection: 'experimental-rebel',
    tagline: 'Brutalist masterpiece',
    description: 'Domo was inspired by the 20th Century brutalist design era. With contrasting curves and straight edges, this architectural masterpiece will stand proud in any home.',
    material: 'Concrete',
    price: 149,
    images: ['/images/products/domo-mood-lamp.jpg'],
  },
  {
    id: 'observatory-mood-lamp',
    slug: 'observatory-mood-lamp',
    name: 'Observatory Mood Lamp',
    collection: 'experimental-rebel',
    tagline: 'A love story of materials',
    description: 'A love story of materials and contrasts. The Observatory mood lamp shows the beauty of natural stone in its simplest form and contrasts it with the workmanship used to spin a curved metal shade.',
    material: 'Travertine/marble with metal shade',
    price: 189,
    images: ['/images/products/observatory-mood-lamp.jpg'],
  },
  {
    id: 'edo-mood-lamp',
    slug: 'edo-mood-lamp',
    name: 'Edo Mood Lamp',
    collection: 'experimental-rebel',
    tagline: 'Ceramic sculpture meets aliens',
    description: 'Edo draws inspiration from contemporary ceramic sculpture design and aliens of course! A lively mood lamp to add character and colour to your space. The globe gives diffused light that can be dimmed as desired.',
    material: 'Resin',
    price: 169,
    images: ['/images/products/edo-mood-lamp.jpg'],
  },
  {
    id: 'dino-floor-lamp',
    slug: 'dino-floor-lamp',
    name: 'Dino Floor Lamp',
    collection: 'experimental-rebel',
    tagline: 'Supersized statement',
    description: 'We loved the Dino table lamp so much we had to make it supersized. The design looks just as great with the iconic dinosaur spikes running down the ceramic body. A tall shade adds the final touches to this statement piece.',
    material: 'Ceramic',
    price: 449,
    images: ['/images/products/dino-floor-lamp.jpg'],
  },
  {
    id: 'hook-floor-lamp',
    slug: 'hook-floor-lamp',
    name: 'Hook Floor Lamp',
    collection: 'experimental-rebel',
    tagline: 'Vietnamese fishing heritage',
    description: 'Hook draws inspiration from the many fisherman we see in Vietnam using their fishhooks and bamboo fish traps, transforming them into a sleek industrial lamp fit for the city. Available in a variety of finishes to fit your interior styling.',
    material: 'Natural weaved with concrete base',
    price: 349,
    images: ['/images/products/hook-floor-lamp.jpg'],
    featured: true,
  },
  {
    id: 'hoop-pendant',
    slug: 'hoop-pendant',
    name: 'Hoop Pendant',
    collection: 'experimental-rebel',
    tagline: 'Industrial masterpiece',
    description: 'A modern industrial masterpiece, Hoop is created using a subtle crossroads of rounded shapes. The pendant suspends as if defying gravity and we love the effect that the light creates through the metal mesh.',
    material: 'Metal mesh',
    price: 279,
    images: ['/images/products/hoop-pendant.jpg'],
  },

  // COSMOPOLITAN EXPERT
  {
    id: 'verta-bedside-lamp',
    slug: 'verta-bedside-lamp',
    name: 'Verta Bedside Lamp',
    collection: 'cosmopolitan-expert',
    tagline: 'Soft rippling curves',
    description: 'Verta is designed to celebrate the forms that can be achieved on the wood lathe. Its soft rippling curves catch the light beautifully creating a sense of warmth to your interior.',
    material: 'Wood & linen shade',
    price: 159,
    images: ['/images/products/verta-bedside-lamp.jpg'],
  },
  {
    id: 'verta-table-lamp',
    slug: 'verta-table-lamp',
    name: 'Verta Table Lamp',
    collection: 'cosmopolitan-expert',
    tagline: 'Warmth and elegance',
    description: 'A larger table lamp size of Verta is designed to celebrate the forms that can be achieved on the wood lathe. Its soft rippling curves catch the light beautifully creating a sense of warmth to your interior.',
    material: 'Wood & linen shade',
    price: 199,
    images: ['/images/products/verta-table-lamp.jpg'],
    featured: true,
  },
  {
    id: 'phi-table-lamp',
    slug: 'phi-table-lamp',
    name: 'Phi Table Lamp',
    collection: 'cosmopolitan-expert',
    tagline: 'Vietnamese materials showcase',
    description: 'Phi is designed to showcase some of our favourite Vietnamese materials. A ceramic base with a beautiful reactive glaze paired with a natural raffia shade that gives a cosy warm glow.',
    material: 'Ceramic with natural weaved shade',
    price: 179,
    images: ['/images/products/phi-table-lamp.jpg'],
  },
  {
    id: 'kyoto-mood-lamp',
    slug: 'kyoto-mood-lamp',
    name: 'Kyoto Mood Lamp',
    collection: 'cosmopolitan-expert',
    tagline: 'Bamboo trend, Japanese influence',
    description: 'Interested in the bamboo trend? Kyoto is tapping into the market with a hint of Japanese influences. The bamboo shade is handmade by our talented artisan craftsmen, it sits perfectly on top of a concrete base giving it a modern and refined look.',
    material: 'Bamboo & concrete base',
    price: 139,
    images: ['/images/products/kyoto-mood-lamp.jpg'],
    featured: true,
  },
  {
    id: 'connie-desk-lamp',
    slug: 'connie-desk-lamp',
    name: 'Connie Desk Lamp',
    collection: 'cosmopolitan-expert',
    tagline: 'Perfect workspace companion',
    description: 'The perfect companion on your desk. Connie provides excellent task light while using premium materials, adding a sense of style and efficiency to your workspace.',
    material: 'Stone/Wood base with metal shade',
    price: 209,
    images: ['/images/products/connie-desk-lamp.jpg'],
  },
  {
    id: 'stack-floor-lamp',
    slug: 'stack-floor-lamp',
    name: 'Stack Floor Lamp',
    collection: 'cosmopolitan-expert',
    tagline: 'Countryside in the home',
    description: 'Inspired by bamboo trees, Stack brings the countryside into the home! Using a natural mix of materials, this is a great lamp to add ambient light to your living area.',
    material: 'Wood elements with stone base',
    price: 329,
    images: ['/images/products/stack-floor-lamp.jpg'],
  },
  {
    id: 'butler-floor-lamp',
    slug: 'butler-floor-lamp',
    name: 'Butler Floor Lamp',
    collection: 'cosmopolitan-expert',
    tagline: 'Timeless tripod design',
    description: 'A timeless tripod design done the Saola way, using a stunning combination of warm wood and cast metal. This modern classic will add some regal panache to any living space it graces.',
    material: 'Wood',
    price: 379,
    images: ['/images/products/butler-floor-lamp.jpg'],
    featured: true,
  },
  {
    id: 'seline-pendant',
    slug: 'seline-pendant',
    name: 'Seline Pendant',
    collection: 'cosmopolitan-expert',
    tagline: 'Cozy and foldable',
    description: 'Bring in coziness and personality to your home, with a classic shape and blended color bamboo woven shade. One thing that you will love more is that it is a foldable shade!',
    material: 'Bamboo',
    price: 189,
    images: ['/images/products/seline-pendant.jpg'],
  },
  {
    id: 'penny-wide-pendant',
    slug: 'penny-wide-pendant',
    name: 'Penny Wide Pendant',
    collection: 'cosmopolitan-expert',
    tagline: 'Industrial but softer',
    description: 'Industrial design style but softer. Penny has a refined shape combined with a textured ceramic glaze to achieve this look.',
    material: 'Ceramic',
    price: 219,
    images: ['/images/products/penny-wide-pendant.jpg'],
  },
  {
    id: 'penny-tall-pendant',
    slug: 'penny-tall-pendant',
    name: 'Penny Tall Pendant',
    collection: 'cosmopolitan-expert',
    tagline: 'Refined ceramic',
    description: 'Industrial design style but softer. Penny has a refined shape combined with a textured ceramic glaze to achieve this look.',
    material: 'Ceramic',
    price: 199,
    images: ['/images/products/penny-tall-pendant.jpg'],
  },

  // PRETTY & POSH
  {
    id: 'lotus-table-lamp',
    slug: 'lotus-table-lamp',
    name: 'Lotus Table Lamp',
    collection: 'pretty-posh',
    tagline: 'Vietnamese national flower',
    description: 'Lotus pays tribute to the Vietnamese national flower. We love taking inspiration from nature and we think the Lotus Lamp is just as beautiful as the flower!',
    material: 'Ceramic',
    price: 219,
    images: ['/images/products/lotus-table-lamp.jpg'],
    featured: true,
    new: true,
  },
  {
    id: 'clove-table-lamp',
    slug: 'clove-table-lamp',
    name: 'Clove Table Lamp',
    collection: 'pretty-posh',
    tagline: 'Inspired by garlic',
    description: 'Clove is a celebration of a plant that many of us love to cook with, the garlic plant. A beautifully refined ceramic lamp, perfect for your bedside table. Don\'t worry it won\'t smell like real garlic!',
    material: 'Ceramic',
    price: 169,
    images: ['/images/products/clove-table-lamp.jpg'],
  },
  {
    id: 'marshmallow-table-lamp',
    slug: 'marshmallow-table-lamp',
    name: 'Marshmallow Table Lamp',
    collection: 'pretty-posh',
    tagline: 'Delicious and delectable',
    description: 'It\'s delicious, It\'s sweet, it\'s positively delectable. It\'s the Marshmallow light. Using Vietnamese\'s infamous ceramic handicraft, we brought these delicious treats to your home. The cute sized lamp would sit perfectly on your bedside.',
    material: 'Ceramic',
    price: 149,
    images: ['/images/products/marshmallow-table-lamp.jpg'],
    featured: true,
  },
  {
    id: 'geode-table-lamp',
    slug: 'geode-table-lamp',
    name: 'Geode Table Lamp',
    collection: 'pretty-posh',
    tagline: 'Modern, simple, exquisite',
    description: 'Geode is made up of polygonal geometry. Modern, simple, exquisite. We think this lamp speaks for itself.',
    material: 'Faux marble',
    price: 239,
    images: ['/images/products/geode-table-lamp.jpg'],
  },
  {
    id: 'hyde-mood-lamp',
    slug: 'hyde-mood-lamp',
    name: 'Hyde Mood Lamp',
    collection: 'pretty-posh',
    tagline: 'Sophisticated statement',
    description: 'A sophisticated statement for any table or shelf. A modernized version of working by candlelight. The Hyde mood lamp uses a luxe combination of stone and metal to add some classiness to your space.',
    material: 'Travertine/Marble',
    price: 179,
    images: ['/images/products/hyde-mood-lamp.jpg'],
  },
  {
    id: 'ariel-mood-lamp',
    slug: 'ariel-mood-lamp',
    name: 'Ariel Mood Lamp',
    collection: 'pretty-posh',
    tagline: 'A glowing pearl',
    description: 'This rare find features a glowing pearl inside a beautiful ceramic shell. Inspired by one of Vietnam\'s natural beauties, the pearl!',
    material: 'Ceramic',
    price: 169,
    images: ['/images/products/ariel-mood-lamp.jpg'],
  },
  {
    id: 'geode-floor-lamp',
    slug: 'geode-floor-lamp',
    name: 'Geode Floor Lamp',
    collection: 'pretty-posh',
    tagline: 'Hotel luxury at home',
    description: 'Standing loud and proud, this elegant geometric marble floor lamp adds a touch of luxe to your living room, sure to bring hotel luxury to your home.',
    material: 'Faux marble',
    price: 469,
    images: ['/images/products/geode-floor-lamp.jpg'],
    featured: true,
  },
  {
    id: 'isabella-pendant',
    slug: 'isabella-pendant',
    name: 'Isabella Pendant',
    collection: 'pretty-posh',
    tagline: 'Vintage jelly mold reborn',
    description: 'Isabella is inspired by the vintage jelly molds our grandmas used to make desserts. We gave this memory a modern Saola twist, and now the jelly mold is reborn as a statement ceramic pendant lamp, perfect for the kitchen.',
    material: 'Ceramic',
    price: 249,
    images: ['/images/products/isabella-pendant.jpg'],
  },
  {
    id: 'wagasa-pendant',
    slug: 'wagasa-pendant',
    name: 'Wagasa Pendant',
    collection: 'pretty-posh',
    tagline: 'Romantic Japanese influence',
    description: 'Wagasa is the name of the famous oil paper umbrella in Japan. The refined striped pattern on the shade is inspired from this classic silhouette. The textured glaze combined with the umbrella shape add a romantic flair to your living space.',
    material: 'Ceramic',
    price: 229,
    images: ['/images/products/wagasa-pendant.jpg'],
    featured: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCollection(collection: Collection): Product[] {
  return products.filter(p => p.collection === collection)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getNewProducts(): Product[] {
  return products.filter(p => p.new)
}

export function getAllProducts(): Product[] {
  return products
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}
