import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_image">
                <img src={Image} alt="values Image" />
            </div>
            <div className="values_right">
                <SectionHead icon={<GiCutDiamond/>} title='Values'/>
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorem, et?</p>
            </div>
        </div>

    </section>
  )
}

export default Values