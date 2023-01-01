<template>
    <v-container id="pouleA-match" fluid tag="section">
    <v-row>
    <v-col>
        <v-card class="mx-auto" >
            <v-card dark flat >
                <v-card-title class="pa-2 primary lighten-3">
                    <h3 class="font-weight-light text-center black grow">
                        Ligne de temps - Matchs Salle 1 - Guy La Croix
                    </h3>
                </v-card-title>
            </v-card>
            <v-card-text class="pa-1 ma-0">
                <v-timeline align-top dense >

                    <v-timeline-item v-for="item in getMatchsGLC" :color="item.colorItem" v-bind:key="item.id">
                        <v-card max-width="400" class="pa-0 ma-0">
                            <v-card-title>
                                <strong>{{ item.heureDebut }} - {{ item.salle }}</strong>
                            </v-card-title>

                            <v-card-text class="pa-0 ma-0"  align="center">
                                <h6>N° {{ item.id }}, Catégorie : {{ item.categorie }}</h6>
                                <v-container class="pa-0 ma-0">
                                    <v-row >
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                        <v-col class="pa-4 ma-0">
                                            <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                                        </v-col>
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
    </v-col>
    <v-col>
        <v-card class="mx-auto" >
            <v-card dark flat >
                <v-card-title class="pa-2 primary lighten-3">
                    <h3 class="font-weight-light text-center black grow">
                        Ligne de temps - Matchs Salle 2 - CC Val Du Loir
                    </h3>
                </v-card-title>
            </v-card>
            <v-card-text class="pa-1 ma-0">
                <v-timeline align-top dense >

                    <v-timeline-item v-for="item in getMatchsCCVL" :color="item.colorItem" v-bind:key="item.id">
                        <v-card max-width="400" class="pa-0 ma-0">
                            <v-card-title>
                                <strong>{{ item.heureDebut }} - {{ item.salle }}</strong>
                            </v-card-title>

                            <v-card-text class="pa-0 ma-0"  align="center">
                                <h6>N° {{ item.id }}, Catégorie : {{ item.categorie }}</h6>
                                <v-container class="pa-0 ma-0">
                                    <v-row >
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                        <v-col class="pa-4 ma-0">
                                            <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                                        </v-col>
                                        <v-col class="pa-1 ma-0">
                                            <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                                            <v-avatar>
                                                <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
    </v-col>
    </v-row>
    </v-container>
</template>



<script>
import axios from 'axios'

