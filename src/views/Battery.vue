<template>
  <div>
    <base-header type="gradient-egat" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats 1st row-->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-info"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Serial number
                </h5>
                <span class="h4 font-weight-bold mb-0">{{
                  "xxxx-1111-2024"
                }}</span>
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-red"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Battery Operation Status
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ "Operating" }}</span>
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-orange"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Charge/discharge mode
                </h5>
                <span class="h5 font-weight-bold mb-0">{{
                  "Maximum self-consumption"
                }}</span>
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Rated capacity
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ "XX,XXX kWh" }}</span>
              </div>
            </div>
          </stats-card>
        </div>
      </div>

      <br />
      <!-- 2nd row -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-info"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Working Status
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ "Running" }}</span>
              </div>
            </div>
            <template v-slot:footer>
              <div v-if="this.BatPLastMonthTotal > 0">
                <div v-if="this.BatPDiffMonthTotal > 0">
                  <span class="text-success mr-2">
                    <i class="fa fa-arrow-up"></i
                    >{{
                      (
                        (this.BatPDiffMonthTotal / this.BatPLastMonthTotal) *
                        100
                      ).toFixed(2)
                    }}%
                  </span>
                  <span class="text-nowrap">Since Last Month</span>
                </div>
                <div v-else>
                  <span class="text-danger mr-2">
                    <i class="fa fa-arrow-down"></i
                    >{{ this.BatPLastMonthTotal }}%
                  </span>
                  <span class="text-nowrap">Since Last Month</span>
                </div>
              </div>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-red"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">SOC</h5>
                <span class="h4 font-weight-bold mb-0"
                  >{{ numberWithCommas(getLatestNotNullData(this.battery, 'BatSoC_bms_Hv1')) }}%</span
                >
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-orange"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Charge/discharge power
                </h5>
                <span class="h5 font-weight-bold mb-0"
                  >{{ numberWithCommas(getLatestNotNullData(this.battery, 'BatP_card_Hv1')) }} Wh</span
                >
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Internal temperature
                </h5>
                <span class="h4 font-weight-bold mb-0"
                  >[{{ numberWithCommas(getLatestNotNullData(this.battery, 'MinCellTemp_bms_Hv1')) }},{{ numberWithCommas(getLatestNotNullData(this.battery, 'MaxCellTemp_bms_Hv1')) }}] °C</span
                >
              </div>
            </div>
          </stats-card>
        </div>
      </div>
      <br />
      <!-- 3rd row -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          
        </div> 
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-info"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Daily discharge energy
                </h5>
                <span class="h4 font-weight-bold mb-0"
                  >{{ numberWithCommas(cummuDischargeEnergy(this.bigLineChart.allData)) }} Wh</span
                >
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-orange"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Bus voltage
                </h5>
                <span class="h5 font-weight-bold mb-0"
                  >{{ numberWithCommas(getLatestNotNullData(this.battery, 'BusV_card_Hv1')) }} V</span
                >
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Bus current
                </h5>
                <span class="h4 font-weight-bold mb-0"
                  >{{ numberWithCommas(getLatestNotNullData(this.battery, 'BusI_card_Hv1')) }} A</span
                >
              </div>
            </div>
          </stats-card>
        </div>
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-10 mb-10 mb-xl-10">
          <card type="default" header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-1">
                    Battery power
                  </h6>
                  <h5 class="h3 text-white mb-0">
                    Charge/Discharge Power by time
                  </h5>
                </div>
              </div>
            </template>

            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            ></line-chart>
          </card>
        </div>

        <!-- <div class="col-xl-5">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">
                  Power Generation
                </h6>
                <h5 class="h3 mb-0">Generation History</h5>
              </div>
              <div class="col">
                <ul class="nav nav-pills justify-content-end">
                  <li class="nav-item mr-2 mr-md-0">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 0 }"
                      @click.prevent="initBigChart(0)"
                    >
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 1 }"
                      @click.prevent="initBigChart(1)"
                    >
                      <span class="d-none d-md-block">Year</span>
                      <span class="d-md-none">Y</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            ></bar-chart>
          </card>
        </div> -->
      </div>
      <!-- End charts-->

      <!--Tables-->
      <!-- <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0"> -->
      <!-- <pv-devices-table></pv-devices-table> -->
      <!-- temporary remove PV station table -->
      <!-- <page-visits-table></page-visits-table> -->
      <!-- </div>
      </div> -->
      <div class="row mt-5">
        <div class="col-xl-12">
          <!-- <social-traffic-table></social-traffic-table> -->
        </div>
      </div>
      <!--End tables-->

      <!-- Stat cards -->
      <!-- <div class="row">
        <div class="col-xl-6 col-lg-6">
          <stats-card
            title="CO2 Reduction "
            type="gradient-blue"
            sub-title="2,356 KgCO2e"
            icon="ni ni-cloud-download-95"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 3.48%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-4">
          <stats-card
            title="Reducing Deforestation"
            type="gradient-green"
            sub-title="350,897"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 12.18%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-4">
          <stats-card
            title="Standard Coal Saved"
            type="gradient-red"
            sub-title="924"
            icon="ni ni-basket"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2">
                <i class="fa fa-arrow-down"></i> 5.72%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div> -->
      <!-- End stat cards -->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
