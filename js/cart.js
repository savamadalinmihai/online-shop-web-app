window.Cart = {
    API_URL: "http://localhost:8082",

    // this method doesn't require a method definition because by default, GET is used
    getCartContent: function () {
        let customerId = 1;
        $.ajax({
            url: Cart.API_URL + "/carts/" + customerId
        }).done(function (response) {
            console.log(response);
        }).done(function (response) {
            Cart.displayCartContent(response.products)
        })
    },

    displayCartContent: function (products) {
        let htmlContent = '';

        products.forEach(products => htmlContent += Cart.getHtmlForOneProduct(product));

        $('table.shop_table.cart').html(htmlContent);
    },

    getHtmlForOneProduct: function (product) {
        return `<tr class="cart_item">
                   <td class="product-remove">
                       <a title="Remove this item" class="remove" href="#">×</a> 
                   </td>

                   <td class="product-thumbnail">
                       <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="img/product-thumb-2.jpg"></a>
                   </td>

                   <td class="product-name">
                       <a href="single-product.html">${product.name}</a> 
                   </td>

                   <td class="product-price">
                       <span class="amount">£${product.price}</span> 
                   </td>

                   <td class="product-quantity">
                       <div class="quantity buttons_added">
                           <input type="button" class="minus" value="-">
                           <input type="number" size="4" class="input-text qty text" title="Qty" value="1" min="0" step="1">
                           <input type="button" class="plus" value="+">
                       </div>
                   </td>

                   <td class="product-subtotal">
                       <span class="amount">£${product.price}</span> 
                   </td>
            </tr>`

    }
};

Cart.getCartContent();