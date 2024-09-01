/**
 * Fichier permettant de gérer les routes de l'application
 *
 * @requires Express
 * @requires module:controllers/mainController
 */
const express = require("express");
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");

/**
 * On récupère la méthode Router() contenue dans
 * express afin de pouvoir créer des routes pour
 * notre application
 *
 * @constant {express.Router} router
 */
const router = express.Router();

/**
 * @router GET /
 * @param {string} path - le chemin de la route
 * @param {mainController~showHomepage} - la méthode du controller à appeler
 */
router.get("/", mainController.showHomepage);

//** ROUTES DES PROMOTIONS */

/**
 * @router GET /promotions
 * @param {string} path - le chemin de la route
 * @param {promoController~showAllPromos}
 */
router.get("/promotions", promoController.showAllPromos);

module.exports = router;
