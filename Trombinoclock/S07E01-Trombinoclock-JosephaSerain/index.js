/**
 * Fichier de point d'entrée de notre application permettant
 * de configurer celle-ci.
 *
 * @requires dotenv
 * @requires express
 * @requires path
 * @requires module:routes/router
 */

require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./app/router");

/**
 * On appelle une nouvelle instanciation d'Express
 *
 * @constant {Express}
 */
const app = express();

/**
 * On va devoir configurer le moteur de templates afin de pouvoir utiliser
 * EJS et de pouvoir indiquer où se situent nos vues.
 */
app.set("views", path.join(__dirname, "app", "views"));
app.set("view engine", "ejs");

/**
 *  On souhaite indiquer où se situent nos fichiers statiques pour distribution
 */
app.use(express.static("public"));

/**
 * On appelle le routeur de notre application qui a été déclaré dans le dosser
 * app/routes
 */
app.use(router);

/**
 * On finit par indiquer quel port doit écouter notre application
 * @param {number} PORT - le port utilisé par l'application
 */
app.listen(process.env.PORT, () => {
  console.log(`Trombinoclock écoute le port ${process.env.PORT}`);
});
