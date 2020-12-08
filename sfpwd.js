//@author: www.github.com/marceloheredia
let $ = require('jquery');
const crypto = require('crypto');
const alph_lower = 'abcdefghijklmnopqrstwxyz';
const alph_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const special_c = '!@#$%¨&*()_+-={}[]`´~^/?;:.,<>|';

$(document).ready(function(){
    //Generate Password
    $('#gen_pwd').click(function (){
        test_inputs();
    });

    const test_inputs = () => {
        if ($('#key_len').val() < 6 ||
            $('#key_len').val() > 2048){
            //alert error
            return false;
        }

    }

    function testit(){
        a = parseInt(crypto.randomBytes(4).toString('hex'),16);
        $('#pwd_out').val(a);
    }
});