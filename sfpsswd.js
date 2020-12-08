//@author: www.github.com/marceloheredia
let $ = require('jquery');
const crypto = require('crypto');
const alph_lower = 'abcdefghijklmnopqrstwxyz';
const alph_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const special_c = '!@#$%¨&*()_+-={}[]`´~^/?;:.,<>|';


$(document).ready(function(){

    $('#tst').click(function (){
        testit();

    });

    function testit(){
        a = parseInt(crypto.randomBytes(4).toString('hex'),16);
        $('#result').text('dsfgra: '+ a);
    }
});