import React from 'react'
import './AssignmentOne.css'
import { FaStarOfLife } from 'react-icons/fa'
import { TiArrowLeft } from 'react-icons/ti'
import { FaOdnoklassniki } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BiPhone } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiArrowCircleRight } from 'react-icons/hi'
import { FaRegAddressBook } from 'react-icons/fa'
import { BiCalendar } from 'react-icons/bi'
import { FaTasks } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'
import { BsSuitDiamondFill } from 'react-icons/bs'


const AssignmentOne = () => {
    return (
        <div>
            <div className='header'>
                <div className='star'>
                    <h3> <FaStarOfLife style={{ fontSize: '0.8rem' }} /> Lead Details</h3>
                </div>
                <div className='arrow'>
                    <h3> <TiArrowLeft style={{ fontSize: '0.8rem' }} /> Back</h3>
                </div>
            </div>

            <div className='blue-line'></div>

            <div className='sidebar-data-one'>
                <div className='avatar'>

                    <h2> <FaOdnoklassniki style={{ fontSize: '1rem' }} /> Peeyush Gupta <br /><span className='fd-ind'>Front End Developer, India</span></h2>
                    <p> <FiMail style={{ fontSize: '0.7rem' }} /> piyush.gupta@gmail.com</p>
                    <p> <BiPhone style={{ fontSize: '0.7rem' }} /> +91-1234-567-890</p>
                    <p> <HiOutlineLocationMarker style={{ fontSize: '0.7rem' }} /> Delhi, India</p>

                    <div className='sq'>
                        <div className='sq-1'>
                            <p><bold>15</bold><br />Lead Square</p>
                        </div>

                        <div className='sq-2'>
                            <p><bold>24</bold><br />Disengaged</p>
                        </div>

                        <div className='sq-3'>
                            <p><bold>2</bold><br />Touch Points</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sidebar-data-two'>

                <h5 className='text'>Lead Properties</h5>
                <div className='header-two-line'></div>

                <div className='text-one'>
                    <h6>Executive</h6>
                    <h6>Gagan Kapoor</h6>
                </div>

                <div className='text-two'>
                    <h6>Touch Points</h6>
                    <h6>54</h6>
                </div>

                <div className='text-three'>
                    <h6>Lead age</h6>
                    <h6>24</h6>
                </div>
            </div>

            <div className='sidebar-data-three'>
                <h5>Customer History</h5>
                <h3><HiArrowCircleRight /></h3>
            </div>

            <div className='sidebar-data-four'>
                <h5>Lead Details</h5>
                <h3><HiArrowCircleRight /></h3>
            </div>

            <div className='sidebar-data-five'>
                <h5>Social Profile</h5>
                <h3><HiArrowCircleRight /></h3>
            </div>

            <div className='sidebar-data-six'>
                <h5>Tasks</h5>
                <h3><HiArrowCircleRight /></h3>
            </div>

            <div className='sidebar-data-seven'>
                <h5>Notes</h5>
                <h3><HiArrowCircleRight /></h3>
            </div>

            <div className='sidebar-data-eight'>
                <h5>Member of Lists</h5>
                <h3><HiArrowCircleRight /></h3>
            </div>

            <div className='btn'>
                <button className='btns'> <FaRegAddressBook /> Activity </button>
                <button className='btns'><BiCalendar /> Note</button>
                <button className='btns'><FaTasks /> Task</button>
                <button className='btns'><BiDollar /> Sales Activity</button>
            </div>

            <div>
                <h3 className='header-three'>Customer History</h3>
                <div className='gray-box'>
                    <h6>Notable activity type :</h6>
                    <input />
                    <h6>Time :</h6>
                    <input placeholder='dd/mm/yyyy' />
                </div>
            </div>

            <div className='last-container-box'>

                <div className='first-box'>
                    <h3 className='text-four'><BsSuitDiamondFill style={{ fontSize: '1rem', marginTop: '0.4rem' }} /><span className='date-1'> 23 July 2019</span></h3>
                </div>

                <div className='line-one'>
                    <div className='sky-b'>
                        <h6>09:00AM</h6>
                    </div>

                    <div className='sky-b-two'>
                        <h6>14:20PM</h6>
                    </div>
                </div>

                <div className='text-five'>
                    <h6>Schwerpunk: Frontend:Entwicklung </h6>
                    <p className='text-six'>Entwicklen von anspruchsvollen, animierten, responsive und adaptive Webseiten mit HTML, SCSS, jquery: full alle Browser, Optimiert for Desktop, Notebook, Smartphones und<br /> tablets(ios, android, Windows)  </p>
                </div>

                <div className='text-seven'>
                    <h6>ProjektManagement mit scrum</h6>
                    <p className='text-eight'>Standiges verbessern des agilen Entwicklungsprozesses beispielswiese durch Grunt, Yeoman, Git, Jira & BrowserStack </p>
                </div>

                <div className='second-box'>
                    <h3 className='text-four'><BsSuitDiamondFill style={{ fontSize: '1rem', marginTop: '0.4rem' }} /><span className='date-1'> 12 April 2019</span></h3>
                </div>

                <div className='line-two'>
                    <div className='sky-b'>
                        <h6>09:00AM</h6>
                    </div>
                </div>

                <div className='text-nine'>
                    <p className='text-ten'>Konzeption,Design and Produktion von Digitalen Magazinem mirt InDesign, der Digital publishing suite und HTML5, Adobe Digital Publishing suite.</p>
                </div>

            </div>

            <div className='third-box'>
                    <h3 className='text-four'><BsSuitDiamondFill style={{ fontSize: '1rem', marginTop: '0.4rem' }} /><span className='date-1'> 16 Febraury 2019</span></h3>
                </div>

                <div className='line-three'>
                    <div className='sky-b'>
                        <h6>09:00AM</h6>
                    </div>
                </div>

                <div className='text-eleven'>
                    <p className='text-twelve'>Konzeption,Design and Produktion von Digitalen Magazinem mirt InDesign, der Digital publishing suite und HTML5, Adobe Digital Publishing suite.</p>
                </div>

        </div>
    )
}

export default AssignmentOne