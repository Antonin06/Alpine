const initialState = {

  version: {
    1: { name: "Pure", prix: 54700, initialPicture: "./assets/configurateur/modele/selection/pure.png", id: 1,
    pictureVue: {
      serac: {
        blanc: {
          1: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac(1).jpg",
          2: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac(2).jpg",
          3: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac(3).jpg",
          4: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac(4).jpg"
        },
        bleu: {
          1: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac(1).jpg",
          2: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac(2).jpg",
          3: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac(3).jpg",
          4: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac(4).jpg"
        },
        noir: {
          1: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac(1).jpg",
          2: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac(2).jpg",
          3: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac(3).jpg",
          4: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac(4).jpg"
        }
      },
      standard: {
        blanc: {
          1: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard(1).jpg",
          2: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard(2).jpg",
          3: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard(3).jpg",
          4: "./assets/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard(4).jpg"
        },
        bleu: {
          1: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard(1).jpg",
          2: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard(2).jpg",
          3: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard(3).jpg",
          4: "./assets/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard(4).jpg"
        },
        noir: {
          1: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard(1).jpg",
          2: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard(2).jpg",
          3: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard(3).jpg",
          4: "./assets/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard(4).jpg"
        }
      },
    }
  },

  2: { name: "Legende", prix: 58500, initialPicture: "./assets/configurateur/modele/selection/legende.png", id: 2,
  pictureVue: {
    legende: {
      blanc: {
        1: "./assets/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-1.jpg",
        2: "./assets/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-2.jpg",
        3: "./assets/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-3.jpg",
        4: "./assets/configurateur/modele/legende/modele_legende-couleur_blanche-jante_legende-4.jpg"
      },
      bleu: {
        1: "./assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
        2: "./assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
        3: "./assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
        4: "./assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg"
      },
      noir: {
        1: "./assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
        2: "./assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
        3: "./assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
        4: "./assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg"
      }
    },
  }
},
},

couleurs: {
  1: {id: 1, name: "Teinte spéciale Bleu Alpine", prix: 1800, picture: "./assets/configurateur/couleurs/selection/bleu.jpg"},
  2: {id: 2, name: "Teinte métallisée Noir Profond", prix: 840, picture: "./assets/configurateur/couleurs/selection/noir.jpg" },
  3: {id: 3, name: "Peinture opaque Blanc Glacier", prix: 0, picture: "./assets/configurateur/couleurs/selection/blanc.jpg" }
},

jantes: {
  1: { model : 'Pure' ,name: "Standard", prix: 0, picture: "./assets/configurateur/jantes/selection/jante-standard.jpg",
  pictureVue: {
    couleur: {
      blanc: {
        1: "./assets/configurateur/jantes/vues/couleur-blanc_jante-standard(2).jpg",
      },
      bleu: {
        1: "./assets/configurateur/jantes/vues/couleur-bleu_jante-standard(3).jpg",
      },
      noir: {
        1: "./assets/configurateur/jantes/vues/couleur-noir_jante-standard(1).jpg",
      }
    },
  }
},
2: { model : 'Pure', name: "Serac", prix: 1000, picture: "./assets/configurateur/jantes/selection/jante-serac.jpg",
pictureVue: {
  couleur: {
    blanc: {
      2: "./assets/configurateur/jantes/vues/couleur-blanc_jante-serac(2).jpg",
    },
    bleu: {
      2: "./assets/configurateur/jantes/vues/couleur-bleu_jante-serac(3).jpg",
    },
    noir: {
      2: "./assets/configurateur/jantes/vues/couleur-noir_jante-serac(1).jpg",
    }
  },
}
},
3: { model : 'Legende', name: "Legende", prix: 0, picture: "./assets/configurateur/jantes/selection/jante-legende.jpg",
pictureVue: {
  couleur: {
    blanc: {
      3: "./assets/configurateur/jantes/vues/couleur-blanc_jante-legende(2).jpg"
    },
    bleu: {
      3: "./assets/configurateur/jantes/vues/couleur-bleu_jante-legende(3).jpg"
    },
    noir: {
      1: "./assets/configurateur/jantes/vues/couleur-noir_jante-legende(1).jpg"
    }
  },
}
}
},

sellerie: {
  1: { model : 'Pure', name: "Sièges baquets en cuir noir et Dinamica", prix: 0, picture: "./assets/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg" },
  2: { model : 'Pure', name: "Sièges Confort en cuir noir perforé", prix: 800, picture: "./assets/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg" },
  3: { model : 'Legende', name: "Sièges Confort en cuir noir", prix: 0, picture: "./assets/configurateur/interieurs/vues/cuir-noir-1.jpg" },
  4: { model : 'Legende', name: "Sièges Confort en cuir brun", prix: 800, picture: "./assets/configurateur/interieurs/vues/cuir-brun-1.jpg" },
},

equipements: {
  design: {
    1: { name: "Pack héritage" , prix: 180, picture: "./assets/configurateur/equipements/categories/design/pack-heritage.jpg"  },
    2: { name: "Repose-pieds passager en aluminium" , prix: 96, picture: "./assets/configurateur/equipements/categories/design/repose-pied-alu.jpg"  }
  },
  media: {
    1: { name: "Alpine Télémétrics", prix: 204, picture: "./assets/configurateur/equipements/categories/media-et-navigation/alpine-metrics.jpg" },
    2: { name: "Système Audio Focal", prix: 600, picture: "./assets/configurateur/equipements/categories/media-et-navigation/audio-focal.jpg" },
    3: { name: "Système Audio Focal Premium", prix: 1200, picture: "./assets/configurateur/equipements/categories/media-et-navigation/audio-premium.jpg" },
    4: { name: "Système Audio standard", prix: 0, picture: "./assets/configurateur/equipements/categories/media-et-navigation/audio-standard.jpg" }
  },
  confort: {
    1: { name: "Retroviseur intérieur électrochrome", prix: 0, picture: "./assets/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg" },
    2: { name: "Rétroviseurs ext. chauf. rabattables élec.", prix: 504, picture: "./assets/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg" },
    3: { name: "Pack de rangement", prix: 504, picture: "./assets/configurateur/equipements/categories/confort/pack-rangement.jpg" },
    4: { name: "Régulateur / limiteur de vitesse", prix: 0, picture: "./assets/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg" }
  },
  conduite: {
    1: { name: "Aide au stationnement AR", prix: 420, picture: "./assets/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg" },
    2: { name: "Aide au stationnement AV et AR", prix: 750, picture: "./assets/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg" },
    3: { name: "Aide au stationnement AV AR et caméra de recul", prix: 1200, picture: "./assets/configurateur/equipements/categories/conduite/camera-recul.jpg" },
    4: { name: "Echappement Sport actif", prix: 1500, picture: "./assets/configurateur/equipements/categories/conduite/echappement-sport.jpg" }
  },
  securité: {
    1: { name: "Système de freinage Haute-Perf 320mm", prix: 1000, picture: "./assets/configurateur/equipements/categories/securite/freinage-haute-perf.jpg" },
    2: { name: "Assistance au freinage d'urgence", prix: 0, picture: "./assets/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg" },
    3: { name: "Airbags frontaux conducteur et passager", prix: 0, picture: "./assets/configurateur/equipements/categories/securite/airbag.jpg" },
  },
  exterieur: {
    1: { name: "Etriers de frein couleur Bleu Alpine", prix: 384, picture: "./assets/configurateur/equipements/categories/personnalisation-exterieure/etrier-bleu.jpg" },
    2: { name: "Logo Alpine sur les ailes avant", prix: 120, picture: "./assets/configurateur/equipements/categories/personnalisation-exterieure/logo-alpine.jpg" },
    3: { name: "Etriers de frein couleur Gris Anthracite", prix: 0, picture: "./assets/configurateur/equipements/categories/personnalisation-exterieure/etrier-gris.jpg" },
  },
  interieur: {
    1: { name: "Pédalier en aluminium", prix: 120, picture: "./assets/configurateur/equipements/categories/personnalisation-interieure/pedal-alu.jpg" },
    2: { name: "Harmonie carbone mat", prix: 0, picture: "./assets/configurateur/equipements/categories/personnalisation-interieure/pack-carbone.jpg" },
    3: { name: "Logo au centre du volant en Bleu Alpine", prix: 84, picture: "./assets/configurateur/equipements/categories/personnalisation-interieure/logo-volant.jpg" },
    4: { name: "Sièges chauffants", prix: 400, picture: "./assets/configurateur/equipements/categories/personnalisation-interieure/siege-chauffant.jpg" }
  }
},

accessoires: {
  transport: {
    1: { name: "Extincteur 1kg avec manomètre" , prix: 22 , picture: "./assets/configurateur/accessoires/transport-et-protection/extincteur.jpg" },
    2: { name: "Chaine à neige Premium Grip" , prix: 336 , picture: "./assets/configurateur/accessoires/transport-et-protection/chaine-neige.jpg" },
    3: { name: "Alarme" , prix: 543 , picture: "./assets/configurateur/accessoires/transport-et-protection/alarme.jpg" },
    4: { name: "Protection Prise OBD" , prix: 99 , picture: "./assets/configurateur/accessoires/transport-et-protection/protection-obd.jpg" },
    5: { name: "Kit de sécurité" , prix: 20 , picture: "./assets/configurateur/accessoires/transport-et-protection/kit-securite.jpg" },
    6: { name: "Fixation extincteur" , prix: 72 , picture: "./assets/configurateur/accessoires/transport-et-protection/fixation-extincteur.jpg" }
  },
  multimedia: {
    1: { name: "Support caméra sport", prix: 89 , picture: "./assets/configurateur/accessoires/multimedia/support-camera.jpg" },
    2: { name: "Support smartphone magnétique - Fixation sur tableau de bord", prix: 21 , picture: "./assets/configurateur/accessoires/multimedia/support-smartphone.jpg"}
  },
  interieur: {
    1: { name: "Tapis de coffre", prix: 83 , picture: "./assets/configurateur/accessoires/interieur/tapis-coffre.jpg" },
    2: { name: "Filet de rangement - Horizontal", prix: 59 , picture: "./assets/configurateur/accessoires/interieur/filet-rangement.jpg" }
  },
  garage: {
    1: { name: "Chargeur batterie", prix: 240 , picture: "./assets/configurateur/accessoires/garage/chargeur-batterie.jpg" },
    2: { name: "Kit Outils Alpine", prix: 398 , picture: "./assets/configurateur/accessoires/garage/kit-outils.jpg" }
  },
  exterieur: {
    1: { name: "Cabochons Alpine - Métalisés", prix: 24 , picture: "./assets/configurateur/accessoires/exterieur/cabochons-metal.jpg" },
    2: { name: "Housse de protection Alpine", prix: 216 , picture: "./assets/configurateur/accessoires/exterieur/housse.jpg" },
    3: { name: "Antivols pour jante - Noirs", prix: 51 , picture: "./assets/configurateur/accessoires/exterieur/antivol-jantes.jpg" },
  }
},

modele: "",
selectSellerie: "",
price: 0,
}

function rootReducer(state = initialState, action) {

  const id = action.payload

  switch (action.type) {

    case "MODELE":
    return { ...state,
       modele: action.payload,
       selectSellerie: action.payload,
       price: state.price + action.payload.prix
   }

   case "SELECTED_SCELLERIE":
   return { ...state,

  }

      default:
      return state;
    }
  }
  export default rootReducer;
