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
        story: "Borani, özellikle düğünlerde ve özel günlerde yapılan, yapımı zahmetli ama lezzetiyle buna değen bir yemektir. Abbasi halifesi Me'mun'un eşi Buran Hatun için yapılan düğün yemeği olduğu ve adının oradan geldiği rivayet edilir.",
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
