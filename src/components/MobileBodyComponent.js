import React, { Component } from "react";
import ReactGallery from "reactive-blueimp-gallery";

const IMAGES = [
  {
    source: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"
  },
  {
    source: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg"
  },
  {
    source: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg"
  }
];

function MobileBodyComponent(props) {
  const styles = {
    Container: {
      display: "grid",
      gridTemplateColumns: "1fr",
      background: "linear-gradient(#3897d8,#D9D9D9)"
      //   height: "100vh"
    },
    ImageContainer: { borderRight: "2px solid black" },
    BodyContent: {
      textAlign: "left",
      fontFamily: "'Playfair Display', serif",
      margin: "50px",
      marginTop: "10px",
      marginBottom: "10px"
    },
    EndText: {
      textAlign: "center",
      fontFamily: "'Playfair Display', serif",
      marginLeft: "30px",
      marginRight: "30px",
      fontSize: "17px"
    },
    Images: {
      minHeight: "10%",
      border: "1px solid black",
      margin: "5px"
    }
  };
  const imageArr = Array.from({ length: 8 });
  return (
    <div style={styles.Container}>
      <h3 style={{ marginTop: "60px" }}>Superhero</h3>
      <p style={styles.BodyContent}>
        "Let me tell you about my husband <b>Bryan</b>. If you know Bryan or
        have the pleasure of calling him a friend, you know he is a genuine,
        kind-hearted, gentle person, who sees the best in everyone. Bryan finds
        joy in riding his motorcycle, debating the various fan theories of Star
        Wars, Harry Potter and Lord of the Rings, and surprising himself with
        new adventures. Bryan has a heart of gold a wakes up every day with a
        positive outlook.
      </p>

      <p style={styles.BodyContent}>
        Something you may not know about Bryan is that he was diagnosed with
        Schizophrenia about 5 years ago when he was 20. In 2012, Bryan went to
        Fairfax Psychiatric Hospital. While there, he was stripped of all
        medications and observed to better understand how to treat his
        developing illness. This was a huge step for Bryan advocating for
        himself and saying ‘something is not right’. Bryan, finding humor in any
        situation, often reflects on when the staff took away his shoelaces and
        fed him what is affectionately known in the Fugate house as ‘cat food’.{" "}
      </p>

      <p style={styles.BodyContent}>
        Bryan’s life was forever changed the day he left the hospital. After we
        got home we had a lot of questions, thoughts, and fears. Bryan was
        taking 15 different medications each day and went back to work full time
        within two months in order to keep his benefits and allow me to continue
        going to school. We had a 7:00 bed time, a strict diet, doctor visits,
        medical bills, and a very limited social life. Every day was a challenge
        but we learned to appreciate the little things in life like a quiet trip
        to the grocery store, or sitting outside on our tiny patio watching the
        geese fly in the evening.
      </p>
      <p style={styles.BodyContent}>
        Over the past few years, Bryan has really owned his diagnoses. He has
        learned how to live the fullest life he can. He no longer tries to fight
        and push back his Schizophrenia, instead he embraces it and has learned
        how to live with it, not in spite of it. This is not to say that Bryan
        has an easy life. Quite the opposite actually. Bryan still takes a
        pharmacy of medications, has developed chronic Pancreatitis, and
        questions how his mind, body, and spirit will sustain for the rest of
        his life. But out of all of the challenges he faces, I am most impressed
        with his ability to see past the limitations of his diagnosis and focus
        on the positive. It is rare that you will see Bryan without a smile on
        his face. He is usually laughing at something from The Office (for the
        hundredth time), singing Disney songs with me in the car, or thinking
        about the next prank he is going to play on a family member.
      </p>

      <p style={styles.BodyContent}>
        Bryan lives with one the most terrifying illnesses. It is even more
        challenging when it is not visible and people cannot see how hard it is
        for him on a bad day. Now, you may be asking yourselves why on earth I
        would share something so personal. I have been a strong advocate for
        sharing Bryan’s journey, when appropriate, for quite some time, but
        Bryan has always been a little hesitant. He was worried what people
        might think and how they might treat him differently if the only thing
        they knew about Schizophrenia was what was portrayed in the media. We
        have been doing the NAMI Walk to raise money for mental health programs
        for the past few years and each year I ask Bryan if he wants to share
        his story. This year he said yes. When I asked why now, he said,
        “Because I am proud of who I am and how I live my life. I have learned
        there is nothing to be ashamed of.”
      </p>

      <p style={styles.BodyContent}>
        Schizophrenia and all mental illnesses are a team effort and they
        require countless hours of listening and learning, compassion, and
        family support. Bryan is blessed with family that supports him and
        understands that his life will be different now. We are all blessed with
        a terrific husband, son, brother, nephew, cousin, and friend. I would
        never wish this illness on anyone, but I am grateful for what it has
        given us. Seeing Bryan struggle, accept, and overcome, over and over
        again, reminds both of us the significance of what is important in life.
        The value of good days, which can sometimes be few and far between. The
        value of a clear mind and an open heart. The value of understanding in a
        world full of prejudice and judgement. I wouldn't change a thing about
        Bryan, but I would like to change the world that we live in. The stigma
        around mental illnesses like Schizophrenia is what keeps people like
        Bryan from seeking treatment. They have no support and no help to
        discern reality from delusions and they live in two different worlds
        with no one to remind them what is real and good. I share our story to
        help eliminate the stigma around mental illness so people like Bryan can
        seek help and find hope. He is unashamed and proud. He is my hero.
      </p>

      <p style={styles.BodyContent}>
        So in case you are wondering, I write this first and foremost to brag
        about my <em>kick-ass</em> husband and best friend. He has overcome so
        much and I couldn’t be more proud. Secondly, I share his story so
        whoever reads this can think about Schizophrenia differently. If you
        know Bryan, you love him and would never know the challenges he faces.
        Think about that next time you encounter someone who is struggling.
        Lastly I write this because I am a passionate do-gooder, always happy to
        support a good cause, especially when it is close to my heart. We are
        raising money for NAMI again this year. This time Bryan is the team
        captain and he is loud and proud about the trail he is blazing living
        with Schizophrenia. If Bryan’s story compelled you to want to do
        something, please join us as we participate in the NAMI Walk on June
        5th. We also ask that you consider making a donation to our walk team
        which will directly help people like Bryan find support, community, and
        compassion while learning to cope with a severe mental illness.
      </p>

      <p style={styles.EndText}>
        Thank you so much for taking the time to read Bryan’s story. He is truly
        one of a kind.
      </p>
    </div>
  );
}

export default MobileBodyComponent;
