let visor = document.getElementById('visor');
let casas_number = "12";
let Repe_ZO = false;
let nc = false;
let finan_ZO = false;
let er_ZO = false;
let block_in = false;
let sinal1 = "";
let sinal_usa = "";
let x1 = "";
let x2 = "";
let data = "";
let registro = "";
let onoff = 0;
let pi = 3.
1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456


visor.innerText = String((0).toFixed(casas_number));
//Adicionais
function N(string){
    return(Number(string))
}
function erro(){
    Repe_ZO = false;
    nc = false;
    finan_ZO = false;
    er_ZO = false;
    sinal1 = "";
    sinal_usa = "";
    x1 = "";
    x2 = "";
    data = "";
    registro = "";
    visor.innerText = "Erro [função invalida]";
    setTimeout(function(){
        visor.innerText = String((0).toFixed(casas_number));
        },1500)
    }
function erro_re(){
    visor.innerText = "Erro [formato]"
    setTimeout(function(){
        visor.innerText = String((data))
        },1200)
}
function fac(num){
    let resu = num;
    switch(String(num)){
        case '1':
        case '0':
            resu = 1;
            break;
        default:
            for(let i = num-1; i!=0; i--){
                resu = resu*i;}
    return(resu)}
            
    }



// Main
function casas(){
    nc = true;
}
function casas_manager(){
    nc = false;
    if(N(data) < 10 && N(data) > 0){
        casas_number = parseInt(data);
        visor.innerText = String((0).toFixed(casas_number));
        data = " ";}
    else if(N(data)>9){
            casas_number = parseInt(9);
            visor.innerText = String((0).toFixed(casas_number));
            data = " ";
    }else{erro()}
}
function limpar(){
    pv = "";
    i = "";
    fv = "";
    n = "";
    times_finan = 0;
    last_press = "";
    c1 = "";
    c2 = "";
    h = "";
    times_pita = 0;
    last_press_t = "";
    visor.innerText = String((0).toFixed(casas_number));
    data = "";
    Repe_ZO = false;
    x1 = "";
    x2 = "";
    document.getElementById('fii').style.backgroundColor = "";
    document.getElementById('fip').style.backgroundColor = "";
    document.getElementById('fif').style.backgroundColor = "";
    document.getElementById('fin').style.backgroundColor = "";
    document.getElementById('fii').disabled = "";
    document.getElementById('fip').disabled = "";
    document.getElementById('fif').disabled = "";
    document.getElementById('fin').disabled = "";
    document.getElementById('c11').style.backgroundImage = "";
    document.getElementById('c11').disabled = "";
    document.getElementById('c22').style.backgroundImage = "";
    document.getElementById('c22').disabled = "";
    document.getElementById('c33').style.backgroundImage = "";
    document.getElementById('c33').disabled = "";
    
}
function apagar(){
    if(data!=""){
        data = data.substring(0, data.length - 1);
        
        if(data == ""){
            visor.innerText = String((0).toFixed(casas_number));
        }else{
            visor.innerText = String(data);
        }
    }
    else{}
    
}
function insira(num){
    if (block_in != true){
        if (finan_ZO == true){
            finan_ZO = false;
            registro = num;
            data = num;
            visor.innerText = String(data);
        }
        else if (nc == false){
            registro = num;
            data = data + num;
            visor.innerText = String(data);
        }
        else{
            data = num;
            casas_manager();
        }

    }else{
        erro_re();
    }}
