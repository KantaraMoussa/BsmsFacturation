# CAHIER DES CHARGES
## Finalisation et mise en production du logiciel de facturation
### Société minière spécialisée dans la location d’engins roulants et d’engins de BTP

**Version du cahier des charges : 1.0**  
**Version actuelle du logiciel : 1.0.0**  
**Version cible : 2.0.0 — Production**  
**Nature du projet : Reprise, audit, correction, finalisation et industrialisation d’un logiciel existant**

---

# 1. CONTEXTE DU PROJET

La société exploite une activité de location d’engins roulants, d'engins miniers et d'engins de BTP auprès de sociétés minières, entreprises de construction, sociétés de travaux publics et autres clients professionnels.

Un logiciel de facturation en version **1.0.0 existe déjà**.

Le présent cahier des charges ne constitue donc pas une demande de développement à partir de zéro.

La mission consiste à confier à Claude la **reprise complète du projet existant**, son audit technique et fonctionnel, la correction des anomalies, la finalisation des fonctionnalités incomplètes, l'amélioration de l'ergonomie, la sécurisation de l'application et sa préparation pour une utilisation réelle en production.

Claude devra considérer la version 1.0.0 comme une **base existante à auditer et à améliorer**, et non comme un produit à remplacer systématiquement.

---

# 2. OBJECTIF GÉNÉRAL

L'objectif est de transformer la version actuelle **1.0.0** en une solution professionnelle de gestion :

- des clients ;
- des engins ;
- des chauffeurs/opérateurs ;
- des contrats de location ;
- des prestations ;
- des locations à l'heure ;
- des locations à la journée ;
- des locations au mois ;
- des prestations avec opérateur ;
- des prestations sans opérateur ;
- des bons de sortie ;
- des bons de prestation ;
- des relevés d'heures ;
- des relevés de jours ;
- des consommations éventuelles ;
- des factures ;
- des paiements ;
- des créances ;
- des avoirs ;
- des taxes ;
- des rapports financiers ;
- du suivi de rentabilité des engins ;
- du suivi de l'activité commerciale.

La version finale doit être suffisamment robuste pour être utilisée quotidiennement par une entreprise professionnelle travaillant notamment avec des clients miniers.

---

# 3. MISSION DONNÉE À CLAUDE

Claude intervient comme :

**Architecte logiciel + développeur senior + auditeur technique + analyste fonctionnel + responsable qualité.**

Claude doit prendre possession du projet existant et procéder dans l'ordre suivant :

1. analyser l'intégralité du code source ;
2. analyser la base de données ;
3. identifier la technologie utilisée ;
4. comprendre l'architecture actuelle ;
5. identifier les fonctionnalités déjà opérationnelles ;
6. identifier les fonctionnalités incomplètes ;
7. identifier les bugs ;
8. identifier les problèmes de sécurité ;
9. identifier les problèmes d'UX/UI ;
10. identifier les problèmes de performances ;
11. identifier les problèmes de cohérence des données ;
12. identifier les risques liés à la facturation ;
13. établir un plan de correction ;
14. corriger progressivement le projet ;
15. tester chaque fonctionnalité ;
16. effectuer des tests d'intégration ;
17. effectuer des tests de sécurité ;
18. effectuer des tests de non-régression ;
19. documenter les modifications ;
20. préparer la version finale pour la production.

---

# 4. RÈGLE FONDAMENTALE DE REPRISE

Claude ne doit **pas réécrire arbitrairement l'application**.

Avant toute modification importante, Claude doit comprendre :

- l'architecture ;
- les tables ;
- les relations ;
- les contrôleurs ;
- les modèles ;
- les services ;
- les API ;
- les composants frontend ;
- les règles métier ;
- les mécanismes d'authentification ;
- les mécanismes de facturation ;
- les mécanismes d'impression ;
- les mécanismes d'export.

Toute fonctionnalité déjà correcte doit être conservée et améliorée uniquement lorsque cela est nécessaire.

Les modifications doivent privilégier :

**stabilité → sécurité → cohérence métier → maintenabilité → performance → ergonomie.**

