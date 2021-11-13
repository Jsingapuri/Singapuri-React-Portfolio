import React from "react";

export default function About() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div class="card" style={{backgroundColor: "lightblue"}}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWEB4Dp9JBmMZt7U0zjGUfh-caQwhUw1Jfg&usqp=CAU"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body">
          <p class="card-text">
            My name is John Singapuri. I enlisted in the US Army during my senior
            year of highschool and left for basic training two weeks after
            graduation. I spent 4 years as an Infantryman and deployed to
            Afghanistan in 2012. I left the Military in 2014 and began school at
            the Community College of Philadelphia to study Criminal Justice. I
            then transferred to the University of Denver Criminology program in
            2015. In 2016 my passion to serve others drew me away from College
            and back into a service oriented career path. I have always enjoyed
            technology and have now decided to pursue a career in Computer
            Coding. If you're interested in knowing more about me lets connect!
          </p>
        </div>
      </div>
    </div>
  );
}
