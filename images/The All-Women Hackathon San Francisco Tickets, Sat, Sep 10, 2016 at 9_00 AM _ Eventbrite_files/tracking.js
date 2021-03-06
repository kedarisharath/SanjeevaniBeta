tp.track = {
    imagePixel : function(imgPixelArry){
        for (var i = 0; i < imgPixelArry.length; i++) {
            tp.util.createImgPix(imgPixelArry[i]);
        }
        tp.util.logger("image tracked: " + imgPixelArry);
    },
    imagePixelWithParams : function(imgPixelArry){
        for (var i = 0; i < imgPixelArry.length; i++) {

            var translatedPixel = imgPixelArry[i];

            if (tp.hashObj.page_ref == 'orderconfirmation'){
                translatedPixel = translatedPixel.replace('$$-GROSS-$$', parseFloat(tp.hashObj.gross));
            }
            else {
                translatedPixel = translatedPixel.replace('$$-GROSS-$$', '0.00');
            }

            tp.util.createImgPix(translatedPixel);
            tp.util.logger("image tracked: " + translatedPixel);
        }
    }
};

tp.hashObj = tp.util.calculateHash(location.href);

// add some extra prams to the hashObj
tp.hashObj.randomNum = Math.floor(Math.random() * 1000000);
tp.hashObj.date = new Date();

tp.util.logger(tp.hashObj);

for (var i in tp.pixels) {
    if (tp.pixels[i].page_ref.indexOf(tp.hashObj.page_ref) != -1){

        if (tp.util.idsMatch(tp.pixels[i], tp.hashObj)){

            switch (tp.pixels[i]['type']) {
            case 'boostable':

                var baseUrl = 'https://tracker.boostable.com:443/ping',
                    boostableParameters = {
                    _id: tp.hashObj.boostable_partner_id,
                    _idts: tp.hashObj.date.getTime(),
                    action_name: tp.pixels[i].parameters.action_name + '+-+' + tp.hashObj.page_ref,
                    idsite: tp.pixels[i].parameters.idsite,
                    rec: 1,
                    urlref: encodeURIComponent(document.location.href),
                    url: encodeURIComponent(document.referrer.split('#')[0]),
                    r: tp.hashObj.randomNum,
                    h: tp.hashObj.date.getHours(),
                    m: tp.hashObj.date.getMinutes(),
                    s: tp.hashObj.date.getSeconds()
                };

                var commonURL = tp.util.buildURL(baseUrl, boostableParameters);

                tp.track.imagePixel([commonURL]);

                if (tp.hashObj.page_ref == 'orderconfirmation'){

                    var price = parseFloat(tp.hashObj.gross) / parseInt(tp.hashObj.qty);

                    boostableParameters.idgoal = 0;
                    boostableParameters.ec_id = tp.hashObj.oid;
                    boostableParameters.revenue = parseFloat(tp.hashObj.gross);
                    boostableParameters.ec_st = parseFloat(tp.hashObj.net);
                    boostableParameters.ec_items = encodeURIComponent(JSON.stringify([[tp.hashObj.item_id, tp.hashObj.pid, price, parseInt(tp.hashObj.qty)]]));

                    var ecommerceURL = tp.util.buildURL(baseUrl, boostableParameters);

                    tp.track.imagePixel([ecommerceURL]);
                }

                break;
            case 'perfectaudience':
                if (tp.hashObj.page_ref == 'orderconfirmation'){
                    window._pa = window._pa || {};
                    var pa = document.createElement('script');
                    var s = document.getElementsByTagName('script')[0];

                    _pa.orderId = tp.hashObj.oid;
                    _pa.revenue = parseFloat(tp.hashObj.gross);
                    _pa.productId = tp.hashObj.item_id;
                    
                    pa.type = 'text/javascript'; pa.async = true;
                    pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//tag.perfectaudience.com/serve/" + tp.pixels[i].parameters.file_name + ".js";

                    s.parentNode.insertBefore(pa, s); // Insert script into DOM
                }
                break;
            case 'imagePixel':
                tp.track.imagePixel(tp.pixels[i]['imgPixel']);
                break;
            case 'imagePixelWithParams':
                tp.track.imagePixelWithParams(tp.pixels[i]['imgPixel']);
                break;
            }
        }
    }
}