---

# 5. PHASE 1 — AUDIT COMPLET DE LA VERSION 1.0.0

Avant de développer de nouvelles fonctionnalités, Claude doit produire un audit du projet.

## 5.1 Audit du code

Analyser :

- structure des dossiers ;
- architecture ;
- conventions de programmation ;
- dépendances ;
- bibliothèques ;
- composants ;
- services ;
- API ;
- gestion des erreurs ;
- validation des données ;
- requêtes SQL ;
- gestion des sessions ;
- authentification ;
- autorisations ;
- génération des documents ;
- génération des PDF ;
- exports Excel/CSV ;
- JavaScript ;
- CSS ;
- responsive design.

## 5.2 Audit de la base de données

Identifier :

- tables ;
- colonnes ;
- clés primaires ;
- clés étrangères ;
- index ;
- contraintes ;
- relations ;
- doublons ;
- champs inutilisés ;
- champs obligatoires ;
- incohérences ;
- problèmes de typage ;
- problèmes de dates ;
- problèmes monétaires ;
- problèmes de numérotation des factures.

Claude devra notamment vérifier que les montants financiers utilisent des types adaptés et qu'aucun calcul critique de facturation ne repose sur des traitements imprécis.

## 5.3 Audit fonctionnel

Pour chaque module :

- vérifier son existence ;
- vérifier son fonctionnement ;
- identifier les bugs ;
- identifier les fonctionnalités manquantes ;
- identifier les écrans incomplets ;
- identifier les boutons non fonctionnels ;
- identifier les données non sauvegardées ;
- identifier les validations absentes.

---

# 6. MODULE CLIENTS

Le logiciel doit permettre de gérer les clients professionnels.

Informations minimales :

- raison sociale ;
- nom commercial ;
- numéro client ;
- adresse ;
- ville ;
- pays ;
- téléphone ;
- email ;
- personne de contact ;
- fonction du contact ;
- identifiant fiscal/NIF ;
- registre de commerce si applicable ;
- conditions de paiement ;
- délai de paiement ;
- plafond de crédit ;
- statut actif/inactif ;
- observations.

Fonctionnalités :

- création ;
- modification ;
- consultation ;
- archivage ;
- recherche ;
- filtrage ;
- historique ;
- liste des contrats ;
- liste des factures ;
- liste des paiements ;
- état des créances.

---

# 7. MODULE ENGINS

Le logiciel doit permettre de gérer l'ensemble du parc d'engins.

Chaque engin doit disposer notamment de :

- numéro interne ;
- code engin ;
- immatriculation ;
- type ;
- catégorie ;
- marque ;
- modèle ;
- année ;
- numéro de série ;
- puissance ;
- capacité ;
- compteur horaire ;
- kilométrage ;
- statut ;
- localisation ;
- date de mise en service ;
- coût d'acquisition ;
- tarif horaire ;
- tarif journalier ;
- tarif hebdomadaire ;
- tarif mensuel ;
- observations.

Types possibles :

- camion-benne ;
- camion-citerne ;
- camion plateau ;
- tracteur ;
- bulldozer ;
- pelle hydraulique ;
- chargeuse ;
- niveleuse ;
- compacteur ;
- grue ;
- chariot élévateur ;
- excavatrice ;
- engin spécialisé ;
- autre.

Statuts :

- disponible ;
- loué ;
- en chantier ;
- en maintenance ;
- immobilisé ;
- hors service ;
- vendu ;
- archivé.

---

# 8. GESTION DES CHAUFFEURS ET OPÉRATEURS

Le système doit permettre de gérer les conducteurs/opérateurs associés aux engins.

Informations :

- nom ;
- prénom ;
- matricule ;
- téléphone ;
- fonction ;
- permis ;
- catégorie ;
- date d'expiration ;
- habilitations ;
- statut ;
- observations.

Le système doit pouvoir associer :

**Client → Contrat → Engin → Opérateur → Chantier**

---

# 9. MODULE CHANTIERS / SITES MINIERS

