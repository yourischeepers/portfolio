import {useHead} from "@unhead/vue";

export function setupSEO(title: string, description: string, image: string) {
    const pageImage = `${window.location.origin}${image.replace("./", "/")}`

    useHead({
        title: title,
        meta: [
            // Basic tags
            { name: "description", content: description},

            // Open Graph/Facebook tags
            { property: 'og:site_name', content: 'Youri Scheepers Portfolio' },
            { property: 'og:locale', content: 'en_US' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: pageImage },
            { property: 'og:url', content: window.location.href },

            // Twitter card tags
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: pageImage }
        ],
        link: [
            // Canonical URL for the page
            { rel: 'canonical', href: window.location.href },
        ]
    })
}
