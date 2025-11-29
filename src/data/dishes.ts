export interface Dish {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    recipe: {
        ingredients: string[];
        instructions: string[];
        prepTime: string;
        cookTime: string;
        servings: string;
    };
    story?: string;
    motifs?: string[];
    isFeatured: boolean;
    category: "Ana Yemek" | "Tatlı" | "Çorba" | "Hamur İşi" | "Salata/Meze";
}

export const dishes: Dish[] = [
    {
        id: "urfa-kebabi",
        name: "Urfa Kebabı",
        description: "Zırh ile çekilmiş kuzu etinin, özel baharatlarla harmanlanıp kömür ateşinde pişirilmesiyle hazırlanan, acısız ama lezzet dolu bir kebap.",
        imageUrl: "/images/urfa-kebabi.png",
        category: "Ana Yemek",
        isFeatured: true,
        recipe: {
            prepTime: "45 dk",
            cookTime: "15 dk",
            servings: "4 Kişilik",
            ingredients: [
                "1 kg kuzu eti (zırh kıyması)",
                "200 gr kuyruk yağı",
                "Tuz",
                "Karabiber",
                "Kırmızı pul biber (isteğe bağlı az miktar)"
            ],
            instructions: [
                "Eti ve kuyruk yağını zırh ile kıyma haline getirin.",
                "Tuz ve karabiberi ekleyip iyice yoğurun. Etin özleşmesi önemlidir.",
                "Hazırladığınız harcı şişlere, elinizi hafifçe ıslatarak saplayın.",
                "Kömür ateşinde, sık sık çevirerek pişirin.",
                "Lavaş, közlenmiş biber ve domates ile servis yapın."
            ]
        }
    },
    {
        id: "cig-kofte",
        name: "Çiğ Köfte",
        description: "Urfa mutfağının şahı. Et, bulgur, isot ve baharatların sabırla yoğrulmasıyla ortaya çıkan efsanevi lezzet.",
        imageUrl: "/images/cig-kofte.png",
        category: "Salata/Meze",
        isFeatured: true,
        story: "Hz. İbrahim dönemine dayanan bir rivayete göre, Nemrut yakacak odun bırakmadığı için avcılar avladıkları ceylan etini pişiremezler. Eşleri eti taşla döverek ezer, bulgur ve biberle yoğurarak yenilebilir hale getirir. Çiğ köftenin doğuşu bu yokluk hikayesine dayanır.",
        motifs: ["/images/motifs/cig-kofte-motif-1.png", "/images/motifs/cig-kofte-motif-2.png"],
        recipe: {
            prepTime: "60 dk",
            cookTime: "0 dk",
            servings: "6-8 Kişilik",
            ingredients: [
                "500 gr yağsız dana eti (sinirsiz, dövülmüş)",
                "4 su bardağı ince bulgur (esmer)",
                "2 yemek kaşığı domates salçası",
                "2 yemek kaşığı biber salçası",
                "1 kase isot",
                "1 demet maydanoz",
                "1 demet taze soğan",
                "Sarımsak, Tuz, Kimyon, Karabiber",
                "Buz"
            ],
            instructions: [
                "Eti, salçaları ve baharatları geniş bir tepside yoğurmaya başlayın.",
                "Bulguru yavaş yavaş ekleyerek, buz yardımıyla uzun süre yoğurun.",
                "Bulgur yumuşayıp etle bütünleşinceye kadar yoğurma işlemine devam edin.",
                "İnce kıyılmış maydanoz ve taze soğanı ekleyip son bir kez karıştırın.",
                "Elinizle sıkımlar yaparak marul ve limon ile servis edin."
            ]
        }
    },
    {
        id: "sillik-tatlisi",
        name: "Şıllık Tatlısı",
        description: "Krep hamuru arasına ceviz serpilerek yapılan, şerbetli ve hafif bir Urfa tatlısı.",
        imageUrl: "/images/sillik.png",
        category: "Tatlı",
        isFeatured: true,
        recipe: {
            prepTime: "30 dk",
            cookTime: "20 dk",
            servings: "6 Kişilik",
            ingredients: [
                "2 su bardağı süt",
                "1.5 su bardağı un",
                "2 yumurta",
                "Tuz",
                "Ceviz içi (dövülmüş)",
                "Şerbeti için: 2 su bardağı şeker, 2 su bardağı su, tereyağı"
            ],
            instructions: [
                "Un, süt, yumurta ve tuzu çırparak akışkan bir hamur elde edin.",
                "Tavada ince krepler hazırlayın.",
                "Tepsiye krepleri dizin, aralarına bolca ceviz serpin.",
                "Şerbeti kaynatıp ılıtın.",
                "Üzerine eritilmiş tereyağı gezdirin ve şerbeti dökün.",
                "Dilimleyerek servis yapın."
            ]
        }
    },
    {
        id: "borani",
        name: "Borani",
        description: "Pazı sapları, kuzu eti, nohut ve börülce ile yapılan, sarımsaklı yoğurtla servis edilen özel bir yemek.",
        imageUrl: "/images/borani.png",
        category: "Ana Yemek",
        isFeatured: false,
        story: "Borani, özellikle düğünlerde ve özel günlerde yapılan, yapımı zahmetli ama lezzet dolu bir yemektir. Abbasi halifesi Me'mun'un eşi Buran Hatun için yapılan düğün yemeği olduğu ve adının oradan geldiği rivayet edilir.",
        motifs: ["/images/motifs/borani-motif-1.png"],
        recipe: {
            prepTime: "40 dk",
            cookTime: "60 dk",
            servings: "8 Kişilik",
            ingredients: [
                "500 gr kuzu eti (kuşbaşı)",
                "1 kg pazı (sadece sapları)",
                "1 su bardağı nohut (haşlanmış)",
                "1 su bardağı börülce (haşlanmış)",
                "Süzme yoğurt",
                "Sarımsak",
                "Tereyağı"
            ],
            instructions: [
                "Eti haşlayın.",
                "Pazı saplarını doğrayıp haşlayın.",
                "Et, nohut, börülce ve pazı saplarını bir tencerede birleştirip pişirin.",
                "Yuvarlanmış küçük köfteler (yuvalama) ekleyebilirsiniz.",
                "Servis tabağına alıp üzerine sarımsaklı yoğurt ve kızdırılmış tereyağı gezdirin."
            ]
        }
    },
    {
        id: "agzi-acik",
        name: "Ağzı Açık",
        description: "İnce hamur üzerine kıymalı harç konularak kızartılan, Urfa'ya özgü bir hamur işi.",
        imageUrl: "/images/agzi-acik.png",
        category: "Hamur İşi",
        isFeatured: false,
        recipe: {
            prepTime: "45 dk",
            cookTime: "20 dk",
            servings: "10-12 Adet",
            ingredients: [
                "Hamuru için: Un, su, tuz, yumurta, biraz yağ",
                "Harcı için: Kıyma, soğan, isot, tuz, karabiber, biraz un"
            ],
            instructions: [
                "Hamuru yoğurup dinlendirin.",
                "Kıymalı harcı hazırlayın.",
                "Hamurdan bezeler alıp tabak büyüklüğünde açın.",
                "Ortasına harcı koyup kenarlarını pile şeklinde kapatın (ortası açık kalacak).",
                "Kızgın yağda, önce harçlı tarafı sonra altı gelecek şekilde kızartın."
            ]
        }
    },
    {
        id: "lahmacun",
        name: "Lahmacun",
        description: "İncecik açılmış hamur üzerine zırh kıyması, sebze ve baharat karışımının yayılmasıyla taş fırında pişirilen, limon ve maydanozla servis edilen eşsiz lezzet.",
        imageUrl: "/images/lahmacun.png",
        category: "Hamur İşi",
        isFeatured: true,
        recipe: {
            prepTime: "45 dk",
            cookTime: "10 dk",
            servings: "10 Adet",
            ingredients: [
                "500 gr kuzu kıyma (orta yağlı)",
                "4 adet soğan",
                "2 diş sarımsak",
                "3 adet domates",
                "4 adet yeşil biber",
                "1 demet maydanoz",
                "1 yemek kaşığı biber salçası",
                "1 tatlı kaşığı pul biber (isot)",
                "Tuz, Karabiber",
                "Hamuru için: Un, su, tuz, maya"
            ],
            instructions: [
                "Sebzeleri çok ince kıyın veya robottan geçirin.",
                "Kıyma, sebzeler ve baharatları iyice yoğurun.",
                "Hamuru hazırlayıp mayalandırın ve ceviz büyüklüğünde bezeler alın.",
                "Bezeleri çok ince açın.",
                "Harcı hamurun üzerine ince bir tabaka halinde yayın.",
                "Taş fırında veya evde yüksek dereceli fırında pişirin.",
                "Limon ve maydanoz ile sıcak servis yapın."
            ]
        }
    },
    {
        id: "patlicanli-kebap",
        name: "Patlıcanlı Kebap",
        description: "Urfa'nın tescilli lezzeti. Zırh kıyması köftelerin ve patlıcan dilimlerinin şişe dizilip kömür ateşinde pişirilmesiyle hazırlanır.",
        imageUrl: "/images/patlicanli-kebap.png",
        category: "Ana Yemek",
        isFeatured: true,
        recipe: {
            prepTime: "30 dk",
            cookTime: "20 dk",
            servings: "4 Kişilik",
            ingredients: [
                "1 kg kemer patlıcan",
                "750 gr kuzu kıyma (zırh)",
                "Tuz, Karabiber",
                "Servis için: Lavaş, közlenmiş biber ve domates"
            ],
            instructions: [
                "Patlıcanları 2-3 parmak kalınlığında dilimleyin.",
                "Kıymayı tuz ve karabiberle yoğurup ceviz büyüklüğünde köfteler hazırlayın.",
                "Şişe bir patlıcan bir köfte olacak şekilde dizin.",
                "Kömür ateşinde patlıcanlar yumuşayana kadar çevirerek pişirin.",
                "Pişen kebabı bir tepsiye alıp üzerini kapatarak terletin (patlıcanların kabuğu kolay soyulsun diye).",
                "Lavaş ekmeği ile servis yapın."
            ]
        }
    },
    {
        id: "lebeni",
        name: "Lebeni",
        description: "Yoğurt, dövme buğday ve nohutla yapılan, soğuk içilen ferahlatıcı bir çorba.",
        imageUrl: "/images/lebeni.png",
        category: "Çorba",
        isFeatured: false,
        recipe: {
            prepTime: "10 dk",
            cookTime: "40 dk",
            servings: "6 Kişilik",
            ingredients: [
                "1 su bardağı dövme buğday (aşurelik)",
                "1/2 su bardağı nohut",
                "1 kg süzme yoğurt",
                "Su",
                "Tuz"
            ],
            instructions: [
                "Buğday ve nohudu akşamdan ıslatın.",
                "Ertesi gün yumuşayana kadar haşlayın ve soğumaya bırakın.",
                "Yoğurdu su ile ayran kıvamına getirin (çok sulu olmasın).",
                "Haşlanmış buğday ve nohudu yoğurda ekleyin.",
                "Tuzunu ayarlayıp soğuk servis yapın."
            ]
        }
    },
    {
        id: "tirit",
        name: "Tirit",
        description: "Bayat ekmeklerin et suyu ile ıslatılıp üzerine didiklenmiş et ve yoğurt eklenmesiyle yapılan doyurucu bir yemek.",
        imageUrl: "/images/tirit.png",
        category: "Ana Yemek",
        isFeatured: false,
        recipe: {
            prepTime: "20 dk",
            cookTime: "120 dk",
            servings: "6 Kişilik",
            ingredients: [
                "500 gr kemikli kuzu eti",
                "2 adet bayat tırnaklı ekmek",
                "2 su bardağı yoğurt",
                "3 diş sarımsak",
                "1 yemek kaşığı tereyağı",
                "Pul biber"
            ],
            instructions: [
                "Eti bol suda iyice haşlayın, etleri kemiklerinden ayırıp didikleyin.",
                "Ekmekleri küp küp doğrayıp servis tabağına alın.",
                "Sıcak et suyu ile ekmekleri ıslatın.",
                "Üzerine sarımsaklı yoğurdu dökün.",
                "Didiklenmiş etleri yoğurdun üzerine yerleştirin.",
                "Tereyağında pul biberi yakıp üzerine gezdirin."
            ]
        }
    },
    {
        id: "billuriye",
        name: "Billuriye",
        description: "Tel kadayıfın bol fıstıkla buluştuğu, şerbetli ama çıtır çıtır kalan özel bir tatlı.",
        imageUrl: "/images/billuriye.png",
        category: "Tatlı",
        isFeatured: true,
        recipe: {
            prepTime: "30 dk",
            cookTime: "40 dk",
            servings: "8 Kişilik",
            ingredients: [
                "500 gr tel kadayıf",
                "250 gr tereyağı",
                "300 gr toz antep fıstığı",
                "Şerbeti için: 3 su bardağı şeker, 2.5 su bardağı su, limon suyu"
            ],
            instructions: [
                "Kadayıfları didikleyin.",
                "Tepsiyi yağlayıp kadayıfın yarısını bastırarak döşeyin.",
                "Üzerine bolca fıstık serpin.",
                "Kalan kadayıfı üzerine kapatıp tekrar bastırın.",
                "Eritilmiş tereyağını üzerine gezdirin.",
                "Kısık ateşte veya fırında nar gibi kızarana kadar pişirin.",
                "Ilık tatlıya ılık şerbeti dökün."
            ]
        }
    }
];

export function getFeaturedDishes() {
    return dishes.filter(dish => dish.isFeatured);
}

export function getDishById(id: string) {
    return dishes.find(dish => dish.id === id);
}

export function getDishesWithStories() {
    return dishes.filter(dish => dish.story);
}
