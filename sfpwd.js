//@author: www.github.com/marceloheredia
let $ = require('jquery');
const crypto = require('crypto');
const alph_lower = 'abcdefghijklmnopqrstuvwxyz';
const alph_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const special_c = '!@#$%¨&*()_+-={}[]`´~^/?;:.,<>|\'\\\"';


$(document).ready(function(){
    //Generate Password
    $('#gen_pwd').click(function (){
        if(test_inputs()){
            const alphabet = create_alphabet(ck_inputs()).shuffle();
            const size = parseInt($('#key_len').val())
            let pwd = create_pass(size, alphabet);
            $('#pwd_out').val(pwd);
        }
    });

    //letter choice loop
    const create_pass = (size, alphabet) => {
        let pwd = '';
        let rand_sq = rand_gen(alphabet.length);
        for(let i=0; i<size; i++){
            pwd += alphabet[rand_sq.next().value];
        }
        return pwd;
    }

    //random generator
    function* rand_gen(mod){
        let prev = get_rand_num() % mod;
        let current = 0;
        while(true){
            do{
                current = get_rand_num() % mod;
            } while (Math.abs(current-prev) === 1)
            prev = current;
            yield current;
        }
    }

    const get_rand_num = () => parseInt(crypto.randomBytes(4).toString('hex'),16);

    //alphabet creation
    const create_alphabet = (c_set) => {
        let selected_alph = '';
        if(c_set.includes('symbols')){
            selected_alph += special_c;
        }
        if(c_set.includes('numbers')){
            selected_alph += nums;
        }
        if(c_set.includes('lw_char')){
            selected_alph += alph_lower;
        }
        if(c_set.includes('uppr_char')){
            selected_alph += alph_upper;
        }
        return selected_alph;
    }

    //copy clipboard
    $('#copy').click(function (){
        let cpy = $('#pwd_out');
        cpy.select();
        document.execCommand('copy');
    })

    //validating inputs
    const test_inputs = () => {
        if (!parseInt($('#key_len').val()).between(6,2048)){
                $('#err_txt').text('Password length must be at least 6 and maximum of 2048.');
                $('#error').removeClass('hide');
            return false;
        }
        if($('#box_inputs > div > div > input[type=checkbox]').filter(':checked').length <1){
            $('#err_txt').text('You must choose at least one character type (recommended: 3+).');
            $('#error').removeClass('hide');
            return false;
        }
        return true;
    }

    //error handling
    $('#err_ok').click(function (){
      $('#error').addClass('hide');
    })

    //aux methods
    const ck_inputs = () => $('#box_inputs > div > div > input[type=checkbox]')
                                .filter(':checked')
                                    .map(function(){return this.id})
                                        .get();
});

if(typeof(Number.prototype.between) === 'undefined'){
    Number.prototype.between = function(min, max, notBoundaries){
        let is_between = false
        if (notBoundaries){
            if((this < max) && (this > min)) is_between = true;
        } else{
            if((this <= max) && (this >= min)) is_between = true;
        }
        return is_between
    }
}

if(typeof(String.prototype.shuffle) === 'undefined'){
    String.prototype.shuffle = function(){
        let i = this.length, j, temp;
        if ( i === 0 ) return this;
        while ( --i ) {
            j = Math.floor( Math.random() * ( i + 1 ) );
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
        return this;
    }
}
