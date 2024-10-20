"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaRProject,
  FaJava,
  FaBootstrap,
  FaAws,} from "react-icons/fa";


// icons
import { 
  SiPython, SiR, SiC, SiCplusplus, SiJava, SiHtml5, SiCss3, 
  SiJavascript, SiHaskell, SiSqlite, SiXml, SiMatlab, SiLinux,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiPandas,
  SiXgboost, SiSpacy, SiPlotly, SiStreamlit, SiHuggingface,
  SiNodedotjs, SiReact, SiSpringboot, SiOpencv, SiDjango,
  SiPyspark, SiMaven, SiGradle, SiJunit, SiGit, SiTableau,
  SiPowerbi, SiApachespark, SiDatabricks, SiMicrosoftexcel, 
  SiVirtualbox, SiDocker, SiVisualstudiocode, SiIntellijidea, 
  SiEclipse, SiNetbeans, SiJupyter, SiPycharm, SiWeka, 
  SiKaggle, SiSublimetext, SiMicrosoftoffice, SiOracle, 
  SiMicrosoftsqlserver, SiMysql, SiMongodb, SiMicrosoftazure, 
  SiAmazonaws, SiWindows, SiPostman, SiUbuntu, SiGoogleanalytics, 
  SiSimulink, SiBluemix, SiVercel, SiGnubash, SiNextdotjs, 
  SiTailwindcss, SiFirebase, SiMicrosoftsharepoint, SiMicrosoftpowerpoint,
  SiAdminer, SiCsharp, SiTradingview, SiOpenzeppelin, SiSolidity
} from "react-icons/si";


import { VscAzureDevops } from "react-icons/vsc";

// about data 
const about = {
    title: "About Me",
    description:
      "Driven CS professional with expertise in Data Science, Machine Learning, Data Engineering, Automation, and DevOps. Leveraging a strong foundation in computer science and a history of impactful projects, I aim to innovate and deliver data-driven solutions.",
    info: [
        {
         fieldName: "Name",
         fieldValue: "Anoushka Mergoju"
        },
        {
         fieldName: "Experience",
         fieldValue: "1.5 Years"
        },
        {
         fieldName: "Nationality",
         fieldValue: "Indian"
        },
        {
         fieldName: "Email",
         fieldValue: "amergoju@syr.edu"  
        },
        {
         fieldName: "Languages Known",
         fieldValue: "English, Hindi, Telugu"  
        }
    ]   
};
  
// about Experience 
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
      "With a strong foundation in computer science and a continuous drive for learning, my career spans roles in data science, machine learning, data engineering, automation, and DevOps. I've led impactful projects in drone delivery optimization, HR analytics, and AI-driven health support, showcasing my ability to deliver data-driven solutions and drive innovation. Below are highlights from my career:",
    items: [
      {
        company: "Syracuse University",
        position: "Machine Learning Researcher",
        duration: "June 2024 - Present",
      },
      {
        company: "Syracuse University",
        position: "Operations Research Analyst",
        duration: "May 2023 - Dec 2023",
      },
      {
        company: "InfyBytes AI Labs Pvt Ltd",
        position: "Data Analyst Intern",
        duration: "May 2022 - Aug 2022",
      },
      {
        company: "Chegg India",
        position: "Freelance Managed Network Expert",
        duration: "Apr 2022 - June 2022",
      },
      {
        company: "GAOTek Inc.",
        position: "Software Developer Intern",
        duration: "Oct 2021 - Jan 2022",
      },
      {
        company: "TakenMind Technologies",
        position: "Data Analysis and Finance Intern",
        duration: "Apr 2021 - June 2021",
      },
      {
        company: "Verzeo",
        position: "Machine Learning Project Intern",
        duration: "Apr 2021 - June 2021",
      },
      {
        company: "CodeSpeedy Technology Pvt Ltd",
        position: "Python Developer Intern",
        duration: "Mar 2021 - June 2021",
      },
      {
        company: "The Sparks Foundation",
        position: "Data Science and Business Analytics Intern",
        duration: "Aug 2020 - September 2020",
      },
      {
        company: "Aadox",
        position: "Web Development Intern",
        duration: "June 2020 - July 2020",
      },
      {
        company: "GITAM Deemed University",
        position: "Undergraduate Student ML Researcher",
        duration: "May 2020 - June 2020",
      },
      
    ],
};
  
