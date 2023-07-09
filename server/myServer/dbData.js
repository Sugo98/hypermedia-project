export default async (models) => {
    //create record on table Person    
    const personModel = [
      {
        id: 0,
        name: "John Smith",
        role: "Managing Partner",
        description: "John Smith is a highly experienced Managing Partner at our venture capital firm, bringing a strong foundation in investment and strategic leadership. With a keen eye for emerging trends and promising opportunities, he guides the firm's overall direction and decision-making process. John's executive experience at renowned financial institutions, coupled with his extensive network and deep industry knowledge, enables him to cultivate relationships with entrepreneurs and industry leaders. His passion for disruptive technologies and sustainable solutions has driven his active involvement in managing investments in comma.ai, Tesla, NextEra Energy, Peloton, Orsted, and Bloom Energy. With an MBA from a top-tier business school and a commitment to ongoing learning, John's expertise, vision, and leadership make him a valuable asset to our venture capital firm and the companies we support.",
        image: "https://img.freepik.com/free-photo/smiling-caucasian-guy-with-beard-looking-happy_176420-18707.jpg?size=626&ext=jpg"
        // projects: ["SaaS Ventures", "HealthTech Fund", "Green Energy Investments"]
      },
      {
        id: 1,
        name: "Jane Doe",
        role: "Investment Manager",
        description: "Jane Doe is a dedicated Investment Manager at our venture capital firm, bringing a strong background in finance and investment analysis. With expertise in the technology, energy, and healthcare sectors, Jane plays a vital role in evaluating potential investment opportunities and managing portfolio companies. Her experience at a renowned financial institution has equipped her with valuable skills in financial analysis, due diligence, and portfolio management. Jane's keen understanding of market trends allows her to make informed investment decisions and contribute to the success of our portfolio companies. She manages investments in Red Hat, GitLab, Palantir Technologies, Snowflake, UiPath, and Moderna, leveraging her strategic insights and meticulous analysis. Jane's commitment to staying current with industry developments and her passion for supporting innovative companies make her an invaluable member of our team.",
        image: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1380&t=st=1688133232~exp=1688133832~hmac=f12449ec72c9f54cff45e22033548fd68a78a429db7cd7fef7a24b8e53495b65"
        // projects: ["AI Startup Fund", "Blockchain Ventures"]
      },
      {
        id: 2,
        name: "Michael Johnson",
        role: "Analyst",
        description: "Michael Johnson is a diligent Analyst at our venture capital firm, contributing to the investment research and analysis process. With a strong passion for technology, energy, and healthcare sectors, Michael plays a vital role in conducting due diligence, market research, and financial analysis. His analytical mindset, attention to detail, and ability to leverage data-driven insights contribute to evaluating companies such as Red Hat, GitLab, UiPath, Palantir Technologies, and NextEra Energy. Through thorough research and financial modeling, Michael provides valuable insights into market trends, competitive landscapes, and growth potential. His dedication to staying informed about the latest developments ensures that our investment decisions are well-informed and aligned with our overall strategy. With a degree in finance or a related field, Michael's analytical acumen, research skills, and passion for emerging technologies make him an integral part of our team, driving our success in identifying and supporting promising companies.",
        image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?w=1380&t=st=1688133440~exp=1688134040~hmac=eb46ba82b05e1ce3fa3394365bafcdbe03f340752baf7fd91a2e7bdb1111f057"
        // projects: ["SaaS Ventures", "Green Energy Investments", "AI Startup Fund"]
      },
      {
        id: 3,
        name: "Emily Thompson",
        role: "Associate",
        description: "Emily Thompson is a dedicated Associate at our venture capital firm, actively involved in supporting investment activities and portfolio management. With a strong interest in technology, healthcare, and fitness sectors, Emily plays a crucial role in conducting market research, financial analysis, and due diligence to identify and assess potential investment opportunities. Her experience and skills have been applied in analyzing companies such as Red Hat, Palantir Technologies, Orsted, Moderna, Peloton, and Dexcom. Emily's ability to identify emerging trends, perform detailed financial analysis, and contribute to portfolio management make her a valuable asset to our team, ensuring that our investment decisions align with our strategic goals. With a keen eye for promising ventures and a passion for innovation, Emily actively supports the growth and success of our portfolio companies.",
        image: "https://img.freepik.com/free-photo/portrait-young-pretty-positive-girl-smiling_176420-9609.jpg?size=626&ext=jpg"
        // projects: ["HealthTech Fund", "Blockchain Ventures", "Green Energy Investments"]
      },
      {
        id: 4,
        name: "Daniel Brown",
        role: "Venture Partner",
        description: "Daniel Brown is a seasoned Venture Partner at our venture capital firm, bringing a wealth of experience and expertise in strategic investments and business development. With a focus on technology, energy, and healthcare sectors, Daniel plays a pivotal role in identifying and nurturing high-potential companies for investment and growth. His executive background in leading strategic initiatives, mergers and acquisitions, and partnership formations at renowned technology and energy companies enables him to leverage his extensive industry network and deep understanding of market dynamics. Daniel's involvement spans companies such as comma.ai, Red Hat, GitLab, Enel, Palantir Technologies, Snowflake, and Teladoc Health. With his strategic vision and business acumen, Daniel actively contributes to the success of our portfolio companies, driving their growth and positioning them as industry leaders.",
        image: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg"
        // projects: ["HealthTech Fund", "AI Startup Fund"]
      },
      {
        id: 5,
        name: "Olivia Wilson",
        role: "Investment Associate",
        description: "Olivia Wilson is a driven Investment Associate at our venture capital firm, specializing in technology, energy, and healthcare sectors. With a keen eye for emerging opportunities, Olivia plays a vital role in conducting market research, due diligence, and financial analysis to evaluate potential investments. Her dedication and analytical skills have been instrumental in assessing companies such as comma.ai, Enel, Peloton, Bloom Energy, and Moderna. Olivia's expertise in identifying growth potential, market trends, and risk assessment contributes to our investment decision-making process. With a passion for supporting innovative companies and driving positive change, Olivia actively contributes to the success and growth of our portfolio companies, positioning them for long-term success.",
        image: "https://img.freepik.com/free-photo/beautiful-woman-expresses-happy-emotions-has-broad-pleasant-smile-wears-white-longsleeve-feels-satisfied_295783-38.jpg?size=626&ext=jpg"
        // projects: ["Green Energy Investments", "SaaS Ventures"]
      },
      {
        id: 6,
        name: "David Thompson",
        role: "Principal",
        description: "David Thompson is a highly skilled Principal at our venture capital firm, focusing on investments in the energy and healthcare sectors. With a wealth of experience and expertise, David plays a crucial role in evaluating and managing investments in companies such as Orsted, Moderna, Peloton, Dexcom, and Teladoc Health. His in-depth knowledge of the energy landscape, coupled with his understanding of healthcare technology, allows him to identify promising opportunities and guide strategic investment decisions. David's proficiency in financial analysis, market research, and risk assessment ensures that our portfolio companies are well-positioned for growth and success. With his strategic vision and industry insights, David actively contributes to the firm's overall investment strategy, driving value creation and long-term returns for our investors.",
        image: "https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?size=626&ext=jpg"
        // projects: ["SaaS Ventures", "Blockchain Ventures"]
      },
      {
        id: 7,
        name: "Sophia Lee",
        role: "Investment Analyst",
        description: "Sophia Lee is a diligent Investment Analyst at our venture capital firm, specializing in technology, healthcare, and renewable energy sectors. With a passion for identifying innovative companies, Sophia plays a vital role in conducting thorough market research, financial analysis, and due diligence. Her expertise and analytical skills have been instrumental in evaluating and monitoring investments in comma.ai, NextEra Energy, Palantir Technologies, Dexcom, Peloton, and Teladoc Health. Sophia's keen eye for disruptive technologies and her understanding of the healthcare and renewable energy landscapes allow her to identify high-potential opportunities and contribute to the firm's investment decision-making process. With her meticulous attention to detail and commitment to staying informed about emerging trends, Sophia actively supports the growth and success of our portfolio companies, driving positive impact and value creation.",
        image: "https://img.freepik.com/free-photo/headshot-charismatic-pleasant-friendly-european-woman-short-chestnut-haircut-smiling-positive-feeling-happy-upbeat-enjoying-lifes-casually-talking-friends-amused-cheerful-standing-white-background_176420-34680.jpg?size=626&ext=jpg"
        // projects: ["AI Startup Fund", "Green Energy Investments", "HealthTech Fund"]
      },
      {
        id: 8,
        name: "Andrew Wilson",
        role: "Associate",
        description: "Andrew Wilson is a dedicated Associate at our venture capital firm, focusing on investments in the energy, healthcare, and technology sectors. With a strong background in finance and a passion for innovation, Andrew plays a crucial role in conducting market research, financial analysis, and due diligence to evaluate potential investment opportunities. His expertise has been instrumental in assessing companies such as Enel, Bloom Energy, Palantir Technologies, Snowflake, UiPath, and Dexcom. Andrew's keen eye for identifying growth potential, coupled with his understanding of market dynamics, allows him to contribute to the firm's investment decision-making process. With his analytical acumen and dedication to driving positive change, Andrew actively supports the growth and success of our portfolio companies, helping them navigate the competitive landscape and achieve their strategic objectives.",
        image: "https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?size=626&ext=jpg"
        // projects: ["Blockchain Ventures", "SaaS Ventures"]
      },
      {
        id: 9,
        name: "Emma Davis",
        role: "Associate",
        description: "Emma Davis is a diligent Associate at our venture capital firm, specializing in investments across the technology, energy, and healthcare sectors. With a strong background in finance and a passion for innovation, Emma plays a vital role in conducting market research, financial analysis, and due diligence to identify high-potential investment opportunities. Her expertise has been instrumental in evaluating companies such as Red Hat, GitLab, Orsted, Palantir Technologies, UiPath, Moderna, and Teladoc Health. Emma's analytical acumen and keen understanding of industry trends allow her to contribute valuable insights to the firm's investment decision-making process. With her commitment to supporting transformative companies and driving positive impact, Emma actively contributes to the growth and success of our portfolio companies, helping them navigate the competitive landscape and achieve their strategic goals.",
        image: "https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg?size=626&ext=jpg"
        // projects: ["HealthTech Fund", "AI Startup Fund", "Green Energy Investments"]
      }, 
      {
        id: 10,
        name: "Alexandra Williams",
        role: "Chief Executive Officer",
        description: "Alexandra Williams is the visionary Chief Executive Officer (CEO) of our venture capital firm, providing strategic leadership and driving the company's growth and success. With a proven track record in the finance and technology sectors, Alexandra brings a wealth of experience and expertise to her role. Her deep understanding of emerging trends, disruptive technologies, and market dynamics enables her to identify and capitalize on high-potential investment opportunities. Alexandra's leadership and strategic decision-making skills have propelled the firm to new heights, fostering strong relationships with entrepreneurs, industry leaders, and investors. Her commitment to driving innovation and sustainable solutions has positioned our firm as a leader in supporting cutting-edge companies. With a strong network and industry influence, Alexandra actively contributes to the growth and success of our portfolio companies, solidifying our position as a prominent player in the venture capital landscape.",
        image: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?w=1380&t=st=1688660185~exp=1688660785~hmac=899ece7c211f3941c1b471774cd121d7e5185563a379eec849bdf3c0abc35803"
      }
    ];
    
    const person = []
    for(let p of personModel) {
        person.push( await models.Person.create( p ) )
    }
    // ------------------ //


    //create record on table Area
    const areaModel = [
      {
        id: 0,
        name: "Technology",
        description: "Investing in cutting-edge technology startups.",
        imageName: "technology.jpg",
        //projects: ["SaaS Ventures", "AI Startup Fund", "Blockchain Ventures", "Fintech Innovators", "SpaceTech Innovations", "AgriTech Ventures", "RoboTech Solutions", "InsurTech Innovations"]
      },
      {
        id: 1,
        name: "Healthcare",
        description: "Funding innovative healthcare solutions.",
        imageName: "healthcare.jpg",
        //projects: ["HealthTech Fund", "AI Startup Fund", "MedTech Solutions", "Digital Health Innovations", "BioTech Ventures"]
      },
      {
        id: 2,
        name: "Energy",
        description: "Supporting renewable energy and clean technology startups.",
        imageName: "energy.jpg",
        //projects: ["Green Energy Investments", "Renewable Energy Fund", "CleanTech Capital"]
      }
    ];
    const area0 = await models.Area.create(areaModel[0])
    const area1 = await models.Area.create(areaModel[1])
    const area2 = await models.Area.create(areaModel[2])
    // ------------------ //


    //create record on table Project
    const projectModel = [
        {
            id: 0,
            name: "comma.ai",
            description: "comma.ai is a technology company focused on developing advanced driver-assistance systems (ADAS) and self-driving technologies. They specialize in creating retrofit kits that can be installed in existing vehicles, transforming them into semi-autonomous cars. Their solutions include computer vision algorithms and machine learning models that enable vehicles to understand and navigate the road environment, enhancing safety and convenience. comma.ai aims to democratize autonomous driving by providing accessible and affordable solutions to consumers and empowering them with more control over their vehicles.",
            areaId: area0.id,
            supervisorId: person[0].id,
            image: "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/original/7c13fc01-49bb-441d-b907-9f382f6cf3fa.png",
            link: "https://comma.ai/",
            mostRelevant: true,
            // peopleWorking: [person[0].id, person[2].id, person[5].id, person[6].id]
        },
        {
            id: 1,
            name: "Red Hat",
            description: "Red Hat is a technology company known for its expertise in open-source software solutions. They provide enterprise-grade operating systems, cloud infrastructure, and development tools based on Linux and other open-source technologies. Red Hat's products, such as Red Hat Enterprise Linux (RHEL) and OpenShift, offer scalable and reliable platforms for businesses to build and manage their IT infrastructure. They also offer consulting and support services to help organizations implement and optimize open-source solutions. Red Hat's commitment to open-source philosophy has made them a leading player in the enterprise software industry.",
            areaId: area0.id,
            supervisorId: person[1].id,
            image: "https://1000logos.net/wp-content/uploads/2021/04/Red-Hat-logo.png",
            link: "https://www.redhat.com/it"
            // peopleWorking: [person[0].id, person[1].id, person[3].id, person[4].id, person[9].id]
        },
        {
            id: 2,
            name: "GitLab",
            description: "GitLab is a web-based DevOps platform that provides a complete end-to-end toolchain for software development, version control, and collaboration. It enables developers to manage their code repositories, track issues, automate testing and deployment processes, and facilitate collaboration among team members. GitLab's platform supports both Git version control and continuous integration/continuous deployment (CI/CD) workflows, allowing developers to streamline their development cycles and accelerate software delivery. With features like code reviews, project management, and monitoring, GitLab empowers organizations to achieve higher productivity and efficiency in their software development practices.",
            areaId: area0.id,
            supervisorId: person[2].id,
            image: "https://1000logos.net/wp-content/uploads/2023/04/Gitlab-logo-500x281.png",
            link: "https://about.gitlab.com/"
            // peopleWorking: [person[0].id, person[2].id, person[3].id, person[5].id, person[9].id]
        },
        {
            id: 3,
            name: "Palantir Technologies",
            description: "Palantir Technologies is a data analytics and software company that specializes in providing solutions for data integration, analysis, and visualization. Their platforms, such as Palantir Gotham and Palantir Foundry, enable organizations to extract insights from complex and disparate datasets, making it easier to make informed decisions and solve critical problems. Palantir's software is widely used in various sectors, including defense, intelligence, law enforcement, and finance, to identify patterns, detect fraud, optimize operations, and enhance security. By leveraging advanced analytics and artificial intelligence, Palantir helps organizations harness the power of their data to gain a competitive edge.",
            areaId: area0.id,
            supervisorId: person[3].id,
            image: "https://1000logos.net/wp-content/uploads/2022/08/Palantir-Logo-500x281.png",
            link: "https://www.palantir.com/"
            // peopleWorking: [person[1].id, person[2].id, person[4].id, person[7].id]
        },
        {
            id: 4,
            name: "Snowflake",
            description: "Snowflake is a cloud-based data warehousing company that provides a platform for storing, processing, and analyzing large volumes of data. Their architecture separates storage and computing, allowing users to scale resources independently and efficiently manage data workloads. Snowflake's platform supports structured and semi-structured data, making it suitable for a wide range of use cases, from business intelligence and analytics to machine learning and data engineering. By leveraging the power of the cloud, Snowflake enables organizations to democratize data access, collaborate seamlessly, and derive valuable insights from their data with improved performance and scalability.",
            areaId: area0.id,
            supervisorId: person[4].id,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/2560px-Snowflake_Logo.svg.png",
            link: "https://www.snowflake.com/it/",
            mostRelevant: true,
            // peopleWorking: [person[1].id, person[3].id, person[6].id, person[8].id]
        },
        {
            id: 5,
            name: "UiPath",
            description: "UiPath is a leading provider of robotic process automation (RPA) software, which enables organizations to automate repetitive and rule-based tasks using software robots or 'bots.' Their platform offers a comprehensive suite of tools for designing, deploying, and managing these bots, allowing businesses to streamline workflows, increase operational efficiency, and reduce human errors. UiPath's RPA solutions can be integrated with existing applications, databases, and systems, enabling seamless automation across various departments and industries. With a focus on democratizing automation, UiPath aims to empower organizations to embrace digital transformation and unlock new levels of productivity and innovation.",
            areaId: area0.id,
            supervisorId: person[5].id,
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAqCAMAAAC+9zSRAAAAdVBMVEX////6Rhb6OAD7Sx3/wrf7UCX6PgD/+/r+zMP7RQv+vbH7MwD6Qgz/ysD/39j/8e78aUv9loP7KwD9kX79jXn8c1b/5d/9e2H+sqP9iHL/6+f+p5f+1s/+o5P+0Mj/9vT8Y0L8FAD9gmj9nYv+t6v7Wzb+rJ4e25seAAADAklEQVRYheWYbZuqIBCGkTXMIHXJxMS3Tdf//xPPAEpWmp5tu/qw80l5uxmcmYdCH85Kwy76TfuLXIKX7CVc0pTbBfNfwcW7xVFv4np/hJuJOq7ewPUJw+I5bpgHQT56z/I8q1BiuVmSJJntNC85hfyh3ojrJYNVD2mX1fYc46/xPs6BLBC23IhTfho6T/ASIZRwldxjbvBFe+N+nMxzj7DA2XAh9/m4q0Fpk8aWe2QOOQx9MXHYUfMxT9GYSy8FjFA5yxWw2mmaW3htcOgec1G+005dczG4i4n6BLPgB9zeHnN7u+JityxL96RqJ5076ie5qZTF/pZLQz1mCwuSTzO+bISI2wplhZRNhVpZM4dFnSzKgevGx+jUViu5Ncb0cMfNrE+sVg/5hhLCCKYygODlITpiBofBYHKhuTTwKWEwAqfruBEzLk1yO1jRh2B3ORukEsar4xC2QWquQ2CLuo0enuemhquTjYHHFCY5mnvUO2GQbMZfpbTfta+e+P5p7gEGfesxDqnLsApinWTADUNYjZ3DDCqT8VfAHK+DfrZ5lltBJpEzStRi0eUETNhdx7MJAygZ5JICP+CGJpjUtyyRxJcTQDWb5OLSdIf0Igb/z3U+wAgFhNKMM7HuItTiSS4f8kfB0h9z7U2v9swQW9dzOs0d+uGMbrmCjOaDE0TMcs01kPq6Sj7L7aPT2HfPm+SSppNStrnd4vI5P+DqKX2sBXgQx/m4GmxNXD3iZjrePdVUqek4nOXa6wHqWwYN6Wwena2wLHHVB4Z6U7j7RpUds9sV3L5ubKFuaIky3EKJRpck4TI36wuaVlaGq7VcUycxxZQ4lpsbnebNMheVtr4DPUBruSNdIJuBi4TxoljBRVkE1whGQNBEHzr3OqiE7oaLgl4H+Sk3OqgMrkgwubm+1znQ1N1x4czSWIhDaxduIWGudF8Je3F/ldS6n2ZX3aEL6bZFiWoaxqkEzCe4c/ZXfqe8mLu84ku45NNdsN1LuO/6n+Ft/6u8g7tZa/6vcv8Bb1lGhfG3aaIAAAAASUVORK5CYII=",
            link: "https://www.uipath.com/"
            // peopleWorking: [person[0].id, person[2].id, person[7].id, person[6].id]
        },
        {
            id: 6,
            name: "Enel",
            description: "Enel is a global energy company focused on the generation, distribution, and sale of electricity and gas. They are one of the world's largest renewable energy producers, with a significant presence in wind, solar, hydroelectric, and geothermal power generation. Enel is committed to sustainable development and reducing carbon emissions by investing in renewable energy projects and adopting innovative technologies. They also provide energy services to residential, commercial, and industrial customers, offering solutions for energy efficiency, smart grids, and electric mobility. Enel's goal is to drive the transition towards a more sustainable and decarbonized energy sector.",
            areaId: area2.id,
            supervisorId: person[6].id,
            image: "https://1000logos.net/wp-content/uploads/2020/09/Enel-Logo-500x313.png",
            link: "https://www.enel.it/"
            // peopleWorking: [person[0].id, person[4].id, person[5].id, person[9].id]
        },
        {
            id: 7,
            name: "Tesla",
            description: "Tesla is an electric vehicle and clean energy company known for its cutting-edge electric cars, energy storage solutions, and solar energy products. Tesla's electric vehicles are renowned for their performance, range, and innovative features like Autopilot, which offers semi-autonomous driving capabilities. In addition to cars, Tesla also develops energy storage systems, such as the Powerwall and Powerpack, which allow for efficient storage and utilization of renewable energy. They are also involved in large-scale projects like the construction of the Tesla Gigafactory, where they manufacture electric vehicle batteries and other energy storage technologies. Tesla aims to accelerate the transition to sustainable transportation and renewable energy.",
            areaId: area2.id,
            supervisorId: person[7].id,
            image: "https://1000logos.net/wp-content/uploads/2021/04/Tesla-logo-500x281.png",
            link: "https://www.tesla.com"
            // peopleWorking: [person[0].id, person[2].id, person[3].id, person[5].id]
        },
        {
            id: 8,
            name: "NextEra Energy",
            description: "NextEra Energy is a leading clean energy company in the United States. They are primarily focused on generating electricity from renewable sources, such as wind and solar power. NextEra Energy operates through its subsidiaries, including Florida Power & Light (FPL) and NextEra Energy Resources, which develop, own, and operate renewable energy projects across the country. They also invest in energy storage and transmission infrastructure to support the integration of renewable energy into the grid. NextEra Energy's commitment to sustainability and their substantial renewable energy portfolio positions them as a key player in the transition towards a more sustainable and low-carbon energy future.",
            areaId: area2.id,
            supervisorId: person[8].id,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/NextEra_Energy_logo_%281%29.svg/220px-NextEra_Energy_logo_%281%29.svg.png",
            link: "http://www.nexteraenergy.com/"
            // peopleWorking: [person[1].id, person[7].id, person[6].id, person[9].id]
        },
        {
            id: 9,
            name: "Bloom Energy",
            description: "Bloom Energy is a company that specializes in solid oxide fuel cell technology, enabling the efficient generation of electricity from various fuel sources, including natural gas, biogas, and hydrogen. Their fuel cells are highly efficient and produce fewer emissions compared to traditional combustion-based power generation methods. Bloom Energy's solutions are used in a wide range of applications, from on-site power generation for commercial and industrial facilities to utility-scale deployments. By providing clean and reliable power solutions, Bloom Energy aims to address the challenges of energy security, resilience, and sustainability in a rapidly evolving energy landscape.",
            areaId: area2.id,
            supervisorId: person[9].id,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bloomenergylogo.svg/200px-Bloomenergylogo.svg.png",
            link: "https://www.bloomenergy.com/"
            // peopleWorking: [person[0].id, person[2].id, person[3].id, person[7].id, person[8].id]
        },
        {
            id: 10,
            name: "Orsted",
            description: "Orsted, formerly known as DONG Energy, is a Danish renewable energy company with a strong focus on offshore wind power. They are one of the global leaders in offshore wind farm development, construction, and operation. Orsted's projects harness the power of wind to generate clean and sustainable electricity, reducing dependence on fossil fuels and mitigating climate change. They also have investments in bioenergy, solar power, and energy storage solutions. Orsted's commitment to the transition to renewable energy has earned them recognition as a leading player in the global renewable energy industry.",
            areaId: area2.id,
            supervisorId: person[10].id,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%C3%98rsted_logo.svg/200px-%C3%98rsted_logo.svg.png",
            link: "https://orsted.com/",
            mostRelevant: true,
            // peopleWorking: [person[0].id, person[1].id, person[6].id, person[7].id]
        },
        {
            id: 11,
            name: "Moderna",
            description: "Moderna is a biotechnology company that specializes in developing messenger RNA (mRNA) therapeutics and vaccines. Their mRNA technology platform allows for the production of synthetic mRNA molecules that encode specific proteins, which can be used to stimulate an immune response or deliver therapeutic proteins to target cells. Moderna gained significant attention for its development of one of the leading COVID-19 vaccines, which utilizes mRNA technology. They are also engaged in the development of mRNA-based treatments for various diseases, including cancer and rare genetic disorders. Moderna's innovative approach to drug development has the potential to revolutionize the field of medicine.",
            areaId: area1.id,
            supervisorId: person[1].id,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Moderna_logo.svg/200px-Moderna_logo.svg.png",
            link: "https://www.modernatx.com/"
            // peopleWorking: [person[1].id, person[3].id, person[5].id, person[6].id]
        },
        {
            id: 12,
            name: "Teladoc Health",
            description: "Teladoc Health is a telemedicine company that provides virtual healthcare services, allowing patients to access medical consultations and treatment remotely. Their platform enables individuals to connect with licensed healthcare professionals through video or phone calls, making it convenient to receive healthcare advice, diagnosis, and prescriptions from the comfort of their homes. Teladoc Health's services cover a wide range of medical conditions, including general healthcare, mental health, dermatology, and chronic disease management. By leveraging technology, Teladoc Health aims to increase access to quality healthcare, improve patient outcomes, and reduce healthcare costs.",
            areaId: area1.id,
            supervisorId: person[4].id,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Teladoc_Logo.svg/220px-Teladoc_Logo.svg.png",
            link: "http://teladochealth.com/"
            // peopleWorking: [person[0].id, person[2].id, person[3].id, person[5].id]
        },
        {
            id: 13,
            name: "Peloton",
            description: "Peloton is a fitness technology company that offers connected exercise equipment and digital fitness subscriptions. Their flagship product is the Peloton Bike, which features an integrated screen for streaming live and on-demand cycling classes. They also offer the Peloton Tread, a treadmill with interactive training features. Peloton's digital fitness platform provides access to a vast library of workout classes across various disciplines, including cycling, running, strength training, and yoga. Through their technology and community-driven approach, Peloton aims to create engaging and immersive fitness experiences that enable individuals to achieve their health and wellness goals.",
            areaId: area1.id,
            supervisorId: person[6].id,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Peloton_%28company%29_logo.svg/220px-Peloton_%28company%29_logo.svg.png",
            link: "https://onepeloton.com/"
            // peopleWorking: [person[1].id, person[7].id, person[6].id, person[8].id]
        },
        {
            id: 14,
            name: "Dexcom",
            description: "Dexcom is a medical device company that specializes in continuous glucose monitoring (CGM) systems for people with diabetes. Their CGM systems provide real-time glucose readings, enabling individuals to monitor their blood sugar levels continuously throughout the day. Dexcom's devices are compact, wearable sensors that communicate wirelessly with a receiver or smartphone, providing actionable insights and alerts for better diabetes management. By offering accurate and convenient glucose monitoring solutions, Dexcom helps individuals with diabetes maintain better control over their condition, reduce the risk of complications, and improve their overall quality of life.",
            areaId: area1.id,
            supervisorId: person[7].id,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Dexcom_logo.svg/220px-Dexcom_logo.svg.png",
            link: "http://dexcom.com/",
            mostRelevant: true,
            // peopleWorking: [person[0].id, person[4].id, person[5].id, person[9].id]
        }
    ];
    const project = []
    for(let p of projectModel) {
        project.push( await models.Project.create(p) )
    }
    // ------------------ //


    //create record on table WorkOn
    const workOnModel = [
    //project 0
    {
        projectId: project[0].id,
        personId: person[0].id
    },
    {
        projectId: project[0].id,
        personId: person[5].id
    },
    {
        projectId: project[0].id,
        personId: person[4].id
    },
    {
        projectId: project[0].id,
        personId: person[7].id
    },
    //project 1
    {
        projectId: project[1].id,
        personId: person[1].id
    },
    {
        projectId: project[1].id,
        personId: person[3].id
    },
    {
        projectId: project[1].id,
        personId: person[9].id
    },
    {
        projectId: project[1].id,
        personId: person[2].id
    },
    //project 2
    {
        projectId: project[2].id,
        personId: person[2].id
    },
    {
        projectId: project[2].id,
        personId: person[9].id
    },
    {
        projectId: project[2].id,
        personId: person[4].id
    },
    {
        projectId: project[2].id,
        personId: person[1].id
    },
    //project 3
    {
        projectId: project[3].id,
        personId: person[3].id
    },
    {
        projectId: project[3].id,
        personId: person[5].id
    },
    {
        projectId: project[3].id,
        personId: person[8].id
    },
    {
        projectId: project[3].id,
        personId: person[4].id
    },
    //project 4
    {
        projectId: project[4].id,
        personId: person[4].id
    },
    {
        projectId: project[4].id,
        personId: person[7].id
    },
    {
        projectId: project[4].id,
        personId: person[1].id
    },
    {
        projectId: project[4].id,
        personId: person[9].id
    },
    //project 5
    {
        projectId: project[5].id,
        personId: person[5].id
    },
    {
        projectId: project[5].id,
        personId: person[2].id
    },
    {
        projectId: project[5].id,
        personId: person[8].id
    },
    {
        projectId: project[5].id,
        personId: person[1].id
    },
    //project 6
    {
        projectId: project[6].id,
        personId: person[6].id
    },
    {
        projectId: project[6].id,
        personId: person[2].id
    },
    {
        projectId: project[6].id,
        personId: person[4].id
    },
    {
        projectId: project[6].id,
        personId: person[1].id
    },
    //project 7
    {
        projectId: project[7].id,
        personId: person[7].id
    },
    {
        projectId: project[7].id,
        personId: person[8].id
    },
    {
        projectId: project[7].id,
        personId: person[9].id
    },
    {
        projectId: project[7].id,
        personId: person[0].id
    },
    //project 8
    {
        projectId: project[8].id,
        personId: person[8].id
    },
    {
        projectId: project[8].id,
        personId: person[2].id
    },
    {
        projectId: project[8].id,
        personId: person[0].id
    },
    {
        projectId: project[8].id,
        personId: person[5].id
    },
    //project 9
    {
        projectId: project[9].id,
        personId: person[9].id
    },
    {
        projectId: project[9].id,
        personId: person[8].id
    },
    {
        projectId: project[9].id,
        personId: person[10].id
    },
    {
        projectId: project[9].id,
        personId: person[0].id
    },
    //project 10
    {
        projectId: project[10].id,
        personId: person[10].id
    },
    {
        projectId: project[10].id,
        personId: person[5].id
    },
    {
        projectId: project[10].id,
        personId: person[1].id
    },
    {
        projectId: project[10].id,
        personId: person[3].id
    },
    //project 11
    {
        projectId: project[11].id,
        personId: person[1].id
    },
    {
        projectId: project[11].id,
        personId: person[3].id
    },
    {
        projectId: project[11].id,
        personId: person[6].id
    },
    {
        projectId: project[11].id,
        personId: person[9].id
    },
    //project 12 
    {
        projectId: project[12].id,
        personId: person[4].id
    },
    {
        projectId: project[12].id,
        personId: person[6].id
    },
    {
        projectId: project[12].id,
        personId: person[10].id
    },
    {
        projectId: project[12].id,
        personId: person[7].id
    },
    //project 13
    {
        projectId: project[13].id,
        personId: person[6].id
    },
    {
        projectId: project[13].id,
        personId: person[3].id
    },
    {
        projectId: project[13].id,
        personId: person[10].id
    },
    {
        projectId: project[13].id,
        personId: person[0].id
    },
    //project 14
    {
        projectId: project[14].id,
        personId: person[7].id
    },
    {
        projectId: project[14].id,
        personId: person[6].id
    },
    {
        projectId: project[14].id,
        personId: person[10].id
    },
    {
        projectId: project[14].id,
        personId: person[3].id
    },
];


await models.WorkOn.bulkCreate(workOnModel)
// ------------------ //


/*     const areaModel
const projectModel
const workOnModel */

}