import React from "react";

export default function Contact() {
  return (
  
    
      <div className="position-absolute top-50 start-50 translate-middle">
        <div class="card" style={{backgroundColor: "lightblue"}}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7o1Ougzkbqlg1wXn7Ivy6DKeYQZSeXjEfg&usqp=CAU"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body"  >
            <h5 class="card-title">Thanks for Checking out my work</h5>
            <p class="card-text">
             I look forward to hearing from you in the future!
            </p>
          </div>
          <ul class="list-group list-group-flush" >
            <li class="list-group-item" style={{backgroundColor: "lightblue"}}>Phone Number: (720) 336-9726</li>
            <li class="list-group-item" style={{backgroundColor: "lightblue"}}>Email: singapurijohn@gmail.com</li>
          </ul>
          <div class="card-body">
            <a href="https://github.com/Jsingapuri" class="card-link">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/john-singapuri-0b010b73/"
              class="card-link"
            >
              LinkedIn
            </a>
            <a href="https://twitter.com/JS2649" class="card-link">
              Twiiter
            </a>
          </div>
        </div>
      </div>
    
    
  );
}
