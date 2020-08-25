const initialState = {

  version: {
    1: { name: "Pure", prix: 54700, initialPicture: "./assets/configurateur/modele/selection/pure.png",
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

  2: { name: "Legende", prix: 58500, initialPicture: "./assets/configurateur/modele/selection/legende.png",
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
  1: { name: "Teinte spéciale Bleu Alpine", prix: 1800, picture: "./assets/configurateur/couleurs/selection/bleu.jpg"},
  2: { name: "Teinte métallisée Noir Profond", prix: 840, picture: "./assets/configurateur/couleurs/selection/noir.jpg" },
  3: { name: "Peinture opaque Blanc Glacier", prix: 0, picture: "./assets/configurateur/couleurs/selection/blanc.jpg" }
},

jantes: {
  1: { name: "Standard", prix: 0, picture: "./assets/configurateur/jantes/selection/jante-standard.jpg",
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
  2: { name: "Serac", prix: 1000, picture: "./assets/configurateur/jantes/selection/jante-serac.jpg",
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
  3: { name: "Legende", prix: 0, picture: "./assets/configurateur/jantes/selection/jante-legende.jpg",
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
  1: { name: "Sièges baquets en cuir noir et Dinamica", prix: 0 },
  2: { name: "Sièges Confort en cuir noir perforé", prix: 800 },
  3: { name: "Sièges Confort en cuir noir", prix: 0 },
  4: { name: "Sièges Confort en cuir brun", prix: 800 }
},

equipements: {
  design: {
    1: { name: "Pack héritage" , prix: 180 },
    2: { name: "Repose-pieds passager en aluminium" , prix: 96 }
  },
  media: {
    1: { name: "Alpine Télémétrics", prix: 204 },
    2: { name: "Système Audio Focal", prix: 600 },
    3: { name: "Système Audio Focal Premium", prix: 1200 },
    4: { name: "Système Audio standard", prix: 0 }
  },
  confort: {
    1: { name: "Retroviseur intérieur électrochrome", prix: 0 },
    2: { name: "Rétroviseurs ext. chauf. rabattables élec.", prix: 504 },
    3: { name: "Pack de rangement", prix: 504 },
    4: { name: "Régulateur / limiteur de vitesse", prix: 0 }
  },
  conduite: {
    1: { name: "Aide au stationnement AR", prix: 420 },
    2: { name: "Aide au stationnement AV et AR", prix: 750 },
    3: { name: "Aide au stationnement AV AR et caméra de recul", prix: 1200 },
    4: { name: "Echappement Sport actif", prix: 1500 }
  },
  securité: {
    1: { name: "Système de freinage Haute-Perf 320mm", prix: 1000 },
    2: { name: "Assistance au freinage d'urgence", prix: 0 },
    3: { name: "Airbags frontaux conducteur et passager", prix: 0 },
  },
  exterieur: {
    1: { name: "Etriers de frein couleur Bleu Alpine", prix: 384 },
    2: { name: "Logo Alpine sur les ailes avant", prix: 120 },
    3: { name: "Etriers de frein couleur Gris Anthracite", prix: 0 },
  },
  interieur: {
    1: { name: "Pédalier en aluminium", prix: 120 },
    2: { name: "Harmonie carbone mat", prix: 0 },
    3: { name: "Logo au centre du volant en Bleu Alpine", prix: 84 },
    4: { name: "Sièges chauffants", prix: 400 }
  }
},

accessoires: {
  transport: {
    1: { name: "Extincteur 1kg avec manomètre" , prix: 22 },
    2: { name: "Chaine à neige Premium Grip" , prix: 336 },
    3: { name: "Alarme" , prix: 543 },
    4: { name: "Protection Prise OBD" , prix: 99 },
    5: { name: "Kit de sécurité" , prix: 20 },
    6: { name: "Fixation extincteur" , prix: 72 }
  },
  multimedia: {
    1: { name: "Support caméra sport", prix: 89 },
    2: { name: "Support smartphone magnétique - Fixation sur tableau de bord", prix: 21 }
  },
  interieur: {
    1: { name: "Tapis de coffre", prix: 83 },
    2: { name: "Filet de rangement - Horizontal", prix: 59 }
  },
  garage: {
    1: { name: "Chargeur batterie", prix: 240 },
    2: { name: "Kit Outils Alpine", prix: 398 }
  },
  exterieur: {
    1: { name: "Cabochons Alpine - Métalisés", prix: 24 },
    2: { name: "Housse de protection Alpine", prix: 216 },
    3: { name: "Antivols pour jante - Noirs", prix: 51 },
  }
},
}

function rootReducer(state = initialState, action) {
}

export default rootReducer;
