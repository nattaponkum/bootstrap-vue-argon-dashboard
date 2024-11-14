import Api from '@/services/Api'
export default {
    index() {
        return Api().get('Batteries')
    },
    showByDate(date, attr) {
        return Api().get('BatteryDATE/' + date)
    },
    showTotalByDate(date, attr) {
        return Api().get('BatteryTOTALDATE/' + date + '/' + attr)
    },
    showTotalByMonth(month, attr) {
        return Api().get('BatteryTOTALMONTH/' + month + '/' + attr)
    },
    showTotalByYear(year, attr) {
        return Api().get('BatteryTOTALYEAR/' + year + '/' + attr)
    },
    post(battery) {
        return Api().post('Battery', battery)
    }
}