/*let cliente = {
    "nombre": formCliente.get("nombre"),
    "apellido": formCliente.get("apellido"),
    "telefono": formCliente.get("telefono"),
    "email": formCliente.get("email")
};
let turno = {
    "cliente": cliente,
    "fecha": formCliente.get("fecha"),
    "hora": formCliente.get("hora")
};

let barbero = {
    "nombre": formCliente.get("barbero"),
    "turnos": [turno]
};*/

let listaBarberos = [
    {
        "nombre": "Nicolas",
        "turnos": [
            {
                "fecha": "2022-11-22",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre31",
                    "apellido": "Apellido31",
                    "telefono": 547858
                }
            },
            {
                "fecha": "2022-10-4",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre32",
                    "apellido": "Apellido32",
                    "telefono": 541189
                }
            },
            {
                "fecha": "2022-10-13",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre33",
                    "apellido": "Apellido33",
                    "telefono": 564906
                }
            },
            {
                "fecha": "2022-11-13",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre34",
                    "apellido": "Apellido34",
                    "telefono": 460846
                }
            },
            {
                "fecha": "2022-11-17",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre35",
                    "apellido": "Apellido35",
                    "telefono": 554999
                }
            },
            {
                "fecha": "2022-11-21",
                "hora": "9",
                "cliente": {
                    "nombre": "Nombre36",
                    "apellido": "Apellido36",
                    "telefono": 485048
                }
            },
            {
                "fecha": "2022-11-25",
                "hora": "12",
                "cliente": {
                    "nombre": "Nombre37",
                    "apellido": "Apellido37",
                    "telefono": 536200
                }
            },
            {
                "fecha": "2022-10-21",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre38",
                    "apellido": "Apellido38",
                    "telefono": 583398
                }
            },
            {
                "fecha": "2022-11-10",
                "hora": "18",
                "cliente": {
                    "nombre": "Nombre39",
                    "apellido": "Apellido39",
                    "telefono": 462603
                }
            },
            {
                "fecha": "2022-11-20",
                "hora": "9",
                "cliente": {
                    "nombre": "Nombre40",
                    "apellido": "Apellido40",
                    "telefono": 578164
                }
            },
            {
                "fecha": "2022-11-3",
                "hora": "11",
                "cliente": {
                    "nombre": "Nombre41",
                    "apellido": "Apellido41",
                    "telefono": 566623
                }
            },
            {
                "fecha": "2022-11-22",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre42",
                    "apellido": "Apellido42",
                    "telefono": 495847
                }
            },
            {
                "fecha": "2022-11-2",
                "hora": "13",
                "cliente": {
                    "nombre": "Nombre43",
                    "apellido": "Apellido43",
                    "telefono": 457676
                }
            },
            {
                "fecha": "2022-10-12",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre44",
                    "apellido": "Apellido44",
                    "telefono": 520345
                }
            },
            {
                "fecha": "2022-10-22",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre45",
                    "apellido": "Apellido45",
                    "telefono": 509775
                }
            },
            {
                "fecha": "2022-11-14",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre46",
                    "apellido": "Apellido46",
                    "telefono": 556466
                }
            },
            {
                "fecha": "2022-11-3",
                "hora": "12",
                "cliente": {
                    "nombre": "Nombre47",
                    "apellido": "Apellido47",
                    "telefono": 463378
                }
            },
            {
                "fecha": "2022-10-24",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre48",
                    "apellido": "Apellido48",
                    "telefono": 580387
                }
            },
            {
                "fecha": "2022-11-19",
                "hora": "18",
                "cliente": {
                    "nombre": "Nombre49",
                    "apellido": "Apellido49",
                    "telefono": 587756
                }
            },
            {
                "fecha": "2022-11-27",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre50",
                    "apellido": "Apellido50",
                    "telefono": 552181
                }
            },
            {
                "fecha": "2022-11-9",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre51",
                    "apellido": "Apellido51",
                    "telefono": 557307
                }
            },
            {
                "fecha": "2022-10-5",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre52",
                    "apellido": "Apellido52",
                    "telefono": 580687
                }
            },
            {
                "fecha": "2022-11-8",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre53",
                    "apellido": "Apellido53",
                    "telefono": 481655
                }
            },
            {
                "fecha": "2022-11-29",
                "hora": "11",
                "cliente": {
                    "nombre": "Nombre54",
                    "apellido": "Apellido54",
                    "telefono": 441978
                }
            },
            {
                "fecha": "2022-11-25",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre55",
                    "apellido": "Apellido55",
                    "telefono": 502587
                }
            },
            {
                "fecha": "2022-11-20",
                "hora": "11",
                "cliente": {
                    "nombre": "Nombre56",
                    "apellido": "Apellido56",
                    "telefono": 585164
                }
            },
            {
                "fecha": "2022-11-22",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre57",
                    "apellido": "Apellido57",
                    "telefono": 577516
                }
            },
            {
                "fecha": "2022-10-15",
                "hora": "17",
                "cliente": {
                    "nombre": "Nombre58",
                    "apellido": "Apellido58",
                    "telefono": 489727
                }
            },
            {
                "fecha": "2022-11-24",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre59",
                    "apellido": "Apellido59",
                    "telefono": 434060
                }
            },
            {
                "fecha": "2022-11-8",
                "hora": "10",
                "cliente": {
                    "nombre": "Nombre60",
                    "apellido": "Apellido60",
                    "telefono": 502625
                }
            }
        ]
    },
    {
        "nombre": "Ernesto",
        "turnos": [
            {
                "fecha": "2022-11-4",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre1",
                    "apellido": "Apellido1",
                    "telefono": 511852
                }
            },
            {
                "fecha": "2022-10-26",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre2",
                    "apellido": "Apellido2",
                    "telefono": 517449
                }
            },
            {
                "fecha": "2022-11-9",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre3",
                    "apellido": "Apellido3",
                    "telefono": 589339
                }
            },
            {
                "fecha": "2022-12-6",
                "hora": "12",
                "cliente": {
                    "nombre": "Nombre4",
                    "apellido": "Apellido4",
                    "telefono": 564778
                }
            },
            {
                "fecha": "2022-12-12",
                "hora": "19",
                "cliente": {
                    "nombre": "Nombre5",
                    "apellido": "Apellido5",
                    "telefono": 507810
                }
            },
            {
                "fecha": "2022-10-27",
                "hora": "13",
                "cliente": {
                    "nombre": "Nombre6",
                    "apellido": "Apellido6",
                    "telefono": 574989
                }
            },
            {
                "fecha": "2022-11-18",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre7",
                    "apellido": "Apellido7",
                    "telefono": 572992
                }
            },
            {
                "fecha": "2022-10-29",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre8",
                    "apellido": "Apellido8",
                    "telefono": 567597
                }
            },
            {
                "fecha": "2022-11-13",
                "hora": "19",
                "cliente": {
                    "nombre": "Nombre9",
                    "apellido": "Apellido9",
                    "telefono": 505186
                }
            },
            {
                "fecha": "2022-10-26",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre10",
                    "apellido": "Apellido10",
                    "telefono": 585529
                }
            },
            {
                "fecha": "2022-11-17",
                "hora": "19",
                "cliente": {
                    "nombre": "Nombre11",
                    "apellido": "Apellido11",
                    "telefono": 502599
                }
            },
            {
                "fecha": "2022-11-16",
                "hora": "9",
                "cliente": {
                    "nombre": "Nombre12",
                    "apellido": "Apellido12",
                    "telefono": 519518
                }
            },
            {
                "fecha": "2022-11-21",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre13",
                    "apellido": "Apellido13",
                    "telefono": 527701
                }
            },
            {
                "fecha": "2022-10-14",
                "hora": "19",
                "cliente": {
                    "nombre": "Nombre14",
                    "apellido": "Apellido14",
                    "telefono": 589040
                }
            },
            {
                "fecha": "2022-12-22",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre15",
                    "apellido": "Apellido15",
                    "telefono": 480204
                }
            },
            {
                "fecha": "2022-10-21",
                "hora": "10",
                "cliente": {
                    "nombre": "Nombre16",
                    "apellido": "Apellido16",
                    "telefono": 565727
                }
            },
            {
                "fecha": "2022-12-5",
                "hora": "18",
                "cliente": {
                    "nombre": "Nombre17",
                    "apellido": "Apellido17",
                    "telefono": 457347
                }
            },
            {
                "fecha": "2022-12-9",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre18",
                    "apellido": "Apellido18",
                    "telefono": 434502
                }
            },
            {
                "fecha": "2022-10-14",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre19",
                    "apellido": "Apellido19",
                    "telefono": 525950
                }
            },
            {
                "fecha": "2022-12-18",
                "hora": "13",
                "cliente": {
                    "nombre": "Nombre20",
                    "apellido": "Apellido20",
                    "telefono": 549039
                }
            },
            {
                "fecha": "2022-10-16",
                "hora": "10",
                "cliente": {
                    "nombre": "Nombre21",
                    "apellido": "Apellido21",
                    "telefono": 545707
                }
            },
            {
                "fecha": "2022-11-30",
                "hora": "11",
                "cliente": {
                    "nombre": "Nombre22",
                    "apellido": "Apellido22",
                    "telefono": 564103
                }
            },
            {
                "fecha": "2022-10-4",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre23",
                    "apellido": "Apellido23",
                    "telefono": 556335
                }
            },
            {
                "fecha": "2022-11-23",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre24",
                    "apellido": "Apellido24",
                    "telefono": 488302
                }
            },
            {
                "fecha": "2022-11-2",
                "hora": "19",
                "cliente": {
                    "nombre": "Nombre25",
                    "apellido": "Apellido25",
                    "telefono": 493594
                }
            },
            {
                "fecha": "2022-11-7",
                "hora": "12",
                "cliente": {
                    "nombre": "Nombre26",
                    "apellido": "Apellido26",
                    "telefono": 465094
                }
            },
            {
                "fecha": "2022-10-7",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre27",
                    "apellido": "Apellido27",
                    "telefono": 572976
                }
            },
            {
                "fecha": "2022-12-1",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre28",
                    "apellido": "Apellido28",
                    "telefono": 587300
                }
            },
            {
                "fecha": "2022-10-18",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre29",
                    "apellido": "Apellido29",
                    "telefono": 526414
                }
            },
            {
                "fecha": "2022-10-27",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre30",
                    "apellido": "Apellido30",
                    "telefono": 540867
                }
            }
        ]
    },
    {
        "nombre": "Pedro",
        "turnos": [
            {
                "fecha": "2022-11-28",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre62",
                    "apellido": "Apellido62",
                    "telefono": 510603
                }
            },
            {
                "fecha": "2022-11-9",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre63",
                    "apellido": "Apellido63",
                    "telefono": 550608
                }
            },
            {
                "fecha": "2022-11-19",
                "hora": "18",
                "cliente": {
                    "nombre": "Nombre64",
                    "apellido": "Apellido64",
                    "telefono": 553999
                }
            },
            {
                "fecha": "2022-11-23",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre65",
                    "apellido": "Apellido65",
                    "telefono": 467119
                }
            },
            {
                "fecha": "2022-11-6",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre66",
                    "apellido": "Apellido66",
                    "telefono": 556666
                }
            },
            {
                "fecha": "2022-11-22",
                "hora": "9",
                "cliente": {
                    "nombre": "Nombre67",
                    "apellido": "Apellido67",
                    "telefono": 475816
                }
            },
            {
                "fecha": "2022-11-22",
                "hora": "13",
                "cliente": {
                    "nombre": "Nombre68",
                    "apellido": "Apellido68",
                    "telefono": 589662
                }
            },
            {
                "fecha": "2022-11-15",
                "hora": "19",
                "cliente": {
                    "nombre": "Nombre69",
                    "apellido": "Apellido69",
                    "telefono": 579874
                }
            },
            {
                "fecha": "2022-11-6",
                "hora": "9",
                "cliente": {
                    "nombre": "Nombre70",
                    "apellido": "Apellido70",
                    "telefono": 549648
                }
            },
            {
                "fecha": "2022-11-13",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre71",
                    "apellido": "Apellido71",
                    "telefono": 481282
                }
            },
            {
                "fecha": "2022-11-8",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre72",
                    "apellido": "Apellido72",
                    "telefono": 520266
                }
            },
            {
                "fecha": "2022-11-4",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre73",
                    "apellido": "Apellido73",
                    "telefono": 445735
                }
            },
            {
                "fecha": "2022-11-23",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre74",
                    "apellido": "Apellido74",
                    "telefono": 454742
                }
            },
            {
                "fecha": "2022-11-14",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre75",
                    "apellido": "Apellido75",
                    "telefono": 568347
                }
            },
            {
                "fecha": "2022-11-10",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre76",
                    "apellido": "Apellido76",
                    "telefono": 515387
                }
            },
            {
                "fecha": "2022-11-8",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre77",
                    "apellido": "Apellido77",
                    "telefono": 500041
                }
            },
            {
                "fecha": "2022-11-29",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre78",
                    "apellido": "Apellido78",
                    "telefono": 526554
                }
            },
            {
                "fecha": "2022-11-15",
                "hora": "21",
                "cliente": {
                    "nombre": "Nombre79",
                    "apellido": "Apellido79",
                    "telefono": 493316
                }
            },
            {
                "fecha": "2022-11-30",
                "hora": "16",
                "cliente": {
                    "nombre": "Nombre80",
                    "apellido": "Apellido80",
                    "telefono": 484183
                }
            },
            {
                "fecha": "2022-11-28",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre81",
                    "apellido": "Apellido81",
                    "telefono": 496211
                }
            },
            {
                "fecha": "2022-11-10",
                "hora": "14",
                "cliente": {
                    "nombre": "Nombre82",
                    "apellido": "Apellido82",
                    "telefono": 529134
                }
            },
            {
                "fecha": "2022-11-2",
                "hora": "9",
                "cliente": {
                    "nombre": "Nombre83",
                    "apellido": "Apellido83",
                    "telefono": 474140
                }
            },
            {
                "fecha": "2022-11-12",
                "hora": "10",
                "cliente": {
                    "nombre": "Nombre84",
                    "apellido": "Apellido84",
                    "telefono": 441803
                }
            },
            {
                "fecha": "2022-11-4",
                "hora": "11",
                "cliente": {
                    "nombre": "Nombre85",
                    "apellido": "Apellido85",
                    "telefono": 469512
                }
            },
            {
                "fecha": "2022-11-6",
                "hora": "22",
                "cliente": {
                    "nombre": "Nombre86",
                    "apellido": "Apellido86",
                    "telefono": 451065
                }
            },
            {
                "fecha": "2022-11-8",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre87",
                    "apellido": "Apellido87",
                    "telefono": 527809
                }
            },
            {
                "fecha": "2022-11-18",
                "hora": "20",
                "cliente": {
                    "nombre": "Nombre88",
                    "apellido": "Apellido88",
                    "telefono": 472421
                }
            },
            {
                "fecha": "2022-11-20",
                "hora": "13",
                "cliente": {
                    "nombre": "Nombre89",
                    "apellido": "Apellido89",
                    "telefono": 518696
                }
            },
            {
                "fecha": "2022-11-27",
                "hora": "10",
                "cliente": {
                    "nombre": "Nombre90",
                    "apellido": "Apellido90",
                    "telefono": 461305
                }
            },
            {
                "fecha": "2022-11-29",
                "hora": "15",
                "cliente": {
                    "nombre": "Nombre91",
                    "apellido": "Apellido91",
                    "telefono": 582485
                }
            }
        ]
    }
]