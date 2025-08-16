// src/i18n/Translations.jsx

export const translations = {
    header: {
        home: { en: "HOME", es: "INICIO", fr: "ACCUEIL", pt: "INÍCIO", "zh-Hans": "主页", "zh-Hant": "首頁" },
        getDebian: { en: "GET DEBIAN", es: "OBTENER DEBIAN", fr: "OBTENIR DEBIAN", pt: "OBTER DEBIAN", "zh-Hans": "获取 DEBIAN", "zh-Hant": "獲取 DEBIAN" },
        aboutUs: { en: "ABOUT US", es: "SOBRE NOSOTROS", fr: "À PROPOS", pt: "SOBRE NÓS", "zh-Hans": "关于我们", "zh-Hant": "關於我們" },
        events: { en: "EVENTS", es: "EVENTOS", fr: "ÉVÉNEMENTS", pt: "EVENTOS", "zh-Hans": "活动", "zh-Hant": "活動" },
        projectNews: { en: "PROJECT NEWS", es: "NOTICIAS DEL PROYECTO", fr: "ACTUALITÉS DU PROJET", pt: "NOTÍCIAS DO PROJETO", "zh-Hans": "项目新闻", "zh-Hant": "項目新聞" },
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
    homePage: {
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
            latest_news: {
                en: "Latest News",
                es: "Últimas Noticias (solo disponible en inglés)",
                fr: "Dernières Nouvelles (disponible uniquement en anglais)",
                pt: "Últimas Notícias (disponível apenas em inglês)",
                "zh-Hans": "最新消息（仅提供英文版）",
                "zh-Hant": "最新消息（僅提供英文版）"
            }
        },
        newsCards: [
            {
                id: 1,
                title: {
                    en: "Debian 12.10 Released with Major Improvements!",
                    es: "¡Debian 12.10 llega con grandes mejoras!",
                    fr: "Debian 12.10 publié avec des améliorations majeures !",
                    pt: "Debian 12.10 lançado com grandes melhorias!",
                    "zh-Hans": "Debian 12.10 带来重大改进！",
                    "zh-Hant": "Debian 12.10 帶來重大改進！"
                },
                description: {
                    en: "This release brings enhanced performance, new tools, and even better security.",
                    es: "Esta versión trae mayor rendimiento, nuevas herramientas y mejor seguridad.",
                    fr: "Cette version apporte de meilleures performances, de nouveaux outils et une sécurité renforcée.",
                    pt: "Esta versão traz desempenho aprimorado, novas ferramentas e mais segurança.",
                    "zh-Hans": "本次发布带来更强的性能、新工具和更好的安全性。",
                    "zh-Hant": "本次發佈帶來更強的效能、新工具和更好的安全性。"
                },
                created_at: "2025-06-24T10:23:00Z"
            },
            {
                id: 2,
                title: {
                    en: "DebConf25: Registration Open!",
                    es: "DebConf25: ¡Inscripciones abiertas!",
                    fr: "DebConf25 : Inscriptions ouvertes !",
                    pt: "DebConf25: Inscrições abertas!",
                    "zh-Hans": "DebConf25：注册开放！",
                    "zh-Hant": "DebConf25：註冊開放！"
                },
                description: {
                    en: "Sign up for the largest annual Debian community conference.",
                    es: "Inscríbete al mayor encuentro anual de la comunidad Debian.",
                    fr: "Inscrivez-vous à la plus grande conférence annuelle de la communauté Debian.",
                    pt: "Inscreva-se no maior encontro anual da comunidade Debian.",
                    "zh-Hans": "报名参加年度最大 Debian 社区大会。",
                    "zh-Hant": "報名參加年度最大 Debian 社群大會。"
                },
                created_at: "2025-07-11T08:00:00Z"
            },
            {
                id: 3,
                title: {
                    en: "Official Documentation Improvements",
                    es: "Mejoras en la documentación oficial",
                    fr: "Améliorations de la documentation officielle",
                    pt: "Melhorias na documentação oficial",
                    "zh-Hans": "官方文档改进",
                    "zh-Hant": "官方文件改進"
                },
                description: {
                    en: "Contributing and accessing Debian documentation is easier than ever.",
                    es: "Ahora es más fácil contribuir y acceder a la documentación de Debian.",
                    fr: "Il est maintenant plus facile de contribuer et d'accéder à la documentation Debian.",
                    pt: "Agora é mais fácil contribuir e acessar a documentação do Debian.",
                    "zh-Hans": "现在贡献和访问 Debian 文档比以往更容易。",
                    "zh-Hant": "現在貢獻和存取 Debian 文件比以往更容易。"
                },
                created_at: "2025-05-30T17:45:00Z"
            },
            {
                id: 4,
                title: {
                    en: "New Debian Installer: Faster and More Accessible",
                    es: "Nuevo instalador de Debian: más rápido y accesible",
                    fr: "Nouveau programme d'installation Debian : plus rapide et plus accessible",
                    pt: "Novo instalador do Debian: mais rápido e acessível",
                    "zh-Hans": "全新 Debian 安装器：更快更易用",
                    "zh-Hant": "全新 Debian 安裝器：更快更易用"
                },
                description: {
                    en: "The latest Debian installer introduces a revamped interface, improved hardware detection, and better accessibility options.",
                    es: "El nuevo instalador de Debian presenta una interfaz renovada, mejor detección de hardware y más opciones de accesibilidad.",
                    fr: "Le nouvel installateur Debian propose une interface repensée, une meilleure détection du matériel et des options d’accessibilité améliorées.",
                    pt: "O novo instalador do Debian apresenta uma interface renovada, melhor detecção de hardware e mais opções de acessibilidade.",
                    "zh-Hans": "最新 Debian 安装器带来焕然一新的界面、更强的硬件检测和更好的无障碍选项。",
                    "zh-Hant": "最新 Debian 安裝器帶來煥然一新的介面、更強的硬體偵測和更好的無障礙選項。"
                },
                created_at: "2025-04-12T14:20:00Z"
            },
            {
                id: 5,
                title: {
                    en: "Debian Now Available on More Architectures",
                    es: "Debian ahora disponible en más arquitecturas",
                    fr: "Debian désormais disponible sur plus d'architectures",
                    pt: "Debian agora disponível em mais arquiteturas",
                    "zh-Hans": "Debian 现已支持更多架构",
                    "zh-Hant": "Debian 現已支援更多架構"
                },
                description: {
                    en: "With the latest release, Debian expands support to additional CPU architectures, making it even more versatile for servers and embedded devices.",
                    es: "Con la última versión, Debian amplía el soporte a más arquitecturas de CPU, haciéndolo aún más versátil para servidores y dispositivos embebidos.",
                    fr: "Avec la dernière version, Debian étend la prise en charge à d'autres architectures CPU, le rendant encore plus polyvalent pour les serveurs et les appareils embarqués.",
                    pt: "Com o lançamento mais recente, o Debian amplia o suporte para mais arquiteturas de CPU, tornando-o ainda mais versátil para servidores e dispositivos embarcados.",
                    "zh-Hans": "最新版 Debian 拓展了对更多 CPU 架构的支持，使其在服务器和嵌入式设备上更加多才多艺。",
                    "zh-Hant": "最新版 Debian 擴展了對更多 CPU 架構的支援，使其在伺服器和嵌入式裝置上更加多才多藝。"
                },
                created_at: "2025-03-05T09:10:00Z"
            }
        ],
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
    },
    learnMorePage: {
        title: {
            en: "The leading Linux desktop",
            es: "El escritorio Linux líder",
            fr: "Le bureau Linux leader",
            pt: "A principal área de trabalho Linux",
            "zh-Hans": "领先的Linux桌面",
            "zh-Hant": "領先的Linux桌面"
        },
        description: {
            en: "A beautiful, high-quality desktop, built on the latest open-source technology. Trusted, powerful, and easy.",
            es: "Un escritorio hermoso y de alta calidad, construido con la última tecnología de código abierto. Confiable, potente y fácil de usar.",
            fr: "Un bureau beau et de haute qualité, construit sur la dernière technologie open-source. Fiable, puissant et facile.",
            pt: "Uma área de trabalho bonita e de alta qualidade, construída com a mais recente tecnologia open-source. Confiável, potente e fácil de usar.",
            "zh-Hans": "一个美丽、高质量的桌面，建立在最新的开源技术上。值得信赖、强大且易于使用。",
            "zh-Hant": "一個美麗、高質量的桌面，建立在最新的開源技術上。值得信賴、強大且易於使用。"
        },
        heading: {
            en: "Reasons to use Debian",
            es: "Razones para usar Debian",
            fr: "Raisons d'utiliser Debian",
            pt: "Razões para usar o Debian",
            "zh-Hans": "使用Debian的理由",
            "zh-Hant": "使用Debian的理由"
        },
        paragraph: {
            en: "There are a lot of reasons to choose Debian as your operating system – as a user, as a developer, and even in enterprise environments. Most users appreciate the stability, and the smooth upgrade processes of both packages and the entire distribution. Debian is also widely used by software and hardware developers because it runs on numerous architectures and devices, offers a public bug tracker and other tools for developers. If you plan to use Debian in a professional environment, there are additional benefits like LTS versions and cloud images.",
            es: "Hay muchas razones para elegir Debian como tu sistema operativo: como usuario, como desarrollador e incluso en entornos empresariales. La mayoría de los usuarios aprecian la estabilidad y los procesos de actualización suaves tanto de los paquetes como de la distribución completa. Debian también es ampliamente utilizado por desarrolladores de software y hardware porque funciona en numerosas arquitecturas y dispositivos, ofrece un rastreador de errores público y otras herramientas para desarrolladores. Si planeas usar Debian en un entorno profesional, hay beneficios adicionales como versiones LTS e imágenes en la nube.",
            "zh-Hans": "有很多理由选择Debian作为您的操作系统——作为用户、开发人员，甚至在企业环境中。大多数用户欣赏它的稳定性，以及软件包和整个发行版的平滑升级过程。Debian也被软件和硬件开发人员广泛使用，因为它支持多种架构和设备，提供公开的错误追踪器和其他开发工具。如果您计划在专业环境中使用Debian，还可以享受LTS版本和云镜像等额外好处。",
            "zh-Hant": "有很多理由選擇Debian作為您的操作系統——作為用戶、開發人員，甚至在企業環境中。大多數用戶欣賞它的穩定性，以及軟體包和整個發行版的順利升級過程。Debian也被軟體和硬體開發人員廣泛使用，因為它支持多種架構和設備，提供公開的錯誤追蹤器和其他開發工具。如果您計劃在專業環境中使用Debian，還可以享受LTS版本和雲映像等額外好處。",
            "fr": "Il y a de nombreuses raisons de choisir Debian comme votre système d'exploitation – en tant qu'utilisateur, développeur, et même dans les environnements professionnels. La plupart des utilisateurs apprécient la stabilité et les processus de mise à jour fluides, tant pour les paquets que pour l'ensemble de la distribution. Debian est également largement utilisé par les développeurs de logiciels et de matériel, car il fonctionne sur de nombreuses architectures et appareils, offre un système de suivi des bogues public et d'autres outils pour les développeurs. Si vous prévoyez d'utiliser Debian dans un environnement professionnel, il existe des avantages supplémentaires tels que les versions LTS et les images cloud.",
            "pt": "Há várias razões para escolher o Debian como seu sistema operacional – como usuário, desenvolvedor e até mesmo em ambientes empresariais. A maioria dos usuários aprecia a estabilidade e os processos de atualização suaves, tanto de pacotes quanto de toda a distribuição. O Debian também é amplamente utilizado por desenvolvedores de software e hardware, pois funciona em diversas arquiteturas e dispositivos, oferece um rastreador de bugs público e outras ferramentas para desenvolvedores. Se você planeja usar o Debian em um ambiente profissional, há benefícios adicionais, como versões LTS e imagens de nuvem."
        },
        subheading1: {
            en: "Debian for Users",
            es: "Debian para Usuarios",
            fr: "Debian pour les Utilisateurs",
            pt: "Debian para Usuários",
            "zh-Hans": "Debian 面向用户",
            "zh-Hant": "Debian 面向用戶"
        },
        text1: {
            en: "Debian is a 100% free and open-source operating system, allowing anyone to use, modify, and distribute it at no cost. It is known for its stability and security, offering regular updates and well-configured packages for various devices, including laptops, desktops, and servers. Debian provides extensive hardware support, with most devices working out-of-the-box via the Linux kernel. Proprietary drivers are available if needed. The flexible installer includes a user-friendly Live CD with Calamares and an advanced Debian installer for fine-tuning. Upgrading Debian is smooth and straightforward, whether updating a single package or transitioning to a new release. Many distributions, such as Ubuntu, Knoppix, and Tails, are based on Debian, benefiting from its robust foundation. Debian is driven by a global community, where everyone—developers, sysadmins, or enthusiasts—can contribute.",
            es: "Debian es un sistema operativo 100% libre y de código abierto, lo que permite a cualquier persona usarlo, modificarlo y distribuirlo sin costo alguno. Es conocido por su estabilidad y seguridad, ofreciendo actualizaciones regulares y paquetes bien configurados para varios dispositivos, incluidos portátiles, escritorios y servidores. Debian ofrece un amplio soporte de hardware, con la mayoría de los dispositivos funcionando de inmediato a través del núcleo Linux. Están disponibles controladores propietarios si es necesario. El instalador flexible incluye un CD en vivo fácil de usar con Calamares y un instalador avanzado de Debian para ajustes finos. Actualizar Debian es sencillo y directo, ya sea actualizando un solo paquete o pasando a una nueva versión. Muchas distribuciones, como Ubuntu, Knoppix y Tails, se basan en Debian, beneficiándose de su robusta base. Debian está impulsado por una comunidad global, donde todos, desarrolladores, administradores de sistemas o entusiastas, pueden contribuir.",
            "zh-Hans": "Debian是一个100％免费的开源操作系统，允许任何人免费使用、修改和分发它。它以其稳定性和安全性而闻名，提供定期更新和为各种设备配置良好的软件包，包括笔记本电脑、台式机和服务器。Debian提供广泛的硬件支持，大多数设备可以通过Linux内核即插即用。如果需要，还可以使用专有驱动程序。灵活的安装程序包括一个用户友好的Calamares Live CD和一个高级Debian安装程序，便于调整。无论是更新单个软件包还是迁移到新版本，Debian的升级都非常顺畅且直接。许多发行版，如Ubuntu、Knoppix和Tails，都基于Debian，受益于其强大的基础。Debian由一个全球社区驱动，开发人员、系统管理员或爱好者都可以贡献。",
            "zh-Hant": "Debian是一個100％免費且開源的操作系統，允許任何人免費使用、修改和分發它。它以其穩定性和安全性而聞名，提供定期更新和為各種設備配置良好的套件，包括筆記型電腦、桌上型電腦和伺服器。Debian提供廣泛的硬體支持，大多數設備可以通過Linux核心即插即用。如有需要，也可提供專有驅動程式。靈活的安裝程式包括一個使用者友善的Calamares Live CD和一個高級的Debian安裝程式，便於調整。無論是更新單一套件還是升級至新版本，Debian的升級過程都非常順暆且直觀。許多發行版，如Ubuntu、Knoppix和Tails，都基於Debian，並受益於其強大的基礎。Debian由全球社群推動，開發者、系統管理員或愛好者都可以貢獻。",
            "fr": "Debian est un système d'exploitation 100% libre et open source, permettant à quiconque de l'utiliser, de le modifier et de le distribuer gratuitement. Il est connu pour sa stabilité et sa sécurité, offrant des mises à jour régulières et des paquets bien configurés pour divers appareils, y compris les ordinateurs portables, de bureau et les serveurs. Debian offre une large prise en charge du matériel, la plupart des appareils fonctionnant immédiatement via le noyau Linux. Des pilotes propriétaires sont disponibles si nécessaire. L'installateur flexible comprend un CD Live convivial avec Calamares et un installateur avancé de Debian pour affiner les paramètres. La mise à niveau de Debian est fluide et simple, qu'il s'agisse de mettre à jour un seul paquet ou de passer à une nouvelle version. De nombreuses distributions, comme Ubuntu, Knoppix et Tails, sont basées sur Debian, bénéficiant de sa solide fondation. Debian est propulsé par une communauté mondiale où tout le monde – développeurs, administrateurs systèmes ou passionnés – peut contribuer.",
            "pt": "O Debian é um sistema operacional 100% livre e de código aberto, permitindo que qualquer pessoa o use, modifique e distribua sem custo. É conhecido por sua estabilidade e segurança, oferecendo atualizações regulares e pacotes bem configurados para vários dispositivos, incluindo laptops, desktops e servidores. O Debian oferece amplo suporte a hardware, com a maioria dos dispositivos funcionando imediatamente via o kernel Linux. Drivers proprietários estão disponíveis, se necessário. O instalador flexível inclui um CD Live fácil de usar com Calamares e um instalador avançado do Debian para ajustes finos. Atualizar o Debian é simples e direto, seja atualizando um único pacote ou fazendo a transição para uma nova versão. Muitas distribuições, como Ubuntu, Knoppix e Tails, são baseadas no Debian, beneficiando-se de sua robusta fundação. O Debian é impulsionado por uma comunidade global, onde todos – desenvolvedores, administradores de sistemas ou entusiastas – podem contribuir."
        },
        subheading2: {
            en: "Debian for Developers",
            es: "Debian para Desarrolladores",
            fr: "Debian pour les Développeurs",
            pt: "Debian para Desenvolvedores",
            "zh-Hans": "Debian 面向开发者",
            "zh-Hant": "Debian 面向開發者"
        },
        text2: {
            en: "Debian supports multiple hardware architectures, including amd64, i386, ARM, MIPS, POWER, IBM System z, and RISC-V, making it compatible with a wide range of devices. It also runs on IoT and embedded systems, such as Raspberry Pi, QNAP, mobile devices, and home routers. With 59,000+ software packages in its stable release, Debian offers an extensive collection of applications using the .deb format. Users can choose between stable, testing, or unstable releases to balance reliability and the latest features. Debian maintains a public bug tracker (BTS), ensuring transparency by allowing users to report and discuss issues openly.",
            es: "Debian es compatible con múltiples arquitecturas de hardware, incluidas amd64, i386, ARM, MIPS, POWER, IBM System z y RISC-V, lo que lo hace compatible con una amplia gama de dispositivos. También se ejecuta en sistemas IoT y embebidos, como Raspberry Pi, QNAP, dispositivos móviles y enrutadores domésticos. Con más de 59,000 paquetes de software en su versión estable, Debian ofrece una extensa colección de aplicaciones utilizando el formato .deb. Los usuarios pueden elegir entre versiones estables, de prueba o inestables para equilibrar fiabilidad y las últimas características. Debian mantiene un rastreador de errores público (BTS), garantizando transparencia al permitir que los usuarios informen y discutan problemas abiertamente.",
            "zh-Hans": "Debian支持多种硬件架构，包括amd64、i386、ARM、MIPS、POWER、IBM System z和RISC-V，使其兼容多种设备。它还可以运行在IoT和嵌入式系统上，如树莓派、QNAP、移动设备和家用路由器。Debian在其稳定版本中提供超过59,000个软件包，提供大量的应用程序，使用.deb格式。用户可以选择稳定版、测试版或不稳定版，以平衡可靠性和最新功能。Debian维护一个公共的错误跟踪器（BTS），确保透明性，允许用户公开报告和讨论问题。",
            "zh-Hant": "Debian支援多種硬體架構，包括amd64、i386、ARM、MIPS、POWER、IBM System z和RISC-V，使其與多種設備相容。它也可在物聯網和嵌入式系統上運行，如樹莓派、QNAP、移動設備和家庭路由器。Debian在其穩定版本中提供超過59,000個軟體包，提供大量的應用程式，使用.deb格式。用戶可以選擇穩定版、測試版或不穩定版，以平衡可靠性和最新功能。Debian維護一個公共錯誤追蹤器（BTS），確保透明性，允許用戶公開報告和討論問題。",
            fr: "Debian prend en charge plusieurs architectures matérielles, notamment amd64, i386, ARM, MIPS, POWER, IBM System z et RISC-V, ce qui le rend compatible avec une large gamme d'appareils. Il fonctionne également sur des systèmes IoT et embarqués, tels que Raspberry Pi, QNAP, appareils mobiles et routeurs domestiques. Avec plus de 59 000 paquets logiciels dans sa version stable, Debian propose une vaste collection d'applications utilisant le format .deb. Les utilisateurs peuvent choisir entre des versions stables, de test ou instables pour équilibrer fiabilité et dernières fonctionnalités. Debian maintient un tracker de bugs public (BTS), garantissant la transparence en permettant aux utilisateurs de signaler et de discuter ouvertement des problèmes.",
            pt: "O Debian suporta várias arquiteturas de hardware, incluindo amd64, i386, ARM, MIPS, POWER, IBM System z e RISC-V, tornando-o compatível com uma ampla gama de dispositivos. Ele também funciona em sistemas IoT e embarcados, como Raspberry Pi, QNAP, dispositivos móveis e roteadores domésticos. Com mais de 59.000 pacotes de software em sua versão estável, o Debian oferece uma extensa coleção de aplicativos usando o formato .deb. Os usuários podem escolher entre versões estáveis, de teste ou instáveis para equilibrar confiabilidade e os recursos mais recentes. O Debian mantém um rastreador de bugs público (BTS), garantindo transparência ao permitir que os usuários relatem e discutam problemas abertamente."
        },
        subheading3: {
            en: "Debian for Enterprise Environments",
            es: "Debian para Entornos Empresariales",
            fr: "Debian pour les Environnements Entreprise",
            pt: "Debian para Ambientes Empresariais",
            "zh-Hans": "Debian 面向企业环境",
            "zh-Hant": "Debian 面向企業環境"
        },
        text3: {
            en: "Debian is highly reliable, proving its stability across diverse environments—from personal laptops to stock exchanges, super-colliders, and the automotive industry. It is widely used in academia, scientific research, and the public sector. With a community of experts, many Debian package maintainers are also upstream contributors, ensuring high-quality software integration. Security is a priority, with dedicated security support for stable releases, relied upon by other distributions and researchers via Debian’s security tracker.",
            es: "Debian es altamente confiable, demostrando su estabilidad en diversos entornos: desde portátiles personales hasta bolsas de valores, supercolisionadores e industria automotriz. Se usa ampliamente en la academia, la investigación científica y el sector público. Con una comunidad de expertos, muchos de los mantenedores de paquetes de Debian también son contribuyentes principales, asegurando una integración de software de alta calidad. La seguridad es una prioridad, con soporte dedicado de seguridad para versiones estables, confiables por otras distribuciones e investigadores a través del rastreador de seguridad de Debian.",
            "zh-Hans": "Debian非常可靠，证明了它在各种环境中的稳定性——从个人笔记本电脑到股票交易所、超级对撞机和汽车工业。它在学术界、科学研究和公共部门得到了广泛应用。凭借一个专家社区，许多Debian软件包维护者也是上游贡献者，确保软件集成的高质量。安全性是一个优先事项，稳定版本提供专门的安全支持，其他发行版和研究人员通过Debian的安全追踪器依赖它。",
            "zh-Hant": "Debian非常可靠，證明了它在各種環境中的穩定性——從個人筆記型電腦到股票交易所、超級對撞機和汽車產業。它在學術界、科學研究和公共部門得到了廣泛應用。憑藉一個專家社群，許多Debian套件維護者也是上游貢獻者，確保軟體整合的高品質。安全性是首要任務，穩定版本提供專門的安全支援，其他發行版和研究人員通過Debian的安全追蹤器依賴它。",
            fr: "Debian est extrêmement fiable, prouvant sa stabilité dans divers environnements, des ordinateurs portables personnels aux bourses, en passant par les super-colliders et l'industrie automobile. Il est largement utilisé dans le milieu académique, la recherche scientifique et le secteur public. Avec une communauté d'experts, de nombreux mainteneurs de paquets Debian sont également des contributeurs en amont, garantissant une intégration logicielle de haute qualité. La sécurité est une priorité, avec un support dédié à la sécurité pour les versions stables, utilisé par d'autres distributions et chercheurs via le tracker de sécurité de Debian.",
            pt: "O Debian é altamente confiável, demonstrando sua estabilidade em diversos ambientes, desde laptops pessoais até bolsas de valores, supercolisores e a indústria automotiva. É amplamente utilizado na academia, pesquisa científica e no setor público. Com uma comunidade de especialistas, muitos mantenedores de pacotes Debian também são contribuintes upstream, garantindo uma integração de software de alta qualidade. A segurança é uma prioridade, com suporte dedicado à segurança para versões estáveis, sendo utilizado por outras distribuições e pesquisadores por meio do rastreador de segurança do Debian."
        }
    }
};