function OrderDetailsDto(items,uniPrices,purchaseQtys,totals) {
    var item = items;
    var uniPrice = uniPrices;
    var purchaseQty = purchaseQtys;
    var total = totals;

    this.getItem = function () {
        return item;
    }
    this.setItem = function (i) {
        item=i;
    }
    this.getUniPrice = function () {
        return uniPrice;
    }
    this.setUniPrice = function (uP) {
        uniPrice=uP;
    }
    this.getPurchaseQty = function () {
        return purchaseQty;
    }
    this.setPurchaseQty = function (qty) {
        purchaseQty=qty;
    }
    this.getItemTotal = function () {
        return total;
    }
    this.setItemTotal = function (tot) {
        total=tot;
    }
}