/**
 * Controller permettant la gestion de la page d'accueil
 *
 * @module mainController
 */

const mainController = {
  /**
   * On déclare une méthode qui va servir à renvoyer
   * la vue de la page d'accueil
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  showHomepage: (req, res) => {
    res.status(200).render("homepage");
  },
};

module.exports = mainController;
