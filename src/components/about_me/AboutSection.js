import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import AboutMe from "./AboutMe";

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hi! 👋 I'm Diego`} bgImage={'bg-virus'} techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'React', 'Figma', 'Netlify', 'Linux']}>
                    <ParagraphLight>
                        My interest in technology started when I was a teenager and <a class='link link-primary' href='https://en.wikipedia.org/wiki/Dial-up_Internet_access' target='_blank' rel='noreferrer'>dial-up</a> Internet connections were booming. I remember how this new world can connect each other, I was really fascinate what i can do.
                    </ParagraphLight>
                    <ParagraphLight>
                        It was inevitable that I started playing with HTML also. I used to make very rudimentary pages about things I liked and hosting them on <a class='link link-primary' href='https://en.wikipedia.org/wiki/Yahoo!_GeoCities' target='_blank' rel='noreferrer'>GeoCities</a> for free.
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
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;