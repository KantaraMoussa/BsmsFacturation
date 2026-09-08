import Main from "./main.js";

const STATUT_ORDER = ['disponible', 'loué', 'en chantier', 'en maintenance', 'immobilisé', 'hors service', 'vendu', 'archivé'];
const TRANCHES = ['non échue', '0-30 jours', '31-60 jours', '61-90 jours', '91-120 jours', 'plus de 120 jours'];

function fmt(n) {
    n = Math.round(Number(n) || 0);
    var neg = n < 0;
    n = Math.abs(n);
    var s = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (neg ? '-' : '') + s;
}

function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
}

function unionMonths(a, b) {
    var set = {};
    a.forEach(function (r) { set[r.mois] = true; });
    b.forEach(function (r) { set[r.mois] = true; });
    return Object.keys(set).sort();
}

function seriesFor(months, rows, key) {
    var map = {};
    rows.forEach(function (r) { map[r.mois] = Number(r[key]) || 0; });
    return months.map(function (m) { return map[m] || 0; });
}

var charts = {};

function chart(id, options) {
    if (charts[id]) {
        charts[id].destroy();
    }
    var el = document.querySelector('#' + id);
    if (!el) {
        return;
    }
    charts[id] = new ApexCharts(el, options);
    charts[id].render();
}

function renderCharts(data) {
    var months = unionMonths(data.evolution.facturation, data.evolution.encaissement);

    chart('chart-evolution-ca', {
        chart: { type: 'line', height: 300, toolbar: { show: false } },
        stroke: { curve: 'smooth', width: 2 },
        series: [
            { name: 'CA HT', data: seriesFor(months, data.evolution.facturation, 'ca_ht') },
            { name: 'CA TTC', data: seriesFor(months, data.evolution.facturation, 'ca_ttc') },
        ],
        xaxis: { categories: months },
        colors: ['#70C4CF', '#3D5EE1'],
        dataLabels: { enabled: false },
    });

    chart('chart-facturation-encaissement', {
        chart: { type: 'bar', height: 300, toolbar: { show: false } },
        series: [
            { name: 'Facturé (TTC)', data: seriesFor(months, data.evolution.facturation, 'ca_ttc') },
            { name: 'Encaissé', data: seriesFor(months, data.evolution.encaissement, 'encaisse') },
        ],
        xaxis: { categories: months },
        colors: ['#3D5EE1', '#2ED8B6'],
        dataLabels: { enabled: false },
        plotOptions: { bar: { columnWidth: '55%' } },
    });

    chart('chart-evolution-creances', {
        chart: { type: 'area', height: 300, toolbar: { show: false } },
        stroke: { curve: 'smooth', width: 2 },
        series: [{ name: 'Créances', data: data.creances_evolution.map(function (r) { return r.creances; }) }],
        xaxis: { categories: data.creances_evolution.map(function (r) { return r.mois; }) },
        colors: ['#FF6B6B'],
        dataLabels: { enabled: false },
    });

    chart('chart-ageing', {
        chart: { type: 'bar', height: 300, toolbar: { show: false } },
        series: [{ name: 'Créances', data: TRANCHES.map(function (t) { return data.ageing[t] || 0; }) }],
        xaxis: { categories: TRANCHES },
        colors: ['#FF9F43'],
        dataLabels: { enabled: false },
    });

    chart('chart-ca-client', {
        chart: { type: 'bar', height: 300, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: true } },
        series: [{ name: 'CA', data: data.ca_par_client.map(function (r) { return r.ca; }) }],
        xaxis: { categories: data.ca_par_client.map(function (r) { return r.label; }) },
        colors: ['#3D5EE1'],
        dataLabels: { enabled: false },
    });

    chart('chart-ca-engin', {
        chart: { type: 'bar', height: 300, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: true } },
        series: [{ name: 'CA', data: data.ca_par_engin.map(function (r) { return r.ca; }) }],
        xaxis: { categories: data.ca_par_engin.map(function (r) { return r.label; }) },
        colors: ['#70C4CF'],
        dataLabels: { enabled: false },
    });

    chart('chart-ca-chantier', {
        chart: { type: 'bar', height: 300, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: true } },
        series: [{ name: 'CA', data: data.ca_par_chantier.map(function (r) { return r.ca; }) }],
        xaxis: { categories: data.ca_par_chantier.map(function (r) { return r.label; }) },
        colors: ['#2ED8B6'],
        dataLabels: { enabled: false },
    });

    chart('chart-utilisation-parc', {
        chart: { type: 'radialBar', height: 300 },
        series: [data.parc.taux_utilisation],
        labels: ["Taux d'utilisation"],
        colors: ['#3D5EE1'],
    });

    var repartition = STATUT_ORDER.filter(function (s) {
        return data.repartition_engins.some(function (r) { return r.statut_engins === s; });
    });
    chart('chart-repartition-engins', {
        chart: { type: 'donut', height: 300 },
        series: repartition.map(function (s) {
            var row = data.repartition_engins.find(function (r) { return r.statut_engins === s; });
            return row ? Number(row.nb) : 0;
        }),
        labels: repartition,
    });

    var topRentabilite = data.rentabilite.slice(0, 10);
    chart('chart-rentabilite', {
        chart: { type: 'bar', height: 300, toolbar: { show: false } },
        series: [{ name: 'Marge estimée', data: topRentabilite.map(function (r) { return r.marge; }) }],
        xaxis: { categories: topRentabilite.map(function (r) { return r.engin.numero_interne_engins; }) },
        colors: ['#2ED8B6'],
        dataLabels: { enabled: false },
    });
}

