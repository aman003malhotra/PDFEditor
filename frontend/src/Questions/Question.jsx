import React, {useState, useEffect} from 'react'
import Accordion from './Accordian';
import './Question.css';
import ConfirmationModal from './ConfirmationModal';
const Question = () => {

    const [showModal, setShowModal] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    const handleEvaluatedToggle = () =>{
      setShowModal(!showModal);
      console.log(showModal);
    }
    
    useEffect(() => {

    }, [])
    const accordionData = [
        {
          title: 'Question 1',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          title: 'Question 2',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Question 3',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
      ];
    return (

    <div className='main__Question'>
        <div className="header__Question bg-white flex justify-end">
          <button className='sticky bg-[#C9F7F5] text-base rounded-md text-[#1BC5BD] py-2 px-5' onClick={handleEvaluatedToggle}>Submit</button>
        </div>
        <div className="accordion">
            {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
            ))}
        </div>
        {showModal && <ConfirmationModal handleEvaluatedToggle = {handleEvaluatedToggle}/>}
    </div>
    )
}

export default Question