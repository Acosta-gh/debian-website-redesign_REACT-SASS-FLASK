// src/i18n/Translations.jsx

export const translations = {
    header: {
        home: { en: "HOME", es: "INICIO", fr: "ACCUEIL", pt: "INÍCIO", "zh-Hans": "主页", "zh-Hant": "首頁" },
        getDebian: { en: "GET DEBIAN", es: "OBTENER DEBIAN", fr: "OBTENIR DEBIAN", pt: "OBTER DEBIAN", "zh-Hans": "获取 DEBIAN", "zh-Hant": "獲取 DEBIAN" },
        aboutUs: { en: "ABOUT US", es: "SOBRE NOSOTROS", fr: "À PROPOS", pt: "SOBRE NÓS", "zh-Hans": "关于我们", "zh-Hant": "關於我們" },
        events: { en: "EVENTS", es: "EVENTOS", fr: "ÉVÉNEMENTS", pt: "EVENTOS", "zh-Hans": "活动", "zh-Hant": "活動" },
        donate: { en: "DONATE", es: "DONAR", fr: "FAIRE UN DON", pt: "DOAR", "zh-Hans": "捐赠", "zh-Hant": "捐贈" },
        language: { en: "Language", es: "Idioma", fr: "Langue", pt: "Idioma", "zh-Hans": "语言", "zh-Hant": "語言" },
    },
    footer: {
        copyright: {
            en: `Copyright © 1997-${new Date().getFullYear()} SPI and others;`,
            es: `Derechos de autor © 1997-${new Date().getFullYear()} SPI y otros;`,
            fr: `Droits d'auteur © 1997-${new Date().getFullYear()} SPI et autres;`,
            pt: `Copyright © 1997-${new Date().getFullYear()} SPI e outros;`,
            "zh-Hans": `版权 © 1997-${new Date().getFullYear()} SPI 等；`,
            "zh-Hant": `版權 © 1997-${new Date().getFullYear()} SPI 等；`
        },
        license: {
            en: `See license terms`,
            es: `Ver términos de la licencia`,
            fr: `Voir les termes de la licence`,
            pt: `Veja os termos da licença`,
            "zh-Hans": `查看许可条款`,
            "zh-Hant": `查看許可條款`
        },
        aboutUs: {
            en: "About Us",
            es: "Sobre Nosotros",
            fr: "À Propos",
            pt: "Sobre Nós",
            "zh-Hans": "关于我们",
            "zh-Hant": "關於我們"
        },
        events: {
            en: "Events",
            es: "Eventos",
            fr: "Événements",
            pt: "Eventos",
            "zh-Hans": "活动",
            "zh-Hant": "活動"
        },
        donate: {
            en: "Donate",
            es: "Donar",
            fr: "Faire un Don",
            pt: "Doar",
            "zh-Hans": "捐赠",
            "zh-Hant": "捐贈"
        },
        trademark: {
            en: "Debian is a registered trademark of Software in the Public Interest, Inc.",
            es: "Debian es una marca registrada de Software in the Public Interest, Inc.",
            fr: "Debian est une marque déposée de Software in the Public Interest, Inc.",
            pt: "Debian é uma marca registrada da Software in the Public Interest, Inc.",
            "zh-Hans": "Debian 是 Software in the Public Interest, Inc. 的注册商标。",
            "zh-Hant": "Debian 是 Software in the Public Interest, Inc. 的註冊商標。"
        },
    },
    noPage:
    {
        notFound: {
            en: "404 - Page Not Found",
            es: "404 - Página No Encontrada",
            fr: "404 - Page Non Trouvée",
            pt: "404 - Página Não Encontrada",
            "zh-Hans": "404 - 页面未找到",
            "zh-Hant": "404 - 页面未找到"
        },
        sorryMessage: {
            en: "Sorry, the page you are looking for does not exist.",
            es: "Lo sentimos, la página que buscas no existe.",
            fr: "Désolé, la page que vous cherchez n'existe pas.",
            pt: "Desculpe, a página que você está procurando não existe.",
            "zh-Hans": "抱歉，您要找的页面不存在。",
            "zh-Hant": "抱歉，您要找的頁面不存在。"
        }
    },
    introSection: {
        subtitle: {
            en: "The Universal Operating System",
            es: "El Sistema Operativo Universal",
            fr: "Le Système d'Exploitation Universel",
            pt: "O Sistema Operacional Universal",
            "zh-Hans": "通用操作系统",
            "zh-Hant": "通用操作系統"
        },
        descriptions: {
            en: [
                "is Free Software.",
                "is stable and secure.",
                "has extensive Hardware Support.",
                "offers a flexible Installer.",
                "provides smooth Upgrades.",
                "is the Base for many other Distributions.",
                "is a Community."
            ],
            es: [
                "es Software Libre.",
                "es estable y seguro.",
                "tiene un amplio soporte de hardware.",
                "ofrece un instalador flexible.",
                "proporciona actualizaciones suaves.",
                "es la base para muchas otras distribuciones.",
                "es una comunidad."
            ],
            fr: [
                "est un logiciel libre.",
                "est stable et sécurisé.",
                "dispose d'un support matériel étendu.",
                "offre un installateur flexible.",
                "fournit des mises à jour fluides.",
                "est la base de nombreuses autres distributions.",
                "est une communauté."
            ],
            pt: [
                "é Software Livre.",
                "é estável e seguro.",
                "tem amplo suporte de hardware.",
                "oferece um instalador flexível.",
                "fornece atualizações suaves.",
                "é a base para muitas outras distribuições.",
                "é uma comunidade."
            ],
            "zh-Hans": [
                "是自由软件。",
                "是稳定和安全的。",
                "具有广泛的硬件支持。",
                "提供灵活的安装程序。",
                "提供顺畅的升级。",
                "是许多其他发行版的基础。",
                "是一个社区。"
            ],
            "zh-Hant": [
                "是自由軟體。",
                "是穩定和安全的。",
                "具有廣泛的硬體支援。",
                "提供靈活的安裝程式。",
                "提供順暢的升級。",
                "是許多其他發行版的基礎。",
                "是一個社區。"
            ]
        },
        tryDebian: {
            en: "Try Debian Live",
            es: "Prueba Debian Live",
            fr: "Essayez Debian Live",
            pt: "Experimente o Debian Live",
            "zh-Hans": "试用 Debian Live",
            "zh-Hant": "試用 Debian Live"
        },
        learnMore: {
            en: "Learn More",
            es: "Aprende Más",
            fr: "En savoir plus",
            pt: "Saiba Mais",
            "zh-Hans": "了解更多",
            "zh-Hant": "了解更多"
        }
    },
    newsSection: {
        title:
        {
            en: "What's new in Debian 12",
            es: "Novedades en Debian 12",
            fr: "Quoi de neuf dans Debian 12",
            pt: "O que há de novo no Debian 12",
            "zh-Hans": "Debian 12 有什么新变化",
            "zh-Hant": "Debian 12 有什麼新變化"
        },
        paragraph:
        {
            en: "The new release of Debian includes significantly more software than its predecessor, Bullseye, with over 11,089 new packages, bringing the total to over 64,419 packages. More than 43,254 packages have been updated, which accounts for 67% of all packages in Bullseye. Additionally, over 6,296 packages (10% of those in Bullseye) have been removed for various reasons, and these will be marked as 'obsolete' in package management front-ends.",
            es: "La nueva versión de Debian incluye significativamente más software que su predecesor, Bullseye, con más de 11,089 nuevos paquetes, llevando el total a más de 64,419 paquetes. Más de 43,254 paquetes han sido actualizados, lo que representa el 67% de todos los paquetes en Bullseye. Además, más de 6,296 paquetes (10% de los de Bullseye) han sido eliminados por diversas razones, y estos serán marcados como 'obsoletos' en las interfaces de gestión de paquetes.",
            fr: "La nouvelle version de Debian inclut significativement plus de logiciels que son prédécesseur, Bullseye, avec plus de 11 089 nouveaux paquets, portant le total à plus de 64 419 paquets. Plus de 43 254 paquets ont été mis à jour, ce qui représente 67 % de tous les paquets dans Bullseye. De plus, plus de 6 296 paquets (10 % de ceux de Bullseye) ont été supprimés pour diverses raisons, et ceux-ci seront marqués comme 'obsolètes' dans les interfaces de gestion des paquets.",
            pt: "A nova versão do Debian inclui significativamente mais software do que seu predecessor, Bullseye, com mais de 11.089 novos pacotes, totalizando mais de 64.419 pacotes. Mais de 43.254 pacotes foram atualizados, o que representa 67% de todos os pacotes no Bullseye. Além disso, mais de 6.296 pacotes (10% dos do Bullseye) foram removidos por várias razões, e estes serão marcados como 'obsoletos' nas interfaces de gerenciamento de pacotes.",
            "zh-Hans": "Debian的新版本包含比其前身Bullseye显著更多的软件，超过11,089个新软件包，总数超过64,419个软件包。超过43,254个软件包已被更新，占Bullseye中所有软件包的67%。此外，超过6,296个软件包（Bullseye中的10%）因各种原因被删除，这些软件包将在软件包管理前端标记为“过时”。",
            "zh-Hant": "Debian的新版本包含比其前身Bullseye顯著更多的軟體，超過11,089個新軟體包，總數超過64,419個軟體包。超過43,254個軟體包已被更新，佔Bullseye中所有軟體包的67%。此外，超過6,296個軟體包（Bullseye中的10%）因各種原因被刪除，這些軟體包將在軟體包管理前端標記為「過時」。"
        },
        newsCard: [
            {
                title: {
                    en: "Updated Debian 12: 12.9 released",
                    es: "Actualización de Debian 12: Se lanzó la versión 12.9",
                    fr: "Mise à jour Debian 12: 12.9 publiée",
                    pt: "Atualização do Debian 12: 12.9 lançada",
                    "zh-Hans": "Debian 12 更新：12.9 版本发布",
                    "zh-Hant": "Debian 12 更新：12.9 版本發佈"
                },
                description: {
                    en: "The Debian project is pleased to announce the ninth update...",
                    es: "El proyecto Debian se complace en anunciar la novena actualización...",
                    fr: "Le projet Debian est heureux d'annoncer la neuvième mise à jour...",
                    pt: "O projeto Debian tem o prazer de anunciar a nona atualização...",
                    "zh-Hans": "Debian项目很高兴宣布第九次更新...",
                    "zh-Hant": "Debian項目很高興宣佈第九次更新..."
                },
                image: "image1.jpeg",
                date: {
                    en: "January 11th, 2025",
                    es: "11 de enero de 2025",
                    fr: "11 janvier 2025",
                    pt: "11 de janeiro de 2025",
                    "zh-Hans": "2025年1月11日",
                    "zh-Hant": "2025年1月11日"
                }
            },
            {
                title: {
                    en: "Updated Debian 11: 11.11 released",
                    es: "Actualización de Debian 11: Se lanzó la versión 11.11",
                    fr: "Mise à jour Debian 11: 11.11 publiée",
                    pt: "Atualização do Debian 11: 11.11 lançada",
                    "zh-Hans": "Debian 11 更新：11.11 版本发布",
                    "zh-Hant": "Debian 11 更新：11.11 版本發佈"
                },
                description: {
                    en: "The Debian project is pleased to announce the eleventh and final update...",
                    es: "El proyecto Debian se complace en anunciar la undécima y última actualización...",
                    fr: "Le projet Debian est heureux d'annoncer la onzième et dernière mise à jour...",
                    pt: "O projeto Debian tem o prazer de anunciar a décima primeira e última atualização...",
                    "zh-Hans": "Debian项目很高兴宣布第十一版的最终更新...",
                    "zh-Hant": "Debian項目很高興宣佈第十一版的最終更新..."
                },
                image: "image2.jpg",
                date: {
                    en: "August 31st, 2024",
                    es: "31 de agosto de 2024",
                    fr: "31 août 2024",
                    pt: "31 de agosto de 2024",
                    "zh-Hans": "2024年8月31日",
                    "zh-Hant": "2024年8月31日"
                }
            },
            {
                title: {
                    en: "Security support for Bullseye handed over to the LTS team",
                    es: "El soporte de seguridad de Bullseye pasó al equipo de LTS",
                    fr: "Le support de sécurité de Bullseye est confié à l'équipe LTS",
                    pt: "O suporte de segurança do Bullseye foi transferido para a equipe LTS",
                    "zh-Hans": "Bullseye的安全支持已交给LTS团队",
                    "zh-Hant": "Bullseye的安全支持已交給LTS團隊"
                },
                description: {
                    en: "As of 14 August 2024, three years after the initial release...",
                    es: "A partir del 14 de agosto de 2024, tres años después del lanzamiento inicial...",
                    fr: "À partir du 14 août 2024, trois ans après la sortie initiale...",
                    pt: "A partir de 14 de agosto de 2024, três anos após o lançamento inicial...",
                    "zh-Hans": "自2024年8月14日起，距最初发布三年后...",
                    "zh-Hant": "自2024年8月14日起，距最初發佈三年後..."
                },
                image: "image3.png",
                date: {
                    en: "August 14th, 2024",
                    es: "14 de agosto de 2024",
                    fr: "14 août 2024",
                    pt: "14 de agosto de 2024",
                    "zh-Hans": "2024年8月14日",
                    "zh-Hant": "2024年8月14日"
                }
            }
        ]

    },
    performanceSection: {
        title_speed: {
            en: "More Speed",
            es: "Más velocidad",
            fr: "Plus de rapidité",
            pt: "Mais velocidade",
            "zh-Hans": "更快的速度",
            "zh-Hant": "更快的速度"
        },
        paragraph_speed: {
            en: "Your computer should work as fast as you do. Debian runs lightning quick and doesn't slow down over time. Apps open fast, so you can spend more time being productive.",
            es: "Tu computadora debería funcionar tan rápido como tú. Debian es extremadamente rápido y no se ralentiza con el tiempo. Las aplicaciones se abren rápidamente, para que puedas ser más productivo.",
            fr: "Votre ordinateur doit fonctionner aussi vite que vous. Debian est ultra-rapide et ne ralentit pas avec le temps. Les applications s'ouvrent rapidement, vous permettant d'être plus productif.",
            pt: "Seu computador deve funcionar tão rápido quanto você. O Debian é extremamente rápido e não desacelera com o tempo. Os aplicativos abrem rapidamente, permitindo que você seja mais produtivo.",
            "zh-Hans": "您的电脑应该像您一样快速运行。Debian 运行极快，且不会随着时间推移变慢。应用程序打开迅速，让您有更多时间提高生产力。",
            "zh-Hant": "您的電腦應該像您一樣快速運行。Debian 運行極快，且不會隨著時間推移變慢。應用程式打開迅速，讓您有更多時間提高生產力。"
        },
        title_green: {
            en: "Revive your old PC. Help the planet.",
            es: "Revive tu vieja PC. Ayuda al planeta.",
            fr: "Redonnez vie à votre ancien PC. Aidez la planète.",
            pt: "Reviva seu velho PC. Ajude o planeta.",
            "zh-Hans": "拯救你的旧电脑。拯救地球。",
            "zh-Hant": "拯救你的舊電腦。拯救地球。"
        },
        paragraph_green: {
            en: "We've streamlined Debian to work on computers as old as 15 years. Keep using your PC for longer to save money on upgrades and reduce e-waste to save the environment.",
            es: "Hemos optimizado Debian para que funcione en computadoras de hasta 15 años de antigüedad. Sigue usando tu PC por más tiempo para ahorrar dinero en actualizaciones y reducir los desechos electrónicos, ayudando al medio ambiente.",
            fr: "Nous avons optimisé Debian pour fonctionner sur des ordinateurs vieux de 15 ans. Continuez à utiliser votre PC plus longtemps pour économiser sur les mises à niveau et réduire les déchets électroniques afin de préserver l'environnement.",
            pt: "Otimizamos o Debian para rodar em computadores com até 15 anos de idade. Continue usando seu PC por mais tempo para economizar dinheiro com upgrades e reduzir o lixo eletrônico, ajudando o meio ambiente.",
            "zh-Hans": "我们已优化 Debian，使其能在长达 15 年的旧电脑上运行。继续使用您的电脑更长时间，以节省升级成本并减少电子垃圾，保护环境。",
            "zh-Hant": "我們已優化 Debian，使其能在長達 15 年的舊電腦上運行。繼續使用您的電腦更長時間，以節省升級成本並減少電子垃圾，保護環境。"
        }
    },
    fossSection: {
        intro: {
            title: {
                en: "Everything We Do is Open Source",
                es: "Todo lo que hacemos es Open Source",
                fr: "Tout ce que nous faisons est open source",
                pt: "Tudo o que fazemos é Open Source",
                "zh-Hans": "我们所做的一切都是开源的",
                "zh-Hant": "我們所做的一切都是開源的"
            },
            description: {
                en: "Our platform itself is entirely open source, and it’s built upon a strong foundation of Free & Open Source software (like GNU/Linux). Plus, we actively collaborate within the ecosystem to improve it for everyone.",
                es: "Nuestra plataforma es completamente de código abierto y está construida sobre una base sólida de software libre y de código abierto (como GNU/Linux). Además, colaboramos activamente dentro del ecosistema para mejorarlo para todos.",
                fr: "Notre plateforme elle-même est entièrement open source et repose sur une base solide de logiciels libres et open source (comme GNU/Linux). De plus, nous collaborons activement au sein de l'écosystème pour l'améliorer pour tout le monde.",
                pt: "Nossa plataforma é totalmente open source e construída sobre uma base sólida de software livre e de código aberto (como GNU/Linux). Além disso, colaboramos ativamente dentro do ecossistema para melhorá-lo para todos.",
                "zh-Hans": "我们的平台完全开源，基于强大的自由和开源软件（如 GNU/Linux）。此外，我们积极在生态系统中合作，以改进它并惠及所有人。",
                "zh-Hant": "我們的平台完全開源，基於強大的自由和開源軟體（如 GNU/Linux）。此外，我們積極在生態系統中合作，以改進它並惠及所有人。"
            },
            link: {
                en: "Explore Our Stack",
                es: "Explora nuestra pila",
                fr: "Explorez notre pile",
                pt: "Explore nossa stack",
                "zh-Hans": "探索我们的技术栈",
                "zh-Hant": "探索我們的技術棧"
            }
        },
        features: {
            title: {
                en: "Secure & Privacy-respecting",
                es: "Seguro y respetuoso con la privacidad",
                fr: "Sécurisé et respectueux de la vie privée",
                pt: "Seguro e respeitoso com a privacidade",
                "zh-Hans": "安全且尊重隐私",
                "zh-Hant": "安全且尊重隱私"
            },
            description: {
                en: "When source code is available to audit, anyone—a security researcher, a concerned user, or an OEM shipping the OS on their hardware—can verify that the software is secure and not collecting or leaking personal information.",
                es: "Cuando el código fuente está disponible para auditoría, cualquier persona —un investigador de seguridad, un usuario preocupado o un fabricante de hardware que distribuye el sistema operativo— puede verificar que el software es seguro y no recopila ni filtra información personal.",
                fr: "Lorsque le code source est disponible pour audit, n'importe qui — un chercheur en sécurité, un utilisateur soucieux ou un fabricant distribuant l'OS sur son matériel — peut vérifier que le logiciel est sécurisé et ne collecte ni ne divulgue d'informations personnelles.",
                pt: "Quando o código-fonte está disponível para auditoria, qualquer pessoa — um pesquisador de segurança, um usuário preocupado ou um fabricante de hardware que distribui o sistema operacional — pode verificar que o software é seguro e não coleta nem vaza informações pessoais.",
                "zh-Hans": "当源代码可供审计时，任何人——安全研究员、关心隐私的用户或在其硬件上预装操作系统的 OEM——都可以验证软件的安全性，确保它不会收集或泄露个人信息。",
                "zh-Hant": "當源代碼可供審計時，任何人——安全研究員、關心隱私的用戶或在其硬體上預裝操作系統的 OEM——都可以驗證軟體的安全性，確保它不會收集或洩露個人資訊。"
            },
            link: {
                en: "Security Notices",
                es: "Avisos de seguridad",
                fr: "Avis de sécurité",
                pt: "Avisos de segurança",
                "zh-Hans": "安全公告",
                "zh-Hant": "安全公告"
            }
        },
        feature: {
            title: {
                en: "Built for Developers",
                es: "Creado para desarrolladores",
                fr: "Conçu pour les développeurs",
                pt: "Feito para desenvolvedores",
                "zh-Hans": "为开发者打造",
                "zh-Hant": "為開發者打造"
            },
            description: {
                en: "Whether your app could benefit from a new system feature or API or you’re curious as to how an existing feature or design pattern was built, you have complete access to our source code. Copy it, learn from it, remix it, modify it, and redistribute it.",
                es: "Ya sea que tu aplicación pueda beneficiarse de una nueva característica del sistema o API, o tengas curiosidad por saber cómo se creó una función o patrón de diseño existente, tienes acceso completo a nuestro código fuente. Cópialo, apréndelo, modifícalo y redistribúyelo.",
                fr: "Que votre application puisse bénéficier d'une nouvelle fonctionnalité système ou d'une API, ou que vous soyez curieux de savoir comment une fonctionnalité ou un modèle de conception existant a été construit, vous avez un accès complet à notre code source. Copiez-le, apprenez-en, modifiez-le et redistribuez-le.",
                pt: "Seja para aproveitar um novo recurso do sistema ou API ou apenas para entender como um recurso existente foi construído, você tem acesso total ao nosso código-fonte. Copie, aprenda, modifique e redistribua.",
                "zh-Hans": "无论您的应用是否需要新的系统功能或 API，或者您只是想了解现有功能或设计模式是如何构建的，您都可以完全访问我们的源代码。复制它，学习它，修改它，并重新分发它。",
                "zh-Hant": "無論您的應用程式是否需要新的系統功能或 API，或者您只是想了解現有功能或設計模式是如何構建的，您都可以完全訪問我們的源代碼。複製它，學習它，修改它，並重新分發它。"
            },
            link: {
                en: "Get Involved",
                es: "Involúcrate",
                fr: "Impliquez-vous",
                pt: "Participe",
                "zh-Hans": "加入我们",
                "zh-Hant": "加入我們"
            }
        }
    },
    faqSection: {
        title: {
            en: "Frequently asked questions.",
            es: "Preguntas frecuentes.",
            fr: "Questions fréquemment posées.",
            pt: "Perguntas frequentes.",
            "zh-Hans": "常见问题。",
            "zh-Hant": "常見問題。"
        },
        faqs: [
            {
                question: {
                    en: "Is it free?",
                    es: "¿Es gratuito?",
                    fr: "Est-ce gratuit?",
                    pt: "É gratuito?",
                    "zh-Hans": "它是免费的吗？",
                    "zh-Hant": "它是免費的嗎？"
                },
                answer: {
                    en: "Yes, Debian is completely free of charge. Almost everything in Debian is also open-source.",
                    es: "Sí, Debian es completamente gratuito. Casi todo en Debian también es de código abierto.",
                    fr: "Oui, Debian est entièrement gratuit. Presque tout dans Debian est également open-source.",
                    pt: "Sim, o Debian é totalmente gratuito. Quase tudo no Debian também é open-source.",
                    "zh-Hans": "是的，Debian完全免费。几乎所有的Debian软件都是开源的。",
                    "zh-Hant": "是的，Debian完全免費。幾乎所有的Debian軟件都是開源的。"
                }
            },
            {
                question: {
                    en: "Will it work on my computer?",
                    es: "¿Funcionará en mi computadora?",
                    fr: "Est-ce que ça fonctionnera sur mon ordinateur?",
                    pt: "Funcionará no meu computador?",
                    "zh-Hans": "它能在我的电脑上运行吗？",
                    "zh-Hant": "它能在我的電腦上運行嗎？"
                },
                answer: {
                    en: "Yes, Debian works on most computers. It can also be run from a live USB stick to make sure everything works fine without having to install anything.",
                    es: "Sí, Debian funciona en la mayoría de las computadoras. También se puede ejecutar desde una memoria USB en vivo para asegurarse de que todo funcione sin tener que instalar nada.",
                    fr: "Oui, Debian fonctionne sur la plupart des ordinateurs. Il peut également être exécuté à partir d'une clé USB live pour s'assurer que tout fonctionne sans avoir à installer quoi que ce soit.",
                    pt: "Sim, o Debian funciona na maioria dos computadores. Ele também pode ser executado a partir de um pendrive live para garantir que tudo funcione sem precisar instalar nada.",
                    "zh-Hans": "是的，Debian可以在大多数计算机上运行。它还可以从USB启动，而无需安装。",
                    "zh-Hant": "是的，Debian可以在大多數計算機上運行。它還可以從USB啟動，而無需安裝。"
                }
            },
            {
                question: {
                    en: "Can I keep Windows?",
                    es: "¿Puedo conservar Windows?",
                    fr: "Puis-je garder Windows?",
                    pt: "Posso manter o Windows?",
                    "zh-Hans": "我可以保留 Windows 吗？",
                    "zh-Hant": "我可以保留 Windows 嗎？"
                },
                answer: {
                    en: "Yes, you can have both Windows and Debian. A menu asks you which one to use when you start the computer.",
                    es: "Sí, puedes tener tanto Windows como Debian. Un menú te preguntará cuál usar cuando inicies la computadora.",
                    fr: "Oui, vous pouvez avoir à la fois Windows et Debian. Un menu vous demandera lequel utiliser lorsque vous démarrez l'ordinateur.",
                    pt: "Sim, você pode ter tanto o Windows quanto o Debian. Um menu perguntará qual usar ao iniciar o computador.",
                    "zh-Hans": "是的，您可以同时安装 Windows 和 Debian。启动计算机时，菜单会询问您要使用哪个系统。",
                    "zh-Hant": "是的，您可以同時安裝 Windows 和 Debian。啟動計算機時，菜單會詢問您要使用哪個系統。"
                }
            },
            {
                question: {
                    en: "Will it suit my needs?",
                    es: "¿Se ajustará a mis necesidades?",
                    fr: "Répondra-t-il à mes besoins?",
                    pt: "Vai atender às minhas necessidades?",
                    "zh-Hans": "它能满足我的需求吗？",
                    "zh-Hant": "它能滿足我的需求嗎？"
                },
                answer: {
                    en: "Hopefully. Debian comes with what most people need out of the box as well as easy access to more than 60,000 software packages and 7,800 games.",
                    es: "Esperemos que sí. Debian viene con lo que la mayoría de las personas necesitan desde el primer momento, además de acceso fácil a más de 60,000 paquetes de software y 7,800 juegos.",
                    fr: "Espérons-le. Debian est livré avec ce dont la plupart des gens ont besoin dès la sortie de la boîte, ainsi qu'un accès facile à plus de 60 000 paquets logiciels et 7 800 jeux.",
                    pt: "Esperamos que sim. O Debian vem com o que a maioria das pessoas precisa já pronto para uso, além de acesso fácil a mais de 60.000 pacotes de software e 7.800 jogos.",
                    "zh-Hans": "希望如此。Debian提供大多数人开箱即用的功能，并且可以轻松访问超过60,000个软件包和7,800个游戏。",
                    "zh-Hant": "希望如此。Debian提供大多數人開箱即用的功能，並且可以輕鬆訪問超過60,000個軟體包和7,800個遊戲。"
                }
            }
        ]
    },
    sponsorSection: {
        title: {
            en: "Debian Partners",
            es: "Socios de Debian",
            fr: "Partenaires de Debian",
            pt: "Parceiros do Debian",
            "zh-Hans": "Debian 合作伙伴",
            "zh-Hant": "Debian 合作夥伴"
        },
        text: {
            en: "The Partners Program was created to recognize companies and organizations that provide ongoing assistance to Debian. Because of the substantial support provided by these partners, we have been able to expand and improve Debian. We would like to officially recognize their efforts, and continue to maintain a good working relationship.",
            es: "El Programa de Socios fue creado para reconocer a las empresas y organizaciones que brindan asistencia continua a Debian. Gracias al apoyo sustancial de estos socios, hemos podido expandir y mejorar Debian. Nos gustaría reconocer oficialmente sus esfuerzos y continuar manteniendo una buena relación de trabajo.",
            fr: "Le Programme de Partenaires a été créé pour reconnaître les entreprises et les organisations qui apportent un soutien continu à Debian. Grâce au soutien substantiel de ces partenaires, nous avons pu étendre et améliorer Debian. Nous souhaitons officiellement reconnaître leurs efforts et continuer à maintenir une bonne relation de travail.",
            pt: "O Programa de Parceiros foi criado para reconhecer as empresas e organizações que fornecem assistência contínua ao Debian. Graças ao apoio substancial fornecido por esses parceiros, conseguimos expandir e melhorar o Debian. Gostaríamos de reconhecer oficialmente seus esforços e continuar a manter uma boa relação de trabalho.",
            "zh-Hans": "合作伙伴计划旨在表彰那些为 Debian 提供持续支持的公司和组织。由于这些合作伙伴的巨大支持，我们得以扩展和改进 Debian。我们希望正式认可他们的努力，并继续保持良好的合作关系。",
            "zh-Hant": "合作夥伴計畫旨在表彰那些為 Debian 提供持續支持的公司和組織。由於這些合作夥伴的巨大支持，我們得以擴展和改進 Debian。我們希望正式認可他們的努力，並繼續保持良好的合作關係。"
        },
    },
};