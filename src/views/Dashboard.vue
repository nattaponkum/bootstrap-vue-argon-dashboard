<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card type="gradient-red" icon="ni ni-bulb-61" class="mb-4">
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Today Power
                </h5>
                <span class="h2 font-weight-bold mb-0">{{
                  numberWithCommas(this.PacTodayTotal.toFixed(2))
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PacDiffTodayTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                    (
                      (this.PacDiffTodayTotal / this.PacYesterdayTotal) *
                      100
                    ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i
                  >{{
                    (
                      (this.PacDiffTodayTotal / this.PacYesterdayTotal) *
                      100
                    ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            type="gradient-orange"
            icon="ni ni-chart-pie-35"
            class="mb-4"
          >
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Monthly Power
                </h5>
                <span class="h2 font-weight-bold mb-0">{{
                  numberWithCommas(this.PacMonthTotal.toFixed(2))
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PacDiffMonthTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                    (
                      (this.PacDiffMonthTotal / this.PacLastMonthTotal) *
                      100
                    ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i
                  >{{
                    (
                      (this.PacDiffMonthTotal / this.PacLastMonthTotal) *
                      100
                    ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4"
          >
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Today Gain
                </h5>
                <span class="h2 font-weight-bold mb-0">{{
                  numberWithCommas(
                    (this.PacTodayTotal * this.PacUnitCost).toFixed(2)
                  )
                }}</span>
              </div>
            </div>

            <template slot="footer">
              <div v-if="this.PacDiffTodayTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                    (
                      (this.PacDiffTodayTotal / this.PacYesterdayTotal) *
                      100
                    ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i
                  >{{
                    (
                      (this.PacDiffTodayTotal / this.PacYesterdayTotal) *
                      100
                    ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            type="gradient-info"
            icon="ni ni-chart-bar-32"
            class="mb-4"
          >
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Monthly Gain
                </h5>
                <span class="h2 font-weight-bold mb-0">{{
                  numberWithCommas(
                    (this.PacMonthTotal * this.PacUnitCost).toFixed(2)
                  )
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PacDiffMonthTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                    (
                      (this.PacDiffMonthTotal / this.PacLastMonthTotal) *
                      100
                    ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i>{{ this.PacLastMonthTotal }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->

    <b-container fluid class="mt--7">
      <!-- insert datepicker floating over the below card  -->
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col cols="6" xl="4" md="6" sm="4" class="text-left">
                <h6 class="text-light text-uppercase ls-1 mb-1">Power A/C</h6>
                <h5 class="h3 text-white mb-0">Pac Daily</h5>
              </b-col>
              <b-col cols="6" xl="8" md="6" sm="8" class="text-right">
                <!-- date picker for today value -->
                <b-form-datepicker
                  id="pac-datepicker"
                  size="sm"
                  v-model="selectedDate"
                  menu-class="w-100"
                  calendar-width="100%"
                  :max="new Date().toISOString().slice(0, 10)"
                  placeholder="Select Date"
                  :today-button="true"
                  :reset-button="true"
                ></b-form-datepicker>
              </b-col>
            </b-row>

            <line-chart
              id="line-chart"
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
              
            >
            </line-chart>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Power A/C</h6>
                <h5 class="h3 mb-0">Summary</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                    class="mr-2 mr-md-0"
                    :active="bigLineChart.activeIndex === 0"
                    link-classes="py-2 px-3"
                    @click.prevent="initBigChart(0)"
                  >
                    <span class="d-none d-md-block">Month</span>
                    <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">Year</span>
                    <span class="d-md-none">Y</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <!-- add test-chart here as last row that take all remain screen width -->

      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import PVService from "@/services/PVService.js";

// Tables
// import SocialTrafficTable from './Dashboard/SocialTrafficTable';
// import PageVisitsTable from './Dashboard/PageVisitsTable';

import moment from "moment";

function get2DigitNumber(digit) {
  var monthNumber = digit;
  var dec = monthNumber - Math.floor(monthNumber);
  monthNumber = monthNumber - dec;
  return ("0" + monthNumber).slice(-2) + dec.toString().substr(1);
}
function getPVLabelList(dataSet) {
  return dataSet.map((x) => x.substring(x.length - 8, x.length));
}

function getColumn(dataSet, propertyName) {
  return dataSet.map((x) => x[propertyName]);
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

export default {
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      selectedDate: new Date(),
      pv: {
        Alias: "",
        Time: "",
        Status: "",
        Vpv1: 0.0,
        Ipv1: 0.0,
        Ppv1: 0.0,
        Vpv2: 0.0,
        Ppv2: 0.0,
        Ppv: 0.0,
        Vac: 0.0,
        Iac: 0.0,
        Fac: 0.0,
        Pac: 0.0,
        PacR: 0.0,
        Temperature: 0.0,
        Eac_today: 0.0,
        Eac_total: 0.0,
        T_total: 0.0,
        IPM_Temperature: 0.0,
        P_BUS_Voltage: 0.0,
        Power_Factor: 0.0,
        Epv1_today: 0.0,
        Epv1_total: 0.0,
        Epv2_total: 0.0,
        Epv_total: 0.0,
      },
      PacMonthTotal: 0,
      PacLastMonthTotal: 0,
      PacDiffMonthTotal: 0,

      PacTodayTotal: 0,
      PacYesterdayTotal: 0,
      PacDiffTodayTotal: 0,

      PacUnitCost: 5,

      bigLineChart: {
        allData: [],
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
          labels: [],
          datasets: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
    };
  },
  methods: {
    async fetchData() {
      //let date = getToday();
      // for testing
      // let date = "2020-10-21";
      // this.pv = (await PVService.show(date)).data;
      // this.bigLineChart.allData = getColumn(this.pv, "Pac");
      // this.bigLineChart.allLabels = getColumn(this.pv, "Time");
      // this.bigLineChart.allLabels = getIndexList(this.bigLineChart.allLabels);

      // fix date to 2020-09-25
      // var today = moment("2020-09-25", "YYYY-MM-DD", true);

      // use today date
      // var today = moment(); //.subtract(1, 'days');

      // use today as selectedDate
      var today = moment(this.selectedDate);
      var month = today.get("month", "M") + 1;
      var year = today.get("year", "YYYY");
      var yesterday = today.clone().subtract("1", "day");
      var lastMonth =
        today.clone().subtract("1", "month").get("month", "M") + 1;
      var lastYear = year - 1;

      var strDate = today.format("YYYY-MM-DD");
      var strYesterday = yesterday.format("YYYY-MM-DD");
      // strMonth is in the format of 'YYYY-MM'
      var strMonth = year + "-" + get2DigitNumber(month);
      // strLastMonth is in the format of 'YYYY-MM'
      var strLastMonth = year + "-" + get2DigitNumber(lastMonth);
      var strYear = String(year);
      var strLastYear = String(lastYear);

      console.log("strDate = " + strDate);
      console.log("month = " + month);
      console.log("strYesterday = " + strYesterday);
      console.log("strLastMonth = " + strLastMonth);
      console.log("strYear = " + strYear);
      console.log("strLastYear = " + strLastYear);

      // call backend for data
      this.pv = (await PVService.showByDate(strDate)).data;
      console.log("this.pv: ", this.pv);

      // get pv by date for bigLineChart
      this.bigLineChart.allData = getColumn(this.pv, "Ppv1");

      this.bigLineChart.allLabels = getPVLabelList(
        getColumn(this.pv, "timestamp")
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

      // get list of monthly power data
      var monthNumberArr = getMonthNumberArr(month);

      // get monthlyDataArr
      var monthlyDataArr = [];
      var i;
      for (i = 0; i < monthNumberArr.length; i++) {
        // transform 1-digit to 2-digit number
        var formattedNumber = get2DigitNumber(monthNumberArr[i]);

        // get data from Backend
        // use last year str if month number > current month number
        console.log(
          "monthNumberArr[" +
            i +
            "]=" +
            (monthNumberArr[i] + 1) +
            " month = " +
            month
        );
        var monthlyData =
          monthNumberArr[i] <= month
            ? (
                await PVService.showTotalByMonth(
                  strYear + "-" + formattedNumber,
                  "Ppv1"
                )
              ).data
            : (
                await PVService.showTotalByMonth(
                  strLastYear + "-" + formattedNumber,
                  "Ppv1"
                )
              ).data;
        console.log(strYear + "-" + formattedNumber + " = " + monthlyData);
        monthlyDataArr.push(monthlyData);
      }
      // dummy data
      // monthlyDataArr = [30000,35000,35000,23000,40000,30000,39000,80000,50000,60000,70000,90000]
      console.log("monthlyDataArr" + monthlyDataArr);
      this.redBarChart.allData[0] = monthlyDataArr;
      this.redBarChart.allLabels[0] = getMonthLabelArr(monthNumberArr);

      // get list of last 5 yearly power data
      // get list of yearly power data
      var yearNumberArr = getYearNumberArr(year);
      console.log(yearNumberArr.length);
      // get yearlyDataArr
      var yearlyDataArr = [];

      for (var j = 0; j < yearNumberArr.length; j++) {
        console.log("j = " + j);
        var yearlyData = (
          await PVService.showTotalByYear(yearNumberArr[j], "Ppv1")
        ).data;
        yearlyDataArr.push(yearlyData);
      }
      console.log("yearlyDataArr = " + yearlyDataArr);

      this.redBarChart.allData[1] = yearlyDataArr;
      this.redBarChart.allLabels[1] = yearNumberArr;

      //get pv data for cards that represent daily Pac total number
      this.PacTodayTotal = (
        await PVService.showTotalByDate(strDate, "Ppv1")
      ).data;
      this.PacYesterdayTotal = (
        await PVService.showTotalByDate(strYesterday, "Ppv1")
      ).data;
      this.PacDiffTodayTotal = this.PacTodayTotal - this.PacYesterdayTotal;
      console.log("PacTodayTotal = " + this.PacTodayTotal);
      console.log("PacYesterdayTotal = " + this.PacYesterdayTotal);
      console.log("PacDiffTodayTotal = " + this.PacDiffTodayTotal);
      // get pv data for cards that represent  monthly Pac total number
      this.PacMonthTotal = (
        await PVService.showTotalByMonth(strMonth, "Ppv1")
      ).data;
      this.PacLastMonthTotal = (
        await PVService.showTotalByMonth(strLastMonth, "Ppv1")
      ).data;
      this.PacDiffMonthTotal = this.PacMonthTotal - this.PacLastMonthTotal;
      console.log("PacMonthTotal = " + this.PacMonthTotal);
      console.log("PacLastMonthTotal = " + this.PacLastMonthTotal);
      console.log("PacDiffMonthTotal = " + this.PacDiffMonthTotal);

      // get all pv data for cards that represent total number
      //this.pv = (await PVService.index()).data;
      await this.initBigChart(0);
      console.log("fetchData finished");
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
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(parts[0]);
      return parts.join(".");
    },
    initBigChart(index) {
      let redBarChartData = {
        datasets: [
          {
            label: "Ppv1",
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
            label: "Ppv1",
            data: this.bigLineChart.allData,
          },
        ],
        labels: this.bigLineChart.allLabels,
      };

      this.bigLineChart.chartData = bigLineChartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  initTotalCards() {},
  watch: {
    async selectedDate(newDate) {
      await this.fetchData();
    },
  },
  async mounted() {
    await this.fetchData();
    console.log("mounted");
    console.log(await this.$store); // This should now log the Vuex store
  },
};
</script>
<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