function setText(id, text) {
    var el = document.getElementById(id);
    if (el) {
        el.textContent = text;
    }
}

function renderKpis(data) {
    var f = data.financier, p = data.parc, c = data.commercial;
    setText('v-ca-ht', fmt(f.ca_ht) + ' GNF');
    setText('v-taxes', fmt(f.taxes) + ' GNF');
    setText('v-ca-ttc', fmt(f.ca_ttc) + ' GNF');
    setText('v-encaisse', fmt(f.encaisse) + ' GNF');
    setText('v-creances', fmt(f.creances) + ' GNF');
    setText('v-factures-impayees', f.factures_impayees);
    setText('v-factures-retard', f.factures_en_retard);
    setText('v-taux-recouvrement', f.taux_recouvrement + '%');
    setText('v-panier-moyen', fmt(f.panier_moyen) + ' GNF');

    setText('v-parc-total', p.total);
    setText('v-parc-dispo', p.disponibles);
    setText('v-parc-loue', p.loues);
    setText('v-parc-maintenance', p.en_maintenance);
    setText('v-parc-immobilise', p.immobilises);
    setText('v-parc-taux', p.taux_utilisation + '%');
    setText('v-parc-heures', fmt(p.heures_facturees) + ' h');
    setText('v-parc-jours', fmt(p.jours_factures) + ' j');

    setText('v-clients-actifs', c.clients_actifs);
    setText('v-contrats-actifs', c.contrats_actifs);
    setText('v-contrats-expirant', c.contrats_expirant);
    setText('v-prestations', c.prestations_realisees);
}

function buildDetailUrl(filters) {
    var params = new URLSearchParams({
        date_from: filters.date_from || '',
        date_to: filters.date_to || '',
        client: filters.client || '',
        chantier: filters.chantier || '',
        engin: filters.engin || '',
        categorie: filters.categorie || '',
        contrat: filters.contrat || '',
        prestation: filters.prestation || '',
        statut: filters.statut || '',
    });
    return window.__DIRECTION_URLS__.detail + '?' + params.toString();
}

function updateDrilldownLinks(filters) {
    var base = buildDetailUrl(filters);
    document.querySelectorAll('.kpi-card').forEach(function (card) {
        var a = card.querySelector('a.kpi-link');
        if (!a) {
            return;
        }
        var label = card.getAttribute('data-label') || '';
        var extra = a.getAttribute('data-extra') || '';
        a.setAttribute('href', base + '&label=' + encodeURIComponent(label) + extra);
    });
}

