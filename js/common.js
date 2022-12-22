$(function () {
    if(bodymovin){
        bodymovin.loadAnimation({
            container : document.querySelector('.tree'),
            renderer : 'svg',//canvas, html, svg
            loop : false,
            autoplay : true,
            path: './json/tree.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.snow'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/snow.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success2'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success2.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success3'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success3.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success4'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success4.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success5'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success5.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success6'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success6.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success7'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/merry01.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success9'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/merry05.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success10'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/merry06.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success11'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/santa.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.sparkles'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/sparkles.json'
        });
        bodymovin.loadAnimation({
            container: document.querySelector('.go'),
            renderer: 'svg', //canvas, html, svg
            loop: false,
            autoplay: true,
            path: './json/go.json'
        });
    }
    let res = fetch('./json/users.json')
            .then((res) => {
                return res.json();
            })
            .then((obj) => {
                List(obj);
            });
    
    
    
    const vm = {
        url: './img/',
        imgFile: '.png'
    }
    
    function whRdom(min, max){
        wR = Math.floor(Math.random() * (max  - min) + min);
        hR = Math.floor(Math.random() * (max  - min) + min);
    }
    
    
    
    
    
    function click(){
        let ck = document.querySelectorAll(".in");
        let succ = document.querySelectorAll(".succ");

        for(i = 0;  i < ck.length; i++){
            ck[i].onclick = function(){
                console.log("aaa", i);
                for(j = 0; j < succ.length; j++)
                    succ[j].classList.add('on');
                    document.querySelector('.title').classList.add('on');
                    document.querySelector('.tree').classList.add('on');
                }
            }
    }
    
    function List(obj) {
        for(let i = 0; i < obj.length; i++){
            const inOut = obj[i].inOut;
            const allH = document.getElementById('receipt').clientHeight;
            const allW = document.getElementById('receipt').clientWidth;
            whRdom(1, 90);
            whRdom(1, 90);
            const temp = document.createElement('a');
            temp.setAttribute('href', '#');
            temp.style.top = wR+'%';
            temp.style.left = hR+'%';
            temp.innerHTML =
                '<span class="'+ obj[i].inOut +'">'+ obj[i].item +'</span>';
    
                // <a href="#" style="top:'+ wR+'px'+';height:'+ hR +'px'+'"></a>
                document.querySelector('#receipt').append(temp);    
        }
        click();
        // click2();
        sparkles();
    }
    let boom = bodymovin.loadAnimation({
        container : document.querySelector('.bomb'),
        renderer : 'svg',//canvas, html, svg
        loop : true,
        autoplay : true,
        path: './json/bomb.json'
    });
    // function click2(){
    //     let ck2 = document.querySelectorAll(".out");
    //     // let bomb = document.querySelectorAll(".bomb");
        
    //     for(j = 0; j< ck2.length; j++){
    //         ck2[j].onclick = function(){
    //             boom.goToAndStop(true);
    //             boom.playSegments(true);
    //             document.querySelector(".bomb").classList.add('on');
    //             setTimeout(function(){
    //                 document.querySelector(".bomb").classList.remove('on');
    //             }, 2500);
    //         };
    //     }
    // }
    
    
    function sparkles(){
        
        let sp =  document.querySelector("body");
        sp.onclick =  function(event){
            const sparkles = document.querySelector('.sparkles');
            const x = event.clientX;
            const y = event.clientY
    
            sparkles.style.display = 'block';
            sparkles.style.top = y - 25 +'px';
            sparkles.style.left = x - 25 +'px';
        };
    }
    

});