// about Education 
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "",
    items: [
      {
        institution: "Syracuse University, USA",
        degree: "MS in Computer and Information Sciences",
        duration: "2022 - 2024",
      },
      {
        institution: "GITAM University, IN",
        degree: "BTech in Computer Science Engineering",
        duration: "2018 - 2022",
      },
    ],
};
  
//skills data 
const skills = {
    title: "My Skills",
    description:
      "Throughout my professional experience, I have acquired and continuously refined a diverse assortment of skills. These range from programming languages to integrated development environments (IDEs) and frameworks.",
    skilllist: [
      {
        icon: <FaPython />,
        name: "Python",
      },
      {
        icon: <FaRProject />,
        name: "R / R Studio",
      },
      {
        icon:<SiTableau />,
        name:"Tableau",
      },
      {
        icon: <SiPowerbi />,
        name: "PoweBi",
      },
      {
        icon: <SiTensorflow />,
        name: "Tensor Flow",
      },
      {
        icon: <SiKeras />,
        name: "Keras",
      },
      {
        icon: <SiGoogleanalytics />,
        name:"Google Analytics",
      },
      {
        icon: <FaAws />,
        name: "AWS",
      },
      {
        icon:<SiMicrosoftazure />,
        name:"Microsoft Azure" ,
      },
      {
        icon: <VscAzureDevops />,
        name: "DevOps",
      },
      {
        icon: <SiMicrosoftexcel />,
        name: "Microsoft Excel",
      },
      {
        icon: <SiMicrosoftsqlserver />,
        name: "Microsoft SQL Server",
      },
      {
        icon: <SiMysql />,
        name: "Mysql",
      },
      {
        icon: <SiDocker />,
        name: "Docker",
      },
      {
        icon: <SiC />,
        name: "C Language",
      },
      {
        icon: <SiCplusplus />,
        name: "C++",
      },
      {
        icon: <FaJava />,
        name: "Java",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },

      {
        icon: <FaReact />,
        name: "react.js ",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaBootstrap />,
        name: "BootStrap",
      },
      {
        icon: <SiVisualstudiocode />,
        name: "Visual Studio Code",
      },
    ],
};
  
//project information
const project = {
    title: "My Projects",
    description:
      "Showcasing a variety of projects completed both individually and as part of a team, these endeavors highlight my technical expertise, collaborative skills, and ability to deliver impactful solutions across diverse domains.",
    items: [
      {
        Name: "WellBot",
        description: "An AI-powered Health-care and Mental Health Support Chatbot",
        TechStack: "NLP, ML, ChatBot Development",
      },

      {
        Name: "Smart TextBook Exchange Web Application",
        description: "This app allows buying and selling of used books",
        TechStack: "JavaScript, SpringBoot, MongoDB, Postman, REST",
      },

      {
        Name: "Web-Searching AI Assistant",
        description: "This app allows you to search the web using GPT-4o",
        TechStack: "NLP, Steamlit, OpenAI LLM",
      },

      {
        Name: "Hybrid Movie Recommendation System",
        description: "Incorporates Content-Based, Collaborative-Filtering, SVD, Matrix Factorization",
        TechStack: "Python, ML",
      },

      {
        Name: "Stock Prediction using Facebook Prophet",
        description: "Time Series Forecasting",
        TechStack: "ML, fbProphet",
      },

      {
        Name: "Heart Attack Detection Using Sequential Model",
        description: "Detected heart attack using Deep learning methods ",
        TechStack: "Tensorflow, Keras, Deep Learning",
      },

      {
        Name: "Lightweight Encryption Methods",
        description: "Implementated cryptographic methods for protecting Medical Imaging Data in IoMT",
        TechStack: "ML, Encryption Methods",
      },

      {
        Name: "Anoushka's Website",
        description: "My Personal PortFolio Website",
        TechStack: "HTML, CSS, Javascript, ReactJs, NextJs",
      },

      {
        Name: "COVID Tweet-Sentiment (Dual Model Analysis of the Pandemic)",
        description: "Utilized Naive Bayes and DistilBERT",
        TechStack: "Python, NLP",
      },
      
      {
        Name: "Empirical Analysis of Multiclass Classification Models)",
        description: "Sentiment Analysis of COVID-19 Tweets",
        TechStack: "ML, NLP",
      },

      {
        Name: "COVID-19 Stock Price Forecasting",
        description: "Stock Market Analysis using LSTM and ARIMA",
        TechStack: "Deep Learning",
      },

      {
        Name: "Handwritten Digit Detection",
        description: "Used MNIST and Keras to detect handwritten digits",
        TechStack: "Deep Learning",
      },
      
      

    ],
};

