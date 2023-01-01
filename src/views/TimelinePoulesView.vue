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
        urlc1_PouleA: process.env.BASE_URL + "datas/c1_pouleA.json",
        urlc1_PouleB: process.env.BASE_URL + "datas/c1_pouleB.json",
        urlc1_PouleC: process.env.BASE_URL + "datas/c1_pouleC.json",

        urlEquipe: process.env.BASE_URL + "datas/info_tournoi.json",

        lesmatchs_c1_pA: [],
        lesmatchs_c1_pB: [],
        lesmatchs_c1_pC: [],

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

            // Load PoulesA
            var urlc1_PouleA = this.urlc1_PouleA;
            axios
                .get(urlc1_PouleA)
                .then(response => {
                  this.lesmatchs_c1_pA = response.data.lesmatchs

                  for (var n in this.lesmatchs_c1_pA ) {
                    this.lesmatchs_c1_pA[n].score = this.lesmatchs_c1_pA[n].equipeDom.but+" - "+this.lesmatchs_c1_pA[n].equipeExt.but
                    this.lesmatchs_c1_pA[n].displayDom = this.lesequipeskey[this.lesmatchs_c1_pA[n].equipeDom.id]
                    this.lesmatchs_c1_pA[n].displayExt = this.lesequipeskey[this.lesmatchs_c1_pA[n].equipeExt.id]
                    this.lesmatchs_c1_pA[n].categorie = "Poule A"
                    this.lesmatchs_c1_pA[n].colorItem = "colorPA"
                  }
                }).catch(error => {
                   console.log(error)
                })

            // Load PoulesB
            var urlc1_PouleB = this.urlc1_PouleB;
            axios
                .get(urlc1_PouleB)
                .then(response => {
                  this.lesmatchs_c1_pB = response.data.lesmatchs

                  for (var n in this.lesmatchs_c1_pA ) {
                    this.lesmatchs_c1_pB[n].score = this.lesmatchs_c1_pB[n].equipeDom.but+" - "+this.lesmatchs_c1_pB[n].equipeExt.but
                    this.lesmatchs_c1_pB[n].displayDom = this.lesequipeskey[this.lesmatchs_c1_pB[n].equipeDom.id]
                    this.lesmatchs_c1_pB[n].displayExt = this.lesequipeskey[this.lesmatchs_c1_pB[n].equipeExt.id]
                    this.lesmatchs_c1_pB[n].categorie = "Poule B"
                    this.lesmatchs_c1_pB[n].colorItem = "colorPB"
                  }
                }).catch(error => {
                   console.log(error)
                })

            // Load PoulesC
            var urlc1_PouleC = this.urlc1_PouleC;
            axios
                .get(urlc1_PouleC)
                .then(response => {
                  this.lesmatchs_c1_pC = response.data.lesmatchs

                  for (var n in this.lesmatchs_c1_pC ) {
                    this.lesmatchs_c1_pC[n].score = this.lesmatchs_c1_pC[n].equipeDom.but+" - "+this.lesmatchs_c1_pC[n].equipeExt.but
                    this.lesmatchs_c1_pC[n].displayDom = this.lesequipeskey[this.lesmatchs_c1_pC[n].equipeDom.id]
                    this.lesmatchs_c1_pC[n].displayExt = this.lesequipeskey[this.lesmatchs_c1_pC[n].equipeExt.id]
                    this.lesmatchs_c1_pC[n].categorie = "Poule C"
                    this.lesmatchs_c1_pC[n].colorItem = "colorPC"
                  }
                }).catch(error => {
                   console.log(error)
                })
      }
    },
    computed: {
        getMatchsGLC() {
            var lesmatchs = this.lesmatchs_c1_pA.concat(this.lesmatchs_c1_pB).concat(this.lesmatchs_c1_pC).filter(function (entry){return entry.salle==='1-GLC';})
            for (var n in lesmatchs) {
                lesmatchs[n].keytime = lesmatchs[n].heureDebut.replace(":", "")
            }
            return lesmatchs.sort((p1, p2) => (p1.keytime > p2.keytime) ? 1 : (p1.keytime < p2.keytime) ? -1 : (p1.id > p2.id) ? 1 :(p1.id < p2.id) ? -1 : 0)
        },
        getMatchsCCVL() {
            var lesmatchs = this.lesmatchs_c1_pA.concat(this.lesmatchs_c1_pB).concat(this.lesmatchs_c1_pC).filter(function (entry){return entry.salle==='2-CCVL';})
            for (var n in lesmatchs) {
                lesmatchs[n].keytime = lesmatchs[n].heureDebut.replace(":", "")
            }
            return lesmatchs.sort((p1, p2) => (p1.keytime > p2.keytime) ? 1 : (p1.keytime < p2.keytime) ? -1 : (p1.id > p2.id) ? 1 :(p1.id < p2.id) ? -1 : 0)
        },
    }
};
</script>

