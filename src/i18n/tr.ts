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
        thankYou: "/tesekkurler",
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
        heroTitle: "Hızlı değil, Doğru adımlar.",
        heroSubtitle: "Bondlio ekibi olarak hem aileleri hem de emek ve tecrübelerini ortaya koyacak kişileri aynı özenle tanımaya çalışıyoruz. Çünkü doğru eşleşme, karşılıklı saygı ve anlayışla başlar.",
        heroCtaText: "İletişim",
        howItWorksTitle: "Nasıl Çalışıyoruz?",
        howItWorksSubtitle: "Süreç karmaşık değil. Ama her adımda, gerçekten yanınızdayız.",
        steps: [
            {
                number: "01",
                title: "İhtiyaç Tespiti",
                description: "İhtiyacınızı tam anlamak adına <strong>İşveren İstek Formunu</strong> doldurun veya WhatsApp'tan kısa bir mesaj atın.",
            },
            {
                number: "02",
                title: "Tanışma ve Değerlendirme",
                description: "Sizi ve ihtiyacınızı gerçekten anlamak için görüşüyoruz. Form doldurmuşsanız, formu dikkatlice inceliyoruz.",
            },
            {
                number: "03",
                title: "Doğru Eşleşme",
                description: "Titizlikle incelediğimiz adaylar arasından, size en uygun adaları belirleyerek onayınıza sunuyoruz.",
            },
            {
                number: "04",
                title: "Süreç Takibi",
                description: "İşe yerleşme sonrasında da sürecin içindeyiz — bir sorun olursa birlikte, çözmek için çaba sarfediyoruz.",
            },
        ],
        aboutQuote: "Piyasada çok sayıda ajans var, çoğu 'bize güvenin, hallederiz' diyor. Farkındayız. Bu soruna çözüm olarak sadece 'lafta kalmayan' ama analitik yaklaşımlarla, belli bir matematiğe dayalı bilimsel tekniklerleri kullanan bir yaklaşımla hareket ediyoruz.",
        aboutCtaText: "Hikayemizi Okuyun",
        servicesPreviewTitle: "Hizmetlerimiz",
        servicesPreviewSubtitle: "İhtiyacınıza en uygun hizmeti seçin ve tarif edin, birlikte karar verelim.",
        blogPreviewTitle: "Bilgi Defteri",
        blogPreviewSubtitle: "Bakım, çocuk bakıcısı, temizlik, otel oda temizlikçileri, yabancı çalışanlar ve yaşlı bakıcıları hakkında merak ettikleriniz.",
        valuePropsTitle: "Neden Bondlio?",
        valuePropsSubtitle: "Güven, titizlikle kurulur.",
        viewDetailsText: "Detaylı bilgi",
        values: [
            {
                title: "Titiz Değerlendirme",
                description: "Her aday, hem aile hem de çalışanlar için dikkatle incelenir. Kısayol yok, sadece güvene öncelik veriyoruz.",
                icon: "check-shield",
            },
            {
                title: "Yasal Süreçler",
                description: "Tüm süreçlerimizi olabildiğince eksiksiz yasal çerçevede yürütüyoruz. Sürprizlerle karşılaşmayı inanın biz de istemiyoruz.",
                icon: "document",
            },
            {
                title: "İki Taraf, Tek Standart",
                description: "Adayları da, aileleri de aynı özenle değerlendiriyor ve doğru eşleştirme için elimizden geleni yapıyoruz.",
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
                title: "Herkesin standardı farklıdır.",
                description: "Aileler ve çalışanlar aynı değerlere, aynı beklentilere sahip değil. Biz bunu bir engel değil, eşleştirmenin temeli olarak görüyoruz — kime, kimin en uygun olduğunu anlamaya çalışıyoruz.",
            },
            {
                title: "Yanılabiliriz, ama kaçmayız.",
                description: "Hiçbir sistem mükemmel değildir. Bir şey yolunda gitmediğinde, sorunu en kısa sürede çözmek için çalışacağımızın sözünü veriyoruz.",
            },
            {
                title: "Adil ödeme, açık koşullar.",
                description: "Anlayışlı ödeme seçenekleri sunuyoruz. Ne çalışanı ne de aileyi mağdur eden gizli koşullar yok.",
            },
        ],
        closingQuote: "Bondlio, her iki tarafı da önemser. Çünkü güven, kâr hesabından değil, doğru niyetten doğar.",
    },

    serviceProcess: {
        title: "Güvenlik, Bizim İçin Kısayol Değildir.",
        subtitle: "Adayların referanslarını titizlikle kontrol ediyoruz. Çıkarılan her sonuç, hem aileler hem de bakıcılar için daha güvenli bir zemin oluşturuyor.",
    },

    footer: {
        tagline: "Aileleri ve evlerine emek verecek kişileri aynı özenle bir araya getiriyoruz.",
        quickLinks: "Hızlı Bağlantılar",
        contactTitle: "İletişim",
        privacyLabel: "Gizlilik Politikası",
        termsLabel: "Kullanım Koşulları",
        allRightsReserved: "Tüm hakları saklıdır.",
        iskurNotice: "Bu firma, Türkiye İş Kurumunun 28.08.2026 tarih ve 21385534 sayılı oluru ile 2023 izin numaralı özel istihdam bürosu olarak faaliyet göstermektedir. 4904 sayılı Türkiye İş Kanunu gereğince iş arayanlardan menfaat sağlanması ve ücret alınması yasaktır. Şikayetleriniz için Ankara Çalışma ve İş Kurumu İl Müdürlüğüne başvurabilirsiniz.",
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


    homeForms: {
        employerTitle: "İşveren Bilgi Formu",
        employerDescription: "Size en uygun eşleşmeyi <strong>doğru ve hızlı</strong> şekilde önerebilmemiz için, İşveren Formu'nu mümkün olduğunca eksiksiz doldurmanız çok önemli. <strong>Vereceğiniz her detay</strong>, sürecin size özel, isabetli ilerlemesini sağlar — lütfen aceleye getirmeyin.",
        applicantTitle: "Çalışan Bilgi Formu",
        applicantDescription: "Sizi doğru aileyle buluşturabilmemiz için, Başvuru Formu'nu özenle ve eksiksiz doldurmanız gerçekten fark yaratıyor. <strong>Paylaştığınız her bilgi</strong>, hem sizin hem de ailenin birbirini doğru tanımasını sağlıyor — lütfen zaman ayırın.",
        formEmployerLabel: "İşveren Bilgi Formu",
        formApplicantLabel: "Aday Başvuru Formu",
    },

    thankYou: {
        title: "Teşekkürler!",
        message: "Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız.",
        backToHomeText: "Anasayfaya Dön",
    },

};