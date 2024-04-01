import { Header } from "./header";

export const About:React.FC = () => {
    return (
        <div className="flex flex-col items-center">
        <div className="flex  w-full mt-8 lg:mt-16">
            <Header title="About me" />
        </div>
        <div className="mt-5 mb-5 text-medium text-gray-900 w-full ">
                <p className="mt-5">
                    Experienced professional with over 9 years of expertise in developing native windows and web applications, as well as strategic planning and project execution.<br/>
                    Skilled in agile methodologies, customer interaction, and successfully leading teams to project completion.<br/><br/>
                    Passionate about UX and always striving to create exceptional user experiences.<br/><br/>
                    Proficient in front-end technologies such as Angular, React, Next.js, TypeScript, JavaScript, jQuery, Ajax, HTML, CSS, SASS, Bootstrap, and Tailwind css.<br/>
                    Experienced in back-end development using Asp .Net MVC, .Net Core, and Web API.<br/>
                    Well-versed in working with databases including MS SQL, Postgres SQL, and Oracle.<br/>
                    Familiar with Hadoop for data warehousing.<br/>
                    Knowledgeable in cloud platforms such as Openshift and Azure.
                </p>
         </div>
    </div>
    );
  };
  