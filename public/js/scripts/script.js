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
      UGEST.facturation.adminManageUser();
      UGEST.facturation.addTaxe();
      UGEST.facturation.addEngin();
      UGEST.facturation.addChantier();
      UGEST.facturation.addMaintenance();
      UGEST.facturation.addCarburant();
      UGEST.facturation.addAvoir();
    },
    addAddresse: () => {
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
              location.href = "addresses";
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addArticle: () => {
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
              location.href = "articles";
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addClient: () => {
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
              location.href = "clients";
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addCommande: () => {
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
              location.href =
                form.data.type != "delete" && res.id
                  ? "commandes/detail/" + res.id
                  : "commandes";
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addFactureLigne: () => {
      if ($j("#action-facture-ligne").count() != 0) {
        Main.formControl("#action-facture-ligne", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_facture_ligne";
            form.data.type = $j(form.obj).data("type");
            form.data.id = $j(form.obj).data("id");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              let factureId = $j(form.obj).data("facture");
              location.href = factureId
                ? "factures/detail/" + factureId
                : "factureLignes";
            } else {
              Main.notify(res.msg, "error");
            }
          });
        });
      }
    },
    addFacture: () => {
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
              location.href =
                form.data.type != "delete" && res.id
                  ? "factures/detail/" + res.id
                  : "factures";
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addLivraison: () => {
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
              location.href = "livraisons";
            } else {
              Main.notify(res.msg, "error");
            }
            $j(form.submitBtn).removeClass("ks-is-loading");
          });
        });
      }
    },
    addPaiement: () => {
      if ($j("#action-paiements").count() != 0) {
        Main.formControl("#action-paiements", async (form) => {
          Main.confirm({ text: "" }, async () => {
            form.data.action = "add_paiement";
            form.data.type = $j(form.obj).data("type");
            form.data.id = $j(form.obj).data("id");
            let res = JSON.parse(
              await Main.post($j(form.obj).attr("action"), form.data)
            );
            if (res.success) {
              Main.notify("Traitement effectué avec succées");
              location.reload();
            } else {
              Main.notify(res.msg, "error");
            }
          });
        });
      }
    },
    addEngin: () => {
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
            location.href = "engins";
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
    addMaintenance: () => {
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
            location.reload();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    addCarburant: () => {
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
            location.reload();
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
    },
    addChantier: () => {
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
            location.href = "chantiers";
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
    addAvoir: () => {
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
              location.href = "factures/detail/" + form.data.id;
            } else {
              Main.notify(res.msg, "error");
            }
          });
        });
      }
    },
    addTransporteur: () => {
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
              location.href = "personnelle";
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
    adminManageUser: () => {
      if ($j("#action-admin-user").count() != 0) {
        Main.formControl("#action-admin-user", async (form) => {
          form.data.action = "admin_update_user";
          form.data.id = $j(form.obj).data("id");
          let res = JSON.parse(
            await Main.post($j(form.obj).attr("action"), form.data)
          );
          if (res.success) {
            Main.notify("Utilisateur mis à jour avec succées");
            location.href = "user/list";
          } else {
            Main.notify(res.msg, "error");
          }
          $j(form.submitBtn).removeClass("ks-is-loading");
        });
      }
      if ($j("#toggle-user-status").count() != 0) {
        $j("#toggle-user-status").click(async function () {
          let res = JSON.parse(
            await Main.post($j("#action-admin-user").attr("action"), {
              action: "admin_toggle_status",
              id: $j(this).data("id"),
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
