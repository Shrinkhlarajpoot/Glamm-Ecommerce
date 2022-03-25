import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Baby-Wash",
    price: 500,
    categoryName: "babycare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/Bubble%20Bath%201?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/Bubble%20Bath%202?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/Bubble%20Bath%204?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "The mild Kylie Baby Bubble Bath fills the bath tub with tear free, baby-safbubbles while gently cleansing from head to toe This sulfate free formula is safe for sensitive skin and ideal for babies and kids of all ages For happy, clean bath It has no added fragrances, and contains a natural occurring scent from its baby-safe ingredients.",
  },
  {
    _id: uuid(),
    title: "Face-Toner",
    price: 100,
    categoryName: "skincare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/4064941039679_KJS_CCOL_21_CTON_150ml_5oz_pack_Pink_Background_HR.tif-JPG-300dpi?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/4064941039679_KJS_CTON_22_Digital_Infographic_Consumer_Claims_28_Day_Use_1.psd-JPG-300dpi?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS_CTON_21_Model_07_WS?$SQUARE-575x575-2X$",
    ],
    inStock: false,
    description:
      "My Clarifying Exfoliating Toner is a power-packed formula that helps clarify, minimize the appearance of pores, and balance the skin. This innovative toner works to exfoliate the skin without drying it out, help even skin tone, and smooth texture. It’s your new go-to for clear, soothed skin.",
  },
  {
    _id: uuid(),
    title: "Dark-Perfume",
    price: 700,
    categoryName: "perfumes",
    rating: 4,
    isLatest: true,
    img: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15782386/2022/1/19/1d7b6527-6282-4133-b573-469d0b8b6f631642586152471-Beardo-Set-of-Black-Musk--Dark-Side-Eau-De-Parfum-100-ml-Eac-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15782386/2022/1/19/34b26458-3dfa-439a-bc0a-89c048e50e621642586152460-Beardo-Set-of-Black-Musk--Dark-Side-Eau-De-Parfum-100-ml-Eac-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15782386/2022/1/19/0aab3933-d1e4-402b-a934-90a749ef42ef1642586152450-Beardo-Set-of-Black-Musk--Dark-Side-Eau-De-Parfum-100-ml-Eac-3.jpg",
    ],
    inStock: true,
    description:
      "‘Dark is a powerful floral gourmand woody fragrance that explodes with joy and good humour finished with a seductive twist. It is the incarnation of the true glamorous, confident, playful and always full of joy. The sensual fragrance is inspired by the atmosphere when friends are getting ready to party the night away. It is not about going out, it is all about sharing the fun, the laughter and making it everyone to remember.",
  },
  {
    _id: uuid(),
    title: "Baby-Conditioner",
    price: 400,
    categoryName: "babycare",
    rating: 5,
    isLatest: true,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/Conditioner%201?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/Conditioner%202?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/Conditioner%204?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "My Kylie Baby Gentle Conditioner eases combing, enhances curls and helps detangle all hair types and textures, leaving your baby's hair silky smooth This tear free, silicone free conditioner is formulated with Murumuru Butter, Glycerin and caring botanical oils to take extra care of hair and deliver gentle yet effective conditioning. Safe for delicate hair and sensitive scalp, it is ideal for babies and kids of all ages.",
  },
      {
    _id: uuid(),
    title: "Face-Oil",
    price: 400,
    categoryName: "skincare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/kylie-skin_facial-oil?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/cc-model-websize10?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/cc-model-websize8?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "My Clarifying Facial Oil helps balance, clarify, and improve skin’s texture leaving it with a healthy-looking glow. Formulated with skin-loving ingredients, this non-greasy formula replenishes moisture while helping to reduce excess oil on the skins surface. It’s your go-to for soft, nourished, and moisturized skin.",
  },
  {
    _id: uuid(),
    title: "Nude-Lipstick",
    price: 800,
    categoryName: "cosmetics",
    rating: 3,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/KC-LiquidLipstick-Matte-CandyK-EPI?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KJC_INFOGRAPHICS_MATTE%20LIQUID%20LIPS%202_DEF-11?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/05-21-2021%20Kylie%20Cosmetics%20421candy%20k-%20light-1?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "My Matte Liquid Lipstick lets you create a gorgeous matte lip. The true matte formula glides on effortlessly and offers 8-hour wear without drying lips. Available in a wide range of shades, the highly pigmented formula is cruelty free and vegan.",
  },
  {
    _id: uuid(),
    title: "EyeShadow-Palette",
    price: 400,
    categoryName: "cosmetics",
    rating: 5,
    isLatest: false,
    img: [
      "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dweb63c8d2/images/RoseQuartz/rose-quartz-eyeshadow-palette-1.jpg?sw=630&sh=630",
      "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwa17b410f/images/RoseQuartz/rose-quartz-eyeshadow-palette-3.jpg?sw=630&sh=630",
      "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw02ccac97/images/RoseQuartz/rose-quartz-eyeshadow-palette-2.jpg?sw=630&sh=630",
    ],
    inStock: true,
    description:
      "Wear the energy you want to attract with this crystal-inspired eyeshadow palette, featuring 18 supercharged shades that are effortlessly easy to blend & layer! Our Rose Quartz Collection has been created to inspire you to glow your own way!The rich earthy hues, rosy tints & pearly metallics will bring you the best beauty vibes",
  },
  {
    _id: uuid(),
    title: "Eye-Mascara",
    price: 200,
    categoryName: "cosmetics",
    rating: 5,
    isLatest: false,
    img: ["https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw789290ff/images/sfra/bombbrows-full-fluffy/bb-gel-3.jpg?sw=630&sh=630",
"https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw3a20d20e/images/bombbrowspackshots/0006bomb_brows_gel_texture_soft_black.png?sw=630&sh=630",
"https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw667dd8ab/images/sfra/bombbrows-full-fluffy/bb-gel-5.jpg?sw=630&sh=630"],
    inStock: true,
    description:"Create full, fluffy-looking #BOMBBROWS in seconds! Available in 8 universal shades, this lightweight brow gel instantly tames, tints & adds thickness to your hair with volumizing microfibers! It’s now SO easy to enhance your natural brow shape & create different looks, whether you like them feathered or naturally groomed"
  },

  {
    _id: uuid(),
    title: "Glow-Blush",
    price: 700,
    categoryName: "cosmetics",
    rating: 5,
    isLatest: false,
    img: ["https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw8cdabb7a/images/sfra/nymphkiss/stylized1.jpg?sw=630&sh=630",
    "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw708a5b30/images/sfra/nymphkiss/texture2.png?sw=630&sh=630",
    "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw2d47c177/images/sfra/nymphkiss/arm.jpg?sw=630&sh=630"],
    inStock: true,
    description:"Take your blush desires to new, shimmering dimensions with our super unique, blush-highlighter blend. N.Y.M.P.H. KISS Glow Blush is a silky, duo-chrome formula that can be used as a blush or a shaded highlighter, warming up your skin with a luminous flush of pink and gold for instant color and shine without any chunky, unwanted glitter!"
  },
  {
    _id: uuid(),
    title: "Fogg-Perfume",
    price: 700,
    categoryName: "perfumes",
    rating: 3,
    isLatest: false,
    img: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16575400/2022/1/18/b32dc345-5fb2-4e99-9798-4296f36693ad1642505717013-Fogg-Women-Perfume-and-Body-Mist-1261642505716673-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16575400/2022/1/18/a6d87106-d881-4ee9-9dc1-9fe5ac10492e1642505717004-Fogg-Women-Perfume-and-Body-Mist-1261642505716673-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16575400/2022/1/18/9175dc60-1191-4421-ad05-a878265eb9911642505716990-Fogg-Women-Perfume-and-Body-Mist-1261642505716673-4.jpg",
    ],
    inStock: true,
    description:
      "‘Fogg is a powerful floral gourmand woody fragrance that explodes with joy and good humour finished with a seductive twist. It is the incarnation of the true glamorous, confident, playful and always full of joy. The sensual fragrance is inspired by the atmosphere when friends are getting ready to party the night away. It is not about going out, it is all about sharing the fun, the laughter and making it everyone to remember.",
  },
  {
    _id: uuid(),
    title: "Lip Set",
    price: 1000,
    categoryName: "cosmetics",
    rating: 4,
    isLatest: true,
    img: ["https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw302bbbcf/images/cherry-bloosom-lip-set-HB00824/CherryBlossomLipSet1.jpg?sw=630&sh=630",
    "	https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwc1d7ea62/images/cherry-bloosom-lip-set-HB00824/CherryBlossomLipSet3.jpg?sw=630&sh=630",
  "	https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwd2af879b/images/cherry-bloosom-lip-set-HB00824/CherryBlossomLipSet4.jpg?sw=630&sh=630"],
    inStock: true,
    description:"For a juicy, fuller-looking pout, pucker up with our Perfect Pair Lip Set, featuring 1 x Lip Contour 2.0 Automatic Lip Pencil and 1 x Power Bullet Cream Glow Cream Lipstick (AKA your new everyday lip combo!). Whether you prefer our Bossy Browns or Sweet Nudes lipsticks, you’ll achieve a super comfortable and creamy lip look."
  },
  {
    _id: uuid(),
    title: "Foundation",
    price: 800,
    categoryName: "cosmetics",
    rating: 2,
    isLatest: false,
    img:["https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwd4b954d8/images/sfra/GLOWISH/MULTIDEW/MASTER.jpg?sw=630&sh=630",
  "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwc24322b2/images/sfra/GLOWISH/MULTIDEW/packshots/05_MEDIUM.png?sw=630&sh=630",
"https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw9ba846a0/images/sfra/GLOWISH/MULTIDEW/swatch.jpg?sw=630&sh=630"],
    inStock: true,
    description:"Foundation is  radiant, moisture-packed that instantly brightens your complexion and blurs pores for a soft-focus, dewy finish! Perfect for the ultimate “no makeup” makeup look, the sheer coverage illuminates your complexion (without hiding it!) and the light-reflective pearl pigments effortlessly enhance your natural beauty... it’ll literally change your glow game FOREVER!"
  },
  {
    _id: uuid(),
    title: "Sanitizer",
    price: 400,
    categoryName: "skincare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/KS_Hand-Sanitizer_Ecomm_Pink_Websized_02?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS_Hand-Sanitizer_Model_03?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS_Hand-Sanitizer_Model_02?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "My Hand Sanitizer comes in a handy spray component to cleanse and sanitize your hands wherever you are. This fast-drying, non-sticky formula consists of 80% alcohol and Glycerin to help soothe and protect skin from dryness, no matter how often you spray",
  },
  {
    _id: uuid(),
    title: "Face-Blush",
    price: 400,
    categoryName: "cosmetics",
    rating: 5,
    isLatest: false,
    img: ["https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw25984d30/images/GloWishBlushPowder/glowish-blush-1.jpg?sw=630&sh=630",
    "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw232c0082/images/GloWishBlushPowder/2_GLOWISH-Cheeky-Vegan-Blush-Powder5_03-berry-juicy-02.png?sw=630&sh=630",
"https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw80edfc0d/images/GloWishBlushPowder/Glowish-Blush-Powder_Shades_name.jpg?sw=630&sh=630",  
"https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw80edfc0d/images/GloWishBlushPowder/Glowish-Blush-Powder_Shades_name.jpg?sw=630&sh=630"],
    inStock: true,
    description:"A velvety blush with a marbled formula developed to give all skin tones a beautifully natural, fresh-faced flush of color and a soft-focus glow.Infused with antioxidants & skin-loving ingredients like Damascus rose oil, red bell pepper extract, plant-derived squalene, shea butter AND vitamin E, this non-powdery, skin-blurring blush gives your cheeks a silky wash of color that’s super buildable!"
  },

  {
    _id: uuid(),
    title: "Matte-Lipstick",
    price: 500,
    categoryName: "cosmetics",
    rating: 4,
    isLatest: false,
    img: ["https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw1160969a/images/sfra/liquidmattelip_consumer/hermajesty.jpg?sw=630&sh=630",
  "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw02084e17/images/sfra/liquidmattelip_consumer/LM-Consumer-Voted-Shades_0002_HER-MAJESTY.png?sw=630&sh=630",
"https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwc51d5a23/images/sfra/liquidmattelip_consumer/HB-_0014_Her-Majesty-Lips.png?sw=630&sh=630"],
    inStock: true,
    description:"Just one coat of Liquid Matte Lipstick provides long-lasting pigmented color that literally lasts for hours, even if you're traveling or eating a snack.  It's budge-proof, kiss-proof, and life-proof!  The hydrating formula is infused with antioxidants and an exclusive complex to help maintain your lips' hydration, really nourishing the lips and giving it a lightweight and silky feeling.  "
  },
  {
    _id: uuid(),
    title: "Primer",
    price: 600,
    categoryName: "cosmetics",
    rating: 4,
    isLatest: false,
    img: ["https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwb0b7f4b1/images/sfra/foundation_stick/newimages/group.jpg?sw=630&sh=630",
  "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwb0b7f4b1/images/sfra/foundation_stick/newimages/group.jpg?sw=630&sh=630",
"https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwd96f0a54/images/sfra/waterjelly/Image2.jpg?sw=630&sh=630"],
    inStock: true,
    description:"Water Jelly is an ultra-hydrating primer that smooths and quenches skin with a surge of moisture to create the perfect canvas that’s ready to grip makeup in place for long-lasting, flawless wear. This moisture-packed primer will keep your skin balanced all day long while the activated makeup grip creates the perfect texture for makeup. The unique jelly texture melts into the skin for instant hydration"
  },
  {
    _id: uuid(),
    title: "Face Spray",
    price: 800,
    categoryName: "cosmetics",
    rating: 4,
    isLatest: true,
    img: ["https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwe434b7fd/images/sfra/HB00155/Pack-shots/PNG/RBF_1.png?sw=630&sh=630",
  "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw7b37733e/images/sfra/HB00155/Stylized%20images/Square/3A0A0020-5.jpg?sw=630&sh=630",
    "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw5a688038/images/complexion/summer-proof-3.jpg?sw=630&sh=630"],
    inStock: true,
    description:"Extra Hold Spray for the Ultimate Matte Finish!This extra-hold, scented setting spray delivers a comfortable, matte finish without leaving skin feeling dry. It’s inspired by a makeup hack used by some drag queens, who set their hard work and elaborate face makeup with hairspray for lasting hold."
  },
  {
    _id: uuid(),
    title: "Face-Cleanser",
    price: 800,
    categoryName: "skincare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/KS_Makeup-Melting-Cleanser_Ecomm-Pink_03?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS_Makeup-Melting-Cleanser_Infographic_Consumer-Testing_02?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS_Makeup-Melting-Cleanser_Model_WS_28?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:"My Makeup Melting Cleanser is an innovative cream-to-oil cleanser that melts away makeup and impurities leaving the skin cleansed, nourished, and radiant. This lightweight formula is gentle enough for the eyes, non-drying and doesn’t leave behind any residue. It’s a must-have to cleanse and remove makeup easily and efficiently."
  },
  {
    _id: uuid(),
    title: "Lip Balm",
    price: 400,
    categoryName: "cosmetics",
    rating: 4,
    isLatest: true,
    img: ["https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwecd4e3bf/images/sfra/silk_balm/3A0A0091.jpg?sw=630&sh=630",
     "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwa3aa0a87/images/sfra/silk_balm/Silk-Balm-2.png?sw=630&sh=630",
    "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwa8db4432/images/sfra/silk_balm/SILKBALMHUDA-4489.jpg?sw=630&sh=630" ],
    
    inStock: true,
 description:" An ultra-comfortable liquid balm that combines powerful actives to give you a boost of lasting hydration for silky smooth, fuller-looking lips. The subtle blushed-pink shade has been designed to look gorgeous on everyone.The hydrating formula is infused with a blend of Hyaluronic Filling Spheres, Soybean and Licorice Extract that work by migrating into fine lines where they swell and give a plumping effect. ",
  },
  {
    _id: uuid(),
    title: "Police-Perfume",
    price: 900,
    categoryName: "perfumes",
    rating: 4,
    isLatest: true,
    img: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2269878/2021/8/16/5d11f996-abe5-4dde-8a81-aab2f3ab5c381629108963574-Police-Men-Contemporary-Eau-De-Toilette-100-ml-5561629108963-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2269878/2021/8/16/19f920cf-fe41-44c5-a7fd-48ba62ec03351629108963567-Police-Men-Contemporary-Eau-De-Toilette-100-ml-5561629108963-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2269878/2021/8/16/dd8112e9-d980-466a-9392-77de5313e75c1629108963560-Police-Men-Contemporary-Eau-De-Toilette-100-ml-5561629108963-4.jpg",
    ],
    inStock: true,
    description:
      "‘Police is a powerful floral gourmand woody fragrance that explodes with joy and good humour finished with a seductive twist. It is the incarnation of the true glamorous, confident, playful and always full of joy. The sensual fragrance is inspired by the atmosphere when friends are getting ready to party the night away. It is not about going out, it is all about sharing the fun, the laughter and making it everyone to remember.",
  },

  {
    _id: uuid(),
    title: "Body-Highlighter",
    price: 800,
    categoryName: "cosmetics",
    rating: 4,
    isLatest: false,
    img: ["https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw8fe414b8/images/sfra/NYMPH/newpackshot/NYMPH/luna.jpg?sw=630&sh=630",
    "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw3779cd43/images/sfra/NYMPH/newpackshot/NYMPH/NYMPHLuna02.png?sw=630&sh=630",
     "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwbd6c177a/images/sfra/mini_nymph/NYMPH_Arm_Swatches_latest.png?sw=630&sh=630"],
    inStock: true,
    description:"This Highlighter promises to give you flawless summer skin that feels smooth and hydrated - without streaks or harsh lines. The water-based formula melts seamlessly into the skin to help blur imperfections, leaving you with nothing but a sun-touched shimmer that is both water and transfer resistant. N.Y.M.P.H promises to give you flawless summer skin that feels smooth and hydrated - without streaks or harsh lines.."
  },
  {
    _id: uuid(),
    title: "Shimmering Oil",
    price: 1000,
    categoryName: "cosmetics",
    rating: 2,
    isLatest: false,
    inStock: true,
    img:["https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw962e7b77/images/sfra/NYMPHbodydrip/stylized1.jpg?sw=630&sh=630",
       "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwc155eac7/images/sfra/NYMPHbodydrip/holding.jpg?sw=630&sh=630",
       "https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwc22d3661/images/sfra/NYMPHbodydrip/swatch.jpg?sw=630&sh=630"],
   description:"Shimmering Dry Oil is a shimmering, body-bronzing dry oil that subtly illuminates your skin without feeling sticky or greasy! You’ll achieve a gorgeous, sun-kissed gleam that looks so natural and beautiful – faking that getaway glow has never been easier!"
  },
       {
    _id: uuid(),
    title: "Face-Wash",
    price: "400",
    categoryName: "skincare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/MicrosoftTeams-image_2?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS-FACE-WASH-OPAQUE-PDP-BENEFITS?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/kylie-foaming-cleanser?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "My Foaming Face Wash cleanses skin while helping to remove dirt, excess oil, and makeup for a fresh, bright complexion. It doesn’t strip the skin of its natural moisture, and leaves it feeling so clean and hydrated.",
  },
  {
    _id: uuid(),
    title: "Face Serum",
    price: 900,
    categoryName: "skincare",
    rating: 4,
    isLatest: true,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/serum?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/1_0005_ks-serum-1?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/serum?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "The Vitamin C Serum moisturizes, helps improve texture, and brightens skins overall complexion. Packed with skin-loving ingredients, this rich, non-greasy formula leaves the skin with a fresh, radiant glow.",
  },
  {
    _id: uuid(),
    title: "Guess-Perfume",
    price: 1000,
    categoryName: "perfumes",
    rating: 4,
    isLatest: false,
    img: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17009444/2022/2/1/1850222d-93a1-4f57-b4ee-518dcddab8751643721251034THEMANCOMPANYMenOrangeJoyEDPWithLongLastingFragrance-60ml1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17009444/2022/2/1/e9cd86ff-3d12-4f72-ab0f-d0dc23024ae01643721251184THEMANCOMPANYMenOrangeJoyEDPWithLongLastingFragrance-60ml3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17009444/2022/2/1/4137b395-3628-4206-8a15-2c1f9324dcde1643721250524THEMANCOMPANYMenOrangeJoyEDPWithLongLastingFragrance-60ml5.jpg",
    ],
    inStock: true,
    description:
      "‘The Guess perfume’ is a powerful floral gourmand woody fragrance that explodes with joy and good humour finished with a seductive twist. It is the incarnation of the true glamorous, confident, playful and always full of joy. The sensual fragrance is inspired by the atmosphere when friends are getting ready to party the night away. It is not about going out, it is all about sharing the fun, the laughter and making it everyone to remember.",
  },
  {
    _id: uuid(),
    title: "Joy-Perfume",
    price: 500,
    categoryName: "perfumes",
    rating: 5,
    isLatest: false,
    img: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10893332/2020/3/5/4604e55e-1b56-40cd-98a6-457b87cc9a7e1583392219813-GUESS-Women-Dare-Eau-De-Toilette-100-ml-3621583392218890-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10893332/2020/3/5/25fc733c-0aa5-4f1b-935e-3c83b78a12c01583392219735-GUESS-Women-Dare-Eau-De-Toilette-100-ml-3621583392218890-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10893332/2020/3/5/835465bd-f216-4082-be87-982c1136b49b1583392219775-GUESS-Women-Dare-Eau-De-Toilette-100-ml-3621583392218890-2.jpg",
    ],
    inStock: true,
    description:
      "‘Joy is a powerful floral gourmand woody fragrance that explodes with joy and good humour finished with a seductive twist. It is the incarnation of the true glamorous, confident, playful and always full of joy. The sensual fragrance is inspired by the atmosphere when friends are getting ready to party the night away. It is not about going out, it is all about sharing the fun, the laughter and making it everyone to remember.",
  },

  {
    _id: uuid(),
    title: "Lip-Oil",
    price: 400,
    categoryName: "skincare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/3616303132415_KS_LOILW_21_Product_6ml_0.2oz_pack_Pink_Background?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS_LOILW_21_Model_04_WS?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/KS_LOILW_21_Model_03_WS?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "My fan favorite Lip Oil is now available in a new, juicy watermelon flavor. This non-sticky formula deeply hydrates, comforts, and leaves lips looking smooth and naturally plumped. Its rich, conditioning texture combines the shine of a lip gloss with the moisture-sealing effects of a balm while leaving a subtle sheer pink tint on the lips.",
  },
  {
    _id: uuid(),
    title: "Baby-Sampoo",
    price: "700",
    categoryName: "babycare",
    rating: 5,
    isLatest: true,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/KB_GSHAMP-US_21_Closed_Ombre_WS?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/Shampoo%202?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/Shampoo%204?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "The tear free  Baby Gentle Shampoo cleanses and softens hair and is safe for delicate hair and sensitive scalp. The moisture-rich, sulfate free formula delivers a creamy lather to cleanse hair without drying it out, and is ideal for babies and kids  of all ages. This dreamy shampoo works wonders for all types of hair and leaves hair soft and shiny. It has no added fragrances, and contains a natural occurring scent from its baby-safe ingredients.",
  },
  {
    _id: uuid(),
    title: "Nautica-Perfume",
    price: 600,
    categoryName: "perfumes",
    rating: 4,
    isLatest: false,
    img: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1685402/2018/12/1/0c9d3ec1-a478-428d-8c27-961671adcdaf1543656722187-Nautica-Men-Voyage-N-83-Eau-De-Toilette-100-ml-8501543656721-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1685402/2018/12/1/a466741d-e150-4fa8-9740-3d9115fa2a9d1543656722175-Nautica-Men-Voyage-N-83-Eau-De-Toilette-100-ml-8501543656721-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1685402/2018/12/1/7ec4e33c-a497-41bf-b9b1-4750d8401f3c1543656722164-Nautica-Men-Voyage-N-83-Eau-De-Toilette-100-ml-8501543656721-3.jpg",
    ],
    inStock: true,
    description:
      "‘Nautica is a powerful floral gourmand woody fragrance that explodes with joy and good humour finished with a seductive twist. It is the incarnation of the true glamorous, confident, playful and always full of joy. The sensual fragrance is inspired by the atmosphere when friends are getting ready to party the night away. It is not about going out, it is all about sharing the fun, the laughter and making it everyone to remember.",
  },
  {
    _id: uuid(),
    title: "Baby-Cream",
    price: 300,
    categoryName: "babycare",
    rating: 5,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/KB_ML-US_21_Closed_Ombre_WS?$SQUARE-575x575-2X$",

      "https://coty.scene7.com/is/image/cotyemea/Lotion%202?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/Lotion%204?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "The lightweight  Baby Moisturizing Lotion leaves the skin irresistibly soft and smooth. Safe for sensitive and delicate skin, this silicone free formula is formulated with Glycerin, Avocado Oil and Sunflower Seed Oil and quickly absorbs to moisturize and soften with a non-greasy feel after use. It has no added fragrances, and contains a natural occurring scent from its baby-safe ingredients.",
  },
  {
    _id: uuid(),
    title: "DressBerry-Perfume",
    price: 1000,
    categoryName: "perfumes",
    rating: 4,
    isLatest: false,
    img: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15118744/2021/10/6/e2d0e404-4d73-4479-9b07-f5e30b69cf9b1633499528135-DressBerry-Eau-De-Parfum---Stay-Wild-Moon-Child-50-ml-126163-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15118744/2021/10/6/26db258a-772d-45a4-bf10-e7068428d8231633499528127-DressBerry-Eau-De-Parfum---Stay-Wild-Moon-Child-50-ml-126163-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15118744/2021/10/6/996da7e7-9ae1-478d-88ca-d3ed24ad1a511633499528120-DressBerry-Eau-De-Parfum---Stay-Wild-Moon-Child-50-ml-126163-3.jpg",
    ],
    inStock: true,
    description:
      "‘The DressBerry perfume’ is a powerful floral gourmand woody fragrance that explodes with joy and good humour finished with a seductive twist. It is the incarnation of the true glamorous, confident, playful and always full of joy. The sensual fragrance is inspired by the atmosphere when friends are getting ready to party the night away. It is not about going out, it is all about sharing the fun, the laughter and making it everyone to remember.",
  },
  {
    _id: uuid(),
    title: "Milk-Toner",
    price: 800,
    categoryName: "skincare",
    rating: 1,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/toner-2?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/1_0020_kylie-skin-toner?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/1_0007_ks-toner-2?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "My Vanilla Milk Toner is an alcohol-free formula that helps to balance skin, smooth texture, and minimize the appearance of pores. This skin-perfecting toner is an essential step for smooth, replenished skin after each cleanse.",
  },
  {
    _id: uuid(),
    title: "Eye-Cream",
    price: 900,
    categoryName: "skincare",
    rating: 4,
    isLatest: false,
    img: [
      "https://coty.scene7.com/is/image/cotyemea/eye-cream-1?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/eye-cream-kylie-skin?$SQUARE-575x575-2X$",
      "https://coty.scene7.com/is/image/cotyemea/1_0013_ks-eye-cream-1?$SQUARE-575x575-2X$",
    ],
    inStock: true,
    description:
      "The Eye Cream helps brighten, hydrate, and reduce the look of puffiness and dark circles. Its soothing, rich formula mixed with a blend of skin-loving ingredients leaves the eye area looking younger, revitalized and more awake.",
  },
];
