const model = {
   selectedOption: 1,
   selected: ' ',
    days: [
       '<tt>Tid</tt>', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag' , 'Fredag'
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

    options:[
        // {id: 0, txt: 'Alt'},
        {id: 1, txt: 'Modul 1'},
        {id: 2, txt: 'Modul 2'},
        {id: 3, txt: 'Modul 3'},
        // {id: 4, txt: 'Alle Lærerene'},
        {id: 5, txt: 'Joakim'},
        {id: 6, txt: 'Bjørnar'},
        {id: 7, txt: 'Linn'},
        {id: 8, txt: 'Erlend'},
        {id: 9, txt: 'Marie'},
        {id: 10, txt: 'Therese'},
        {id: 11, txt: 'Terje'},

    ],
    events:[

        //Tirsdag undervisning modul 1 10.00-11.00
      
        {
            type: 'Undervisning Modul 1', //navn på ting
            time:{
                day: 2,// index i array over dager
                timeSlot: [4, 5], //plass i array timeSlots
            },
            option:[1, 10]//id til modul og lærer
            
        },
      
        //
        {
            type: 'TeamOppgave Modul 1' , //navn på ting
            time:{
                day: 2,// index i array over dager
                timeSlot: [12,13], //plass i array timeSlots
            },
            option:[1, 10,]//id til modul og lærer
            
        },
        {
            type: 'Undervisning Modul 1', //navn på ting
            time:{
                day: 5,// index i array over dager
                timeSlot: [4,5], //plass i array timeSlots
            },
            option:[1, 10,]//id til modul og lærer
            
        },
        {
            type: 'Oppsummering Modul 1', //navn på ting
            time:{
                day: 5,// index i array over dager
                timeSlot: [8,9], //plass i array timeSlots
            },
            option:[1, 10,]//id til modul og lærer
            
        },
        {
            type: 'Oppsummering Modul 2', //navn på ting
            time:{
                day: 5,// index i array over dager
                timeSlot: [4], //plass i array timeSlots
            },
            option:[2, 7,6]//id til modul og lærer
            
        },
        {
            //modul 3
            type: 'CodeReview Modul 3', //navn på ting
            time:{
                day: 3,// index i array over dager
                timeSlot: [10,11], //plass i array timeSlots
            },
            option:[8,5, 3]//id til modul og lærer
            
        },
        {
            //modul 3
            type: 'Undervisning Modul 3', //navn på ting
            time:{
                day: 2,// index i array over dager
                timeSlot: [4,5, 6], //plass i array timeSlots
            },
            option:[5, 11,3,8]//id til modul og lærer
            
        },
        {
            //modul 3
            type: 'Undervisning Modul 3', //navn på ting
            time:{
                day: 5,// index i array over dager
                timeSlot: [4,5, 6], //plass i array timeSlots
            },
            option:[5, 9, 3, 8]//id til modul og lærer
            
        },
        {
            type: 'Oppsummering Modul 3', //navn på ting
            time:{
                day: 5,// index i array over dager
                timeSlot: [8,9], //plass i array timeSlots
            },
            option:[3, 5, 8]//id til modul og lærer
            
        },

        //EGENTID 
        {
            type: '<tt>EGENTID T/B-(oddetall)<hr>EGENTID J/L-(partall)</tt>', //navn på ting
            time:{
                day: 1,// index i array over dager
                timeSlot: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], //plass i array timeSlots
            },
            option:[10, 6, 7, 5]//id til modul og lærer
            
        },
        {
            type: '<tt>EGENTID J/L-(oddetall)<hr>EGENTID T/B-(partall)</tt>', //navn på ting
            time:{
                day: 4,// index i array over dager
                timeSlot: [0,1,2,3,4,5,6,7,11,12,13,14,15], //plass i array timeSlots
            },
            option:[10, 6, 7, 5]//id til modul og lærer
            
        },
        {
            type: 'TRELLOMØTE - KODELÆRERE', //navn på ting
            time:{
                day: 4,// index i array over dager
                timeSlot: [8,9,10], //plass i array timeSlots
            },
            option:[10, 6, 7, 5, 11, 9, 8]//id til modul og lærer
            
        },
        {
            type: '<div style="color:white;">Chorei</div>', //navn på ting
            time:{
                day: 1,// index i array over dager
                timeSlot: [2], //plass i array timeSlots
            },
            option:[1,2,3,5,6,7,8,9,10,11]//id til modul og lærer
            
        },
        {
            type: '<div style="color:white;">Chorei</div>', //navn på ting
            time:{
                day: 2,// index i array over dager
                timeSlot: [2], //plass i array timeSlots
            },
            option:[1,2,3,5,6,7,8,9,10,11]//id til modul og lærer
            
        },
        {
            type: '<div style="color:white;">Chorei</div>', //navn på ting
            time:{
                day: 4,// index i array over dager
                timeSlot: [2,3], //plass i array timeSlots
            },
            option:[1,2,3,5,6,7,8,9,10,11]//id til modul og lærer
            
        },
        {
            type: '<div style="color:white;">Chorei</div>', //navn på ting
            time:{
                day: 5,// index i array over dager
                timeSlot: [2], //plass i array timeSlots
            },
            option:[1,2,3,5,6,7,8,9,10,11]//id til modul og lærer
            
        },
        {
            type: '<div >GET-IT</div>', //navn på ting
            time:{
                day: 3,// index i array over dager
                timeSlot: [0,1,2,3], //plass i array timeSlots
            },
            option:[8]//id til modul og lærer
            
        },
        {
            type: '<div >GET-IT</div>', //navn på ting
            time:{
                day: 3,// index i array over dager
                timeSlot: [14,15], //plass i array timeSlots
            },
            option:[8]//id til modul og lærer
            
        },
        {
            type: '<div >MORGEN MØTE</div>', //navn på ting
            time:{
                day: 1,// index i array over dager
                timeSlot: [3], //plass i array timeSlots
            },
            option:[1, 2, 3]//id til modul og lærer
            
        },
        {
            type: '<div >MORGEN MØTE</div>', //navn på ting
            time:{
                day: 2,// index i array over dager
                timeSlot: [3], //plass i array timeSlots
            },
            option:[1, 2, 3]//id til modul og lærer
            
        },
        {
            type: '<div >MORGEN MØTE</div>', //navn på ting
            time:{
                day: 3,// index i array over dager
                timeSlot: [2], //plass i array timeSlots
            },
            option:[1, 2, 3]//id til modul og lærer
            
        },
        {
            type: '<div >MORGEN MØTE</div>', //navn på ting
            time:{
                day: 4,// index i array over dager
                timeSlot: [4], //plass i array timeSlots
            },
            option:[1, 2, 3]//id til modul og lærer
            
        },
        {
            type: '<div >MORGEN MØTE</div>', //navn på ting
            time:{
                day: 5,// index i array over dager
                timeSlot: [3], //plass i array timeSlots
            },
            option:[1, 2, 3]//id til modul og lærer
            
        },
    ],
   
   
}