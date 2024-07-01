import React from "react";

const About = () => {
  return (
    <div className="w-full h-fit pl-1 pr-1 md:pl-[8rem] md:pr-[8rem] lg:pl-[8rem] lg:pr-[8rem] xl:pl-[15rem] xl:pr-[15rem] pt-24">
      <div className="flex flex-col">
        <div className="w-full h-fit p-14 rea bg-[#06273a] font-serif top-11 right-12 text-[#fffef8] text-base md:text-lg">
          <h1 className="text-4xl">
            About Us
            <br />
          </h1>
          <h1>Welcome to Kumar Lakshay and Associates</h1>
          <p>
            While you are facing any sort of a legal questioning, you must not
            be aware from where to start your journey from. Indeed it is a
            daunting task to evaluate the legal issues along with choosing the
            perfect lawyer to handle your legal things as per your requirements.
            Searching for a lawyer is an easy task but searching for the Right
            lawyer is what we can serve you right here to give you the One Stop
            Solution with our team of experts.
          </p>

          <p>
            We here at Kumar Lakshay and associates are right here to assist you
            with your personal and your financial stakes. Be it corporate or the
            general clients, since it is not that easy to gather the facts we
            help you out with every bit of it.
          </p>

          <h2>Our USP</h2>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
              padding: "10px 0px",
            }}
          >
            <li>
              Our first and foremost aim is to provide personalized quality
              services to our clients. We take pride in the talent of our
              professionals, their in-depth knowledge, expertise, and the
              teamwork employed in responding to our clients&apos; needs.
            </li>
            <li>
              Our attorneys work to help the clients in avoiding their problems,
              resolving disputes, and helping to achieve their business goals.
            </li>
            <li>
              ⁠Whether a small business in an emerging industry or a diversified
              multinational corporation or an individual, each of our clients
              represent an important relationship with us to whom we dedicate
              our best attention and service.
            </li>
          </ul>
          <p>
            We firmly believe that client satisfaction is the essence of legal
            practice.
          </p>

          <p>We are waiting for your call.</p>

          <p>
            Our objective is to provide top-notch legal services. We aim to
            achieve favourable outcomes for our clients through expert
            representation in court and efficient conflict resolution methods
            like mediation and arbitration. Our commitment is to uphold justice,
            integrity, and professionalism in all we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