Un client peut posséder plusieurs sites ou chantiers.

Le logiciel doit permettre de gérer :

- nom du chantier ;
- code chantier ;
- client ;
- localisation ;
- responsable ;
- téléphone ;
- date de début ;
- date de fin ;
- statut ;
- observations.

Exemples :

- mine ;
- carrière ;
- chantier routier ;
- chantier de terrassement ;
- site industriel ;
- plateforme logistique.

---

# 10. MODULE CONTRATS DE LOCATION

Le contrat constitue un élément central du système.

Un contrat doit pouvoir contenir :

- numéro de contrat ;
- client ;
- chantier ;
- date de début ;
- date de fin ;
- type de location ;
- engins concernés ;
- opérateurs ;
- tarif ;
- fréquence de facturation ;
- conditions de paiement ;
- devise ;
- taxes ;
- caution éventuelle ;
- heures minimales ;
- heures supplémentaires ;
- conditions de dépassement ;
- pénalités ;
- carburant ;
- transport ;
- maintenance ;
- assurances ;
- observations.

Types :

- horaire ;
- journalier ;
- hebdomadaire ;
- mensuel ;
- forfait ;
- prestation.

Le système doit empêcher les incohérences de dates et signaler les contrats arrivant à expiration.

---

# 11. GESTION DES PRESTATIONS

Le système doit permettre de facturer des prestations qui ne correspondent pas uniquement à une location simple.

Exemples :

- terrassement ;
- transport ;
- excavation ;
- nivellement ;
- chargement ;
- déchargement ;
- manutention ;
- mise à disposition d'engin ;
- prestation avec opérateur ;
- prestation spéciale.

---

# 12. RELEVÉS D'HEURES

Pour les locations à l'heure, le système doit gérer :

- date ;
- engin ;
- opérateur ;
- chantier ;
- compteur initial ;
- compteur final ;
- nombre d'heures ;
- heures normales ;
- heures supplémentaires ;
- validation client ;
- responsable ;
- observations.

Le système doit calculer automatiquement :

**heures facturables = compteur final - compteur initial**

avec contrôle des valeurs négatives ou incohérentes.

---

# 13. RELEVÉS JOURNALIERS

Pour les locations à la journée :

- date ;
- engin ;
- chantier ;
- nombre de jours ;
- tarif journalier ;
- montant ;
- validation ;
- observations.

---

# 14. BONS DE PRESTATION

Le système doit permettre de générer un bon de prestation.

Le document doit contenir :

- numéro ;
- client ;
- chantier ;
- engin ;
- opérateur ;
- date ;
- heures/jours ;
- description ;
- tarif ;
- montant ;
- validation du prestataire ;
- validation du client.

Le bon doit pouvoir être imprimé et exporté en PDF.

---

# 15. FACTURATION

La facturation constitue le cœur du logiciel.

Le système doit permettre de créer automatiquement ou manuellement une facture à partir :

- d'un contrat ;
- d'un relevé d'heures ;
- d'un relevé journalier ;
- d'une prestation ;
- d'un forfait ;
- de plusieurs prestations regroupées.

Une facture doit comporter :

- numéro unique ;
- date ;
- date d'échéance ;
- client ;
- contrat ;
- chantier ;
- lignes de facturation ;
- quantité ;
- unité ;
- prix unitaire ;
- remise éventuelle ;
- montant HT ;
- taxes ;
- montant TTC ;
- devise ;
- conditions de paiement ;
- observations.

---

# 16. NUMÉROTATION DES FACTURES

La numérotation doit être :

- unique ;
- séquentielle ;
- contrôlée ;
- non duplicable ;
- traçable.

Le système doit empêcher deux utilisateurs de générer simultanément le même numéro.

Une facture validée ne doit pas pouvoir être supprimée physiquement.

Elle doit être :

- annulée ;
- avoirée ;
- corrigée selon une procédure contrôlée.

---

# 17. STATUTS DES FACTURES

Une facture peut avoir les statuts :

