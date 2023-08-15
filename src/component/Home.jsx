import React from 'react'
import Container from 'react-bootstrap/Container';
import Service from './Service';
import About from './About';
import Contact from './Contact';


export default function Home() {
  return (
    <Container>
       <Container style={{height:'auto' ,backgroundColor:'orchid',color:'whitesmoke'}}>
        <div>
          <h2>This is Home Componete</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae tempore ipsum nam, dignissimos quae impedit animi dolores similique porro, eum delectus cupiditate eaque dicta perferendis error voluptates officia odio accusamus tempora dolor. Autem sed voluptatibus nam culpa fuga a nulla, iusto modi harum veritatis architecto corporis minus sapiente odit? Doloremque tempora quam a illum officia! Dolorum vero maiores cupiditate earum ipsa, numquam consectetur velit accusamus explicabo, est exercitationem ratione at. Nihil maxime fugiat hic aut error optio, sed amet atque, quo nesciunt cupiditate tempora, non modi recusandae perferendis officia eligendi? Quidem soluta tenetur corrupti doloribus necessitatibus quod tempore quisquam. Quis facilis eius eum a optio fugiat ipsa ullam sapiente saepe deserunt et nulla, in tempora pariatur! Beatae voluptas, quam nobis tempore vero blanditiis nulla voluptate fuga dicta? Vel repudiandae repellendus fugit commodi aperiam unde, ab corporis at inventore! Aliquid aliquam, quia reiciendis quam qui laudantium quos totam molestiae minus voluptas perferendis. Quia magnam odio aperiam in error possimus recusandae, nobis soluta laborum. Laboriosam, maiores odio voluptatum rem recusandae illum corporis. Facere delectus, explicabo officia corporis aut temporibus. Delectus eos, reprehenderit pariatur provident quis eaque repudiandae, repellendus, sapiente quidem odit rem architecto debitis nobis rerum accusantium et voluptates non magni consequatur amet minima voluptatibus quaerat doloribus? In aliquid, recusandae beatae eligendi fugit excepturi atque reiciendis amet! Recusandae, quis! Aspernatur, perferendis ullam accusamus quis voluptas similique praesentium, id velit quae cupiditate nemo ipsam aperiam eaque vitae enim dolor expedita tempore. Facere voluptatibus doloremque incidunt, libero totam aliquam reiciendis expedita nam magni asperiores aperiam recusandae! Dolorem doloribus a at! Distinctio, quidem corporis ea eum sapiente est ipsum ab ex tenetur accusamus sint repellendus, vel veritatis, et iste. Accusamus quam commodi iste eum, cupiditate excepturi iure quod animi aperiam eveniet itaque! Iusto vel minima sapiente. Beatae asperiores maiores minus vero inventore? Possimus, cum.</p>
        </div>
      </Container>
      <Service/>
      <About/>
      <Contact/>
    </Container>
  )
}
