select sum(montant_ttc_facture_lignes) from facture_lignes
join factures on factures.facture_id=facture_lignes.facture_id_facture_lignes
join commandes on commandes.commande_id=factures.commande_id_factures
where  commandes.commande_id='16d0XoaxSiCcDu9LKP6UhoHkH2ePxZjy'
-----------------------------------------
select sum(montant_paiements) from paiements
join factures on factures.facture_id=paiements.facture_id_paiements
join commandes on commandes.commande_id=factures.commande_id_factures
where  commandes.commande_id='16d0XoaxSiCcDu9LKP6UhoHkH2ePxZjy'


    <script src="{{base_url()}}assets/js/jquery-3.6.0.min.js"></script>
    <script src="{{base_url()}}assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{base_url()}}assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="{{base_url()}}assets/js/script.js"></script>
    <!-- JS other -->
    <!-- JavaScript -->
    <script src="{{base_url()}}js/scripts/__jlive.js"></script>
    <script src="{{base_url()}}js/bundle.js"></script>
    <script src="{{base_url()}}js/scripts.js"></script>
    <script src="{{base_url()}}js/libs/io.min.js"></script>
    <script src="{{base_url()}}js/scripts/jaupl.js"></script>
    <script src="{{base_url()}}js/libs/print.min.js"></script>

    <script type="module" src="{{base_url()}}js/scripts/script.js"></script>