export default {
    data() {
      return {
        url_finales_consolante: process.env.BASE_URL + "datas/finales_consolante.json",
        url_finales_general: process.env.BASE_URL + "datas/finales_general.json",

        urlEquipe: process.env.BASE_URL + "datas/info_tournoi.json",

        lesmatchs_consolante: [],
        lesmatchs_general: [],

        lesequipeskey: {},

        headersMatch: [
          {
            sortable: false,
            text: 'Salle/Heure',
            value: 'id',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Match',
            value: 'nom',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Domicile',
            value: 'displayDom.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Score',
            value: 'score',
            align: 'center',
            class: 'font-weight-bold px-0',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Equipe Exterieur',
            value: 'displayExt.fanion',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
        ],
      }
    },
    created() {
      this.loadDataOds();
    },
    methods: {
      update(){
        this.loadDataOds();
      },
      loadDataOds() {
            // Load Equipes
            var urlEquipe = this.urlEquipe;
            axios
              .get(urlEquipe)
              .then(response => {
                var equipes = response.data.lesequipes
                for (var n in equipes) {
                    this.lesequipeskey[equipes[n].id] = equipes[n]
                }
                //console.log(this.lesequipeskey)
              }).catch(error => {
                 console.log(error)
              });

            // Load consolante
            var url_finales_consolante = this.url_finales_consolante;
            axios
                .get(url_finales_consolante)
                .then(response => {
                  this.lesmatchs_consolante = response.data.lesmatchs

                  var blancEquipe = {"categorie_id": "","id": "","nom": "","nomCourt": "","fanion": ""}

                  for (var n in this.lesmatchs_consolante ) {
                    this.lesmatchs_consolante[n].score = this.lesmatchs_consolante[n].equipeDom.but+" - "+this.lesmatchs_consolante[n].equipeExt.but

                    if (this.lesmatchs_consolante[n].equipeDom.id)
                        this.lesmatchs_consolante[n].displayDom = this.lesequipeskey[this.lesmatchs_consolante[n].equipeDom.id]
                    else
                        this.lesmatchs_consolante[n].displayDom = blancEquipe

                    if (this.lesmatchs_consolante[n].equipeExt.id)
                        this.lesmatchs_consolante[n].displayExt = this.lesequipeskey[this.lesmatchs_consolante[n].equipeExt.id]
                    else
                        this.lesmatchs_consolante[n].displayExt = blancEquipe

                    this.lesmatchs_consolante[n].categorie = "Consolante"
                    this.lesmatchs_consolante[n].colorItem = "secondary"
                  }

                }).catch(error => {
                   console.log(error)
                })

            // Load finales_general
            var url_finales_general = this.url_finales_general;
            axios
                .get(url_finales_general)
                .then(response => {
                  this.lesmatchs_general = response.data.lesmatchs

                  var blancEquipe = {"categorie_id": "","id": "","nom": "","nomCourt": "","fanion": ""}

                  for (var n in this.lesmatchs_general ) {
                    this.lesmatchs_general[n].score = this.lesmatchs_general[n].equipeDom.but+" - "+this.lesmatchs_general[n].equipeExt.but

                    if (this.lesmatchs_general[n].equipeDom.id)
                        this.lesmatchs_general[n].displayDom = this.lesequipeskey[this.lesmatchs_general[n].equipeDom.id]
                    else
                        this.lesmatchs_general[n].displayDom = blancEquipe

                    if (this.lesmatchs_general[n].equipeExt.id)
                        this.lesmatchs_general[n].displayExt = this.lesequipeskey[this.lesmatchs_general[n].equipeExt.id]
                    else
                        this.lesmatchs_general[n].displayExt = blancEquipe

                    this.lesmatchs_general[n].categorie = "Général"
                    this.lesmatchs_general[n].colorItem = "primary"
                  }
                }).catch(error => {
                   console.log(error)
                })

      }
    },
    computed: {
        getMatchsGLC() {
            var lesmatchs = this.lesmatchs_consolante.concat(this.lesmatchs_general)
            lesmatchs = lesmatchs.filter(function (entry){return entry.salle==='1-GLC';})

            for (var n in lesmatchs) {
                lesmatchs[n].keytime = lesmatchs[n].heureDebut.replace(":", "")
                if (lesmatchs[n].keytime.startsWith("00"))
                    lesmatchs[n].keytime = "1" + lesmatchs[n].keytime
            }
            console.log(lesmatchs)
            return lesmatchs.sort((p1, p2) => (parseInt(p1.keytime) > parseInt(p2.keytime)) ? 1 : (parseInt(p1.keytime) < parseInt(p2.keytime)) ? -1 : (p1.id > p2.id) ? 1 :(p1.id < p2.id) ? -1 : 0)
        },
        getMatchsCCVL() {
            var lesmatchs = this.lesmatchs_consolante.concat(this.lesmatchs_general)
            lesmatchs = lesmatchs.filter(function (entry){return entry.salle==='2-CCVL';})
            for (var n in lesmatchs) {
                lesmatchs[n].keytime = lesmatchs[n].heureDebut.replace(":", "")
                if (lesmatchs[n].keytime.startsWith("00"))
                    lesmatchs[n].keytime = "1"+lesmatchs[n].keytime
            }
            return lesmatchs.sort((p1, p2) => (p1.keytime > p2.keytime) ? 1 : (p1.keytime < p2.keytime) ? -1 : (p1.id > p2.id) ? 1 :(p1.id < p2.id) ? -1 : 0)
        },
    }
};
</script>