function insira_pi(){
    if (data.length>0){
        visor.innerText = data + 'π'
        data = String(N(data) * N(pi).toFixed(casas_number));
    }
    else{
        visor.innerText = String(data) + 'π'
        data = pi; 
    }
    block_in = true;
}
function insira_Operation(sinal){
    block_in = false;
    if (Repe_ZO == false){
        sinal_usa = sinal
        x1 = data;
        visor.innerText = data + sinal;
        data = " ";
        visor.innerText = data;
        Repe_ZO = true;
    }else{
        alert('Insira um número e prossiga com a operação.')
}}
function insira_Operation_ex(type){
    block_in = false
    switch(type){
        case 'rq':
            data = Math.sqrt(N(data));
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;
        case 'eq':
            data = Math.pow(N(data), 2);
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;
        case 'chs':
            if(data[0]!='-'){
                data = '-'+data;
            }else{
                data = data.substring(1,data.length);
            }
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;
        case 'e':
            x1 = data;
            data = " "
            sinal_usa = 'e';
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;
        case 'r':
            x1 = data;
            data = " "
            sinal_usa = 'r';
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;
        case 'ln':
            data = Math.log(N(data));
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;
        case 'fa':
            data = fac(data);
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;
        case 'sen':
            data = Math.sin(N(data));
            visor.textContent = String((N(data).toFixed(casas_number))) + " " + "rad";
            break;
        case 'cos':
            data = Math.cos(N(data));
            visor.textContent = String((N(data).toFixed(casas_number))) + " " + "rad";
            break;    
        case 'tg':
            data = Math.tan(N(data));
            visor.textContent = String((N(data).toFixed(casas_number))) + " " + "rad";
            break;         
        case 'log':
            x1 = data;
            data = " "
            sinal_usa = 'log';
            visor.textContent = String((N(data).toFixed(casas_number)));
            break;                
        default:
            erro();
            break;}

    Repe_ZO = false;

}
function calculate(){
    x2 = data;
    switch(sinal_usa){
        case '-':
            data = x1 - x2;
            break;
        case '%':
            data = (N(x1)/100)*N(x2); 
            break;
        case '+':
            data = N(x1) + N(x2);
            break;
        case '/':
            data = x1 / x2;
            break;
        case '*':
            data = x1 * x2;
            break;
        case 'e':
            data = Math.pow(N(x1), N(x2));
            break;
        case 'r':
            data = Math.pow(N(x1), 1/N(x2))
            break;
        case 'log':
            data = Math.log(N(x1))/ Math.log(N(data));
            break;
        default:
            alert('Invalid');
            // erro() 
            break;}
        Repe_ZO = false;
        visor.textContent = String(N(data).toFixed(casas_number)); 
    }
// Finan_C
let pv = "";
let i = "";
let fv = "";
let n = "";
let times_finan = 0;
let last_press = ""
function insira_finan(type){
    last_press = type;
    if(times_finan <3){
        switch(type){
            case "i":
                i = data;
                data = "";
                visor.innerText = String(data);
                document.getElementById('fii').style.backgroundColor = "#ffd";
                document.getElementById('fii').disabled = true;
                
                break;
            case "pv":
                pv = data;
                data = "";
                visor.innerText = String(data);
                document.getElementById('fip').style.backgroundColor = "#ffd";
                document.getElementById('fip').disabled = true;
                break;
            case "fv":
                fv = data;
                data = "";
                visor.innerText = String(data);
                document.getElementById('fif').style.backgroundColor = "#ffd";
                document.getElementById('fif').disabled = true;
                break;
            case "n":
                n = data;
                data = "";
                visor.innerText = String(data);
                document.getElementById('fin').style.backgroundColor = "#ffd";
                document.getElementById('fin').disabled = true;
                break;}
        times_finan ++;
    }
    else{
        switch(last_press){
            case "i":
                data = ((Math.pow(N(fv)/N(pv), 1/N(n))-1)*100).toFixed(casas_number) 
                
                break;
            case "pv":
                data = (N(fv)/Math.pow(1 + N(i/100), N(n))).toFixed(casas_number)
                break;

            case "fv":
                data = (N(pv)*Math.pow(1 + N(i/100), N(n))).toFixed(casas_number)
                break;

            case "n":
                data = Math.log(N(fv)/N(pv))/Math.log(1 + N(i/100)).toFixed(casas_number)
                break;}

        document.getElementById('fii').style.backgroundColor = "";
        document.getElementById('fip').style.backgroundColor = "";
        document.getElementById('fif').style.backgroundColor = "";
        document.getElementById('fin').style.backgroundColor = "";
        document.getElementById('fii').disabled = "";
        document.getElementById('fip').disabled = "";
        document.getElementById('fif').disabled = "";
        document.getElementById('fin').disabled = "";
        visor.innerText = String(Number(data).toFixed(casas_number));
        pv = "";
        i = "";
        fv = "";
        n = "";
        times_finan = 0;
        finan_ZO = true;
    }
}  
// Teorema
let c1 = "";
let c2 = "";
let h = "";
let times_pita = 0;
let last_press_t = "";

