import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'

const Programs = () => {
  return (
    <section className='programs'>
        <div className="container program_container">
          <SectionHead icon={<FaCrown/>} title='Programs'/>
           {/* <div className="program_head">
              <span><FaCrown/></span> 
          </div> */}
          <div className="programs_wrapper">
            {
              programs.map(({id, icon, title, info, path}) =>{ 
              return (
                    <Card className='programs_program' key={id}>

                    </Card>
              )    
            })
            }
          </div>
        </div>
    </section>
  )
}

export default Programs