import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/Cadavre1.png",
  "./cubeDrawings/Cadavre2.jpg",
  "./cubeDrawings/Cadavre3.jpg",
  "./cubeDrawings/Cadavre4.jpg",
];

const trees = [
  "./treeDrawings/inter1.png",
  "./treeDrawings/inter2.png",
  "./treeDrawings/inter3.png",
  "./treeDrawings/inter4.png",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Model 1
        <div class="three-model">
          <a href="./houseDrawings/cadavre1.png" target="_blank">
          <img src="./houseDrawings/cadavre1.png" id="model1" alt="Model 11 Image" />
        </div>
        <div id="images-description">
          <div id="images"> 
  <a href="https://architecural-student-portfolio-1-hwcxrsgbb.vercel.app/cubeDrawings/cadavre1.png" target="_blank">
    <img src="./cubeDrawings/cadavre1.png" alt="cadavre1" />
  </a>
  <a href="https://architecural-student-portfolio-1-hwcxrsgbb.vercel.app/cubeDrawings/cadavre2.jpg" target="_blank">
    <img src="./cubeDrawings/cadavre2.jpg" alt="cadavre2" />
  </a>
  <a href="https://architecural-student-portfolio-1-hwcxrsgbb.vercel.app/cubeDrawings/cadavre3.jpg" target="_blank">
    <img src="./cubeDrawings/cadavre3.jpg" alt="cadavre3" />
  </a>
  <a href="https://architecural-student-portfolio-1-hwcxrsgbb.vercel.app/cubeDrawings/Cadavre4.jpg" target="_blank">
    <img src="./cubeDrawings/Cadavre4.jpg" alt="Cadavre4" />
  </a>
</div>
          <h4 id="description">We are both prisoners and architects of our pasts. Memories can both shape us and be shaped by our minds. A systematic process of picking up the pieces, pulling information from where it can, and regurgitating it into a final image. Regardless of “objective truth” the memories form our conscious and in the same manner our conscious forms our memories. The answer to this dilemma cannot be found and so it is to our own discretion to decide which narrative to believe in, neither objective, instead partial truths.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Interoperability refers to the ability of different systems, devices, or software applications to work together and exchange information seamlessly. It ensures that diverse technologies can collaborate effectively, enabling users to access, share, and use data across platforms without compatibility issues.</h4>
        </div>
      </div>


      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>

    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/inter.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
