var data = {
    Player: [
        { Name: "Nick", Points: 13 },
        { Name: "DOD", Points: 4 },
        { Name: "Pud", Points: 6},
        { Name: "Logan", Points:-17},
        { Name: "Vyanka", Points: 6},
        { Name: "Bridget", Points: 6}
    ],
    Driver: [
        {
            Number: 1,
            Name: "Max Verstappen",
            Team: "Red Bull",
            Points: 2
        },
        {
            Number: 2,
            Name: "Logan Sargeant",
            Team: "Williams"
        },
        {
            Number: 3,
            Name: "Daniel Ricciardo",
            Team: "RB"
        },
        {
            Number: 4,
            Name: "Lando Norris",
            Team: "McLaren",
            Points: 2
        },
        {
            Number: 10,
            Name: "Pierre Gasly",
            Team: "Alpine",
            Points: 2
        },
        {
            Number: 11,
            Name: "Sergio Perez",
            Team: "Red Bull",
            Points: 4
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Aston Martin",
            Points: 2
        },
        {
            Number: 16,
            Name: "Charles LeClerc",
            Team: "Ferrari",
            Points: 2
        },
        {
            Number: 18,
            Name: "Lance Stroll",
            Team: "Aston Martin"
        },
        {
            Number: 20,
            Name: "Kevin Magnussen",
            Team: "Haas",
            Points: 6
        },
        {
            Number: 22,
            Name: "Yuki Tsunoda",
            Team: "RB"
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams"
        },
        {
            Number: 24,
            Name: "Zhou Guanyu",
            Team: "Sauber"
        },
        {
            Number: 27,
            Name: "Nico Hulkenburg",
            Team: "Haas",
            Points: 2
        },
        {
            Number: 30,
            Name: "Liam Lawson",
            Team: "RB",
            Points: 0
        },
        {
            Number: 31,
            Name: "Esteban Ocon",
            Team: "Alpine",
            Points: 4
        },
        {
            Number: 38,
            Name: "Oliver Bearman",
            Team: "Ferrari/Haas"
        },
        {
            Number: 43,
            Name: "Franco Colapinto",
            Team: "Williams",
            Points: 2
        },
        {
            Number: 44,
            Name: "Lewis Hamilton",
            Team: "Mercedes",
            Points: 11
        },
        {
            Number: 50,
            Name: "Also Oliver Bearman lmao",
            Team: "Ferrari/Haas"
        },
        {
            Number: 55,
            Name: "Carlos Sainz",
            Team: "Ferrari",
            Points: 2
        },
        {
            Number: 61,
            Name: "Jack Doohan",
            Team: "Alpine",
            Points: 0
        },
        {
            Number: 63,
            Name: "George Russel",
            Team: "Mercedes",
            Points: 2
        },
        {
            Number: 77,
            Name: "Valterri Bottas",
            Team: "Sauber"
        },
        {
            Number: 81,
            Name: "Oscar Piastri",
            Team: "Mclaren",
            Points: 2
        }
    ],
    Race: [
        {
            Name: "Bahrain Grand Prix",
            Date: "2024-03-02",
            Finish: [1, 11, 55, 16, 63, 4, 44, 81, 14, 18, 24, 20, 3, 22, 23, 27, 31, 10, 77, 2],
            Picks: [
                { Player: "Nick", Drivers: [4, 44, 22] },
                { Player: "Bridget", Drivers: [63, 4, 81] },
                { Player: "DOD", Drivers: [1, 63, 22] },
                { Player: "Logan", Drivers: [44, 18, 10] },
                { Player: "Vyanka", Drivers: [55, 63, 81] },
                { Player: "Pud", Drivers: [55, 16, 10] }
            ],
            BonusPoints: "None"
           },
           {
            Name: "Saudi Arabian Grand Prix",
            Date: "2024-03-09",
            Finish: [1, 11, 16, 81, 14, 63, 38, 4, 44, 27, 23, 20, 31, 22, 2, 3, 77, 24, 18, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 44, 22] },
                { Player: "Bridget", Drivers: [81, 63, 4] },
                { Player: "DOD", Drivers: [1, 63, 22] },
                { Player: "Logan", Drivers: [38, 44, 23] },
                { Player: "Vyanka", Drivers: [81, 63, 38] },
                { Player: "Pud", Drivers: [16, 38, 10] }
            ],
            BonusPoints: "\n Ocon: +2 for most places gained \n Logan: -28 for last race's driver swap"

            },
            {
             Name: "Australian GP",
             Date: "2024-03-23",
             Finish: [55, 16, 4, 81, 11, 18, 22, 14, 27, 20, 23, 3, 10, 77, 24, 31, 63, 44, 1, 2],
             Picks: [
                 { Player: "Nick", Drivers: [4, 22, 44] },
                 { Player: "Bridget", Drivers: [4, 81, 63] },
                 { Player: "DOD", Drivers: [22, 63, 1] },
                 { Player: "Logan", Drivers: [55, 23, 44] },
                 { Player: "Vyanka", Drivers: [55, 81, 63] },
                 { Player: "Pud", Drivers: [55, 16, 10] }
             ],
             BonusPoints: "\n Hulkenburg: +2 points for most places gained"
 
             },
             {
              Name: "Japanese GP",
              Date: "2024-04-06",
              Finish: [1, 11, 55, 16, 4, 14, 63, 81, 44, 22, 27, 18, 20, 77, 31, 10, 2, 24, 3, 23],
              Picks: [
                  { Player: "Nick", Drivers: [4, 44, 22] },
                  { Player: "Bridget", Drivers: [4, 63, 81] },
                  { Player: "DOD", Drivers: [1, 63, 22] },
                  { Player: "Logan", Drivers: [55, 44, 23] },
                  { Player: "Vyanka", Drivers: [55, 63, 81] },
                  { Player: "Pud", Drivers: [55, 16, 10] }
              ],
              BonusPoints: "\n Magnussen: +2 Points for most places gained"
  
              },
              {
                Name: "Chinese GP Sprint",
                Date: "2024-04-20",
                Finish: [1, 44, 11, 16, 55, 4, 81, 63, 24, 20, 3, 77, 31, 18, 10, 22, 23, 2, 27, 14],
                Picks: [
                    { Player: "Nick", Drivers: [44, 4, 22] },
                    { Player: "Bridget", Drivers: [4, 81, 63] },
                    { Player: "DOD", Drivers: [1, 63, 22] },
                    { Player: "Logan", Drivers: [44, 55, 23] },
                    { Player: "Vyanka", Drivers: [55, 81, 63] },
                    { Player: "Pud", Drivers: [16, 55, 10] }
                ],
                BonusPoints: "\n As a reminder, this was a sprint so half points"
                },
              {
               Name: "Chinese GP",
               Date: "2024-04-21",
               Finish: [1, 4, 11, 16, 55, 63, 14, 81, 44, 27, 31, 23, 10, 24, 18, 20, 2, 3, 22, 77],
               Picks: [
                   { Player: "Nick", Drivers: [4, 44, 22] },
                   { Player: "Bridget", Drivers: [4, 63, 81] },
                   { Player: "DOD", Drivers: [1, 63, 22] },
                   { Player: "Logan", Drivers: [55, 44, 23] },
                   { Player: "Vyanka", Drivers: [55, 63, 81] },
                   { Player: "Pud", Drivers: [16, 55, 10] }
               ],
               BonusPoints: "\n Hamilton: +2 points for most places gained \n Hamilton: +5 points for spring/race differential"
   
               },
               {
                 Name: "Miami GP Sprint",
                 Date: "2024-05-04",
                 Finish: [1, 16, 11, 3, 55, 81, 27, 22, 10, 2, 24, 63, 23, 77, 31, 44, 14, 20, 18, 4],
                 Picks: [
                     { Player: "Nick", Drivers: [22, 44, 4] },
                     { Player: "Bridget", Drivers: [81, 63, 4] },
                     { Player: "DOD", Drivers: [1, 22, 63] },
                     { Player: "Logan", Drivers: [55, 23, 44] },
                     { Player: "Vyanka", Drivers: [55, 81, 63] },
                     { Player: "Pud", Drivers: [16, 55, 10] }
                 ],
                 BonusPoints: "\n As a reminder, this was a sprint so half points"
                 },
                 {
                  Name: "Miami GP",
                  Date: "2024-05-05",
                  Finish: [4, 1, 16, 11, 55, 44, 22, 63, 14, 31, 27, 10, 81, 24, 3, 77, 18, 23, 20, 2],
                  Picks: [
                      { Player: "Nick", Drivers: [4, 44, 22] },
                      { Player: "Bridget", Drivers: [4, 63, 81] },
                      { Player: "DOD", Drivers: [1, 22, 63] },
                      { Player: "Logan", Drivers: [55, 44, 23] },
                      { Player: "Vyanka", Drivers: [55, 63, 81] },
                      { Player: "Pud", Drivers: [16, 55, 10] }
                  ],
                  BonusPoints: "\n Alonso: +2 points for most places gained"
      
                  },
                  {
                   Name: "Emilia Romagna GP",
                   Date: "2024-05-19",
                   Finish: [1, 4, 16, 81, 55, 44, 63, 11, 18, 22, 27, 20, 3, 31, 24, 10, 2, 77, 14, 23],
                   Picks: [
                       { Player: "Nick", Drivers: [4, 44, 22] },
                       { Player: "Bridget", Drivers: [4, 81, 63] },
                       { Player: "DOD", Drivers: [1, 63, 22] },
                       { Player: "Logan", Drivers: [55, 44, 23] },
                       { Player: "Vyanka", Drivers: [81, 55, 63] },
                       { Player: "Pud", Drivers: [16, 55, 10] }
                   ],
                   BonusPoints: "\n Magnussen: +2 points for most places gained"
       
                   },
                   {
                    Name: "Monaco",
                    Date: "2024-05-26",
                    Finish: [16, 81, 55, 4, 63, 1, 44, 22, 23, 10, 14, 3, 77, 18, 2, 24, 31, 11, 27, 20],
                    Picks: [
                        { Player: "Nick", Drivers: [4, 44, 22] },
                        { Player: "Bridget", Drivers: [81, 4, 63] },
                        { Player: "DOD", Drivers: [63, 1, 22] },
                        { Player: "Logan", Drivers: [55, 44, 23] },
                        { Player: "Vyanka", Drivers: [81, 55, 63] },
                        { Player: "Pud", Drivers: [16, 55, 10] }
                    ],
                    BonusPoints: "\n Bottas : +2 points for most places gained"
        
                    },
                    {
                     Name: "Canadian GP",
                     Date: "2024-06-09",
                     Finish: [1, 4, 63, 44, 81, 14, 18, 3, 10, 31, 27, 20, 77, 22, 24, 55, 23, 11, 16, 2],
                     Picks: [
                         { Player: "Nick", Drivers: [4, 44, 22] },
                         { Player: "Bridget", Drivers: [4, 63, 81] },
                         { Player: "DOD", Drivers: [1, 63, 22] },
                         { Player: "Logan", Drivers: [44, 55, 23] },
                         { Player: "Vyanka", Drivers: [63, 81, 55] },
                         { Player: "Pud", Drivers: [10, 55, 16] }
                     ],
                     BonusPoints: "\n Ocon : +2 points for most places gained"
         
                     },
                     {
                      Name: "Spanish GP",
                      Date: "2024-06-23",
                      Finish: [1, 4, 44, 63, 16, 55, 81, 11, 10, 31, 27, 14, 24, 18, 3, 77, 20, 23, 22, 2],
                      Picks: [
                          { Player: "Nick", Drivers: [4, 44, 22] },
                          { Player: "Bridget", Drivers: [4, 63, 81] },
                          { Player: "DOD", Drivers: [1, 63, 22] },
                          { Player: "Logan", Drivers: [44, 55, 23] },
                          { Player: "Vyanka", Drivers: [63, 55, 81] },
                          { Player: "Pud", Drivers: [55, 10, 16] }
                      ],
                      BonusPoints: "\n Perez : +2 points for most places gained"
          
                      },
                      {
                       Name: "Austrian GP Sprint",
                       Date: "2024-06-29",
                       Finish: [1, 81, 4, 63, 55, 44, 16, 11, 20, 18, 31, 10, 22, 3, 14, 2, 23, 77, 27, 24],
                       Picks: [
                           { Player: "Nick", Drivers: [4, 44, 22] },
                           { Player: "Bridget", Drivers: [81, 4, 63] },
                           { Player: "DOD", Drivers: [1, 63, 22] },
                           { Player: "Logan", Drivers: [55, 44, 23] },
                           { Player: "Vyanka", Drivers: [81, 63, 55] },
                           { Player: "Pud", Drivers: [55, 16, 10] }
                       ],
                       BonusPoints: "As a reminder, this was a sprint so half points"
           
                       },
                       {
                        Name: "Austrian GP",
                        Date: "2024-06-30",
                        Finish: [63, 81, 55, 44, 1, 27, 11, 20, 3, 10, 16, 31, 18, 22, 23, 77, 24, 14, 2, 4],
                        Picks: [
                            { Player: "Nick", Drivers: [44, 22, 4] },
                            { Player: "Bridget", Drivers: [63, 81, 4] },
                            { Player: "DOD", Drivers: [63, 1, 22] },
                            { Player: "Logan", Drivers: [55, 44, 23] },
                            { Player: "Vyanka", Drivers: [63, 81, 55] },
                            { Player: "Pud", Drivers: [55, 10, 16] }
                        ],
                        BonusPoints: "\n Piastri : +2 points for most places gained"
            
                        },
                        {
                         Name: "British GP",
                         Date: "2024-07-07",
                         Finish: [44, 1, 4, 81, 55, 27, 18, 14, 23, 22, 2, 20, 3, 16, 77, 31, 11, 24, 63, 10],
                         Picks: [
                             { Player: "Nick", Drivers: [44, 4, 22] },
                             { Player: "Bridget", Drivers: [4, 81, 63] },
                             { Player: "DOD", Drivers: [1, 22, 63] },
                             { Player: "Logan", Drivers: [44, 55, 23] },
                             { Player: "Vyanka", Drivers: [81, 55, 63] },
                             { Player: "Pud", Drivers: [55, 16, 10] }
                         ],
                         BonusPoints: "\n Magnussen : +2 points for most places gained"
             
                         },
                         {
                          Name: "Hungarian GP",
                          Date: "2024-07-21",
                          Finish: [81, 4, 44, 16, 1, 55, 11, 63, 22, 18, 14, 3, 27, 23, 20, 77, 2, 31, 24, 10],
                          Picks: [
                              { Player: "Nick", Drivers: [4, 44, 22] },
                              { Player: "Bridget", Drivers: [81, 4, 63] },
                              { Player: "DOD", Drivers: [1, 22, 63] },
                              { Player: "Logan", Drivers: [44, 55, 23] },
                              { Player: "Vyanka", Drivers: [81, 55, 63] },
                              { Player: "Pud", Drivers: [16, 55, 10] }
                          ],
                          BonusPoints: "\n Perez/Russell: +2 points for most places gained"
              
                          },
                          {
                           Name: "Belgian GP",
                           Date: "2024-07-21",
                           Finish: [44, 81, 16, 1, 4, 55, 11, 14, 31, 3, 18, 23, 10, 20, 77, 22, 2, 27, 24, 63],
                           Picks: [
                               { Player: "Nick", Drivers: [44, 4, 22] },
                               { Player: "Bridget", Drivers: [81, 4, 63] },
                               { Player: "DOD", Drivers: [1, 22, 63] },
                               { Player: "Logan", Drivers: [44, 55, 23] },
                               { Player: "Vyanka", Drivers: [81, 55, 63] },
                               { Player: "Pud", Drivers: [16, 55, 10] }
                           ],
                           BonusPoints: "\n Verstappen : +2 points for most places gained"
               
                           },
                           {
                            Name: "Dutch GP",
                            Date: "2024-08-25",
                            Finish: [4, 1, 16, 81, 55, 11, 63, 44, 10, 14, 27, 3, 18, 23, 31, 2, 22, 20, 77, 24],
                            Picks: [
                                { Player: "Nick", Drivers: [4, 44, 22] },
                                { Player: "Bridget", Drivers: [4, 81, 63] },
                                { Player: "DOD", Drivers: [1, 63, 22] },
                                { Player: "Logan", Drivers: [55, 44, 23] },
                                { Player: "Vyanka", Drivers: [81, 55, 63] },
                                { Player: "Pud", Drivers: [16, 55, 10] }
                            ],
                            BonusPoints: "\n Hamilton and Sainz: +2 points for most places gained"
                
                            },
                            {
                             Name: "Italian GP",
                             Date: "2024-09-01",
                             Finish: [16, 81, 4, 55, 44, 1, 63, 11, 23, 20, 14, 43, 3, 31, 10, 77, 27, 24, 18, 22],
                             Picks: [
                                 { Player: "Nick", Drivers: [4, 44, 22] },
                                 { Player: "Bridget", Drivers: [4, 81, 63] },
                                 { Player: "DOD", Drivers: [1, 63, 22] },
                                 { Player: "Logan", Drivers: [55, 44, 23] },
                                 { Player: "Vyanka", Drivers: [81, 55, 63] },
                                 { Player: "Pud", Drivers: [16, 55, 10] }
                             ],
                             BonusPoints: "\n Franco Colapinto: +2 points for most places gained"
                 
                             },
                             {
                              Name: "Azerbaijan GP",
                              Date: "2024-09-15",
                              Finish: [81, 16, 63, 4, 1, 14, 23, 43, 44, 50, 27, 10, 3, 24, 31, 77, 11, 55, 18, 22],
                              Picks: [
                                  { Player: "Nick", Drivers: [4, 44, 22] },
                                  { Player: "Bridget", Drivers: [81, 63, 4] },
                                  { Player: "DOD", Drivers: [63, 1, 22] },
                                  { Player: "Logan", Drivers: [23, 44, 55] },
                                  { Player: "Vyanka", Drivers: [81, 63, 55] },
                                  { Player: "Pud", Drivers: [16, 10, 55] }
                              ],
                              BonusPoints: "\n Lando Norris: +2 points for most places gained"
                  
                              },
                              {
                               Name: "Singapore GP",
                               Date: "2024-09-15",
                               Finish: [4, 1, 81, 63, 16, 44, 55, 14, 27, 11, 43, 22, 31, 18, 24, 77, 10, 3, 20, 23],
                               Picks: [
                                   { Player: "Nick", Drivers: [4, 44, 22] },
                                   { Player: "Bridget", Drivers: [4, 81, 63] },
                                   { Player: "DOD", Drivers: [1, 63, 22] },
                                   { Player: "Logan", Drivers: [44, 55, 23] },
                                   { Player: "Vyanka", Drivers: [81, 63, 55] },
                                   { Player: "Pud", Drivers: [16, 55, 10] }
                               ],
                               BonusPoints: "\n Kevin Magnussen: +2 points for most places gained"
                   
                               },
                               {
                                Name: "US GP Sprint",
                                Date: "2024-10-19",
                                Finish: [1, 55, 4, 16, 63, 44, 20, 27, 11, 81, 22, 43, 18, 10, 31, 30, 23, 14, 24, 77],
                                Picks: [
                                    { Player: "Nick", Drivers: [4, 44, 22] },
                                    { Player: "Bridget", Drivers: [4, 63, 81] },
                                    { Player: "DOD", Drivers: [1, 63, 22] },
                                    { Player: "Logan", Drivers: [55, 44, 23] },
                                    { Player: "Vyanka", Drivers: [55, 63, 81] },
                                    { Player: "Pud", Drivers: [55, 16, 10] }
                                ],
                                BonusPoints: "NA"
                    
                                },
                                {
                                 Name: "United States GP",
                                 Date: "2024-10-20",
                                 Finish: [16, 55, 1, 4, 81, 63, 11, 27, 30, 43, 20, 10, 14, 22, 18, 23, 77, 31, 24, 44],
                                 Picks: [
                                     { Player: "Nick", Drivers: [4, 22, 44] },
                                     { Player: "Bridget", Drivers: [4, 81, 63] },
                                     { Player: "DOD", Drivers: [1, 63, 22] },
                                     { Player: "Logan", Drivers: [55, 23, 44] },
                                     { Player: "Vyanka", Drivers: [55, 81, 63] },
                                     { Player: "Pud", Drivers: [16, 55, 10] }
                                 ],
                                 BonusPoints: "\n George Russell: +2 points for most places gained"
                     
                                 },
                                 {
                                  Name: "Mexican GP",
                                  Date: "2024-10-27",
                                  Finish: [55, 4, 16, 44, 63, 1, 20, 81, 27, 10, 18, 43, 31, 77, 24, 30, 11, 14, 23, 22],
                                  Picks: [
                                      { Player: "Nick", Drivers: [4, 44, 22] },
                                      { Player: "Bridget", Drivers: [4, 63, 81] },
                                      { Player: "DOD", Drivers: [63, 1, 22] },
                                      { Player: "Logan", Drivers: [55, 44, 23] },
                                      { Player: "Vyanka", Drivers: [55, 63, 81] },
                                      { Player: "Pud", Drivers: [55, 16, 10] }
                                  ],
                                  BonusPoints: "\n Oscar Piastri: +2 points for most places gained"
                      
                                  },
                                  {
                                   Name: "Brazilian GP Sprint",
                                   Date: "2024-11-02",
                                   Finish: [4, 81, 1, 16, 55, 63, 10, 11, 30, 23, 44, 43, 31, 50, 22, 77, 24, 14, 18, 27],
                                   Picks: [
                                       { Player: "Nick", Drivers: [4, 44, 22] },
                                       { Player: "Bridget", Drivers: [4, 81, 63] },
                                       { Player: "DOD", Drivers: [1, 63, 22] },
                                       { Player: "Logan", Drivers: [55, 23, 44] },
                                       { Player: "Vyanka", Drivers: [81, 55, 63] },
                                       { Player: "Pud", Drivers: [16, 55, 10] }
                                   ],
                                   BonusPoints: "\n N/A"
                       
                                   },
                                   {
                                    Name: "Brazilian GP",
                                    Date: "2024-11-03",
                                    Finish: [1, 31, 10, 63, 16, 4, 22, 81, 30, 44, 11, 50, 77, 14, 24, 24, 55, 43, 23, 18, 27],
                                    Picks: [
                                        { Player: "Nick", Drivers: [4, 22, 44] },
                                        { Player: "Bridget", Drivers: [63, 4, 81] },
                                        { Player: "DOD", Drivers: [1, 63, 22] },
                                        { Player: "Logan", Drivers: [44, 55, 23] },
                                        { Player: "Vyanka", Drivers: [63, 81, 55] },
                                        { Player: "Pud", Drivers: [10, 16, 55] }
                                    ],
                                    BonusPoints: "\n Max Verstappen: +2 points for most places gained"
                        
                                    },
                                    {
                                     Name: "Las Vegas GP",
                                     Date: "2024-11-23",
                                     Finish: [63, 44, 55, 16, 1, 4, 81, 27, 22, 11, 14, 20, 24, 43, 18, 30, 31, 77, 23, 10],
                                     Picks: [
                                         { Player: "Nick", Drivers: [44, 4, 22] },
                                         { Player: "Bridget", Drivers: [63, 4, 81] },
                                         { Player: "DOD", Drivers: [63, 1, 22] },
                                         { Player: "Logan", Drivers: [44, 55, 23] },
                                         { Player: "Vyanka", Drivers: [63, 55, 81] },
                                         { Player: "Pud", Drivers: [55, 16, 10] }
                                     ],
                                     BonusPoints: "\n Hamilton: +2 points for most places gained"
                         
                                     },
                                     {
                                      Name: "Qatar GP Sprint",
                                      Date: "2024-12-01",
                                      Finish: [81, 4, 63, 55, 16, 44, 27, 1, 10, 24, 14, 77, 18, 31, 23, 30, 22, 43, 24, 11],
                                      Picks: [
                                          { Player: "Nick", Drivers: [4, 44, 22] },
                                          { Player: "Bridget", Drivers: [81, 4, 63] },
                                          { Player: "DOD", Drivers: [63, 1, 22] },
                                          { Player: "Logan", Drivers: [55, 44, 23] },
                                          { Player: "Vyanka", Drivers: [81, 63, 55] },
                                          { Player: "Pud", Drivers: [55, 16, 10] }
                                      ],
                                      BonusPoints: "\n N/A"
                          
                                      },
                                      {
                                       Name: "Qatar GP",
                                       Date: "2024-12-02",
                                       Finish: [1, 16, 81, 63, 10, 55, 14, 24, 20, 4, 77, 44, 22, 30, 23, 27, 11, 18, 43, 31],
                                       Picks: [
                                           { Player: "Nick", Drivers: [4, 44, 22] },
                                           { Player: "Bridget", Drivers: [81, 63, 4] },
                                           { Player: "DOD", Drivers: [1, 63, 22] },
                                           { Player: "Logan", Drivers: [55, 44, 23] },
                                           { Player: "Vyanka", Drivers: [81, 63, 55] },
                                           { Player: "Pud", Drivers: [16, 10, 55] }
                                       ],
                                       BonusPoints: "\n Gasly: +2  points for most places gained"
                           
                                       },
                                       {
                                        Name: "Abu Dhabi GP",
                                        Date: "2024-12-08",
                                        Finish: [4, 55, 16, 44, 63, 1, 10, 27, 14, 81, 23, 22, 24, 18, 61, 20, 30, 77, 43, 11],
                                        Picks: [
                                            { Player: "Nick", Drivers: [4, 44, 22] },
                                            { Player: "Bridget", Drivers: [4, 63, 81] },
                                            { Player: "DOD", Drivers: [63, 1, 22] },
                                            { Player: "Logan", Drivers: [55, 44, 23] },
                                            { Player: "Vyanka", Drivers: [55, 63, 81] },
                                            { Player: "Pud", Drivers: [55, 16, 10] }
                                        ],
                                        BonusPoints: "\n Leclerc: +2  points for most places gained"
                            
                                        }
    ]
}