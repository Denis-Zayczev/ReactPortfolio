import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['З', 'а', 'й', 'ц', 'е', 'в']
  const LastNameArray = ['Д', 'е', 'н', 'и', 'с']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    '-',
    'р',
    'а',
    'з',
    'р',
    'а',
    'б',
    'о',
    'т',
    'ч',
    'и',
    'к',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>П</span>
            <span className={`${letterClass} _12`}>р</span>
            <span className={`${letterClass} _12`}>и</span>
            <span className={`${letterClass} _12`}>в</span>
            <span className={`${letterClass} _12`}>е</span>
            <span className={`${letterClass} _12`}>т</span>
            <br />
            <span className={`${letterClass} _13`}>я</span>
            {/* <span className={`${letterClass} _14`}>'m</span> */}
            <img
              src={LogoTitle}
              alt="JavaScript Developer"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />&nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={LastNameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Web developer</h2>
          <Link to="/contact" className="flat-button">
            Мои контакты
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
