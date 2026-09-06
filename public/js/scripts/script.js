import Main from "./main.js";

window.UGEST = {
  _sdi: null,
  facturation: {
    init: () => {
      UGEST.facturation.addAddresse();
      UGEST.facturation.addArticle();
      UGEST.facturation.addClient();
      UGEST.facturation.addCommande();
      UGEST.facturation.addFacture();
      UGEST.facturation.addFactureLigne();
      UGEST.facturation.addLivraison();
      UGEST.facturation.addPaiement();
      UGEST.facturation.addTransporteur();
      UGEST.facturation.login();
      UGEST.facturation.printFees();
      UGEST.facturation.editProfile();
      UGEST.facturation.addUser();
      UGEST.facturation.changePassword();
      UGEST.facturation.addTaxe();
      UGEST.facturation.addEngin();
      UGEST.facturation.addChantier();
      UGEST.facturation.addMaintenance();
      UGEST.facturation.addCarburant();
    },
    addAddresse: (modal) => {
      if ($j("#action-addresse").count() != 0) {
        Main.formControl("#action-addresse", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_addresse";
            form.data.type = $j(form.obj).data("type");
            form.data.type != "add"
              ? (form.data.id = $j(form.obj).data("id"))
              : (form.data.id = null);
            $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addArticle: (modal) => {
      if ($j("#action-article").count() != 0) {
        Main.formControl("#action-article", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_article";
            form.data.type = $j(form.obj).data("type");
            form.data.type != "add"
              ? (form.data.id = $j(form.obj).data("id"))
              : (form.data.id = null);
            $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addClient: (modal) => {
      if ($j("#action-client").count() != 0) {
        Main.formControl("#action-client", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_client";
            form.data.type = $j(form.obj).data("type");
            form.data.type != "add"
              ? (form.data.id = $j(form.obj).data("id"))
              : (form.data.id = null);
            $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addCommande: (modal) => {
      if ($j("#action-commande").count() != 0) {
        Main.formControl("#action-commande", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_commande";
            form.data.type = $j(form.obj).data("type");
            form.data.type != "add"
              ? (form.data.id = $j(form.obj).data("id"))
              : (form.data.id = null);
            $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addFactureLigne: (modal) => {
      if ($j("#action-facture-ligne").count() != 0) {
        Main.formControl("#action-facture-ligne", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_facture_ligne";
            form.data.type = $j(form.obj).data("type");
            form.data.id = $j(form.obj).data("id");
            // $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            // $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addFacture: (modal) => {
      if ($j("#action-facture").count() != 0) {
        Main.formControl("#action-facture", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_facture";
            form.data.type = $j(form.obj).data("type");
            form.data.type != "add"
              ? (form.data.id = $j(form.obj).data("id"))
              : (form.data.id = null);
            $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addLivraison: (modal) => {
      if ($j("#action-livraison").count() != 0) {
        Main.formControl("#action-livraison", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_livraison";
            form.data.type = $j(form.obj).data("type");
            form.data.type != "add"
              ? (form.data.id = $j(form.obj).data("id"))
              : (form.data.id = null);
            $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addPaiement: (modal) => {
      if ($j("#action-paiements").count() != 0) {
        Main.formControl("#action-paiements", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_paiement";
            form.data.type = $j(form.obj).data("type");
            // form.data.type != "add"
            //? (form.data.id = $j(form.obj).data("id"))
            //  : (form.data.id = null);
            form.data.id = $j(form.obj).data("id");
            //  $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            //  $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addEngin: (modal) => {
      if ($j("#action-engin").count() != 0) {
        Main.formControl("#action-engin", async (form) => {
          form.data.action = "add_engin";
          form.data.type = $j(form.obj).data("type");
          form.data.type != "add"
            ? (form.data.id = $j(form.obj).data("id"))
            : (form.data.id = null);
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Traitement effectué avec succées");
            if (modal) modal.hide();
            else location.reload();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
      if ($j("#action-engin-statut").count() != 0) {
        $j("#action-engin-statut").submit(async function (e) {
          e.preventDefault();
          let res = JSON.parse(
            await Main.post($j(this).attr("action"), {
              action: "add_engin",
              type: "changer-statut",
              id: $j(this).data("id"),
              statut: $j(this).find("#statut").val(),
            })
          );
          if (res.success) {
            Main.notify("Statut mis à jour");
            location.reload();
          } else {
            Main.notify(res.msg, "error");
          }
        });
      }
    },
    addMaintenance: (modal) => {
      if ($j("#action-maintenance").count() != 0) {
        Main.formControl("#action-maintenance", async (form) => {
          form.data.action = "add_maintenance";
          form.data.type = "add";
          form.data.engin = $j(form.obj).data("id");
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Maintenance enregistrée");
            if (modal) modal.hide();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    addCarburant: (modal) => {
      if ($j("#action-carburant").count() != 0) {
        Main.formControl("#action-carburant", async (form) => {
          form.data.action = "add_carburant";
          form.data.type = "add";
          form.data.engin = $j(form.obj).data("id");
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Plein enregistré");
            if (modal) modal.hide();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    addChantier: (modal) => {
      if ($j("#action-chantier").count() != 0) {
        Main.formControl("#action-chantier", async (form) => {
          form.data.action = "add_chantier";
          form.data.type = $j(form.obj).data("type");
          form.data.type != "add"
            ? (form.data.id = $j(form.obj).data("id"))
            : (form.data.id = null);
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Traitement effectué avec succées");
            if (modal) modal.hide();
            else location.reload();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    addTaxe: () => {
      if ($j("#action-taxe").count() != 0) {
        Main.formControl("#action-taxe", async (form) => {
          form.data.action = "add_taxe";
          form.data.type = "add";
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Taxe ajoutée avec succées");
            location.reload();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
      $j(".toggle-taxe-btn").click(async function () {
        let id = $j(this).data("id");
        Main.confirm({ text: "" }, async () => {
          let res = JSON.parse(
            await Main.post(
              $j("#action-taxe").attr("action"),
              { action: "add_taxe", type: "toggle", id: id }
            )
          );
          if (res.success) {
            Main.notify("Statut de la taxe mis à jour");
            location.reload();
          } else {
            Main.notify(res.msg, "error");
          }
        });
      });
    },
    addAvoir: (modal) => {
      if ($j("#action-avoir").count() != 0) {
        Main.formControl("#action-avoir", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_avoir";
            form.data.id = $j(form.obj).data("id");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Avoir émis avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
          });
        });
      }
    },
    addTransporteur: (modal) => {
      if ($j("#action-transporteur").count() != 0) {
        Main.formControl("#action-transporteur", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_transporteur";
            form.data.type = $j(form.obj).data("type");
            form.data.type != "add"
              ? (form.data.id = $j(form.obj).data("id"))
              : (form.data.id = null);
            $j(form.submitBtn).addClass("ks-is-loading");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              modal.hide();
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    login: () => {
      if ($j("#loginUser").count() != 0) {
        Main.formControl("#loginUser", async (form) => {
          form.data.action = "login";
          //   $j(form.submitBtn).addClass("ks-is-loading");
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );

          if (res.success === true) {
            if (res.is_maintainance) location.href = "settings";
            else {
              location.href = "dashboard";
            }
          } else if (res.success == "blocked") {
            Main.notify("Votre compte à été suspendus ", "error");
          } else {
            Main.notify("Nom Utilisateur ou Mot de passe Incorrect", "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    editProfile: () => {
      if ($j("#edit-profile").count() != 0) {
        Main.formControl("#edit-profile", async (form) => {
          form.data.action = "edit-profile";
          //   $j(form.submitBtn).addClass("ks-is-loading");
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Traitement effectué avec succées");
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    addUser: () => {
      if ($j("#add-user").count() != 0) {
        Main.formControl("#add-user", async (form) => {
          form.data.action = "add_user";
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Utilisateur créé avec succées");
            location.href = "user/list";
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    changePassword: () => {
      if ($j("#Change-password").count() != 0) {
        Main.formControl("#Change-password", async (form) => {
          form.data.action = "change_Password";
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Mot de passe modifié avec succées");
            $j(form.obj)[0].reset();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    printFees: () => {
      if ($j("#pritFacture").count() != 0) {
        $j("#pritFacture").click(async function (e) {
          $j.preventDefault(e);
          $j(".icon", this).addClass("fa-spin");
          let res = JSON.parse(
            await Main.get(baseUrl + "factures/print/" + facture.facuteId)
          );
          if (res.success) {
            printJS({ printable: res.base64, type: "pdf", base64: true });
            $j(".icon", this).removeClass("fa-spin");
          } else {
            Main.notify(res.msg, "error");
            $j(".icon", this).removeClass("fa-spin");
          }
        });
      }
    },
  },
};
$j(window).load(() => {
  UGEST.facturation.init();
});

export default UGEST;
