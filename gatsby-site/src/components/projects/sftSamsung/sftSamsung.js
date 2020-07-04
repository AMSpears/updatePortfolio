import React from 'react'
import {Link} from 'gatsby'
import HeaderImg from '../../../images/projects/sftSamsung/samsung-1.jpg'
import SectionImgOne from '../../../images/projects/sftSamsung/samsung-3.jpg'

import '../style/projectPage.scss'


const SFTSamsung = () => {
  return (
    <div>
      <section className = 'header-placeholder'>
        <img src = {HeaderImg} alt = 'header-img' />
      </section>
      <section className = 'project-details-container'>
        <div>
          <div className = 'details'>
            <h1>Sansumg: Solve For Tomorrow</h1>
            <div>
              <div>
                <div className = 'tech-details'>
                  <h2>Technologies</h2>
                  <p>React,CSS</p>
                </div>
                <div className= 'tech-details'>
                  <h2>Links</h2>
                  <a href= "#" target= "blank">Github</a>
                  <a href= "#" target= "blank">Site</a>
                </div>
              </div>
              <div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                </div>
              </div>
            </div>
          </div>
          <div className = 'project-img'>
            <img src = {SectionImgOne} alt = 'Site img' />
          </div>
          <div className = 'details-2'>
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div id = 'next-project-link-container'>
            <h3>Next Project</h3>
            <Link to= '/pentimento'> Pentimento</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SFTSamsung
