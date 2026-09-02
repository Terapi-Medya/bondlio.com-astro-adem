import filipinliCocukBakicisi from "../assets/filipinli-cocuk-bakicisi.webp";
import filipinliYasliBakici from "../assets/filipinli-yasli-bakici.webp";
import filipinliTenizlikci from "../assets/filipinli-temizlikci.webp";
import type { Translation } from "../i18n/types";

export function getServices(content: Translation) {
    return [
        {
            title: content.nav.servicesDropdown.nanny,
            description: content.serviceDescriptions.nanny,
            href: content.routes.services.nanny,
            image: filipinliCocukBakicisi,
        },
        {
            title: content.nav.servicesDropdown.caregiver,
            description: content.serviceDescriptions.caregiver,
            href: content.routes.services.caregiver,
            image: filipinliYasliBakici,
        },
        {
            title: content.nav.servicesDropdown.cleaner,
            description: content.serviceDescriptions.cleaner,
            href: content.routes.services.cleaner,
            image: filipinliTenizlikci,
        },
    ];
}