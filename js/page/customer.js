$(document).ready(function () {
    loadData(1);
})

/**
 * Load dữ liệu khách hàng
 * */
function loadData() {
    // lấy dữ liệu từ Api về;
    var data = getData();
    console.table(data);
    // Xử lý dữ liệu:
}

/**
 * Hàm thực hiện lấy dữ liệu
 * */
function getData() {
    var customers = null;
    $.ajax({
        method: "GET",
        url: "http://api.manhnv.net/api/customers",
        data: null,
        async: false,
        contentType: "application/json"
    }).done(function (response) {
        customers =  response;
    }).fail(function (response) {
        alert("Không thể lấy dữ liệu từ Api");
    })
    return customers;
}


