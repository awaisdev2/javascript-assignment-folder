function showOnBrowser(){
    const pcs = [
        {
            name: 'Dell',
            model: 'X5',
            price: '500$',
            condition: 'new',
            gpu: 'RTX 600',
            isStarted: false,
            storage: 'Up to 312 GB PCIe SSD',
            start: function(){
                const onStart = "your pc is running"
                return onStart
            },
            stop: function(){
                const onStop = "your pc is logging off"
               return onStop
            },
            hardware: {
                name: 'intel',
                warranty: '1 year',
                getWarranty: function (){
                    return this.warranty
                },
                setWarranty: function (info) {
                   return this.warranty = info
                }
            }
        },
        {
            name: 'hp',
            model: 'Envy x360',
            price: '700$',
            condition: '1 year used',
            gpu: 'GTX 1650',
            isStarted: false,
            storage: 'Up to 420 GB PCIe SSD',
            start: function(){
                const onStart = "hp Envy x360 starts running"
                return onStart
            },
            stop: function(){
                const onStop = "hp Envy x360 is logging off"
               return onStop
            },
            hardware: {
                name: 'Intel® Core™ i7',
                warranty: '1 year',
                getWarranty: function (){
                    return this.warranty + " warranty"
                },
                setWarranty: function (info) {
                   return this.warranty = info
                }
            }
        },
        {
            name: 'lenovo',
            model: 'M90a',
            price: '400$',
            condition: 'untouch',
            hasGraphicCard: false,
            isStarted: false,
            storage: 'Up to 512 GB PCIe SSD',
            start: function(){
                const onStart = "lenovo M90a starts running"
                return onStart
            },
            stop: function(){
                const onStop = "lenovo M90a is logging off"
               return onStop
            },
            hardware: {
                name: '10th Generation Intel® Core™ i5-10400',
                warranty: '1 year',
                getWarranty: function (){
                    return this.warranty + " warranty"
                },
                setWarranty: function (info) {
                   return this.warranty = info
                }
            }
        },
        {
            name: 'apple',
            model: 'iMac24',
            price: '1200$',
            condition: 'new',
            gpu: 'GTX 1650',
            isStarted: false,
            storage: 'Up to 2 TB',
            start: function(){
                const onStart = "apple iMac24 starts running"
                return onStart
            },
            stop: function(){
                const onStop = "apple iMac24 is logging off"
               return onStop
            },
            hardware: {
                name: 'M1 chip 8-core',
                warranty: '1 year',
                getWarranty: function (){
                    return this.warranty + " warranty"
                },
                setWarranty: function (info) {
                   return this.warranty = info
                }
            }
        },
        {
            name: 'aspire',
            model: 'C27',
            price: '900$',
            condition: 'new',
            hasGraphicCard: false,
            isStarted: false,
            storage: 'Up to 512 GB',
            start: function(){
                const onStart = "aspire C27 starts running"
                return onStart
            },
            stop: function(){
                const onStop = "aspire C27 is logging off"
               return onStop
            },
            hardware: {
                name: 'MX330',
                warranty: '1 year',
                getWarranty: function (){
                    return this.warranty + " warranty"
                },
                setWarranty: function (info) {
                   return this.warranty = info
                }
            }
        }
    ]
    document.getElementById('body').innerHTML = "Now open your console to see array"
    // console.log(pcs)

    console.log(pcs[0].start())
    console.log(pcs[0].stop())
    console.log(pcs[0].hardware.getWarranty())
    console.log(pcs[0].hardware.setWarranty("if new then 2 years warranty"))

    console.log(pcs[1].start())
    console.log(pcs[1].stop())
    console.log(pcs[1].hardware.getWarranty())
    console.log(pcs[1].hardware.setWarranty("if new then 2 years warranty"))

    console.log(pcs[2].start())
    console.log(pcs[2].stop())
    console.log(pcs[2].hardware.getWarranty())
    console.log(pcs[2].hardware.setWarranty("if new then 2 years warranty"))

    console.log(pcs[3].start())
    console.log(pcs[3].stop())
    console.log(pcs[3].hardware.getWarranty())
    console.log(pcs[3].hardware.setWarranty("if new then 2 years warranty"))

    console.log(pcs[4].start())
    console.log(pcs[4].stop())
    console.log(pcs[4].hardware.getWarranty())
    console.log(pcs[4].hardware.setWarranty("if new then 2 years warranty"))

    return
}