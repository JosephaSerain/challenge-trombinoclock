/**
 * Controller gérant les méthodes liées aux promotions
 *
 * @module promoController
 */
const promos = require("../../data/promos.json");

const promoController = {
  /**
   * Méthode permettant la gestion de la page et des données
   * pour afficher toutes les promotions
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  showAllPromos: (req, res) => {
    res.status(200).render("all-promotions", { promos });
  },
};

module.exports = promoController;