function renderAlerts(alertes) {
    var list = document.getElementById('alerts-list');
    if (!list) {
        return;
    }
    var html = '';

    if (alertes.baisse_ca) {
        html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-danger mb-0"><strong>Baisse importante du CA :</strong> ' +
            alertes.baisse_ca.variation + '% vs la période précédente (' + fmt(alertes.baisse_ca.ca_precedent) + ' → ' + fmt(alertes.baisse_ca.ca_actuel) + ' GNF)</div></div>';
    }
    if (alertes.baisse_utilisation) {
        html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-danger mb-0"><strong>Baisse du taux d\'utilisation du parc :</strong> ' +
            alertes.baisse_utilisation.variation_points + ' points vs la période précédente (' + alertes.baisse_utilisation.taux_precedent + '% → ' + alertes.baisse_utilisation.taux_actuel + '%)</div></div>';
    }
    if (alertes.factures_echues.length > 0) {
        html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-warning mb-0"><strong>' + alertes.factures_echues.length + ' facture(s) échue(s) :</strong> ' +
            alertes.factures_echues.slice(0, 5).map(function (f) {
                return '<a href="' + window.__DIRECTION_URLS__.base + 'factures/detail/' + f.facture_id + '">' + esc(f.reference_factures) + '</a>';
            }).join(', ') + (alertes.factures_echues.length > 5 ? ' …' : '') + '</div></div>';
    }
    if (alertes.factures_fortement_en_retard.length > 0) {
        html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-danger mb-0"><strong>' + alertes.factures_fortement_en_retard.length + ' facture(s) fortement en retard (&gt;90j) :</strong> ' +
            alertes.factures_fortement_en_retard.slice(0, 5).map(function (f) {
                return '<a href="' + window.__DIRECTION_URLS__.base + 'factures/detail/' + f.facture_id + '">' + esc(f.reference_factures) + '</a>';
            }).join(', ') + (alertes.factures_fortement_en_retard.length > 5 ? ' …' : '') + '</div></div>';
    }
    html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-secondary mb-0"><strong>Clients dépassant leur plafond :</strong> non disponible — nécessite l\'ajout d\'un plafond de crédit par client (aucune donnée existante).</div></div>';

    if (alertes.contrats_expirant.length > 0) {
        html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-warning mb-0"><strong>' + alertes.contrats_expirant.length + ' contrat(s) arrivant à expiration (15j) :</strong> ' +
            alertes.contrats_expirant.slice(0, 5).map(function (c) {
                return '<a href="' + window.__DIRECTION_URLS__.base + 'commandes/detail/' + c.commande_id + '">' + esc(c.reference_commandes) + '</a>';
            }).join(', ') + '</div></div>';
    }
    if (alertes.engins_immobilises.length > 0) {
        html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-danger mb-0"><strong>' + alertes.engins_immobilises.length + ' engin(s) immobilisé(s) :</strong> ' +
            alertes.engins_immobilises.slice(0, 5).map(function (e) {
                return '<a href="' + window.__DIRECTION_URLS__.base + 'engins/detail/' + e.engin_id + '">' + esc(e.numero_interne_engins) + '</a>';
            }).join(', ') + '</div></div>';
    }
    if (alertes.maintenance_a_prevoir.length > 0) {
        html += '<div class="col-md-6 col-12 mb-2"><div class="alert alert-warning mb-0"><strong>Maintenance à prévoir pour ' + alertes.maintenance_a_prevoir.length + ' engin(s) :</strong> ' +
            alertes.maintenance_a_prevoir.slice(0, 5).map(function (m) {
                return '<a href="' + window.__DIRECTION_URLS__.base + 'engins/detail/' + m.engin.engin_id + '">' + esc(m.engin.numero_interne_engins) + '</a>';
            }).join(', ') + '</div></div>';
    }

    var nothing = !alertes.baisse_ca && !alertes.baisse_utilisation && alertes.factures_echues.length === 0 &&
        alertes.factures_fortement_en_retard.length === 0 && alertes.contrats_expirant.length === 0 &&
        alertes.engins_immobilises.length === 0 && alertes.maintenance_a_prevoir.length === 0;
    if (nothing) {
        html += '<div class="col-12"><div class="alert alert-success mb-0">Aucune alerte active sur la période sélectionnée.</div></div>';
    }

    list.innerHTML = html;
}

function reinitDataTable(tableId) {
    var $t = $j('#' + tableId);
    if ($j.fn.DataTable && $j.fn.DataTable.isDataTable('#' + tableId)) {
        $t.DataTable().destroy();
    }
    $t.DataTable({ bFilter: false });
}

function renderTopDebiteurs(rows, filters) {
    var tbody = document.getElementById('tbody-top-debiteurs');
    if (!tbody) {
        return;
    }
    tbody.innerHTML = rows.map(function (d) {
        var url = buildDetailUrl(filters) + '&only_outstanding=1&client=' + encodeURIComponent(d.client_id) + '&label=' + encodeURIComponent('Créances - ' + d.noms_clients);
        return '<tr><td><a href="' + url + '">' + esc(d.noms_clients) + '</a></td>' +
            '<td class="text-danger fw-bolder">' + fmt(d.total_creance) + ' GNF</td>' +
            '<td>' + d.nb_factures + '</td></tr>';
    }).join('');
    reinitDataTable('table-top-debiteurs');
}

