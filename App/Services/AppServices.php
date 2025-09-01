<?php

namespace App\Services;

use App\Config\Constant;
use Core\Helpers as CoreHelpers;
use App\Models\Addresses;
use App\Models\Articles;
use App\Models\Clients;
use App\Models\FactureLignes;
use App\Models\Factures;
use App\Models\Livraisons;
use App\Models\Paiements;
use App\Models\Pointage;
use App\Models\Transporteurs;
use App\Models\Utilisateurs;
use App\Models\Commandes;
use App\Utils\Helpers as utileHelpers;
use App\Utils\Certificate;


class AppServices
{

    private $addresseModel;
    private $articleModel;
    private $clientModel;
    private $factureLigneModel;
    private $factureModel;
    private $livraisonModel;
    private $paiementModel;
    private $transporteurModel;
    private $utilisateurModel;
    private $commandeModel;
    private $pointageModel;
    private $pathTmp;


    public function __construct()
    {
        $this->addresseModel = new Addresses();
        $this->articleModel = new Articles();
        $this->clientModel = new Clients();
        $this->factureLigneModel = new FactureLignes();
        $this->factureModel = new Factures();
        $this->livraisonModel = new Livraisons();
        $this->paiementModel = new Paiements();
        $this->transporteurModel = new Transporteurs();
        $this->utilisateurModel = new Utilisateurs();
        $this->commandeModel = new Commandes();
        $this->pointageModel = new Pointage();
        $this->pathTmp = realpath('../public/tmp');
    }
    public function crud($data)
    {

        if ($data['action'] == "add_addresse") {
            return json_encode($this->addAddresse($data));
        } else if ($data['action'] == "add_article") {
            return json_encode($this->addArticle($data));
        } else if ($data['action'] == "add_client") {
            return json_encode($this->addClient($data));
        } else if ($data['action'] == "add_commande") {
            return json_encode($this->addCommande($data));
        } else if ($data['action'] == "add_facture_ligne") {
            return json_encode($this->addFactureLigne($data));
        } else if ($data['action'] == "add_facture") {
            return json_encode($this->addFacture($data));
        } else if ($data['action'] == "add_livraison") {
            return json_encode($this->addLivraison($data));
        } else if ($data['action'] == "add_paiement") {
            return json_encode($this->addPaiement($data));
        } else if ($data['action'] == "add_transporteur") {
            return json_encode($this->addPersonnelle($data));
        } else {
            return json_encode($data);
        }
    }
    private function addClient(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $client = $this->clientModel->get_2('email_clients', $data['email'], 'telephone_clients', $data['telephone'], 0, 1);
            if (count($client) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter le client , Email ou Téléphone existe déjàs ";
                return $ret;
            }
            $sql = $this->clientModel->add(array(
                'client_id' => CoreHelpers::generateString(32),
                'noms_clients' => $data['libelle'],
                'email_clients' => $data['email'],
                'telephone_clients' => $data['telephone'],
                'created_at_clients' => time(),
            ));
        } else if ($data['type'] == "update") {

            $client = $this->clientModel->get_1_0('client_id', $data['id'], 0, 1);
            if (count($client) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , Client introuvable ";
                return $ret;
            }
            $sql = $this->clientModel->update(array(
                'noms_clients' => $data['libelle'],
                'email_clients' => $data['email'],
                'telephone_clients' => $data['telephone'],
            ), 'client_id', $data['id']);
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addAddresse(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            // vérifier que le client existe dans la table client
            $client = $this->clientModel->get_1_0('client_id', $data['client'], 0, 1);
            if (count($client) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter l'addresse car le client n'existe pas ";
                return $ret;
            }
            //  vérifié si le client dispose déjàs une adresse
            $client = $this->addresseModel->get_1_1('client_id_addresse', $data['client'], 0, 1);
            if (count($client) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Cet client à déjàs un addresse Enregistré ";
                return $ret;
            }

            $sql = $this->addresseModel->add(array(
                'adresse_id' => CoreHelpers::generateString(32),
                'client_id_addresse' => $data['client'],
                'type_addresses' => $data['type_addr'],
                'rue_addresses' => $data['rue'],
                'ville_addresses' => $data['ville'],
                'code_postal_addresses' => $data['code'],
                'pays_addresses' => $data['pays'],
            ));
        } else if ($data['type'] == "update") {

            $addr = $this->addresseModel->get_1_0('addresse_id', $data['id'], 0, 1);
            if (count($addr) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , addresse introuvable ";
                return $ret;
            }
            $sql = $this->addresseModel->update(array(
                'client_id_addresse' => $data['client'],
                'type_addresses' => $data['type_addr'],
                'rue_addresses' => $data['rue'],
                'ville_addresses' => $data['ville'],
                'code_postal_addresses' => $data['code'],
                'pays_addresses' => $data['pays'],
            ), 'adresse_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addArticle(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');

        if ($data['type'] == "add") {
            // vérifier que le client existe dans la table client
            $sql = $this->articleModel->add(array(
                'article_id' => CoreHelpers::generateString(32),
                'libelle_articles' => $data['libelle'],
                'cathegorie_articles' => $data['cathegorie'],
                'type_articles' => $data['type_art'],
                'marque_articles' => $data['marque'],
                'quantite_articles' => $data['quantite'],
                'created_at_articles' => time(),
            ));
        } else if ($data['type'] == "update") {
            //  vérifié si le client dispose déjàs une adresse
            $article = $this->articleModel->get_1_1('article_id', $data['id'], 0, 1);
            if (count($article) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , article introuvable ";
                return $ret;
            }

            $sql = $this->articleModel->update(array(
                'libelle_articles' => $data['libelle'],
                'type_articles' => $data['type_art'],
                'marque_articles' => $data['marque'],
                'quantite_articles' => $data['quantite'],
                'cathegorie_articles' => $data['cathegorie'],
            ), 'article_id', $data['id']);
        } else if ($data['type'] == "delete") {
            $sql = $this->articleModel->delete('article_id', $data['id']);
        }

        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addFactureLigne(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter la ligne car la facture n'a pas été créer ";
                return $ret;
            }
            $article = $this->articleModel->get_1_1('article_id', $data['article'], 0, 1);
            if (count($article) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter la ligne car l'article n'existe pas  ";
                return $ret;
            }
            (empty($this->factureLigneModel->getNumberRef())) ? $ref = '001/BSM/' . date('y') : $ref = utileHelpers::refFacture($this->factureLigneModel->getNumberRef());

            $mt = $data['quantite'] * $data['prix'];
            $sql = $this->factureLigneModel->add(array(
                'ligne_id' => CoreHelpers::generateString(32),
                'facture_id_facture_lignes' => $data['id'],
                'article_id_facture_lignes' => $data['article'],
                'quantite_facture_lignes' => $data['quantite'],
                'prix_unitaire_facture_lignes' => $data['prix'],
                'description_facture_lignes' => $data['description'],
                'reference_facture_lignes' => $ref,
                'montant_total_facture_lignes' => $mt,
                'type_pointagefacture_lignes ' => $data['type_pointage'],
                'created_at_facture_lignes' => time(),
                'user_facture_lignes' => $_SESSION['id_user'],
            ));
        } else if ($data['type'] == "update") {
            //  vérifié si le client dispose déjàs une adresse
            $article = $this->articleModel->get_1_1('article_id', $data['article'], 0, 1);
            $ligneFacture = $this->factureLigneModel->get_1_0('ligne_id', $data['id'], 0, 1);
            if (count($ligneFacture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , Ligne de facture introuvable ";
                return $ret;
            }
            if ($article['type_articles'] == 'produit') {

                $data['prix'] = $article['prix_unitaire_articles'];
                $data['taux_tva'] = $article['taux_tva_articles'];

                if ($article['quantite_articles'] < $data['quantite']) {
                    $ret['success'] = false;
                    $ret['msg'] = "Impossible d'ajouter la ligne car la quantité demandé n'existe pas";
                    return $ret;
                }
                $newQuantity = $article['quantite_articles'] - $data['quantite'];
                $mt = $data['quantite'] * $data['prix'];
                $mtva = ($mt * ($data['taux_tva'] / 100));
                $mttc =  $mt + $mtva;
                $this->articleModel->update(array(
                    'quantite_articles' => $newQuantity,
                ), 'article_id', $data['article']);
            } else {
                $mt = $data['quantite'] * $data['prix'];
                $mtva = ($mt * ($data['taux_tva'] / 100));
                $mttc =  $mt + $mtva;
            }
            $sql = $this->factureLigneModel->update(array(
                'quantite_facture_lignes' => $data['quantite'],
                'prix_unitaire_facture_lignes' => $data['prix'],
                'description_facture_lignes' => $data['description'],
                'montant_total_facture_lignes' => $mt,
                'montant_tva_facture_lignes' => $mtva,
                'montant_ttc_facture_lignes' => $mttc,
            ), 'ligne_id', $data['id']);
        } else if ($data['type'] == "delete") {
            $sql = $this->factureLigneModel->delete('ligne_id', $data['id']);
        } else if ($data['type'] == "validate") {
            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Aucune validation n'est possible , car la facture n'a pas été créer ";
                return $ret;
            }
            $factureLigneModel = $this->factureLigneModel->get_1_0('facture_id_facture_lignes', $data['id'], 0, 1);
            if (count($factureLigneModel) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de validé cette facture , car elle ne contien pas d' article ";
                return $ret;
            }
            if ($data['email'] == $_SESSION['login']) {
                if (sha1($data['password']) == trim($_SESSION['pwd'], ' ')) {
                    if ($_SESSION['role_utilisateur'] == "admin") {
                        $sql = $this->factureModel->update(array('valide_factures' => "true"), 'facture_id', $data['id']);
                    } else {
                        $ret['success'] = false;
                        $ret['msg'] = "Aucune validation n'est possible , car vous ne disposez pas de se droit ";
                        return $ret;
                    }
                } else {
                    $ret['success'] = false;
                    $ret['msg'] = "Aucune validation n'est possible , car le mot de passe est incorrecte ";
                    return $ret;
                }
            } else {
                $ret['success'] = false;
                $ret['msg'] = "Aucune validation n'est possible , car le nom d'utilisateur est incorrecte ";
                return $ret;
            }
        } else if ($data['type'] == "add-pointage") {
            $ligneFacture = $this->factureLigneModel->get_1_0('ligne_id', $data['id'], 0, 1);
            if (count($ligneFacture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Pointage impossible , ligne de facture introuvable ";
                return $ret;
            }
            if ($ligneFacture['type_pointagefacture_lignes'] == 'index') {
                $indexTotal = ($data['fin'] - $data['depart']);
                $data['depart'] = $data['depart'];
                $data['fin'] = $data['fin'];
            } else if ($ligneFacture['type_pointagefacture_lignes'] == 'heure') {
                $indexTotal = $data['heure'];
                $data['depart'] = 0;
                $data['fin'] = 0;
            } else {
                $indexTotal = 1;
                $data['depart'] = 0;
                $data['fin'] = 0;
            }
            $sql = $this->pointageModel->create(array(
                'pointage_id' => CoreHelpers::generateString(32),
                'date_pointage' => $data['date'],
                'index_depart_pointage' => $data['depart'],
                'index_fin_pointage' => $data['fin'],
                'index_total_pointage' => $indexTotal,
                'poste_pointage' => $data['poste'],
                'operateur_pointage' => $data['operateur'],
                'superviseur_pointage' => $data['superviseur'],
                'site_pointage ' => $data['site'],
                'remarque_pointage' => $data['remarque'],
                'user_created_at_pointage' => $_SESSION['id_user'],
                'created_at_pointage' => time(),
                '_id_facture_ligne_pointage' => $data['id'],
            ));
        } else if ($data['type'] == "update-pointage") {
            $ligneFacture = $this->pointageModel->get_1('pointage_id', $data['id'], 0, 1);
            if (count($ligneFacture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Pointage impossible , ligne de facture introuvable ";
                return $ret;
            }
            $indexTotal = ($data['fin'] - $data['depart']);
            $sql = $this->pointageModel->update(array(
                'date_pointage' => $data['date'],
                'index_depart_pointage' => $data['depart'],
                'index_fin_pointage' => $data['fin'],
                'index_total_pointage' => $indexTotal,
                'poste_pointage' => $data['poste'],
                'operateur_pointage' => $data['operateur'],
                'superviseur_pointage' => $data['superviseur'],
                'site_pointage ' => $data['site'],
                'remarque_pointage' => $data['remarque'],
                'update_at_pointage' => time(),
            ), 'pointage_id', $data['id']);
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addPaiement(array $data): array
    {

        $ret = array('msg' => 'unexpected error happen');
        if ($data['prix'] <= 0) {
            $ret['success'] = false;
            $ret['msg'] = "Impossible d'effectuer le paiement le prix doit étre supérieur a 0 ";
            return $ret;
        }
        $EscePayerUneFois = $this->paiementModel->get_1('facture_id_paiements', $data['id']);
        if (count($EscePayerUneFois) != 0) {
            $somme = 0;
            foreach ($EscePayerUneFois as $element) {
                $somme += $element['montant_paiements'];
            }
            $somTotal = $data['prix'] + $somme;
        } else {
            $somTotal = $data['prix'];
        }
        if ($data['type'] == "add") {
            $facture = $this->factureModel->get_1_0('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'effectuer le paiement car la facture n'a pas été créer ";
                return $ret;
            }
            $ligneFacture['montant_ttc_facture_lignes'] = $this->getFactureLineByFacture($data['id'])['montantTTC'];
            if ($ligneFacture['montant_ttc_facture_lignes'] > $somTotal) {
                $statusFacture = 'partiellement payée';
            } else if ($ligneFacture['montant_ttc_facture_lignes'] == $somTotal) {
                $statusFacture = 'payée';
            } else {
                $ret['success'] = false;
                $ret['msg'] = "Le montant de la facture à été depassé il reste " . utileHelpers::numberPrecision($ligneFacture['montant_ttc_facture_lignes'] - $somTotal) . " à payé ";
                return $ret;
            }
            $sql = $this->paiementModel->add(array(
                'paiement_id' => CoreHelpers::generateString(32),
                'facture_id_paiements' => $data['id'],
                'montant_paiements' => $data['prix'],
                'date_paiements' => $data['date'],
                'mode_paiements' => $data['paiement'],
                'created_at_paiements' => time(),
                'user_paiements' => $_SESSION['id_user'],
            ));
            $this->factureModel->update(array(
                'statut_factures' => $statusFacture,
            ), 'facture_id', $facture['facture_id']);
        } else if ($data['type'] == "update") {
            $paiement = $this->paiementModel->get_1_1('paiement_id', $data['id'], 0, 1);
            if (count($paiement) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour ,paiement introuvable ";
                return $ret;
            }
            $sql = $this->addresseModel->update(array(
                'facture_id_paiements' => $data['facture'],
                'montant_paiements' => $data['montant'],
                'date_paiement' => $data['date'],
                'mode_paiements' => $data['mode'],
            ), 'paiement_id', $data['id']);
        } else if ($data['type'] == "delete") {
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addFacture(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $id = CoreHelpers::generateString(32);
            $commande = $this->commandeModel->get_1_1('commande_id', $data['commande'], 0, 1);
            if (count($commande) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'élaboré la facture car la commande n'existe pas ";
                return $ret;
            }
            $factureNumber = $this->factureModel->count('commande_id_factures', $data['commande'], 0, 1);
            ($factureNumber == 0) ? $order = '01' : $order = '0' . ($factureNumber + 1);
            $ref = stripslashes($commande['reference_commandes'] . '-FACT/' . $order);
            utileHelpers::qr_code($ref, "../public/assets/img/qr/{$id}.png");
            $sql = $this->factureModel->add(array(
                'facture_id' => $id,
                'commande_id_factures' => $data['commande'],
                'date_emission_factures' => $data['dateEmission'],
                'date_echeance_factures' => $data['dateEcheance'],
                'tva_factures' => $data['tva'],
                'created_at_factures' => time(),
                'libelle_factures' => $data['libelle'],
                'user_factures' => $_SESSION['id_user'],
                'reference_factures' => $ref,
            ));
        } else if ($data['type'] == "update") {
            //  vérifié si le client dispose déjàs une adresse
            $facture = $this->factureModel->get_1_1('facture_id', $data['id'], 0, 1);
            if (count($facture) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , facture introuvable ";
                return $ret;
            }
            $sql = $this->factureModel->update(array(
                'date_emission_factures' => $data['date_emission'],
                'date_echeance_factures' => $data['date_echeance'],
                'libelle_factures' => $data['libelle'],
                'tva_factures' => $data['tva'],
            ), 'facture_id', $data['id']);
        } else if ($data['type'] == "delete") {
            /** VERIFIER QUE LA FACTURE NE CONTIENS PAS D'ARTICLE */
            $factureLigneModel = $this->factureLigneModel->get_1_0('facture_id_facture_lignes', $data['id'], 0, 1);
            if (count($factureLigneModel) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible de supprimé cette facture , car elle contien au minimum un article ";
                return $ret;
            }
            $sql = $this->factureModel->delete('facture_id', $data['id']);
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addLivraison(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $livraison = $this->livraisonModel->get_1('commande_id_livraisons', $data['commande'], 0, 1);
            if (count($livraison) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "La commande est " . $livraison['etat_livraisos'];
                return $ret;
            }
            $commande = $this->commandeModel->get_1_1('commande_id', $data['commande'], 0, 1);
            if (count($commande) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'effectuer cette livraison car la commande n'existe pas ";
                return $ret;
            }

            $livreur = $this->transporteurModel->get_1_1('personnelle_id', $data['transporteur'], 0, 1);
            if (count($livreur) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'effectuuer cette livraison car le livreur n'existe pas ";
                return $ret;
            }
            $sql = $this->livraisonModel->add(array(
                'livraison_id' => CoreHelpers::generateString(32),
                'commande_id_livraisons' => $data['commande'],
                'transporteur_id_livraisons' => $data['transporteur'],
                'date_livraisons' => $data['date'],
                'etat_livraisons' => $data['etat'],
                'created_at_livraisons' => time(),
            ));

            $this->commandeModel->update(array(
                'etat_commandes' => $data['etat'],
            ), 'commande_id', $data['commande']);
        } else if ($data['type'] == "update") {
            $livraison = $this->livraisonModel->get_1_1('livraison_id ', $data['id'], 0, 1);
            if (count($livraison) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , livraison introuvable ";
                return $ret;
            }
            $sql = $this->livraisonModel->update(array(
                'commande_id_livraison' => $data['commande'],
                'transporteur_id_livraison' => $data['transporteur'],
                'date_livraison' => $data['date'],
                'etat_livraison' => $data['etat'],
            ), 'livraison_id', $data['id']);
        } else if ($data['type'] == "delete") {
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addPersonnelle(array $data): array
    {

        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $transporteur = $this->transporteurModel->get_2('email_personnelles', $data['email'], 'telephone_personnelles', $data['telephone'], 0, 1);
            if (count($transporteur) != 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter le transporteur , Email ou Téléphone existe déjàs ";
                return $ret;
            }
            $sql = $this->transporteurModel->add(array(
                'personnelle_id' => CoreHelpers::generateString(32),
                'noms_personnelles' => $data['nom'],
                'email_personnelles' => $data['email'],
                'telephone_personnelles' => $data['telephone'],
                'poste_personnelles' => $data['poste'],
            ));
        } else if ($data['type'] == "update") {
            $transporteur = $this->transporteurModel->get_1_1('personnelle_id', $data['id'], 0, 1);
            if (count($transporteur) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , transporteur introuvable ";
                return $ret;
            }
            $sql = $this->transporteurModel->update(array(
                'noms_personnelles' => $data['nom'],
                'email_personnelles' => $data['email'],
                'telephone_personnelles' => $data['telephone'],
                'poste_personnelles' => $data['poste'],
            ), 'personnelle_id', $data['id']);
        } else if ($data['type'] == "delete") {
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    private function addCommande(array $data): array
    {
        $ret = array('msg' => 'unexpected error happen');
        if ($data['type'] == "add") {
            $client = $this->clientModel->get_1_0('client_id', $data['client'], 0, 1);
            $commande = $this->commandeModel->get_1_1_NO_LIMIT('client_id_commandes', $data['client']);
            if (count($client) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Impossible d'ajouter la commande , le client n'existe pas ";
                return $ret;
            }
            $getNumberLastCommande = count($commande);
            if ($getNumberLastCommande == 0) {
                $refCommande = ('01/' . utileHelpers::getAcronym($client['noms_clients']) . '/BSMS/' . date('Y') . '/CMD');
            } else if ($getNumberLastCommande < 10 && $getNumberLastCommande > 0) {
                $refCommande = ('0' . ($getNumberLastCommande + 1) . '/' . utileHelpers::getAcronym($client['noms_clients']) . '/BSMS/' . date('Y') . '/CMD');
            } else {

                $refCommande = (($getNumberLastCommande + 1) . '/' . utileHelpers::getAcronym($client['noms_clients']) . '/BSMS/' . date('Y') . '/CMD');
            }
            $sql = $this->commandeModel->add(array(
                'commande_id' => CoreHelpers::generateString(32),
                'client_id_commandes' => $data['client'],
                'date_commandes ' => $data['date'],
                'created_at_commandes ' => time(),
                'reference_commandes ' => $refCommande,
                'user_commandes' => $_SESSION['id_user'],
            ));
        } else if ($data['type'] == "update") {

            $commande = $this->commandeModel->get_1_1('commande_id', $data['id'], 0, 1);

            if (count($commande) == 0) {
                $ret['success'] = false;
                $ret['msg'] = "Echec mise à jour , Commande introuvable ";
                return $ret;
            }

            $sql = $this->commandeModel->update(array('date_commandes' => $data['date'], 'etat_commandes' => $data['etat']), 'commande_id', $data['id']);
        }
        $ret['success'] = $sql == true;
        return $ret;
    }
    public function printFees($param): array
    {



        $ret = array('msg' => 'unexpected error happen');
        $data_ = $this->getSingleFactureClient($param['facture']);
        // var_dump($data_ ["articles"][0]);exit();
        $cert = new Certificate(false);
        $cert->setData($data_);
        $cert->setAutoBreakPage(true);
        $cert = new Certificate(false, false);
        $cert->setData($data_);
        $cert->setFont('arialuni', 8);
        $cert->setType(Constant::FEES_PRINT);
        $cert->setTitle(false);
        $cert->generate($this->pathTmp . "/1_card.pdf");
        //$ret['urls'] = [$this->printableTMPUrl($fn . '.pdf')];
        $ret['base64'] = chunk_split(base64_encode(file_get_contents($this->pathTmp . "/1_card.pdf")));
        unlink($this->pathTmp . "/1_card.pdf");


        $ret['success'] =  true;

        return $ret;
    }
    public function getCommande($id): array
    {

        $data = [];
        $commande = $this->commandeModel->get_1_2('commande_id', $id, 0, 1);

        $data['commande_id'] = $commande['commande_id'];
        $data['client_id_commandes'] = $commande['client_id_commandes'];
        $data['noms_clients'] = $commande['noms_clients'];
        $data['date_commandes'] = $commande['date_commandes'];
        $data['etat_commandes'] = $commande['etat_commandes'];
        $data['reference_commandes'] = $commande['reference_commandes'];
        if (count($this->getFactureByCommandeCalculus($commande['commande_id'])) != 0) {
            $data['mttc'] = $this->getFactureByCommandeCalculus($commande['commande_id'])['mttc'];
        } else {
            $data['mttc'] = 0;
        }
        $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];

        $data['reste'] =   $data['mttc'] -  $data['mpc'];
        ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
        //***** client */
        $data['client_id'] = $commande['client_id'];
        $data['noms_clients'] = $commande['noms_clients'];
        $data['email_clients'] = $commande['email_clients'];
        $data['telephone_clients'] = $commande['telephone_clients'];
        //***** addrsses */
        $data['adresse_id'] = $commande['adresse_id'];
        $data['type_addresses'] = $commande['type_addresses'];
        $data['rue_addresses'] = $commande['rue_addresses'];
        $data['ville_addresses'] = $commande['ville_addresses'];
        $data['code_postal_addresses'] = $commande['code_postal_addresses'];
        $data['pays_addresses'] = $commande['pays_addresses'];
        $data['ChiffreEnLettre'] = utileHelpers::ChiffreEnLettre($data['mttc']);

        return $data;
    }
    public function getCommandeClient($id): array
    {
        $data_ = [];
        $data = [];
        $commandes = $this->commandeModel->get_1_2('client_id_commandes', $id, 0, 5);
        foreach ($commandes as $commande) {
            # code...
            $data['commande_id'] = $commande['commande_id'];
            $data['client_id_commandes'] = $commande['client_id_commandes'];
            $data['noms_clients'] = $commande['noms_clients'];
            $data['date_commandes'] = $commande['date_commandes'];
            $data['etat_commandes'] = $commande['etat_commandes'];
            $data['reference_commandes'] = $commande['reference_commandes'];
            //$data['mttc'] = ($this->factureLigneModel->SumTtcCommande('commande_id', $commande['commande_id'], 0, 1)['sum']);
            // $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];
            // $data['reste'] =   $data['mttc'] -  $data['mpc'];

            $data['mttc'] = 0;
            $data['mpc'] =   0;
            $data['reste'] =   $data['mttc'] -  $data['mpc'];

            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            //***** client */

            //***** addrsses */

            array_push($data_, $data);
        }

        return $data_;
    }
    public function getPointageLigneFacture($id): array
    {
        $data_ = [];
        $ret_ = [];
        $data = [];
        $data['SumIndex'] = 0;
        $pointages = $this->pointageModel->get_1_1_FactureLigne('_id_facture_ligne_pointage', $id);
        foreach ($pointages as $pointage) {
            $operateur = $this->transporteurModel->get_1_1('personnelle_id', $pointage['operateur_pointage'], 0, 1);
            $superviseur = $this->transporteurModel->get_1_1('personnelle_id', $pointage['superviseur_pointage'], 0, 1);
            $data['date_pointage'] = $pointage['date_pointage'];
            $data['index_depart_pointage'] = $pointage['index_depart_pointage'];
            $data['index_fin_pointage'] = $pointage['index_fin_pointage'];
            $data['index_total_pointage'] = $pointage['index_total_pointage'];
            $data['poste_pointage'] = $pointage['poste_pointage'];
            $data['operateur_pointage'] =  $operateur['noms_personnelles'] . ' / ' . $operateur['telephone_personnelles'];
            $data['superviseur_pointage'] =  $superviseur['noms_personnelles'] . ' / ' . $superviseur['telephone_personnelles'];
            $data['site_pointage'] = $pointage['site_pointage'];
            $data['remarque_pointage'] = $pointage['remarque_pointage'];
            $data['pointage_id'] = $pointage['pointage_id'];
            $data['SumIndex'] += $pointage['index_total_pointage'];
            array_push($data_, $data);
        }
        if (isset($pointages[0]['prix_unitaire_facture_lignes'])) {
            $pointages[0]['prix_unitaire_facture_lignes'] = $pointages[0]['prix_unitaire_facture_lignes'];
        } else {
            $pointages[0]['prix_unitaire_facture_lignes'] = 0;
        }
        $ret_['MontantTotalLigne'] = ($data['SumIndex'] * $pointages[0]['prix_unitaire_facture_lignes']);
        $ret_['TotalIndex'] = ($data['SumIndex']);
        array_push($ret_, $data_);
        return $ret_;
    }

    public function getFactureLineByFacture($factureId): array
    {
        $data_ = [];
        $data = [];
        $ret_ = [];
        $data['montantFacture'] = 0;

        $factureLignes = $this->factureModel->get_1_2_('facture_id_facture_lignes', $factureId, 0, 1000);
        $montantTotalPayerFacture = $this->paiementModel->SumTotalPayerCommande('facture_id', $factureId, 0, 1);
        foreach ($factureLignes as $factureLigne) {
            $data['ligne_id'] = $factureLigne['ligne_id'];
            $data['libelle_articles'] = $factureLigne['libelle_articles'];
            $data['quantite_facture_lignes'] = $factureLigne['quantite_facture_lignes'];
            $data['prix_unitaire_facture_lignes'] = $factureLigne['prix_unitaire_facture_lignes'];
            $data['type_pointagefacture_lignes'] = $factureLigne['type_pointagefacture_lignes'];
            $data['date_emission_factures'] = $factureLigne['date_emission_factures'];
            $data['date_echeance_factures'] = $factureLigne['date_echeance_factures'];
            $data['description_facture_lignes'] = $factureLigne['description_facture_lignes'];
            $data['SumIndex'] = $this->pointageModel->SumTotalIndexPointageParLigneDeFacture_1('_id_facture_ligne_pointage', $factureLigne['ligne_id'])[0]['sum'];
            $data['montantFactureLigne'] = ($data['SumIndex'] * $factureLigne['prix_unitaire_facture_lignes']);
            $data['montantFacture'] += $data['montantFactureLigne'];
            array_push($data_, $data);
        }
        $ret_['montantFacture'] = $data['montantFacture'];
        $ret_['montantTotalPayerFacture'] = $montantTotalPayerFacture['sum'];
        if (isset($factureLignes[0]['tva_factures'])) {
            $ret_['montantTva'] = ($ret_['montantFacture'] * ($factureLignes[0]['tva_factures'] / 100));
        } else {
            $ret_['montantTva'] = 0;
        }
        $ret_['montantTTC'] = ($ret_['montantFacture'] + $ret_['montantTva']);
        array_push($ret_, $data_);
        return $ret_;
    }
    public function getState()
    {
        $data = [];
        $data['commande'] = $this->commandeModel->count();
        $data['facture'] = $this->factureModel->count();
        $data['facture_impayer'] = $this->factureModel->count_1_diff('statut_factures', 'payée');
        $data['facture_payer'] = $this->factureModel->count_1('statut_factures', 'payée');
        return $data;
    }
    public function getStateByClient($client)
    {
        $data = [];
        $data['commande'] = $this->commandeModel->count1('client_id_commandes', $client);
        $data['facture'] = $this->factureModel->count_1_1('client_id_commandes', $client);
        $data['facture_impayer'] = $this->factureModel->count_1_diff('statut_factures', 'payée');
        $data['facture_payer'] = $this->factureModel->count_1_2('client_id_commandes', $client, 'statut_factures', 'payée');
        return $data;
    }

    private function getSingleFactureClient($id): array
    {
        $data_ = [];
        $data = [];
        $ret = [];
        $ret_ = [];
        $facture = $this->factureModel->get_1_3('facture_id', $id, 0, 1);

        $factureLignes = $this->getFactureLineByFacture($id);
        // ---------- client
        $data['noms_clients'] = $facture['noms_clients'];
        $data['email_clients'] = $facture['email_clients'];
        $data['telephone_clients'] = $facture['telephone_clients'];
        // ----------  ADDRESS client
        $data['type_addresses'] = $facture['type_addresses'];
        $data['rue_addresses'] = $facture['rue_addresses'];
        $data['ville_addresses'] = $facture['ville_addresses'];
        $data['code_postal_addresses'] = $facture['code_postal_addresses'];
        $data['pays_addresses'] = $facture['pays_addresses'];
        // ----------  facture client
        $data['date_emission_factures'] = $facture['date_emission_factures'];
        $data['date_echeance_factures'] = $facture['date_echeance_factures'];
        $data['statut_factures'] = $facture['statut_factures'];
        $data['reference_factures'] = $facture['reference_factures'];
        $data['libelle_factures'] = $facture['libelle_factures'];
        $data['valide_factures'] = $facture['valide_factures'];
        $data['tva_factures'] = $facture['tva_factures'];
        $data['facture_id'] = $facture['facture_id'];
        if (count($factureLignes) != 1) {
            $data['facturesLigneFacture'] = $factureLignes[0];
        }
        $data['montant_total_facture'] = ($factureLignes['montantFacture']);
        $data['montant_tva'] = $factureLignes['montantTva'];
        $data['montant_ttc_facture'] = ($factureLignes['montantTTC']);
        $data['montant_ttc_facture_lignes_en_lettre'] = utileHelpers::ChiffreEnLettre($data['montant_ttc_facture']);
        return $data;
    }
    public function getCommandeListe(): array
    {
        $data_ = [];
        $data = [];
        $commandes = $this->commandeModel->get_();
        foreach ($commandes as $commande) {
            var_dump($this->getFactureByCommandeCalculus($commande['commande_id']));
            $data['commande_id'] = $commande['commande_id'];
            $data['client_id_commandes'] = $commande['client_id_commandes'];
            $data['noms_clients'] = $commande['noms_clients'];
            $data['date_commandes'] = $commande['date_commandes'];
            $data['etat_commandes'] = $commande['etat_commandes'];
            $data['reference_commandes'] = $commande['reference_commandes'];
            if (count($this->getFactureByCommandeCalculus($commande['commande_id'])) != 0) {
                $data['mttc'] = $this->getFactureByCommandeCalculus($commande['commande_id'])['mttc'];
            } else {
                $data['mttc'] = 0;
            }
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            array_push($data_, $data);
        }

        return  $data_;
    }
    public function getCommandeListeByClient($client): array
    {
        $data_ = [];
        $data = [];
        $commandes = $this->commandeModel->get_1_1('client_id_commandes', $client, 0, 4);
        foreach ($commandes as $commande) {
            $data['commande_id'] = $commande['commande_id'];
            $data['client_id_commandes'] = $commande['client_id_commandes'];
            $data['noms_clients'] = $commande['noms_clients'];
            $data['date_commandes'] = $commande['date_commandes'];
            $data['etat_commandes'] = $commande['etat_commandes'];
            $data['reference_commandes'] = $commande['reference_commandes'];
            if (count($this->getFactureByCommandeCalculus($commande['commande_id'])) != 0) {
                $data['mttc'] = $this->getFactureByCommandeCalculus($commande['commande_id'])['mttc'];
            } else {
                $data['mttc'] = 0;
            }
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('commande_id', $commande['commande_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            array_push($data_, $data);
        }

        return  $data_;
    }
    private function getFactureByCommandeCalculus($commandeId): array
    {
        $data_ = [];
        $data = [];
        $ret_ = [];
        $data['mttc'] = 0;
        $data['mtva'] = 0;
        $factureCommandes = $this->factureModel->get_1_2('commande_id_factures', $commandeId, 0, 1000);
        foreach ($factureCommandes as $factureCommande) {
            $facture = $this->getFactureLineByFacture($factureCommande['facture_id']);
            $data['mttc'] += $facture['montantTTC'];
            $data['mtva'] += $facture['montantTva'];
        }
        array_push($data_, $data);
        if (isset($data_[0])) {
            return $data_[0];
        } else {
            return array();
        }
    }
    private function getFactureByFactureCalculus($factureId): array
    {
        $data = [];
        $facture = $this->getFactureLineByFacture($factureId);
        $data['mttc'] = $facture['montantTTC'];
        $data['mtva'] = $facture['montantTva'];
        return $data;
    }
    public function getFactureListe(): array
    {
        $data_ = [];
        $data = [];
        $factures = $this->factureModel->get_();
        foreach ($factures as $facture) {
            $data['valide_factures'] = $facture['valide_factures'];
            $data['commande_id_factures'] = $facture['commande_id_factures'];
            $data['client_id_commandes'] = $facture['client_id_commandes'];
            $data['libelle_factures'] = $facture['libelle_factures'];
            $data['facture_id'] = $facture['facture_id'];
            $data['reference_commandes'] = $facture['reference_commandes'];
            $data['reference_factures'] = $facture['reference_factures'];
            $data['tva_factures'] = $facture['tva_factures'];
            $data['noms_clients'] = $facture['noms_clients'];
            $data['mttc'] = $this->getFactureByFactureCalculus($facture['facture_id'])['mttc'];
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('facture_id', $facture['facture_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            array_push($data_, $data);
        }

        return  $data_;
    }
        public function getFactureListeClient($client): array
    {
        $data_ = [];
        $data = [];
        $factures = $this->factureModel->get_1_2('client_id_commandes',$client,0,1000000);
        foreach ($factures as $facture) {
            $data['valide_factures'] = $facture['valide_factures'];
            $data['commande_id_factures'] = $facture['commande_id_factures'];
            $data['client_id_commandes'] = $facture['client_id_commandes'];
            $data['libelle_factures'] = $facture['libelle_factures'];
            $data['facture_id'] = $facture['facture_id'];
            $data['reference_commandes'] = $facture['reference_commandes'];
            $data['reference_factures'] = $facture['reference_factures'];
            $data['tva_factures'] = $facture['tva_factures'];
            $data['noms_clients'] = $facture['noms_clients'];
            $data['mttc'] = $this->getFactureByFactureCalculus($facture['facture_id'])['mttc'];
            $data['mpc'] =   $this->paiementModel->SumTotalPayerCommande('facture_id', $facture['facture_id'], 0, 1)['sum'];
            $data['reste'] =   $data['mttc'] -  $data['mpc'];
            ($data['mttc'] != 0) ?  $data['taux'] = (($data['mpc'] / $data['mttc']) * 100) . '%' :  $data['taux'] = 0;
            array_push($data_, $data);
        }

        return  $data_;
    }
}
