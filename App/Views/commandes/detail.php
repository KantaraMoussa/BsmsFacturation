   <div class="modal-body">
       <div class="row justify-content-center">
           <div class="col-lg-12">
               <div class="card invoice-info-card">
                   <div class="card-body pb-0">
                       <div class="invoice-item invoice-item-one">
                           <div class="row">
                               <div class="col-md-6">
                                   <div class="invoice-logo">
                                       <img src="{{base_url()}}assets/img/logo-bsms/logo.png" alt="logo">
                                   </div>
                               </div>
                               <div class="col-md-6">
                                   <div class="invoice-info">
                                       <div class="invoice-head">
                                           <h2 class="text-warning">Commande</h2>
                                           <p>Réference : {{commande['reference_commandes']}}</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="invoice-item">
                           <div class="row">
                               <div class="col-lg-6 col-md-12">
                                   <div class="invoice-info">
                                       <strong class="customer-text">Emis par : </strong>
                                       <h6 class="invoice-name">{{entreprise['name']}}</h6>
                                       <p class="invoice-details invoice-details-two">
                                           {{entreprise['telephone']}} <br>
                                           <a href="mailto:{{entreprise['email']}}">{{entreprise['email']}}</a><br>
                                           {{entreprise['BP']}} , {{entreprise['ville']}}
                                       </p>
                                   </div>
                               </div>
                               <div class="col-lg-6 col-md-12">
                                   <div class="invoice-info">
                                       <strong class="customer-text-one">Facturé à</strong>
                                       <h6 class="invoice-name">{{commande['noms_clients']}}</h6>
                                       <p class="invoice-details invoice-details-two">
                                           {{commande['telephone_clients']}} /
                                           <a href="mailto: {{commande['email_clients']}} "> {{commande['email_clients']}} </a><br>
                                           {{commande['rue_addresses']}} , <br>
                                           BP {{commande['code_postal_addresses']}} , {{commande['ville_addresses']}} - {{commande['pays_addresses']}}
                                       </p>
                                   </div>
                               </div>

                           </div>
                       </div>
                       <div class="invoice-item invoice-table-wrap">
                           <div class="row">
                               <h5 class="text-dark">Listes des factures Emises : </h5>
                               <div class="col-md-12">
                                   <div class="table-responsive">
                                       <table class="table table-center mb-0 table-bordered">
                                           <thead>
                                               <tr>
                                                   <th>N°</th>
                                                   <th>Libelle</th>
                                                   <th>Etat</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               {{layout.LayoutListFactureParCommande(factures)}}
                                           </tbody>
                                       </table>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <hr>
                       <div class="row align-items-center justify-content-center">
                           <div class="col-lg-2 col-md-2">

                           </div>
                           <div class="col-lg-12 col-md-12">
                               <div class="invoice-total-card">
                                   <div class="invoice-total-box">
                                       <div class="invoice-total-inner">
                                           <p>Montant Payé <span>{{commande['mpc'] | number_format }} GNF</span></p>
                                           <p>Reste <span>{{commande['reste'] | number_format }} GNF</span></p>
                                           <p> % <span>{{commande['taux']}}</span></p>
                                       </div>
                                       <div class="invoice-total-footer">
                                           <h4>Montant total commande <span>{{commande['mttc'] | number_format }} GNF</span></h4>
                                          
                                       </div>
                                       
                                   </div>
                                    <h4 class="customer-text text-danger text-center">{{commande['ChiffreEnLettre'] }}</h4>
                               </div>
                           </div>
                       </div>
                       <div class="card d-none">
                           <div class="card-header bg-dark">
                               <h3 class="card-title text-warning">Ajouté une facture à la commande</h3>
                           </div>
                           <div class="card-body">
                               <form action="{{ 'factures/crud' | url }}" class="pt-2" id="action-facture" data-type="add">

                                   <div class="row">
                                       <div class="form-group col-md-12 mb-3">
                                           <label class="form-label">Commande </label>
                                           <select class="form-select" name="commande" id="commande">
                                               <option value="{{commande['commande_id']}}">{{commande['noms_clients']}} - <span class="text-primary">{{commande['reference_commandes']}}</span> </option>
                                           </select>
                                       </div>
                                       <div class="form-group col-md-6 mb-3">
                                           <label class="form-label" for="dateEmission">Date émission</label>
                                           <input type="date" class="form-control" name="dateEmission" id="dateEmission">
                                       </div>
                                       <div class="form-group col-md-6 mb-3">
                                           <label class="form-label" for="dateEcheance">Date échéance</label>
                                           <input type="date" class="form-control" name="dateEcheance" id="dateEcheance">
                                       </div>
                                       <div class="form-group col-md-12 mb-3">
                                           <label class="form-label" for="libelle">Libelle de la facture (Bref description de la nature de cette facture)</label>
                                           <input type="text" class="form-control" name="libelle" id="libelle" placeholder="en 140 mots">
                                       </div>

                                       <div class="form-group col-md-6 mb-3">
                                           <button type="submit" class="btn btn-info">Enregistrer la facture</button>
                                       </div>
                                   </div>

                               </form>
                           </div>
                       </div>

                   </div>
               </div>
           </div>
       </div>
   </div>