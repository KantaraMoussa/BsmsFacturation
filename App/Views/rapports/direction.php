{% extends "base.php" %}

{% block title %} Pilotage Direction {% endblock %}

{% block body %}
<div class="content container-fluid" id="direction-dashboard">

    <div class="page-header">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="page-title fw-bolder">Pilotage Direction</h3>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{'dashboard' | url }}">Dashboard</a></li>
                    <li class="breadcrumb-item active">Pilotage Direction</li>
                </ul>
            </div>
            <div class="col-auto">
                <span id="last-refresh" class="text-muted small"></span>
            </div>
        </div>
    </div>

    <!-- ==================== FILTRES ==================== -->
    <div class="card mb-3">
        <div class="card-body pb-2">
            <form id="direction-filters" class="row g-2 align-items-end">
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Période</label>
                    <select class="form-select form-select-sm" name="period" id="f-period">
                        <option value="month" {% if filters['period']=='month' %}selected{% endif %}>Ce mois</option>
                        <option value="quarter" {% if filters['period']=='quarter' %}selected{% endif %}>Ce trimestre</option>
                        <option value="year" {% if filters['period']=='year' %}selected{% endif %}>Cette année</option>
                        <option value="last12" {% if filters['period']=='last12' %}selected{% endif %}>12 derniers mois</option>
                        <option value="custom" {% if filters['period']=='custom' %}selected{% endif %}>Personnalisé</option>
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6 custom-period-field" {% if filters['period']!='custom' %}hidden{% endif %}>
                    <label class="form-label small mb-1">Du</label>
                    <input type="date" class="form-control form-control-sm" name="date_from" id="f-date-from" value="{{filters['date_from']}}">
                </div>
                <div class="col-lg-2 col-md-4 col-6 custom-period-field" {% if filters['period']!='custom' %}hidden{% endif %}>
                    <label class="form-label small mb-1">Au</label>
                    <input type="date" class="form-control form-control-sm" name="date_to" id="f-date-to" value="{{filters['date_to']}}">
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Client</label>
                    <select class="form-select form-select-sm" name="client" id="f-client">
                        <option value="">Tous</option>
                        {% for c in options['clients'] %}
                        <option value="{{c['client_id']}}" {% if filters['client']==c['client_id'] %}selected{% endif %}>{{c['noms_clients']}}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Chantier</label>
                    <select class="form-select form-select-sm" name="chantier" id="f-chantier">
                        <option value="">Tous</option>
                        {% for c in options['chantiers'] %}
                        <option value="{{c['chantier_id']}}" {% if filters['chantier']==c['chantier_id'] %}selected{% endif %}>{{c['nom_chantiers']}}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Engin</label>
                    <select class="form-select form-select-sm" name="engin" id="f-engin">
                        <option value="">Tous</option>
                        {% for e in options['engins'] %}
                        <option value="{{e['engin_id']}}" {% if filters['engin']==e['engin_id'] %}selected{% endif %}>{{e['numero_interne_engins']}}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Catégorie engin</label>
                    <select class="form-select form-select-sm" name="categorie" id="f-categorie">
                        <option value="">Toutes</option>
                        {% for c in options['categories'] %}
                        <option value="{{c['categorie_engins']}}" {% if filters['categorie']==c['categorie_engins'] %}selected{% endif %}>{{c['categorie_engins']}}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Contrat</label>
                    <select class="form-select form-select-sm" name="contrat" id="f-contrat">
                        <option value="">Tous</option>
                        {% for c in options['contrats'] %}
                        <option value="{{c['commande_id']}}" {% if filters['contrat']==c['commande_id'] %}selected{% endif %}>{{c['reference_commandes']}}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Type de prestation</label>
                    <select class="form-select form-select-sm" name="prestation" id="f-prestation">
                        <option value="">Toutes</option>
                        {% for p in options['prestations'] %}
                        <option value="{{p['type_location_commandes']}}" {% if filters['prestation']==p['type_location_commandes'] %}selected{% endif %}>{{p['type_location_commandes']}}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <label class="form-label small mb-1">Statut facture</label>
                    <select class="form-select form-select-sm" name="statut" id="f-statut">
                        <option value="">Tous</option>
                        {% for s in options['statuts'] %}
                        <option value="{{s['statut_factures']}}" {% if filters['statut']==s['statut_factures'] %}selected{% endif %}>{{s['statut_factures']}}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <button type="button" id="f-apply" class="btn btn-primary btn-sm w-100">Appliquer</button>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <button type="button" id="f-reset" class="btn btn-outline-secondary btn-sm w-100">Réinitialiser</button>
                </div>
            </form>
        </div>
    </div>

    <!-- ==================== ALERTES ==================== -->
    <div class="row" id="alerts-panel">
        <!-- rebuilt entirely by JS on each refresh; server-rendered once below for first paint -->
        {% include "rapports/direction-alerts.php" %}
    </div>

    <!-- ==================== KPI FINANCIERS ==================== -->
    <h5 class="fw-bolder mt-2 mb-2">KPI Financiers</h5>
    <div class="row row-kpi">
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Chiffre d'affaires HT" data-info="Définition: total facturé hors taxes. Source: factures × facture_lignes × pointage. Formule: Σ(index pointage × prix unitaire). Période: filtre actif.">
            <a href="{{detail_url}}&label=Factures%20-%20CA%20HT" class="card kpi-link">
                <div class="card-body">
                    <p class="text-muted mb-1">CA HT <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-ca-ht">{{financier['ca_ht'] | number_format}} <small>GNF</small></h4>
                </div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Taxes" data-info="Définition: TVA facturée. Source: factures.tva_factures appliqué au CA HT. Période: filtre actif.">
            <a href="{{detail_url}}&label=Factures%20-%20Taxes" class="card kpi-link">
                <div class="card-body">
                    <p class="text-muted mb-1">Taxes <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-taxes">{{financier['taxes'] | number_format}} <small>GNF</small></h4>
                </div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Chiffre d'affaires TTC" data-info="Définition: total facturé toutes taxes comprises. Formule: CA HT + taxes. Période: filtre actif.">
            <a href="{{detail_url}}&label=Factures%20-%20CA%20TTC" class="card kpi-link">
                <div class="card-body">
                    <p class="text-muted mb-1">CA TTC <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-ca-ttc">{{financier['ca_ttc'] | number_format}} <small>GNF</small></h4>
                </div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Montant encaissé" data-info="Définition: total réellement encaissé. Source: paiements.montant_paiements. Période: date de paiement dans le filtre actif.">
            <a href="{{detail_url}}&label=Factures%20-%20Encaiss%C3%A9" class="card kpi-link">
                <div class="card-body">
                    <p class="text-muted mb-1">Encaissé <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-encaisse" class="text-success">{{financier['encaisse'] | number_format}} <small>GNF</small></h4>
                </div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Créances" data-info="Définition: solde restant dû sur les factures non soldées. Formule: CA TTC - avoirs - encaissé. Source: factures/avoirs/paiements.">
            <a href="{{detail_url}}&label=Cr%C3%A9ances&only_outstanding=1" class="card kpi-link">
                <div class="card-body">
                    <p class="text-muted mb-1">Créances <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-creances" class="text-danger">{{financier['creances'] | number_format}} <small>GNF</small></h4>
                </div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Factures impayées" data-info="Définition: nombre de factures avec un solde restant &gt; 0. Période: date d'émission dans le filtre actif.">
            <a href="{{detail_url}}&label=Factures%20impay%C3%A9es&only_outstanding=1" class="card kpi-link">
                <div class="card-body">
                    <p class="text-muted mb-1">Factures impayées <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-factures-impayees">{{financier['factures_impayees']}}</h4>
                </div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Factures en retard" data-info="Définition: factures impayées dont la date d'échéance est dépassée aujourd'hui.">
            <a href="{{detail_url}}&label=Factures%20en%20retard&only_outstanding=1" class="card kpi-link">
                <div class="card-body">
                    <p class="text-muted mb-1">Factures en retard <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-factures-retard" class="text-warning">{{financier['factures_en_retard']}}</h4>
                </div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Taux de recouvrement" data-info="Formule: encaissé / CA TTC × 100. Mesure la part du chiffre d'affaires effectivement récupérée sur la période.">
            <div class="card">
                <div class="card-body">
                    <p class="text-muted mb-1">Taux de recouvrement <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-taux-recouvrement">{{financier['taux_recouvrement']}}%</h4>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Panier moyen" data-info="Formule: CA TTC / nombre de factures émises sur la période.">
            <div class="card">
                <div class="card-body">
                    <p class="text-muted mb-1">Panier moyen <i class="fas fa-info-circle kpi-info"></i></p>
                    <h4 id="v-panier-moyen">{{financier['panier_moyen'] | number_format}} <small>GNF</small></h4>
                </div>
            </div>
        </div>
    </div>

    <!-- ==================== KPI PARC ==================== -->
    <h5 class="fw-bolder mt-4 mb-2">KPI Parc d'engins</h5>
    <div class="row row-kpi">
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Engins - total" data-info="Source: table engins, filtrée par engin/catégorie sélectionnés.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Total engins <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-total">{{parc['total']}}</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Disponibles" data-info="Engins avec statut_engins = 'disponible'.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Disponibles <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-dispo" class="text-success">{{parc['disponibles']}}</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Loués" data-info="Engins avec statut_engins = 'loué'.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Loués <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-loue">{{parc['loues']}}</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="En maintenance" data-info="Engins avec statut_engins = 'en maintenance'.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">En maintenance <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-maintenance" class="text-warning">{{parc['en_maintenance']}}</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Immobilisés" data-info="Engins avec statut_engins = 'immobilisé' ou 'hors service'.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Immobilisés <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-immobilise" class="text-danger">{{parc['immobilises']}}</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Taux d'utilisation" data-info="Formule: (loués + en maintenance) / total × 100 — proportion du parc actuellement engagée.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Taux d'utilisation <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-taux">{{parc['taux_utilisation']}}%</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Heures facturées" data-info="Somme des index de pointage pour les lignes de facture facturées à l'heure (type_pointagefacture_lignes = 'heure'), sur la période.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Heures facturées <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-heures">{{parc['heures_facturees'] | number_format}} h</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Jours facturés" data-info="Somme des durées de location des contrats facturés au jour (type_location_commandes = 'journalier'), sur la période.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Jours facturés <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-parc-jours">{{parc['jours_factures'] | number_format}} j</h4></div></div>
        </div>
    </div>

    <!-- ==================== KPI COMMERCIAUX ==================== -->
    <h5 class="fw-bolder mt-4 mb-2">KPI Commerciaux</h5>
    <div class="row row-kpi">
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Clients actifs" data-info="Clients distincts ayant au moins une facture émise sur la période.">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Clients actifs <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-clients-actifs">{{commercial['clients_actifs']}}</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Contrats actifs" data-info="Commandes dont la date de début est passée et la date de fin n'est pas encore atteinte (ou non définie).">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Contrats actifs <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-contrats-actifs">{{commercial['contrats_actifs']}}</h4></div></div>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Contrats expirant" data-info="Commandes dont la date de fin tombe dans les 15 prochains jours.">
            <a href="{{'rapports/direction' | url}}#" class="card kpi-link" onclick="return false;">
                <div class="card-body"><p class="text-muted mb-1">Contrats expirant (15j) <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-contrats-expirant" class="text-warning">{{commercial['contrats_expirant']}}</h4></div>
            </a>
        </div>
        <div class="col-xl-3 col-md-6 kpi-card" data-label="Prestations réalisées" data-info="Nombre de lignes de facture émises sur la période (une ligne = une prestation facturée).">
            <div class="card"><div class="card-body"><p class="text-muted mb-1">Prestations réalisées <i class="fas fa-info-circle kpi-info"></i></p><h4 id="v-prestations">{{commercial['prestations_realisees']}}</h4></div></div>
        </div>
    </div>

    <!-- ==================== GRAPHIQUES ==================== -->
    <h5 class="fw-bolder mt-4 mb-2">Graphiques</h5>
    <div class="row">
        <div class="col-xl-6 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">Évolution du CA (HT / TTC)</div></div>
                <div class="card-body"><div id="chart-evolution-ca"></div></div>
            </div>
        </div>
        <div class="col-xl-6 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">Facturation vs Encaissement</div></div>
                <div class="card-body"><div id="chart-facturation-encaissement"></div></div>
            </div>
        </div>
        <div class="col-xl-6 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">Évolution des créances</div></div>
                <div class="card-body"><div id="chart-evolution-creances"></div></div>
            </div>
        </div>
        <div class="col-xl-6 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">Ageing des créances</div></div>
                <div class="card-body"><div id="chart-ageing"></div></div>
            </div>
        </div>
        <div class="col-xl-4 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">CA par client (top 10)</div></div>
                <div class="card-body"><div id="chart-ca-client"></div></div>
            </div>
        </div>
        <div class="col-xl-4 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">CA par engin (top 10)</div></div>
                <div class="card-body"><div id="chart-ca-engin"></div></div>
            </div>
        </div>
        <div class="col-xl-4 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">CA par chantier (top 10)</div></div>
                <div class="card-body"><div id="chart-ca-chantier"></div></div>
            </div>
        </div>
        <div class="col-xl-4 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">Taux d'utilisation du parc</div></div>
                <div class="card-body"><div id="chart-utilisation-parc"></div></div>
            </div>
        </div>
        <div class="col-xl-4 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">Répartition des engins par statut</div></div>
                <div class="card-body"><div id="chart-repartition-engins"></div></div>
            </div>
        </div>
        <div class="col-xl-4 col-12 mb-3">
            <div class="card"><div class="card-header"><div class="card-title">Rentabilité par engin (marge)</div></div>
                <div class="card-body"><div id="chart-rentabilite"></div></div>
            </div>
        </div>
    </div>

    <!-- ==================== TOP 10 DEBITEURS ==================== -->
    <div class="row">
        <div class="col-lg-6 col-12 mb-3">
            <div class="card card-table comman-shadow">
                <div class="card-header"><div class="card-title">Top 10 clients débiteurs</div></div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="table-top-debiteurs" class="table border-0 table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread"><tr><th>Client</th><th>Créance</th><th>Factures</th></tr></thead>
                            <tbody id="tbody-top-debiteurs">
                                {% for d in top_debiteurs %}
                                <tr>
                                    <td><a href="{{'rapports/direction-detail' | url}}?client={{d['client_id']}}&date_from={{filters['date_from']}}&date_to={{filters['date_to']}}&only_outstanding=1&label=Cr%C3%A9ances%20-%20{{d['noms_clients']}}">{{d['noms_clients']}}</a></td>
                                    <td class="text-danger fw-bolder">{{d['total_creance'] | number_format}} GNF</td>
                                    <td>{{d['nb_factures']}}</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==================== AGEING (table) ==================== -->
        <div class="col-lg-6 col-12 mb-3">
            <div class="card card-table comman-shadow">
                <div class="card-header"><div class="card-title">Ageing des créances (détail)</div></div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table border-0 table-hover table-center mb-0 table-striped">
                            <thead class="student-thread"><tr><th>Tranche</th><th>Montant</th></tr></thead>
                            <tbody id="tbody-ageing">
                                {% for tranche, montant in ageing %}
                                <tr>
                                    <td><a href="{{'rapports/direction-detail' | url}}?date_from={{filters['date_from']}}&date_to={{filters['date_to']}}&client={{filters['client']}}&chantier={{filters['chantier']}}&engin={{filters['engin']}}&tranche={{tranche | url_encode}}&label=Cr%C3%A9ances%20-%20{{tranche | url_encode}}">{{tranche}}</a></td>
                                    <td class="{% if montant > 0 %}text-danger fw-bolder{% endif %}">{{montant | number_format}} GNF</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ==================== RENTABILITE ENGINS ==================== -->
    <div class="row">
        <div class="col-sm-12">
            <div class="card card-table comman-shadow">
                <div class="card-header"><div class="card-title">Rentabilité par engin</div></div>
                <div class="card-body">
                    <p class="text-muted small mb-2">
                        Marge estimée = CA - coût maintenance - coût carburant. Seuls les coûts réellement enregistrés dans l'application sont pris en compte :
                        les salaires, l'amortissement et l'assurance ne sont pas suivis ici et ne sont donc pas inclus.
                    </p>
                    <div class="table-responsive">
                        <table id="table-rentabilite" class="table border-0 table-hover table-center mb-0 datatable table-striped">
                            <thead class="student-thread">
                                <tr>
                                    <th>Engin</th><th>CA</th><th>Coût maintenance</th><th>Coût carburant</th>
                                    <th>Marge estimée</th><th>Marge/jour</th><th>Marge/heure</th><th>Taux d'utilisation</th>
                                </tr>
                            </thead>
                            <tbody id="tbody-rentabilite">
                                {% for r in rentabilite %}
                                <tr>
                                    <td><a href="{{ "engins/detail/#{r['engin']['engin_id']}" | url }}" class="fw-bolder text-primary">{{r['engin']['numero_interne_engins']}}</a></td>
                                    <td>{{r['chiffre_affaires'] | number_format}} GNF</td>
                                    <td>{{r['cout_maintenance'] | number_format}} GNF</td>
                                    <td>{{r['cout_carburant'] | number_format}} GNF</td>
                                    <td class="{% if r['marge'] >= 0 %}text-success{% else %}text-danger{% endif %} fw-bolder">{{r['marge'] | number_format}} GNF</td>
                                    <td>{{r['marge_par_jour'] is not null ? (r['marge_par_jour'] | number_format) ~ ' GNF' : '-'}}</td>
                                    <td>{{r['marge_par_heure'] is not null ? (r['marge_par_heure'] | number_format) ~ ' GNF' : '-'}}</td>
                                    <td>{{r['taux_utilisation']}}%</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}

{% block script %}
<script src="{{base_url()}}assets/plugins/apexchart/apexcharts.min.js"></script>
<script>
    window.__DIRECTION_INITIAL__ = {{ initial_json | raw }};
    window.__DIRECTION_URLS__ = {
        data: "{{ 'rapports/direction-data' | url }}",
        detail: "{{ 'rapports/direction-detail' | url }}",
        base: "{{ base_url() }}"
    };
</script>
<script type="module" src="{{base_url() ~ asset_v('js/scripts/dashboard-direction.js')}}"></script>
{% endblock %}
