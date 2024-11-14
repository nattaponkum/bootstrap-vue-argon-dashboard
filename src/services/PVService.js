import Api from '@/services/Api'
export default {
    index() {
        return Api().get('PVS')
    },
    showByDate(date, attr) {
        return Api().get('PVDATE/' + date)
    },
    showTotalByDate(date, attr) {
        return Api().get('PVTOTALDATE/' + date + '/' + attr)
    },
    showTotalByMonth(month, attr) {
        // month is in the format of 'YYYY-MM'
        return Api().get('PVTOTALMONTH/' + month + '/' + attr)
    },
    showTotalByYear(year, attr) {
        return Api().get('PVTOTALYEAR/' + year + '/' + attr)
    },
    post(PV) {
        return Api().post('PV', PV)
    }
}