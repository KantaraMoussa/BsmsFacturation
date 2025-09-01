<?php

namespace App\Config;

class Constant
{
    const FEES_PRINT = 'printFees';
    const SQL_MONTANT_COMMANDE = 'select sum(montant_ttc_facture_lignes) from facture_lignes join factures on factures.facture_id=facture_lignes.facture_id_facture_lignes join commandes on commandes.commande_id=factures.commande_id_factures';
    const SQL_MONTANT_PAYER_COMMANDE = 'select sum(montant_paiements) from paiements join factures on factures.facture_id=paiements.facture_id_paiements join commandes on commandes.commande_id=factures.commande_id_factures';
    const SQL_SUM_TOTAL_INDEX_FACTURE = 'select sum(index_total_pointage) from pointage join facture_lignes on facture_lignes.ligne_id=pointage._id_facture_ligne_pointage join factures on factures.facture_id=facture_lignes.facture_id_facture_lignes ';
}
