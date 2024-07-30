import Api from '@/services/Api'
export default {
    index() {
        return Api().get('PVS')
    },
    showByDate(date) {
        return Api().get('PVDATE/' + date)
    },
    showTotalByDate(date) {
        return Api().get('PVTOTALDATE/' + date)
    },
    showTotalByMonth(month) {
        // month is in the format of 'YYYY-MM'
        return Api().get('PVTOTALMONTH/' + month)
    },
    showTotalByYear(year) {
        return Api().get('PVTOTALYEAR/' + year)
    },
    post(PV) {
        return Api().post('PV', PV)
    }
}