import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import AboutMe from "./AboutMe";

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hi! 👋 I'm Diego`} bgImage={'bg-virus'} techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'React', 'Figma', 'Netlify']}>
                    
                    <ParagraphLight>
                        I start coding in the school and create projects with Turbo Pascal, and visual studio. I discover Flash, Html, Css and Dreaweaver to make simple websites.
                    </ParagraphLight>

                    <ParagraphLight>
                        I think making such a big change in my life allowed me to face most of my fears and reassured my self-confidence and trust in my capabilities, which is difficult for someone that is constantly pushing himself to be better.
                    </ParagraphLight>
                    <ParagraphLight>
                        That last experience is what brings me to this moment, returning to my humble beginnings in web development. With all the work experience I gathered on different companies, and the practice gained by studying engineering and a masters, I’m now focusing all my energy and knowledge into becoming the best web developer I can be, hoping to work in this industry for the rest of my professional life.
                    </ParagraphLight>
                    <ParagraphLight>
                        I know I might be late in the game, but I’m studying new technologies every day, coding and building projects as often as I can, and looking forward to gaining work experience in web development related companies.
                    </ParagraphLight>
                    <ParagraphLight>
                        I’m a firm believer in the growth mindset concept, and that “life is not about finding yourself, but about creating yourself” (George Bernard Shaw).
                    </ParagraphLight>

                    <ParagraphLight>
                    My hobbies are: draw, coffee lover, hiking,  volunteer and many ONG, learn new languages. 
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;