// certifications data
const certificates = {
  icon: "/assets/resume/certificate.svg",
  title: "Certificates",
  description:
    "Below are some of the certifications I have obtained throughout my career.",
  items: [
    {
      name: "Azure AI Fundamentals AI-900",
      issuingOrganization: "Microsoft",
      date: "July 2024",
    },
    {
      name: "Azure Data Scientist Associate",
      issuingOrganization: "Microsoft",
      date: "July 2024",
    },
    {
      name: "Azure Data Engineering Associate",
      issuingOrganization: "Microsoft",
      date: "June 2024",
    },
    {
      name: "Apache Spark (TM) SQL for Data Analysts",
      issuingOrganization: "Databricks",
      date: "May 2024",
    },
    {
      name: "DevOps Professional Certificate",
      issuingOrganization: "PagerDuty",
      date: "May 2024",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuingOrganization: "Amazon Web Services",
      date: "March 2024",
    },
    {
      name: "Machine Learning Algorithms",
      issuingOrganization: "Alberta Machine Intelligence Institute (Amii)",
      date: "September  2021",
    },
    {
      name: "Open Source Software Development Methods",
      issuingOrganization: "The Linux Foundation",
      date: "September  2021",
    }
    // Add more certifications as needed
  ],
}

// testimonials data
const testimonials = {
  title: "Testimonials",
  description: "Here's what people have to say about my work:",
  items: [
    {
      name: "Lata Choudhary",
      relation: "Manager at InfyBytes AI Labs Pvt Ltd (thehomeworkapp.ai)",
      testimonial: "I had the pleasure of managing Anoushka during her internship and was consistently impressed with her expertise in data-driven recruitment, retention strategies, data analysis, automated data scraping, and skills. Anoushka excelled in handling complex data, providing valuable insights, and demonstrating exceptional analytical skills. Her attention to detail, communication skills, and collaborative approach made her an invaluable team member. Her systematic methods ensured timely updates and effective use of critical information. Anoushka's quick learning, enthusiasm, and strong presentation abilities further contributed to her outstanding performance. I highly recommend her for any role in these areas.",
    },
    {
      name: "Saruque Ahamed Mollick",
      position: "Managing Director at CodeSpeedy Technology Private Limited",
      testimonial: "I personally managed this intern and I must say she has the potential and she is a good fit for IT Organisations. I highly recommend this candidate.",
    },
    {
      name: "Ankur Kakkar",
      position: "CEO at AADOX",
      testimonial: "I have known her to be very hardworking concerning any kind of work she has been assigned. She does every work with full commitment and has something new to offer from her side in every project. Based on our experience, I higly recommend her for any organization.",
    },
    // Add more testimonials as necessary
  ],
};



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
        Tooltip,
        TooltipContent,
        TooltipProvider,
        TooltipTrigger,
} from "@/components/ui/tooltip";
  
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
  