- brouillon ;
- en attente de validation ;
- validée ;
- envoyée ;
- partiellement payée ;
- payée ;
- en retard ;
- annulée ;
- avoirée.

Chaque changement important doit être historisé.

---

# 18. AVOIRS ET ANNULATIONS

Le système doit gérer :

- avoir total ;
- avoir partiel ;
- correction de facture ;
- annulation contrôlée.

Un avoir doit conserver le lien avec la facture originale.

---

# 19. GESTION DES PAIEMENTS

Le système doit permettre d'enregistrer :

- date ;
- client ;
- facture ;
- montant ;
- devise ;
- mode de paiement ;
- référence ;
- banque/caisse ;
- commentaire ;
- utilisateur ayant enregistré le paiement.

Modes :

- virement ;
- chèque ;
- espèces ;
- paiement électronique ;
- autre.

Le système doit automatiquement recalculer :

**montant facturé – montant payé = solde restant**

---

# 20. SUIVI DES CRÉANCES

Le système doit fournir :

- créances clients ;
- factures impayées ;
- factures partiellement payées ;
- factures échues ;
- montant total à recevoir ;
- ancienneté des créances.

Créer un tableau d'ancienneté :

- 0–30 jours ;
- 31–60 jours ;
- 61–90 jours ;
- 91–120 jours ;
- plus de 120 jours.

---

# 21. TABLEAU DE BORD

Le dashboard doit présenter une vision synthétique de l'activité.

Indicateurs :

- chiffre d'affaires ;
- facturation du mois ;
- paiements reçus ;
- créances ;
- factures impayées ;
- factures en retard ;
- nombre d'engins ;
- engins disponibles ;
- engins loués ;
- engins en maintenance ;
- contrats actifs ;
- contrats expirant prochainement ;
- heures facturées ;
- prestations réalisées.

Prévoir des filtres :

- période ;
- client ;
- chantier ;
- engin ;
- type de prestation.

---

# 22. RENTABILITÉ DES ENGINS

Le logiciel doit permettre de mesurer la performance du parc.

Pour chaque engin :

- chiffre d'affaires généré ;
- nombre d'heures facturées ;
- nombre de jours loués ;
- coût de maintenance ;
- coût d'exploitation ;
- revenu ;
- marge estimée ;
- taux d'utilisation.

Indicateur important :

**taux d'utilisation = temps loué / temps disponible**

---

# 23. MAINTENANCE DES ENGINS

Prévoir un module permettant de suivre :

- maintenance préventive ;
- maintenance corrective ;
- vidange ;
- changement de pneus ;
- réparations ;
- pièces ;
- coûts ;
- dates ;
- compteur horaire ;
- prochaine maintenance.

Le système doit pouvoir signaler :

**"Maintenance à prévoir"**

---

# 24. CARBURANT

Prévoir la possibilité de suivre :

- engin ;
- date ;
- quantité ;
- prix ;
- fournisseur ;
- compteur ;
- coût ;
- chantier ;
- utilisateur.

Rapports :

- consommation par engin ;
- coût carburant ;
- consommation par heure ;
- consommation par chantier.

---

# 25. GESTION DES UTILISATEURS

Créer différents profils :

### Administrateur

Accès complet.

### Direction

Accès aux tableaux de bord et rapports.

### Comptabilité

Accès :

- factures ;
- paiements ;
- créances ;
- rapports financiers.

### Commercial

Accès :

- clients ;
- contrats ;
- prestations ;
- suivi commercial.

### Responsable parc

Accès :

- engins ;
- disponibilité ;
- maintenance ;
- carburant.

### Opérateur de saisie

Accès limité à la saisie.

---

# 26. RBAC — GESTION DES PERMISSIONS

Les permissions doivent être granulaires.

Exemples :

- créer client ;
- modifier client ;
- supprimer client ;
- créer facture ;
- valider facture ;
- annuler facture ;
- enregistrer paiement ;
- consulter rapports ;
- exporter données ;
- gérer utilisateurs.

Un utilisateur ne doit jamais pouvoir accéder à une fonctionnalité uniquement en modifiant manuellement une URL.

