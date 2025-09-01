import Main from "./main.js";
import Webcam from "./webcam.js";
import sdi from "./univprint.js";

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
