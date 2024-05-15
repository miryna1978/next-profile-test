import Link from 'next/link'
import Image from 'next/image'
import heroPic from '../public/images/index-hero.jpg'
import profilePic from '../public/images/profile.jpg'

const Index = () => {
  return (
    <>
      <section className='hero'>
        <Image src={heroPic} alt="hero" />
        <div className='textContainer'>
          <h1>Hello, I'm mimy!!</h1>
          <p>Web Developer / Owner of music media “sono”</p>
        </div>
      </section>

      <div className='container'>
        <section className='profile'>
          <div>
            <h2>Profession</h2>
            <p>Front-End Engineer, Track Maker, Project Manager</p>
            
            <h2>Background</h2>
            <ul>
                <li>Graduated from Fukuoka Prefectural Shuyukan High School</li>
                <li>Graduated as valedictorian from the Department of German Studies, Faculty of Humanities at Fukuoka University, serving as the class representative</li>
                <li>Held various positions such as salesperson, customer support operator, and front-end engineer, and volunteered from 2015 to 2018 as the organizer of study support for junior high students and English classes for elementary students</li>
                <li>Joined Freude Inc. in 2019, later transferring to Freude Gizmo within the same group</li>
                <li>In 2021, joined Carabiner Technology Inc., participating in the planning, product development, and operation of the internal startup project "Timeless Coffee"</li>
                <li>Began constructing the VR music platform "sono" as a personal project in 2022, participating in Fukuoka City's entrepreneurship program "Global Challenge! STARTUP TEAM FUKUOKA"</li>
                <li>Joined Global Works Corporation in 2023, serving as head of VR development, IT instructor, and web engineer</li>
            </ul>
            
            <h2>Awards</h2>
            <ul>
                <li>In February 2024, received second place in the "Promising Business Idea" category at the Ministry of Economy, Trade and Industry sponsored "J-StarX" Regional Entrepreneur Course in Silicon Valley</li>
            </ul>
          </div>

          <figure>
            <Image src={profilePic} alt="hero" />
          </figure>
        </section>

        <section className='skills'>
          <h2>Skills</h2>
          <div className='skillsContainer'>
            {/* <div>
              <img src="/images/javascript.svg" alt="javascript" />
              <span>JavaScript / 10 years</span>
            </div> */}
            <div>
              <img src="/images/react.svg" alt="React" />
              <span>React</span>
            </div>
            <div>
              <img src="/images/next.svg" alt="Next.js" />
              <span>Next.js</span>
            </div>
          </div>
        </section>

        <p className='ctaButton'>
          <Link href="/contact">CONTACT</Link>
        </p>
      </div>
    </>
  )
}

export default Index