Les permissions doivent être contrôlées côté serveur.

---

# 27. JOURNAL D'AUDIT

Le système doit conserver une trace des opérations sensibles.

Exemples :

- connexion ;
- déconnexion ;
- création facture ;
- modification facture ;
- validation facture ;
- annulation facture ;
- création paiement ;
- modification paiement ;
- suppression logique ;
- changement de permission.

Journal :

- utilisateur ;
- date ;
- heure ;
- action ;
- objet ;
- ancienne valeur ;
- nouvelle valeur ;
- adresse IP si appropriée.

---

# 28. DOCUMENTS ET PDF

Tous les documents importants doivent être professionnels.

Documents concernés :

- devis ;
- contrat ;
- bon de prestation ;
- relevé ;
- facture ;
- reçu ;
- avoir ;
- état de compte ;
- rapport.

Les documents doivent respecter l'identité visuelle de l'entreprise.

Prévoir :

- logo ;
- adresse ;
- téléphone ;
- email ;
- informations fiscales ;
- pied de page ;
- numéro de document ;
- date ;
- signature.

---

# 29. EXPORTS

Prévoir :

- PDF ;
- Excel ;
- CSV.

Les exports doivent respecter les filtres sélectionnés.

Exemple :

Si l'utilisateur filtre :

**Client X + janvier 2026**

l'export doit correspondre exactement aux données affichées.

---

# 30. RECHERCHE ET FILTRAGE

Toutes les grandes listes doivent disposer de :

- recherche ;
- pagination ;
- tri ;
- filtres ;
- export.

Éviter de charger inutilement plusieurs milliers de lignes dans le navigateur.

Utiliser une pagination serveur lorsque nécessaire.

---

# 31. RESPONSIVE DESIGN

L'application doit être utilisable :

- ordinateur ;
- tablette ;
- téléphone.

Les tableaux complexes doivent être adaptés aux petits écrans sans chevauchement.

---

# 32. EXPÉRIENCE UTILISATEUR

L'interface doit être :

- professionnelle ;
- simple ;
- cohérente ;
- rapide ;
- intuitive.

Tous les boutons doivent avoir un comportement clair.

Prévoir :

- messages de succès ;
- messages d'erreur ;
- confirmations ;
- loaders ;
- validations ;
- états vides ;
- messages explicites.

Aucune erreur technique brute ne doit être affichée à l'utilisateur final.

---

# 33. SÉCURITÉ

Claude doit effectuer un audit de sécurité complet.

Vérifier notamment :

- SQL Injection ;
- XSS ;
- CSRF ;
- authentification ;
- gestion des sessions ;
- contrôle des permissions ;
- upload de fichiers ;
- accès direct aux documents ;
- exposition des données ;
- mots de passe ;
- secrets ;
- variables d'environnement ;
- endpoints API ;
- accès aux données financières.

Les mots de passe doivent être stockés avec un mécanisme de hash sécurisé.

Les données sensibles ne doivent jamais être exposées dans le frontend sans nécessité.

---

# 34. API

Si l'application possède une API, Claude doit :

- inventorier les endpoints ;
- vérifier les méthodes HTTP ;
- vérifier les validations ;
- vérifier l'authentification ;
- vérifier les permissions ;
- normaliser les réponses ;
- gérer les erreurs ;
- documenter les endpoints.

Format de réponse cohérent :

```json
{
    "success": true,
    "data": {},
    "message": null
}
```

En cas d'erreur :

```json
{
    "success": false,
    "data": null,
    "message": "Une erreur est survenue."
}
```

---

# 35. GESTION DES DEVISES

Le système doit être conçu pour supporter les devises utilisées par l'entreprise.

Minimum recommandé :

- GNF ;
- USD ;
- EUR.

Chaque facture doit conserver explicitement sa devise.

Les conversions éventuelles doivent utiliser un taux clairement enregistré et historisé.

---

# 36. TAXES

Les taxes doivent être paramétrables.

Ne jamais coder en dur les taux fiscaux dans plusieurs fichiers.

Prévoir :