function renderAgeing(ageing, filters) {
    var tbody = document.getElementById('tbody-ageing');
    if (!tbody) {
        return;
    }
    tbody.innerHTML = TRANCHES.map(function (t) {
        var montant = ageing[t] || 0;
        var url = buildDetailUrl(filters) + '&tranche=' + encodeURIComponent(t) + '&label=' + encodeURIComponent('Créances - ' + t);
        return '<tr><td><a href="' + url + '">' + esc(t) + '</a></td>' +
            '<td class="' + (montant > 0 ? 'text-danger fw-bolder' : '') + '">' + fmt(montant) + ' GNF</td></tr>';
    }).join('');
}

function renderRentabilite(rows) {
    var tbody = document.getElementById('tbody-rentabilite');
    if (!tbody) {
        return;
    }
    tbody.innerHTML = rows.map(function (r) {
        return '<tr>' +
            '<td><a href="' + window.__DIRECTION_URLS__.base + 'engins/detail/' + r.engin.engin_id + '" class="fw-bolder text-primary">' + esc(r.engin.numero_interne_engins) + '</a></td>' +
            '<td>' + fmt(r.chiffre_affaires) + ' GNF</td>' +
            '<td>' + fmt(r.cout_maintenance) + ' GNF</td>' +
            '<td>' + fmt(r.cout_carburant) + ' GNF</td>' +
            '<td class="' + (r.marge >= 0 ? 'text-success' : 'text-danger') + ' fw-bolder">' + fmt(r.marge) + ' GNF</td>' +
            '<td>' + (r.marge_par_jour !== null ? fmt(r.marge_par_jour) + ' GNF' : '-') + '</td>' +
            '<td>' + (r.marge_par_heure !== null ? fmt(r.marge_par_heure) + ' GNF' : '-') + '</td>' +
            '<td>' + r.taux_utilisation + '%</td></tr>';
    }).join('');
    reinitDataTable('table-rentabilite');
}

function renderAll(data) {
    renderKpis(data);
    renderAlerts(data.alertes);
    renderCharts(data);
    renderTopDebiteurs(data.top_debiteurs, data.filters);
    renderAgeing(data.ageing, data.filters);
    renderRentabilite(data.rentabilite);
    updateDrilldownLinks(data.filters);

    var now = new Date();
    setText('last-refresh', 'Actualisé à ' + now.toLocaleTimeString('fr-FR'));
}

function currentFilters() {
    return {
        period: document.getElementById('f-period').value,
        date_from: document.getElementById('f-date-from').value,
        date_to: document.getElementById('f-date-to').value,
        client: document.getElementById('f-client').value,
        chantier: document.getElementById('f-chantier').value,
        engin: document.getElementById('f-engin').value,
        categorie: document.getElementById('f-categorie').value,
        contrat: document.getElementById('f-contrat').value,
        prestation: document.getElementById('f-prestation').value,
        statut: document.getElementById('f-statut').value,
    };
}

async function refresh() {
    var res = await Main.post(window.__DIRECTION_URLS__.data, currentFilters());
    var data = JSON.parse(res);
    renderAll(data);
}

function init() {
    if (!document.getElementById('direction-dashboard')) {
        return;
    }

    if (window.__DIRECTION_INITIAL__) {
        renderCharts(window.__DIRECTION_INITIAL__);
        updateDrilldownLinks(window.__DIRECTION_INITIAL__.filters);
        setText('last-refresh', 'Chargé à ' + new Date().toLocaleTimeString('fr-FR'));
    }

    var periodSelect = document.getElementById('f-period');
    periodSelect.addEventListener('change', function () {
        var isCustom = periodSelect.value === 'custom';
        document.querySelectorAll('.custom-period-field').forEach(function (el) {
            el.hidden = !isCustom;
        });
    });

    document.getElementById('f-apply').addEventListener('click', refresh);
    document.getElementById('f-reset').addEventListener('click', function () {
        document.getElementById('direction-filters').reset();
        document.querySelectorAll('.custom-period-field').forEach(function (el) { el.hidden = true; });
        refresh();
    });
}

init();
