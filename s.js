let a0 = document.getElementById('o0')
let a1 = document.getElementById('o1')
let a2 = document.getElementById('o2')
let a3 = document.getElementById('o3')
let a4 = document.getElementById('o4')
let a5 = document.getElementById('o5')
let a6 = document.getElementById('o6')
let a7 = document.getElementById('o7')
let a8 = document.getElementById('o8')
let a9 = document.getElementById('o9')
let a10 = document.getElementById('o10')
let a11 = document.getElementById('o11')
let a12 = document.getElementById('o12')
let a13 = document.getElementById('o13')
let speed = document.getElementById('speed')

let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let j;
let k;
let l;
let m;
let n;

a = Math.floor(Math.random() * 20) + 1;
b = Math.floor(Math.random() * 20) + 1;
c = Math.floor(Math.random() * 20) + 1;
d = Math.floor(Math.random() * 20) + 1;
e = Math.floor(Math.random() * 20) + 1;
f = Math.floor(Math.random() * 20) + 1;
g = Math.floor(Math.random() * 20) + 1;
h = Math.floor(Math.random() * 20) + 1;
i = Math.floor(Math.random() * 20) + 1;
j = Math.floor(Math.random() * 20) + 1;
k = Math.floor(Math.random() * 20) + 1;
l = Math.floor(Math.random() * 20) + 1;
m = Math.floor(Math.random() * 20) + 1;
n = Math.floor(Math.random() * 20) + 1;






document.getElementById('click').onclick = function array() {


    // a0.innerHTML = a
    // a1.innerHTML = b
    // a2.innerHTML = c
    // a3.innerHTML = d
    // a4.innerHTML = e
    // a5.innerHTML = f
    // a6.innerHTML = g
    // a7.innerHTML = h
    // a8.innerHTML = i
    // a9.innerHTML = j
    // a10.innerHTML = k
    // a11.innerHTML = l
    // a12.innerHTML = m
    // a13.innerHTML = n
    
    a0.style.height = (a *3) + "vh"
    a1.style.height = (b *3) + "vh"
    a2.style.height = (c *3) + "vh"
    a3.style.height = (d *3) + "vh"
    a4.style.height = (e *3) + "vh"
    a5.style.height = (f *3) + "vh"
    a6.style.height = (g *3) + "vh"
    a7.style.height = (h *3) + "vh"
    a8.style.height = (i *3) + "vh"
    a9.style.height = (j *3) + "vh"
    a10.style.height = (k *3) + "vh"
    a11.style.height = (l *3) + "vh"
    a12.style.height = (m *3) + "vh"
    a13.style.height = (n *3) + "vh"
    
    
    a0.style.background = "aqua"
    a1.style.background = "aqua"
    a2.style.background = "aqua"
    a3.style.background = "aqua"
    a4.style.background = "aqua"
    a5.style.background = "aqua"
    a6.style.background = "aqua"
    a7.style.background = "aqua"
    a8.style.background = "aqua"
    a9.style.background = "aqua"
    a10.style.background = "aqua"
    a11.style.background = "aqua"
    a12.style.background = "aqua"
    a13.style.background = "aqua"
   













    let arr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n];
    console.log(arr);

    function sleep(time){
        return new Promise(resolve => setTimeout(resolve, time))
        
    }
    

    

setTimeout(() => {
    

   
 async function bubblesort(arr) {
        
        let len = arr.length;
        
        for (let i = 0; i < len; i++) {
            
            
            for (let j = 0; j < len - 1; j++) {
                
              
                 await sleep(2000/speed.value);
               
                let pre = document.getElementById('o' + [j + 1]).innerHTML
                let preheight = document.getElementById('o' + [j + 1]).style.height
                
                
                if (arr[j] > arr[j + 1]) {
                    
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                     
                    
                    function swap(j) {
                        
                        
                        document.getElementById('o' + [j + 1]).innerHTML = document.getElementById('o' + [j]).innerHTML
                        document.getElementById('o' + [j]).innerHTML = pre

                        document.getElementById('o' + [j + 1]).style.height = document.getElementById('o' + [j]).style.height
                        document.getElementById('o' + [j]).style.height = preheight
                        
                        
                        
                    }
                    swap(j)
                    
                
                
                
                
                }
            }
        }
        
        return arr;
        
    }
    
    
    bubblesort(arr)
}, 2000);

 
}