- type de taxe ;
- taux ;
- période de validité ;
- activation/désactivation.

La configuration fiscale doit pouvoir être adaptée à la réglementation applicable à l'entreprise.

---

# 37. PARAMÉTRAGE DE L'ENTREPRISE

Prévoir un module de configuration :

- nom société ;
- logo ;
- adresse ;
- téléphone ;
- email ;
- informations fiscales ;
- devise par défaut ;
- format des factures ;
- numérotation ;
- taxes ;
- conditions de paiement ;
- pied de page ;
- coordonnées bancaires.

---

# 38. NOTIFICATIONS

Prévoir l'architecture permettant éventuellement d'envoyer :

- facture par email ;
- rappel d'échéance ;
- facture impayée ;
- contrat arrivant à expiration ;
- maintenance d'un engin.

L'envoi doit être journalisé.

---

# 39. RAPPORTS

Prévoir au minimum :

### Rapport chiffre d'affaires

Par :

- période ;
- client ;
- chantier ;
- engin ;
- type de prestation.

### Rapport facturation

- factures ;
- montants HT ;
- taxes ;
- TTC.

### Rapport paiements

- paiements ;
- mode ;
- période.

### Rapport créances

- client ;
- facture ;
- échéance ;
- retard ;
- solde.

### Rapport parc

- engins ;
- disponibilité ;
- utilisation.

### Rapport rentabilité

- chiffre d'affaires ;
- coûts ;
- marge.

---

# 40. INTÉGRITÉ FINANCIÈRE

Une règle essentielle du projet est :

**aucune modification financière importante ne doit être faite sans traçabilité.**

Une facture validée doit être considérée comme un document comptable contrôlé.

Toute correction doit passer par un mécanisme approprié :

- avoir ;
- annulation ;
- nouvelle facture ;
- correction autorisée et historisée.

---

# 41. PERFORMANCE

Claude doit identifier les requêtes lentes et les traitements inutiles.

Vérifier :

- index SQL ;
- requêtes N+1 ;
- pagination ;
- chargement frontend ;
- génération PDF ;
- exports ;
- appels API ;
- cache lorsque pertinent.

Objectif :

**une interface fluide même avec plusieurs années de données.**

---

# 42. TESTS

Claude devra mettre en place ou compléter les tests nécessaires.

## Tests fonctionnels

Tester :

- création client ;
- création engin ;
- création contrat ;
- création prestation ;
- relevé d'heures ;
- facture ;
- paiement ;
- avoir ;
- rapport.

## Tests de sécurité

Tester :

- accès non autorisé ;
- modification d'URL ;
- injection ;
- XSS ;
- CSRF ;
- session ;
- permissions.

## Tests de non-régression

Toute correction ne doit pas casser une fonctionnalité existante.

---

# 43. DONNÉES DE TEST

Créer un jeu de données permettant de tester :

- plusieurs clients ;
- plusieurs engins ;
- plusieurs contrats ;
- plusieurs chantiers ;
- plusieurs factures ;
- paiements partiels ;
- paiements complets ;
- factures échues ;
- avoirs ;
- contrats expirés ;
- engins en maintenance.

---

# 44. MIGRATION DE LA VERSION 1.0.0

La migration doit être effectuée sans perte de données.

Avant migration :

1. sauvegarde complète ;
2. vérification de l'intégrité ;
3. migration de la structure ;
4. migration des données ;
5. contrôle des relations ;
6. vérification des montants ;
7. tests ;
8. validation.

Aucune migration destructive ne doit être exécutée sans sauvegarde.

---

# 45. SAUVEGARDES

Prévoir une stratégie de backup :

- base de données ;
- fichiers ;
- documents ;
- configuration.

Prévoir également une procédure de restauration testée.

Un backup qui n'a jamais été restauré ne doit pas être considéré comme totalement fiable.

---

# 46. ENVIRONNEMENTS

Séparer autant que possible :

- développement ;
- test ;
- production.

Les identifiants et secrets de production ne doivent jamais être stockés directement dans le code source.

---

