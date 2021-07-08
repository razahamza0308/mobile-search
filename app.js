
    var mainImageDIv = document.getElementById('mainDiv')
    var images = mainImageDIv.getElementsByTagName("img")
    var caps = mainImageDIv.getElementsByTagName("figcaption")
    var sources = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"]
    var imagesCaptions = ['Iphone X', 'IPhone11', 'I Phone 12', 'Samsung Galaxy S8', 'Samsung Garaxy S9', 'Samsung Galaxy S10', 'Oppo f8', 'Oppo f9', 'Oppo f10', 'Infinix Hot8', 'Infinix Hot9', 'HInfinix Hot10', 'Infinix PocoX3', 'Infinix Poco8C']
    for (var i = 0; i < images.length; i++) {
        images[i].src = sources[i]
        for (var j = 0; j < caps.length; j++) {
            caps[j].innerHTML = imagesCaptions[j]
        }
    }
    var phones = {
        iphone: {
            iphonex: {
                brand: "Iphone",
                model: "Iphone X",
                price: "150000 PKR",
                color: "Gray,Black & White",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "12px Back, And 4px Front (Full Hd Dslar Wala)",
                src: "1.jpg"
            },
            iphone11: {
                brand: "Iphone",
                model: "Iphone 11",
                price: "200000 PKR",
                color: "Gray,Black & White & Crystal",
                storage: "4 & 64, 6 & 128, 6 & 256, 12 & 512",
                camera: "16px Back, And 6px Front (Full Hd Dslar Wala)",
                src: "2.jpg"
            },
            iphone12: {
                brand: "Iphone",
                model: "Iphone 12",
                price: "250000 PKR",
                color: "Gray,Black & White & Crystal & New Crystal",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "20px Back, And 8px Front (Full Hd Dslar Wala)",
                src: "3.jpg"
            }
        },
        samsung: {
            s8: {
                brand: "Samsung",
                model: "Samsung Galaxy S8",
                price: "70000 PKR",
                color: "Golden",
                storage: "4 & 64, 6 & 128",
                camera: "12px Back, And 4px Front",
                src: "4.jpg"
            },
            s9: {
                brand: "Samsung",
                model: "Samsung Galaxy S9",
                price: "100000 PKR",
                color: "Golden",
                storage: "4 & 64, 6 & 128",
                camera: "12px Back, And 4px Front",
                src: "5.jpg"
            },
            s10: {
                brand: "Samsung",
                model: "Samsung Galaxy S10",
                price: "100000 PKR",
                color: "Golden",
                storage: "4 & 64, 6 & 128",
                camera: "12px Back, And 4px Front",
                src: "6.jpg"
            }
        },
        oppo: {
            f8: {
                brand: "Oppo",
                model: "Oppo F8",
                price: "50000 PKR",
                color: "Golden",
                storage: "4 & 64, 6 & 128",
                camera: "12px Back, And 4px Front",
                src: "7.jpg"
            },
            f9: {
                brand: "Oppo",
                model: "Oppo F9",
                price: "75000 PKR",
                color: "Golden & White",
                storage: "4 & 64, 6 & 128",
                camera: "12px Back, And 4px Front",
                src: "8.jpg"
            },
            f10: {
                brand: "Oppo",
                model: "Oppo F10",
                price: "100000 PKR",
                color: "Cristal Shade",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "12px Back, And 4px Front",
                src: "9.jpg"
            }
        },
        infinix: {
            hot8: {
                brand: "Infinix",
                model: "Infinix Hote 8",
                price: "100000 PKR",
                color: "Cristal Shade",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "12px Back, And 4px Front",
                src: "10.jpg"
            },
            hot9: {
                brand: "Infinix",
                model: "Infinix Hote 9",
                price: "100000 PKR",
                color: "Cristal Shade",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "12px Back, And 4px Front",
                src: "11.jpg"
            },
            hot10: {
                brand: "Infinix",
                model: "Infinix Hote 10",
                price: "100000 PKR",
                color: "Cristal Shade",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "12px Back, And 4px Front",
                src: "12.jpg"
            }
        },
        poco: {
            pocox3: {
                brand: "Poco",
                model: "Poco X3",
                price: "100000 PKR",
                color: "Cristal Shade",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "12px Back, And 4px Front",
                src: "13.jpg"
            },
            Poco8c: {
                brand: "Poco",
                model: "Poco 8C",
                price: "100000 PKR",
                color: "Cristal Shade",
                storage: "4 & 64, 6 & 128, 6 & 256",
                camera: "12px Back, And 4px Front",
                src: "14.jpg"
            }
        }
    }
    var brandInput = document.getElementById("brandInput")
    var modelInput = document.getElementById("modelInput")







    function search() {
        var brand = brandInput.value.toLowerCase()
        var model = modelInput.value.toLowerCase()

            document.getElementById('mainDiv').innerHTML = ""
            var mainDiv = document.getElementById('mainDivSearch')
            var image = document.getElementById("image")
            image.src = phones[brand][model].src
            document.getElementById("brand").innerHTML = "Brand :" + " " + phones[brand][model].brand
            document.getElementById("name").innerHTML = "Model :" + " " + phones[brand][model].model
            document.getElementById("price").innerHTML = "Price :" + " " + phones[brand][model].price
            document.getElementById("storage").innerHTML = "Storage :" + " " + phones[brand][model].storage
            document.getElementById("camera").innerHTML = "Camera :" + " " + phones[brand][model].camera
            document.getElementById("color").innerHTML = "Color :" + " " + phones[brand][model].color

    }



















