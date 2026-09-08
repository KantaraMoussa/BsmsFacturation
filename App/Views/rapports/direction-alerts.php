{# Alerts panel content - re-included as a partial for the first server-render;
   dashboard-direction.js rebuilds this same markup client-side on refresh. #}
<div class="col-12">
    <div class="card border-0">
        <div class="card-body">
            <h6 class="fw-bolder mb-3"><i class="fas fa-bell text-warning"></i> Alertes opérationnelles</h6>
            <div class="row" id="alerts-list">

                {% if alertes['baisse_ca'] %}
                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-danger mb-0"><strong>Baisse importante du CA :</strong> {{alertes['baisse_ca']['variation']}}% vs la période précédente ({{alertes['baisse_ca']['ca_precedent'] | number_format}} → {{alertes['baisse_ca']['ca_actuel'] | number_format}} GNF)</div>
                </div>
                {% endif %}

                {% if alertes['baisse_utilisation'] %}
                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-danger mb-0"><strong>Baisse du taux d'utilisation du parc :</strong> {{alertes['baisse_utilisation']['variation_points']}} points vs la période précédente ({{alertes['baisse_utilisation']['taux_precedent']}}% → {{alertes['baisse_utilisation']['taux_actuel']}}%)</div>
                </div>
                {% endif %}

                {% if alertes['factures_echues']|length > 0 %}
                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-warning mb-0">
                        <strong>{{alertes['factures_echues']|length}} facture(s) échue(s) :</strong>
                        {% for f in alertes['factures_echues']|slice(0, 5) %}
                        <a href="{{ "factures/detail/#{f['facture_id']}" | url }}">{{f['reference_factures']}}</a>{% if not loop.last %}, {% endif %}
                        {% endfor %}
                        {% if alertes['factures_echues']|length > 5 %} …{% endif %}
                    </div>
                </div>
                {% endif %}

                {% if alertes['factures_fortement_en_retard']|length > 0 %}
                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-danger mb-0">
                        <strong>{{alertes['factures_fortement_en_retard']|length}} facture(s) fortement en retard (&gt;90j) :</strong>
                        {% for f in alertes['factures_fortement_en_retard']|slice(0, 5) %}
                        <a href="{{ "factures/detail/#{f['facture_id']}" | url }}">{{f['reference_factures']}}</a>{% if not loop.last %}, {% endif %}
                        {% endfor %}
                        {% if alertes['factures_fortement_en_retard']|length > 5 %} …{% endif %}
                    </div>
                </div>
                {% endif %}

                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-secondary mb-0">
                        <strong>Clients dépassant leur plafond :</strong> non disponible — nécessite l'ajout d'un plafond de crédit par client (aucune donnée existante).
                    </div>
                </div>

                {% if alertes['contrats_expirant']|length > 0 %}
                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-warning mb-0">
                        <strong>{{alertes['contrats_expirant']|length}} contrat(s) arrivant à expiration (15j) :</strong>
                        {% for c in alertes['contrats_expirant']|slice(0, 5) %}
                        <a href="{{ "commandes/detail/#{c['commande_id']}" | url }}">{{c['reference_commandes']}}</a>{% if not loop.last %}, {% endif %}
                        {% endfor %}
                    </div>
                </div>
                {% endif %}

                {% if alertes['engins_immobilises']|length > 0 %}
                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-danger mb-0">
                        <strong>{{alertes['engins_immobilises']|length}} engin(s) immobilisé(s) :</strong>
                        {% for e in alertes['engins_immobilises']|slice(0, 5) %}
                        <a href="{{ "engins/detail/#{e['engin_id']}" | url }}">{{e['numero_interne_engins']}}</a>{% if not loop.last %}, {% endif %}
                        {% endfor %}
                    </div>
                </div>
                {% endif %}

                {% if alertes['maintenance_a_prevoir']|length > 0 %}
                <div class="col-md-6 col-12 mb-2">
                    <div class="alert alert-warning mb-0">
                        <strong>Maintenance à prévoir pour {{alertes['maintenance_a_prevoir']|length}} engin(s) :</strong>
                        {% for m in alertes['maintenance_a_prevoir']|slice(0, 5) %}
                        <a href="{{ "engins/detail/#{m['engin']['engin_id']}" | url }}">{{m['engin']['numero_interne_engins']}}</a>{% if not loop.last %}, {% endif %}
                        {% endfor %}
                    </div>
                </div>
                {% endif %}

                {% if alertes['baisse_ca'] is null and alertes['baisse_utilisation'] is null and alertes['factures_echues']|length == 0 and alertes['factures_fortement_en_retard']|length == 0 and alertes['contrats_expirant']|length == 0 and alertes['engins_immobilises']|length == 0 and alertes['maintenance_a_prevoir']|length == 0 %}
                <div class="col-12">
                    <div class="alert alert-success mb-0">Aucune alerte active sur la période sélectionnée.</div>
                </div>
                {% endif %}
            </div>
        </div>
    </div>
</div>