# 47. CONFIGURATION

Utiliser des variables d'environnement pour :

- base de données ;
- API ;
- email ;
- services externes ;
- clés secrètes ;
- paramètres sensibles.

Prévoir un fichier d'exemple de configuration.

---

# 48. JOURNALISATION TECHNIQUE

Les erreurs techniques doivent être journalisées côté serveur.

Les logs doivent permettre de retrouver :

- date ;
- module ;
- utilisateur ;
- erreur ;
- contexte ;
- trace technique.

Mais les informations sensibles ne doivent pas être exposées dans les logs inutilement.

---

# 49. LIVRABLES ATTENDUS

À la fin du projet, Claude doit fournir :

### 1. Code source final

Version :

**2.0.0**

### 2. Base de données

- schéma final ;
- migrations ;
- script SQL si applicable.

### 3. Documentation technique

- architecture ;
- installation ;
- configuration ;
- déploiement ;
- sauvegarde ;
- restauration.

### 4. Documentation utilisateur

- connexion ;
- clients ;
- engins ;
- contrats ;
- prestations ;
- facturation ;
- paiements ;
- rapports.

### 5. Rapport d'audit

Document indiquant :

- problèmes trouvés ;
- problèmes corrigés ;
- problèmes non corrigés ;
- raisons ;
- améliorations réalisées.

### 6. Rapport de tests

Incluant :

- tests effectués ;
- résultats ;
- anomalies ;
- corrections.

### 7. Guide de déploiement

Procédure complète permettant d'installer la version finale sur le serveur de production.

---

# 50. CRITÈRES D'ACCEPTATION

La version finale ne sera considérée comme terminée que si :

- aucune fonctionnalité critique ne présente de bug connu ;
- les factures sont correctement calculées ;
- les paiements sont correctement imputés ;
- les créances sont correctement calculées ;
- les numéros de facture sont uniques ;
- les permissions fonctionnent ;
- les documents PDF sont corrects ;
- les exports fonctionnent ;
- les données sont protégées ;
- les opérations sensibles sont historisées ;
- les données de la version 1.0.0 sont préservées ;
- les performances sont acceptables ;
- l'application est responsive ;
- les erreurs utilisateur sont correctement gérées ;
- les tests de non-régression sont satisfaisants.

---

# 51. PROCÉDURE DE TRAVAIL IMPOSÉE À CLAUDE

Claude doit travailler par étapes.

## Étape 1 — Compréhension

Ne rien modifier immédiatement.

Analyser le projet.

## Étape 2 — Cartographie

Produire :

- architecture ;
- modules ;
- base de données ;
- flux ;
- dépendances.

## Étape 3 — Audit

Classer les problèmes :

**CRITIQUE**

Bloque la production.

**MAJEUR**

Impacte fortement l'utilisation.

**MOYEN**

Doit être corrigé.

**MINEUR**

Amélioration.

## Étape 4 — Plan d'action

Établir un backlog.

Exemple :

| Priorité | Élément | Statut |
|---|---|---|
| P0 | Sécurité authentification | À corriger |
| P0 | Facturation | À auditer |
| P0 | Paiements | À auditer |
| P1 | Contrats | À finaliser |
| P1 | Parc engins | À améliorer |
| P1 | PDF | À corriger |
| P2 | Dashboard | À améliorer |
| P2 | Rapports | À compléter |

## Étape 5 — Correction

Corriger les problèmes P0 avant les P1, puis les P2.

## Étape 6 — Tests

Tester chaque correction.

## Étape 7 — Stabilisation

Effectuer des tests de non-régression.

## Étape 8 — Production

Préparer le déploiement.

---

# 52. RÈGLES DE DÉVELOPPEMENT POUR CLAUDE

Claude doit respecter les règles suivantes :

### Règle 1

Ne jamais supprimer une fonctionnalité existante sans justification.

### Règle 2

Ne jamais modifier la base de données directement en production sans sauvegarde.

### Règle 3

Ne jamais casser une API existante sans raison documentée.

### Règle 4

