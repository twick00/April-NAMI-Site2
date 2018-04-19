import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import NavBar from "./components/NavbarComponent";
import MobileHeaderComponent from "./components/MobileHeaderComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <MobileHeaderComponent />
        {/* photo window */}
        {/* text area */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        obcaecati recusandae itaque est perferendis tenetur, laborum deserunt
        provident magnam cum. Iure inventore sequi ea placeat ipsam incidunt
        voluptatum in beatae. Doloremque, vero. Nobis exercitationem eaque
        dignissimos. Ipsa numquam, pariatur aliquid corporis quaerat, eius
        reiciendis eveniet asperiores illo officia expedita distinctio in
        ducimus ab assumenda. Commodi, sunt amet! Ipsum, nulla tempore. Eos
        laboriosam asperiores facilis ad beatae, debitis nostrum perferendis
        alias fugiat? Quibusdam quo facilis voluptatem beatae reiciendis officia
        quis porro rem iste culpa. Harum excepturi repudiandae saepe? Adipisci,
        dolore doloremque. Eligendi sit tempora saepe quibusdam fugit amet
        exercitationem ipsum repellat non eos officia nisi temporibus dicta
        perferendis impedit suscipit dignissimos expedita voluptatum, adipisci
        odit cum vitae ab inventore? Sequi, vero. Eaque inventore recusandae
        perferendis incidunt sapiente impedit pariatur voluptas alias nesciunt?
        Enim praesentium minus nobis dolore accusamus et, libero, illo iusto in
        saepe harum dolorum minima eum quibusdam. Neque, aut! Est quidem
        recusandae consequuntur quae laudantium doloribus maiores laboriosam nam
        amet dolorem sed tempore, quod, ex quam! Quidem, tempore non commodi,
        distinctio ipsum sequi inventore qui corporis nihil laborum voluptate?
        Iure magni distinctio, commodi ad totam deleniti velit nemo provident
        nam. Eligendi dicta cum, hic eius eveniet id consectetur non error
        sapiente dolor temporibus architecto. Non illo et quisquam optio. Vel
        voluptatibus quo placeat maiores excepturi, repellendus optio.
        Perspiciatis nisi ratione temporibus dicta obcaecati culpa ullam aliquam
        officia eveniet. Minima laborum aspernatur aliquid quidem voluptates,
        atque mollitia velit nemo autem? Iste perferendis excepturi, officiis
        corrupti iusto laboriosam. Facere dolorem corrupti soluta veritatis
        impedit. Provident maiores, sapiente doloribus in, libero voluptatibus
        magnam laudantium, dolore corrupti natus quod quas perferendis? Maxime,
        nesciunt. Earum, culpa aliquid. Delectus deserunt iure quisquam repellat
        beatae modi eius officiis, ab minus nisi dolorem vel itaque fuga
        aperiam. Ullam iure illum quos, non accusantium dicta dolores id!
        Fugiat!
      </div>
    );
  }
}

export default App;
