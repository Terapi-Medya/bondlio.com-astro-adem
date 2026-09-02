import type { Translation } from "./types";

export const tl: Translation = {
    routes: {
        home: "/tl",
        about: "/tl/tungkol-sa-amin",
        services: {
            index: "/tl/serbisyo",
            nanny: "/tl/serbisyo/yaya",
            caregiver: "/tl/serbisyo/tagapag-alaga",
            cleaner: "/tl/serbisyo/tagalinis",
        },
        infobook: "/tl/aklat-ng-kaalaman",
        contact: "/tl/makipag-ugnayan",
        privacy: "/tl/patakaran-sa-privacy",
        terms: "/tl/mga-tuntunin-ng-paggamit",
    },
    nav: {
        home: "Simula",
        about: "Tungkol Sa Amin",
        services: "Mga Serbisyo",
        servicesDropdown: {
            nanny: "Yaya",
            caregiver: "Tagapag-alaga",
            cleaner: "Tagalinis",
        },
        infobook: "Aklat ng Kaalaman",
        contact: "Makipag-ugnayan",
        getQuote: "Kumuha ng Quote",
    },
    serviceDescriptions: {
        nanny: "Maingat na piniling mga yaya, na akma sa natatanging ritmo at pangangailangan ng iyong pamilya.",
        caregiver: "Maawain at may paggalang na pag-aalaga para sa iyong mga nakatatandang mahal sa buhay, na tinitiyak ang kanilang kaginhawahan at dignidad.",
        cleaner: "Mapagkakatiwalaan at masusing mga serbisyo sa paglilinis para sa iyong tahanan o opisina, na nag-iiwan itong kumikinang sa kalinisan.",
    },
    homepage: {
        heroTitle: "Hindi mabilisan, kundi tama. Dahil mahalaga ang oras.",
        heroSubtitle:
            "Kami sa Bondlio, kagaya ng pag-aalaga, ay matiyagang kinikilala ang parehong pamilya at ang mga taong nag-aambag ng kanilang pagod at karanasan. Sapagkat ang tamang pagtutugma ay nagsisimula sa respeto at pag-unawa.",
        heroCtaText: "Makipag-ugnayan",
        howItWorksTitle: "Paano Kami Gumagana",
        howItWorksSubtitle: "Hindi komplikado ang proseso. Pero sa bawat hakbang, kasama ninyo kami.",
        steps: [
            {
                number: "01",
                title: "Makipag-ugnayan",
                description: "Sapat na ang maikling mensahe — sa WhatsApp o sa aming form, ikwento ang inyong pangangailangan.",
            },
            {
                number: "02",
                title: "Mag-usap Tayo",
                description: "Kinikilala namin kayo at ang inyong pangangailangan — hindi lang basta pagsagot sa isang form.",
            },
            {
                number: "03",
                title: "Ang Tamang Tugma",
                description: "Mula sa aming maingat na sinuri na mga kandidato, irerekomenda namin ang pinakaakma para sa inyo.",
            },
            {
                number: "04",
                title: "Kasama Ninyo Kami",
                description: "Hindi kami mawawala pagkatapos ng tugma — kung may lumabas na problema, narito kami para tumulong.",
            },
        ],
        aboutQuote: "Maraming ahensya diyan, at lahat sila ay nagsasabing 'magtiwala kayo sa amin.' Mas gusto naming ipakita kung paano kami talaga gumagana.",
        aboutCtaText: "Basahin ang Aming Kwento",
        servicesPreviewTitle: "Mga Serbisyo",
        servicesPreviewSubtitle: "Piliin ang serbisyong pinakaangkop sa inyong pangangailangan, at magdesisyon tayo nang magkasama.",
        blogPreviewTitle: "Aklat ng Kaalaman",
        blogPreviewSubtitle: "Lahat ng kailangan ninyong malaman tungkol sa serbisyong pambahay at pangangalaga.",
        valuePropsTitle: "Bakit Kami ang Piliin?",
        valuePropsSubtitle: "Ang tiwala ay nabubuo sa pag-aalaga.",
        viewDetailsText: "Mga Detalye",
        values: [
            {
                title: "Maingat na Pagsusuri",
                description: "Ang bawat kandidato ay maingat na sinusuri sa magkabilang panig — pamilya at manggagawa. Walang shortcut, tiwala lang.",
                icon: "check-shield",
            },
            {
                title: "Legal na Kasiguruhan",
                description: "Lahat ng proseso ay ginagawa sa loob ng buong legal na balangkas. Makipagkilala sa amin nang payapa, hindi may sorpresa.",
                icon: "document",
            },
            {
                title: "Dalawang Panig, Iisang Pamantayan",
                description: "Sinusuri namin ang mga pamilya nang may parehong ingat na ibinibigay namin sa mga taong nagdadala ng kanilang paggawa sa kanilang tahanan.",
                icon: "handshake",
            },
        ],
    },

    about: {
        eyebrow: "Bakit Bondlio?",
        title: "Ang kalidad ay hindi dapat mawala sa paghahabol ng tubo.",
        intro: "Maraming organisasyon sa sektor na ito ang pangunahing nakatuon sa paggawa ng mabilis at maraming pagtutugma — dahil doon nakasalalay ang kanilang kita. Nakita namin na ang pamamaraang ito ay nag-iiwan ng kalidad sa likod. Sa Bondlio, ang layunin namin ay hindi mga numero, kundi tamang pagtutugma. Kaya't sinusuri namin ang mga kandidato nang kasing-ingat ng mga employer, dahil ang tiwala ay hindi nabubuo sa one-sided elimination.",
        features: [
            {
                title: "Magkakaiba ang pamantayan ng bawat isa.",
                description: "Ang mga pamilya at manggagawa ay hindi laging nagbabahagi ng parehong mga halaga o inaasahan. Hindi namin ito nakikita bilang hadlang, kundi bilang pundasyon ng pagtutugma — sinusubukan naming malaman kung sino ang pinakamahusay na katugma para kanino.",
            },
            {
                title: "Maaaring magkamali, pero hindi kami tatakbo.",
                description: "Walang sistema ang perpekto. Kapag may hindi naging maayos, nangangako kaming magsisikap na lutasin ang isyu sa lalong madaling panahon.",
            },
            {
                title: "Patas na bayad, malinaw na mga tuntunin.",
                description: "Ang aming pagpepresyo ay malinaw. Walang mga nakatagong kondisyon na makapagpapahirap sa empleyado o sa pamilya.",
            },
        ],
        closingQuote: "Ang Bondlio ay nagmamalasakit sa magkabilang panig. Dahil ang tiwala ay hindi ipinanganak mula sa pagbibilang ng tubo, kundi mula sa tamang intensyon.",
    },

    serviceProcess: {
        title: "Ano ang Sinusuri Namin?",
        subtitle: "Lahat ng kandidato ay sumasailalim sa parehong masusing proseso bago magsimula. Walang shortcut — tanging tiwala lamang.",
    },

    footer: {
        tagline: "Pinagsasama-sama ang mga pamilya at ang mga taong nagbibigay ng kanilang serbisyo nang may pag-iingat.",
        quickLinks: "Mga Mabilisang Link",
        contactTitle: "Makipag-ugnayan",
        privacyLabel: "Patakaran sa Privacy",
        termsLabel: "Mga Tuntunin ng Paggamit",
        allRightsReserved: "Lahat ng karapatan ay nakalaan.",
    },

    contactInfo: {
        phone: "+905067709596",
        phoneDisplay: "0 (506) 770 95 96",
        whatsapp: "905067709596",
        whatsappDisplay: "+90 506 770 95 96",
        whatsapp2: "905331614377",
        whatsappDisplay2: "+90 533 161 43 77",
    },

    serviceCta: {
        title: " Hakbang-hakbang, sama-sama tayong magpatuloy.",
        subtitle: "Ang paghahanap ng tamang tao ay maaaring tumagal ng panahon, ngunit hindi ka nag-iisa. Ang unang hakbang ay isang mensahe lang.",
        whatsappText: "Makipag-ugnayan sa WhatsApp",
        contactFormText: "Porma ng Kontak",
    },

    contactForm: {
        nameLabel: "Buong Pangalan",
        emailLabel: "Email",
        phoneLabel: "Telepono",
        messageLabel: "Ang Iyong Mensahe",
        submitButton: "Ipadala",
    },

};