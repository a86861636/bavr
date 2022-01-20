import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const DEFAULT_LANG = 'zh';
const LOCALE_KEY = 'localeLanguage';

const zh = {
    nav: {
        state: '场景舞台',
        solution: '解决方案',
        joinUs: '联系我们',
        light: '灯光秀',
        exhibition: '展览展厅',
        virtual: '虚拟仿真',
        intro: '研究院介绍',
        vrProject: 'VR体验',
        cooperation: '合作机构'
    },
    page1: {
        text1: "For a better life,innovation,wisdom",
        text2: "为了更好的生活",
        text3: "创新、智慧"
    },
    page2: {
        text1: '展厅',
        text2: '项目展示',
        more: '了解更多'
    },
    page2_c: {
        text1: '珠穆朗玛峰',
        text2: '项目展示',
        more: '了解更多'
    },
    page3: {
        vr: '虚拟现实是多媒体技术的终极应用形式',
        ar: '实时地计算摄影机影像的位置及角度并加上相',
        mr: '最大的特点在于虚拟世界和现实世界可以互动',
        text1: 'We can experience the feeling of',
        text2: 'perfect immersion in the Mixed Reality world',
        btn1: '特效仿真',
        btn2: '全息投影',
    },
    page4: {
        text1: 'Trusted',
        text2: '沉浸式投影体验',
        text3: '沉浸式投影一般是指通过多折幕投影的方式，来营造一种沉浸式的观影体验。3折幕，4折幕以上的都可以算得上是沉浸式的投影。它是一个视角比较大的投影方式。大型的弧幕，环幕，碗幕都可以算得上是沉浸式的投影。主要是通过多通道融合的画面融合技术来实现画面上的拼接，达到一种完整的画面效果。'
    },
    page5: {
        text1: '以下是我们的合作机构',
        text2: '',
        more: '更多'
    },
    vr: {
        text1: '虚拟现实是多媒体技术的终极应用形式',
        text2: '下面是我们使用VR技术完成的项目',
        apply: '虚拟现实（VR）技术的应用',
        benefits: '项目优势',
        movie: '电影',
        game: '游戏',
        fitness: '健身',
        social: '社交',
        travel: '旅游',
        shopping: '购物',
        military: '军事',
        medical: '医疗',
        industrial: '工业',
        culture: '文化',
        education: '教育',
        project: '规划',
        exhibition: '展览'
    },
    mr: {
        text1: '虚拟现实是多媒体技术的终极应用形式',
        text2: '下面是我们使用MR技术完成的项目',
        tt1: '技术优势',
        intro1: '拥有丰富的开发经验，注重沉浸式交互和视觉效果，已经制作和开发各类型高品质VR精品内容，具备多类型VR产品的开发和管理经验。 我们力求通过我们的策划和设计生动地呈现客户的想法、策略乃至抽象的概念，帮助客户创造和提升品牌效应， 实现客户价值的最大化。',
        tt2: '未来可期',
        intro2: 'HoloLens开发，MR混合现实内容定制，我们已为汽车、房产、旅游、教育、影视、游戏等行业量身定制多种虚拟数字解决方案。团队秉承专注、专业的设计制作思维，让客户通过技术设计发挥产品的最大价值，并发掘无限的可能。'
    },
    ar: {
        text1: '虚拟现实是多媒体技术的终极应用形式',
        text2: '下面是我们使用AR技术完成的项目',
        text3: '与在现实生活中不同，增强现实是将虚拟事物在现实中的呈现，而交互就是帮助虚拟事物在现实中更好的呈现做准备，因此想要等到更好的AR体验，交互就是其中的重中之重。AR设备的交互方式主要分为以下三种： \n（1）现实世界中的点位选取来进行交互是最为常见的一种交互方式，例如最近流行的AR贺卡和毕业相册就是通过图片位置来进行交互的。 \n（2）将空间中的一个或多个事物的特定姿势或者状态加以判断，这些姿势都对应着不同的命令。使用者可以任意改变和使用命令来进行交互，比如用不同的手势表示不同的指令。 \n（3）使用特制工具进行交互。比如谷歌地球，它就是利用类似于鼠标一样的东西来进行一系列的操作，从而满足用户对于AR互动的要求。',
    },
    intro: {
        tt: '广州市大湾区虚拟现实研究院',
        text: '为贯彻落实中共中央、国务院颁布的《粤港澳大湾区发展规划纲要》和广东省的《广东省数字经济发展规划（2018-2025年）》，广州市大湾区虚拟现实研究院于2019年1月，正式落户广州经济技术开发区。广州经济技术开发区是国家对外交往重要口岸，拥有珠江黄金岸线和华南重要港口，是广州城市发展“东进”战略的桥头堡；广州经济开发区是中国首批国家级经济技术开发区之一，综合实力一直在全国开发区中排名前列，是广州市科技创新枢纽核心区，也是国家“粤港澳大湾区”的战略核心。\n' +
            '<br/><br/>广州市大湾区虚拟现实研究院是在广东省各级政府支持下，由广州引力波科技创新发展有限公司和黄埔文化（广州）发展集团有限公司共同发起成立。研究院引入我国光学增强现实与虚拟现实技术领域的学科开拓者和带头人之一的北京理工大学王涌天教授作为首席科学家，并兼任院长。王涌天教授是北京理工大学光学工程国家重点学科带头人，长期从事虚拟现实和增强现实等交叉学科的研究，在业界享有盛誉。同时，研究院将引入国内外虚拟现实领域的知名专家学者，建立与国际国内顶级研究机构及企业的合作，建设成为虚拟现实领域国际高水平科技产业创新中心。\n' +
            '<br/><br/>研究院本着岭南文化中多元、务实、开放、兼容、创新的精神，以虚拟现实技术为主要研发方向，围绕区域特色行业转型发展需要，重点开展数字创意及内容创新、技术交易与转化工作。通过构建行业技术平台，以粤港澳为基地，面向世界提供产业技术支撑和服务，实现集聚国际一流的虚拟现实科研人才团队，培育一批高水平高素质专业化虚拟现实研发人才，以助力粤港澳大湾区科研成果转化及国际一流湾区建设。研究院将集聚虚拟现实产业领域顶级的团队和技术条件，建设行业发展创新工作平台。\n' +
            '<br/><br/>一、要建设国际化的科研工作平台，面向虚拟现实相关研发必要的大数据能力、高端渲染能力、计算能力等需求，构建创新的科研工作平台，支撑满足国际化水平的科研工作开展。\n' +
            '<br/><br/>二、建设行业标准工作平台，围绕虚拟现实装备及技术应用产业链条各环节，开展虚拟现实应用测试评价关键技术及标准研究，建立虚拟现实技术在设备、交互、内容等方面的标准测评能力。开展虚拟现实技术与应用标准研究，研究制定虚拟现实技术与应用标准体系，推动软硬件产品的数据标准的开放共享，参与制定虚拟现实领域的国家标准及国际标准。\n' +
            '<br/><br/>三、建设多技术融合的智慧教育应用平台，虚拟现实与人工智能、5G的深层次融合应用，为教育创造前所未有的智能化、沉浸式、多样化的高交互条件，研究院将对未来智慧教育模式的应用和研究，搭建多技术融合的智慧教育应用平台，推进世界范围内文化的传播及教育资源配置，促进智慧教育模式进一步提升，打造多样化的解决方案平台。\n' +
            '<br/><br/>四、建设智能创意与军民融合内容创新平台，针对国家蓝海一体化开发利用前景，研究院充分利用军民融合优势，以加强以虚拟现实技术为基础的文化创意产业中展览、旅游、演艺等方面的创意质量控制、评估及智能化生产等为目标，依据粤港澳地区优势文化领域创意产业发展需求，对智能创意技术升级、组织管理、评估方法、对抗生成以及呈现方法进行研究。以环境-装备-人员行为等建模仿真为基础，提供数字孪生大湾区原型系统，服务区域管理、交通物流、应急处置、国防动员等军民深度融合领域的创新发展。\n' +
            '<br/><br/>五、建设技术创新孵化平台，开展虚拟现实技术的创新孵化工作。由研究院研发全栈式平台和工具，为工作者提供完善的开发和运行环境以及成熟的基础应用，与粤港澳乃至全国的高校及研究院所合作共建了新一代虚拟现实开放创新孵化平台。\n' +
            '<br/><br/>通过发挥这些重大平台和内容创新项目的牵引作用，面向粤港澳及全球引进集聚一批国际一流的虚拟现实科研团队，同时培育一批综合素质高、创新能力强的虚拟现实高端人才，助力粤港澳大湾区打造成为国际科技创新中心。'
    },
    stage: {
        tt: '建设智尚黄埔荟，为中小企业办实事',
        text: '黄埔文化集团深入贯彻落实习近平总书记视察广州科学城提出的“中小企业能办大事”指示精神，一周年之际建成“智尚黄埔荟”，并在国庆期间进行了试运行。智尚黄埔荟共收集展呈区内300余家高新技术企业近500多件智能制造产品，初步打造成集“智造”展示、公众教育、产品展销于一体的区域工业发展成就综合展示平台。 \n' +
            ' <br/><br/>一是“智造”展示。我区是广州市对外开放的示范窗口和自主创新基地，2018先进制造业产值近3000亿元，是广州市最重要的智能制造基地。IAB、NEM 产业是黄埔靓丽名片，海格通信、威创视讯、国机智能、亿航智能、金发科技、慧谷化学、冠昊生物、香雪制药等一批IAB、NEM旗舰企业集中入驻智尚黄埔荟，通过实物展呈、互动体验等综合性展示手段全方位展现“黄埔智造”最新成果。\n' +
            '<br/><br/> 二是公众教育。在打造“黄埔智造”展示中心的基础上，进一步拓展智尚黄埔荟展示平台功能，建设公众科普教育基地服务广大市民尤其中小学生。集团正在结合中小学生研学旅行业务，毗邻的粤港澳大湾区青少年研学基地联通互动，通过理论课堂、核心技术实验、产品体验等方式提炼课程，进一步优化提升集团研学业务板块。\n' +
            '<br/><br/> 三是产品展销。目前，区内不少终端消费品已经走进了千家万户，但长期以来，消费者对单个品牌的青睐，尚未通过一个有效途径集合转化为对“黄埔智造”、“黄埔优品”的认可。智尚黄埔荟在打造线下展销中心的同时，利用主流电商平台搭建、自主开发小程序等模式形成网络端矩阵，集中打造线上“黄埔优品”展销馆，最终构建线上线下联动、永不落幕的黄埔工业品展销会。',
        video: '视频欣赏',
        realize: '从概念到实现',
        more: '了解展馆'
    },
    cooperation: {
        tt1: '合作机构',
        tt2: '专家介绍',
    },
    joinUs: {
        address: '广州开发区开源大道136号穗开科技园B1栋第五层'
    },
    project: {
        download: '立即下载'
    }
};

