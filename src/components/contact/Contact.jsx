import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
        <form action="https://formspree.io/f/xdorgyzg" className='shadow' method="POST">
            <h4>Fillup The Form</h4> <br />
            <div>

              <input type='text' placeholder='Name' name="Name" required autoComplete="off" />
              <input type='text' placeholder='Email' name="Email" required autoComplete="off" />
            </div>
            <input type='text' placeholder='Subject' name="Subject" required autoComplete="off" />
            <textarea cols='30' rows='10' name="Message" required autoComplete="off" ></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