function insira_teo(type){
    last_press_t = type;
    if(times_pita <2){
        switch (type){
            case 'c1':
                c1 = data;
                data = "";
                visor.innerText = String(data);
                document.getElementById('c11').style.backgroundImage = "linear-gradient(#ffd, #ffd)";
                document.getElementById('c11').disabled = true;
                break;
            case 'c2':
                c2 = data;
                data = "";
                visor.innerText = String(data);
                document.getElementById('c22').style.backgroundImage = "linear-gradient(#ffd, #ffd)";
                document.getElementById('c22').disabled = true;
                break;
            case 'h':
                h = data;
                data = "";
                visor.innerText = String(data);
                document.getElementById('c33').style.backgroundImage = "linear-gradient(#ffd, #ffd)";
                document.getElementById('c33').disabled = true;
                break;
            
        }
        times_pita++;
    }else{
        switch(last_press_t){
            case 'c1':
                data = Math.sqrt(Math.pow(N(h), 2) - Math.pow(N(c2), 2));
                visor.innerText = String(Number(data).toFixed(casas_number));
                break;
            case 'c2':
                data = Math.sqrt(Math.pow(N(h), 2) - Math.pow(N(c1), 2));
                visor.innerText = String(Number(data).toFixed(casas_number));
                break;
            case 'h':
                data = Math.sqrt(Math.pow(N(c1), 2) + Math.pow(N(c2), 2));
                visor.innerText = String(Number(data).toFixed(casas_number));
                break;
            default:
                erro()
                break;
        }
        document.getElementById('c11').style.backgroundColor = "";
        document.getElementById('c11').disabled = "";
        document.getElementById('c22').style.backgroundColor = "";
        document.getElementById('c22').disabled = "";
        document.getElementById('c33').style.backgroundColor = "";
        document.getElementById('c33').disabled = "";
        c1 = "";
        c2 = "";
        h = "";
        }
}
// Teclado
document.addEventListener('onkeydown', function(){
    insira('1');
})


// 110 112 105 102

document.body.onkeypress = function tecla (){
        let tecla = window.event.keyCode;

    
    
        if (tecla >= 48 && tecla <= 57){
            insira(String(tecla - 48))
        }else{
            switch(String(tecla)){
                case '37':
                    insira_Operation('%')
                    break;
                case '42':
                    insira_Operation('*');
                    break;
                case '43':
                    insira_Operation('+');
                    break;
                case '45':
                    insira_Operation('-');
                    break;
                case '61':
                case '13':
                    calculate();
                    break;
                case '47':
                    insira_Operation('/');
                    break;
                case '8':
                    apagar();
                    break;
                case '46':
                case '44':
                    insira('.');
                    break;
                case '110':
                    insira_finan('n');
                    break;
                case '112':
                    insira_finan('pv');
                    break;
                case '105':
                    insira_finan('i');
                    break;
                case '102':
                    insira_finan('fv');
                    break;
                case '8':
                    apagar();
                    break;
                case '90':
                    casas();
                    break;
    
            }
    
        }
    
      }
document.body.onkeyup = function tecla1(){
    let tecla1 = window.event.keyCode;
    switch(String(tecla1)){
        case "8":
            apagar();
            break;
        case "46":
            limpar();
            break;
        default:
            break;
    }
};



//37 42 43 45 61 47