Ne jamais considérer qu'un bouton fonctionnel visuellement signifie que la fonctionnalité est terminée.

### Règle 5

Tester le backend et le frontend.

### Règle 6

Tester les permissions avec plusieurs rôles.

### Règle 7

Tester les cas normaux et les cas d'erreur.

### Règle 8

Privilégier les corrections propres plutôt que les hacks temporaires.

### Règle 9

Éviter la duplication de logique.

### Règle 10

Toute logique métier critique doit être exécutée et contrôlée côté serveur.

---

# 53. DEFINITION OF DONE

Une fonctionnalité est considérée comme terminée uniquement lorsque :

- l'interface est terminée ;
- le backend est terminé ;
- la base de données est correcte ;
- la validation est présente ;
- les permissions sont présentes ;
- les erreurs sont gérées ;
- les tests sont réalisés ;
- les données sont correctement sauvegardées ;
- les exports sont corrects si nécessaires ;
- la documentation est mise à jour.

---

# 54. OBJECTIF FINAL

Le résultat attendu n'est pas simplement une application qui "fonctionne".

Le résultat attendu est un **logiciel professionnel de gestion de location et de facturation adapté aux contraintes d'une entreprise minière et BTP**, capable de supporter :

**Clients → Sites → Contrats → Engins → Opérateurs → Prestations → Relevés → Factures → Paiements → Créances → Rapports**

avec une traçabilité complète.

---

# 55. INSTRUCTION FINALE À CLAUDE

> Tu prends maintenant la responsabilité technique de la finalisation de ce logiciel.
>
> La version 1.0.0 existe déjà. Ta mission n'est donc pas de recommencer le projet depuis zéro.
>
> Tu dois d'abord comprendre profondément le projet existant avant de modifier son architecture.
>
> Commence par auditer le code source, la base de données, les fonctionnalités, les interfaces, les API, la sécurité et les règles métier.
>
> Identifie précisément ce qui fonctionne, ce qui fonctionne partiellement, ce qui est cassé et ce qui manque.
>
> Ensuite, établis un plan de finalisation priorisé.
>
> Corrige d'abord les problèmes critiques qui pourraient compromettre la sécurité, l'intégrité des données ou la facturation.
>
> Finalise ensuite les fonctionnalités métier.
>
> Ne crée pas de fonctionnalités inutiles simplement pour complexifier le logiciel.
>
> Chaque fonctionnalité doit répondre à un besoin réel de gestion d'une société de location d'engins roulants, d'engins miniers et de BTP.
>
> Porte une attention particulière à la facturation, aux contrats, aux relevés d'heures, aux paiements, aux créances, aux avoirs, à la numérotation des factures, à la traçabilité et à la sécurité.
>
> Ne considère jamais une fonctionnalité comme terminée simplement parce que son interface existe.
>
> Vérifie systématiquement le flux complet :
>
> **saisie → validation → stockage → calcul → affichage → impression → export → historique.**
>
> Avant chaque modification structurelle importante, vérifie son impact sur les fonctionnalités existantes.
>
> Préserve les données existantes de la version 1.0.0.
>
> Ne supprime aucune donnée sans stratégie de migration et sauvegarde.
>
> À la fin, la version cible doit être une version stable, sécurisée, testée et prête pour la production.
>
> Le numéro de version final devra être :
>
> **2.0.0**
>
> Tu dois documenter les principales modifications effectuées et fournir un rapport final indiquant :
>
> - ce qui existait ;
> - ce qui a été corrigé ;
> - ce qui a été ajouté ;
> - ce qui a été sécurisé ;
> - ce qui a été optimisé ;
> - les tests réalisés ;
> - les éventuels points restant à traiter.
>
> **Tu es autorisé à prendre des décisions techniques lorsque celles-ci sont nécessaires à la stabilité et à la qualité du logiciel, mais tu dois préserver les règles métier existantes lorsqu'elles sont cohérentes avec le fonctionnement de l'entreprise.**
>
> **Priorité absolue : intégrité des données financières, sécurité, fiabilité de la facturation et stabilité du logiciel.**