const Resume = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
     }}
  className="min-h-[80vh] flex items-center justify-center py-12"
>
  <div className="container mx-auto">
    <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="about" style={{ paddingRight: '6%' }}>About Me</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills" style={{ paddingRight: '11%' }}>Skills</TabsTrigger>
        <TabsTrigger value="experience" style={{ paddingLeft: '5%' }}>Experience</TabsTrigger> 
        <TabsTrigger value="project" style={{ paddingRight: '6%' }}>Projects</TabsTrigger>
        <TabsTrigger value="certificates" style={{ paddingLeft: '10%' }}>Certificates</TabsTrigger>
        <TabsTrigger value="testimonials" style={{ paddingRight: '10%' }}>Testimonials</TabsTrigger>
      </TabsList>

      {/* content */}
      <div className="min-h-[70vh] w-full">
        {/* experience */}
        <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{experience.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                        {experience.description}
                    </p>
            
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                            return (
                                <li key={index} 
                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                <div className=" flex items-center gap-3">
                                    {/* DOT */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className=" text-white/60">{item.company}</p>
                                </div>
                                </li>
                            );
                        })}
                        </ul>
                    </ScrollArea>
            </div>
        </TabsContent>


        {/* Education */}
        <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{education.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {education.description}
                    </p>
            
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                            return (
                                <li key={index} 
                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                <div className=" flex items-center gap-3">
                                    {/* DOT */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className=" text-white/60">{item.institution}</p>
                                </div>
                                </li>
                            );
                        })}
                        </ul>
                    </ScrollArea>
            </div>
        </TabsContent>

        {/* skills */}
        <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                </p>
            
        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xl:gap-[30px]">
            {skills.skilllist.map((skill, index) => {
                 return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                  
            })}
        </ul>
        </div>
        </TabsContent>


        {/* About Me */}
        <TabsContent value="about"
        className="w-full h-full text-center ">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className=" text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
            <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-12 max-w-[620px] mx-auto xl:mx-0 ">
                {about.info.map((item, index) => {
                    return (
                        <li key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                         <span className="text-white/60  text-xl">{item.fieldName}</span>
                         <span className="text-xl">{item.fieldValue}</span>
                        </li>
                        );
                    })}
            </ul>

        </div>
        </TabsContent>

        {/* projects */}
        <TabsContent value="project" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{project.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                        {project.description}
                    </p>
            
                    <ScrollArea className="h-[400px] ">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {project.items.map((item, index) => {
                            return (
                                <li key={index} 
                                className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                <span className="text-l max-w-[221px] min-h-[20px] text-center lg:text-left">{item.Name}</span>
                                <h3 className="text-accent">{item.TechStack}</h3>
                                <div className=" flex items-center gap-3">
                                    {/* DOT */}
                                    
                                    <p className=" text-white/60 text-center lg:text-left">{item.description}</p>
                                </div>
                                </li>
                            );
                        })}
                        </ul>
                    </ScrollArea>
            </div>
        </TabsContent>

        {/* Certifications */}
        <TabsContent value="certificates" className="w-full">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{certificates.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {certificates.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {certificates.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.date}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3">
                  {/* DOT */}
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.issuingOrganization}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  </TabsContent>

  {/* Testimonials */}
{/* Testimonials */}
<TabsContent value="testimonials" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{testimonials.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
      {testimonials.description}
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      {testimonials.items.map((item, index) => {
        return (
          <div key={index} 
            className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            style={{ overflow: 'hidden' }}>
            
            {/* Scrollable Text */}
            <div className="h-[150px] overflow-y-auto">
              <p className="text-white/60">{item.testimonial}</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-3">
              <span className="text-accent">{item.name}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</TabsContent>



        </div>

    </Tabs>
  </div>
</motion.div>


  );
};

export default Resume;

