import type { Translation } from "./types";

export const tr: Translation = {
    routes: {
        home: "/",
        about: "/hakkinda",
        services: {
            index: "/hizmetler",
            nanny: "/hizmetler/cocuk-bakici",
            caregiver: "/hizmetler/yasli-bakici",
            cleaner: "/hizmetler/temizlikci",
        },
        infobook: "/bilgi-defteri",
        contact: "/iletisim",
        privacy: "/gizlilik-politikasi",
        terms: "/kullanim-kosullari",
    },
    nav: {
        home: "Anasayfa",
        about: "Hakkında",
        services: "Hizmetler",
        servicesDropdown: {
            nanny: "Çocuk Bakıcı",
            caregiver: "Yaşlı Bakıcı",
            cleaner: "Temizlikçi",
        },
        infobook: "Bilgi Defteri",
        contact: "İletişim",
        getQuote: "Teklif Al",
    },
    serviceDescriptions: {
        nanny: "Ailenizin ritmine ve ihtiyaçlarına uygun, özenle seçilmiş çocuk bakıcıları.",
        caregiver: "Sabır ve saygıyla, aile büyüklerinize hak ettikleri özenli ve güler yüzlü bakım.",
        cleaner: "Ev ya da ofis olsun; detaylı, güvenilir, düzenli ve titiz temizlik hizmeti.",
    },
    homepage: {
        heroTitle: "Hızlı değil, doğru adımlar. Çünkü vakit değerli.",
        heroSubtitle: "Bondlio ekibi olarak hem aileleri hem de emek ve tecrübelerini ortaya koyacak kişileri aynı özenle tanımaya çalışıyoruz. Çünkü doğru eşleşme, karşılıklı saygı ve anlayışla başlar.",
        heroCtaText: "İletişim",
        howItWorksTitle: "Nasıl Çalışıyoruz?",
        howItWorksSubtitle: "Süreç karmaşık değil. Ama her adımda, gerçekten yanınızdayız.",
        steps: [
            {
                number: "01",
                title: "Bize Ulaşın",
                description: "Kısa bir mesaj yeterli — WhatsApp'tan ya da formdan, ihtiyacınızı anlatın.",
            },
            {
                number: "02",
                title: "Tanışalım",
                description: "Sizi ve ihtiyacınızı gerçekten anlamak için görüşüyoruz. Standart bir form doldurmuyoruz.",
            },
            {
                number: "03",
                title: "Doğru Eşleşme",
                description: "Titizlikle incelediğimiz adaylar arasından, size en uygun olanı öneriyoruz.",
            },
            {
                number: "04",
                title: "Yanınızdayız",
                description: "Eşleşme sonrası da sürecin içindeyiz — bir sorun olursa, çözmek için buradayız.",
            },
        ],
        aboutQuote: "Sektörde onlarca ajans var, herkes 'bize güvenin' diyor. Biz bunu söylemek yerine, nasıl çalıştığımızı gösteriyoruz.",
        aboutCtaText: "Hikayemizi Okuyun",
        servicesPreviewTitle: "Hizmetlerimiz",
        servicesPreviewSubtitle: "İhtiyacınıza en uygun hizmeti seçin, birlikte karar verelim.",
        blogPreviewTitle: "Bilgi Defteri",
        blogPreviewSubtitle: "Bakım ve ev hizmetleri hakkında merak ettikleriniz.",
        valuePropsTitle: "Neden Bondlio?",
        valuePropsSubtitle: "Güven, titizlikle kurulur.",
        viewDetailsText: "Detaylı bilgi",
        values: [
            {
                title: "Titiz Değerlendirme",
                description: "Her aday, hem aile hem çalışan tarafında dikkatle incelenir. Kısayol yok, sadece güven.",
                icon: "check-shield",
            },
            {
                title: "Yasal Güvence",
                description: "Tüm süreçlerimiz eksiksiz yasal çerçevede yürütülür. Sürprizlerle değil, huzurla tanışın.",
                icon: "document",
            },
            {
                title: "İki Taraf, Tek Standart",
                description: "Aileleri de, evlere emek verecek kişileri de aynı özenle değerlendiririz.",
                icon: "handshake",
            },
        ],
    },

    about: {
        eyebrow: "Neden Bondlio?",
        title: "Kalite, kâr peşinde kaybolmamalı.",
        intro: "Bu sektörde birçok kuruluş, öncelikle hızlı ve çok eşleştirme yapmak üzerine kurulu — çünkü gelirleri buna bağlı. Biz bu yaklaşımın kaliteyi geride bıraktığını gördük. Bondlio'da amacımız sayı değil, doğru eşleşme. Bu yüzden adayları olduğu kadar işverenleri de titizlikle değerlendiriyoruz; çünkü güven, tek taraflı bir eleme ile kurulmaz.",
        features: [
            {
                title: "Herkesin standardı farklı.",
                description: "Aileler ve çalışanlar aynı değerlere, aynı beklentilere sahip değil. Biz bunu bir engel değil, eşleştirmenin temeli olarak görüyoruz — kime, kimin en uygun olduğunu anlamaya çalışıyoruz.",
            },
            {
                title: "Yanılabiliriz, ama kaçmayız.",
                description: "Hiçbir sistem mükemmel değildir. Bir şey yolunda gitmediğinde, sorunu en kısa sürede çözmek için çalışacağımızın sözünü veriyoruz.",
            },
            {
                title: "Adil ödeme, açık koşullar.",
                description: "Ücretlendirmemiz şeffaftır. Ne çalışanı ne de aileyi mağdur eden gizli koşullar yok.",
            },
        ],
        closingQuote: "Bondlio, her iki tarafı da önemser. Çünkü güven, kâr hesabından değil, doğru niyetten doğar.",
    },

    serviceProcess: {
        title: "Neyi Kontrol Ediyoruz?",
        subtitle: "Her aday, işe başlamadan önce aynı titiz süreçten geçer. Kısayol yok, sadece güven.",
    },

    footer: {
        tagline: "Aileleri ve evlerine emek verecek kişileri aynı özenle bir araya getiriyoruz.",
        quickLinks: "Hızlı Bağlantılar",
        contactTitle: "İletişim",
        privacyLabel: "Gizlilik Politikası",
        termsLabel: "Kullanım Koşulları",
        allRightsReserved: "Tüm hakları saklıdır.",
    },

    contactInfo: {
        phone: "+905327994090",
        phoneDisplay: "0 (532) 799 40 90",
        whatsapp: "905331614377",
        whatsappDisplay: "+90 533 161 43 77",
        whatsapp2: "905067709596",
        whatsappDisplay2: "+90 506 770 95 96",
    },

    serviceCta: {
        title: "Adım adım, birlikte ilerleyelim.",
        subtitle: "Doğru kişiyi bulmak zaman alabilir, doğru. Ancak yalnız değilsiniz. Dilerseniz WhatsApp'tan yazabilir ya da iletişim formunu doldurabilirsiniz.",
        whatsappText: "WhatsApp'tan Yazın",
        contactFormText: "İletişim Formu",
    },

    contactForm: {
        nameLabel: "Ad Soyad",
        emailLabel: "E-posta",
        phoneLabel: "Telefon",
        messageLabel: "Mesajınız",
        submitButton: "Gönder",
    },

};