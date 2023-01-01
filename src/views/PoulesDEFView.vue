<template>
      <v-card class="mx-auto">
        <v-tabs color="primary accent-4" left>
          <v-tab >Poule D</v-tab>
          <v-tab >Poule E</v-tab>
          <v-tab >Poule F</v-tab>
            <v-chip class="ma-2" label @click.stop="update()">
                <v-icon>mdi-reload</v-icon>Reload
            </v-chip>

          <v-tab-item>
            <v-container id="pouleD-match" fluid tag="section">
            <v-row>
              <v-col>
                <base-material-card color="colorPD" class="px-0"  >
                  <template v-slot:heading>
                  <div class="display-2 font-weight-light">PouleD-Matchs</div>
                  </template>
                  <v-card-text class="px-0" >
                    <v-data-table :headers="headersMatch" :items="lesmatchsD" hide-default-footer class="px-0" mobile-breakpoint="350">
                      <template v-slot:[`item.id`]="{ item }">
                        <h6 class="display-1 mb-1 black--text">{{ item.id}}</h6>
                        <h6 class="display-1 mb-1 grey--text">{{ item.salle}}</h6>
                        <h6 class="display-1 mb-1 grey--text">{{ item.heureDebut}}</h6>
                      </template>
                      <template v-slot:[`item.displayDom.fanion`]="{ item }">
                            <v-avatar>
                              <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                            </v-avatar>
                            <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                      </template>
                      <template v-slot:[`item.score`]="{ item }">
                        <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                      </template>
                      <template v-slot:[`item.displayExt.fanion`]="{ item }">
                            <v-avatar>
                              <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                            </v-avatar>
                            <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </base-material-card>
              </v-col>
              <v-col>
                <base-material-card color="colorPD" class="px-0"  >
                  <template v-slot:heading>
                      <div class="display-2 font-weight-light">PouleD-Classement</div>
                  </template>
                  <v-card-text class="px-0" >
                      <v-data-table :headers="headersClassement" :items="leclassementD" hide-default-footer class="px-0" mobile-breakpoint="350">
                          <template v-slot:[`item.displayEqui.nom`]="{ item }">
                              <v-chip class="ma-2" label>
                                  <v-avatar left>
                                      <v-img v-bind:src="'img/fanion/'+item.displayEqui.fanion" :alt="item.displayEqui.nomCourt"/>
                                  </v-avatar>
                                  <h6 class="display-1 mb-1 ">{{ item.displayEqui.nom }}</h6>
                              </v-chip>
                          </template>
                          <template v-slot:[`item.butsPour`]="{ item }">{{ item.butsPour }} / {{ item.butsContre }}</template>
                      </v-data-table>
                  </v-card-text>
                </base-material-card>

                <v-card max-width="400" class="mx-auto">
                    <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/mma.png" alt="mma"/>
                    <v-card-title>Annonceurs</v-card-title>
                </v-card>

              </v-col>
            </v-row>
          </v-container>
          </v-tab-item>

          <v-tab-item>
          <v-container id="pouleE-match" fluid tag="section">
              <v-row>
                  <v-col>
                      <base-material-card color="colorPE" class="px-0"  >
                          <template v-slot:heading>
                              <div class="display-2 font-weight-light">PouleE-Matchs</div>
                          </template>
                          <v-card-text class="px-0" >
                              <v-data-table :headers="headersMatch" :items="lesmatchsE" hide-default-footer class="px-0" mobile-breakpoint="350">
                                  <template v-slot:[`item.id`]="{ item }">
                                  <h6 class="display-1 mb-1 black--text">{{ item.id}}</h6>
                                  <h6 class="display-1 mb-1 grey--text">{{ item.salle}}</h6>
                                  <h6 class="display-1 mb-1 grey--text">{{ item.heureDebut}}</h6>
                                  </template>
                                  <template v-slot:[`item.displayDom.fanion`]="{ item }">
                                      <v-avatar>
                                          <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                                      </v-avatar>
                                      <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                                  </template>
                                  <template v-slot:[`item.score`]="{ item }">
                                    <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                                  </template>
                                  <template v-slot:[`item.displayExt.fanion`]="{ item }">
                                      <v-avatar>
                                          <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                                      </v-avatar>
                                      <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                                  </template>
                              </v-data-table>
                          </v-card-text>
                      </base-material-card>
                  </v-col>
                  <v-col>
                    <base-material-card color="colorPE" class="px-0"  >
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">PouleE-Classement</div>
                        </template>
                        <v-card-text class="px-0" >
                            <v-data-table :headers="headersClassement" :items="leclassementE" hide-default-footer class="px-0" mobile-breakpoint="350">
                                <template v-slot:[`item.displayEqui.nom`]="{ item }">
                                <v-chip class="ma-2" label>
                                    <v-avatar left>
                                        <v-img v-bind:src="'img/fanion/'+item.displayEqui.fanion" :alt="item.displayEqui.nomCourt"/>
                                    </v-avatar>
                                    <h6 class="display-1 mb-1 ">{{ item.displayEqui.nom }}</h6>
                                </v-chip>
                            </template>
                            <template v-slot:[`item.butsPour`]="{ item }">{{ item.butsPour }} / {{ item.butsContre }}</template>
                    </v-data-table>
                    </v-card-text>
                    </base-material-card>

                    <v-card max-width="400" class="mx-auto">
                        <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/mma.png" alt="mma"/>
                        <v-card-title>Annonceurs</v-card-title>
                    </v-card>
                  </v-col>
              </v-row>
          </v-container>
          </v-tab-item>


          <v-tab-item>
            <v-container id="pouleF-match" fluid tag="section">
            <v-row>
                <v-col>
                    <base-material-card color="colorPF" class="px-0"  >
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">PouleF-Matchs</div>
                        </template>
                        <v-card-text class="px-0" >
                        <v-data-table :headers="headersMatch" :items="lesmatchsF" hide-default-footer class="px-0" mobile-breakpoint="350">
                            <template v-slot:[`item.id`]="{ item }">
                                <h6 class="display-1 mb-1 black--text">{{ item.id}}</h6>
                                <h6 class="display-1 mb-1 grey--text">{{ item.salle}}</h6>
                                <h6 class="display-1 mb-1 grey--text">{{ item.heureDebut}}</h6>
                            </template>
                            <template v-slot:[`item.displayDom.fanion`]="{ item }">
                                <v-avatar>
                                    <v-img v-bind:src="'img/fanion/'+item.displayDom.fanion" :alt="item.displayDom.nomCourt" max-height="25" max-width="25"/>
                                </v-avatar>
                                <h6 class="display-1 mb-1 grey--text">{{ item.displayDom.nomCourt }}</h6>
                            </template>
                            <template v-slot:[`item.score`]="{ item }">
                                <v-chip color="grey" ><h6 class="display-1 mb-1 font-weight-bold">{{ item.score }}</h6></v-chip>
                            </template>
                            <template v-slot:[`item.displayExt.fanion`]="{ item }">
                                <v-avatar>
                                    <v-img v-bind:src="'img/fanion/'+item.displayExt.fanion" :alt="item.displayExt.nomCourt" max-height="25" max-width="25"/>
                                </v-avatar>
                                <h6 class="display-1 mb-1 grey--text">{{ item.displayExt.nomCourt }}</h6>
                            </template>
                        </v-data-table>
                        </v-card-text>
                    </base-material-card>
                </v-col>
                <v-col>
                    <base-material-card color="colorPF" class="px-0"  >
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">PouleF-Classement</div>
                        </template>
                        <v-card-text class="px-0" >
                            <v-data-table :headers="headersClassement" :items="leclassementF" hide-default-footer class="px-0" mobile-breakpoint="350">
                                <template v-slot:[`item.displayEqui.nom`]="{ item }">
                                <v-chip class="ma-2" label>
                                    <v-avatar left>
                                        <v-img v-bind:src="'img/fanion/'+item.displayEqui.fanion" :alt="item.displayEqui.nomCourt"/>
                                    </v-avatar>
                                    <h6 class="display-1 mb-1 ">{{ item.displayEqui.nom }}</h6>
                                </v-chip>
                            </template>
                            <template v-slot:[`item.butsPour`]="{ item }">{{ item.butsPour }} / {{ item.butsContre }}</template>
                        </v-data-table>
                        </v-card-text>
                    </base-material-card>

                    <v-card max-width="400" class="mx-auto">
                        <v-img class="mx-auto" max-height="200px" max-width="200px" src="img/pub/mma.png" alt="mma"/>
                        <v-card-title>Annonceurs</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
          </v-tab-item>

      </v-tabs>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        urlPouleA: process.env.BASE_URL + "datas/c2_pouleD.json",
        urlPouleB: process.env.BASE_URL + "datas/c2_pouleE.json",
        urlPouleC: process.env.BASE_URL + "datas/c2_pouleF.json",
        urlEquipe: process.env.BASE_URL + "datas/info_tournoi.json",
        lesmatchsD: [],
        leclassementD: [],
        lesmatchsE: [],
        leclassementE: [],
        lesmatchsF: [],
        leclassementF: [],
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
        headersClassement: [
          {
            sortable: false,
            text: 'Rang',
            value: 'rang',
            align: 'center',
            class: 'px-1',
            cellClass: 'px-1',
          },
          {
            sortable: false,
            text: 'Points',
            value: 'points',
            align: 'center',
            class: 'font-weight-bold px-1',
            cellClass: 'font-weight-bold px-1',
          },
          {
            sortable: false,
            text: 'Diff Buts',
            value: 'diffbuts',
            align: 'center',
            class: 'font-weight-bold px-1',
            cellClass: 'font-weight-bold px-1',
          },
          {
            sortable: false,
            text: 'Equipe',
            align: 'center',
            value: 'displayEqui.nom',
            class: 'px-1',
            cellClass: 'px-1 text-start',
            mobile: 'false',
          },
          {
            sortable: false,
            text: 'Buts Pour/Contre',
            align: 'center',
            value: 'butsPour',
            class: 'px-1',
            cellClass: 'px-1 text-left',
            mobile: 'false',
          },
        ],
      };
    },
    created() {
      this.loadDataOds();
      // reload automatic
      setInterval(this.update(), 20000);
    },
    methods: {
        update(){
            this.loadDataOds();
            //console.log("update called");
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
            var urlPouleA = this.urlPouleA;
            axios
                .get(urlPouleA)
                .then(response => {
                  this.lesmatchsD = response.data.lesmatchs
                  this.leclassementD = response.data.leclassement

                  for (var n in this.lesmatchsD ) {
                    this.lesmatchsD[n].score = this.lesmatchsD[n].equipeDom.but+" - "+this.lesmatchsD[n].equipeExt.but
                    this.lesmatchsD[n].displayDom = this.lesequipeskey[this.lesmatchsD[n].equipeDom.id]
                    this.lesmatchsD[n].displayExt = this.lesequipeskey[this.lesmatchsD[n].equipeExt.id]
                  }

                  for (var z in this.leclassementD ) {
                    this.leclassementD[z].displayEqui = this.lesequipeskey[this.leclassementD[z].id]
                  }
                  var sortedclassementA = this.leclassementD.sort((p1, p2) => (p1.rang > p2.rang) ? 1 : (p1.rang < p2.rang) ? -1 : 0)
                  this.leclassementD = sortedclassementA

                  //console.log(this.lesmatchsD)
                }).catch(error => {
                   console.log(error)
                })

            // Load PoulesB
            var urlPouleB = this.urlPouleB;
            axios
                .get(urlPouleB)
                .then(response => {
                  this.lesmatchsE = response.data.lesmatchs
                  this.leclassementE = response.data.leclassement

                  for (var n in this.lesmatchsE ) {
                    this.lesmatchsE[n].score = this.lesmatchsE[n].equipeDom.but+" - "+this.lesmatchsE[n].equipeExt.but
                    this.lesmatchsE[n].displayDom = this.lesequipeskey[this.lesmatchsE[n].equipeDom.id]
                    this.lesmatchsE[n].displayExt = this.lesequipeskey[this.lesmatchsE[n].equipeExt.id]
                  }

                  for (var z in this.leclassementE ) {
                    this.leclassementE[z].displayEqui = this.lesequipeskey[this.leclassementE[z].id]
                  }
                  var sortedclassementB = this.leclassementE.sort((p1, p2) => (p1.rang > p2.rang) ? 1 : (p1.rang < p2.rang) ? -1 : 0)
                  this.leclassementE = sortedclassementB

                  //console.log(this.lesmatchsE)
                }).catch(error => {
                   console.log(error)
                })

            // Load PoulesC
            var urlPouleC = this.urlPouleC;
            axios
                .get(urlPouleC)
                .then(response => {
                  this.lesmatchsF = response.data.lesmatchs
                  this.leclassementF = response.data.leclassement

                  for (var n in this.lesmatchsF ) {
                    this.lesmatchsF[n].score = this.lesmatchsF[n].equipeDom.but+" - "+this.lesmatchsF[n].equipeExt.but
                    this.lesmatchsF[n].displayDom = this.lesequipeskey[this.lesmatchsF[n].equipeDom.id]
                    this.lesmatchsF[n].displayExt = this.lesequipeskey[this.lesmatchsF[n].equipeExt.id]
                  }

                  for (var z in this.leclassementF ) {
                    this.leclassementF[z].displayEqui = this.lesequipeskey[this.leclassementF[z].id]
                  }
                  var sortedclassementC = this.leclassementF.sort((p1, p2) => (p1.rang > p2.rang) ? 1 : (p1.rang < p2.rang) ? -1 : 0)
                  this.leclassementF = sortedclassementC

                }).catch(error => {
                   console.log(error)
                })

          },
    },
};
</script>

