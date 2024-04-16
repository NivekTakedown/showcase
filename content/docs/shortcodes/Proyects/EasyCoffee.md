# **EasyCoffee**

The Easy Coffee App is designed to help coffee farm owners and workers manage various aspects of their coffee plantation. It allows users to:

  * Register farm information like lots, trees, and workers
  * Track coffee production and sales
  * Monitor inventory of supplies and inputs
  * Record daily progress notes
  * View geospatial maps of farm lots

The app has different user roles like an admin who has full access and auxiliary users with limited access. Key features include production tracking per worker, recommended supplies per lot, sales and accounting records, pest and plant info sheets, and aerial views of the farm mapped to lot data.

## **Technical description**

  * The app is built using a Model-View-Controller (MVC) architecture to separate data, UI, and logic components.
  * It uses Java 8, JFrame for the UI, Maven for dependency management, and H2 Database as the database management system.
  * The system has two main user roles - admin and auxiliary users. The admin has full access while auxiliary users have limited permissions.
  Key modules and features:
    *  User management - register, edit, deactivate users
    *  Farm management - add, edit farm lots and tree data
    *  Production tracking - log worker yield per lot
    *  Plant/pest info sheets - reference info from external sources
    *  Inventory tracking - record stock and purchases of supplies
    *  Sales and accounting - record coffee sales and expenses
    *  Daily progress notes - memo style text entries by date
    *  Geospatial visualization - interactive maps of farm lots
  * The system generates insights and recommendations for users based on data like lot size, tree age, external best practices etc.
  * Statistical dashboards and reports provide visual data analytics to improve productivity and profitability.
  * The source code is available on GitHub under the **Apache 2.0 license**. The app can run as an executable .exe for Windows.

## **Manuals**
<button id="user-manual-button">Read user manual</button>

<embed id="user-manual-embed" src="" width="100%" height="1000px" type="application/pdf" style="display: none;">

<script>
  // Obtener una referencia al botón y al elemento embed
  var userManualButton = document.getElementById("user-manual-button");
  var userManualEmbed = document.getElementById("user-manual-embed");

  // Agregar un evento de clic al botón
  userManualButton.addEventListener("click", function() {
    // Establecer la ruta del archivo PDF en el atributo src del elemento embed
    userManualEmbed.src = "/showcase/sketches/pdfs/ManualdeUsuario.pdf";

    // Mostrar el elemento embed
    userManualEmbed.style.display = "block";
  });
</script>

<button id="tech-manual-button">Read tech manual</button>

<embed id="tech-manual-embed" src="" width="100%" height="1000px" type="application/pdf" style="display: none;">

<script>
  // Obtener una referencia al botón y al elemento embed
  var techManualButton = document.getElementById("tech-manual-button");
  var techManualEmbed = document.getElementById("tech-manual-embed");

  // Agregar un evento de clic al botón
  techManualButton.addEventListener("click", function() {
    // Establecer la ruta del archivo PDF en el atributo src del elemento embed
    techManualEmbed.src = "/showcase/sketches/pdfs/ManualTécnico.pdf";

    // Mostrar el elemento embed
    techManualEmbed.style.display = "block";
  });
</script>
This project was developed in collaboration with three other team members.
asdasdas
## **Prototipe**  

If you're interested in trying out the EasyCoffee app, you can download the executable file by clicking on the following [link](/showcase/sketches/files/EasyCoffee.exe). 