// import BarChart from "@/components/Charts/BarChart";
import BatteryService from "@/services/BatteryService.js";

// read battery data from text file while in mockup state
// import * as readline from 'node:readline/promises';
const fs = require("fs");
const readline = require("readline");

// Tables
// import SocialTrafficTable from './Dashboard/SocialTrafficTable';
// import PageVisitsTable from './Dashboard/PageVisitsTable.vue';
// import PVDevicesTable from "./Dashboard/PVDevicesTable";

import moment from "moment";

function get2DigitNumber(digit) {
  var monthNumber = digit;
  var dec = monthNumber - Math.floor(monthNumber);
  monthNumber = monthNumber - dec;
  return ("0" + monthNumber).slice(-2) + dec.toString().substr(1);
}

function getTimeLabelList(dataSet) {
  return dataSet.map((x) => x.substring(x.length - 8, x.length));
}

function getColumn(dataSet, propertyName) {
  return dataSet.map((x) => x[propertyName]);
}

async function getMonthlyDataArr(monthNumberArr){
  var monthDataArr = [];
  var i;
  for (i=0;i<monthNumberArr.length;i++){
    monthDataArr.push((await PVService.showTotalByMonth(monthNumberArr[i]).data));
  }
  console("monthDataArr = "+monthDataArr);
  return monthDataArr;
}

function getMonthNumberArr(currentMonthNumber) {
  var monthArr = [];
  var i, element;
  for (i = 0; i < 12; i++) {
    if (currentMonthNumber - i <= 0) {
      element = 12 - Math.abs(currentMonthNumber - i);
    } else {
      element = currentMonthNumber - i;
    }
    monthArr.push(element);
  }
  return monthArr.reverse();
}

function getYearNumberArr(currentYearNumber) {
  var yearArr = [];
  var i, element;
  for (i = 0; i < 5; i++) {
    element = currentYearNumber - i;
    yearArr.push(element);
  }
  return yearArr.reverse();
}

function getMonthLabelArr(monthArr) {
  var monthLabel = [];
  var i;
  for (i = 0; i < 12; i++) {
    switch (monthArr[i]) {
      case 1:
        monthLabel.push("Jan");
        break;
      case 2:
        monthLabel.push("Feb");
        break;
      case 3:
        monthLabel.push("Mar");
        break;
      case 4:
        monthLabel.push("Apr");
        break;
      case 5:
        monthLabel.push("May");
        break;
      case 6:
        monthLabel.push("Jun");
        break;
      case 7:
        monthLabel.push("Jul");
        break;
      case 8:
        monthLabel.push("Aug");
        break;
      case 9:
        monthLabel.push("Sep");
        break;
      case 10:
        monthLabel.push("Oct");
        break;
      case 11:
        monthLabel.push("Nov");
        break;
      case 12:
        monthLabel.push("Dec");
    }
  }
  return monthLabel;
}

