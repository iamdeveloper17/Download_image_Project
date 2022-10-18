let app = document.getElementById('app');
        let qouteText = document.querySelector("[name=qoute]");
        let authorText = document.querySelector("[name=author]");
        let btnBackground = document.getElementById('btnBackground');
        let btnDownload = document.getElementById('btnDownload');
        let btnColor = document.getElementById('btnColor');
        let quotation = document.getElementById('quotation');
        let qoute = document.getElementById('qoute');
        let sperator = document.getElementById('sperator');
        let author = document.getElementById('author');


        btnBackground.addEventListener('click',function(e){
            // console.log(e);
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            const rgb = "rgb("+ r +","+ g +","+ b +")";
            // console.log(rgb);
            app.style.backgroundColor=rgb;
        });

        btnColor.addEventListener('click',function(e){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            const rgb = "rgb("+ r +","+ g +","+ b +")";
            quotation.style.color=rgb;
            qoute.style.color=rgb;
            sperator.style.backgroundColor=rgb;
            author.style.color=rgb;
        });

        qouteText.addEventListener("keyup",function(e){
            // console.log(e.currentTarget.value);
            qoute.innerText = e.currentTarget.value;
        });

        authorText.addEventListener("keyup",function(e){
            // console.log(e.currentTarget.value);
            author.innerText = e.currentTarget.value;
        });

        btnDownload.addEventListener('click',function(e){
            html2canvas(app).then(canvas => {
                // document.body.appendChild(canvas)
            let a = document.createElement('a') 
            a.download=Math.floor(Math.random()*50)+".png";
            a.href=canvas.toDataURL();
            a.click();   
            });
        })