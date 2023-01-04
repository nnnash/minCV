import {Company, Project} from '../types/project'

export const projects: Array<Project> = [
  {
    name: '0+X',
    position: 'Consultant Software Developer',
    startDate: '2019-08',
    history:
      '0+X is a consaltancy broker that works with a leading tech companies in Stockholm such as Spotify, Klarna, Microsoft, and many others',
    id: Company['0x'],
    subProjects: [
      {
        name: 'Volvo Cars',
        position: 'Frontend Web Developer',
        startDate: '2021-11',
        endDate: '2022-10',
        history:
          'Volvocars.com is a homepage for Volvo, where you can learn, select, configure, and purchase (lease) Volvo car. \n' +
          'Sergey was a part of a team working on a b2b section allowing companies to run the so-called “fleet” of Volvo cars. To be more specific he worked with the “learn” part of it, where you can compare different offers and find out all the necessary information about “car subscriptions” - [Business page](https://www.volvocars.com/se/business) and [Fleet page](https://www.volvocars.com/se/business/fleet). Main responsibilities were: starting the new application within the family of others, adopting patterns and practices used in the company, developing and maintaining new modules of the pages using cms and GraphQL for data.\n',
        id: Company.volvo,
      },
      {
        name: 'Tink',
        position: 'Frontend Web Developer',
        startDate: '2021-07',
        endDate: '2021-09',
        history:
          'Tink is a growing open banking platform designed to help businesses and their clients work with online payments, aggregating accounts data from different banks within the single application. Sergey was invited to help with maintaining the front-side part of a platform during the short time of a lack of developers. The idea was to sign someone who could quickly get into the processes and development patterns with the least effect on the team development speed and efficiency. Besides just implementing the tasks from a backlog Sergey did a lot of pair-programming, sharing ideas, improving developer experience, and helping junior developers.',
        id: Company.tink,
      },
      {
        name: 'Nasdaq',
        position: 'Frontend Web Developer',
        startDate: '2021-05',
        endDate: '2021-06',
        history: `Nasdaq is the second largest world stock exchange. Besides, it has a widespread network of developers all over the world to create and maintain systems for its own needs. Sergey was invited to help the team which mostly consists of backend developers to set up the proper client side of the new project. The main achievements were:
* Setting up fully typed Redux store with Redux-observable for the side effects and async operations;
* Setting up proper routing with React-router;
* Setting up formik helpers to use in forms;
* But most of all it was sharing knowledge about best practices regarding React, Redux, Typescript, UX, CSS, and other frontend related technologies. Lots of the time was spent on refactoring, code reviews, pair-programming, mob-programming, consultations.`,
        id: Company.nasdaq,
      },
      {
        name: 'Itchy',
        position: 'React-Native Developer',
        startDate: '2021-02',
        endDate: '2021-04',
        history:
          'Itchy is a small startup creating their own skin supplies and providing you with a whole set of services helping you with any kind of skin conditions. They are developing their own native mobile app to be in touch with their customers and help them with their daily skincare routine. Despite it being Sergey’s first ever enterprise experience with React-native he managed to provide all the suitable web React patterns and solutions, as long as successfully adapting to use native only tools and specific implementations, especially with animation.',
        id: Company.itchy,
      },
      {
        name: 'Netinsight',
        position: 'Frontend Web Developer',
        startDate: '2019-09',
        endDate: '2020-09',
        history: `Netinsight works with a few largest broadcast companies such as BBC and NBC providing efficient media transport products.  Sergey worked with the Nimbra Edge product - web based interface to control for video streaming. The frontend part is on React with hooks, Redux, Typescript. Starting working with a demo-like product Sergey managed to turn it into a functioning service used by companies like LinkedIn, NBC and Tata.
           The main achievements were:
* Switching from React-app default building to fully controlled build up;
* Switching from redux-thunk based state management to fully typed modern Redux-observable based one; 
* Improving developer experience adding EsLint, pre commit hooks etc.;
* Adding puppeteer based tests on Jest with integrating those into CI with allure reports.
           `,
        id: Company.netinsight,
      },
    ],
  },
  {
    name: 'Yandex',
    position: 'Frontend Web Developer',
    startDate: '2017-09',
    endDate: '2019-07',
    history: `Yandex is the largest IT company in Russia. It offers lots of b2c and b2b services like search engine, advertising, maps, taxi and lots of others. Yandex.Market is a price comparison service and a marketplace with its own order and shipment platform. The project Sergey participated in was the b2b part of service where shops and suppliers could place their offers in the service. Among the other achievements should be mentioned:
* Huge contribution to moving from legacy code to React, Node.js based application;
* Moving backend Node.js part from CommonJS to ES-modules with Flow-typed code with Babel-compilation;
* Contribution to integration test system based on WebdriverIO and Hermione/Gemini.`,
    id: Company.yandex,
  },
  {
    name: 'Sberbank-Technologies',
    position: 'Frontend Web Developer',
    startDate: '2015-10',
    endDate: '2017-08',
    history: `Sberbank Technologies is an IT-company created to develop and maintain IT products for Russia's largest bank Sberbank. Sergey's team focused on UI/UX research finding the best solutions for products developed by the Company, participating in many of them. The main contribution was to the helpdesk-system that is used by every Sberbank employee all over Russia. The main achievements are:
* Moving the legacy GWT/jQuery based code to the new Angular-application;
* Developing new UI-components library;
* Having modern CSS decisions integrated to the application.`,
    id: Company.sb,
  },
  {
    name: 'Systems and Projects',
    position: 'Web Developer / IBM Lotus Notes Developer',
    startDate: '2011-12',
    endDate: '2015-09',
    history: `Systems and Projects is the group of companies focused on developing document workflow systems on different platforms. Projects worked on included:
* Web-based document workflow system with full-stack contribution;
* IBM Lotus Notes based document workflow system which was widely used by many Moscow government departments.`,
    id: Company.ursip,
  },
  {
    name: 'Mosvodostok',
    position: 'IBM Lotus Notes Developer',
    startDate: '2010-09',
    endDate: '2011-12',
    history:
      "The company focused on constructing and maintaining the city drainage systems. Sergey's responsibilities were creating and maintaining the IBM Lotus Notes databases and client interfaces. Among the others I contributed to the HR-system, document workflow system, counterparty database, common portal for all systems.",
    id: Company.mvs,
  },
  {
    name: 'Moscow Airport Domodedovo',
    position: 'IBM Lotus Notes QA Engineer',
    startDate: '2009-12',
    endDate: '2011-01',
    history:
      'Domodedovo is one of the biggest airports in Russia having most of the IT systems maintained themselves. Sergey had a successful internship here, and got a job as QA.',
    id: Company.eastline,
  },
]