// function getYearlyPower(year){
//   return dataSet.map((x) => x["BatP"])
// }

export default {
  components: {
    LineChart,
    // BarChart,
    // PageVisitsTable
    // PVDevicesTable
    // SocialTrafficTable,
  },
  data() {
    return {
      battery: {
        site: null,
        section: null,
        timestamp: null,
        BusV_card_Hv1: 0.0,
        BusI_card_Hv1: 0.0,
        BatV_card_card_Hv1: 0.0,
        BatI_card_Hv1: 0.0,
        BoostI1_Hv1: 0.0,
        BoostI2_Hv1: 0.0,
        BatP_card_Hv1: 0.0,
        BatP_Limit_Hv1: 0.0,
        BatV_bms_Hv1: 0.0,
        BatI_bms_Hv1: 0.0,
        BatP_bms_Hv1: 0.0,
        BatSoC_bms_Hv1: 0.0,
        MaxCellV_bms_Hv1: 0.0,
        MinCellV_bms_Hv1: 0.0,
        MaxCellTemp_bms_Hv1: 0.0,
        MinCellTemp_bms_Hv1: 0.0,
        BMSStatus_bms_Hv1: 0.0,
        BoostState_Hv1: 0.0,
        FaultState_Hv1: 0.0,
        ConvAck_Hv1: 0.0,
        SysFlag_Hv1: 0.0,
        BusPref_Hv1: 0.0,
        BatSoCMax_Hv1: 0.0,
        BatSoCMin_Hv1: 0.0,
        BatSoCHys_Hv1: 0.0,
        BusVControl_Hv1: null,
        BusV_card_Hv2: 0.0,
        BusI_card_Hv2: 0.0,
        BatV_card_Hv2: 0.0,
        BatI_card_Hv2: 0.0,
        BoostI1_Hv2: 0.0,
        BoostI2_Hv2: 0.0,
        BatP_card_Hv2: 0.0,
        BatP_card_Limit_Hv2: 0.0,
        BatV_bms_Hv2: 0.0,
        BatI_bms_Hv2: 0.0,
        BatP_bms_Hv2: 0.0,
        BatSoC_bms_Hv2: 0.0,
        MaxCellV_bms_Hv2: 0.0,
        MinCellV_bms_Hv2: 0.0,
        MaxCellTemp_bms_Hv2: 0.0,
        MinCellTemp_bms_Hv2: 0.0,
        BMSStatus_bms_Hv2: null,
        BoostState_Hv2: null,
        FaultState_Hv2: null,
        ConvAck_Hv2: null,
        SysFlag_Hv2: null,
        BusPref_Hv2: 0.0,
        BatSoCMax_Hv2: 0.0,
        BatSoCMin_Hv2: 0.0,
        BatSoCHys_Hv2: 0.0,
        BusVControl_Hv2: null,
        BusV_card_Lv1: 0.0,
        BusI_card_Lv1: 0.0,
        BatV_card_Lv1: 0.0,
        BatI_card_Lv1: 0.0,
        BatP_card_Lv1: 0.0,
        BatP_Limit_Lv1: 0.0,
        BatV_bms_Lv1: 0.0,
        BatI_bms_Lv1: 0.0,
        BatP_bms_Lv1: 0.0,
        BatSoC_bms_Lv1: 0.0,
        MaxCellV_bms_Lv1: 0.0,
        MinCellV_bms_Lv1: 0.0,
        MaxCellTemp_bms_Lv1: 0.0,
        MinCellTemp_bms_Lv1: 0.0,
        BMSStatus_bms_Lv1: null,
        DAB_State_Lv1: null,
        FaultState_Lv1: null,
        ConvAck_Lv1: null,
        SysFlag_Lv1: null,
        BusPref_Lv1: 0.0,
        BatSoCMax_Lv1: 0.0,
        BatSoCMin_Lv1: 0.0,
        BatSoCHys_Lv1: 0.0,
        BusVAck_Lv1: 0.0,
        BusV_card_Lv2: 0.0,
        BusI_card_Lv2: 0.0,
        BatV_card_Lv2: 0.0,
        BatI_card_Lv2: 0.0,
        BatP_card_Lv2: 0.0,
        BatP_Limit_Lv2: 0.0,
        BatV_bms_Lv2: 0.0,
        BatI_bms_Lv2: 0.0,
        BatP_bms_Lv2: 0.0,
        BatSoC_bms_Lv2: 0.0,
        MaxCellV_bms_Lv2: 0.0,
        MinCellV_bms_Lv2: 0.0,
        MaxCellTemp_bms_Lv2: 0.0,
        MinCellTemp_bms_Lv2: 0.0,
        BMSStatus_bms_Lv2: null,
        DAB_State_Lv2: null,
        FaultState_Lv2: null,
        ConvAck_Lv2: null,
        SysFlag_Lv2: null,
        BusPref_Lv2: 0.0,
        BatSoCMax_Lv2: 0.0,
        BatSoCMin_Lv2: 0.0,
        BatSoCHys_Lv2: 0.0,
      },
      BatPMonthTotal: 0,
      BatPLastMonthTotal: 0,
      BatPDiffMonthTotal: 0,

      BatPTodayTotal: 0,
      BatPYesterdayTotal: 0,
      BatPDiffTodayTotal: 0,

      BatPUnitCost: 5,

      bigLineChart: {
        // allData: [
        //   [0, 10, 30, 15, 40, 20],
        //   [0, 20, 5, 25, 10, 30],
        // ],
        allData: [],
        // allLabels: [
        //   ["6am", "10am", "12am", "2pm", "4pm", "6pm"],
        //   ["2559", "2560", "2561", "2562", "2563"],
        // ],
        allLabels: [],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        allData: [
          [0, 0, 10, 30, 15, 40, 20, 30, 40, 35, 0, 0],
          [5, 25, 10, 30, 15],
        ],
        allLabels: [
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          ["2559", "2560", "2561", "2562", "2563"],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
      },
    };
  },
  methods: {
    cummuDischargeEnergy(dataSet) {
      var i;
      var sum = 0;
      for (i = 1; i < dataSet.length; i++) {
        if ((dataSet[i] < dataSet[i-1]) && (dataSet[i-1] !== null)) {
          sum += (dataSet[i] - dataSet[i-1]);
        }
      }
      return sum;
    },
    getLatestNotNullData(dataSet, propertyName) {
      var i = dataSet.length - 1;
      while (i >= 0) {
        if (dataSet[i][propertyName] !== null) {
          return dataSet[i][propertyName];
        }
        i--;
      }
      return null;
    },
    getNullIndices(data) {
      let nullIndices = [];
      data.forEach((value, index) => {
        if (value === null) {
          nullIndices.push(index);
        }
      });
      return nullIndices;
    },
    removeItemsByIndices(data, indices) {
      return data.filter((_, index) => !indices.includes(index));
    },
    deleteNull(dataSet) {
      return dataSet.filter((x) => x !== null);
    },
    numberWithCommas(x) {
      if (x === null) {
        return 'Unknown';
      }
      // round x to 3 decimal places
      x = Math.round(x * 1000) / 1000;
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    },
    initBigChart(index) {
      let redBarChartData = {
        datasets: [
          {
            label: "BatP",
            data: this.redBarChart.allData[index],
          },
        ],
        labels: this.redBarChart.allLabels[index],
      };
      this.redBarChart.chartData = redBarChartData;
      this.redBarChart.activeIndex = index;

      let bigLineChartData = {
        datasets: [
          {
            label: "BatP",
            data: this.bigLineChart.allData,
          },
        ],
        labels: this.bigLineChart.allLabels,
      };

      this.bigLineChart.chartData = bigLineChartData;
      this.bigLineChart.activeIndex = index;

      // console.log(
      //   "Output " + this.BatPTodayTotal + " " + this.BatPDiffTodayTotal
      // );
    },
    initTotalCards() {
      // console.log(
      //   "initTotalCards",
      //   this.BatPMonthTotal,
      //   this.BatPDiffMonthTotal,
      //   this.BatPTodayTotal,
      //   this.BatPDiffTodayTotal,
      //   this.BatPUnitCost
      // );
    },
  },
  async mounted() {
 
    // var today = moment("2023-02-13", "YYYY-MM-DD", true);
    var today = moment()
    var month = today.get("month", "M") + 1;
    var year = today.get("year", "YYYY");
    var yesterday = today.clone().subtract("1", "day");
    var lastMonth = today.clone().subtract("1", "month").get("month", "M") + 1;
    var lastYear = year - 1;

    var strDate = today.format("YYYY-MM-DD");
    var strYesterday = yesterday.format("YYYY-MM-DD");
    var strMonth = String(month);
    var strLastMonth = String(lastMonth);
    var strYear = String(year);
    var strLastYear = String(lastYear);

    console.log("strDate =" + strDate);
    console.log("month =" + month);
    console.log("strYesterday =" + strYesterday);
    console.log("strLastMonth =" + strLastMonth);
    console.log("strYear =" + strYear);
    console.log("strLastYear =" + strLastYear);

  
    // call backend for data
    this.battery = (await BatteryService.showByDate(strDate)).data;
    console.log("this.battery: ", this.battery);

    // get pv by date for bigLineChart
    this.bigLineChart.allData = getColumn(this.battery, "BatP_card_Hv1"); //  BatP_card_Hv1

    this.bigLineChart.allLabels = getTimeLabelList(
      getColumn(this.battery, "timestamp")
    );
    var nullIndexList = this.getNullIndices(this.bigLineChart.allData);

    this.bigLineChart.allLabels = this.removeItemsByIndices(
      this.bigLineChart.allLabels,
      nullIndexList
    );
    this.bigLineChart.allData = this.removeItemsByIndices(
      this.bigLineChart.allData,
      nullIndexList
    );
    console.log("allData:" + this.bigLineChart.allData);
    console.log("allLabels:" + this.bigLineChart.allLabels);

    // get power aggregate data
    // var thisYear = (await PVService.showTotalByYear())





    //get battery data for cards that represent daily BatP_card_Hv1 total number
    this.BatPTodayTotal = (
      await BatteryService.showTotalByDate(strDate, "BatP_card_Hv1")
    ).data;
    this.BatPYesterdayTotal = (
      await BatteryService.showTotalByDate(strYesterday, "BatP_card_Hv1")
    ).data;
    this.BatPDiffTodayTotal = this.BatPYesterdayTotal - this.BatPTodayTotal;

    // get battery data for cards that represent  monthly BatP_card_Hv1 total number
    this.BatPMonthTotal = (
      await BatteryService.showTotalByMonth(
        strYear + "-" + get2DigitNumber(strMonth),
        "BatP_card_Hv1"
      )
    ).data;
    this.BatPLastMonthTotal = (
      await BatteryService.showTotalByMonth(strLastMonth, "BatP_card_Hv1")
    ).data;
    this.BatPDiffMonthTotal = this.BatPLastMonthTotal - this.BatPMonthTotal;


    await this.initBigChart(0);
    await this.initTotalCards();
    console.log("mounted");
  },
};
</script>
<style></style>
