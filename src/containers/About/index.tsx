import Card, { Types } from "./components/Card";
import "./index.scss";

const About = () => {
  const hockeyDesc = `In my free time while I'm not coding, my favorite thing to do is play hockey. I have played since I was 4 years old, and still love it to this day. I played Tier 1 hockey in Calgary growing up.`;

  const vgDesc = `When I'm not playing hockey, I love to play video games. My most played games probably live in the Call of Duty franchise, but I've also spent a lot of time with Apex Legends, Brawlhalla.`;

  return (
    <div className="about">
      <h1 className="header">A little more about me:</h1>
      <div className="container">
        <Card
          category={Types.WorkExperience}
          work={[
            {
              title: "SOFTWARE DEVELOPER",
              subtitle: "GIFTBIT | 2022-2024",
              desc: [
                "Worked in a team of developers to upgrade our app from a legacy Grails server rendered solution to a single-page React app",
                "Built, tested, and branded fully custom authentication flows using Microsoft Azure B2C and Custom Policies",
                "Responded to business requests quickly and efficiently to ensure our customers could use our app without issue",
              ],
            },
          ]}
        />
        <Card
          category={Types.TechnicalSkills}
          techSkills={[
            "React",
            "Typescript",
            "Java",
            "Groovy / Grails",
            "Python",
            "NodeJS / Express",
            "Git",
          ]}
        />
        <Card
          category={Types.SoftSkills}
          softSkills={[
            "Time Management",
            "Attention To Detail",
            "Positive Attitude",
            "Team Player",
            "Problem Solving Skills",
            "Excellent Communication",
            "Creative Thinking",
            "Great Organizational Skills",
          ]}
        />
        <Card
          category={Types.Interests}
          interests={[
            {
              title: "HOCKEY",
              desc: hockeyDesc,
            },
            {
              title: "VIDEO GAMES",
              desc: vgDesc,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
