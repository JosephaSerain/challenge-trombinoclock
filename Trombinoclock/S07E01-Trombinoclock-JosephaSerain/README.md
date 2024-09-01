# Trombinoclock

## Brief client

![Demande Nicole](./docs/Mail%20Nicole%20Trombinoclock.png)

## Challenge Épisode 1

### Afficher les informations d'une seule promotion

L'idée ici est de créer une nouvelle page comprenant toutes les informations que l'on a sur une promotion. On va devoir créer une route `/promotions/:id`, `:id` étant un paramètre de route représentant l'id d'une promotion.

### Lister les étudiants d'une promo

Énoncé du débrouillard 💪 : Dans la page détails d'une promo, ajouter un lien "voir les étudiants de la promo" et implémenter la fonctionnalité.

<details>
    <summary>Besoin d'aide ?</summary>

    - La fonctionnalité concerne une seule promo, donc là encore on a besoin d'une route paramétrée pour cibler un ID, par exemple :  `/promo/:id/students` ;

    - La méthode associée doit être dans un controller. Soit `promController`, soit `studentController`, à vous de voir ce qui vous semble le plus logique, du moment que la méthode porte un nom explicite !

    Dans cette méthode il faut :
      - récupérer l'id de la promo ciblée
      - trouver la liste des étudiants de la promo. Importer la liste des étudiants depuis le json, et utiliser une boucle ou un `Array.filter()`.
      - "render" la view, sans oublier de lui transmettre les données !

    - Contruire la view en listant les étudiants ;

    - Ne pas oublier d'ajouter le lien vers la fonctionnalité dans la page "détails d'une promo".

</details>

### Bonus ⭐

L'intégration faite par le stagiaire est ...sommaire. N'hésitez pas à la retravailler !
