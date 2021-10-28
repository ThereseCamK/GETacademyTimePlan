const model = {
   
    days: [
        'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag' , 'Fredag'
    ],
    timeSlots:['08.00 - 08.30', '08.30 - 09.00',
    '09.00 - 09.30', '09.30 - 10.00',
    '10.00 - 10.30', '10.30 - 11.00',
    '11.00 - 11.30', '11.30 - 12.00',
    '12.00 - 12.30', '12.30 - 13.00',
    '13.00 - 13.30', '13.30 - 14.00',
    '14.00 - 14.30', '14.30 - 15.00',
    '15.00 - 15.30', '15.30 - 16.00'
 ],
    moduleOptions:[
        {
            id: 0,
            value: null, 
            txt: 'Alle Modulene'
        },
        {
            id:1,
            value: 'Modul 1', 
            txt: 'Modul 1'
        },
        {
            id: 2,
            value: 'Modul 2', 
            txt: 'Modul 2'
        },
        {
            id: 3,
            value: 'Modul 3', 
            txt: 'Modul 3'
        },
    ],
    teacherOptions:[
        {
            id: 1,
            value: null,
            txt: 'Alle Lærerene'
        },
        {
            id: 2,
            value: 'Joakim',
            txt: 'Joakim'
        },
        {
            id: 3,
            value: 'Bjørnar',
            txt: 'Bjørnar'
        },
        {
            id: 4, 
            value: 'Linn',
            txt: 'Linn'
        },
        {
            id: 5,
            value: 'Erlend',
            txt: 'Erlend'
        },
        {
            id: 6,
            value: 'Marie',
            txt: 'Marie'
        },
        {
            id: 7,
            value: 'Therese',
            txt: 'Therese'
        },
        {
            id: 8,
            value: 'Terje',
            txt: 'Terje'
        },
    ],
    events:[

        //Tirsdag undervisning modul 1 10.00-11.00
        {
            type: 'Undervisning', //navn på ting
            time:{
                day: 1,// index i array over dager
                timeSlot: [5, 6], //plass i array timeSlots
            },
            module: 1, //id til modul 
            teachers:[7]//id til lærer

        },
    ],
   
   
}