const en = {
    nav: {
        state: 'STATE',
        solution: 'SOLUTION',
        joinUs: 'CONTACT US',
        light: 'LIGHT SHOW',
        exhibition: 'EXHIBITION',
        virtual: "VIRTUAL SIMULATION",
        intro: "INTRODUCTION",
        vrProject: 'VR PROJECT',
        cooperation: 'COLLABORATORS'
    },
    page1: {
        text1: "For a better life,innovation,wisdom",
        text2: "为了更好的生活",
        text3: "创新、智慧"
    },
    page2: {
        text1: 'exhibition hall',
        text2: 'project display',
        more: 'read more'
    },
    page2_c: {
        text1: 'qomolangma mountain',
        text2: 'project display',
        more: 'read more'
    },
    page3: {
        vr: 'Virtual reality is the ultimate application of multimedia technology',
        ar: 'Calculate the position and Angle of the camera image in real time and add phase',
        mr: 'The biggest feature is that the virtual world and the real world can interact',
        text1: 'We can experience the feeling of',
        text2: 'perfect immersion in the Mixed Reality world',
        btn1: 'The special effects the simulation',
        btn2: 'Holographic Laser Projection',
    },
    page4: {
        text1: 'Trusted',
        text2: 'Immersive projection experience',
        text3: 'Immersive projection generally refers to creating an immersive viewing experience by means of multi-fold screen projection.3 fold screen, 4 fold screen above can be regarded as immersive projection.It is a projection with a large Angle of view.Large arc curtain, ring curtain, bowl curtain can be regarded as immersive projection.Mainly through the multi-channel fusion screen fusion technology to achieve a Mosaic on the screen to achieve a complete picture effect.'
    },
    page5: {
        text1: 'Here are our partners',
        text2: '',
        more: 'MORE'
    },
    vr: {
        text1: 'Virtual reality is the ultimate application of multimedia technology',
        text2: 'The following is the project we completed with VR technology',
        more: 'know more',
        apply: 'The application of virtual reality (VR) technology',
        benefits: 'ProjectBenefits',
        movie: 'movie',
        game: 'game',
        fitness: 'fitness',
        social: 'social',
        travel: 'travel',
        shopping: 'shopping',
        military: 'military',
        medical: 'medical',
        industrial: 'industrial',
        culture: 'culture',
        education: 'education',
        project: 'project',
        exhibition: 'exhibition'
    },
    mr: {
        text1: 'Virtual reality is the ultimate application of multimedia technology',
        text2: 'The following is the project we completed with MR technology',
        tt1: 'Advantage of technology',
        intro1: 'With rich development experience, focusing on immersive interaction and visual effects, I have produced and developed various types of high-quality VR high-quality content, and have experience in the development and management of various types of VR products.We strive to present customers\' ideas, strategies and even abstract concepts vividly through our planning and design, so as to help customers create and enhance brand effect and maximize customer value.',
        tt2: 'It should be a future',
        intro2: 'Developed by HoloLens, MR mixed reality content customization, we have customized a variety of virtual digital solutions for the automobile, real estate, tourism, education, film and television, games and other industries.The team adhering to the focus, professional design and production thinking, let customers through technical design to play the maximum value of products, and explore infinite possibilities.',
    },
    ar: {
        text1: 'Our company keeps cooperating and expanding',
        text2: 'Here are some of the companies you\'ve worked with',
        text3: "Different from real life, augmented reality is to present virtual things in reality, and interaction is to help prepare virtual things for better presentation in reality. Therefore, interaction is the most important thing in order to wait for better AR experience.The interaction modes of AR devices are mainly divided into the following three types: \n(1) the most common interaction mode is the selection of points in the real world for interaction. For example, the recently popular AR greeting CARDS and graduation album are interactive through picture positions.\n(2) judge the specific postures or states of one or more things in space, and these postures correspond to different commands.Users can change and interact with commands at will, such as using different gestures to represent different instructions.\n(3) use special tools for interaction.For example, Google earth USES something similar to the mouse to carry out a series of operations, so as to meet the user's requirements for AR interaction."
    },
    intro: {
        tt: 'Guangzhou Greater Bay Area Virtual Reality Research Institute',
        text: '\n' +
            'In January 2019, “Guangzhou Greater Bay Area Virtual Reality Research Institute” (hereinafter referred to as BayVR) under Management Committee of Guangzhou Development District has officially settled in Guangzhou Development District. Guangzhou Development District, having its Pearl River Golden Coast Line and important Southern Chinese harbors, is a strategic port for international exchange and is the bridgehead for the “Eastern Forward” strategy of Guangzhou\'s urban development. Guangzhou Development District is one of the first national economic and technological development zones in China, whose comprehensive strength has historically been in the forefront of all national development zones. It is the central hub of Guangzhou\'s scientific and technological innovation as well as the heart of the national "Guangdong-Hong Kong-Macao Greater Bay Area" strategy.\n' +
            '<br/><br/>BayVR is jointly launched by “Guangzhou Gravitational Wave Technology Innovation Development Co., Ltd.” and “Huangpu Culture Group”. “Huangpu Culture Group” is a wholly state-owned enterprise with a registered capital of RMB 500 million. The Group aims to ensure social benefits by strengthening the functions of the cultural industry public service platform of Huangpu District and Guangzhou Development District, developing cultural industry resources, building cultural infrastructure as well as ensures social benefits. The Group plays an important role for state-owned capital and state-owned cultural enterprises in promoting cultural industries to become pillar industries of regional strategies as well as guiding and driving the development of non-public ownership cultural enterprises. "Guangzhou Gravitational Wave Technology Innovation Development Co., Ltd." is specialized in virtual reality technology, products, services and consulting. The team comprises more than 10 professors and Ph. Ds as well as more than 20 research and development personnel. It owns a number of technologies and equipment with independent intellectual property in software, hardware and systems in the field of virtual reality.\n' +
            '<br/><br/>As the leader of the National Key Discipline of Optical Engineering at Beijing Institute of Technology as well as the Chief Scientist and Dean of BayVR, Professor Wang Yongtian has long been engaged in the study of interdisciplinary fields such as virtual and augmented reality, and is one of the pioneers and leaders in the field of optical augmented reality and virtual reality technology in China.\n' +
            '<br/><br/>BayVR’s mission is to build a infrastructural supporting platform for industry development, focuses on the fundamental layout of Guangdong\'s virtual reality field. The support platform shall be built regarding four main aspects that meets the various needs in the industry: scientific research, standard construction, digital assets, and technology sharing, specifically as follows:\n' +
            '<br/><br/>1.Building a infrastructural cloud platform for scientific research capabilities. In order to meet the basic requirements of virtual reality-related research and development such as big data computation, scene and model rendering, data storage, etc., a cloud platform will be constructed to support the development of fundamental research and development as well as to improve research and development efficiency.\n' +
            '<br/><br/>2.Construction of a standard testing platform. The research on key technologies of virtual reality application testing and evaluation will be carried out: to develop key technologies of virtual reality application-oriented testing and evaluation; to support professional evaluation of optical parameters, tracking interaction parameters of virtual reality application-oriented equipment products and core functions of virtual reality application software such as functionality, performance efficiency, ease of use, reliability, maintainability, safety parameters, etc., and to form the evaluation capability of virtual reality technology in terms of equipment, interaction, content, etc. The research on virtual reality technology and application standards will be carried out: to study and formulate a standard system of virtual reality technology and application, to draft technical standards for virtual reality in terms of equipment, interaction and content, to promote the open sharing of data formats and standard protocols for software and hardware products, and to participate in the formulation of national or international standards in the field of virtual reality.\n' +
            '<br/><br/>3.Construction of a resource sharing platform. To build a resource sharing platform for basic resources oriented to virtual reality, the digital assets integration and sharing of model resources, scene resources and image resources will be carried out to promote the construction of the industry resource platform.\n' +
            '<br/><br/>4.Construction of a technology sharing platform. To construct open source platform of software and hardware related to virtual reality fundamental technology will be carried out. First, hardware open source platform will be built for common technologies related to virtual reality, such as head-mounted display, tracking hardware system, force feedback system, etc. The support platform for basic hardware research and hardware integration will also be built. Second, software open source platform will be built to study common software technologies related to virtual reality, such as virtual reality fusion or interactive technology, which will provide basic support for technological innovation and the promotion of virtual reality technology.\n' +
            '\n' +
            '<br/><br/>By exerting the traction effect of these major platform projects, BayVR can attract a group of world-class virtual reality talents from Hong Kong, Macao and around the world, cultivate a group of high-end virtual reality scholars and developers with high comprehensive quality and strong innovation ability, and help Guangdong-Hong Kong-Macao Greater Bay Area build a national virtual reality talent highland.'
    },
    stage: {
        tt: 'QUALITY PRODUCTS FROM HUANGPU, do practical work for small and medium-sized enterprises',
        text: 'The huangpu cultural group has thoroughly implemented the directive spirit of general secretary Xi Jinping\'s inspection of Guangzhou Science City\'s "small and medium-sized enterprises can do great things". During the 1st Anniversary period, it built "Zhi Shang Whampoa Hui" and carried out trial operation during the national day. With more than 500 intelligent manufacturing products collected and presented by more than 300 high-tech enterprises in the zone, Zhishang Huangpu Hui has initially built a comprehensive display platform for regional industrial development achievements integrating "intelligent manufacturing" display, public education and product exhibition and sales.' +
            '<br/><br/> First, the exhibition of "intelligent manufacturing". Our district is a demonstration window and independent innovation base for Guangzhou\'s opening up. In 2018, the output value of advanced manufacturing industry is nearly 300 billion yuan, and it is the most important intelligent manufacturing base in Guangzhou. IAB and NEM industries are the beautiful business cards of Huangpu. A number of IAB and NEM flagship enterprises, such as Haige communication, Weichuang video, Guoji intelligence, Yihang intelligence, blonde technology, Huigu chemistry, Guanhao biology, Xiangxue pharmaceutical, are concentrated in the wisdom shanghuangpu group. The latest achievements of "Huangpu intelligent manufacturing" are fully displayed through comprehensive display means such as physical exhibition and interactive experience.\n' +
            ' <br/><br/>Second, public education. On the basis of building "Huangpu intelligent manufacturing" Exhibition Center, further expand the function of Zhishang Huangpu exhibition platform, and build public science education base to serve the general public, especially primary and secondary school students. The group is integrating primary and secondary school students\' research and learning travel business, connecting and interacting with the adjacent research and learning base for young people in Guangdong, Hong Kong and Macao, refining courses through theoretical classes, core technology experiments, product experience and other ways, and further optimizing and upgrading the group\'s research and learning business segment' +
            ' <br/><br/>Third, product exhibition. At present, many terminal consumer goods in the area have entered thousands of households, but for a long time, consumers\' favor for a single brand has not been transformed into recognition of "Huangpu intelligent manufacturing" and "Huangpu excellent products" through an effective way. While building an offline exhibition and sales center, Zhishang Whampoa will use mainstream e-commerce platforms to build and independently develop small programs to form a network terminal matrix, focus on building an online "Whampoa excellent products" exhibition and sales hall, and finally build an online and offline linkage and never ending Whampoa industrial products exhibition and sales fair.',
        video: 'Video appreciation',
        realize: 'From concept to implementation',
        more: 'exhibition hall'
    },
    cooperation: {
        tt1: 'Collaborators',
        tt2: 'Expert introduction ',
    },
    joinUs: {
        address: 'Building A4, Commercial Plaza, No.181, Science Avenue, Guangzhou Development Zone'
    },
    project: {
        download: 'DOWNLOAD'
    }
};

const locales = {
    zh: zh,
    en: en,
};

const i18n = new VueI18n({
    locale: DEFAULT_LANG,
    messages: locales,
});

i18n.setup = lang => {
    if (lang === undefined) {
        lang = window.localStorage.getItem(LOCALE_KEY);
        if (locales[lang] === undefined) {
            lang = DEFAULT_LANG
        }
    }
    window.localStorage.setItem(LOCALE_KEY, lang);

    Object.keys(locales).forEach(lang => {
        document.body.classList.remove(`lang-${lang}`)
    });
    document.body.classList.add(`lang-${lang}`);
    document.body.setAttribute('lang', lang);

    Vue.config.lang = lang;
    i18n.locale = lang;
};

window.i18n = i18n;
export default i18n
